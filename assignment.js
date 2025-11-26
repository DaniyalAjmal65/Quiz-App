// QUIZ QUESTIONS
const questions = [
    {
        q: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Task Main Line",
            "Hyperlink Test Machine",
            "None of these"
        ],
        correct: 0
    },
    {
        q: "CSS is used for website styling. (True/False)",
        options: ["True", "False"],
        correct: 0
    },
    {
        q: "Which one is a JavaScript datatype?",
        options: ["Car", "Boolean", "Table", "Road"],
        correct: 1
    },
    {
        q: "DOM stands for?",
        options: [
            "Document Object Model",
            "Data Operation Mode",
            "Display Order Method",
            "None"
        ],
        correct: 0
    },
    {
        q: "Which event runs when a button is clicked?",
        options: ["onpress", "onclick", "ondrag", "onhover"],
        correct: 1
    }
];

let index = 0;
let score = 0;

// SELECTORS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

// START QUIZ
document.getElementById("start-btn").onclick = () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
};

function loadQuestion() {
    nextBtn.classList.add("hidden");

    let q = questions[index];
    questionText.textContent = q.q;

    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        let div = document.createElement("div");
        div.classList.add("option");
        div.textContent = opt;

        div.onclick = () => handleAnswer(div, i);

        optionsDiv.appendChild(div);
    });
}

function handleAnswer(selectedOption, selectedIndex) {
    let q = questions[index];
    let optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach((btn, i) => {
        btn.style.pointerEvents = "none";

        if (i === q.correct) btn.classList.add("correct");
        if (i === selectedIndex && selectedIndex !== q.correct) btn.classList.add("wrong");
    });

    if (selectedIndex === q.correct) score++;

    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    index++;

    if (index < questions.length) loadQuestion();
    else showResult();
};

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("score").textContent = `${score}/${questions.length}`;
    document.getElementById("result-message").textContent =
        score >= 4 ? "Great Job! 🎉" : "Try Again! 😊";
}
