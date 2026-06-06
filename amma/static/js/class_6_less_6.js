// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Paheli and Boojho visited various places like the Himalayas, Rajasthan, and Puri, finding different kinds of living creatures in each.",
    "question": "What did Paheli and Boojho find out about the types of living organisms in the different locations they visited?",
    "options": [
      "A) They were all identical",
      "B) They were present but very similar",
      "C) They were of various kinds and very different from one another",
      "D) There were no organisms in some places"
    ],
    "answer": "C) They were of various kinds and very different from one another",
    "explanation": "The organisms varied greatly; for example, the sea and the desert are very different surroundings, leading to different kinds of plants and animals in each."
  },
  {
    "id": 2,
    "context": "The organisms varied greatly; for example, the sea and the desert are very different surroundings, leading to different kinds of plants and animals in each.",
    "question": "What is a key difference between the surroundings of the sea and the desert as described in the text?",
    "options": [
      "A) The sea has freshwater; the desert has snow",
      "B) Sea plants and animals are surrounded by salty water; the desert has very little water",
      "C) The sea is hot; the desert is cold",
      "D) Both have abundant water"
    ],
    "answer": "B) Sea plants and animals are surrounded by salty water; the desert has very little water",
    "explanation": "These contrasting environments require unique body structures for survival, such as the specific adaptations seen in camels for the desert."
  },
  {
    "id": 3,
    "context": "These contrasting environments require unique body structures for survival, such as the specific adaptations seen in camels for the desert.",
    "question": "Which of the following body structures helps a camel survive in desert conditions?",
    "options": [
      "A) Short legs to stay close to the ground",
      "B) Excretion of large amounts of urine",
      "C) Sweating profusely to cool down",
      "D) Long legs to keep their bodies away from the heat of the sand"
    ],
    "answer": "D) Long legs to keep their bodies away from the heat of the sand",
    "explanation": "Camels have long legs and excrete small amounts of urine to conserve water. Just as camels are suited for the desert, fish have structures suited for water."
  },
  {
    "id": 4,
    "context": "Just as camels are suited for the desert, fish have structures suited for water.",
    "question": "What feature helps fish use oxygen dissolved in water?",
    "options": [
      "A) Flat fins",
      "B) Slippery scales",
      "C) Gills",
      "D) Streamlined shape"
    ],
    "answer": "C) Gills",
    "explanation": "Gills help fish use dissolved oxygen. The presence of such specific features or certain habits that enable an organism to live naturally in a place is called adaptation."
  },
  {
    "id": 5,
    "context": "The presence of such specific features or certain habits that enable an organism to live naturally in a place is called adaptation.",
    "question": "Based on the concept of adaptation, what is the place where organisms live called?",
    "options": [
      "A) Acclimatisation",
      "B) Habitat",
      "C) Biotic component",
      "D) Stimulus"
    ],
    "answer": "B) Habitat",
    "explanation": "The place where organisms live is called a habitat, which means a dwelling place or home. Habitats on land are distinguished from those in water."
  },
  {
    "id": 6,
    "context": "Habitats on land are distinguished from those in water.",
    "question": "What are habitats of plants and animals that live on land called?",
    "options": [
      "A) Aquatic habitats",
      "B) Terrestrial habitats",
      "C) Aerial habitats",
      "D) Arboreal habitats"
    ],
    "answer": "B) Terrestrial habitats",
    "explanation": "Plants and animals living on land are in terrestrial habitats, while those in water are in aquatic habitats. Every habitat consists of both living and non-living things."
  },
  {
    "id": 7,
    "context": "Every habitat consists of both living and non-living things.",
    "question": "What do the non-living things such as rocks, soil, air, and water in a habitat constitute?",
    "options": [
      "A) Biotic components",
      "B) Aquatic components",
      "C) Abiotic components",
      "D) Terrestrial components"
    ],
    "answer": "C) Abiotic components",
    "explanation": "Rocks, soil, air, and water are abiotic components. Sometimes organisms undergo small, short-term changes to adjust to changes in these abiotic components, unlike long-term adaptations."
  },
  {
    "id": 8,
    "context": "Sometimes organisms undergo small, short-term changes to adjust to changes in these abiotic components, unlike long-term adaptations.",
    "question": "What are the small changes that take place in the body of a single organism over short periods to overcome small problems due to changes in the surroundings called?",
    "options": [
      "A) Evolution",
      "B) Adaptation",
      "C) Acclimatisation",
      "D) Germination"
    ],
    "answer": "C) Acclimatisation",
    "explanation": "Acclimatisation refers to short-term adjustments, such as breathing faster on high mountains. Long-term adaptation is different, as seen in how desert animals avoid intense heat."
  },
  {
    "id": 9,
    "context": "Long-term adaptation is different, as seen in how desert animals avoid intense heat.",
    "question": "How do desert animals like rats and snakes, which do not have long legs like a camel, stay away from the intense heat during the day?",
    "options": [
      "A) They swim in oasis water",
      "B) They stay in burrows deep in the sand",
      "C) They sweat continuously",
      "D) They hide under broad-leaved trees"
    ],
    "answer": "B) They stay in burrows deep in the sand",
    "explanation": "These animals stay in burrows during the day and come out at night. Similar to animals, desert plants also have profound adaptations to prevent water loss."
  },
  {
    "id": 10,
    "context": "Similar to animals, desert plants also have profound adaptations to prevent water loss.",
    "question": "How do desert plants reduce the loss of water through transpiration?",
    "options": [
      "A) By having broad, flat leaves",
      "B) By keeping their stomata permanently open",
      "C) Their leaves are either absent, very small, or in the form of spines",
      "D) By growing strictly in shaded areas"
    ],
    "answer": "C) Their leaves are either absent, very small, or in the form of spines",
    "explanation": "Reducing leaf surface area into spines helps minimize water loss. Since the leaves are reduced, another part of the plant takes over the role of food production."
  },
  {
    "id": 11,
    "context": "Since the leaves are reduced, another part of the plant takes over the role of food production.",
    "question": "In typical desert plants like a cactus, which part of the plant usually carries out photosynthesis?",
    "options": [
      "A) Deep roots",
      "B) Spines",
      "C) Flowers",
      "D) Stems"
    ],
    "answer": "D) Stems",
    "explanation": "The stems, which are covered with a thick waxy layer to retain water, carry out photosynthesis. Leaving the hot deserts, we find entirely different adaptations in cold, windy mountain regions."
  },
  {
    "id": 12,
    "context": "Leaving the hot deserts, we find entirely different adaptations in cold, windy mountain regions.",
    "question": "What characteristic shape helps trees in mountain regions allow rainwater and snow to slide off easily?",
    "options": [
      "A) Umbrella-shaped",
      "B) Cone-shaped with sloping branches",
      "C) Wide and flat",
      "D) Bushy with horizontal branches"
    ],
    "answer": "B) Cone-shaped with sloping branches",
    "explanation": "Mountain trees are normally cone-shaped and have sloping branches, often with needle-like leaves, to shed snow and water. The animals living in these regions also have special features to survive the cold."
  },
  {
    "id": 13,
    "context": "The animals living in these regions also have special features to survive the cold.",
    "question": "What adaptation protects animals like the snow leopard and yak from the cold mountain temperatures?",
    "options": [
      "A) Thin, smooth skin",
      "B) Thick skin or fur",
      "C) Cold-bloodedness",
      "D) Sweating mechanisms"
    ],
    "answer": "B) Thick skin or fur",
    "explanation": "Thick skin and heavy fur help insulate mountain animals from extreme cold. Now, considering grassland habitats, predators there rely on different physical adaptations to survive."
  },
  {
    "id": 14,
    "context": "Now, considering grassland habitats, predators there rely on different physical adaptations to survive.",
    "question": "How does the light brown colour of a lion help it survive in a forest or grassland?",
    "options": [
      "A) It protects the lion from sunburn",
      "B) It helps it attract a mate",
      "C) It helps it hide in dry grasslands when it hunts for prey",
      "D) It scares away other predators"
    ],
    "answer": "C) It helps it hide in dry grasslands when it hunts for prey",
    "explanation": "The lion's color acts as camouflage in dry grasslands while hunting. The prey animals, such as deer, also have specific adaptations to avoid being caught."
  },
  {
    "id": 15,
    "context": "The prey animals, such as deer, also have specific adaptations to avoid being caught.",
    "question": "Why are the eyes of a deer placed on the side of its head?",
    "options": [
      "A) To look in all directions for danger",
      "B) To focus binocularly on its prey",
      "C) To protect its eyes from thorny bushes",
      "D) To improve its night vision"
    ],
    "answer": "A) To look in all directions for danger",
    "explanation": "Eyes on the side of the head allow the deer to scan its surroundings for predators. Shifting focus from terrestrial environments, oceans also host organisms with unique shapes."
  },
  {
    "id": 16,
    "context": "Shifting focus from terrestrial environments, oceans also host organisms with unique shapes.",
    "question": "How do sea animals like squids and octopuses, which do not have a naturally streamlined shape, move efficiently in water?",
    "options": [
      "A) They walk on the ocean floor using their tentacles",
      "B) They float passively with the ocean currents",
      "C) They make their body shapes streamlined when they move in water",
      "D) They use trapped air bubbles to glide"
    ],
    "answer": "C) They make their body shapes streamlined when they move in water",
    "explanation": "Squids and octopuses stay deeper in the ocean but streamline their bodies when they need to swim. Unlike squids and fish, not all sea creatures use gills to breathe."
  },
  {
    "id": 17,
    "context": "Unlike squids and fish, not all sea creatures use gills to breathe.",
    "question": "How do sea animals like dolphins and whales breathe air?",
    "options": [
      "A) Through their skin",
      "B) Through gills",
      "C) Through blowholes located on the upper parts of their heads",
      "D) By absorbing oxygen from the water through their mouths"
    ],
    "answer": "C) Through blowholes located on the upper parts of their heads",
    "explanation": "Dolphins and whales breathe in air through nostrils or blowholes when they swim near the water surface. Another aquatic habitat is freshwater, like ponds and lakes, where plants exhibit unique traits."
  },
  {
    "id": 18,
    "context": "Another aquatic habitat is freshwater, like ponds and lakes, where plants exhibit unique traits.",
    "question": "In aquatic plants whose roots are fixed in the soil below the water, what is the main characteristic of their stems?",
    "options": [
      "A) Short, solid, and heavy",
      "B) Long, hollow, and light",
      "C) Thick and woody",
      "D) Covered with sharp spines"
    ],
    "answer": "B) Long, hollow, and light",
    "explanation": "These stems grow up to the surface of the water, allowing leaves and flowers to float. Some aquatic plants are entirely submerged, requiring different leaf adaptations."
  },
  {
    "id": 19,
    "context": "Some aquatic plants are entirely submerged, requiring different leaf adaptations.",
    "question": "Why do some completely submerged aquatic plants have highly divided leaves?",
    "options": [
      "A) To perform photosynthesis more efficiently in low light",
      "B) To deter aquatic animals from eating them",
      "C) So that water can easily flow through them without damaging them",
      "D) To trap small insects for food"
    ],
    "answer": "C) So that water can easily flow through them without damaging them",
    "explanation": "Highly divided leaves allow water currents to pass through safely. Animals in ponds, like frogs, also have specialized features for their dual life on land and in water."
  },
  {
    "id": 20,
    "context": "Animals in ponds, like frogs, also have specialized features for their dual life on land and in water.",
    "question": "What feature helps frogs swim in water?",
    "options": [
      "A) Streamlined scales",
      "B) Gills",
      "C) Webbed feet",
      "D) A flat tail"
    ],
    "answer": "C) Webbed feet",
    "explanation": "Frogs have strong back legs for leaping on land and webbed feet to help them swim in water. Examining these plants and animals brings up the question of what truly distinguishes living from non-living things."
  },
  {
    "id": 21,
    "context": "Examining these plants and animals brings up the question of what truly distinguishes living from non-living things.",
    "question": "According to the text, which of the following is NOT a characteristic common to all living beings?",
    "options": [
      "A) Need for food",
      "B) Respiration",
      "C) Ability to make their own food via photosynthesis",
      "D) Response to stimuli"
    ],
    "answer": "C) Ability to make their own food via photosynthesis",
    "explanation": "Only plants make their own food via photosynthesis; animals depend on plants or other animals, but ALL living things need food. This food provides energy for another essential life process: growth."
  },
  {
    "id": 22,
    "context": "This food provides energy for another essential life process: growth.",
    "question": "Which example best illustrates the characteristic of growth in living organisms?",
    "options": [
      "A) A cloud getting larger in the sky",
      "B) A baby growing into an adult",
      "C) A table taking up more space when expanded",
      "D) Water expanding when frozen"
    ],
    "answer": "B) A baby growing into an adult",
    "explanation": "While a cloud may seem to grow, biological growth is a characteristic of living organisms, like a baby or a chick growing into an adult. To fuel this growth and other processes, organisms extract energy from food."
  },
  {
    "id": 23,
    "context": "To fuel this growth and other processes, organisms extract energy from food.",
    "question": "What is the process called through which the body finally obtains energy from the food it takes, and of which breathing is a part?",
    "options": [
      "A) Excretion",
      "B) Digestion",
      "C) Respiration",
      "D) Reproduction"
    ],
    "answer": "C) Respiration",
    "explanation": "Respiration is necessary for all living organisms to extract energy from food. Different organisms have evolved distinct mechanisms for the gas exchange part of respiration."
  },
  {
    "id": 24,
    "context": "Different organisms have evolved distinct mechanisms for the gas exchange part of respiration.",
    "question": "How do earthworms breathe?",
    "options": [
      "A) Through gills",
      "B) Through their skin",
      "C) Through blowholes",
      "D) Through tiny pores in leaves"
    ],
    "answer": "B) Through their skin",
    "explanation": "Earthworms breathe through their skin, whereas fish use gills and plants use tiny pores in their leaves. Aside from internal processes like respiration, living things also react to their external environment."
  },
  {
    "id": 25,
    "context": "Aside from internal processes like respiration, living things also react to their external environment.",
    "question": "What are changes in our surroundings that make us respond to them called?",
    "options": [
      "A) Acclimatisation",
      "B) Stimuli",
      "C) Habitats",
      "D) Adaptations"
    ],
    "answer": "B) Stimuli",
    "explanation": "Stimuli are changes in the surroundings, like a sharp object or bright light, that prompt an immediate response. Plants, too, display fascinating responses to such environmental changes."
  },
  {
    "id": 26,
    "context": "Plants, too, display fascinating responses to such environmental changes.",
    "question": "What happens to the leaves of the Mimosa plant, commonly known as the 'touch-me-not', when someone touches them?",
    "options": [
      "A) They change color",
      "B) They fall off the plant",
      "C) They close or fold",
      "D) They release a strong scent"
    ],
    "answer": "C) They close or fold",
    "explanation": "The Mimosa plant responds to the stimulus of touch by closing or folding its leaves. Along with taking in resources and responding to stimuli, living organisms must deal with the byproducts of their life processes."
  },
  {
    "id": 27,
    "context": "Along with taking in resources and responding to stimuli, living organisms must deal with the byproducts of their life processes.",
    "question": "What is the process of getting rid of wastes by organisms known as?",
    "options": [
      "A) Respiration",
      "B) Excretion",
      "C) Reproduction",
      "D) Digestion"
    ],
    "answer": "B) Excretion",
    "explanation": "Excretion is the process where organisms remove wastes produced in other life processes. Furthermore, to ensure the continuation of their species over time, living things must create offspring."
  },
  {
    "id": 28,
    "context": "Furthermore, to ensure the continuation of their species over time, living things must create offspring.",
    "question": "How do many plants reproduce, aside from producing seeds?",
    "options": [
      "A) By laying eggs",
      "B) Through parts other than seeds, such as cuttings or buds",
      "C) By giving birth to young ones",
      "D) By excreting waste products"
    ],
    "answer": "B) Through parts other than seeds, such as cuttings or buds",
    "explanation": "Plants can reproduce through seeds, or through other parts like a potato bud or a rose cutting. While plants reproduce and perform other life functions while anchored in one place, they still exhibit another key characteristic of life."
  },
  {
    "id": 29,
    "context": "While plants reproduce and perform other life functions while anchored in one place, they still exhibit another key characteristic of life.",
    "question": "Even though plants are generally anchored in soil and do not move from place to place, how do they show movement?",
    "options": [
      "A) They walk at night",
      "B) They move substances like water and minerals from one part to another, and show movement in response to stimuli",
      "C) They detach their roots and float away",
      "D) They do not show any movement at all"
    ],
    "answer": "B) They move substances like water and minerals from one part to another, and show movement in response to stimuli",
    "explanation": "Plants show internal movement of substances and external movement like the opening and closing of flowers. These characteristics of life can sometimes be subtly observed even in things that appear dormant."
  },
  {
    "id": 30,
    "context": "These characteristics of life can sometimes be subtly observed even in things that appear dormant.",
    "question": "When you push your hand deep inside a sack of wheat, you find it is warm. What process taking place in the seeds causes this heat?",
    "options": [
      "A) Photosynthesis",
      "B) Excretion",
      "C) Respiration",
      "D) Reproduction"
    ],
    "answer": "C) Respiration",
    "explanation": "Seeds respire even when dormant, producing some heat, demonstrating that life processes continue, leading to the conclusion that \"life is beautiful\"."
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
