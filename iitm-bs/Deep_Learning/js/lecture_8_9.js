const quizData = 

[
  {
    "id": 1,
    "context": "The lecture begins by discussing the inputs used in models prior to the Perceptron.",
    "question": "In the models discussed prior to the Perceptron, what was the restriction on the inputs?",
    "options": [
      "A) They had to be real numbers.",
      "B) They had to be linearly separable.",
      "C) They had to be non-linearly separable.",
      "D) They had to be strictly boolean."
    ],
    "answer": "D) They had to be strictly boolean.",
    "explanation": "Before the Perceptron, models focused only on the case where inputs were boolean. This limitation leads us to consider how thresholds were managed in these early, simpler models."
  },
  {
    "id": 2,
    "context": "In early boolean toy examples, determining the threshold required a manual process.",
    "question": "How was the threshold determined for simple boolean functions like AND before a learning algorithm was introduced?",
    "options": [
      "A) Hand-coded or mentally calculated",
      "B) Learned from data",
      "C) Fixed to zero",
      "D) Randomly assigned"
    ],
    "answer": "A) Hand-coded or mentally calculated",
    "explanation": "The threshold was hand-coded or manually calculated. This manual calculation becomes cumbersome in complex cases, leading to questions about how these early models handled the importance of different inputs."
  },
  {
    "id": 3,
    "context": "As manual thresholds became cumbersome, another limitation of the McCulloch-Pitts (MP) neuron was its treatment of inputs.",
    "question": "How did the McCulloch-Pitts neuron handle the importance of different incoming inputs?",
    "options": [
      "A) It gave them random weights.",
      "B) It gave all inputs equal weights.",
      "C) It ignored weak inputs entirely.",
      "D) It prioritized the most recent input."
    ],
    "answer": "B) It gave all inputs equal weights.",
    "explanation": "The MP neuron assumed all inputs were equal, lacking a notion of importance. This contrasts sharply with how biological neurons function."
  },
  {
    "id": 4,
    "context": "The lack of importance weighting in MP neurons differs from the biological systems they were inspired by.",
    "question": "In a biological neuron, what represents the 'importance' of an input?",
    "options": [
      "A) The size of the neuron",
      "B) The speed of the electrical impulse",
      "C) The weight or strength of the connection between two neurons",
      "D) The distance between the neurons"
    ],
    "answer": "C) The weight or strength of the connection between two neurons",
    "explanation": "The biological neuron uses connection strength to weigh importance. This missing feature, along with geometric limitations, paved the way for addressing specific problem types."
  },
  {
    "id": 5,
    "context": "Besides weights, previous videos raised questions about the geometric limitations of functions that could be solved.",
    "question": "What specific type of boolean functions were raised as a potential challenge for these early models?",
    "options": [
      "A) Linearly separable boolean functions",
      "B) Non-linearly separable boolean functions",
      "C) Continuous real functions",
      "D) Exponential decay functions"
    ],
    "answer": "B) Non-linearly separable boolean functions",
    "explanation": "Non-linearly separable functions pose a challenge for simple models. To address these various questions, a new model was proposed in the late 1950s."
  },
  {
    "id": 6,
    "context": "To address the limitations of the MP neuron, a new model was introduced in history.",
    "question": "Who proposed the Perceptron model, and in what year?",
    "options": [
      "A) Warren McCulloch in 1943",
      "B) Marvin Minsky in 1969",
      "C) Frank Rosenblatt in 1958",
      "D) Seymour Papert in 1958"
    ],
    "answer": "C) Frank Rosenblatt in 1958",
    "explanation": "Frank Rosenblatt proposed the Perceptron in 1958. This new model introduced several key differences, starting with the types of inputs it could accept."
  },
  {
    "id": 7,
    "context": "The 1958 Perceptron model introduced several differences from the MP neuron regarding inputs.",
    "question": "What new type of inputs could the Perceptron handle that the previous neurons could not?",
    "options": [
      "A) Imaginary inputs",
      "B) Real inputs",
      "C) Categorical inputs",
      "D) Infinite inputs"
    ],
    "answer": "B) Real inputs",
    "explanation": "The Perceptron could process real inputs instead of just boolean ones. Alongside this, it introduced a mechanism to handle the importance of these inputs."
  },
  {
    "id": 8,
    "context": "With real inputs now possible, the Perceptron also needed a way to distinguish the significance of each factor.",
    "question": "What feature did the Perceptron introduce to tell which inputs are more important than others?",
    "options": [
      "A) Biases",
      "B) Activations",
      "C) Weights",
      "D) Thresholds"
    ],
    "answer": "C) Weights",
    "explanation": "Weights were introduced to capture the importance of inputs. However, knowing the right weights required a new mechanism to find them."
  },
  {
    "id": 9,
    "context": "Having weights meant the model needed a way to figure out what those weights should be without manual calculation.",
    "question": "What third major difference did the Perceptron introduce to find the correct weights?",
    "options": [
      "A) A randomizer",
      "B) A hard-coding mechanism",
      "C) A backpropagation loop",
      "D) A learning algorithm"
    ],
    "answer": "D) A learning algorithm",
    "explanation": "A learning algorithm was introduced to learn weights from data. Interestingly, the specific version of the model taught in the course is a later refinement."
  },
  {
    "id": 10,
    "context": "Although Rosenblatt introduced the original Perceptron, the course focuses on a later refinement.",
    "question": "Who refined and analyzed the Perceptron model in 1969?",
    "options": [
      "A) Minsky and Papert",
      "B) McCulloch and Pitts",
      "C) Turing and Von Neumann",
      "D) Hinton and LeCun"
    ],
    "answer": "A) Minsky and Papert",
    "explanation": "Minsky and Papert refined the model in 1969. With the historical context set, we can look at the mathematical form of this refined model."
  },
  {
    "id": 11,
    "context": "The mathematical form of the Perceptron builds upon the MP neuron but incorporates weights.",
    "question": "In the Perceptron model, what condition must be met for the output (y) to be 1?",
    "options": [
      "A) The weighted sum of the inputs must be equal to zero.",
      "B) The weighted sum of the inputs must be less than the threshold.",
      "C) The weighted sum of the inputs must be greater than or equal to the threshold.",
      "D) The raw sum of inputs must be greater than the threshold."
    ],
    "answer": "C) The weighted sum of the inputs must be greater than or equal to the threshold.",
    "explanation": "Output is 1 if the weighted sum is greater than or equal to the threshold. To express this mathematically, specific indices are used for the inputs."
  },
  {
    "id": 12,
    "context": "To formally write the weighted sum mathematically, indices are used to represent the series of inputs.",
    "question": "What are the indices for the weighted sum summation in the basic mathematical form of the Perceptron?",
    "options": [
      "A) 0 to n",
      "B) 1 to n",
      "C) 1 to infinity",
      "D) 0 to 1"
    ],
    "answer": "B) 1 to n",
    "explanation": "The indices run from 1 to n, representing the first to the nth input. This basic formula is then algebraically rewritten for neatness."
  },
  {
    "id": 13,
    "context": "The mathematical equation is rewritten to achieve a neater, more standardized form.",
    "question": "How is the threshold (theta) manipulated to rewrite the inequality into a neater form?",
    "options": [
      "A) It is added to the right side of the equation.",
      "B) It is multiplied by the input weights.",
      "C) It is subtracted from the weighted sum, setting the inequality against zero.",
      "D) It is divided by the number of inputs."
    ],
    "answer": "C) It is subtracted from the weighted sum, setting the inequality against zero.",
    "explanation": "Theta is moved to the left side, making the expression greater than or equal to zero. To completely absorb theta into the summation, an imaginary input is introduced."
  },
  {
    "id": 14,
    "context": "To absorb the threshold into the weighted sum summation, an imaginary input is added to the equation.",
    "question": "What is the designated value of the imaginary input x_0?",
    "options": [
      "A) 0",
      "B) -1",
      "C) 1",
      "D) Infinity"
    ],
    "answer": "C) 1",
    "explanation": "The imaginary input x_0 is set to 1. This allows the threshold to be represented as an imaginary weight that attaches to this input."
  },
  {
    "id": 15,
    "context": "With x_0 set to 1, the threshold is converted into a corresponding weight term to join the summation.",
    "question": "What does the weight w_0 equal in this new formulation?",
    "options": [
      "A) 1",
      "B) theta",
      "C) -theta",
      "D) 0"
    ],
    "answer": "C) -theta",
    "explanation": "The weight w_0 is equal to minus theta. This change subsequently alters the bounds of the mathematical summation."
  },
  {
    "id": 16,
    "context": "Because the threshold is now represented by x_0 and w_0, the summation formula changes to reflect this.",
    "question": "After rewriting the formula to include w_0 and x_0, what are the new limits of the summation?",
    "options": [
      "A) 1 to n",
      "B) 0 to n",
      "C) -1 to n",
      "D) 0 to infinity"
    ],
    "answer": "B) 0 to n",
    "explanation": "The summation now naturally runs from 0 to n. With the mathematical form established, the lecture applies this formula to practical scenarios using boolean mapping."
  },
  {
    "id": 17,
    "context": "The mathematical formulation is applied to real-world tasks using boolean concepts to represent complex decisions.",
    "question": "How can a real-world task like deciding whether to watch a movie be modeled using the Perceptron?",
    "options": [
      "A) By averaging all movie ratings together.",
      "B) By converting factors like actor, director, and genre into a series of boolean inputs.",
      "C) By ignoring genres and focusing on continuous time data.",
      "D) By plotting the movie length on a linear graph."
    ],
    "answer": "B) By converting factors like actor, director, and genre into a series of boolean inputs.",
    "explanation": "Real world inputs can be mapped to boolean inputs. Once mapped, the model must determine the influence of each input using past data."
  },
  {
    "id": 18,
    "context": "Once real-world factors are converted to boolean inputs, the model uses weights to reflect their specific influence on the final decision.",
    "question": "How does the Perceptron model determine the weights for these real-world boolean inputs?",
    "options": [
      "A) By manually coding them based on user surveys.",
      "B) By learning them from data based on past viewing experiences.",
      "C) By assigning random values to each genre.",
      "D) By keeping them perfectly equal."
    ],
    "answer": "B) By learning them from data based on past viewing experiences.",
    "explanation": "Weights are learned from past data. This weighting system allows for certain strong preferences to completely dominate the decision-making process."
  },
  {
    "id": 19,
    "context": "The learned weights can heavily influence the model's decision, even if only one input is actively triggered.",
    "question": "What can happen if an input signal is weak (only one input is on) but its associated weight is very high?",
    "options": [
      "A) The model outputs an error code.",
      "B) The weighted sum might still cross the threshold.",
      "C) The threshold is automatically doubled.",
      "D) The input is ignored because it lacks support."
    ],
    "answer": "B) The weighted sum might still cross the threshold.",
    "explanation": "A single high weight can push the sum over the threshold. This behavior is balanced by the w_0 term, which dictates the overall difficulty of crossing that threshold."
  },
  {
    "id": 20,
    "context": "The w_0 term plays a crucial role in establishing the baseline difficulty of crossing the decision boundary.",
    "question": "What is the w_0 term commonly referred to as in this context?",
    "options": [
      "A) The activation limit",
      "B) The bias, prior, or prejudice",
      "C) The margin of error",
      "D) The gradient"
    ],
    "answer": "B) The bias, prior, or prejudice",
    "explanation": "w_0 is conceptually called the bias, prior, or prejudice. By acting as a baseline, it functionally acts as a form of resistance in the decision-making process."
  },
  {
    "id": 21,
    "context": "Thinking of the bias conceptually helps understand its physical role in the weighted summation.",
    "question": "If theta (or -w_0) is a very high positive value, how does the lecturer describe its effect on the summation?",
    "options": [
      "A) It acts as a blockage or high inertia, starting the sum at a high negative value.",
      "B) It makes the output guaranteed to be 1.",
      "C) It immediately cancels out all negative weights.",
      "D) It turns the linear boundary into a curve."
    ],
    "answer": "A) It acts as a blockage or high inertia, starting the sum at a high negative value.",
    "explanation": "A high theta acts as blockage or inertia. To illustrate this, the lecturer uses the example of a very selective movie watcher."
  },
  {
    "id": 22,
    "context": "The concept of high inertia is applied directly to the movie-watching example to illustrate real-world meaning.",
    "question": "In the movie-watching example, what kind of person would have a high threshold (e.g., theta = 3)?",
    "options": [
      "A) A child who watches any cartoon.",
      "B) A movie buff who loves all cinema.",
      "C) A niche moviegoer who only watches specific types of movies.",
      "D) A critic who hates every movie."
    ],
    "answer": "C) A niche moviegoer who only watches specific types of movies.",
    "explanation": "A niche viewer has a high threshold, requiring many specific conditions to be met. Conversely, someone with broad tastes has a very different threshold setup."
  },
  {
    "id": 23,
    "context": "A viewer with broad tastes requires fewer conditions to be met to decide to watch a film.",
    "question": "What would the threshold likely be for a 'movie buff' who watches a movie regardless of the actor or director?",
    "options": [
      "A) 3",
      "B) 10",
      "C) 0",
      "D) -10"
    ],
    "answer": "C) 0",
    "explanation": "A movie buff might have a threshold of zero. These examples show how the bias operates conceptually before any input data is even evaluated."
  },
  {
    "id": 24,
    "context": "The bias sets a baseline before inputs are evaluated, giving the network a starting stance.",
    "question": "What does the threshold try to encode before knowing the data or the inputs?",
    "options": [
      "A) The exact number of variables.",
      "B) The initial prior or prejudice about taking a positive versus negative decision.",
      "C) The margin of error of the past dataset.",
      "D) The maximum possible weight value."
    ],
    "answer": "B) The initial prior or prejudice about taking a positive versus negative decision.",
    "explanation": "It encodes the initial prior or prejudice. Having established what the individual parameters mean, the lecture shifts to the capabilities of the overall model itself."
  },
  {
    "id": 25,
    "context": "The lecture shifts from the specific parameters of the Perceptron to the broader types of mathematical problems it can solve.",
    "question": "What kind of functions could the earlier McCulloch-Pitts (MP) neuron implement?",
    "options": [
      "A) Non-linearly separable boolean functions",
      "B) Linearly separable boolean functions",
      "C) Polynomial curves",
      "D) Deep neural networks"
    ],
    "answer": "B) Linearly separable boolean functions",
    "explanation": "The MP neuron could implement linearly separable boolean functions. Comparing the mathematical forms reveals if the Perceptron can do anything fundamentally different."
  },
  {
    "id": 26,
    "context": "To see if the Perceptron differs from the MP neuron in the functions it can implement, their mathematical inequalities are compared.",
    "question": "What is the key mathematical difference in the inequality between the MP neuron and the Perceptron?",
    "options": [
      "A) The Perceptron uses summation w_i x_i while MP uses summation x_i.",
      "B) The Perceptron uses an exponential limit.",
      "C) The MP neuron requires calculus.",
      "D) The MP neuron operates on 3D matrices."
    ],
    "answer": "A) The Perceptron uses summation w_i x_i while MP uses summation x_i.",
    "explanation": "The Perceptron includes coefficients (weights) in its summation. Despite this difference, the geometric shape that both equations form remains the same."
  },
  {
    "id": 27,
    "context": "Despite the addition of weights, the geometric output of the Perceptron is fundamentally similar to the MP neuron.",
    "question": "What geometric boundary is the Perceptron actually finding?",
    "options": [
      "A) A circular cluster",
      "B) A parabolic curve",
      "C) A linear decision boundary",
      "D) An infinite asymptote"
    ],
    "answer": "C) A linear decision boundary",
    "explanation": "Both models find a linear decision boundary. This linear boundary divides the 2D or multi-dimensional space into two distinct regions."
  },
  {
    "id": 28,
    "context": "The linear boundary divides the spatial layout of the input combinations into two separate regions.",
    "question": "What are the two spaces created by the separating line?",
    "options": [
      "A) The neutral zone and the positive zone",
      "B) The positive half-space (output 1) and negative half-space (output 0)",
      "C) The upper hemisphere and lower hemisphere",
      "D) The real plane and the imaginary plane"
    ],
    "answer": "B) The positive half-space (output 1) and negative half-space (output 0)",
    "explanation": "The line creates positive and negative half-spaces. Since both the MP and Perceptron models draw these same linear boundaries, the lecture clarifies their main difference."
  },
  {
    "id": 29,
    "context": "Since both the MP neuron and Perceptron find linear boundaries and separate spaces, their true distinction lies elsewhere.",
    "question": "If both models learn a linear decision boundary, what is the core advantage of the Perceptron?",
    "options": [
      "A) It can process boolean inputs faster.",
      "B) It has no threshold.",
      "C) It has weights and a learning algorithm for those weights.",
      "D) It can process images natively."
    ],
    "answer": "C) It has weights and a learning algorithm for those weights.",
    "explanation": "The perceptron brings weights and an automated learning algorithm to the table. This algorithmic advancement is a stepping stone to more complex architectures discussed later in the course."
  },
  {
    "id": 30,
    "context": "The Perceptron's learning algorithm is viewed as a stepping stone to much more advanced concepts in AI.",
    "question": "What future architectures does the lecturer state this territory of learning will eventually lead to?",
    "options": [
      "A) Quantum computing and qubits",
      "B) Sigmoid neurons and deep neural networks",
      "C) Decision trees and random forests",
      "D) Turing machines"
    ],
    "answer": "B) Sigmoid neurons and deep neural networks",
    "explanation": "The course will eventually progress to sigmoid neurons and deep neural networks. To ground the linear boundary concept before moving on, the lecture explores the OR boolean function."
  },
  {
    "id": 31,
    "context": "The lecture explores the linear boundary geometrically by mapping out the OR boolean function.",
    "question": "When expanding the mathematical perceptron function for the OR gate, how many inequalities are created?",
    "options": [
      "A) Two",
      "B) Three",
      "C) Four",
      "D) Eight"
    ],
    "answer": "C) Four",
    "explanation": "Four inequalities are created to fully represent the OR function's truth table. The first of these inequalities corresponds to the baseline input of (0,0)."
  },
  {
    "id": 32,
    "context": "The first inequality of the OR function evaluates the baseline case where both inputs are zero.",
    "question": "What does the first inequality for the OR function (inputs 0,0) mathematically imply about w_0?",
    "options": [
      "A) w_0 should be exactly 0",
      "B) w_0 should be less than 0",
      "C) w_0 should be greater than 1",
      "D) w_0 should be equal to w_1"
    ],
    "answer": "B) w_0 should be less than 0",
    "explanation": "Since the desired output for (0,0) is 0, w_0 must be less than 0. The second inequality evaluates the input case where one value is triggered."
  },
  {
    "id": 33,
    "context": "The second inequality of the OR function evaluates the case where the inputs are 0 and 1.",
    "question": "What does the second equation for the OR function (w_0 + w_1*0 + w_2*1 >= 0) imply about the parameters?",
    "options": [
      "A) w_2 should be greater than or equal to -w_0.",
      "B) w_1 must be less than w_2.",
      "C) w_2 should be exactly equal to 0.",
      "D) w_0 must be greater than w_2."
    ],
    "answer": "A) w_2 should be greater than or equal to -w_0.",
    "explanation": "It implies w_2 >= -w_0. Instead of algorithmically solving all these constraints, the lecturer initially provides a manual solution to demonstrate validity."
  },
  {
    "id": 34,
    "context": "To demonstrate a working model of the OR function, the lecturer provides hand-picked values that satisfy all four constraints.",
    "question": "What set of values does the lecturer provide that successfully satisfies the OR function inequalities?",
    "options": [
      "A) w_0 = 1, w_1 = 0, w_2 = 0",
      "B) w_0 = -1, w_1 = 1.1, w_2 = 1.1",
      "C) w_0 = 0, w_1 = -1.1, w_2 = -1.1",
      "D) w_0 = 2, w_1 = 2, w_2 = 2"
    ],
    "answer": "B) w_0 = -1, w_1 = 1.1, w_2 = 1.1",
    "explanation": "The values w_0 = -1, w_1 = 1.1, and w_2 = 1.1 correctly satisfy all equations. These validated values are then plotted geometrically on a graph."
  },
  {
    "id": 35,
    "context": "The hand-picked weight values are plotted geometrically on a graph to visualize the decision boundary.",
    "question": "In the geometric interpretation, what does the line equal to zero represent?",
    "options": [
      "A) The exact path of the data points",
      "B) The sum of all errors",
      "C) The separating line between the positive and negative half-spaces",
      "D) The maximum possible output"
    ],
    "answer": "C) The separating line between the positive and negative half-spaces",
    "explanation": "The line = 0 acts as the separating boundary between the half-spaces. The visual plot uses colors to denote these different conceptual spaces."
  },
  {
    "id": 36,
    "context": "The visual plot uses colors to easily differentiate the half-spaces created by the separating line.",
    "question": "In the lecturer's visual plot, what does the green shaded region represent?",
    "options": [
      "A) The error zone",
      "B) The negative half-space where outputs are less than zero",
      "C) The positive half-space where outputs are greater than or equal to zero",
      "D) The unclassified data points"
    ],
    "answer": "C) The positive half-space where outputs are greater than or equal to zero",
    "explanation": "The green region is the positive half-space representing an output of 1. The other colored region must contain points that yield a negative output."
  },
  {
    "id": 37,
    "context": "The red zone in the plot represents the negative half-space, which yields an output of 0.",
    "question": "Which boolean input point correctly lies in the red zone for the OR function?",
    "options": [
      "A) 1,1",
      "B) 0,1",
      "C) 1,0",
      "D) 0,0"
    ],
    "answer": "D) 0,0",
    "explanation": "The point (0,0) correctly lies in the red zone for an OR gate. If points accidentally fall into the wrong regions, the model exhibits errors."
  },
  {
    "id": 38,
    "context": "When adjusting the line experimentally, some points may fall into the wrong half-space, leading to an invalid model.",
    "question": "In an example of an invalid solution provided by the lecturer, why is the error listed as 2?",
    "options": [
      "A) Two green points that should have been in the positive half-space are lying in the negative half-space.",
      "B) The line was drawn twice.",
      "C) Both weights were set to zero.",
      "D) The bias term exceeded the value of 2."
    ],
    "answer": "A) Two green points that should have been in the positive half-space are lying in the negative half-space.",
    "explanation": "An error of 2 means two points are sitting in the wrong half-space. One parameter that can be adjusted to fix the boundary position is w_0."
  },
  {
    "id": 39,
    "context": "Adjusting the mathematical parameters visually changes the position of the decision line on the graph.",
    "question": "In terms of drawing a line on a 2D graph, what does adjusting the w_0 (threshold) value physically do?",
    "options": [
      "A) It adjusts the slope of the line.",
      "B) It adjusts where the line intercepts the y-axis.",
      "C) It curves the line into a circle.",
      "D) It changes the thickness of the line."
    ],
    "answer": "B) It adjusts where the line intercepts the y-axis.",
    "explanation": "w_0 physically acts as the y-intercept. The ultimate goal of making these adjustments is to reach a state where no errors occur."
  },
  {
    "id": 40,
    "context": "The ultimate goal of adjusting the intercept and slope of the line is to eliminate classification errors entirely.",
    "question": "According to the lecture, what should a successful learning algorithm achieve when drawing the decision line?",
    "options": [
      "A) It should perfectly intersect all data points.",
      "B) It should put negative points on one side and positive points on the other side.",
      "C) It should balance the number of points perfectly on the line.",
      "D) It should minimize the distance between the points and the origin."
    ],
    "answer": "B) It should put negative points on one side and positive points on the other side.",
    "explanation": "The algorithm must correctly divide the positive and negative points. Interestingly, manually finding a line that does this was also possible in earlier models."
  },
  {
    "id": 41,
    "context": "Manual constraint solving wasn't unique to the Perceptron; it could technically be done for the simpler MP neuron as well.",
    "question": "If solving inequalities manually for the MP neuron, what is the only variable you are trying to find?",
    "options": [
      "A) w_1",
      "B) w_2",
      "C) x_1",
      "D) theta (or w_0)"
    ],
    "answer": "D) theta (or w_0)",
    "explanation": "For the MP neuron, only theta needed to be found since weights weren't adjustable. Because doing this manually for complex, real-world problems is hard, the lecture introduces the concept of tracking errors mathematically."
  },
  {
    "id": 42,
    "context": "Manual calculations become impossible in high dimensions, prompting a deeper look at how errors behave as model parameters change.",
    "question": "In the subsequent module, what geometric concept does the lecturer introduce to analyze errors further?",
    "options": [
      "A) Loss gradients",
      "B) Error surfaces",
      "C) Probability clouds",
      "D) Confusion matrices"
    ],
    "answer": "B) Error surfaces",
    "explanation": "Error surfaces are introduced to visualize how errors change based on parameter shifts. This concept is demonstrated using a different boolean function: AND."
  },
  {
    "id": 43,
    "context": "To explain error surfaces, the lecture switches from the OR function to analyzing the AND boolean function.",
    "question": "For the AND function, how many of the four input points should correctly lie in the negative half-space?",
    "options": [
      "A) Zero",
      "B) One",
      "C) Two",
      "D) Three"
    ],
    "answer": "D) Three",
    "explanation": "Three points (the red inputs) should lie in the negative half-space for the AND function, as they output 0. The lecture clarifies a common semantic misconception about these visual spaces."
  },
  {
    "id": 44,
    "context": "Visualizing the separating line and the points can lead to a semantic misunderstanding about spatial relations.",
    "question": "Why is it incorrect to define the positive and negative half-spaces simply as 'above' or 'below' the line?",
    "options": [
      "A) Because the graph is constantly rotating.",
      "B) Because the line is technically a curve.",
      "C) Because it strictly boils down to which mathematical inequality (greater/less than zero) is satisfied, regardless of visual position.",
      "D) Because negative points are always above the line."
    ],
    "answer": "C) Because it strictly boils down to which mathematical inequality (greater/less than zero) is satisfied, regardless of visual position.",
    "explanation": "Half-spaces are strictly defined by the inequality, not vertical positioning on a screen. To demonstrate how this works in practice, an incorrect line is tested."
  },
  {
    "id": 45,
    "context": "An incorrect line is drawn to demonstrate how points fall into the wrong half-spaces based on the strict mathematical inequality.",
    "question": "What error occurs when the values W1 = -1 and W2 = -1 (with W0 = -1) are tested on the AND function?",
    "options": [
      "A) Zero errors occur.",
      "B) One error occurs, because the point (1,1) incorrectly lies in the negative half-space.",
      "C) Two errors occur.",
      "D) Four errors occur."
    ],
    "answer": "B) One error occurs, because the point (1,1) incorrectly lies in the negative half-space.",
    "explanation": "The point (1,1) is mistakenly placed in the negative half-space, resulting in an error of 1. As the lecturer tests different weights, the error count changes."
  },
  {
    "id": 46,
    "context": "As different combinations of weights are tested during the demonstration, the total error count fluctuates accordingly.",
    "question": "Because the error count changes depending on the values of W1 and W2, how can 'error' be conceptualized mathematically?",
    "options": [
      "A) As a constant.",
      "B) As a random variable.",
      "C) As a function of W1 and W2.",
      "D) As an independent input."
    ],
    "answer": "C) As a function of W1 and W2.",
    "explanation": "Error is fundamentally a function of the weights W1 and W2. This functional relationship is subsequently mapped onto a 3D graph."
  },
  {
    "id": 47,
    "context": "The functional relationship between weights and errors is mapped onto a 3D graph to create a visual error surface.",
    "question": "On the 3D error surface plot shown, what variable is plotted along the Z-axis?",
    "options": [
      "A) The W1 weight",
      "B) The W2 weight",
      "C) The threshold (theta)",
      "D) The error"
    ],
    "answer": "D) The error",
    "explanation": "Error is plotted on the vertical Z-axis. Because the dataset only consists of four discrete boolean points, the values on this axis have specific constraints."
  },
  {
    "id": 48,
    "context": "Due to the boolean dataset consisting of only four discrete points, the error values recorded are mathematically limited.",
    "question": "What specific types of values can the error function take in this boolean example?",
    "options": [
      "A) Infinite rational numbers",
      "B) Negative numbers",
      "C) Integer values (0, 1, 2, or 3)",
      "D) Percentages from 0 to 100"
    ],
    "answer": "C) Integer values (0, 1, 2, or 3)",
    "explanation": "The error can only take the integers 0, 1, 2, or 3. This discrete nature gives the resulting 3D graph a unique visual appearance."
  },
  {
    "id": 49,
    "context": "The limited integer values on the Z-axis shape the overall geometry of the error surface graph.",
    "question": "Why does the error surface appear visually as a 'step function' rather than a smooth, continuous curve?",
    "options": [
      "A) Because the graph rendering software is low resolution.",
      "B) Because the error can only take distinct integer values based on discrete misclassifications.",
      "C) Because the weights W1 and W2 are rounded to whole numbers.",
      "D) Because a step function is easier to calculate."
    ],
    "answer": "B) Because the error can only take distinct integer values based on discrete misclassifications.",
    "explanation": "The integer values strictly create a stepped structure. Notably, looking at these steps, the maximum error is capped at 3 instead of 4."
  },
  {
    "id": 50,
    "context": "Looking at the step function, it is noted that the error level never reaches 4, despite there being four total points.",
    "question": "Why can the maximum error only be 3, rather than 4, for these simple boolean functions?",
    "options": [
      "A) The formula automatically drops the lowest score.",
      "B) The origin point (0,0) is always ignored.",
      "C) All four points lying entirely in either half-space will naturally get at least one class right by default.",
      "D) The Perceptron model limits calculations to three iterations."
    ],
    "answer": "C) All four points lying entirely in either half-space will naturally get at least one class right by default.",
    "explanation": "An error of 4 is impossible because placing all points in a single half-space will correctly identify at least one of the output types. This limits visual plotting capability, proving the necessity for an automated Perceptron Learning Algorithm for dimensions larger than two."
  }
]






let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

function acc() {
  const total = correct + wrong;
  return total === 0 ? '--' : Math.round((correct / total) * 100) + '%';
}

function updateHUD() {
  document.getElementById('hdr-correct').textContent = correct;
  document.getElementById('hdr-wrong').textContent = wrong;
  document.getElementById('hdr-acc').textContent = acc();
  const pct = idx >= quizData.length ? 100 : Math.round((idx / quizData.length) * 100);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent =
    idx >= quizData.length ? 'COMPLETE' : `Q ${idx + 1} / ${quizData.length}`;
}

function refreshScore() {
  correct = answered.filter(a => a?.ok).length;
  wrong = answered.filter(a => a && !a.ok).length;
}

function recordAnswer(q) {
  if (answered[idx]) return;
  answered[idx] = {
    selected: chosen,
    ok: chosen === q.answer
  };
  refreshScore();
}

function prevButton() {
  return idx > 0
    ? '<button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>'
    : '';
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

  return ranges.join(', ');
}

function answeredRange() {
  const numbers = answered
    .map((answer, i) => answer ? i + 1 : null)
    .filter(Boolean);

  return formatRanges(numbers);
}

function questionGlimpse(question) {
  return question.length > 58 ? `${question.slice(0, 58)}...` : question;
}

function bindPrev() {
  const btn = document.getElementById('btn-prev');
  if (!btn) return;
  btn.onclick = () => { idx--; phase = 'explanation'; render(); };
}

function bindJump() {
  const input = document.getElementById('answered-jump');
  const preview = document.getElementById('answered-preview');
  if (!input || !preview) return;

  const updatePreview = () => {
    const target = Number(input.value) - 1;
    preview.textContent = answered[target]
      ? `Question ${target + 1}: ${questionGlimpse(quizData[target].question)}`
      : `Allowed values: ${answeredRange()}`;
  };

  const jumpToInput = () => {
    const target = Number(input.value) - 1;
    if (!answered[target]) {
      updatePreview();
      return;
    }

    idx = target;
    phase = 'explanation';
    render();
  };

  input.oninput = updatePreview;
  input.onchange = updatePreview;
  document.getElementById('btn-jump').onclick = jumpToInput;

  updatePreview();
}

function clearKeyboardHandler() {
  document.onkeydown = null;
}

function render() {
  updateHUD();
  const c = document.getElementById('card-container');
  c.innerHTML = '';
  if (idx >= quizData.length) { renderFinal(c); return; }
  if (phase === 'context')      renderCtx(c);
  else if (phase === 'question') renderQ(c);
  else                           renderExp(c);
}

function renderCtx(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  c.innerHTML = `
    <div class="sf-label">context // node ${idx + 1}</div>
    <div class="sf-content">${q.context}</div>
    <button class="sf-action" id="btn-fwd">PROCEED TO QUERY &gt;</button>
  `;
  document.getElementById('btn-fwd').onclick = () => { phase = 'question'; render(); };
}

function renderQ(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  chosen = null;
  const opts = q.options.map(o =>
    `<li><button class="sf-opt-btn" data-val="${o.replace(/"/g, '&quot;')}">${o}</button></li>`
  ).join('');
  c.innerHTML = `
    <div class="sf-label">query // node ${idx + 1}</div>
    <div class="sf-content">${q.question}</div>
    <ul class="sf-options">${opts}</ul>
    <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
  `;
  const sub = document.getElementById('btn-sub');
  const optionBtns = c.querySelectorAll('.sf-opt-btn');
  const selectOption = (btn) => {
    optionBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    chosen = btn.getAttribute('data-val');
    sub.disabled = false;
  };

  optionBtns.forEach(btn => {
    btn.onclick = () => {
      selectOption(btn);
    };
  });

  const submitAnswer = () => {
    recordAnswer(q);
    phase = 'explanation';
    render();
  };

  sub.onclick = submitAnswer;

  document.onkeydown = (event) => {
    const optionNumber = Number(event.key);

    if (Number.isInteger(optionNumber) && optionNumber >= 1 && optionNumber <= optionBtns.length) {
      event.preventDefault();
      selectOption(optionBtns[optionNumber - 1]);
      return;
    }

    if (event.key !== 'Enter') return;

    event.preventDefault();

    if (!chosen) {
      selectOption(optionBtns[0]);
      return;
    }

    submitAnswer();
  };
}

function renderExp(c) {
  clearKeyboardHandler();
  const q = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: chosen === q.answer };
  const ok = response.ok;
  const btnLbl = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';
  const opts = q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (o === q.answer)            cls += ' correct-reveal';
    else if (o === response.selected && !ok)  cls += ' wrong-reveal';
    return `<li><button class="${cls}" disabled>${o}</button></li>`;
  }).join('');
  c.innerHTML = `
    <div class="sf-label">analysis // node ${idx + 1}</div>
    <div class="sf-feedback ${ok ? 'ok' : 'fail'}">${ok ? '[ CORRECT ]' : '[ INCORRECT ]'}</div>
    <div class="sf-content"><strong>Question:</strong> ${q.question}</div>
    <ul class="sf-options">${opts}</ul>
    <div class="sf-explanation">${q.explanation}</div>
    <div class="sf-review-jump">
      <label for="answered-jump">Jump to</label>
      <input id="answered-jump" type="number" min="1" max="${quizData.length}" value="${idx + 1}" inputmode="numeric">
      <span class="sf-review-allowed">Allowed: ${answeredRange()}</span>
      <button id="btn-jump" class="sf-action sf-action-secondary">Jump</button>
      <div id="answered-preview" class="sf-review-preview"></div>
    </div>
    <div class="sf-actions">
      ${prevButton()}
      <button class="sf-action" id="btn-nxt">${btnLbl}</button>
    </div>
  `;
  bindPrev();
  bindJump();
  const goNext = () => {
    idx++;
    phase = answered[idx] ? 'explanation' : 'context';
    render();
  };

  document.getElementById('btn-nxt').onclick = goNext;

  document.onkeydown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    goNext();
  };
}

function renderFinal(c) {
  clearKeyboardHandler();
  const total = correct + wrong;
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  const grade      = pct >= 90 ? 'EXCEPTIONAL' : pct >= 70 ? 'PROFICIENT' : pct >= 50 ? 'DEVELOPING' : 'RETRY';
  const gradeColor = pct >= 90 ? 'var(--sf-success)' : pct >= 70 ? 'var(--sf-accent)' : pct >= 50 ? '#ffaa00' : 'var(--sf-error)';
  c.innerHTML = `
    <div class="sf-final">
      <div class="sf-final-title">// mission complete //</div>
      <div class="sf-final-stats">
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-success)">${correct}</span><span class="lbl">correct</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-error)">${wrong}</span><span class="lbl">incorrect</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-accent)">${pct}%</span><span class="lbl">accuracy</span></div>
      </div>
      <div class="sf-grade" style="color:${gradeColor}">${grade}</div>
      <div class="sf-final-note">For best pedagogical outcomes, repeat this quiz 2–3 times until the narrative flow feels entirely familiar.</div>
      <div class="sf-actions">
        <button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>
        <button class="sf-action" id="btn-restart">RESTART SEQUENCE &gt;</button>
      </div>
    </div>
  `;
  document.getElementById('btn-prev').onclick = () => {
    idx = quizData.length - 1;
    phase = 'explanation';
    render();
  };
  document.getElementById('btn-restart').onclick = () => {
    idx = 0; phase = 'context'; chosen = null; correct = 0; wrong = 0; answered = []; render();
  };
}

render();
