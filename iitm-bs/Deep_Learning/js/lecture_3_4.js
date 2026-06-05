const quizData = 
[
  {
    "id": 1,
    "context": "After proving deep networks could learn in theory, researchers between 2006 and 2012 focused on making them train effectively in practice.",
    "question": "What was the primary goal of improving optimization methods during this deep learning revival?",
    "options": [
      "A) Faster convergence",
      "B) Reducing the parameter count",
      "C) Converting networks to symbolic logic",
      "D) Decreasing the learning rate permanently"
    ],
    "answer": "A) Faster convergence",
    "explanation": "Achieving faster convergence to a better minimum was always a goal in machine learning. Way back in 1983, an early mathematical technique outperformed basic gradient descent to achieve this."
  },
  {
    "id": 2,
    "context": "In 1983, a researcher proposed an optimization method that achieved faster convergence than basic gradient descent.",
    "question": "Who proposed this highly influential 1983 optimization method?",
    "options": [
      "A) Geoffrey Hinton",
      "B) Yann LeCun",
      "C) Nesterov",
      "D) Frank Rosenblatt"
    ],
    "answer": "C) Nesterov",
    "explanation": "His main novel contribution is an accelerated version of gradient descent that converges considerably faster than ordinary gradient descent (commonly referred as Nesterov momentum, Nesterov Acceleration or Nesterov accelerated gradient, in short — NAG).Nesterov's idea was later scaled further into a series of modern optimization algorithms that power the deep learning models of today."
  },
  {
    "id": 3,
    "context": "Modern deep learning relies on a family of advanced optimization algorithms built on these earlier ideas to find better minima quickly.",
    "question": "Which of the following is a list of these modern optimization algorithms mentioned in the lecture?",
    "options": [
      "A) Depth-First, Breadth-First, A*",
      "B) Adagrad, RMSProp, Adam",
      "C) Backprop, Feedforward, Recurrent",
      "D) Localism, Connectionism, Distributed"
    ],
    "answer": "B) Adagrad, RMSProp, Adam",
    "explanation": "Algorithms like Adagrad, RMSProp, and Adam revolutionized training speed. Besides algorithms, researchers also completely overhauled the network's activation functions from what was used in the 1980s."
  },
  {
    "id": 4,
    "context": "In the 1980s and 90s, the choice of activation functions—the math that decides if a neuron fires—was very limited.",
    "question": "What was the primary activation function used during the 80s and 90s before the modern deep learning boom?",
    "options": [
      "A) ReLU",
      "B) Tanh",
      "C) The logistic function",
      "D) Softmax"
    ],
    "answer": "C) The logistic function",
    "explanation": "The logistic function was heavily used early on, but it was largely replaced by an 'industry' of new activation functions explicitly designed to stabilize deep network training."
  },
  {
    "id": 5,
    "context": "Since the logistic function era, many new activation functions have been proposed to stabilize training and improve performance.",
    "question": "Which of the following are examples of these newer, highly successful activation functions?",
    "options": [
      "A) Sigmoid and Step",
      "B) ReLU, Leaky ReLU, and GELU",
      "C) Linear and Polynomial",
      "D) Binary and Continuous"
    ],
    "answer": "B) ReLU, Leaky ReLU, and GELU",
    "explanation": "ReLU and its variants (like Leaky ReLU and GELU) became standard. Alongside these new activations, researchers also introduced novel network regularizers to further improve stability."
  },
  {
    "id": 6,
    "context": "To improve the training and stability of these networks and prevent overfitting, specific regularization techniques were widely adopted.",
    "question": "Which two methods are explicitly mentioned as acting as forms of regularization?",
    "options": [
      "A) Max Pooling and Average Pooling",
      "B) Dropout and Batch Normalization",
      "C) Gradient Descent and Backpropagation",
      "D) Fine-tuning and Pre-training"
    ],
    "answer": "B) Dropout and Batch Normalization",
    "explanation": "Dropout and Batch Normalization secured training stability. With optimizations and standard architectures locked down, researchers turned their attention to data that unfolds over time, like video and speech."
  },
  {
    "id": 7,
    "context": "Many real-world inputs, such as speech phonemes and frames in a video, arrive in a specific order that matters.",
    "question": "What type of processing is fundamentally required to handle these naturally ordered inputs?",
    "options": [
      "A) Sequence processing",
      "B) Image classification",
      "C) Unsupervised clustering",
      "D) Dimensionality reduction"
    ],
    "answer": "A) Sequence processing",
    "explanation": "Sequence processing is necessary because the order of data points contains meaning. The need for this was realized long ago, leading to early network designs in 1982."
  },
  {
    "id": 8,
    "context": "In 1982, an early neural network architecture was created that was capable of a rudimentary form of sequence processing.",
    "question": "What was the name of this 1982 sequence-capable network?",
    "options": [
      "A) The Hopfield network",
      "B) The Neocognitron",
      "C) The Perceptron",
      "D) The Transformer"
    ],
    "answer": "A) The Hopfield network",
    "explanation": "While the Hopfield network was an early attempt, true Recurrent Neural Networks (RNNs) became the standard by explicitly passing information from one time step to the next."
  },
  {
    "id": 9,
    "context": "In Recurrent Neural Networks, analyzing a millisecond of speech requires context from the previous millisecond.",
    "question": "How did the Jordan network, an early RNN, allow for these interactions across time steps?",
    "options": [
      "A) It used a massive dictionary of words.",
      "B) It fed the output at each time step as an input for the next time step.",
      "C) It converted all speech into binary code.",
      "D) It isolated each time step to process them independently."
    ],
    "answer": "B) It fed the output at each time step as an input for the next time step.",
    "explanation": "By feeding outputs into the next step, RNNs gained memory. However, despite this brilliant architecture proposed around 1990, RNNs severely struggled due to a mathematical flaw in calculating updates."
  },
  {
    "id": 10,
    "context": "When trying to train RNNs in the 1990s on long sequences, researchers encountered a major mathematical hurdle during backpropagation.",
    "question": "What specific problem prevented early RNNs from being used in real-world applications?",
    "options": [
      "A) Overfitting on small datasets",
      "B) Exploding and vanishing gradients",
      "C) The lack of any optimization algorithm",
      "D) Hardware overheating"
    ],
    "answer": "B) Exploding and vanishing gradients",
    "explanation": "The vanishing and exploding gradient problem meant the network completely forgot early parts of a sequence. To solve this, a highly specialized cell was proposed in 1997."
  },
  {
    "id": 11,
    "context": "In 1997, a new architecture was proposed specifically to alleviate the exploding and vanishing gradient problems plaguing standard RNNs.",
    "question": "What was this highly successful 1997 architecture called?",
    "options": [
      "A) Gated Recurrent Units (GRUs)",
      "B) Generative Adversarial Networks (GANs)",
      "C) Long Short-Term Memory (LSTM) cells",
      "D) Convolutional Autoencoders"
    ],
    "answer": "C) Long Short-Term Memory (LSTM) cells",
    "explanation": "LSTMs fixed the mathematical memory degradation. Yet, even with LSTMs available in 1997, they weren't widely used until 2014 when the hardware landscape shifted drastically."
  },
  {
    "id": 12,
    "context": "By 2014, deep learning had stabilized, GPUs provided massive compute, and large-scale datasets were suddenly available.",
    "question": "What happened to RNNs and LSTMs in 2014 as a direct result of these massively improved conditions?",
    "options": [
      "A) They were abandoned completely.",
      "B) They entered NLP and almost completely replaced statistical machine translation models.",
      "C) They were restricted to military use only.",
      "D) They proved that recurrent connections were mathematically impossible."
    ],
    "answer": "B) They entered NLP and almost completely replaced statistical machine translation models.",
    "explanation": "RNNs crushed the previous generation of statistical translation models. To understand the magnitude of this victory, we must look back at the origins of machine translation in 1954."
  },
  {
    "id": 13,
    "context": "The first major efforts in machine translation started way back in 1954, driven heavily by the geopolitical environment of the Cold War.",
    "question": "Which two languages were the primary focus of early 1954 machine translation efforts?",
    "options": [
      "A) Spanish and French",
      "B) Mandarin and Japanese",
      "C) English and Russian",
      "D) Hindi and Arabic"
    ],
    "answer": "C) English and Russian",
    "explanation": "Early hype promised perfect English-Russian translation in a few years, but a famous 1966 report shattered those optimistic expectations."
  },
  {
    "id": 14,
    "context": "After over a decade of failed promises in machine translation, a highly critical report was released in 1966.",
    "question": "What was the broader historical impact of this 1966 critical report?",
    "options": [
      "A) It resulted in infinite funding for AI.",
      "B) It contributed heavily to the 'AI Winter'.",
      "C) It proved that translation was a solved problem.",
      "D) It led to the immediate invention of the Transformer."
    ],
    "answer": "B) It contributed heavily to the 'AI Winter'.",
    "explanation": "By declaring the initial translation hype meaningless, the report helped freeze AI funding. Following the winter, a new paradigm emerged in the 1990s spearheaded by IBM."
  },
  {
    "id": 15,
    "context": "In the 1990s, IBM researchers cast translation as the probability of finding a specific French sequence given an English sequence.",
    "question": "What broad category of models were these 1990s IBM models?",
    "options": [
      "A) Connectionist models",
      "B) Deep Reinforcement models",
      "C) Probabilistic and statistical models",
      "D) Purely rule-based grammatical models"
    ],
    "answer": "C) Probabilistic and statistical models",
    "explanation": "These statistical machine translation models dominated the NLP field for 20 solid years, until an explosive new neural architecture dethroned them in 2014."
  },
  {
    "id": 16,
    "context": "In 2014, deep learning violently disrupted the 20-year reign of statistical machine translation, dropping an entirely new paradigm.",
    "question": "What specific neural model architecture caused this sudden paradigm shift in 2014?",
    "options": [
      "A) Support Vector Machines",
      "B) Sequence to Sequence with attention",
      "C) Convolutional Neural Networks",
      "D) Random Forests"
    ],
    "answer": "B) Sequence to Sequence with attention",
    "explanation": "Seq2Seq with attention wiped away decades of statistical modeling. However, its dominance was astonishingly brief, as a model that put 'attention on steroids' emerged just three years later."
  },
  {
    "id": 17,
    "context": "In 2017, a revolutionary model was introduced that utilized multi-headed attention, causing a second massive revolution in NLP.",
    "question": "What was the name of this 2017 model that rapidly replaced RNNs entirely?",
    "options": [
      "A) The Hopfield Network",
      "B) The Transformer",
      "C) The Neocognitron",
      "D) The Boltzmann Machine"
    ],
    "answer": "B) The Transformer",
    "explanation": "Transformers completely replaced RNNs in just a couple of years. Their incredible efficiency ushered in an era of massive, data-hungry models, including an iconic 2018 model designed to mimic human learning."
  },
  {
    "id": 18,
    "context": "In 2018, the BERT model was introduced, mimicking how humans learn language broadly before specializing in specific tasks.",
    "question": "How is BERT initially trained to gain a general understanding of language?",
    "options": [
      "A) By playing games against itself millions of times.",
      "B) Through unsupervised pre-training using large unlabeled corpora.",
      "C) By having humans manually label every single word.",
      "D) Using strictly supervised image data."
    ],
    "answer": "B) Through unsupervised pre-training using large unlabeled corpora.",
    "explanation": "Because it trains on unlabeled text like Wikipedia, BERT can scale massively. After this broad unsupervised phase, it requires a second, focused phase for specific tasks."
  },
  {
    "id": 19,
    "context": "After pre-training on massive web data, models like BERT need to be adapted for highly specific tasks, like sentiment analysis.",
    "question": "What is the process of training the model on a smaller amount of task-specific labeled data called?",
    "options": [
      "A) Fine-tuning",
      "B) Backpropagation",
      "C) Gradient Descent",
      "D) Feature Extraction"
    ],
    "answer": "A) Fine-tuning",
    "explanation": "Fine-tuning locks in the specific skill. Following the success of BERT's pipeline, models shifted from classification tasks to pure generative tasks, exemplified by the GPT series."
  },
  {
    "id": 20,
    "context": "The GPT series demonstrated incredible generative capabilities, allowing users to interact with the model directly without complex fine-tuning.",
    "question": "How do modern models like GPT-3 generate coherent conversations or articles for a user?",
    "options": [
      "A) By searching a hardcoded database of responses.",
      "B) By taking a text prompt and generating appropriate text based on it.",
      "C) By translating every query into Russian first.",
      "D) By simulating a human brain at the molecular level."
    ],
    "answer": "B) By taking a text prompt and generating appropriate text based on it.",
    "explanation": "By simply prompting the model, users can generate articles or code. To achieve this magical generative capability, GPT-3 was scaled to a size that dwarfed previous generations."
  },
  {
    "id": 21,
    "context": "As generative models scaled up, they entered a new tier of computational size that requires immense clusters of hardware.",
    "question": "How many parameters did the massive GPT-3 model possess?",
    "options": [
      "A) 100 Million",
      "B) 1.5 Billion",
      "C) 175 Billion",
      "D) 1.6 Trillion"
    ],
    "answer": "C) 175 Billion",
    "explanation": "With 175 billion parameters, GPT-3 blew past older models. The sheer size of these models led researchers to jokingly compare their parameter counts to biological structures in the animal brain."
  },
  {
    "id": 22,
    "context": "When comparing artificial deep networks to biological brains, the network's weights/parameters are often compared to the physical connections between biological neurons.",
    "question": "What are these biological connections called?",
    "options": [
      "A) Neurons",
      "B) Synapses",
      "C) Axons",
      "D) Dendrites"
    ],
    "answer": "B) Synapses",
    "explanation": "Synapses connect neurons just as parameters connect artificial nodes. The human brain has an astronomical number of these synapses, which modern AI models are attempting to rival."
  },
  {
    "id": 23,
    "context": "Modern Transformer models are pushing closer to human-level biological complexity in terms of raw connectivity.",
    "question": "Roughly how many synapses are estimated to be in the human brain?",
    "options": [
      "A) 10 Million",
      "B) 10 Billion",
      "C) 100 Billion",
      "D) 10^15 (1,000 trillion)"
    ],
    "answer": "D) 10^15 (1,000 trillion)",
    "explanation": "While 1,000 trillion is far beyond current hardware, a recent model called the Switch model officially crossed the 1 trillion mark, moving into the 'Trillion Parameter Club'."
  },
  {
    "id": 24,
    "context": "The relentless push for bigger models resulted in the Switch model, an NLP architecture with roughly 1.6 trillion parameters.",
    "question": "What massive hardware array was strictly required to train this 1.6 trillion parameter Switch model?",
    "options": [
      "A) 2048 TPUs",
      "B) A single consumer GPU",
      "C) 100 CPU clusters",
      "D) Quantum computing arrays"
    ],
    "answer": "A) 2048 TPUs",
    "explanation": "Training at this scale requires thousands of highly specialized TPUs. While Transformers were scaling exponentially in language, they soon began invading computer vision, a field long dominated by CNNs."
  },
  {
    "id": 25,
    "context": "Until 2019, image classification was the undisputed domain of Convolutional Neural Networks (CNNs).",
    "question": "Which famous 2012 CNN model won the ImageNet competition and triggered the deep learning vision boom?",
    "options": [
      "A) ResNet",
      "B) AlexNet",
      "C) VGG",
      "D) LeNet"
    ],
    "answer": "B) AlexNet",
    "explanation": "AlexNet proved CNNs worked with a 16% error rate. Just a few years later, an incredibly deep architecture pushed this error rate far below human baselines."
  },
  {
    "id": 26,
    "context": "By 2015, CNN architectures became much deeper, officially surpassing human-level performance on the ImageNet benchmark.",
    "question": "Which 152-layer CNN model achieved a staggering 3.6% error rate in 2015/2016?",
    "options": [
      "A) imagenet",
      "B) AlexNet",
      "C) Resnet",
      "D) Lenet"
    ],
    "answer": "C) 3.6%",
    "explanation": "ResNet achieved 3.6%. While classifying whole images was solved by ResNet, finding the exact coordinates of objects within the image required a different CNN offshoot."
  },
  {
    "id": 27,
    "context": "Identifying and locating multiple discrete items within an image required moving from simple classification to object detection.",
    "question": "What CNN-based family of models became the standard method for object detection around 2015?",
    "options": [
      "A) FastText",
      "B) R-CNN",
      "C) ImageNet",
      "D) Word2Vec"
    ],
    "answer": "B) R-CNN",
    "explanation": "R-CNN and its variants dominated object detection. However, despite CNNs holding both classification and detection crowns, Transformers arrived in 2019 to challenge them."
  },
  {
    "id": 28,
    "context": "By 2019, Transformers successfully entered the vision domain for both classification and object detection.",
    "question": "What is the current trend regarding Transformers and CNNs in vision tasks?",
    "options": [
      "A) Transformers are completely failing in vision.",
      "B) CNNs remain completely untouched by other architectures.",
      "C) Transformers are becoming the state-of-the-art, largely replacing traditional CNN models.",
      "D) Vision tasks have been completely abandoned."
    ],
    "answer": "C) Transformers are becoming the state-of-the-art, largely replacing traditional CNN models.",
    "explanation": "Transformers are violently replacing CNNs, mirroring what they did to RNNs. But AI researchers didn't just want to classify images; they wanted to generate entirely fake ones."
  },
  {
    "id": 29,
    "context": "Generative vision models aim to synthesize completely fake, highly realistic images rather than just classifying them.",
    "question": "What do early generative models like Variational Autoencoders (VAEs) take as their initial input to generate an image?",
    "options": [
      "A) A labeled photograph",
      "B) A random noise vector",
      "C) A text prompt",
      "D) A piece of audio"
    ],
    "answer": "B) A random noise vector",
    "explanation": "VAEs transform pure random noise into structured images. While VAEs were a good start, a 2014 adversarial architecture drastically improved generation quality."
  },
  {
    "id": 30,
    "context": "In 2014, a new type of generative model was introduced that pitted two networks against each other to create hyper-realistic faces.",
    "question": "What is the acronym for this famous 2014 generative model?",
    "options": [
      "A) RNNs",
      "B) GANs",
      "C) LSTMs",
      "D) VAEs"
    ],
    "answer": "B) GANs",
    "explanation": "GANs dominated high-quality image generation for years until a recent paradigm shift overcame some of their fundamental training drawbacks."
  },
  {
    "id": 31,
    "context": "Recently, a completely new class of generative models replaced GANs, powering viral tools that generate images based on user input.",
    "question": "What are these new, highly stable image generation models called?",
    "options": [
      "A) Rule-based AI",
      "B) Diffusion-based models",
      "C) Symbolic AI",
      "D) Decision Trees"
    ],
    "answer": "B) Diffusion-based models",
    "explanation": "Diffusion models, like DALL-E 2 and Stable Diffusion, excel at taking bizarre human text prompts and rendering them perfectly."
  },
  {
    "id": 32,
    "context": "Diffusion models like DALL-E 2 can perfectly synthesize complex, multi-object scenarios that have never existed in reality based on a prompt.",
    "question": "What viral example of a text prompt successfully rendered by DALL-E 2 was mentioned in the lecture?",
    "options": [
      "A) A baby radish walking a dog",
      "B) An astronaut riding a horse",
      "C) An armchair in the shape of an avocado",
      "D) A cat playing poker"
    ],
    "answer": "C) An armchair in the shape of an avocado",
    "explanation": "The avocado armchair proved these models possessed true combinatorial creativity. While generative models create art, an entirely different branch of deep learning focuses on complex game playing."
  },
  {
    "id": 33,
    "context": "To tackle complex sequential decision-making, researchers combined deep neural networks with traditional reward-based algorithms.",
    "question": "What is this paradigm, which achieved massive success in playing games, called?",
    "options": [
      "A) Deep Reinforcement Learning",
      "B) Generative Adversarial Networks",
      "C) Unsupervised Clustering",
      "D) Supervised Translation"
    ],
    "answer": "A) Deep Reinforcement Learning",
    "explanation": "Deep Reinforcement Learning (Deep RL) allowed agents to interact with their environments. In 2015, Deep RL agents dominated a specific set of classic video games."
  },
  {
    "id": 34,
    "context": "In 2015, Deep RL proved it could handle raw pixel inputs and output joystick controls simultaneously.",
    "question": "Which console's classic games did the Deep RL paradigm win 'hands down' in 2015?",
    "options": [
      "A) PlayStation",
      "B) Xbox",
      "C) Atari",
      "D) Nintendo 64"
    ],
    "answer": "C) Atari",
    "explanation": "Beating Atari was a major reflex milestone. Moving from arcade reflexes to incredibly deep strategy, an RL agent next tackled one of the world's most complex board games."
  },
  {
    "id": 35,
    "context": "Board games like Chess have many possibilities, but one specific Asian strategy game is exponentially more complex and was considered a grand challenge for AI.",
    "question": "In 2015, what game did a Deep RL agent beat the best human players at?",
    "options": [
      "A) Chess",
      "B) Checkers",
      "C) Go",
      "D) Shogi"
    ],
    "answer": "C) Go",
    "explanation": "Beating Go (AlphaGo) shocked the world because it required intuition. While Go has perfect information (you see the whole board), RL agents soon mastered games with hidden information."
  },
  {
    "id": 36,
    "context": "In 2016, Deep RL agents successfully beat human professionals in a game requiring bluffing, betting, and hidden cards.",
    "question": "What game was this?",
    "options": [
      "A) Blackjack",
      "B) Poker",
      "C) Bridge",
      "D) Solitaire"
    ],
    "answer": "B) Poker",
    "explanation": "Beating Poker proved RL could handle uncertainty. After Poker, researchers tackled massive visual multiplayer strategy games, employing brutal training scales."
  },
  {
    "id": 37,
    "context": "To beat professional players in the complex multiplayer game Defense of the Ancients (Dota), an agent was forced to play exclusively against itself.",
    "question": "How much simulated game time did the Dota RL agent experience during its self-play training?",
    "options": [
      "A) 10 years",
      "B) 100 years",
      "C) 1,000 years",
      "D) 10,000 years"
    ],
    "answer": "D) 10,000 years",
    "explanation": "Training for 10,000 years requires immense computing power. Because this scale was limited to huge corporations, researchers needed tools to democratize RL development."
  },
  {
    "id": 38,
    "context": "To help standard developers research RL without massive compute, a toolkit containing various standardized environments was released.",
    "question": "What was the name of this toolkit released by OpenAI?",
    "options": [
      "A) PyTorch",
      "B) TensorFlow",
      "C) OpenAI Gym",
      "D) Keras"
    ],
    "answer": "C) OpenAI Gym",
    "explanation": "OpenAI Gym standardized RL research algorithms. It was incredibly successful and was later expanded into a massive new version to test agents across a wider variety of games."
  },
  {
    "id": 39,
    "context": "Following the original Gym, a newer version was released to test agents across a much wider variety of classical console games.",
    "question": "What toolkit contained 1,000 different environments for developers to experiment with?",
    "options": [
      "A) Gym Classic",
      "B) Gym Retro",
      "C) Gym Arcade",
      "D) Gym Matrix"
    ],
    "answer": "B) Gym Retro",
    "explanation": "Gym Retro provided 1000 games. Beyond 2D sprites, RL was also tested in complex 3D physics environments where agents had to collaboratively interact with objects."
  },
  {
    "id": 40,
    "context": "In a fascinating 3D physics demo, blue and orange RL agents learned to manipulate walls and ramps to evade or find each other.",
    "question": "What specific childhood game were these agents essentially learning to play?",
    "options": [
      "A) Tag",
      "B) Hide and seek",
      "C) Capture the flag",
      "D) Simon says"
    ],
    "answer": "B) Hide and seek",
    "explanation": "The hide and seek agents discovered strategies humans didn't foresee. However, whether playing hide and seek or Dota, early RL agents were hyper-specialized to one single game."
  },
  {
    "id": 41,
    "context": "Humans can play Go, Chess, and Table Tennis, but early RL agents could only play the one specific game they were trained on.",
    "question": "What model was introduced as a first step toward an agent that could play Go, Chess, Shogi, and Atari simultaneously?",
    "options": [
      "A) AlphaZero",
      "B) MuZero",
      "C) DeepBlue",
      "D) AlphaGo"
    ],
    "answer": "B) MuZero",
    "explanation": "MuZero was a multi-task master. Models like MuZero point toward a future where AI isn't just highly specialized, but possesses a broader form of intelligence."
  },
  {
    "id": 42,
    "context": "The transition from hyper-specialized game players to models like MuZero reflects a broader, more ambitious goal in AI research.",
    "question": "What is the ultimate goal of developing these 'master of all' models?",
    "options": [
      "A) Optimizing a single specific task flawlessly.",
      "B) Reaching more general intelligence.",
      "C) Using the absolute minimum amount of compute.",
      "D) Creating purely rule-based models."
    ],
    "answer": "B) Reaching more general intelligence.",
    "explanation": "General intelligence is the holy grail. The success across RL, generative models, and transformers sparked an era of unprecedented global interest in AI as a whole."
  },
  {
    "id": 43,
    "context": "Following 2010, continuous breakthroughs across all domains led to a period the lecturer describes as 'absolute madness.'",
    "question": "According to the Stanford AI Index, what specific academic metric has seen near-exponential growth reflecting this madness?",
    "options": [
      "A) The number of AI Winter reports",
      "B) The number of AI publications",
      "C) The number of purely symbolic AI models",
      "D) The number of hardware failures"
    ],
    "answer": "B) The number of AI publications",
    "explanation": "The massive spike in publications reflects intense academic interest. But this exponential growth isn't strictly limited to academia; commercial interest has surged identically."
  },
  {
    "id": 44,
    "context": "Big tech companies and startups have aggressively invested in the AI space during this period of extreme euphoria.",
    "question": "What commercial metric perfectly mirrors the exponential growth seen in academic publications?",
    "options": [
      "A) The number of AI patents filed",
      "B) The cost of computer memory",
      "C) The number of rules in expert systems",
      "D) The amount of energy used globally"
    ],
    "answer": "A) The number of AI patents filed",
    "explanation": "Patents and startup funding are skyrocketing. This period of immense funding and unbridled hype is the direct opposite of a famous historical drought in the field."
  },
  {
    "id": 45,
    "context": "Today, AI is heavily funded, widely adopted, and highly optimistic.",
    "question": "What historical period of discontinued funding and extreme pessimism does today's era directly contrast with?",
    "options": [
      "A) The Spring of AI",
      "B) The AI Winter",
      "C) The Golden Age of AI",
      "D) The Symbolic Era"
    ],
    "answer": "B) The AI Winter",
    "explanation": "During the AI Winter, neural networks were largely abandoned. Today, they dominate, largely because one specific architecture keeps replacing older ones across multiple domains."
  },
  {
    "id": 46,
    "context": "Throughout this history, specific paradigms completely replace older ones, such as connectionist models replacing rule-based logic.",
    "question": "In Natural Language Processing, what did Transformer models completely replace within a few years of 2017?",
    "options": [
      "A) CNNs",
      "B) LSTMs and RNNs",
      "C) Decision Trees",
      "D) GANs"
    ],
    "answer": "B) LSTMs and RNNs",
    "explanation": "Transformers rendered RNNs entirely obsolete. The shift to Transformers led to models so capable that they no longer require structural code changes to perform new tasks."
  },
  {
    "id": 47,
    "context": "Modern Transformer models like GPT-3 don't require structural changes or new code to perform entirely new text generation tasks.",
    "question": "How does a user instruct GPT-3 to generate a specific output, such as a conversation with a famous personality?",
    "options": [
      "A) By rewriting the model's core code.",
      "B) By providing a text prompt.",
      "C) By uploading a new dataset.",
      "D) By changing the activation function."
    ],
    "answer": "B) By providing a text prompt.",
    "explanation": "Prompting has fundamentally changed how humans interact with AI. This text prompting capability soon expanded beyond language, unifying NLP and vision in models like DALL-E."
  },
  {
    "id": 48,
    "context": "The ability to use text prompts to generate images shows how previously completely separate fields, like NLP and Vision, are now overlapping.",
    "question": "According to the lecture, which single architecture is now considered the state-of-the-art for image, speech, and NLP models today?",
    "options": [
      "A) The CNN",
      "B) The RNN",
      "C) The Transformer",
      "D) The Hopfield Network"
    ],
    "answer": "C) The Transformer",
    "explanation": "Transformers are unifying the entire deep learning field. Because they are universally applicable, the only way to improve them is to scale them up to mind-boggling sizes."
  },
  {
    "id": 49,
    "context": "As architectures converge on the Transformer, the path to better performance is scaling up the data and the parameter count.",
    "question": "In the context of parameters, what 'club' are the largest state-of-the-art models currently in?",
    "options": [
      "A) The Million Parameter Club",
      "B) The Billion Parameter Club",
      "C) The Trillion Parameter Club",
      "D) The Quadrillion Parameter Club"
    ],
    "answer": "C) The Trillion Parameter Club",
    "explanation": "Reaching the Trillion Parameter Club with models like Switch proves that what was once just a theoretical biological aspiration is now a computational reality."
  },
  {
    "id": 50,
    "context": "The 1.6 Trillion parameter models bring us closer to the scale of biological brains, a goal pursued since neuroscientists first theorized about them in the 1950s.",
    "question": "Based on the lecture's timeline, what crucial enablers allowed these massive models to finally succeed where 1990s deep networks failed?",
    "options": [
      "A) Massive data, immense compute, and advanced optimization",
      "B) Small data and rule-based logic",
      "C) Slower hardware and fewer layers",
      "D) Biological brain tissue and chemical staining"
    ],
    "answer": "A) Massive data, immense compute, and advanced optimization",
    "explanation": "The synergy of algorithmic optimizations, massive internet data, and powerful hardware marks the current, explosive frontier of deep learning."
  },
  {
    "id": 51,
    "context": "Despite the massive success of deep neural networks, researchers have pointed out a 'paradox' regarding their size and expected performance.",
    "question": "According to standard machine learning principles, very high-capacity models should be highly susceptible to what problem, which deep learning surprisingly overcomes?",
    "options": [
      "A) Underfitting",
      "B) Overfitting",
      "C) Exploding gradients",
      "D) Mode collapse"
    ],
    "answer": "B) Overfitting",
    "explanation": "High-capacity models typically memorize training data and fail on untested data (overfitting), yet deep learning models somehow avoid this. However, despite avoiding overfitting, they still suffer from strange optimization and structural quirks."
  },
  {
    "id": 52,
    "context": "Because deep learning loss functions are not good, convex functions, they present unique difficulties when trying to train the network.",
    "question": "What specific optimization challenge arises from the highly non-convex nature of deep neural network loss functions?",
    "options": [
      "A) They form perfectly flat planes where gradients are zero.",
      "B) They completely erase the training data.",
      "C) They have multiple local minima, some of which are very sharp.",
      "D) They cause the computer's memory to overflow."
    ],
    "answer": "C) They have multiple local minima, some of which are very sharp.",
    "explanation": "Sharp minima contribute to numerical instability during training. Furthermore, even when training succeeds, the resulting models can be dangerously fragile and easily confused in the real world."
  },
  {
    "id": 53,
    "context": "Deep learning models are notoriously lacking in real-world robustness, often breaking down completely when minor, innocuous changes are introduced.",
    "question": "In the lecture's example, what did an image classifier incorrectly predict when a few harmless stickers were placed on a stop sign?",
    "options": [
      "A) A yield sign",
      "B) A pedestrian crossing",
      "C) A green traffic light",
      "D) A speed limit of 45"
    ],
    "answer": "D) A speed limit of 45",
    "explanation": "The stickers completely tricked the model into seeing a 45 mph speed limit. This vulnerability extends further, as researchers can craft invisible patterns that cause even weirder hallucinations."
  },
  {
    "id": 54,
    "context": "Scientists have proven the lack of robust explainability by designing regular patterns that look like static to a human but completely fool AI models.",
    "question": "When shown these adversarial, static-like patterns, what two unrelated things did the deep learning model confidently classify them as?",
    "options": [
      "A) A king penguin and a starfish",
      "B) A coffee mug and an airplane",
      "C) A stop sign and a bicycle",
      "D) A human face and a dog"
    ],
    "answer": "A) A king penguin and a starfish",
    "explanation": "The model hallucinated a penguin and starfish from pure patterns. This proves models can arrive at confident answers without actually understanding the image, recalling a famous historical anecdote about a 'smart' animal."
  },
  {
    "id": 55,
    "context": "To explain why models cheat to get the right answer, researchers point to the story of a horse named 'Clever Hans' that appeared to know arithmetic.",
    "question": "How did Clever Hans actually 'solve' math problems like 5 plus 2?",
    "options": [
      "A) He memorized flashcards given by his owner.",
      "B) He tapped his foot and stopped when the cheering audience inadvertently gave him visual cues.",
      "C) He understood basic verbal commands in German.",
      "D) He randomly stamped until he was given a carrot."
    ],
    "answer": "B) He tapped his foot and stopped when the cheering audience inadvertently gave him visual cues.",
    "explanation": "The horse merely read crowd reactions, not math. Modern AI models often 'cheat' the exact same way, relying on hidden background cues rather than learning the actual task."
  },
  {
    "id": 56,
    "context": "Because AI models often act like the famous horse, researchers developed the 'Clever Hans toolkit' to force models to prove their understanding.",
    "question": "What is the primary function of the Clever Hans toolkit in machine learning?",
    "options": [
      "A) To test machine learning systems on adversarial examples to ensure they aren't relying on spurious cues.",
      "B) To compress massive transformer models into smaller sizes.",
      "C) To train neural networks exclusively on animal behavior data.",
      "D) To mathematically prevent exploding gradients."
    ],
    "answer": "A) To test machine learning systems on adversarial examples to ensure they aren't relying on spurious cues.",
    "explanation": "Testing against adversarial examples proves if the model genuinely solved the problem or just found a shortcut. This push for transparency soon collided with a massive wave of ethical concerns around 2017."
  },
  {
    "id": 57,
    "context": "Around 2017, fairness became a mainstream AI issue after facial recognition software was caught making highly biased predictions regarding criminality.",
    "question": "In the lecture's example, why was a Black person with a minor record falsely labeled 'high risk' for future crime, while a white person with a severe record was labeled 'low risk'?",
    "options": [
      "A) The model was explicitly hardcoded by its creators to be racist.",
      "B) The model completely ignored facial features and only looked at zip codes.",
      "C) The model absorbed systemic racial biases present in its training data.",
      "D) The model randomly assigned risk scores to test subjects."
    ],
    "answer": "C) The model absorbed systemic racial biases present in its training data.",
    "explanation": "The model learned the historical and racial biases embedded deeply in its training data. This data-driven racism was also glaringly obvious in commercial facial recognition software."
  },
  {
    "id": 58,
    "context": "Researchers audited facial recognition systems from big tech companies to see how well they recognized different demographics.",
    "question": "Which demographic group experienced the lowest, 'atrociously low' accuracy rates in these commercial facial recognition systems?",
    "options": [
      "A) Lighter-skinned males",
      "B) Lighter-skinned females",
      "C) Darker-skinned males",
      "D) Darker-skinned females"
    ],
    "answer": "D) Darker-skinned females",
    "explanation": "Darker-skinned females were recognized terribly compared to the near-100% accuracy for lighter-skinned males. The severe real-world consequences of this bias resulted in drastic corporate actions."
  },
  {
    "id": 59,
    "context": "Civil rights groups protested these biased models, writing letters to leaders like Jeff Bezos demanding they halt the technology's deployment.",
    "question": "Around 2020, how did major tech companies like IBM, Amazon, and Microsoft respond to the backlash over facial recognition bias?",
    "options": [
      "A) They sued the civil rights groups for defamation.",
      "B) They made the software open-source so anyone could fix it.",
      "C) They publicly stopped selling facial recognition technology to police and government agencies.",
      "D) They replaced all human police officers with AI drones."
    ],
    "answer": "C) They publicly stopped selling facial recognition technology to police and government agencies.",
    "explanation": "They ceased selling to law enforcement to prevent unjust arrests. However, biased training data does not just infect facial recognition; it heavily influences modern generative AI as well."
  },
  {
    "id": 60,
    "context": "Generative models, which create images from text, also exhibit severe societal biases because they are trained on unfiltered internet data.",
    "question": "When DALL-E 2 was asked to generate images of 'success' and 'sadness', what biased pattern did it exhibit?",
    "options": [
      "A) It generated only older people for success and younger people for sadness.",
      "B) It generated males for success and females for sadness.",
      "C) It generated images in color for success and black-and-white for sadness.",
      "D) It generated animals instead of humans for both prompts."
    ],
    "answer": "B) It generated males for success and females for sadness.",
    "explanation": "The model associated success with men and sadness with women due to ingrained internet stereotypes. These unfair stereotypes also actively harm people when AI is applied in the financial sector."
  },
  {
    "id": 61,
    "context": "AI models are frequently used for automated decision-making in the financial sector, where historical biases can illegally deny services to qualified individuals.",
    "question": "What specific financial service did the lecture mention AI models unfairly denying to women, migrants, and people of color?",
    "options": [
      "A) Opening checking accounts",
      "B) Approving bank loans",
      "C) Processing stock trades",
      "D) Issuing debit cards"
    ],
    "answer": "B) Approving bank loans",
    "explanation": "Biased historical data teaches the model to unfairly deny loans to marginalized groups. To combat this illegal discrimination, academic institutions began demanding strict accountability."
  },
  {
    "id": 62,
    "context": "To ensure AI models do not perpetuate illegal discrimination in areas like finance and policing, researchers are creating frameworks to test them.",
    "question": "Which university introduced an 'AI Audit Challenge' aimed at building compliant models that avoid illegal discrimination?",
    "options": [
      "A) MIT",
      "B) Harvard",
      "C) Stanford",
      "D) Oxford"
    ],
    "answer": "C) Stanford",
    "explanation": "Stanford's audit challenge aims to enforce legal fairness. But ensuring AI is 'responsible' isn't just about social equality; it also involves massive environmental concerns."
  },
  {
    "id": 63,
    "context": "A major part of 'responsible AI' is evaluating its environmental impact, which looks incredibly bad when compared to the efficiency of the biological brain.",
    "question": "Roughly how much power does the human brain consume to operate its 10^15 synapses?",
    "options": [
      "A) 15 watts",
      "B) 1,500 watts",
      "C) 15,000 watts",
      "D) 1.5 megawatts"
    ],
    "answer": "A) 15 watts",
    "explanation": "The human brain runs on a mere 15 watts, while an equivalent deep learning model requires 2048 TPUs. This stark inefficiency has led to an explosion in energy consumption as models scale."
  },
  {
    "id": 64,
    "context": "The computing power required to train deep learning models is growing at an alarming, unsustainable rate.",
    "question": "Between 2012 and 2018, by what multiple did the compute used for training deep learning models increase?",
    "options": [
      "A) 300 times",
      "B) 3,000 times",
      "C) 30,000 times",
      "D) 300,000 times"
    ],
    "answer": "D) 300,000 times",
    "explanation": "A 300,000-fold increase in compute directly translates into astronomical energy use, drastically inflating the carbon footprint of AI research."
  },
  {
    "id": 65,
    "context": "Training massive AI models has a severe environmental impact that dwarfs many everyday human activities.",
    "question": "According to the lecture, the carbon emission generated by training just one large Transformer model is roughly equivalent to what?",
    "options": [
      "A) A single passenger's flight from New York to San Francisco.",
      "B) An average human's total CO2 emissions for one year.",
      "C) Five times the entire lifetime carbon emission of an average car.",
      "D) The daily power consumption of the city of London."
    ],
    "answer": "C) Five times the entire lifetime carbon emission of an average car.",
    "explanation": "Training one Transformer emits 5x a car's lifetime carbon. This massive pollution raises an intense ethical question regarding 'Climate Justice' and who actually suffers the consequences."
  },
  {
    "id": 66,
    "context": "The environmental cost of training massive English-language models affects the whole globe, disproportionately punishing developing nations.",
    "question": "Which two vulnerable regions were specifically mentioned as unfairly paying the environmental price (via floods and sinking) for these English-centric AI models?",
    "options": [
      "A) Bangladesh and Fiji",
      "B) The Maldives and Sudan",
      "C) Greenland and Iceland",
      "D) Nepal and Bhutan"
    ],
    "answer": "B) The Maldives and Sudan",
    "explanation": "The Maldives and Sudan suffer immediate climate effects to fund AI tools that don't even support their native languages. While these environmental realities are somber, deep learning is simultaneously achieving miraculous breakthroughs in science."
  },
  {
    "id": 67,
    "context": "Moving from the somber ethical issues to AI's positive impacts, deep learning has recently become the primary driver of massive biological research.",
    "question": "In 2020, what massive biological problem did DeepMind's AlphaFold model make remarkable progress on?",
    "options": [
      "A) Curing all forms of genetic baldness.",
      "B) Predicting the 3D folding structure of proteins.",
      "C) Translating animal communication into English.",
      "D) Simulating the entire human brain."
    ],
    "answer": "B) Predicting the 3D folding structure of proteins.",
    "explanation": "AlphaFold accurately predicts 3D protein structures based on linear amino acid sequences. Understanding these 3D shapes is incredibly vital for modern medicine and pandemic response."
  },
  {
    "id": 68,
    "context": "Knowing the exact 3D shape of a protein allows scientists to figure out what molecules can effectively attach to it.",
    "question": "How did knowing the 3D 'crown-like' structure of the COVID-19 spike protein help humanity?",
    "options": [
      "A) It allowed scientists to surgically remove the spikes.",
      "B) It proved the virus was created by AI.",
      "C) It enabled highly effective and targeted drug delivery design.",
      "D) It allowed the virus to be visually classified by standard CNNs."
    ],
    "answer": "C) It enabled highly effective and targeted drug delivery design.",
    "explanation": "Targeted drug design relies strictly on 3D structure compatibility. Beyond the microscopic world of viruses, deep learning is also being used to study the largest objects in the universe."
  },
  {
    "id": 69,
    "context": "Deep learning is revolutionizing astronomy by repurposing generative techniques originally developed to manipulate images of human faces.",
    "question": "How are generative models being applied to massive astronomical objects like galaxies?",
    "options": [
      "A) To predict how galaxies will visually age and change over time.",
      "B) To instantly teleport satellites between galaxies.",
      "C) To translate alien radio waves into readable text.",
      "D) To count the exact number of stars in the universe."
    ],
    "answer": "A) To predict how galaxies will visually age and change over time.",
    "explanation": "Just as AI can age a human face by 10 years, it can visually age galaxies to help astronomers understand long-term cosmic phenomena. The final frontier, however, is taking these powerful models out of the lab and putting them in users' hands."
  },
  {
    "id": 70,
    "context": "Massive models require huge cloud servers, but much of the global population, especially in rural India, accesses the digital world completely differently.",
    "question": "What specific device form-factor is driving the need for 'efficient deep learning' to serve populations without traditional computers?",
    "options": [
      "A) Desktop mainframes",
      "B) Smartwatches",
      "C) Mobile smartphones",
      "D) Virtual reality headsets"
    ],
    "answer": "C) Mobile smartphones",
    "explanation": "Smartphones require models to run efficiently directly on 'the edge.' This push for edge computing is also strictly required for autonomous devices that operate away from civilization."
  },
  {
    "id": 71,
    "context": "Edge devices must often operate in constrained environments where relying on a cloud server for intelligence is physically impossible.",
    "question": "Why is it absolutely crucial for AI models to run locally on devices like drones?",
    "options": [
      "A) Drones generate too much heat for the cloud to process.",
      "B) Because they often have limited memory, limited power, and lack internet connectivity.",
      "C) So the drones can mine cryptocurrency while flying.",
      "D) Because cloud servers are legally banned from analyzing drone footage."
    ],
    "answer": "B) Because they often have limited memory, limited power, and lack internet connectivity.",
    "explanation": "Drones need local, offline AI to function in remote locations. Running AI locally also guarantees a critical performance metric required for safe physical interaction."
  },
  {
    "id": 72,
    "context": "Sending data to the cloud and waiting for a response creates a noticeable delay, which is unacceptable for autonomous driving or drone flight.",
    "question": "What time scale is strictly required for real-time edge AI outputs, avoiding the 1-2 second delay of cloud processing?",
    "options": [
      "A) Minutes",
      "B) Milliseconds",
      "C) Nanoseconds",
      "D) Picoseconds"
    ],
    "answer": "B) Milliseconds",
    "explanation": "Millisecond latency is required for real-time safety and usability. To achieve this blazing speed on small devices, researchers must fundamentally alter the massive models they have built."
  },
  {
    "id": 73,
    "context": "To make billion-parameter models fit onto small edge devices like phones or drones, researchers must actively manipulate the architecture.",
    "question": "What is the primary research goal regarding these massive models and edge computing?",
    "options": [
      "A) Forcing users to buy bigger phones.",
      "B) Making the models smaller without compromising their accuracy.",
      "C) Splitting the model so half runs on the phone and half on a smartwatch.",
      "D) Reverting back to simple rule-based symbolic AI."
    ],
    "answer": "B) Making the models smaller without compromising their accuracy.",
    "explanation": "Shrinking models (compression/quantization) without losing accuracy is key to ubiquitous AI. While concluding the lecture, the speaker admits that a brief history inevitably leaves a few stones unturned."
  },
  {
    "id": 74,
    "context": "In his concluding remarks, the lecturer acknowledges that a brief historical overview cannot cover every single subfield of deep learning.",
    "question": "Which specific subfield did the lecturer explicitly mention skipping, which involves technologies like text-to-speech and voice conversion?",
    "options": [
      "A) Computer Vision",
      "B) Automatic Speech Recognition and Processing",
      "C) Natural Language Processing",
      "D) Reinforcement Learning"
    ],
    "answer": "B) Automatic Speech Recognition and Processing",
    "explanation": "Speech processing was skipped to maintain a high-level view of the broader architectural shifts. Ultimately, the lecture successfully charted the massive evolutionary path of the field."
  },
  {
    "id": 75,
    "context": "The lecture covered a vast timeline, showing how the field transitioned across multiple dominant paradigms to reach today's state-of-the-art.",
    "question": "According to the concluding summary, what series of architectures best represents the evolutionary path of deep learning covered in the lecture?",
    "options": [
      "A) Rule-based logic -> Expert Systems -> Symbolic AI",
      "B) Phrenology -> Localism -> Distributed Processing",
      "C) Early neural networks -> Recurrent networks -> Transformer-based models and Generative models",
      "D) Support Vector Machines -> Random Forests -> K-Means Clustering"
    ],
    "answer": "C) Early neural networks -> Recurrent networks -> Transformer-based models and Generative models",
    "explanation": "This sequence summarizes the historical evolution of modern deep learning, bringing the story full circle from early biological inspiration to modern generative wonders."
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
