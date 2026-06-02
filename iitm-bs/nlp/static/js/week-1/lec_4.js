const quizData = 
[
  {
    "id": 1,
    "context": "Natural language processing involves multiple levels of language processing to understand and generate natural language. Each level addresses different linguistic features.",
    "question": "Which of the following is NOT mentioned as one of the levels of language processing in the lecture?",
    "options": [
      "A) Phonological level",
      "B) Morphological level",
      "C) Biological level",
      "D) Pragmatic level"
    ],
    "answer": "C) Biological level",
    "explanation": "The lecture classifies NLP into phonological, morphological, lexical, syntactic, semantic, discourse, and pragmatic levels. The first of these levels, the phonological level, specifically targets the sounds we make when speaking."
  },
  {
    "id": 2,
    "context": "Under the phonological level, NLP interprets the speech sounds of a language.",
    "question": "What is a primary application that benefits significantly from understanding the phonological level?",
    "options": [
      "A) Constituency parsing",
      "B) Text summarization",
      "C) Speech recognition and text-to-speech systems",
      "D) Anaphora resolution"
    ],
    "answer": "C) Speech recognition and text-to-speech systems",
    "explanation": "Phonology focuses on the processing of sounds, making it essential for speech recognition and text-to-speech (TTS) systems. At the core of these speech sounds are minimal units that NLP systems must identify."
  },
  {
    "id": 3,
    "context": "In phonological processing, spoken words are analyzed into fundamental units of sound.",
    "question": "What are the smallest units of sound that distinguish meaning in a language called?",
    "options": [
      "A) Tokens",
      "B) Phones (or phonemes)",
      "C) Morphemes",
      "D) Syllables"
    ],
    "answer": "B) Phones (or phonemes)",
    "explanation": "Meaningful speech sounds are called phones, which are the smallest units of sound that differentiate meaning. To process these sounds computationally, experts use specific symbols to write them down."
  },
  {
    "id": 4,
    "context": "Phonetic transcriptions represent sounds using phonetic symbols to help systems understand pronunciation.",
    "question": "What does IPA stand for in the context of phonetic symbols?",
    "options": [
      "A) Internal Phonetic Architecture",
      "B) International Phonetic Association",
      "C) Integrated Parsing Algorithm",
      "D) Intelligent Phoneme Analyzer"
    ],
    "answer": "B) International Phonetic Association",
    "explanation": "The IPA (International Phonetic Association) provides symbols to transcribe actual speech sounds graphically. Beyond just pronouncing words correctly, the way we speak them with varying emphasis also changes their meaning."
  },
  {
    "id": 5,
    "context": "Varying intonations and stress patterns in speech convey meaning beyond the words themselves, such as turning a statement into a question.",
    "question": "What is the term used to describe the rhythm, stress, and intonation patterns of speech?",
    "options": [
      "A) Syntax",
      "B) Prosody",
      "C) Lemmatization",
      "D) Cohesion"
    ],
    "answer": "B) Prosody",
    "explanation": "Prosody involves the rhythm, stress, and intonation that give spoken language its natural feel and deeper meaning. This acoustic analysis also extends to identifying where a speaker is from."
  },
  {
    "id": 6,
    "context": "Differentiating between various speech patterns, like American, British, or Indian speech, comes through the phonological understanding of language.",
    "question": "Identifying whether a speaker has an American, British, or Indian speech pattern is known as what task?",
    "options": [
      "A) Accent recognition",
      "B) Discourse analysis",
      "C) Syntactic parsing",
      "D) Lemmatization"
    ],
    "answer": "A) Accent recognition",
    "explanation": "Accent recognition differentiates between various regional pronunciations. Once sounds are identified, NLP shifts its focus from sounds to the physical structure of the words themselves."
  },
  {
    "id": 7,
    "context": "The morphological level studies the structure and formation of words, interpreting the componential nature of words.",
    "question": "What does the morphological level of NLP primarily focus on?",
    "options": [
      "A) The internal components and structure of words",
      "B) The flow of ideas across multiple paragraphs",
      "C) The grammatical arrangement of sentences",
      "D) The contextual intent of the speaker"
    ],
    "answer": "A) The internal components and structure of words",
    "explanation": "Morphology studies word structure and internal components. Just as sounds have phones, these word structures are built from small, meaningful blocks."
  },
  {
    "id": 8,
    "context": "A word like 'books' can be broken down into 'book' and 's', both of which carry information.",
    "question": "What are the minimal meaningful units of a word called?",
    "options": [
      "A) Phones",
      "B) Tokens",
      "C) Morphemes",
      "D) Nodes"
    ],
    "answer": "C) Morphemes",
    "explanation": "Morphemes are the smallest units of meaning, functioning as prefixes, roots, or suffixes. These units can be added to words to express grammatical properties."
  },
  {
    "id": 9,
    "context": "Adding an 's' to 'book' creates a plural marker, or adding it to a verb indicates a tense, without changing the fundamental dictionary meaning of the word.",
    "question": "What morphological process helps in understanding the grammatical information a word carries, such as plural markers or tenses?",
    "options": [
      "A) Derivation",
      "B) Lemmatization",
      "C) Tokenization",
      "D) Inflection"
    ],
    "answer": "D) Inflection",
    "explanation": "Inflection changes a word to express grammatical information like tense or number. Other processes change the word's meaning entirely to create new vocabulary."
  },
  {
    "id": 10,
    "context": "By adding the prefix 'un-' to the word 'happy', a completely new word 'unhappy' is formed.",
    "question": "What is the morphological process of creating new words by adding a prefix or suffix?",
    "options": [
      "A) Stemming",
      "B) Inflection",
      "C) Derivation",
      "D) Chunking"
    ],
    "answer": "C) Derivation",
    "explanation": "Derivation creates new words with new meanings. Because words take on so many forms through inflection and derivation, NLP systems often need to reduce them back to their dictionary roots."
  },
  {
    "id": 11,
    "context": "Words like 'ladies' can take shapes different from their root 'lady', and 'better' stems from the root 'good'.",
    "question": "What technique is used to reduce a word to its base or dictionary form, considering idiosyncratic behaviors?",
    "options": [
      "A) Stemming",
      "B) Parsing",
      "C) Cohesion",
      "D) Lemmatization"
    ],
    "answer": "D) Lemmatization",
    "explanation": "Lemmatization carefully reduces words to their actual dictionary base. A faster, but sometimes cruder, alternative simply chops off the ends of words."
  },
  {
    "id": 12,
    "context": "The words 'running', 'runner', and 'run' may all be reduced to 'run' by simply cutting off their endings.",
    "question": "What is the technique of cutting words to their root forms called?",
    "options": [
      "A) Stemming",
      "B) Lemmatization",
      "C) Tagging",
      "D) Tokenizing"
    ],
    "answer": "A) Stemming",
    "explanation": "Stemming cuts off suffixes to find a common root. Beyond just finding roots, morphological analysis helps identify whether a word is acting as an action or an object."
  },
  {
    "id": 13,
    "context": "Depending on the context, a word like 'running' or 'books' can function as either a noun or a verb.",
    "question": "Identifying the grammatical category of a word based on its morphology and context is the task of:",
    "options": [
      "A) Named entity recognition",
      "B) Semantic role labeling",
      "C) Part of speech (POS) tagging",
      "D) Anaphora resolution"
    ],
    "answer": "C) Part of speech (POS) tagging",
    "explanation": "POS tagging identifies grammatical categories (noun, verb, etc.). Moving beyond the internal structure of single words, NLP also studies the broader vocabulary and relationships between different words."
  },
  {
    "id": 14,
    "context": "The lexical level in NLP deals with the vocabulary of languages, focusing on the meaning and usage of words in isolation.",
    "question": "The lexical level is primarily essential for which set of tasks?",
    "options": [
      "A) Speech recognition and prosody",
      "B) Identifying accents and phonetic transcriptions",
      "C) Information retrieval, sentiment analysis, and machine translation",
      "D) Establishing dependency parsing trees"
    ],
    "answer": "C) Information retrieval, sentiment analysis, and machine translation",
    "explanation": "The lexical level helps build vocabulary sets useful for information retrieval and sentiment analysis. The first step in utilizing this vocabulary computationally is breaking sentences into individual pieces."
  },
  {
    "id": 15,
    "context": "A sentence like \"I'll come\" has spaces and punctuation that must be handled properly to process the text.",
    "question": "What is the process of breaking text into individual words and meaningful elements (like treating a period as a separate element)?",
    "options": [
      "A) Constituency parsing",
      "B) Word tokenization",
      "C) Semantic labeling",
      "D) Stemming"
    ],
    "answer": "B) Word tokenization",
    "explanation": "Tokenization breaks text into tokens, including punctuation. Once words are tokenized, NLP systems can analyze how their meanings relate to one another."
  },
  {
    "id": 16,
    "context": "Lexical semantics studies how word meanings relate, including nuances like synonyms, antonyms, and hypernyms.",
    "question": "What sub-field of the lexical level deals with the relationship and nuances of word meanings, such as synonimy?",
    "options": [
      "A) Morphological derivation",
      "B) Dependency parsing",
      "C) Lexical semantics",
      "D) Pragmatics"
    ],
    "answer": "C) Lexical semantics",
    "explanation": "Lexical semantics looks at meaning relationships between words. These relationships are critical for determining the tone or emotion of a text."
  },
  {
    "id": 17,
    "context": "Understanding how words are related to each other (synonymy) provides similar meanings that aid in evaluating text.",
    "question": "Understanding synonymy through lexical semantics is directly helpful in building tools for:",
    "options": [
      "A) Text-to-speech generation",
      "B) Sentiment analysis",
      "C) Accent recognition",
      "D) Constituency parsing"
    ],
    "answer": "B) Sentiment analysis",
    "explanation": "Sentiment analysis uses synonyms to detect emotions or opinions. After understanding individual words and their related meanings, the next step is analyzing how they arrange into grammatical sentences."
  },
  {
    "id": 18,
    "context": "The arrangement of words to form grammatical sentences is crucial for understanding sentence structure.",
    "question": "Which level of NLP uncovers the grammatical structure and arrangement of sentences?",
    "options": [
      "A) Discourse level",
      "B) Semantic level",
      "C) Syntactic level",
      "D) Lexical level"
    ],
    "answer": "C) Syntactic level",
    "explanation": "The syntactic level handles sentence structure and grammar. The computational process used to analyze this structure is called parsing."
  },
  {
    "id": 19,
    "context": "To establish the grammatical structure, NLP systems run a process that analyzes the sentence either by hierarchy or dependencies.",
    "question": "What is the general term for the process of analyzing the grammatical structure of a sentence?",
    "options": [
      "A) Parsing",
      "B) Chunking",
      "C) Tagging",
      "D) Tokenizing"
    ],
    "answer": "A) Parsing",
    "explanation": "Parsing evaluates grammatical structure. One common type of parsing breaks sentences down into nested groups of words."
  },
  {
    "id": 20,
    "context": "In the sentence 'The cat sat on the mat', phrases like 'the cat' (noun phrase) and 'on the mat' (prepositional phrase) are grouped hierarchically.",
    "question": "What type of parsing identifies phrases within a sentence based on a hierarchical structure?",
    "options": [
      "A) Dependency parsing",
      "B) Semantic parsing",
      "C) Pragmatic parsing",
      "D) Constituency parsing"
    ],
    "answer": "D) Constituency parsing",
    "explanation": "Constituency parsing groups words into phrase hierarchies. Another type of parsing focuses instead on how words directly connect to one another."
  },
  {
    "id": 21,
    "context": "In the sentence 'she loves him', 'she' acts as the subject dependent on the verb 'loves', and 'him' is the object.",
    "question": "What type of parsing establishes the direct grammatical relationships (like subject and object) between individual words?",
    "options": [
      "A) Constituency parsing",
      "B) Dependency parsing",
      "C) Phonetic parsing",
      "D) Lexical parsing"
    ],
    "answer": "B) Dependency parsing",
    "explanation": "Dependency parsing maps relationships between words. These structural relationships are dictated by a language's specific word-order rules."
  },
  {
    "id": 22,
    "context": "Syntax is governed by rules that dictate word order, such as English using a subject-verb-object arrangement.",
    "question": "The structural arrangement of subject, verb, and object in a language is an example of what?",
    "options": [
      "A) A pragmatic rule",
      "B) A morphological rule",
      "C) A grammar rule",
      "D) A phonological rule"
    ],
    "answer": "C) A grammar rule",
    "explanation": "Grammar rules dictate structural word order. While English puts the verb in the middle, most Indian languages place it elsewhere."
  },
  {
    "id": 23,
    "context": "Languages like Hindi, Telugu, and Tamil have a different grammatical structure where they place the verb at the final position of the sentence.",
    "question": "Most Indian languages fall under which structural category?",
    "options": [
      "A) Subject-Verb-Object (SVO)",
      "B) Subject-Object-Verb (SOV)",
      "C) Verb-Subject-Object (VSO)",
      "D) Object-Subject-Verb (OSV)"
    ],
    "answer": "B) Subject-Object-Verb (SOV)",
    "explanation": "Most Indian languages are SOV, meaning the verb comes last. However, the lecture noted a unique exception in India."
  },
  {
    "id": 24,
    "context": "While most Indian languages are Subject-Object-Verb, there is an exceptional language spoken in Meghalaya that does not follow this rule.",
    "question": "Which language is mentioned as an exception to the SOV structure typically found in Indian languages?",
    "options": [
      "A) Tamil",
      "B) Hindi",
      "C) Khasi",
      "D) Telugu"
    ],
    "answer": "C) Khasi",
    "explanation": "Khasi is the exception to the SOV rule. Now that sentences are structurally organized, NLP must interpret what the sentence actually means."
  },
  {
    "id": 25,
    "context": "Even a perfectly grammatical sentence requires interpretation. The semantic level determines the meaning of phrases and sentences by focusing on word and sentence meaning.",
    "question": "The semantic level of NLP is essential for what primary purpose?",
    "options": [
      "A) Arranging words in hierarchical syntax trees",
      "B) Resolving ambiguities and understanding the context of meaning",
      "C) Generating phonetic transcriptions",
      "D) Lemmatizing words to their dictionary roots"
    ],
    "answer": "B) Resolving ambiguities and understanding the context of meaning",
    "explanation": "Semantics focuses on meaning and resolving ambiguities. One of the biggest challenges in semantics is when a single word possesses multiple meanings."
  },
  {
    "id": 26,
    "context": "A word can have multiple meanings depending on how it is used. NLP systems must figure out the correct sense.",
    "question": "What is the process of determining which meaning of a word is used in a particular context called?",
    "options": [
      "A) Dependency parsing",
      "B) Cohesion linking",
      "C) Word sense disambiguation (WSD)",
      "D) Anaphora resolution"
    ],
    "answer": "C) Word sense disambiguation (WSD)",
    "explanation": "WSD clarifies ambiguous words. It heavily relies on the surrounding text to make its decision."
  },
  {
    "id": 27,
    "context": "In the sentence 'The river bank was eroded', words like 'river' and 'eroded' clarify that 'bank' does not mean a financial institution.",
    "question": "What primarily helps WSD determine that 'bank' refers to the side of a river in the example provided?",
    "options": [
      "A) The morphological suffix of the word",
      "B) The phonetic transcription of the sentence",
      "C) The surrounding context words",
      "D) The dependency of the subject to the verb"
    ],
    "answer": "C) The surrounding context words",
    "explanation": "Context words resolve ambiguities. Semantics also examines what roles entities play in an action, such as who is doing the action and who is receiving it."
  },
  {
    "id": 28,
    "context": "In 'John gave Mary a book', John is the agent, Mary is the recipient, and the book is the theme. Identifying these roles goes beyond basic subject/object syntax.",
    "question": "What component helps identify the specific roles (like agent, patient, or recipient) that words play in a sentence?",
    "options": [
      "A) Semantic role labeling",
      "B) Named entity recognition",
      "C) Tokenization",
      "D) Constituency parsing"
    ],
    "answer": "A) Semantic role labeling",
    "explanation": "Semantic role labeling identifies the specific \"doer\" and \"receiver\" roles. Alongside roles, NLP needs to categorize specific real-world nouns like people and places."
  },
  {
    "id": 29,
    "context": "When a system reads 'Apple is looking at buying a UK startup for $1 billion', it must classify 'Apple' as an organization and 'UK' as a location.",
    "question": "Recognizing and classifying text entities into categories like person names, institutions, or locations is known as:",
    "options": [
      "A) Word sense disambiguation",
      "B) Anaphora resolution",
      "C) Named entity recognition (NER)",
      "D) Part of speech tagging"
    ],
    "answer": "C) Named entity recognition (NER)",
    "explanation": "NER classifies entities like organizations or locations. To understand complex events involving these entities, we must look beyond a single sentence."
  },
  {
    "id": 30,
    "context": "To grasp the complete sense of a text, NLP must go beyond individual sentences and focus on the properties of the text as a whole.",
    "question": "Which level of NLP focuses on making connections between sentences and understanding context beyond the individual sentence?",
    "options": [
      "A) Syntactic level",
      "B) Lexical level",
      "C) Morphological level",
      "D) Discourse level"
    ],
    "answer": "D) Discourse level",
    "explanation": "The discourse level manages multi-sentence connections. A key part of discourse is ensuring that consecutive sentences logically make sense together."
  },
  {
    "id": 31,
    "context": "A sequence like 'She went to the bakery. She washed her hair.' lacks a logical flow of ideas, making it hard to interpret together.",
    "question": "What is the term for the logical flow of ideas that provides meaningful connections across a text?",
    "options": [
      "A) Cohesion",
      "B) Coherence",
      "C) Inflection",
      "D) Derivation"
    ],
    "answer": "B) Coherence",
    "explanation": "Coherence is the logical flow of ideas. Writers use specific grammatical techniques to enforce this flow from one sentence to the next."
  },
  {
    "id": 32,
    "context": "To maintain flow across paragraphs, writers use linking words like 'however', 'therefore', and 'moreover'.",
    "question": "The grammatical and lexical linking within text to maintain flow is called:",
    "options": [
      "A) Cohesion",
      "B) Parsing",
      "C) Stemming",
      "D) Lemmatization"
    ],
    "answer": "A) Cohesion",
    "explanation": "Cohesion uses physical linking words. Another major linking mechanism is the use of pronouns to refer back to previously mentioned items."
  },
  {
    "id": 33,
    "context": "In 'John loves his dog. It follows him everywhere.', the word 'It' refers back to 'dog' and 'him' refers back to 'John'.",
    "question": "What process helps identify words (like pronouns) that refer back to earlier antecedents in the text?",
    "options": [
      "A) Word sense disambiguation",
      "B) Named entity recognition",
      "C) Anaphora resolution",
      "D) Dependency parsing"
    ],
    "answer": "C) Anaphora resolution",
    "explanation": "Anaphora resolution maps pronouns to their original nouns. This process requires analyzing a specific chunk of surrounding sentences."
  },
  {
    "id": 34,
    "context": "To accurately resolve pronouns or references, systems typically analyze a block of four or five sentences.",
    "question": "Which processing level is mentioned as helpful for understanding back references (anaphora) by providing a small block of context?",
    "options": [
      "A) Character level",
      "B) Sentence window level",
      "C) Whole document level",
      "D) Multi-document level"
    ],
    "answer": "B) Sentence window level",
    "explanation": "The sentence window level gives enough immediate context for anaphora resolution. However, text alone isn't always enough; real-world situation and intent matter deeply."
  },
  {
    "id": 35,
    "context": "The interpretation of a sentence can change dramatically based on the situational context and the speaker's real-world intent.",
    "question": "Which level of NLP focuses on how context influences the interpretation of meaning in communication, considering the speaker's intent?",
    "options": [
      "A) Morphological level",
      "B) Semantic level",
      "C) Syntactic level",
      "D) Pragmatic level"
    ],
    "answer": "D) Pragmatic level",
    "explanation": "The pragmatic level deals with intent and situational context. This helps AI systems understand subtleties that aren't strictly literal."
  },
  {
    "id": 36,
    "context": "When building conversational dynamics, it's vital to recognize when a speaker implies something rather than stating it outright.",
    "question": "The pragmatic level is particularly essential for understanding which of the following?",
    "options": [
      "A) The base root of verbs",
      "B) Implied meaning and sarcasm",
      "C) The boundaries of sentences",
      "D) The part of speech of a noun"
    ],
    "answer": "B) Implied meaning and sarcasm",
    "explanation": "Pragmatics uncovers sarcasm and implied meaning. One way we imply meaning is by using our statements to perform actions."
  },
  {
    "id": 37,
    "context": "Asking 'Can you pass the salt?' is structurally a question about ability, but contextually it is a request for an action.",
    "question": "Utterances that perform actions, such as requests, promises, or commands, are referred to as:",
    "options": [
      "A) Speech acts",
      "B) Phones",
      "C) Tokens",
      "D) Morphemes"
    ],
    "answer": "A) Speech acts",
    "explanation": "Speech acts classify the function of an utterance. The meaning of some words is also completely tied to the physical context of the speaker."
  },
  {
    "id": 38,
    "context": "When a speaker says 'I will meet you here tomorrow', 'here' and 'tomorrow' only make sense if you know the speaker's current location and the date.",
    "question": "Words that require situational contextual information to be interpreted are categorized under:",
    "options": [
      "A) Cohesion",
      "B) Deixis",
      "C) Inflection",
      "D) Synonymy"
    ],
    "answer": "B) Deixis",
    "explanation": "Deixis refers to context-dependent words like \"here\" and \"now\". Pulling together these speech acts and deictic words requires broad situational awareness."
  },
  {
    "id": 39,
    "context": "If a person says 'It's cold in here,' they likely want someone to close the window, not just to state a fact about the temperature.",
    "question": "The ability to interpret a request to close a window based on the statement 'It's cold in here' relies on:",
    "options": [
      "A) Constituency parsing",
      "B) Contextual understanding",
      "C) Stemming",
      "D) Lexical tokenization"
    ],
    "answer": "B) Contextual understanding",
    "explanation": "Contextual understanding bridges the gap between literal text and real intent. To achieve this, NLP systems cannot rely on just one level of processing."
  },
  {
    "id": 40,
    "context": "The lecture stresses that word structure, grammatical syntax, semantics, and real-world pragmatics do not operate in isolation.",
    "question": "According to the lecture, how do the various levels of NLP relate to each other during natural language processing?",
    "options": [
      "A) They operate completely independently",
      "B) They interact and interface with each other",
      "C) They are processed in a strict, non-overlapping sequence",
      "D) Only the pragmatic level is truly necessary"
    ],
    "answer": "B) They interact and interface with each other",
    "explanation": "The levels interact to provide a full understanding. This holistic approach is essential for the future of AI."
  },
  {
    "id": 41,
    "context": "Advancements in these processing levels will enhance NLP capabilities in applications like conversational agents.",
    "question": "What is the ultimate benefit of integrating insights from all these NLP levels?",
    "options": [
      "A) It leads to more accurate and effective interaction between humans and machines",
      "B) It eliminates the need for tokenization",
      "C) It replaces all human languages with a unified machine code",
      "D) It makes parsing impossible"
    ],
    "answer": "A) It leads to more accurate and effective interaction between humans and machines",
    "explanation": "Integrating these levels yields powerful human-machine interactions. This deep structural knowledge is especially crucial when data is scarce."
  },
  {
    "id": 42,
    "context": "While vast amounts of raw data can sometimes brute-force NLP applications, this is not possible for many languages in the world.",
    "question": "Understanding linguistic levels and annotating data is highlighted as especially important for languages in what situation?",
    "options": [
      "A) High-resource situations",
      "B) Low-resource situations",
      "C) When building constituency trees only",
      "D) Languages that lack vowels"
    ],
    "answer": "B) Low-resource situations",
    "explanation": "Low-resource languages require deep linguistic understanding to compensate for lack of raw data. Let's review how specific applications tie back to the levels, starting with morphology."
  },
  {
    "id": 43,
    "context": "Various downstream applications rely on different levels of NLP. Tools that find roots of words and analyze word forms share a foundation.",
    "question": "Tasks like Part of Speech (POS) tagging, lemmatization, and stemming are deeply rooted in which NLP level?",
    "options": [
      "A) Phonological level",
      "B) Discourse level",
      "C) Morphological level",
      "D) Pragmatic level"
    ],
    "answer": "C) Morphological level",
    "explanation": "Morphology handles word forms and roots. However, before words can be analyzed, they must be separated from character strings."
  },
  {
    "id": 44,
    "context": "The most fundamental processing steps happen even before word structure is analyzed, focusing on the raw text input.",
    "question": "Word tokenization and sentence boundary detection are applications built at which processing level?",
    "options": [
      "A) Pragmatic level",
      "B) Character and string level",
      "C) Document clustering level",
      "D) Semantic level"
    ],
    "answer": "B) Character and string level",
    "explanation": "The character and string level is where basic boundary detection occurs. Once basic strings are built all the way up to full texts, macro-level processing can occur."
  },
  {
    "id": 45,
    "context": "Beyond single sentences or paragraphs, NLP can compare vast amounts of text, like grouping similar news articles together.",
    "question": "Tasks like document similarity calculation and clustering occur at which processing level?",
    "options": [
      "A) Word level",
      "B) Sentence level",
      "C) Whole document and multi-document level",
      "D) Phonological level"
    ],
    "answer": "C) Whole document and multi-document level",
    "explanation": "Document-level processing enables clustering and summarization of entire corpora. Returning to the basic levels, let's review how systems handle speech."
  },
  {
    "id": 46,
    "context": "When a computer needs to read text aloud naturally, it must know the exact sounds, stresses, and rhythm to use.",
    "question": "Text-to-speech (TTS) generation heavily relies on which level to ensure natural-sounding output?",
    "options": [
      "A) Discourse level",
      "B) Lexical level",
      "C) Phonological level",
      "D) Syntactic level"
    ],
    "answer": "C) Phonological level",
    "explanation": "Phonology provides the sound rules for TTS. Moving from sound to grammar, the challenge often lies in resolving structural ambiguity."
  },
  {
    "id": 47,
    "context": "Determining if 'books' is a noun (an object) or a verb (an action) depends heavily on the grammatical rules governing its neighboring words.",
    "question": "The task of POS tagging bridges the morphological shape of a word with rules from which other level to determine grammatical category?",
    "options": [
      "A) Phonological level",
      "B) Syntactic level",
      "C) Pragmatic level",
      "D) Discourse level"
    ],
    "answer": "B) Syntactic level",
    "explanation": "Syntax provides the grammatical context that resolves morphological ambiguities. Syntax itself relies on mapping out exact dependencies."
  },
  {
    "id": 48,
    "context": "When a sentence has a complex structure, drawing direct lines between the core verb and its subject/object clarifies how the sentence operates.",
    "question": "Which parsing technique directly maps the subject-verb-object relationships to resolve structural ambiguity?",
    "options": [
      "A) Dependency parsing",
      "B) Constituency parsing",
      "C) Stemming",
      "D) Tokenization"
    ],
    "answer": "A) Dependency parsing",
    "explanation": "Dependency parsing maps these direct connections. Even with clear dependencies, the actual meaning of the entities must be extracted."
  },
  {
    "id": 49,
    "context": "Knowing the structure is useless if the system doesn't know what the words actually mean or who the proper nouns refer to.",
    "question": "Both Word Sense Disambiguation (WSD) and Named Entity Recognition (NER) are key components of which level?",
    "options": [
      "A) Semantic level",
      "B) Phonological level",
      "C) Syntactic level",
      "D) Morphological level"
    ],
    "answer": "A) Semantic level",
    "explanation": "Semantics extracts definitions and categorizes entities. Finally, tying all this meaning to the physical real-world brings us to the highest level."
  },
  {
    "id": 50,
    "context": "The ultimate goal of natural language understanding is for machines to grasp human intent, just like humans do when they say 'It's cold' to request a closed window.",
    "question": "Which level serves as the ultimate analytical layer, relying on situational context and background knowledge to interpret true intent?",
    "options": [
      "A) Phonological level",
      "B) Lexical level",
      "C) Pragmatic level",
      "D) Morphological level"
    ],
    "answer": "C) Pragmatic level",
    "explanation": "The pragmatic layer interprets true real-world intent. This concludes the deep dive into the fundamental levels of NLP processing."
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
