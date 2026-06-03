// The complete quiz payload
const quizData =

[
  {
    "id": 1,
    "concept": "Percentage of a Number",
    "context": "Remember that 50% means one-half. To find 50% of a number, simply divide the number by 2.",
    "question": "What is 50% of 40?",
    "options": ["A) 10", "B) 20", "C) 30", "D) 40"],
    "answer": "B) 20",
    "explanation": "50% means one-half. Half of 40 is 20. Let's continue using 50% to build confidence."
  },
  {
    "id": 2,
    "concept": "Percentage of a Number",
    "context": "Since 50% means one-half, finding 50% is the same as finding half.",
    "question": "What is 50% of 80?",
    "options": ["A) 20", "B) 30", "C) 40", "D) 50"],
    "answer": "C) 40",
    "explanation": "Half of 80 is 40. Finding 50% is often one of the quickest percentage calculations."
  },
  {
    "id": 3,
    "concept": "Percentage of a Number",
    "context": "50% means one-half.",
    "question": "What is 50% of 120?",
    "options": ["A) 40", "B) 50", "C) 60", "D) 70"],
    "answer": "C) 60",
    "explanation": "Half of 120 is 60. Now let's use another common percentage."
  },
  {
    "id": 4,
    "concept": "Percentage of a Number",
    "context": "25% means one-fourth. To find 25% of a number, divide it by 4.",
    "question": "What is 25% of 80?",
    "options": ["A) 20", "B) 25", "C) 30", "D) 40"],
    "answer": "A) 20",
    "explanation": "25% means one-fourth. One-fourth of 80 is 20."
  },
  {
    "id": 5,
    "concept": "Percentage of a Number",
    "context": "Since 25% equals one-fourth, divide the number by 4.",
    "question": "What is 25% of 120?",
    "options": ["A) 20", "B) 25", "C) 30", "D) 35"],
    "answer": "C) 30",
    "explanation": "120 ÷ 4 = 30. Therefore 25% of 120 is 30."
  },
  {
    "id": 6,
    "concept": "Percentage of a Number",
    "context": "25% means one-fourth.",
    "question": "What is 25% of 200?",
    "options": ["A) 25", "B) 40", "C) 50", "D) 75"],
    "answer": "C) 50",
    "explanation": "One-fourth of 200 is 50. Recognizing 25% as one-fourth saves time."
  },
  {
    "id": 7,
    "concept": "Percentage of a Number",
    "context": "10% means one-tenth. To find 10%, divide the number by 10.",
    "question": "What is 10% of 90?",
    "options": ["A) 9", "B) 10", "C) 18", "D) 90"],
    "answer": "A) 9",
    "explanation": "90 ÷ 10 = 9. Therefore 10% of 90 is 9."
  },
  {
    "id": 8,
    "concept": "Percentage of a Number",
    "context": "10% means one-tenth.",
    "question": "What is 10% of 250?",
    "options": ["A) 20", "B) 25", "C) 30", "D) 35"],
    "answer": "B) 25",
    "explanation": "250 ÷ 10 = 25. This makes 10% calculations easy."
  },
  {
    "id": 9,
    "concept": "Percentage of a Number",
    "context": "20% means two-tenths, which is the same as one-fifth.",
    "question": "What is 20% of 100?",
    "options": ["A) 10", "B) 20", "C) 25", "D) 50"],
    "answer": "B) 20",
    "explanation": "20% of 100 is 20. We can think of 20% as one-fifth."
  },
  {
    "id": 10,
    "concept": "Percentage of a Number",
    "context": "20% means one-fifth.",
    "question": "What is 20% of 150?",
    "options": ["A) 20", "B) 25", "C) 30", "D) 35"],
    "answer": "C) 30",
    "explanation": "One-fifth of 150 is 30. Next, we will start working backwards."
  },

  {
    "id": 11,
    "concept": "What Percent?",
    "context": "To find what percent one number is of another, compare it with the whole. Here the whole is 100.",
    "question": "20 is what percent of 100?",
    "options": ["A) 10%", "B) 20%", "C) 25%", "D) 50%"],
    "answer": "B) 20%",
    "explanation": "20 out of 100 means 20%."
  },
  {
    "id": 12,
    "concept": "What Percent?",
    "context": "The whole quantity is 100.",
    "question": "50 is what percent of 100?",
    "options": ["A) 25%", "B) 40%", "C) 50%", "D) 75%"],
    "answer": "C) 50%",
    "explanation": "50 out of 100 means 50%."
  },
  {
    "id": 13,
    "concept": "What Percent?",
    "context": "The whole quantity is 100.",
    "question": "75 is what percent of 100?",
    "options": ["A) 25%", "B) 50%", "C) 75%", "D) 100%"],
    "answer": "C) 75%",
    "explanation": "75 out of 100 means 75%."
  },
  {
    "id": 14,
    "concept": "What Percent?",
    "context": "We know that half of a quantity represents 50%.",
    "question": "25 is what percent of 50?",
    "options": ["A) 25%", "B) 50%", "C) 75%", "D) 100%"],
    "answer": "B) 50%",
    "explanation": "25 is half of 50, so it represents 50%."
  },
  {
    "id": 15,
    "concept": "What Percent?",
    "context": "Think about the fraction first. 30 is one-fifth of 150.",
    "question": "30 is what percent of 150?",
    "options": ["A) 10%", "B) 20%", "C) 25%", "D) 30%"],
    "answer": "B) 20%",
    "explanation": "30 is one-fifth of 150, and one-fifth is 20%."
  },
  {
    "id": 16,
    "concept": "What Percent?",
    "context": "50 is one-fourth of 200.",
    "question": "50 is what percent of 200?",
    "options": ["A) 20%", "B) 25%", "C) 50%", "D) 75%"],
    "answer": "B) 25%",
    "explanation": "One-fourth is equal to 25%."
  },
  {
    "id": 17,
    "concept": "What Percent?",
    "context": "75 is half of 150.",
    "question": "75 is what percent of 150?",
    "options": ["A) 25%", "B) 50%", "C) 75%", "D) 100%"],
    "answer": "B) 50%",
    "explanation": "Half of a quantity corresponds to 50%."
  },
  {
    "id": 18,
    "concept": "What Percent?",
    "context": "20 is one-fourth of 80.",
    "question": "20 is what percent of 80?",
    "options": ["A) 20%", "B) 25%", "C) 50%", "D) 75%"],
    "answer": "B) 25%",
    "explanation": "One-fourth corresponds to 25%."
  },

  {
    "id": 19,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 100 to 110. The increase is 10 on a base of 100.",
    "question": "What is the percentage increase?",
    "options": ["A) 5%", "B) 10%", "C) 15%", "D) 20%"],
    "answer": "B) 10%",
    "explanation": "An increase of 10 on an original value of 100 is a 10% increase."
  },
  {
    "id": 20,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 100 to 120.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The increase is 20 on a base of 100, so the increase is 20%."
  },
  {
    "id": 21,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 50 to 60.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 20%", "C) 25%", "D) 30%"],
    "answer": "B) 20%",
    "explanation": "The increase is 10. Since 10 is one-fifth of 50, the increase is 20%."
  },
  {
    "id": 22,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 100 to 90.",
    "question": "What is the percentage decrease?",
    "options": ["A) 5%", "B) 10%", "C) 15%", "D) 20%"],
    "answer": "B) 10%",
    "explanation": "The decrease is 10 on a base of 100, so the decrease is 10%."
  },
  {
    "id": 23,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 100 to 80.",
    "question": "What is the percentage decrease?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The decrease is 20 on a base of 100, giving a 20% decrease."
  },

  {
    "id": 24,
    "concept": "Successive Percentage Change",
    "context": "Start with 100. Increase it by 10%. A 10% increase means adding 10.",
    "question": "What is the new value?",
    "options": ["A) 105", "B) 110", "C) 115", "D) 120"],
    "answer": "B) 110",
    "explanation": "10% of 100 is 10. Adding 10 gives 110."
  },
  {
    "id": 25,
    "concept": "Successive Percentage Change",
    "context": "Start with 100. Increase it by 10% to get 110. Now increase 110 by another 10%.",
    "question": "What is the final value?",
    "options": ["A) 120", "B) 121", "C) 122", "D) 125"],
    "answer": "B) 121",
    "explanation": "10% of 110 is 11. Adding 11 gives 121. Successive percentage changes work on the new value, not the original value."
  },
  {
    "id": 26,
    "concept": "Percentage Increase",
    "context": "A salary increases from ₹200 to ₹240. First find how much it increased.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The increase is ₹40. Since 40 is 20% of 200, the increase is 20%."
  },
  {
    "id": 27,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 150 to 180.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The increase is 30. Since 30 is one-fifth of 150, the increase is 20%."
  },
  {
    "id": 28,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 80 to 100.",
    "question": "What is the percentage increase?",
    "options": ["A) 20%", "B) 25%", "C) 30%", "D) 40%"],
    "answer": "B) 25%",
    "explanation": "The increase is 20. Since 20 is one-fourth of 80, the increase is 25%."
  },
  {
    "id": 29,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 200 to 160.",
    "question": "What is the percentage decrease?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The decrease is 40. Since 40 is one-fifth of 200, the decrease is 20%."
  },
  {
    "id": 30,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 120 to 90.",
    "question": "What is the percentage decrease?",
    "options": ["A) 20%", "B) 25%", "C) 30%", "D) 35%"],
    "answer": "B) 25%",
    "explanation": "The decrease is 30. Since 30 is one-fourth of 120, the decrease is 25%."
  },
  {
    "id": 31,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 150 to 120.",
    "question": "What is the percentage decrease?",
    "options": ["A) 15%", "B) 20%", "C) 25%", "D) 30%"],
    "answer": "B) 20%",
    "explanation": "The decrease is 30. Since 30 is one-fifth of 150, the decrease is 20%."
  },
  {
    "id": 32,
    "concept": "Successive Percentage Change",
    "context": "Start with 100. Increase it by 20%. A 20% increase means adding 20.",
    "question": "What is the new value?",
    "options": ["A) 110", "B) 115", "C) 120", "D) 125"],
    "answer": "C) 120",
    "explanation": "20% of 100 is 20. Adding 20 gives 120."
  },
  {
    "id": 33,
    "concept": "Successive Percentage Change",
    "context": "Start with 100. Decrease it by 20%. A 20% decrease means subtracting 20.",
    "question": "What is the new value?",
    "options": ["A) 70", "B) 75", "C) 80", "D) 85"],
    "answer": "C) 80",
    "explanation": "20% of 100 is 20. Subtracting 20 gives 80."
  },
  {
    "id": 34,
    "concept": "Successive Percentage Change",
    "context": "Start with 100. Increase by 20% to get 120. Now decrease 120 by 20%.",
    "question": "What is the final value?",
    "options": ["A) 96", "B) 100", "C) 104", "D) 108"],
    "answer": "A) 96",
    "explanation": "20% of 120 is 24. Subtracting 24 gives 96. A 20% increase followed by a 20% decrease does not return to the original value."
  },
  {
    "id": 35,
    "concept": "Successive Percentage Change",
    "context": "Start with 200. Increase by 10%.",
    "question": "What is the new value?",
    "options": ["A) 210", "B) 215", "C) 220", "D) 225"],
    "answer": "C) 220",
    "explanation": "10% of 200 is 20. Adding 20 gives 220."
  },
  {
    "id": 36,
    "concept": "Successive Percentage Change",
    "context": "Start with 200. Increase by 10% to get 220. Then increase by another 10%.",
    "question": "What is the final value?",
    "options": ["A) 240", "B) 242", "C) 244", "D) 246"],
    "answer": "B) 242",
    "explanation": "10% of 220 is 22. Adding 22 gives 242."
  },
  {
    "id": 37,
    "concept": "Word Problem",
    "context": "A shirt costs ₹100. A shop offers a 20% discount. A 20% discount means ₹20 is reduced from ₹100.",
    "question": "What is the new price?",
    "options": ["A) ₹70", "B) ₹75", "C) ₹80", "D) ₹90"],
    "answer": "C) ₹80",
    "explanation": "20% of ₹100 is ₹20. ₹100 − ₹20 = ₹80."
  },
  {
    "id": 38,
    "concept": "Word Problem",
    "context": "A book costs ₹200. A 10% discount is offered.",
    "question": "What is the discounted price?",
    "options": ["A) ₹170", "B) ₹180", "C) ₹190", "D) ₹200"],
    "answer": "B) ₹180",
    "explanation": "10% of ₹200 is ₹20. ₹200 − ₹20 = ₹180."
  },
  {
    "id": 39,
    "concept": "Word Problem",
    "context": "A student scored 45 marks out of 90. Half of a quantity represents 50%.",
    "question": "What percentage did the student score?",
    "options": ["A) 40%", "B) 45%", "C) 50%", "D) 55%"],
    "answer": "C) 50%",
    "explanation": "45 is half of 90, so the score is 50%."
  },
  {
    "id": 40,
    "concept": "Word Problem",
    "context": "A class has 40 students. 10 students are absent. Think of absent students as a part of the whole class.",
    "question": "What percentage of students are absent?",
    "options": ["A) 20%", "B) 25%", "C) 30%", "D) 40%"],
    "answer": "B) 25%",
    "explanation": "10 is one-fourth of 40. One-fourth is 25%."
  },
  {
    "id": 41,
    "concept": "Word Problem",
    "context": "A population increases from 1000 to 1200.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The increase is 200. Since 200 is 20% of 1000, the increase is 20%."
  },
  {
    "id": 42,
    "concept": "Percentage of a Number",
    "context": "75% means three-fourths. To find 75%, find three-fourths of the number.",
    "question": "What is 75% of 40?",
    "options": ["A) 20", "B) 25", "C) 30", "D) 35"],
    "answer": "C) 30",
    "explanation": "Three-fourths of 40 is 30."
  },
  {
    "id": 43,
    "concept": "Percentage of a Number",
    "context": "75% means three-fourths.",
    "question": "What is 75% of 80?",
    "options": ["A) 40", "B) 50", "C) 60", "D) 70"],
    "answer": "C) 60",
    "explanation": "Three-fourths of 80 is 60."
  },
  {
    "id": 44,
    "concept": "Percentage of a Number",
    "context": "75% means three-fourths.",
    "question": "What is 75% of 120?",
    "options": ["A) 80", "B) 90", "C) 100", "D) 110"],
    "answer": "B) 90",
    "explanation": "Three-fourths of 120 is 90."
  },
  {
    "id": 45,
    "concept": "What Percent?",
    "context": "60 is three-fourths of 80.",
    "question": "60 is what percent of 80?",
    "options": ["A) 50%", "B) 60%", "C) 75%", "D) 80%"],
    "answer": "C) 75%",
    "explanation": "Three-fourths corresponds to 75%."
  },
  {
    "id": 46,
    "concept": "What Percent?",
    "context": "90 is three-fourths of 120.",
    "question": "90 is what percent of 120?",
    "options": ["A) 60%", "B) 70%", "C) 75%", "D) 80%"],
    "answer": "C) 75%",
    "explanation": "Three-fourths corresponds to 75%."
  },
  {
    "id": 47,
    "concept": "Percentage Increase",
    "context": "A quantity increases from 300 to 360.",
    "question": "What is the percentage increase?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The increase is 60. Since 60 is one-fifth of 300, the increase is 20%."
  },
  {
    "id": 48,
    "concept": "Percentage Decrease",
    "context": "A quantity decreases from 300 to 240.",
    "question": "What is the percentage decrease?",
    "options": ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
    "answer": "C) 20%",
    "explanation": "The decrease is 60. Since 60 is one-fifth of 300, the decrease is 20%."
  },
  {
    "id": 49,
    "concept": "Successive Percentage Change",
    "context": "Start with 50. Increase by 20%.",
    "question": "What is the new value?",
    "options": ["A) 55", "B) 60", "C) 65", "D) 70"],
    "answer": "B) 60",
    "explanation": "20% of 50 is 10. Adding 10 gives 60."
  },
  {
    "id": 50,
    "concept": "Successive Percentage Change",
    "context": "Start with 50. Increase by 20% to get 60. Then decrease 60 by 20%.",
    "question": "What is the final value?",
    "options": ["A) 48", "B) 50", "C) 52", "D) 54"],
    "answer": "A) 48",
    "explanation": "20% of 60 is 12. Subtracting 12 gives 48. Equal percentage increase and decrease do not cancel each other."
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
