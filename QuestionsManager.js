const questionArea = document.getElementById('question-area');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsArea = document.getElementById('results-area');
const scoreEl = document.getElementById('score');
const reviewContainer = document.getElementById('review-container');

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null).map(() => []);

function clearOptionHighlights(container) {
    const optionDivs = container.querySelectorAll('.options-container > div');
    optionDivs.forEach(div => {
        div.classList.remove('instant-correct', 'instant-incorrect', 'correct-answer-reveal', 'checkbox-correct-pick', 'checkbox-incorrect-pick');
    });
}

function handleOptionClick(questionIndex, clickedOptionInput) {
    if (clickedOptionInput.disabled && !questions[questionIndex].isMultiSelect) {
        // If radio is already disabled from a previous answer for this question
        return;
    }

    const question = questions[questionIndex];

    if (!question.isMultiSelect) { // Radio buttons (single-choice)
        // Clear previous highlights for this specific question before applying new ones
        const allOptionDivsForThisQ = optionsContainer.querySelectorAll('.options-container > div');
        allOptionDivsForThisQ.forEach(div => {
            div.classList.remove('instant-correct', 'instant-incorrect', 'correct-answer-reveal');
        });

        const selectedValue = clickedOptionInput.value;
        const isCorrect = question.correctAnswers[0] === selectedValue;

        // Highlight clicked option's parent div
        clickedOptionInput.parentElement.classList.add(isCorrect ? 'instant-correct' : 'instant-incorrect');

        if (!isCorrect) {
            // Find and highlight the correct answer's parent div
            const correctOptionValue = question.correctAnswers[0];
            const correctInput = optionsContainer.querySelector(`input[type="radio"][value="${correctOptionValue}"]`);
            if (correctInput) {
                correctInput.parentElement.classList.add('correct-answer-reveal');
            }
        }

        // Disable all radio buttons for this question
        const radioInputs = optionsContainer.querySelectorAll(`input[type="radio"][name="q${questionIndex}"]`);
        radioInputs.forEach(radio => radio.disabled = true);

        // Save this "finalized" answer
        userAnswers[questionIndex] = [selectedValue];

    } else { // Checkboxes (multi-choice)
        const checkboxValue = clickedOptionInput.value;
        const isThisCheckboxCorrect = question.correctAnswers.includes(checkboxValue);
        const parentDiv = clickedOptionInput.parentElement;

        // Remove previous pick-specific classes for this checkbox before adding new one
        parentDiv.classList.remove('checkbox-correct-pick', 'checkbox-incorrect-pick');

        if (clickedOptionInput.checked) {
            parentDiv.classList.add(isThisCheckboxCorrect ? 'checkbox-correct-pick' : 'checkbox-incorrect-pick');
        }
        // userAnswers for checkboxes is updated by saveCurrentAnswer() on next/prev/submit
    }
}


function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextEl.textContent = question.text;
    optionsContainer.innerHTML = ''; // Clear previous options

    const inputType = question.isMultiSelect ? 'checkbox' : 'radio';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        const input = document.createElement('input');
        input.type = inputType;
        input.name = `q${currentQuestionIndex}`;
        input.value = option.value;
        input.id = `q${currentQuestionIndex}_opt${option.value}`;

        // Attach click handler for instant feedback
        input.onclick = (event) => handleOptionClick(currentQuestionIndex, event.target);

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = option.text;

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);

        // --- Re-apply states and highlights if navigating back/forth ---
        if (!question.isMultiSelect && userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].length > 0) {
            // For previously answered single-choice questions
            const answeredValue = userAnswers[currentQuestionIndex][0];
            input.disabled = true; // Disable all radios for an answered question
            if (option.value === answeredValue) {
                input.checked = true;
                const wasCorrect = question.correctAnswers[0] === answeredValue;
                optionDiv.classList.add(wasCorrect ? 'instant-correct' : 'instant-incorrect');
            }
            if (question.correctAnswers[0] === answeredValue === false && option.value === question.correctAnswers[0]) {
                 // If answered incorrectly, also highlight the correct one
                optionDiv.classList.add('correct-answer-reveal');
            }
        } else if (question.isMultiSelect && userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].length > 0) {
            // For previously interacted-with multi-choice questions
            const currentSelections = userAnswers[currentQuestionIndex];
            if (currentSelections.includes(option.value)) {
                input.checked = true;
                const isThisCheckboxCorrect = question.correctAnswers.includes(option.value);
                optionDiv.classList.add(isThisCheckboxCorrect ? 'checkbox-correct-pick' : 'checkbox-incorrect-pick');
            }
        }
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function saveCurrentAnswer() {
    const question = questions[currentQuestionIndex];

    // For single-select (radio), if already answered via handleOptionClick, userAnswers is set.
    if (!question.isMultiSelect) {
        const firstRadio = optionsContainer.querySelector(`input[type="radio"][name="q${currentQuestionIndex}"]`);
        if (firstRadio && firstRadio.disabled) { // Check if it was finalized
            return; // Answer already recorded by handleOptionClick
        }
    }

    // This part is now primarily for multi-select questions,
    // or for single-select if not answered via click (though that shouldn't happen with new logic)
    const selectedOptions = [];
    const inputs = optionsContainer.querySelectorAll(`input[name="q${currentQuestionIndex}"]`);
    inputs.forEach(input => {
        if (input.checked) {
            selectedOptions.push(input.value);
        }
    });
    userAnswers[currentQuestionIndex] = selectedOptions;
}


function nextQuestion() {
    saveCurrentAnswer(); // Save current state, especially for multi-select
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    saveCurrentAnswer(); // Save current state, especially for multi-select
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function submitQuiz() {
    saveCurrentAnswer(); // Save answer for the last question
    questionArea.style.display = 'none';
    resultsArea.style.display = 'block';

    let score = 0;
    reviewContainer.innerHTML = '<h3>Review Your Answers:</h3>';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswers = question.correctAnswers;
        let isCorrect = false;

        if (question.isMultiSelect) {
            isCorrect = correctAnswers.length === userAnswer.length &&
                        correctAnswers.every(val => userAnswer.includes(val));
        } else {
            isCorrect = userAnswer.length === 1 && correctAnswers.includes(userAnswer[0]);
        }

        if (isCorrect) {
            score++;
        }

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <h4>Question ${index + 1}: ${question.text}</h4>
            <p class="user-choice">Your answer(s): ${userAnswer.length > 0 ? userAnswer.join(', ') : 'Not answered'}</p>
            <p class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                Correct answer(s): ${correctAnswers.join(', ')}
            </p>
            <hr>
        `;
        reviewContainer.appendChild(reviewItem);
    });

    scoreEl.textContent = `You scored ${score} out of ${questions.length}.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null).map(() => []);
    resultsArea.style.display = 'none';
    questionArea.style.display = 'block';
    displayQuestion();
}

// Initial display
displayQuestion();