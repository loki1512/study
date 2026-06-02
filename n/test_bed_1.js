// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "concept": "Meaning of Percentage",
    "context": "The word 'percent' means 'per hundred'. So 10% means 10 out of every 100.",
    "question": "If percent means per hundred, what does 10% mean?",
    "options": [
      "A) 10 out of 10",
      "B) 10 out of 100",
      "C) 100 out of 10",
      "D) 1 out of 10"
    ],
    "answer": "B) 10 out of 100",
    "explanation": "Percent means per hundred. Therefore 10% means 10 out of every 100. Let's continue by understanding other percentages in the same way."
  },
  {
    "id": 2,
    "concept": "Meaning of Percentage",
    "context": "20% means 20 out of every 100.",
    "question": "Which option correctly describes 20%?",
    "options": [
      "A) 20 out of 100",
      "B) 2 out of 100",
      "C) 100 out of 20",
      "D) 200 out of 100"
    ],
    "answer": "A) 20 out of 100",
    "explanation": "20% means 20 per hundred, or 20 out of 100. Every percentage can be thought of as some number out of 100."
  },
  {
    "id": 3,
    "concept": "Meaning of Percentage",
    "context": "50% means 50 out of every 100.",
    "question": "What does 50% mean?",
    "options": [
      "A) 5 out of 100",
      "B) 50 out of 10",
      "C) 50 out of 100",
      "D) 100 out of 50"
    ],
    "answer": "C) 50 out of 100",
    "explanation": "50% means 50 out of every 100. Since percentages are based on 100, they can also be written as fractions."
  },
  {
    "id": 4,
    "concept": "Meaning of Percentage",
    "context": "75% means 75 out of every 100.",
    "question": "Which statement represents 75%?",
    "options": [
      "A) 75 out of 100",
      "B) 75 out of 10",
      "C) 100 out of 75",
      "D) 7.5 out of 100"
    ],
    "answer": "A) 75 out of 100",
    "explanation": "75% means 75 out of 100. Thinking of percentages as parts out of 100 makes them easier to understand."
  },
  {
    "id": 5,
    "concept": "Meaning of Percentage",
    "context": "100% means the whole quantity, or 100 out of 100.",
    "question": "What does 100% represent?",
    "options": [
      "A) Half",
      "B) One-fourth",
      "C) The whole",
      "D) Nothing"
    ],
    "answer": "C) The whole",
    "explanation": "100% means 100 out of 100, which represents the entire quantity. Some percentages have familiar fraction forms."
  },
  {
    "id": 6,
    "concept": "Meaning of Percentage",
    "context": "25% means 25 out of every 100.",
    "question": "Which option matches 25%?",
    "options": [
      "A) 25 out of 100",
      "B) 2.5 out of 100",
      "C) 100 out of 25",
      "D) 25 out of 10"
    ],
    "answer": "A) 25 out of 100",
    "explanation": "25% means 25 out of 100. Soon we will see that 25 out of 100 can also be written as a fraction."
  },
  {
    "id": 7,
    "concept": "Meaning of Percentage",
    "context": "A percentage always tells us how many parts out of 100 we are talking about.",
    "question": "What number is always involved when we talk about percentages?",
    "options": [
      "A) 10",
      "B) 50",
      "C) 100",
      "D) 1000"
    ],
    "answer": "C) 100",
    "explanation": "Percent means per hundred, so 100 is always involved. This makes it easy to convert percentages into fractions."
  },
  {
    "id": 8,
    "concept": "Meaning of Percentage",
    "context": "80% means 80 out of every 100.",
    "question": "Which option represents 80%?",
    "options": [
      "A) 8 out of 100",
      "B) 80 out of 100",
      "C) 100 out of 80",
      "D) 800 out of 100"
    ],
    "answer": "B) 80 out of 100",
    "explanation": "80% means 80 out of 100. Since percentages are parts out of 100, we can write them as fractions such as 80/100."
  },

  {
    "id": 9,
    "concept": "Percentage to Fraction",
    "context": "To convert a percentage into a fraction, place the number over 100. For example, 50% = 50/100.",
    "question": "Which fraction represents 50% before simplification?",
    "options": [
      "A) 50/10",
      "B) 50/100",
      "C) 100/50",
      "D) 5/100"
    ],
    "answer": "B) 50/100",
    "explanation": "50% means 50 per hundred, so it becomes 50/100. We can simplify this fraction further."
  },
  {
    "id": 10,
    "concept": "Percentage to Fraction",
    "context": "50% = 50/100. Dividing both numerator and denominator by 50 gives 1/2.",
    "question": "What is 50% as a simplified fraction?",
    "options": [
      "A) 1/2",
      "B) 1/4",
      "C) 3/4",
      "D) 1/5"
    ],
    "answer": "A) 1/2",
    "explanation": "50/100 simplifies to 1/2. This is one of the most important percentage-fraction conversions to remember."
  },
  {
    "id": 11,
    "concept": "Percentage to Fraction",
    "context": "25% means 25/100. Simplifying gives 1/4.",
    "question": "What is 25% as a fraction?",
    "options": [
      "A) 1/2",
      "B) 1/4",
      "C) 3/4",
      "D) 1/5"
    ],
    "answer": "B) 1/4",
    "explanation": "25% = 25/100 = 1/4. Many percentage calculations become easier when we recognize 25% as one-fourth."
  },
  {
    "id": 12,
    "concept": "Percentage to Fraction",
    "context": "75% means 75/100. Simplifying gives 3/4.",
    "question": "What is 75% as a fraction?",
    "options": [
      "A) 1/4",
      "B) 1/2",
      "C) 3/4",
      "D) 4/5"
    ],
    "answer": "C) 3/4",
    "explanation": "75% = 75/100 = 3/4. It is useful to remember that 75% means three-fourths."
  },
  {
    "id": 13,
    "concept": "Percentage to Fraction",
    "context": "10% means 10/100.",
    "question": "What is 10% as a simplified fraction?",
    "options": [
      "A) 1/10",
      "B) 1/5",
      "C) 1/2",
      "D) 1/4"
    ],
    "answer": "A) 1/10",
    "explanation": "10/100 simplifies to 1/10. Thinking of 10% as one-tenth is very helpful."
  },
  {
    "id": 14,
    "concept": "Percentage to Fraction",
    "context": "20% means 20/100.",
    "question": "What is 20% as a simplified fraction?",
    "options": [
      "A) 1/2",
      "B) 1/5",
      "C) 1/4",
      "D) 2/3"
    ],
    "answer": "B) 1/5",
    "explanation": "20/100 simplifies to 1/5. This is another useful conversion to remember."
  },
  {
    "id": 15,
    "concept": "Percentage to Fraction",
    "context": "50% is the same as one-half.",
    "question": "Which fraction is equal to 50%?",
    "options": [
      "A) 1/2",
      "B) 1/4",
      "C) 3/4",
      "D) 1/5"
    ],
    "answer": "A) 1/2",
    "explanation": "50% = 1/2. Repeated practice helps these conversions become automatic."
  },
  {
    "id": 16,
    "concept": "Percentage to Fraction",
    "context": "25% is another way of writing one-fourth.",
    "question": "Which fraction represents 25%?",
    "options": [
      "A) 1/2",
      "B) 3/4",
      "C) 1/4",
      "D) 1/5"
    ],
    "answer": "C) 1/4",
    "explanation": "25% equals 1/4. Recognizing this helps us quickly find 25% of a number."
  },
  {
    "id": 17,
    "concept": "Percentage to Fraction",
    "context": "75% is the same as three-fourths.",
    "question": "Which fraction represents 75%?",
    "options": [
      "A) 1/4",
      "B) 3/4",
      "C) 1/2",
      "D) 1/5"
    ],
    "answer": "B) 3/4",
    "explanation": "75% equals 3/4. Soon we will practice converting fractions back into percentages."
  },
  {
    "id": 18,
    "concept": "Percentage to Fraction",
    "context": "20% is equal to one-fifth.",
    "question": "What fraction represents 20%?",
    "options": [
      "A) 1/10",
      "B) 1/2",
      "C) 1/5",
      "D) 1/4"
    ],
    "answer": "C) 1/5",
    "explanation": "20% = 1/5. Now let's reverse the process and convert fractions into percentages."
  },

  {
    "id": 19,
    "concept": "Fraction to Percentage",
    "context": "We already learned that 50% = 1/2.",
    "question": "If 50% equals 1/2, then 1/2 equals what percentage?",
    "options": [
      "A) 25%",
      "B) 50%",
      "C) 75%",
      "D) 20%"
    ],
    "answer": "B) 50%",
    "explanation": "Since 50% = 1/2, we can also say 1/2 = 50%."
  },
  {
    "id": 20,
    "concept": "Fraction to Percentage",
    "context": "We learned that 25% = 1/4.",
    "question": "What percentage is equal to 1/4?",
    "options": [
      "A) 50%",
      "B) 20%",
      "C) 25%",
      "D) 75%"
    ],
    "answer": "C) 25%",
    "explanation": "1/4 corresponds to 25%. Many students memorize this useful conversion."
  },
  {
    "id": 21,
    "concept": "Fraction to Percentage",
    "context": "75% and 3/4 represent the same amount.",
    "question": "What percentage is equal to 3/4?",
    "options": [
      "A) 25%",
      "B) 50%",
      "C) 75%",
      "D) 20%"
    ],
    "answer": "C) 75%",
    "explanation": "3/4 is the same as 75%. This conversion appears very often."
  },
  {
    "id": 22,
    "concept": "Fraction to Percentage",
    "context": "10% is equal to 1/10.",
    "question": "What percentage is equal to 1/10?",
    "options": [
      "A) 5%",
      "B) 10%",
      "C) 20%",
      "D) 25%"
    ],
    "answer": "B) 10%",
    "explanation": "1/10 corresponds to 10%. Thinking of 10% as one-tenth is useful in mental math."
  },
  {
    "id": 23,
    "concept": "Fraction to Percentage",
    "context": "20% is equal to 1/5.",
    "question": "What percentage is equal to 1/5?",
    "options": [
      "A) 10%",
      "B) 20%",
      "C) 25%",
      "D) 50%"
    ],
    "answer": "B) 20%",
    "explanation": "1/5 corresponds to 20%. This relationship is worth remembering."
  },
  {
    "id": 24,
    "concept": "Fraction to Percentage",
    "context": "Let's review. 1/2, 1/4, 3/4 and 1/5 have common percentage forms.",
    "question": "Which percentage is equal to 1/2?",
    "options": [
      "A) 20%",
      "B) 25%",
      "C) 50%",
      "D) 75%"
    ],
    "answer": "C) 50%",
    "explanation": "1/2 equals 50%. Soon we will use these conversions to find percentages of numbers."
  },
  {
    "id": 25,
    "concept": "Fraction to Percentage",
    "context": "Knowing common conversions makes percentage calculations much easier.",
    "question": "Which percentage is equal to 1/4?",
    "options": [
      "A) 20%",
      "B) 25%",
      "C) 50%",
      "D) 75%"
    ],
    "answer": "B) 25%",
    "explanation": "1/4 equals 25%. In the next section, we will use these conversions to find percentages of actual numbers."
  }
]


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

const progressBar = document.getElementById("prog-track");
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
    ${item.concept}
</div>

<div class="sf-sub-label">
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
    ${item.concept}
</div>

<div class="sf-sub-label">
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
            ${item.concept}
        </div>

        <div class="sf-sub-label">
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
