// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Carbohydrates provide energy to our body, keeping it active throughout the day, and act like the primary fuel for our cells.",
    "question": "Which of the following nutrients is considered the primary fuel for our bodies?",
    "options": [
      "A) Proteins",
      "B) Carbohydrates",
      "C) Vitamins",
      "D) Minerals"
    ],
    "answer": "B) Carbohydrates",
    "explanation": "Carbohydrates are energy-giving foods that provide the primary source of energy our bodies need to function continuously."
  },
  {
    "id": 2,
    "context": "To check for the presence of starch in food, a simple experiment involves adding a specific chemical solution which changes the food's color.",
    "question": "What color indicates the presence of starch when iodine solution is added to a food item?",
    "options": [
      "A) Red-brown",
      "B) Violet",
      "C) Blue-black",
      "D) Green"
    ],
    "answer": "C) Blue-black",
    "explanation": "The addition of iodine solution to a starch-rich food like potato or rice results in a blue-black color change, confirming the presence of carbohydrates."
  },
  {
    "id": 3,
    "context": "Proteins require a specific chemical test involving two solutions that react to produce a distinct color change.",
    "question": "Which of the following chemical combinations is used to confirm the presence of proteins in food?",
    "options": [
      "A) Iodine and water",
      "B) Copper sulphate and caustic soda",
      "C) Vinegar and baking soda",
      "D) Hydrogen peroxide and ammonia"
    ],
    "answer": "B) Copper sulphate and caustic soda",
    "explanation": "A violet color appears when copper sulphate and sodium hydroxide (caustic soda) react with proteins in a food sample."
  },
  {
    "id": 4,
    "context": "A simple physical test can determine if a food item contains fat without the need for complex chemicals.",
    "question": "What observation on a piece of paper confirms that a crushed food item contains fat?",
    "options": [
      "A) The paper turns blue.",
      "B) The paper tears easily.",
      "C) An oily, translucent patch appears.",
      "D) The paper becomes completely transparent."
    ],
    "answer": "C) An oily, translucent patch appears.",
    "explanation": "When a fat-containing food is crushed and rubbed on paper, it leaves a translucent oily patch, which is the standard test for fats."
  },
  {
    "id": 5,
    "context": "Both carbohydrates and fats belong to the category of energy-giving foods, but they yield different amounts of energy per gram.",
    "question": "How does the energy provided by fats compare to that of carbohydrates?",
    "options": [
      "A) Fats provide less energy than carbohydrates.",
      "B) Fats provide exactly the same amount of energy.",
      "C) Fats provide more energy than the same amount of carbohydrates.",
      "D) Fats provide no energy compared to carbohydrates."
    ],
    "answer": "C) Fats provide more energy than the same amount of carbohydrates.",
    "explanation": "Fats are concentrated sources of energy and provide 9 kilocalories per gram, which is significantly more energy than an equivalent amount of carbohydrates."
  },
  {
    "id": 6,
    "context": "Nutrients are divided into categories based on their function, with some acting like the bricks and mortar for body structures.",
    "question": "Which functional category do proteins belong to?",
    "options": [
      "A) Energy-giving foods",
      "B) Body-building foods",
      "C) Protective foods",
      "D) Digestive aids"
    ],
    "answer": "B) Body-building foods",
    "explanation": "Proteins are known as body-building foods because they are essential for the growth, maintenance, and repair of body tissues."
  },
  {
    "id": 7,
    "context": "Dietary fibre, or roughage, does not provide traditional nutrients but plays a mechanical role similar to a broom in the digestive tract.",
    "question": "What is the main function of dietary fibre in our body?",
    "options": [
      "A) To provide high amounts of energy.",
      "B) To help in building muscle mass.",
      "C) To prevent constipation and maintain digestive health.",
      "D) To improve night vision."
    ],
    "answer": "C) To prevent constipation and maintain digestive health.",
    "explanation": "Fibre sweeps out the digestive system, preventing constipation and keeping the digestive tract healthy."
  },
  {
    "id": 8,
    "context": "Vitamin A is a protective nutrient found in foods like carrots, sweet potatoes, and papaya.",
    "question": "What is the primary benefit of Vitamin A?",
    "options": [
      "A) It aids in calcium absorption.",
      "B) It maintains good vision and healthy skin.",
      "C) It boosts the immune system.",
      "D) It helps in blood clotting."
    ],
    "answer": "B) It maintains good vision and healthy skin.",
    "explanation": "Vitamin A is essential for eye health (preventing loss of vision) and helps maintain healthy skin."
  },
  {
    "id": 9,
    "context": "A continuous lack of Vitamin C in a diet leads to a specific deficiency disease characterized by poor wound healing.",
    "question": "Which deficiency disease is caused by a lack of Vitamin C?",
    "options": [
      "A) Beriberi",
      "B) Goiter",
      "C) Scurvy",
      "D) Rickets"
    ],
    "answer": "C) Scurvy",
    "explanation": "Scurvy is characterized by bleeding gums and delayed wound healing due to insufficient intake of Vitamin C."
  },
  {
    "id": 10,
    "context": "Vitamin D works closely with a specific mineral in the body to ensure structural strength.",
    "question": "What is the main role of Vitamin D in the body?",
    "options": [
      "A) It acts as an antioxidant.",
      "B) It helps the body absorb calcium for strong bones.",
      "C) It aids in the digestion of fats.",
      "D) It forms red blood cells."
    ],
    "answer": "B) It helps the body absorb calcium for strong bones.",
    "explanation": "Vitamin D is necessary for the proper absorption of calcium, which prevents bone deformities like rickets."
  },
  {
    "id": 11,
    "context": "Deficiency in Vitamin B1 causes a condition characterized by extremely weak muscles and very little energy to work.",
    "question": "What is the name of the disease caused by Vitamin B1 deficiency?",
    "options": [
      "A) Rickets",
      "B) Beriberi",
      "C) Anaemia",
      "D) Goiter"
    ],
    "answer": "B) Beriberi",
    "explanation": "Beriberi results from a lack of Vitamin B1 and leads to severe muscle weakness, fatigue, and tingling in the extremities."
  },
  {
    "id": 12,
    "context": "A lack of iodine in the diet can lead to visible physical changes in the neck area.",
    "question": "Which disease is characterized by an enlarged, swollen thyroid gland in the neck?",
    "options": [
      "A) Anaemia",
      "B) Scurvy",
      "C) Goiter",
      "D) Beriberi"
    ],
    "answer": "C) Goiter",
    "explanation": "Goiter is a direct result of iodine deficiency, causing the thyroid gland to swell visibly."
  },
  {
    "id": 13,
    "context": "Iron is a vital mineral necessary for healthy blood, and its deficiency impacts the body's energy levels.",
    "question": "What are the common symptoms of Anaemia, a disease caused by iron deficiency?",
    "options": [
      "A) Bowed legs and soft bones",
      "B) Bleeding gums",
      "C) Fatigue, weakness, and shortness of breath",
      "D) Loss of vision in darkness"
    ],
    "answer": "C) Fatigue, weakness, and shortness of breath",
    "explanation": "Without enough iron, the body cannot supply sufficient oxygen to tissues, resulting in profound weakness and fatigue known as Anaemia."
  },
  {
    "id": 14,
    "context": "Optimal health requires consuming food that meets all the nutritional requirements of the body.",
    "question": "Which of the following best describes a balanced diet?",
    "options": [
      "A) A diet containing only high-protein foods.",
      "B) A diet with equal amounts of carbohydrates and fats.",
      "C) A diet that provides the right amount of all necessary nutrients, roughage, and water.",
      "D) A diet consisting solely of raw vegetables and fruits."
    ],
    "answer": "C) A diet that provides the right amount of all necessary nutrients, roughage, and water.",
    "explanation": "A balanced diet encompasses all essential food components, including water and fibre, in appropriate quantities to support bodily functions."
  },
  {
    "id": 15,
    "context": "Consuming excessive amounts of fat-rich foods without balancing them with other nutrients and physical activity can lead to severe health issues.",
    "question": "What condition is primarily caused by an excessive intake of fat-rich foods?",
    "options": [
      "A) Anaemia",
      "B) Obesity",
      "C) Goiter",
      "D) Rickets"
    ],
    "answer": "B) Obesity",
    "explanation": "Overconsumption of fats, which provide high amounts of energy, leads to excessive weight gain and obesity if not balanced properly."
  },
  {
    "id": 16,
    "context": "The way food is prepared and cooked can significantly impact its overall nutritional value.",
    "question": "Which practice can lead to the loss of essential nutrients in food?",
    "options": [
      "A) Eating fruits with their skin on.",
      "B) Steaming vegetables lightly.",
      "C) Improper cooking techniques or excessive heat.",
      "D) Chewing food thoroughly."
    ],
    "answer": "C) Improper cooking techniques or excessive heat.",
    "explanation": "Overcooking, excessive washing after cutting, or using too much heat can destroy valuable vitamins and minerals in food."
  },
  {
    "id": 17,
    "context": "Certain fruits and vegetables are well-known for their high protective vitamin content, particularly those that boost immunity.",
    "question": "Which of the following foods is a rich source of Vitamin C?",
    "options": [
      "A) Milk",
      "B) Butter",
      "C) Amla (Indian gooseberry) and citrus fruits",
      "D) Wheat and rice"
    ],
    "answer": "C) Amla (Indian gooseberry) and citrus fruits",
    "explanation": "Citrus fruits, amla, and tomatoes are excellent sources of Vitamin C, which protects the body and aids in immunity."
  },
  {
    "id": 18,
    "context": "Water makes up a large portion of the human body and performs multiple essential internal functions.",
    "question": "What is a primary function of water in the human body?",
    "options": [
      "A) It provides 9 kilocalories of energy per gram.",
      "B) It builds muscle tissue.",
      "C) It helps absorb nutrients and excrete wastes like urine and sweat.",
      "D) It creates an oily patch to protect skin."
    ],
    "answer": "C) It helps absorb nutrients and excrete wastes like urine and sweat.",
    "explanation": "Water is a crucial medium that helps the body absorb nutrients from food and flush out waste products."
  },
  {
    "id": 19,
    "context": "Deficiency diseases often present with structural deformities, particularly impacting the skeletal system in growing children.",
    "question": "Soft, bent bones and bow legs are primary symptoms of which deficiency disease?",
    "options": [
      "A) Scurvy",
      "B) Rickets",
      "C) Beriberi",
      "D) Anaemia"
    ],
    "answer": "B) Rickets",
    "explanation": "Rickets is caused by a deficiency in Vitamin D or calcium, leading to poor bone mineralization and resultant deformities like bow legs."
  },
  {
    "id": 20,
    "context": "Proteins can be sourced from both plants and animals to build and repair body structures.",
    "question": "Which of the following is an example of a plant-based protein source?",
    "options": [
      "A) Eggs",
      "B) Chicken",
      "C) Soyabean",
      "D) Fish"
    ],
    "answer": "C) Soyabean",
    "explanation": "Soyabean is a high-protein food derived from plants, unlike eggs, chicken, or fish which are animal-based protein sources."
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
