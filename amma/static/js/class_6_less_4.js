// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Plants with green and tender stems are called herbs, and they are usually short and may not have many branches.",
    "question": "What are plants with green and tender stems classified as?",
    "options": [
      "A) Trees",
      "B) Shrubs",
      "C) Herbs",
      "D) Creepers"
    ],
    "answer": "C) Herbs",
    "explanation": "Herbs are defined by their soft, green, and tender stems, and they typically remain short with minimal branching."
  },
  {
    "id": 2,
    "context": "Some plants develop branches near the base of the stem, having a hard but not very thick stem.",
    "question": "Which category of plants is characterized by having a hard stem that branches near the base?",
    "options": [
      "A) Shrubs",
      "B) Herbs",
      "C) Trees",
      "D) Climbers"
    ],
    "answer": "A) Shrubs",
    "explanation": "Shrubs possess a hard stem that is not overly thick, and their branches tend to grow close to the ground at the base."
  },
  {
    "id": 3,
    "context": "Certain plants grow very tall and develop a hard, thick stem with branches located high above the ground.",
    "question": "What do we call very tall plants that have thick, hard stems and branches in the upper part?",
    "options": [
      "A) Shrubs",
      "B) Herbs",
      "C) Creepers",
      "D) Trees"
    ],
    "answer": "D) Trees",
    "explanation": "Trees are distinguished by their great height and thick, hard trunks that support branches situated much higher up the stem."
  },
  {
    "id": 4,
    "context": "Plants with weak stems that cannot stand upright but instead spread on the ground are known as creepers.",
    "question": "What is the term for plants that have weak stems and spread out along the ground?",
    "options": [
      "A) Creepers",
      "B) Climbers",
      "C) Shrubs",
      "D) Herbs"
    ],
    "answer": "A) Creepers",
    "explanation": "Because they lack the structural support to stand upright, creepers spread their weak stems horizontally across the ground."
  },
  {
    "id": 5,
    "context": "While some weak-stemmed plants spread on the ground, others take support and climb up.",
    "question": "What do we call plants that utilize external support to climb vertically?",
    "options": [
      "A) Trees",
      "B) Climbers",
      "C) Creepers",
      "D) Shrubs"
    ],
    "answer": "B) Climbers",
    "explanation": "Climbers rely on surrounding objects for structural support to elevate themselves, differentiating them from ground-spreading creepers."
  },
  {
    "id": 6,
    "context": "An experiment cutting the base of a stem and placing it in coloured water demonstrates that the stem helps in upward movement of water.",
    "question": "Based on the coloured water activity, what is a primary function of a plant's stem?",
    "options": [
      "A) Absorbing sunlight",
      "B) Anchoring the plant",
      "C) Upward movement of water",
      "D) Storing starch"
    ],
    "answer": "C) Upward movement of water",
    "explanation": "The stem acts as a transport system, moving water and minerals upward to the leaves and other attached plant parts."
  },
  {
    "id": 7,
    "context": "A typical leaf consists of two main parts: the petiole which attaches it to the stem, and the broad green part.",
    "question": "What is the part of the leaf by which it is attached to the stem called?",
    "options": [
      "A) Lamina",
      "B) Petiole",
      "C) Midrib",
      "D) Vein"
    ],
    "answer": "B) Petiole",
    "explanation": "The petiole is the narrow, stalk-like structure of the leaf that directly connects it to the plant's stem."
  },
  {
    "id": 8,
    "context": "The broad, green part of the leaf is called the lamina, which can be seen attached to the petiole.",
    "question": "What is the broad, green, flat surface of a leaf known as?",
    "options": [
      "A) Lamina",
      "B) Midrib",
      "C) Petiole",
      "D) Sepal"
    ],
    "answer": "A) Lamina",
    "explanation": "The lamina serves as the main expanded portion of the leaf where processes like photosynthesis predominantly occur."
  },
  {
    "id": 9,
    "context": "Leaves have lines on them called veins, and there is usually a prominent line running through the middle of the leaf.",
    "question": "What is the prominent central line in the middle of a leaf called?",
    "options": [
      "A) Petiole",
      "B) Lateral vein",
      "C) Lamina",
      "D) Midrib"
    ],
    "answer": "D) Midrib",
    "explanation": "The midrib is the thick, central vein from which smaller veins branch out, providing structure to the leaf."
  },
  {
    "id": 10,
    "context": "The design made by veins in a leaf is known as leaf venation, which is reticulate if it forms a net-like pattern on both sides of the midrib.",
    "question": "What type of leaf venation features a net-like design on both sides of the midrib?",
    "options": [
      "A) Parallel venation",
      "B) Reticulate venation",
      "C) Straight venation",
      "D) Fibrous venation"
    ],
    "answer": "B) Reticulate venation",
    "explanation": "Reticulate venation describes the complex, web-like network of veins commonly found branching outward from the midrib."
  },
  {
    "id": 11,
    "context": "In certain plants, such as grass, the leaf venation is different, and the veins are arranged parallel to one another.",
    "question": "What type of leaf venation is characterized by veins running parallel to each other?",
    "options": [
      "A) Reticulate venation",
      "B) Parallel venation",
      "C) Webbed venation",
      "D) Tap venation"
    ],
    "answer": "B) Parallel venation",
    "explanation": "Parallel venation occurs when veins do not form a net but instead run straight alongside each other, a feature commonly seen in grasses."
  },
  {
    "id": 12,
    "context": "Water comes out of leaves in the form of vapour by a specific process, which can be observed by enclosing a leafy branch in a polythene bag.",
    "question": "What is the process by which plants release a lot of water vapour into the air through their leaves?",
    "options": [
      "A) Photosynthesis",
      "B) Condensation",
      "C) Transpiration",
      "D) Respiration"
    ],
    "answer": "C) Transpiration",
    "explanation": "Transpiration is the mechanism by which excess water is evaporated from the plant's leaves into the surrounding atmosphere."
  },
  {
    "id": 13,
    "context": "Leaves prepare food using water and carbon dioxide in the presence of sunlight and a green coloured substance in a process called photosynthesis.",
    "question": "What is the name of the process by which green leaves produce their food?",
    "options": [
      "A) Digestion",
      "B) Transpiration",
      "C) Respiration",
      "D) Photosynthesis"
    ],
    "answer": "D) Photosynthesis",
    "explanation": "Photosynthesis is the vital process where plants harness sunlight to convert water and carbon dioxide into food, simultaneously releasing oxygen."
  },
  {
    "id": 14,
    "context": "When trying to pull a plant from the soil, it resists because the roots help in holding the plant firmly to the ground.",
    "question": "What essential function do roots provide by holding the plant firmly in the soil?",
    "options": [
      "A) They conduct food to the leaves",
      "B) They anchor the plant",
      "C) They release water vapour",
      "D) They perform photosynthesis"
    ],
    "answer": "B) They anchor the plant",
    "explanation": "Roots grow deep into the soil to act as an anchor, preventing the plant from being easily uprooted by wind or physical force."
  },
  {
    "id": 15,
    "context": "In some root systems, there is a prominent main root with smaller lateral roots growing from it.",
    "question": "What is the main root called in a root system that also features smaller lateral roots?",
    "options": [
      "A) Fibrous root",
      "B) Tap root",
      "C) Branch root",
      "D) Creeping root"
    ],
    "answer": "B) Tap root",
    "explanation": "A tap root is a singular, thick central root that grows downwards, from which smaller lateral roots originate."
  },
  {
    "id": 16,
    "context": "Other root systems do not have a main root; instead, all roots seem similar and appear as a cluster.",
    "question": "What type of root system is characterized by the absence of a main root, where all roots appear similar?",
    "options": [
      "A) Tap roots",
      "B) Lateral roots",
      "C) Fibrous roots",
      "D) Primary roots"
    ],
    "answer": "C) Fibrous roots",
    "explanation": "Fibrous roots form a dense, similarly-sized network of roots that spread out from the base of the stem rather than having a single dominant tap root."
  },
  {
    "id": 17,
    "context": "A correlation exists between a plant's roots and its leaves: plants with reticulate venation typically have one specific type of root system.",
    "question": "What kind of roots do plants with reticulate leaf venation typically possess?",
    "options": [
      "A) Fibrous roots",
      "B) Tap roots",
      "C) Aerial roots",
      "D) Adventitious roots"
    ],
    "answer": "B) Tap roots",
    "explanation": "Observation shows that leaf venation is an indicator of root type, with net-like reticulate venation consistently corresponding to a tap root system."
  },
  {
    "id": 18,
    "context": "When looking at a flower bud, the most prominent part is made of small leaf-like structures enclosing it.",
    "question": "What are the small leaf-like structures that form the outer, protective layer of a flower bud called?",
    "options": [
      "A) Petals",
      "B) Stamens",
      "C) Pistils",
      "D) Sepals"
    ],
    "answer": "D) Sepals",
    "explanation": "Sepals act as a protective covering for the developing flower bud before it opens up to reveal the colorful petals."
  },
  {
    "id": 19,
    "context": "Inside the petals of a flower, you can identify parts consisting of an anther and a filament.",
    "question": "Which specific part of a flower consists of an anther and a filament?",
    "options": [
      "A) Pistil",
      "B) Sepal",
      "C) Petal",
      "D) Stamen"
    ],
    "answer": "D) Stamen",
    "explanation": "The stamen is the reproductive structure in a flower that is made up of a stalk called the filament and a top portion called the anther."
  },
  {
    "id": 20,
    "context": "By cutting the swollen lowermost part of the pistil, called the ovary, small bead-like structures can be seen inside.",
    "question": "What are the small bead-like structures found inside the ovary of a flower called?",
    "options": [
      "A) Ovules",
      "B) Stigmas",
      "C) Anthers",
      "D) Pollen"
    ],
    "answer": "A) Ovules",
    "explanation": "Ovules are the tiny, bead-like formations contained within the ovary at the base of the pistil, which are essential for reproduction."
  }
];


// App State
// App State
let currentIndex = 0;
let phase = "context";
let userSelectedAnswer = null;
let answeredQuestions = [];

let correctCount = 0;
let wrongCount = 0;

// DOM Elements
const container = document.getElementById("card-container");

const progressBar = document.getElementById("prog-fill");
const progressText = document.getElementById("prog-text");

const correctEl = document.getElementById("hdr-correct");
const wrongEl = document.getElementById("hdr-wrong");
const accuracyEl = document.getElementById("hdr-acc");

// Initialize
function init() {
    currentIndex = 0;
    phase = "context";

    correctCount = 0;
    wrongCount = 0;
    answeredQuestions = [];

    updateScoreDisplay();
    render();
}

// Score Display
function updateScoreDisplay() {
    correctEl.textContent = correctCount;
    wrongEl.textContent = wrongCount;

    const total = correctCount + wrongCount;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correctCount / total) * 100);

    accuracyEl.textContent = `${accuracy}%`;
}

function refreshScoreCounts() {
    correctCount =
        answeredQuestions.filter(answer => answer?.isCorrect).length;

    wrongCount =
        answeredQuestions.filter(answer => answer && !answer.isCorrect).length;
}

function recordAnswer() {
    if (answeredQuestions[currentIndex]) {
        return;
    }

    const item = quizData[currentIndex];

    answeredQuestions[currentIndex] = {
        selected: userSelectedAnswer,
        isCorrect: userSelectedAnswer === item.answer
    };

    refreshScoreCounts();
    updateScoreDisplay();
}

function previousReviewButton() {
    return currentIndex > 0
        ? `
            <button
                id="btn-prev-review"
                class="sf-action sf-action-secondary"
            >
                Previous
            </button>
        `
        : "";
}

function formatRanges(numbers) {
    const ranges = [];
    let start = numbers[0];
    let end = numbers[0];

    for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] === end + 1) {
            end = numbers[i];
            continue;
        }

        ranges.push(start === end ? `${start}` : `${start}-${end}`);
        start = numbers[i];
        end = numbers[i];
    }

    return ranges.join(", ");
}

function answeredQuestionRange() {
    const numbers = answeredQuestions
        .map((answer, index) => answer ? index + 1 : null)
        .filter(Boolean);

    return formatRanges(numbers);
}

function questionGlimpse(question) {
    return question.length > 58
        ? `${question.slice(0, 58)}...`
        : question;
}

function bindPreviousReview() {
    const previousBtn =
        document.getElementById("btn-prev-review");

    if (!previousBtn) {
        return;
    }

    previousBtn.addEventListener("click", () => {
        currentIndex--;
        phase = "explanation";
        render();
    });
}

function bindAnsweredJump() {
    const jumpInput =
        document.getElementById("answered-jump");
    const preview =
        document.getElementById("answered-preview");

    if (!jumpInput || !preview) {
        return;
    }

    const updatePreview = () => {
        const targetIndex = Number(jumpInput.value) - 1;
        const answer = answeredQuestions[targetIndex];

        preview.textContent =
            answer
                ? `Question ${targetIndex + 1}: ${questionGlimpse(quizData[targetIndex].question)}`
                : `Allowed values: ${answeredQuestionRange()}`;
    };

    const jumpToInput = () => {
        const targetIndex = Number(jumpInput.value) - 1;

        if (!answeredQuestions[targetIndex]) {
            updatePreview();
            return;
        }

        currentIndex = targetIndex;
        phase = "explanation";
        render();
    };

    jumpInput.addEventListener("input", updatePreview);
    jumpInput.addEventListener("change", updatePreview);

    document
        .getElementById("btn-jump")
        .addEventListener("click", jumpToInput);

    updatePreview();
}

function clearKeyboardHandler() {
    document.onkeydown = null;
}

// Render Controller
function render() {

    updateProgress();

    if (currentIndex >= quizData.length) {
        renderScoreScreen();
        return;
    }

    if (phase === "context") {
        renderContext();
    }
    else if (phase === "question") {
        renderQuestion();
    }
    else {
        renderExplanation();
    }
}

// Context Screen
function renderContext() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    container.innerHTML = `
        <div class="sf-label">
            Context
        </div>

        <div class="sf-content">
            ${item.context}
        </div>

        <button
            id="btn-next"
            class="sf-action"
        >
            Next: Question
        </button>
    `;

    document
        .getElementById("btn-next")
        .addEventListener("click", () => {
            phase = "question";
            render();
        });
}

// Question Screen
function renderQuestion() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    userSelectedAnswer = null;

    const optionsHtml = `
        <ul class="sf-options">
            ${item.options.map(option => `
                <li>
                    <button
                        class="sf-opt-btn"
                        data-value="${option.replace(/"/g, '&quot;')}"
                    >
                        ${option}
                    </button>
                </li>
            `).join("")}
        </ul>
    `;

    container.innerHTML = `
        <div class="sf-label">
            Question
        </div>

        <div class="sf-content">
            ${item.question}
        </div>

        ${optionsHtml}

        <button
            id="btn-submit"
            class="sf-action"
            disabled
        >
            Submit Answer
        </button>
    `;

    const submitBtn =
        document.getElementById("btn-submit");

    const optionBtns =
        document.querySelectorAll(".sf-opt-btn");

    const selectOption = (btn) => {
        optionBtns.forEach(
            b => b.classList.remove("selected")
        );

        btn.classList.add("selected");

        userSelectedAnswer =
            btn.dataset.value;

        submitBtn.disabled = false;
    };

    optionBtns.forEach(btn => {

        btn.addEventListener("click", () => {
            selectOption(btn);
        });

    });

    const submitAnswer = () => {
        recordAnswer();
        phase = "explanation";
        render();
    };

    submitBtn.addEventListener("click", submitAnswer);

    document.onkeydown = (event) => {
        const optionNumber = Number(event.key);

        if (Number.isInteger(optionNumber)
            && optionNumber >= 1
            && optionNumber <= optionBtns.length) {
            event.preventDefault();
            selectOption(optionBtns[optionNumber - 1]);
            return;
        }

        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();

        if (!userSelectedAnswer) {
            selectOption(optionBtns[0]);
            return;
        }

        submitAnswer();
    };
}

// Explanation Screen
function renderExplanation() {
    clearKeyboardHandler();

    const item = quizData[currentIndex];

    const recordedAnswer =
        answeredQuestions[currentIndex] || {
            selected: userSelectedAnswer,
            isCorrect: userSelectedAnswer === item.answer
        };

    const isCorrect =
        recordedAnswer.isCorrect;

    const feedbackClass =
        isCorrect ? "ok" : "fail";

    const feedbackText =
        isCorrect ? "Correct!" : "Incorrect";

    const btnText =
        currentIndex === quizData.length - 1
            ? "Finish Quiz"
            : "Next Context";

    container.innerHTML = `
        <div class="sf-label">
            Answer & Explanation
        </div>

        <div class="sf-feedback ${feedbackClass}">
            ${feedbackText}
        </div>

        <div class="sf-content">
            <strong>Question:</strong>
            ${item.question}
        </div>

        <div class="sf-content">
            <strong>Correct Answer:</strong>
            ${item.answer}
        </div>

        <div class="sf-explanation">
            ${item.explanation}
        </div>

        <div class="sf-review-jump">
            <label for="answered-jump">
                Jump to
            </label>

            <input
                id="answered-jump"
                type="number"
                min="1"
                max="${quizData.length}"
                value="${currentIndex + 1}"
                inputmode="numeric"
            >

            <span class="sf-review-allowed">
                Allowed: ${answeredQuestionRange()}
            </span>

            <button
                id="btn-jump"
                class="sf-action sf-action-secondary"
            >
                Jump
            </button>

            <div
                id="answered-preview"
                class="sf-review-preview"
            ></div>
        </div>

        <div class="sf-actions">
            ${previousReviewButton()}

            <button
                id="btn-next-phase"
                class="sf-action"
            >
                ${btnText}
            </button>
        </div>
    `;

    bindPreviousReview();
    bindAnsweredJump();

    const goNext = () => {
        currentIndex++;
        phase =
            answeredQuestions[currentIndex]
                ? "explanation"
                : "context";

        render();
    };

    document
        .getElementById("btn-next-phase")
        .addEventListener("click", goNext);

    document.onkeydown = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        goNext();
    };
}

// Final Screen
function renderScoreScreen() {
    clearKeyboardHandler();

    const total =
        correctCount + wrongCount;

    const accuracy =
        total === 0
            ? 0
            : Math.round(
                (correctCount / total) * 100
            );

    container.innerHTML = `
        <div class="sf-final">

            <div class="sf-final-title">
                Quiz Complete
            </div>

            <div class="sf-final-stats">

                <div class="sf-stat-box">
                    <span class="num">
                        ${correctCount}
                    </span>
                    <span class="lbl">
                        Correct
                    </span>
                </div>

                <div class="sf-stat-box">
                    <span class="num">
                        ${wrongCount}
                    </span>
                    <span class="lbl">
                        Wrong
                    </span>
                </div>

                <div class="sf-stat-box">
                    <span class="num">
                        ${accuracy}%
                    </span>
                    <span class="lbl">
                        Accuracy
                    </span>
                </div>

            </div>

            <div class="sf-final-note">
                Repeat the quiz until the
                concept flow becomes
                second nature.
            </div>

            <div class="sf-actions">
                <button
                    id="btn-prev-review"
                    class="sf-action sf-action-secondary"
                >
                    Previous
                </button>

                <button
                    id="btn-restart"
                    class="sf-action"
                >
                    Restart Quiz
                </button>
            </div>

        </div>
    `;

    document
        .getElementById("btn-prev-review")
        .addEventListener("click", () => {
            currentIndex = quizData.length - 1;
            phase = "explanation";
            render();
        });

    document
        .getElementById("btn-restart")
        .addEventListener("click", init);
}

// Progress
function updateProgress() {

    if (currentIndex >= quizData.length) {

        progressBar.style.width = "100%";

        progressText.textContent =
            "Completed";

        return;
    }

    const percent =
        ((currentIndex + 1)
            / quizData.length) * 100;

    progressBar.style.width =
        `${percent}%`;

    progressText.textContent =
        `Q ${currentIndex + 1} / ${quizData.length}`;
}

// Start App
init();
