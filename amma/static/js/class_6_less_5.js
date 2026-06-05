// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Animals move from place to place in many different ways, such as walking, running, jumping, creeping, crawling, slithering, and swimming.",
    "question": "Which of the following movements is characteristic of how a snake moves from one place to another?",
    "options": [
      "A) Walk",
      "B) Slither",
      "C) Fly",
      "D) Jump"
    ],
    "answer": "B) Slither",
    "explanation": "Snakes slither or crawl, which is one of the many ways animals move. Understanding these specific animal movements naturally leads us to explore how human bodies move through different joints."
  },
  {
    "id": 2,
    "context": "To bend or rotate our body, we rely on places where two parts of our body seem to be joined together, like the elbow, shoulder, or neck.",
    "question": "What are the places in the body where two parts are joined together called?",
    "options": [
      "A) Cavities",
      "B) Muscles",
      "C) Joints",
      "D) Bristles"
    ],
    "answer": "C) Joints",
    "explanation": "These joining points, called joints, are where bones meet and allow for movement. The specific type of movement depends on the shape of the joint, such as those that allow movement in all directions."
  },
  {
    "id": 3,
    "context": "In some joints, the rounded end of one bone fits into the cavity (hollow space) of another bone, much like a paper cylinder rotating inside a bowl.",
    "question": "Which type of joint allows movements in all directions?",
    "options": [
      "A) Hinge joint",
      "B) Fixed joint",
      "C) Pivotal joint",
      "D) Ball and socket joint"
    ],
    "answer": "D) Ball and socket joint",
    "explanation": "A ball and socket joint allows free rotation in all directions, as seen in the shoulder and hip. While this joint allows full rotation, other parts of the body, like the neck, require a different joint structure to turn the head."
  },
  {
    "id": 4,
    "context": "The joint where our neck joins the head is essential for looking around, allowing us to bend our head forward and backward and turn it right or left.",
    "question": "What type of joint connects the neck to the head?",
    "options": [
      "A) Ball and socket joint",
      "B) Pivotal joint",
      "C) Hinge joint",
      "D) Fixed joint"
    ],
    "answer": "B) Pivotal joint",
    "explanation": "The pivotal joint provides specific directional turning and bending for the head. In this joint, the physical mechanism involves a specific bone shape rotating within another structure, unlike joints that only move like a door."
  },
  {
    "id": 5,
    "context": "In a pivotal joint, the mechanism of movement differs significantly from that of a ball and socket joint, limiting motion to specific rotations.",
    "question": "How does movement occur within a pivotal joint?",
    "options": [
      "A) A ball rotates freely inside a bowl.",
      "B) A cylindrical bone rotates in a ring.",
      "C) Two flat bones slide past each other.",
      "D) Bones are locked completely in place."
    ],
    "answer": "B) A cylindrical bone rotates in a ring.",
    "explanation": "A cylindrical bone rotating in a ring restricts the movement to pivoting. This is different from the joints found in our limbs that only allow a simple back-and-forth motion."
  },
  {
    "id": 6,
    "context": "If you open and close a door, you can observe how its hinges allow movement only back and forth. The elbow and knee have similar joints.",
    "question": "Which type of joint is found in the elbow and knee?",
    "options": [
      "A) Hinge joint",
      "B) Pivotal joint",
      "C) Ball and socket joint",
      "D) Fixed joint"
    ],
    "answer": "A) Hinge joint",
    "explanation": "The hinge joint allows only back-and-forth movement, much like a door hinge. While elbows and knees use hinges to move, some joints in the human body do not allow any movement at all."
  },
  {
    "id": 7,
    "context": "There are some joints between bones in our head where the bones are physically incapable of moving.",
    "question": "What are the joints called where bones are completely unable to move?",
    "options": [
      "A) Hinge joints",
      "B) Ball and socket joints",
      "C) Fixed joints",
      "D) Pivotal joints"
    ],
    "answer": "C) Fixed joints",
    "explanation": "Fixed joints lock bones securely together to provide rigid protection and structure. A prime example of this rigid connection is found within the feeding structures of the human head."
  },
  {
    "id": 8,
    "context": "When you open your mouth wide, you can move your lower jaw away from your head, but the upper jaw remains stationary.",
    "question": "The joint between the upper jaw and the rest of the head is an example of which type of joint?",
    "options": [
      "A) Hinge joint",
      "B) Fixed joint",
      "C) Pivotal joint",
      "D) Ball and socket joint"
    ],
    "answer": "B) Fixed joint",
    "explanation": "The upper jaw is firmly fixed to the skull, showing how immovable joints provide stability. All these moving and fixed bones collectively create the foundational structural shape of the human body."
  },
  {
    "id": 9,
    "context": "All the bones in our body form a framework that gives shape to our body, much like making a framework for a doll before giving it an outer structure.",
    "question": "What is the complete bony framework of the human body called?",
    "options": [
      "A) Cartilage",
      "B) Skeleton",
      "C) Rib cage",
      "D) Backbone"
    ],
    "answer": "B) Skeleton",
    "explanation": "The skeleton is the foundational framework giving the body its shape and protecting inner organs. Interestingly, the total count of bones making up this skeleton changes as a person grows."
  },
  {
    "id": 10,
    "context": "The human skeleton's composition and total bone count change from infancy to adulthood as some bones fuse together over time.",
    "question": "How many bones is the human skeleton composed of at birth, and what does it decrease to by adulthood?",
    "options": [
      "A) 206 at birth, decreases to 100",
      "B) 305 at birth, decreases to 206",
      "C) 350 at birth, decreases to 300",
      "D) 250 at birth, decreases to 206"
    ],
    "answer": "B) 305 at birth, decreases to 206",
    "explanation": "The skeleton starts with around 305 bones and decreases to 206 as certain bones fuse during growth. To study the specific shapes and alignments of these internal bones, doctors rely on special medical imaging."
  },
  {
    "id": 11,
    "context": "Sometimes when we are hurt or have an accident, doctors need to find out about possible injuries that might have happened to the skeleton.",
    "question": "What type of images do doctors use to see the exact shapes of the bones in our bodies?",
    "options": [
      "A) Thermal images",
      "B) X-ray images",
      "C) Ultrasound images",
      "D) Magnetic images"
    ],
    "answer": "B) X-ray images",
    "explanation": "X-rays reveal the detailed shapes and potential injuries of the bones. These images can perfectly show many tiny joints and complex bone structures, such as those found in our highly flexible hands."
  },
  {
    "id": 12,
    "context": "If you feel the back of your palm and bend your fingers, you can tell the wrist is highly flexible and composed of multiple units.",
    "question": "The human wrist is flexible because it is made up of several small bones. What are these bones called?",
    "options": [
      "A) Vertebrae",
      "B) Pelvic bones",
      "C) Carples",
      "D) Cartilage"
    ],
    "answer": "C) Carples",
    "explanation": "The wrist's flexibility is due to multiple small bones known as carples. Similarly complex bone structures exist in the chest, where uniquely bent bones join to form a protective cage."
  },
  {
    "id": 13,
    "context": "The chest features curiously bent bones that join the chest bone and the backbone together to form a protective box around the heart and lungs.",
    "question": "How many ribs are on each side of the chest to form the rib cage?",
    "options": [
      "A) 10",
      "B) 12",
      "C) 14",
      "D) 33"
    ],
    "answer": "B) 12",
    "explanation": "There are 12 ribs on each side creating the rib cage. This protective cage securely anchors to a long, segmented bony structure running down the center of the back."
  },
  {
    "id": 14,
    "context": "Running down the back is a vital structure made of many small bones, starting from the neck. The rib cage is directly joined to these bones.",
    "question": "The backbone consists of many small bones called vertebrae. How many vertebrae make up the backbone?",
    "options": [
      "A) 12",
      "B) 24",
      "C) 33",
      "D) 206"
    ],
    "answer": "C) 33",
    "explanation": "The backbone is composed of 33 vertebrae, providing core flexibility and support. At the lower end of this backbone, it connects to another distinct set of bones that form a sturdy base for the body."
  },
  {
    "id": 15,
    "context": "Moving downwards past the stomach area, there are prominent bones that enclose the lowest portion of the abdominal cavity.",
    "question": "Which bones enclose the portion of your body below the stomach and form the part you sit on?",
    "options": [
      "A) Shoulder bones",
      "B) Pelvic bones",
      "C) Rib cage",
      "D) Skull"
    ],
    "answer": "B) Pelvic bones",
    "explanation": "The pelvic bones support the lower body and internal organs, functioning as the base of the skeleton. Conversely, at the very top of the skeleton, a different complex bone structure is responsible for protecting the brain."
  },
  {
    "id": 16,
    "context": "The head consists of a very important part of the skeleton made of many bones tightly joined together.",
    "question": "What is the main function of the skull?",
    "options": [
      "A) To help the body breathe",
      "B) To digest food",
      "C) To enclose and protect the brain",
      "D) To pump blood"
    ],
    "answer": "C) To enclose and protect the brain",
    "explanation": "The hard bones of the skull act as a rigid protective helmet for the brain. However, not all parts of the human skeletal framework are made of such unyielding bone material."
  },
  {
    "id": 17,
    "context": "There are some additional parts of the skeleton, found in places like the upper ear and joints, that are not as hard as bones and can be bent.",
    "question": "What is this softer, bendable skeletal material called?",
    "options": [
      "A) Muscle",
      "B) Carples",
      "C) Cartilage",
      "D) Bristles"
    ],
    "answer": "C) Cartilage",
    "explanation": "Cartilage provides flexible support in places like the ears and cushions the body's joints. However, neither bones nor cartilage can move on their own; they require active tissues to pull them into motion."
  },
  {
    "id": 18,
    "context": "To move a bone, specific tissues must contract. When contracted, these tissues become shorter, stiffer, and thicker, pulling the bone in a specific direction.",
    "question": "How do muscles work to move a bone?",
    "options": [
      "A) A single muscle pushes the bone forward.",
      "B) Muscles work in pairs; one contracts to pull the bone, while the other relaxes.",
      "C) Muscles secrete a slime that slides the bone.",
      "D) Muscles expand to push the bone away."
    ],
    "answer": "B) Muscles work in pairs; one contracts to pull the bone, while the other relaxes.",
    "explanation": "Because a muscle can only pull and not push, muscles must work in pairs to move bones back and forth. While humans rely on this bone-muscle interaction, some animals achieve complex movements without any internal skeletal bones."
  },
  {
    "id": 19,
    "context": "An earthworm's body is made up of many rings joined end to end, and it entirely lacks an internal bony skeleton.",
    "question": "How does an earthworm primarily move its body forward?",
    "options": [
      "A) By flapping its wings",
      "B) By using tiny legs hidden underneath",
      "C) Through alternate expansion and contraction of the body using muscles",
      "D) By sliding on its smooth outer shell"
    ],
    "answer": "C) Through alternate expansion and contraction of the body using muscles",
    "explanation": "The earthworm uses its muscles to continuously extend and shorten its ringed body. To execute this forward motion effectively, the worm needs a physical mechanism to anchor itself firmly to the soil."
  },
  {
    "id": 20,
    "context": "While moving, an earthworm must fix its front end, release the rear, and then shorten its body to pull the rear forward.",
    "question": "What structures project out from under an earthworm's body to help it get a good grip on the ground?",
    "options": [
      "A) Scales",
      "B) Fins",
      "C) Tiny bristles (hair-like structures)",
      "D) Small claws"
    ],
    "answer": "C) Tiny bristles (hair-like structures)",
    "explanation": "The tiny bristles act as necessary anchors, allowing the worm to grip the earth securely. Another slow-moving garden creature uses a completely different body structure, opting to carry a heavy shelter on its back."
  },
  {
    "id": 21,
    "context": "A snail carries a prominent rounded structure on its back. This structure is a single solid unit and must be dragged along as the snail travels.",
    "question": "What is the rounded structure on a snail's back called, which acts as its outer skeleton?",
    "options": [
      "A) Cartilage",
      "B) Rib cage",
      "C) The shell",
      "D) Pelvic bone"
    ],
    "answer": "C) The shell",
    "explanation": "The snail's shell provides protection but does not actively assist in mobility. Because the shell is passive, the snail must rely on a specialized, protruding muscular organ to propel itself forward."
  },
  {
    "id": 22,
    "context": "When a snail begins to move, a thick structure and a head come out of the shell opening. The thick structure is made of strong muscles.",
    "question": "What is the thick, muscular structure that a snail uses to move called?",
    "options": [
      "A) Muscular foot",
      "B) Bristles",
      "C) Fins",
      "D) Cartilage"
    ],
    "answer": "A) Muscular foot",
    "explanation": "The muscular foot creates a continuous wavy motion to slowly propel the snail. In stark contrast to a snail's slow crawl, some insects have rigid outer coverings that allow them to scurry quickly and even take flight."
  },
  {
    "id": 23,
    "context": "Cockroaches have three pairs of legs for walking and two pairs of wings. Their body is covered by a hard outer skeleton that protects them.",
    "question": "What structural feature allows a cockroach's hard outer skeleton to permit movement?",
    "options": [
      "A) It is made of soft cartilage.",
      "B) It is composed of number of plates joined together.",
      "C) It is highly streamlined like a fish.",
      "D) It is supported by an internal bony skeleton."
    ],
    "answer": "B) It is composed of number of plates joined together.",
    "explanation": "The joined plates of the outer skeleton act as joints, giving the cockroach the flexibility to walk and fly. While insects use an outer skeleton for flight, some vertebrates achieve flight through highly specialized internal skeletons."
  },
  {
    "id": 24,
    "context": "Birds can fly in the air and walk on the ground. Their bodies are well suited for flying due to specific lightweight adaptations in their skeletal system.",
    "question": "Which characteristic of bird bones makes them exceptionally well-suited for flying?",
    "options": [
      "A) The bones are dense and heavy.",
      "B) The bones are hollow and light.",
      "C) The bones are completely made of cartilage.",
      "D) The bones are fused into a single immovable unit."
    ],
    "answer": "B) The bones are hollow and light.",
    "explanation": "Hollow, light bones significantly reduce the bird's overall weight, making flight possible when combined with strong breast muscles. Similarly, animals living exclusively in water have bodies specifically adapted to maneuver efficiently in their liquid environment."
  },
  {
    "id": 25,
    "context": "The head and tail of a fish are smaller than the middle portion of its body, tapering at both ends to allow water to flow around it with minimal resistance.",
    "question": "What is this specific, water-slicing body shape of a fish called?",
    "options": [
      "A) Cylindrical",
      "B) Spherical",
      "C) Streamlined",
      "D) Segmented"
    ],
    "answer": "C) Streamlined",
    "explanation": "The streamlined shape reduces water friction, allowing the fish to swim swiftly using its fins and body loops. From human joints to the streamlined shapes of fish, these diverse anatomical mechanisms are what prompted ancient philosophers to study the fascinating gait of animals."
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
