// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "For early water transport, people used simple logs with hollow cavities and later learned to put pieces of wood together.",
    "question": "What inspired the shapes of early wooden boats?",
    "options": [
      "A) The shape of falling leaves",
      "B) The shapes of animals living in water",
      "C) The shape of birds in flight",
      "D) The shape of a half-moon"
    ],
    "answer": "B) The shapes of animals living in water",
    "explanation": "People designed early boats to imitate the streamlined bodies of aquatic animals, helping them move easily through water. As society progressed, mechanical inventions completely changed how people traveled."
  },
  {
    "id": 2,
    "context": "Until the 19th century, people depended heavily on animals, boats, and ships. The invention of the wheel and new power sources brought massive changes.",
    "question": "The invention of the steam engine led to the development of what new means of transport?",
    "options": [
      "A) Spacecraft",
      "B) Motorised boats",
      "C) Railroads for carriages and wagons",
      "D) Bullock carts"
    ],
    "answer": "C) Railroads for carriages and wagons",
    "explanation": "The steam engine was utilized to pull carriages and wagons along newly developed railroads. Later, even more advanced technologies emerged in the 20th century."
  },
  {
    "id": 3,
    "context": "The early 1900s saw the development of aeroplanes, which were later improved to carry passengers and goods.",
    "question": "Which of the following represents a contribution to transport from the 20th century?",
    "options": [
      "A) Steam engine driven carriages",
      "B) Electric trains, monorail, and spacecraft",
      "C) Simple wooden boats",
      "D) Animal-drawn carts"
    ],
    "answer": "B) Electric trains, monorail, and spacecraft",
    "explanation": "Electric trains, monorails, supersonic aeroplanes, and spacecraft are explicitly listed as contributions of the 20th century. Building such advanced machines required a shift towards highly accurate methods of measuring lengths and distances."
  },
  {
    "id": 4,
    "context": "Before standardized tools, people often used random objects for measuring lengths, such as Paheli and Boojho using a gilli and danda to measure their desk.",
    "question": "What is a major problem with using objects like a gilli and danda for measuring a desk over time?",
    "options": [
      "A) They are too heavy to carry",
      "B) They are difficult to make marks on",
      "C) When a set is lost, a new set may have different lengths, causing inconsistent measurements",
      "D) They shrink when exposed to water"
    ],
    "answer": "C) When a set is lost, a new set may have different lengths, causing inconsistent measurements",
    "explanation": "Using arbitrary items like a gilli and danda results in confusion when those items are replaced, as the new items will likely have different dimensions. Because of this inconsistency, it became necessary to understand exactly what a valid measurement is."
  },
  {
    "id": 5,
    "context": "Measurement involves comparing an unknown quantity with a known, fixed quantity.",
    "question": "What are the two essential parts that express the result of a measurement?",
    "options": [
      "A) A number and a unit",
      "B) A scale and a tape",
      "C) A string and a mark",
      "D) A handspan and a foot"
    ],
    "answer": "A) A number and a unit",
    "explanation": "Every measurement consists of a number representing the magnitude and a unit representing the fixed known quantity. For example, early humans often used their own body parts as their fixed units."
  },
  {
    "id": 6,
    "context": "In classroom activities, students often try measuring the length of the room using the length of their foot or handspans.",
    "question": "Why is using body parts like handspans or feet not ideal for standard measurements?",
    "options": [
      "A) They are too hard to count",
      "B) Body parts vary in size from person to person",
      "C) They can only measure short distances",
      "D) They do not have numbers attached to them"
    ],
    "answer": "B) Body parts vary in size from person to person",
    "explanation": "Everybody's measurement will be slightly different because the lengths of handspans and feet are not the exact same for all students. Despite this flaw, ancient civilizations heavily relied on such biological references."
  },
  {
    "id": 7,
    "context": "Ancient civilizations developed several units of measurement based on human anatomy.",
    "question": "In ancient Egypt, what was the 'cubit' based on?",
    "options": [
      "A) The length from the elbow to the finger tips",
      "B) The length of a full stride",
      "C) The width of four fingers",
      "D) The distance from the chin to the wrist"
    ],
    "answer": "A) The length from the elbow to the finger tips",
    "explanation": "The cubit was defined by the distance from the elbow to the fingertips and was accepted as a unit of length in other parts of the world. Other cultures used different anatomical references, such as the arm or chin, to measure fabrics."
  },
  {
    "id": 8,
    "context": "Different regions adapted measurement techniques to whatever body parts were most convenient.",
    "question": "How did people historically measure a 'yard' of cloth?",
    "options": [
      "A) By wrapping it twice around their waist",
      "B) By the length of their foot",
      "C) By stretching it between both hands",
      "D) By the distance between the end of the outstretched arm and their chin"
    ],
    "answer": "D) By the distance between the end of the outstretched arm and their chin",
    "explanation": "A yard was traditionally measured from the chin to the end of an outstretched arm. Meanwhile in India, much smaller anatomical units were preferred for fine, everyday tasks."
  },
  {
    "id": 9,
    "context": "Small length measurements were necessary for daily activities in ancient India.",
    "question": "Which of the following was used in ancient India for small length measurements?",
    "options": [
      "A) A stride",
      "B) An angul (finger) or a mutthi (fist)",
      "C) A foot length",
      "D) A standard metre scale"
    ],
    "answer": "B) An angul (finger) or a mutthi (fist)",
    "explanation": "Ancient Indians used the angul and mutthi for smaller lengths, a practice that flower sellers still use today with their forearms. However, the global need for absolute uniformity eventually led to a standardized system."
  },
  {
    "id": 10,
    "context": "Because body parts caused confusion due to varying sizes, a standardized metric system was needed globally.",
    "question": "Who created the standard unit of measurement called the metric system in 1790?",
    "options": [
      "A) The Romans",
      "B) The Egyptians",
      "C) The French",
      "D) The Indians"
    ],
    "answer": "C) The French",
    "explanation": "In 1790, the French developed the metric system to ensure uniformity in measurement. This eventually evolved into the international scientific system used globally today."
  },
  {
    "id": 11,
    "context": "To maintain global uniformity, scientists accepted the International System of Units (SI units).",
    "question": "What is the SI unit of length?",
    "options": [
      "A) Yard",
      "B) Metre",
      "C) Foot",
      "D) Cubit"
    ],
    "answer": "B) Metre",
    "explanation": "The metre is the accepted SI unit of length across the world. Standardizing the metre also allowed it to be mathematically divided into smaller, precise sub-units."
  },
  {
    "id": 12,
    "context": "A standard metre scale is typically divided into 100 equal divisions called centimetres.",
    "question": "How many millimetres make up one centimetre?",
    "options": [
      "A) 100",
      "B) 1000",
      "C) 10",
      "D) 50"
    ],
    "answer": "C) 10",
    "explanation": "Each centimetre is divided into ten equal divisions, which are called millimetres. For distances too large for a standard metre scale, larger SI units are required."
  },
  {
    "id": 13,
    "context": "Measuring the distance between two cities using a metre scale is highly inconvenient.",
    "question": "Which larger unit of length is defined as exactly 1000 metres?",
    "options": [
      "A) Centimetre",
      "B) Kilometre",
      "C) Megametre",
      "D) Millimetre"
    ],
    "answer": "B) Kilometre",
    "explanation": "A kilometre is a larger unit of length equal to 1000 metres, making it practical and suitable for expressing large distances. Even with proper standard units, one must select the appropriate physical measuring device for the object being measured."
  },
  {
    "id": 14,
    "context": "Different measuring tools are suitable for different objects; for example, you cannot easily measure the girth of a tree using a rigid metre scale.",
    "question": "Which measuring device is most suitable for a tailor measuring a person's chest?",
    "options": [
      "A) A rigid 15 cm geometry scale",
      "B) A string",
      "C) A measuring tape",
      "D) A metre rod"
    ],
    "answer": "C) A measuring tape",
    "explanation": "A tailor uses a flexible measuring tape because a stiff metre rod or scale cannot easily wrap around a curved chest. Once the correct tool is chosen, it must be aligned and read properly to avoid mathematical errors."
  },
  {
    "id": 15,
    "context": "Sometimes the zero mark of a scale cannot be seen clearly, or the edges of the scale are broken off due to wear and tear.",
    "question": "If you measure an object starting from the 1.0 cm mark and the other end is at 14.3 cm, what is the object's actual length?",
    "options": [
      "A) 14.3 cm",
      "B) 13.3 cm",
      "C) 15.3 cm",
      "D) 1.0 cm"
    ],
    "answer": "B) 13.3 cm",
    "explanation": "When starting from a full mark other than zero, you must subtract that starting value from the final reading (14.3 cm - 1.0 cm = 13.3 cm). Proper eye placement is also essential to get this final reading perfectly correct."
  },
  {
    "id": 16,
    "context": "Correct measurement requires placing the scale straight and aligning your eye perfectly with the measurement mark to prevent parallax errors.",
    "question": "What is the correct position of the eye when taking a measurement reading?",
    "options": [
      "A) Exactly in front of the point where the measurement is to be taken",
      "B) Slightly to the left of the mark",
      "C) Slightly to the right of the mark",
      "D) At a 45-degree angle from the scale"
    ],
    "answer": "A) Exactly in front of the point where the measurement is to be taken",
    "explanation": "Viewing the mark from an angle will result in an incorrect reading; the eye must be exactly in front of the mark being measured. While rigid scales work well for straight lines, different techniques are needed entirely for non-straight geometries."
  },
  {
    "id": 17,
    "context": "A metre scale is rigid and cannot be bent directly to measure the length of a non-straight path.",
    "question": "What is the recommended method for measuring the length of a curved line?",
    "options": [
      "A) Placing a rigid scale over it and guessing the curve length",
      "B) Breaking the scale into smaller pieces",
      "C) Using a thread to trace the curve and then measuring the thread on a scale",
      "D) Stretching the curved object until it is a straight line"
    ],
    "answer": "C) Using a thread to trace the curve and then measuring the thread on a scale",
    "explanation": "By carefully placing a thread along the curved line and then stretching that taut thread against a standard metre scale, you can find the line's exact length. Accurately measuring distances helps us track objects as they change their position, which brings us to the scientific concept of motion."
  },
  {
    "id": 18,
    "context": "When observing our surroundings, we notice some objects remain static in the same place while others change their location.",
    "question": "How do we scientifically define if an object is in motion?",
    "options": [
      "A) It is breathing and alive",
      "B) It changes its position with time",
      "C) It is making a loud noise",
      "D) It can be seen with the naked eye"
    ],
    "answer": "B) It changes its position with time",
    "explanation": "Motion is strictly defined as an object's position changing over a period of time, whereas objects at rest remain exactly in the same position. Watching a small insect move across a surface is a simple way to physically track this change."
  },
  {
    "id": 19,
    "context": "In an activity, students track the movement of an ant on a sheet of paper by making small marks near its position every few seconds.",
    "question": "What does connecting the marked positions of an ant with arrows show?",
    "options": [
      "A) The direction and path in which the ant moved",
      "B) The size of the ant",
      "C) The age of the ant",
      "D) The speed of the ant in kilometres per hour"
    ],
    "answer": "A) The direction and path in which the ant moved",
    "explanation": "Connecting the dots visually shows the trail and direction of the ant's movement over time, confirming it is in motion. Not all motion is as random and wandering as an ant's; some objects follow strict geometric paths."
  },
  {
    "id": 20,
    "context": "Vehicles moving on a straight road or soldiers marching in a parade display a very specific, orderly type of path.",
    "question": "What do we call the motion of objects moving in a strict straight line?",
    "options": [
      "A) Circular motion",
      "B) Periodic motion",
      "C) Rotational motion",
      "D) Rectilinear motion"
    ],
    "answer": "D) Rectilinear motion",
    "explanation": "Objects that move exactly along a straight line, like a falling stone or sprinters in a 100-metre race, are exhibiting rectilinear motion. However, other objects move without physically traveling from one point to another across the room."
  },
  {
    "id": 21,
    "context": "If you tie a stone to a thread and whirl it around, the stone moves rapidly, but its distance from your hand stays constant.",
    "question": "What type of motion is defined by an object remaining at the exact same distance from a fixed central point?",
    "options": [
      "A) Rectilinear motion",
      "B) Periodic motion",
      "C) Circular motion",
      "D) Straight-line motion"
    ],
    "answer": "C) Circular motion",
    "explanation": "In circular motion, the object travels along a circular path so that its distance from the center point remains exactly the same. This same concept is frequently seen in spinning household appliances."
  },
  {
    "id": 22,
    "context": "An electric fan or a wall clock remains in one place on the wall, but their specific parts are continuously moving.",
    "question": "What type of motion do the outer blades of an electric fan or the hands of a clock exhibit?",
    "options": [
      "A) Rectilinear motion",
      "B) Circular motion",
      "C) Random motion",
      "D) Stationary motion"
    ],
    "answer": "B) Circular motion",
    "explanation": "While the fan itself doesn't move across the room, the blades constantly rotate around a central hub, classifying it as circular motion. Besides moving in circles, some forms of motion just repeat themselves at exact intervals."
  },
  {
    "id": 23,
    "context": "A swinging pendulum in a grandfather clock or a child moving to and fro on a playground swing repeats its physical path continuously.",
    "question": "What is the scientific term for motion that strictly repeats itself after a fixed interval of time?",
    "options": [
      "A) Periodic motion",
      "B) Rectilinear motion",
      "C) Linear motion",
      "D) Fixed motion"
    ],
    "answer": "A) Periodic motion",
    "explanation": "When an object or part of it repeats its motion after a regular, fixed time interval, it is undergoing periodic motion. This rhythmic repetition can also be seen in the vibration of musical instruments like guitars and tablas."
  },
  {
    "id": 24,
    "context": "Many mechanical objects, like a common sewing machine, beautifully display multiple types of motion working simultaneously.",
    "question": "While a sewing machine's wheel undergoes circular motion, what type of motion does its needle undergo?",
    "options": [
      "A) Circular motion",
      "B) Rectilinear motion",
      "C) Rotational motion",
      "D) Periodic motion"
    ],
    "answer": "D) Periodic motion",
    "explanation": "The needle constantly moves up and down at regular intervals as long as the wheel rotates, making the needle a perfect example of periodic motion. Other objects show completely different combinations of straight and spinning motions."
  },
  {
    "id": 25,
    "context": "A ball rolling on the ground is moving forward to a new location while also continuously spinning over itself.",
    "question": "What combination of motions does a ball rolling on the ground exhibit?",
    "options": [
      "A) Rectilinear motion and rotational motion",
      "B) Periodic motion and circular motion",
      "C) Only rectilinear motion",
      "D) Only rotational motion"
    ],
    "answer": "A) Rectilinear motion and rotational motion",
    "explanation": "As the ball actively moves forward along the ground (rectilinear motion), it is simultaneously rotating on its own axis, showing a combination of different types of motion. This demonstrates that motion everywhere around us can be beautifully complex."
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
