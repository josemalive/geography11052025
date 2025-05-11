// questions.js

const questions = [
    // Section 1: The Origins of Rome & The Monarchy (Pages 2-3)
    {
        id: "q1",
        text: "According to the presentation, in which century was the city of Rome founded?",
        options: [
            { text: "6th century BC", value: "A" },
            { text: "8th century BC", value: "B" },
            { text: "1st century AD", value: "C" },
            { text: "5th century BC", value: "D" }
        ],
        correctAnswers: ["B"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q2",
        text: "On the banks of which river was Rome founded?",
        options: [
            { text: "The Nile River", value: "A" },
            { text: "The Danube River", value: "B" },
            { text: "The Tiber River", value: "C" },
            { text: "The Po River", value: "D" }
        ],
        correctAnswers: ["C"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q3",
        text: "The region where Rome was founded was called:",
        options: [
            { text: "Etruria", value: "A" },
            { text: "Gaul", value: "B" },
            { text: "Latium", value: "C" },
            { text: "Samnium", value: "D" }
        ],
        correctAnswers: ["C"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q4",
        text: "The inhabitants of the region where Rome was founded were called:",
        options: [
            { text: "Etruscans", value: "A" },
            { text: "Greeks", value: "B" },
            { text: "Latins", value: "C" },
            { text: "Celts", value: "D" }
        ],
        correctAnswers: ["C"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q5",
        text: "Who conquered the area of Latium in the 6th century BC?",
        options: [
            { text: "The Greeks", value: "A" },
            { text: "The Carthaginians", value: "B" },
            { text: "The Etruscans", value: "C" },
            { text: "The Gauls", value: "D" }
        ],
        correctAnswers: ["C"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q6",
        text: "How did the Etruscans organize the territory they conquered, including Rome?",
        options: [
            { text: "Into large kingdoms", value: "A" },
            { text: "Into city-states", value: "B" },
            { text: "As a single empire", value: "C" },
            { text: "Into democratic republics", value: "D" }
        ],
        correctAnswers: ["B"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q7",
        text: "What was Rome's main economic activity mentioned for its early period?",
        options: [
            { text: "Agriculture", value: "A" },
            { text: "Mining", value: "B" },
            { text: "Maritime trade", value: "C" },
            { text: "Craftsmanship", value: "D" }
        ],
        correctAnswers: ["C"], // Page 2
        isMultiSelect: false
    },
    {
        id: "q8",
        text: "From its foundation until 509 BC, Rome was a:",
        options: [
            { text: "Republic", value: "A" },
            { text: "Empire", value: "B" },
            { text: "Monarchy", value: "C" },
            { text: "Democracy", value: "D" }
        ],
        correctAnswers: ["C"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q9",
        text: "How many kings did Rome have during its monarchy period?",
        options: [
            { text: "Five", value: "A" },
            { text: "Seven", value: "B" },
            { text: "Ten", value: "C" },
            { text: "Three", value: "D" }
        ],
        correctAnswers: ["B"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q10",
        text: "According to the text, the first four kings of Rome were:",
        options: [
            { text: "Etruscans", value: "A" },
            { text: "Greeks", value: "B" },
            { text: "Latins", value: "C" },
            { text: "Sabines", value: "D" }
        ],
        correctAnswers: ["C"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q11",
        text: "The final three kings of Rome were:",
        options: [
            { text: "Latins", value: "A" },
            { text: "Etruscans", value: "B" },
            { text: "Carthaginians", value: "C" },
            { text: "Samnites", value: "D" }
        ],
        correctAnswers: ["B"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q12",
        text: "What was the name of the advisory assembly that helped the king rule?",
        options: [
            { text: "The Parliament", value: "A" },
            { text: "The Congress", value: "B" },
            { text: "The Senate", value: "C" },
            { text: "The Council", value: "D" }
        ],
        correctAnswers: ["C"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q13",
        text: "Did the Senate during the monarchy have decision-making powers?",
        options: [
            { text: "Yes, it made all the important decisions.", value: "A" },
            { text: "No, it was only an advisory assembly.", value: "B" },
            { text: "Yes, but only for matters of war.", value: "C" },
            { text: "Sometimes, depending on the king.", value: "D" }
        ],
        correctAnswers: ["B"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q14",
        text: "Which were the two main social groups during the monarchy? (Select all that apply)",
        options: [
            { text: "Slaves", value: "A" },
            { text: "Patricians", value: "B" },
            { text: "Merchants", value: "C" },
            { text: "Plebeians", value: "D" }
        ],
        correctAnswers: ["B", "D"], // Page 3
        isMultiSelect: true
    },
    {
        id: "q15",
        text: "Which social group during the monarchy was a minority that controlled the land and had citizenship rights?",
        options: [
            { text: "Plebeians", value: "A" },
            { text: "Slaves", value: "B" },
            { text: "Patricians", value: "C" },
            { text: "Etruscans", value: "D" }
        ],
        correctAnswers: ["C"], // Page 3
        isMultiSelect: false
    },
    {
        id: "q16",
        text: "The Plebeians were made up of: (Select all that apply)",
        options: [
            { text: "Kings and nobles", value: "A" },
            { text: "Peasants", value: "B" },
            { text: "Traders", value: "C" },
            { text: "Artisans", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 3
        isMultiSelect: true
    },
    {
        id: "q17",
        text: "Did the Plebeians have political power during the monarchy?",
        options: [
            { text: "Yes, they shared power with the Patricians.", value: "A" },
            { text: "No, this social group had no political power.", value: "B" },
            { text: "Yes, but only in local matters.", value: "C" },
            { text: "Only if they were very wealthy.", value: "D" }
        ],
        correctAnswers: ["B"], // Page 3
        isMultiSelect: false
    },

    // Section 2: The Republic (Pages 4-6)
    {
        id: "q18",
        text: "In what year was the Roman Republic established?",
        options: [
            { text: "753 BC", value: "A" },
            { text: "509 BC", value: "B" },
            { text: "27 BC", value: "C" },
            { text: "476 AD", value: "D" }
        ],
        correctAnswers: ["B"], // Page 4
        isMultiSelect: false
    },
    {
        id: "q19",
        text: "The Republic was established after which event?",
        options: [
            { text: "The death of Julius Caesar", value: "A" },
            { text: "The Punic Wars", value: "B" },
            { text: "The Etruscan kings were expelled", value: "C" },
            { text: "A major slave revolt", value: "D" }
        ],
        correctAnswers: ["C"], // Page 4
        isMultiSelect: false
    },
    {
        id: "q20",
        text: "What were the Roman Assemblies?",
        options: [
            { text: "Meetings of the Senate", value: "A" },
            { text: "Religious festivals", value: "B" },
            { text: "Citizen assemblies", value: "C" },
            { text: "Military councils", value: "D" }
        ],
        correctAnswers: ["C"], // Page 4
        isMultiSelect: false
    },
    {
        id: "q21",
        text: "What did the Roman Assemblies do? (Select all that apply)",
        options: [
            { text: "Elected people for public office", value: "A" },
            { text: "Commanded the army directly", value: "B" },
            { text: "Passed legislation", value: "C" },
            { text: "Made decisions on war and peace", value: "D" }
        ],
        correctAnswers: ["A", "C", "D"], // Page 4
        isMultiSelect: true
    },
    {
        id: "q22",
        text: "The Senate during the Republic was formed by:",
        options: [
            { text: "300 Plebeians", value: "A" },
            { text: "100 elected citizens", value: "B" },
            { text: "300 Patricians", value: "C" },
            { text: "The two magistrates", value: "D" }
        ],
        correctAnswers: ["C"], // Page 4
        isMultiSelect: false
    },
    {
        id: "q23",
        text: "What was a former role of the Senate before it became a key institution in the Republic?",
        options: [
            { text: "A religious body", value: "A" },
            { text: "An advisory body (during the monarchy)", value: "B" },
            { text: "A court of law", value: "C" },
            { text: "A treasury department", value: "D" }
        ],
        correctAnswers: ["B"], // Page 4 (refers to its role in monarchy page 3)
        isMultiSelect: false
    },
    {
        id: "q24",
        text: "What did the Senate deal with during the Republic? (Select all that apply)",
        options: [
            { text: "Collecting taxes directly", value: "A" },
            { text: "Foreign policy", value: "B" },
            { text: "Ratified the decisions of the Assemblies", value: "C" },
            { text: "Appointing the kings", value: "D" }
        ],
        correctAnswers: ["B", "C"], // Page 4
        isMultiSelect: true
    },
    {
        id: "q25",
        text: "Who were the magistrates in the Roman Republic?",
        options: [
            { text: "Judges appointed for life", value: "A" },
            { text: "Military generals only", value: "B" },
            { text: "Two people elected annually by the Assemblies", value: "C" },
            { text: "The leaders of the Senate", value: "D" }
        ],
        correctAnswers: ["C"], // Page 4
        isMultiSelect: false
    },
    {
        id: "q26",
        text: "At the beginning of the Republic, who monopolised power?",
        options: [
            { text: "The Plebeians", value: "A" },
            { text: "The Etruscans", value: "B" },
            { text: "The Patricians", value: "C" },
            { text: "The Army", value: "D" }
        ],
        correctAnswers: ["C"], // Page 5
        isMultiSelect: false
    },
    {
        id: "q27",
        text: "What did the Plebeians demand during the early Republic?",
        options: [
            { text: "More land", value: "A" },
            { text: "Lower taxes", value: "B" },
            { text: "Political rights", value: "C" },
            { text: "An end to the monarchy", value: "D" }
        ],
        correctAnswers: ["C"], // Page 5
        isMultiSelect: false
    },
    {
        id: "q28",
        text: "Through what figure did the Plebeians achieve the right to be elected magistrates?",
        options: [
            { text: "The Censor", value: "A" },
            { text: "The Consul", value: "B" },
            { text: "The Tribune of the Plebeians", value: "C" },
            { text: "The Praetor", value: "D" }
        ],
        correctAnswers: ["C"], // Page 5
        isMultiSelect: false
    },
    {
        id: "q29",
        text: "What was the name of the law code from 451 BC that formed the basis for the Roman Republic and enshrined Plebeian rights?",
        options: [
            { text: "The Code of Hammurabi", value: "A" },
            { text: "The Justinian Code", value: "B" },
            { text: "The Law of the Twelve Tables", value: "C" },
            { text: "The Magna Carta", value: "D" }
        ],
        correctAnswers: ["C"], // Page 5
        isMultiSelect: false
    },
    {
        id: "q30",
        text: "Which rights and obligations of Plebeians were included in the Law of the Twelve Tables? (Select all that apply)",
        options: [
            { text: "Voting in the Assemblies", value: "A" },
            { text: "Never having to pay taxes", value: "B" },
            { text: "Electing and being elected as magistrates", value: "C" },
            { text: "Serving in the army and paying taxes", value: "D" }
        ],
        correctAnswers: ["A", "C", "D"], // Page 5
        isMultiSelect: true
    },
    {
        id: "q31",
        text: "When did Rome begin to expand throughout the Mediterranean, according to page 6?",
        options: [
            { text: "From the 8th century BC", value: "A" },
            { text: "From the 1st century AD", value: "B" },
            { text: "From the 3rd century BC", value: "C" },
            { text: "From the 5th century AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 6
        isMultiSelect: false
    },
    {
        id: "q32",
        text: "What did this expansion allow Rome to acquire?",
        options: [
            { text: "New gods", value: "A" },
            { text: "Wealth", value: "B" },
            { text: "Advanced technology from other cultures", value: "C" },
            { text: "Peace with all its neighbors", value: "D" }
        ],
        correctAnswers: ["B"], // Page 6
        isMultiSelect: false
    },
    {
        id: "q33",
        text: "When did a period of instability arise in the Republic?",
        options: [
            { text: "5th century BC", value: "A" },
            { text: "3rd century BC", value: "B" },
            { text: "1st century BC", value: "C" },
            { text: "2nd century AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 6
        isMultiSelect: false
    },
    {
        id: "q34",
        text: "What were the reasons for the instability in the 1st century BC? (Select all that apply)",
        options: [
            { text: "Too much democracy", value: "A" },
            { text: "Difficulty of controlling large conquered territories", value: "B" },
            { text: "Religious conflicts", value: "C" },
            { text: "Social unrest caused by unequal distribution of acquired wealth", value: "D" }
        ],
        correctAnswers: ["B", "D"], // Page 6
        isMultiSelect: true
    },
    {
        id: "q35",
        text: "What was formed to try and solve the crisis of the Republic, where command was given to three military leaders?",
        options: [
            { text: "A dictatorship", value: "A" },
            { text: "A new monarchy", value: "B" },
            { text: "A triumvirate", value: "C" },
            { text: "An oligarchy", value: "D" }
        ],
        correctAnswers: ["C"], // Page 6
        isMultiSelect: false
    },
    {
        id: "q36",
        text: "Who were the members of the first triumvirate mentioned on page 6? (Select all that apply)",
        options: [
            { text: "Augustus", value: "A" },
            { text: "Crassus", value: "B" },
            { text: "Pompey", value: "C" },
            { text: "Julius Caesar", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 6
        isMultiSelect: true
    },
    {
        id: "q37",
        text: "After a civil war, who defeated his rivals and became the sole magistrate, holding all the powers?",
        options: [
            { text: "Pompey", value: "A" },
            { text: "Crassus", value: "B" },
            { text: "Mark Antony", value: "C" },
            { text: "Julius Caesar", value: "D" }
        ],
        correctAnswers: ["D"], // Page 6
        isMultiSelect: false
    },
    {
        id: "q38",
        text: "Julius Caesar's government was the beginning of what new political system?",
        options: [
            { text: "A stronger Republic", value: "A" },
            { text: "The Empire", value: "B" },
            { text: "A Greek-style democracy", value: "C" },
            { text: "A confederation of states", value: "D" }
        ],
        correctAnswers: ["B"], // Page 6
        isMultiSelect: false
    },

    // Section 3: The Roman Empire & Pax Romana (Pages 7-8)
    {
        id: "q39",
        text: "What happened to the representative republican institutions during the period of the Roman Empire?",
        options: [
            { text: "They became more powerful", value: "A" },
            { text: "They lost power", value: "B" },
            { text: "They were abolished completely", value: "C" },
            { text: "They remained unchanged", value: "D" }
        ],
        correctAnswers: ["B"], // Page 7
        isMultiSelect: false
    },
    {
        id: "q40",
        text: "Who formed a new triumvirate after the death of Julius Caesar in 44 BC? (Select all that apply)",
        options: [
            { text: "Brutus", value: "A" },
            { text: "Octavian", value: "B" },
            { text: "Mark Antony", value: "C" },
            { text: "Lepidus", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 7
        isMultiSelect: true
    },
    {
        id: "q41",
        text: "A war started between these three leaders (Octavian, Mark Antony, Lepidus). In what year did it end with the victory of Octavian?",
        options: [
            { text: "44 BC", value: "A" },
            { text: "31 BC", value: "B" }, // Battle of Actium often cited
            { text: "27 BC", value: "C" }, // Start of Empire, Octavian given Augustus title
            { text: "14 AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 7 states "ended in 27 BC"
        isMultiSelect: false
    },
    {
        id: "q42",
        text: "What happened to Octavian after his victory?",
        options: [
            { text: "He restored the Republic", value: "A" },
            { text: "He was proclaimed emperor", value: "B" },
            { text: "He became a high priest", value: "C" },
            { text: "He retired from public life", value: "D" }
        ],
        correctAnswers: ["B"], // Page 7
        isMultiSelect: false
    },
    {
        id: "q43",
        text: "The beginning of the Empire, with Octavian as emperor, lasted until which year (referring to the end of the Western Roman Empire)?",
        options: [
            { text: "AD 180", value: "A" },
            { text: "AD 395", value: "B" },
            { text: "AD 476", value: "C" },
            { text: "AD 1453", value: "D" }
        ],
        correctAnswers: ["C"], // Page 7: "the Empire, which lasted until AD 476"
        isMultiSelect: false
    },
    {
        id: "q44",
        text: "Who gathered all the powers of Rome in his person throughout his whole life during the Empire?",
        options: [
            { text: "The Senate", value: "A" },
            { text: "The People's Assembly", value: "B" },
            { text: "The Emperor", value: "C" },
            { text: "The Consuls", value: "D" }
        ],
        correctAnswers: ["C"], // Page 7
        isMultiSelect: false
    },
    {
        id: "q45",
        text: "What was the name of the long period of peace that began after the proclamation of the Empire?",
        options: [
            { text: "The Golden Age", value: "A" },
            { text: "The Pax Romana", value: "B" },
            { text: "The Roman Holiday", value: "C" },
            { text: "The Imperial Peace", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q46",
        text: "How long did the Pax Romana last?",
        options: [
            { text: "One century", value: "A" },
            { text: "Two centuries", value: "B" },
            { text: "Fifty years", value: "C" },
            { text: "Three hundred years", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q47",
        text: "The \"High Empire\" period occurred during which centuries?",
        options: [
            { text: "1st and 2nd centuries BC", value: "A" },
            { text: "1st and 2nd centuries AD", value: "B" },
            { text: "3rd and 4th centuries AD", value: "C" },
            { text: "5th and 6th centuries AD", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q48",
        text: "Which of these were characteristics of the High Empire? (Select all that apply)",
        options: [
            { text: "Great power", value: "A" },
            { text: "Constant civil wars", value: "B" },
            { text: "Territory organised into provinces", value: "C" },
            { text: "Loss of all territories", value: "D" }
        ],
        correctAnswers: ["A", "C"], // Page 8
        isMultiSelect: true
    },
    {
        id: "q49",
        text: "Provinces during the High Empire could be: (Select all that apply)",
        options: [
            { text: "Senatorial, governed by proconsuls", value: "A" },
            { text: "Plebeian, governed by tribunes", value: "B" },
            { text: "Imperials, governed by legates", value: "C" },
            { text: "Royal, governed by kings", value: "D" }
        ],
        correctAnswers: ["A", "C"], // Page 8
        isMultiSelect: true
    },
    {
        id: "q50",
        text: "What happened to the right to Roman citizenship during the High Empire?",
        options: [
            { text: "It was restricted to only people born in Rome", value: "A" },
            { text: "It was extended", value: "B" },
            { text: "It was abolished", value: "C" },
            { text: "It was sold to the highest bidder", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q51",
        text: "To whom was Roman citizenship granted during the High Empire?",
        options: [
            { text: "Only to soldiers", value: "A" },
            { text: "To all the freemen of the Empire", value: "B" },
            { text: "Only to Patricians", value: "C" },
            { text: "To no one outside of Italy", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q52",
        text: "What did the extension of Roman citizenship help to achieve?",
        options: [
            { text: "Increased tax revenue only", value: "A" },
            { text: "Spread Roman culture to all territories", value: "B" },
            { text: "Reduce the power of the Emperor", value: "C" },
            { text: "Encourage local rebellions", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q53",
        text: "The \"Lower Empire\" period is associated with which century?",
        options: [
            { text: "1st century AD", value: "A" },
            { text: "2nd century AD", value: "B" },
            { text: "3rd century AD", value: "C" },
            { text: "4th century AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q54",
        text: "What characterized the Lower Empire (3rd century AD)?",
        options: [
            { text: "A period of great expansion", value: "A" },
            { text: "The peak of the Pax Romana", value: "B" },
            { text: "A deep crisis", value: "C" },
            { text: "The strengthening of republican institutions", value: "D" }
        ],
        correctAnswers: ["C"], // Page 8
        isMultiSelect: false
    },
    {
        id: "q55",
        text: "What did the crisis of the Lower Empire lead to?",
        options: [
            { text: "The re-establishment of the Monarchy", value: "A" },
            { text: "The disappearance of the Roman Empire in AD 476", value: "B" },
            { text: "A new golden age of literature", value: "C" },
            { text: "The conquest of Persia", value: "D" }
        ],
        correctAnswers: ["B"], // Page 8
        isMultiSelect: false
    },

    // Section 4: Expansion of Rome (Pages 9-10)
    {
        id: "q56",
        text: "The Romans were the most powerful people in Ancient History due to what two factors? (Select all that apply)",
        options: [
            { text: "Their advanced naval technology", value: "A" },
            { text: "The economic and cultural power of the Roman Empire", value: "B" },
            { text: "Their alliance with the Greeks", value: "C" },
            { text: "Their conquest of all territories surrounding the Mediterranean Sea", value: "D" }
        ],
        correctAnswers: ["B", "D"], // Page 9
        isMultiSelect: true
    },
    {
        id: "q57",
        text: "What was the success of Roman conquest based on? (Select all that apply)",
        options: [
            { text: "The political unity of all peoples under their command", value: "A" },
            { text: "Allowing conquered peoples to keep their own laws and leaders entirely", value: "B" },
            { text: "Romanisation (exporting their language, laws, and culture)", value: "C" },
            { text: "The effectiveness of the Roman army", value: "D" }
        ],
        correctAnswers: ["A", "C", "D"], // Page 9
        isMultiSelect: true
    },
    {
        id: "q58",
        text: "Which of these were also bases for the success of Roman conquest? (Select all that apply)",
        options: [
            { text: "Commercial strength", value: "A" },
            { text: "Giving up slave labour", value: "B" },
            { text: "The assimilation of cultural elements of conquered peoples", value: "C" },
            { text: "The importance of slave labour", value: "D" }
        ],
        correctAnswers: ["A", "C", "D"], // Page 9
        isMultiSelect: true
    },
    {
        id: "q59",
        text: "When did Rome reach the height of its territorial expansion?",
        options: [
            { text: "During the Monarchy", value: "A" },
            { text: "During the early Republic", value: "B" },
            { text: "During the Empire", value: "C" },
            { text: "After its fall", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q60",
        text: "This period of height in territorial expansion began in the 3rd century BC with which wars?",
        options: [
            { text: "The Gallic Wars", value: "A" },
            { text: "The Peloponnesian Wars", value: "B" },
            { text: "The Punic Wars", value: "C" },
            { text: "The Macedonian Wars", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q61",
        text: "Against whom did Rome fight in the Punic Wars?",
        options: [
            { text: "Greece", value: "A" },
            { text: "Egypt", value: "B" },
            { text: "Carthage", value: "C" },
            { text: "Persia", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q62",
        text: "Carthage was an old colony of which people?",
        options: [
            { text: "Greek", value: "A" },
            { text: "Egyptian", value: "B" },
            { text: "Phoenician", value: "C" },
            { text: "Roman", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q63",
        text: "Where was Carthage located?",
        options: [
            { text: "In Spain", value: "A" },
            { text: "In the north of Africa", value: "B" },
            { text: "In Sicily", value: "C" },
            { text: "In Greece", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q64",
        text: "Around what year did Rome take control of all the territory on the Italian Peninsula?",
        options: [
            { text: "509 BC", value: "A" },
            { text: "270 BC", value: "B" },
            { text: "44 BC", value: "C" },
            { text: "146 BC", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q65",
        text: "What was the timeframe for the First Punic War?",
        options: [
            { text: "218 – 201 BC", value: "A" },
            { text: "264 – 241 BC", value: "B" },
            { text: "149 – 146 BC", value: "C" },
            { text: "300 – 280 BC", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q66",
        text: "What was Rome's objective in the First Punic War?",
        options: [
            { text: "To conquer Hispania", value: "A" },
            { text: "To conquer Gaul", value: "B" },
            { text: "To conquer Sicily", value: "C" },
            { text: "To destroy Carthage completely", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q67",
        text: "What was the timeframe for the Second Punic War?",
        options: [
            { text: "264 – 241 BC", value: "A" },
            { text: "218 – 201 BC", value: "B" },
            { text: "149 – 146 BC", value: "C" },
            { text: "100 – 90 BC", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q68",
        text: "During the Second Punic War, Rome began its conquest of:",
        options: [
            { text: "Greece", value: "A" },
            { text: "Egypt", value: "B" },
            { text: "Hispania (Spain)", value: "C" },
            { text: "Britain", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q69",
        text: "What was the year of the Third Punic War?",
        options: [
            { text: "201 BC", value: "A" },
            { text: "146 BC", value: "B" },
            { text: "44 BC", value: "C" },
            { text: "27 BC", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10 (implied by "Third Punic War (146 BC): Carthage was conquered...")
        isMultiSelect: false
    },
    {
        id: "q70",
        text: "What was the outcome of the Third Punic War for Carthage?",
        options: [
            { text: "It became an ally of Rome", value: "A" },
            { text: "It was conquered and became part of the Roman Empire", value: "B" },
            { text: "It defeated Rome", value: "C" },
            { text: "It moved its capital to Sicily", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q71",
        text: "In which century did Rome take control of the western Mediterranean?",
        options: [
            { text: "3rd century BC", value: "A" },
            { text: "2nd century BC", value: "B" },
            { text: "1st century BC", value: "C" },
            { text: "1st century AD", value: "D" }
        ],
        correctAnswers: ["B"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q72",
        text: "From the 1st century BC onwards, Rome took control of which areas? (Select all that apply)",
        options: [
            { text: "All of the Iberian Peninsula", value: "A" },
            { text: "The north of Britain", value: "B" },
            { text: "The south of Britain", value: "C" },
            { text: "Parts of Central Europe", value: "D" }
        ],
        correctAnswers: ["A", "C", "D"], // Page 10
        isMultiSelect: true
    },
    {
        id: "q73",
        text: "Which emperor expanded the Empire to its maximum extent in the 2nd century AD?",
        options: [
            { text: "Augustus", value: "A" },
            { text: "Nero", value: "B" },
            { text: "Trajan", value: "C" },
            { text: "Constantine", value: "D" }
        ],
        correctAnswers: ["C"], // Page 10
        isMultiSelect: false
    },
    {
        id: "q74",
        text: "Emperor Trajan added which territories to the Empire? (Select all that apply)",
        options: [
            { text: "Territories in Asia", value: "A" },
            { text: "Territories in North America", value: "B" },
            { text: "Dacia", value: "C" },
            { text: "Egypt (it was already Roman)", value: "D" }
        ],
        correctAnswers: ["A", "C"], // Page 10
        isMultiSelect: true
    },

    // Section 5: The Fall of the Roman Empire (Pages 11-13)
    {
        id: "q75",
        text: "When did a crisis begin in the Roman Empire that is discussed on page 11?",
        options: [
            { text: "1st century AD", value: "A" },
            { text: "2nd century AD", value: "B" },
            { text: "3rd century AD", value: "C" },
            { text: "5th century AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q76",
        text: "What happened to territorial conquests during the 3rd century AD crisis?",
        options: [
            { text: "They greatly increased", value: "A" },
            { text: "They came to an end", value: "B" },
            { text: "They shifted focus to Africa", value: "C" },
            { text: "They were led by the Senate", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q77",
        text: "What problems affected the military during this crisis? (Select all that apply)",
        options: [
            { text: "It became too large to manage", value: "A" },
            { text: "It became less effective", value: "B" },
            { text: "Borders became insecure", value: "C" },
            { text: "Incursions from foreign peoples started", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 11
        isMultiSelect: true
    },
    {
        id: "q78",
        text: "How was the economy affected during the 3rd century AD crisis? (Select all that apply)",
        options: [
            { text: "It strengthened due to new trade routes", value: "A" },
            { text: "It weakened", value: "B" },
            { text: "There was lower income", value: "C" },
            { text: "There were fewer slaves and fewer precious metals", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 11
        isMultiSelect: true
    },
    {
        id: "q79",
        text: "What happened to trade during this crisis?",
        options: [
            { text: "It flourished, especially sea trade", value: "A" },
            { text: "It was affected, with food shortages in cities", value: "B" },
            { text: "It shifted entirely to barter", value: "C" },
            { text: "It was nationalized by the Emperor", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q80",
        text: "How did society in the Empire change during this crisis?",
        options: [
            { text: "It became more urban", value: "A" },
            { text: "It became more rural", value: "B" },
            { text: "The gap between rich and poor disappeared", value: "C" },
            { text: "A new middle class emerged strongly", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q81",
        text: "Why were taxes increased during the 3rd century AD crisis?",
        options: [
            { text: "To fund public games", value: "A" },
            { text: "To finance the defence of the territory", value: "B" },
            { text: "To build more palaces for the Emperor", value: "C" },
            { text: "To pay off foreign debts", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q82",
        text: "Which Emperor tried to resolve the crisis by establishing a tetrarchy in AD 284?",
        options: [
            { text: "Augustus", value: "A" },
            { text: "Trajan", value: "B" },
            { text: "Diocletian", value: "C" },
            { text: "Constantine", value: "D" }
        ],
        correctAnswers: ["C"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q83",
        text: "What was a tetrarchy?",
        options: [
            { text: "Rule by a single, all-powerful emperor", value: "A" },
            { text: "A system where the Empire was divided between four rulers", value: "B" },
            { text: "A council of 100 senators", value: "C" },
            { text: "A democratic assembly", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q84",
        text: "How long did Diocletian's system of tetrarchy last?",
        options: [
            { text: "Until AD 476", value: "A" },
            { text: "Until AD 305", value: "B" },
            { text: "For over a century", value: "C" },
            { text: "Only for a few years", value: "D" }
        ],
        correctAnswers: ["B"], // Page 11
        isMultiSelect: false
    },
    {
        id: "q85",
        text: "Where did Christianity originate in the 1st century AD?",
        options: [
            { text: "Rome", value: "A" },
            { text: "Athens", value: "B" },
            { text: "Judea", value: "C" },
            { text: "Egypt", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q86",
        text: "Why was Christianity initially prohibited in the Roman Empire?",
        options: [
            { text: "It promoted violence", value: "A" },
            { text: "It endangered the stability of the official religion of the state", value: "B" },
            { text: "It was too similar to Roman paganism", value: "C" },
            { text: "Its followers refused to pay taxes", value: "D" }
        ],
        correctAnswers: ["B"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q87",
        text: "What happened to Christians because their religion was prohibited?",
        options: [
            { text: "They were ignored", value: "A" },
            { text: "They were asked to leave the Empire", value: "B" },
            { text: "They were persecuted", value: "C" },
            { text: "They were given special privileges", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q88",
        text: "In which century did Christianity begin to be accepted, after the end of the imperial cult?",
        options: [
            { text: "2nd century AD", value: "A" },
            { text: "3rd century AD", value: "B" },
            { text: "4th century AD", value: "C" },
            { text: "5th century AD", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q89",
        text: "Which Emperor permitted freedom of worship through the Edict of Milan in AD 313?",
        options: [
            { text: "Diocletian", value: "A" },
            { text: "Constantine", value: "B" },
            { text: "Theodosius I", value: "C" },
            { text: "Nero", value: "D" }
        ],
        correctAnswers: ["B"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q90",
        text: "What was the name of the edict issued by Emperor Constantine that permitted freedom of worship?",
        options: [
            { text: "Edict of Thessalonica", value: "A" },
            { text: "Edict of Toleration", value: "B" },
            { text: "Edict of Milan", value: "C" },
            { text: "Edict of Rome", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q91",
        text: "Which Emperor made Christianity the official religion of the Roman Empire?",
        options: [
            { text: "Constantine", value: "A" },
            { text: "Augustus", value: "B" },
            { text: "Theodosius I", value: "C" },
            { text: "Julian the Apostate", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q92",
        text: "Through which edict did Theodosius I make Christianity the official religion in AD 380?",
        options: [
            { text: "Edict of Milan", value: "A" },
            { text: "Edict of Nicaea", value: "B" },
            { text: "Edict of Thessalonica", value: "C" },
            { text: "Edict of Constantinople", value: "D" }
        ],
        correctAnswers: ["C"], // Page 12
        isMultiSelect: false
    },
    {
        id: "q93",
        text: "In what year did Emperor Theodosius die, leading to the division of the Empire?",
        options: [
            { text: "AD 313", value: "A" },
            { text: "AD 380", value: "B" },
            { text: "AD 392", value: "C" },
            { text: "AD 476", value: "D" }
        ],
        correctAnswers: ["C"], // Page 13 (The text states "died in AD 392")
        isMultiSelect: false
    },
    {
        id: "q94",
        text: "Why was the Empire divided among Theodosius's sons?",
        options: [
            { text: "Because of a civil war", value: "A" },
            { text: "Due to pressure from the Germanic peoples", value: "B" },
            { text: "As part of his will for better administration", value: "C" },
            { text: "Because his sons demanded it", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q95",
        text: "Who received the western half of the Empire?",
        options: [
            { text: "Arcadius", value: "A" },
            { text: "Honorius", value: "B" },
            { text: "Odoacer", value: "C" },
            { text: "Romulus Augustus", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q96",
        text: "Who received the eastern half of the Empire?",
        options: [
            { text: "Honorius", value: "A" },
            { text: "Arcadius", value: "B" },
            { text: "Constantine", value: "C" },
            { text: "Stilicho", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q97",
        text: "When did Germanic tribes begin to move into the territory of the Empire, taking advantage of weak borders?",
        options: [
            { text: "1st and 2nd centuries", value: "A" },
            { text: "3rd and 4th centuries", value: "B" },
            { text: "5th and 6th centuries", value: "C" },
            { text: "Only after AD 476", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q98",
        text: "In AD 406, what did some Germanic tribes do?",
        options: [
            { text: "They signed a peace treaty with Rome", value: "A" },
            { text: "They invaded the Western Roman Empire", value: "B" },
            { text: "They converted to Christianity en masse", value: "C" },
            { text: "They helped defend Rome's borders", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q99",
        text: "In AD 476, what significant event happened involving Odoacer?",
        options: [
            { text: "He became the Roman Emperor", value: "A" },
            { text: "He, a Germanic military leader, deposed the last emperor of Rome, Romulus Augustus", value: "B" },
            { text: "He restored the Roman Republic", value: "C" },
            { text: "He conquered the Eastern Roman Empire", value: "D" }
        ],
        correctAnswers: ["B"], // Page 13
        isMultiSelect: false
    },
    {
        id: "q100",
        text: "After AD 476, what types of kingdoms were established in the former Western Roman Empire? (Select all that apply)",
        options: [
            { text: "Greek kingdoms", value: "A" },
            { text: "Ostrogoth kingdoms", value: "B" },
            { text: "Visigoth kingdoms", value: "C" },
            { text: "Frankish and Burgundian kingdoms", value: "D" }
        ],
        correctAnswers: ["B", "C", "D"], // Page 13
        isMultiSelect: true
    }
];
