const quizData = 

[
  {
    "id": 1,
    "context": "Natural Language Processing (NLP) aims to build applications to help human beings by understanding and generating language.",
    "question": "According to the lecture, which of the following is an example of an NLP application?",
    "options": [
      "A) Part of speech tagging",
      "B) Word Sense Disambiguation",
      "C) Machine translation",
      "D) Semantic role labeling"
    ],
    "answer": "C) Machine translation",
    "explanation": "Machine translation is an end-user application that helps humans interact across languages. To build these kinds of applications, however, we first need to develop underlying algorithms and core technologies."
  },
  {
    "id": 2,
    "context": "To build end-user NLP applications, developers must first create foundational algorithms known as core technologies.",
    "question": "Which of the following serves as a core NLP technology rather than an end application?",
    "options": [
      "A) Question answering",
      "B) Named entity recognition",
      "C) Dialog systems",
      "D) Information retrieval"
    ],
    "answer": "B) Named entity recognition",
    "explanation": "Named entity recognition is a core technology used to understand text, which then feeds into larger applications. This initial understanding requires parsing through several fundamental algorithmic steps."
  },
  {
    "id": 3,
    "context": "The pipeline of core NLP technologies involves several algorithmic steps to process linguistic data.",
    "question": "Which task is mentioned as one of the starting points for understanding language computationally?",
    "options": [
      "A) Sentiment analysis",
      "B) Part of speech tagging",
      "C) Summarization",
      "D) Information extraction"
    ],
    "answer": "B) Part of speech tagging",
    "explanation": "Part of speech tagging is an initial step in analyzing language structure. Despite having these tools, processing natural language remains exceptionally difficult due to fundamental linguistic challenges."
  },
  {
    "id": 4,
    "context": "The lecture outlines several major challenges that make natural language processing a 'hard problem'.",
    "question": "What is the first major linguistic challenge discussed that occurs at all levels of language?",
    "options": [
      "A) Lack of data",
      "B) Ambiguity",
      "C) Computational complexity",
      "D) Dialectal variation"
    ],
    "answer": "B) Ambiguity",
    "explanation": "Ambiguity is a pervasive issue where language elements have multiple interpretations. We can see this immediately when looking at single words."
  },
  {
    "id": 5,
    "context": "Ambiguity at the word level often involves a single word possessing multiple, entirely different meanings.",
    "question": "In the lecture, what two meanings are given for the ambiguous word 'bank'?",
    "options": [
      "A) A financial institution and a river edge",
      "B) A place to sit and an action of leading",
      "C) A flying animal and a baseball term",
      "D) A vehicle and an enclosure"
    ],
    "answer": "A) A financial institution and a river edge",
    "explanation": "The word 'bank' can refer to a financial bank or a river bank, requiring context to understand. Words can also be ambiguous regarding their grammatical function."
  },
  {
    "id": 6,
    "context": "Beyond meaning, ambiguity can also occur in the grammatical category (part of speech) a word belongs to in a sentence.",
    "question": "How is the word 'chair' used to demonstrate part of speech ambiguity?",
    "options": [
      "A) It can be an adjective or an adverb.",
      "B) It can represent a living thing or an inanimate object.",
      "C) It can act as a noun (furniture) or a verb (leading a session).",
      "D) It can be a subject or a preposition."
    ],
    "answer": "C) It can act as a noun (furniture) or a verb (leading a session).",
    "explanation": "The word 'chair' shifts from a noun to a verb depending on whether you are sitting on it or 'chairing' a meeting. This ambiguity extends from single words to entire sentence structures."
  },
  {
    "id": 7,
    "context": "Syntactic ambiguity arises when a sentence can be structured or parsed in more than one way.",
    "question": "Why is the sentence 'I saw a man with a telescope' considered syntactically ambiguous?",
    "options": [
      "A) The word 'saw' has multiple meanings.",
      "B) It is unclear if 'I' or 'the man' is holding the telescope.",
      "C) The word 'telescope' acts as both a noun and a verb.",
      "D) It lacks a proper subject."
    ],
    "answer": "B) It is unclear if 'I' or 'the man' is holding the telescope.",
    "explanation": "The prepositional phrase 'with a telescope' can attach to the action of seeing or to the man, creating structural confusion. Another structural issue arises when dealing with quantities and sets."
  },
  {
    "id": 8,
    "context": "Using words that express quantity can create multiple interpretations of a sentence's logical meaning.",
    "question": "The sentence 'every child loves some movie' demonstrates which type of ambiguity?",
    "options": [
      "A) Lexical ambiguity",
      "B) Quantifier scope ambiguity",
      "C) Speech act ambiguity",
      "D) Anaphoric ambiguity"
    ],
    "answer": "B) Quantifier scope ambiguity",
    "explanation": "Quantifiers like 'every' and 'some' make it unclear if all children love one specific movie, or if each child loves a different movie. Even simple nouns can introduce complex semantic confusion."
  },
  {
    "id": 9,
    "context": "Semantic ambiguity often involves interpreting the specific sense of a word in a sentence.",
    "question": "What multiple interpretations were given for the word 'duck' in the sentence 'I saw her duck'?",
    "options": [
      "A) An animal, an action of lowering the head, or an affectionate term.",
      "B) A financial institution or a river edge.",
      "C) A piece of furniture or a verb for leading.",
      "D) A writing instrument or an enclosure."
    ],
    "answer": "A) An animal, an action of lowering the head, or an affectionate term.",
    "explanation": "The word 'duck' forces the NLP algorithm to choose the correct sense from completely unrelated meanings. Once we solve ambiguity, we face the next major hurdle: languages are vastly different from one another."
  },
  {
    "id": 10,
    "context": "Languages do not map one-to-one with each other; they express concepts uniquely based on historical and cultural contexts.",
    "question": "What is the second major challenge in NLP discussed after ambiguity?",
    "options": [
      "A) Low processing power",
      "B) Language Diversity",
      "C) Lack of compilers",
      "D) Syntax highlighting"
    ],
    "answer": "B) Language Diversity",
    "explanation": "Language diversity means every language describes the world in a different way. A prime example of this is how different cultures categorize visual elements like color."
  },
  {
    "id": 11,
    "context": "The way speakers perceive and name colors varies drastically depending on their language.",
    "question": "According to the lecture, how do color naming systems differ between Russian and Japanese?",
    "options": [
      "A) Japanese has fewer color names, while Russian has hundreds.",
      "B) Both languages have exactly the same number of color names.",
      "C) Russian has relatively few names for colors, whereas Japanese has hundreds.",
      "D) Russian has hundreds of colors, while English has none."
    ],
    "answer": "C) Russian has relatively few names for colors, whereas Japanese has hundreds.",
    "explanation": "This massive difference in vocabulary shows how culture shapes language. This cultural shaping is also highly visible in figurative expressions."
  },
  {
    "id": 12,
    "context": "Figurative expressions carry connotations that machines cannot easily translate word-for-word.",
    "question": "When we say 'it's raining cats and dogs', what does this idiomatic expression actually mean?",
    "options": [
      "A) Animals are falling from the sky.",
      "B) The rain is very heavy.",
      "C) Pets are playing in the rain.",
      "D) It is a light drizzle."
    ],
    "answer": "B) The rain is very heavy.",
    "explanation": "Idioms like this are completely opaque to literal translation. Metaphors present a similar translation hurdle across languages."
  },
  {
    "id": 13,
    "context": "Metaphors map abstract concepts to physical ones, but these mappings vary globally.",
    "question": "Why is the metaphor 'love is a journey' challenging for multilingual NLP?",
    "options": [
      "A) Because love cannot be translated.",
      "B) Because 'journey' is an ambiguous word.",
      "C) Because different languages conceptualize and express this metaphor using completely different words.",
      "D) Because it contains a syntactic attachment ambiguity."
    ],
    "answer": "C) Because different languages conceptualize and express this metaphor using completely different words.",
    "explanation": "Because languages express such concepts uniquely, the words do not align neatly. This deep connection between language and worldview is famously summarized by a specific hypothesis."
  },
  {
    "id": 14,
    "context": "Linguists have long studied how the specific language we speak impacts our perception of reality.",
    "question": "Which hypothesis states that the language we speak both affects and reflects our view of the world?",
    "options": [
      "A) The Chomsky Hierarchy",
      "B) The Turing Test",
      "C) The Sapir-Whorf Hypothesis (Language Relativity)",
      "D) The Universal Grammar Hypothesis"
    ],
    "answer": "C) The Sapir-Whorf Hypothesis (Language Relativity)",
    "explanation": "The Sapir-Whorf Hypothesis explains why diversity is so deeply ingrained in languages. To manage this diversity, linguists categorize languages into overarching groups."
  },
  {
    "id": 15,
    "context": "Because modeling every language individually is overwhelming, linguists look for shared characteristics.",
    "question": "Why are languages grouped into 'language families'?",
    "options": [
      "A) Because they share the exact same vocabulary.",
      "B) Because they are spoken in the exact same country.",
      "C) Because they exhibit similar linguistic behaviors and shared qualities.",
      "D) Because they were all invented at the same time."
    ],
    "answer": "C) Because they exhibit similar linguistic behaviors and shared qualities.",
    "explanation": "Grouping languages into families helps identify shared qualities. Some of these language families encompass an enormous portion of human languages."
  },
  {
    "id": 16,
    "context": "The world has roughly 6,000 to 7,000 languages, heavily concentrated in specific language families.",
    "question": "Which language family consists of approximately 1,538 languages, making up 20.6% of languages globally?",
    "options": [
      "A) Indo-European",
      "B) Sino-Tibetan",
      "C) Dravidian",
      "D) Niger-Congo"
    ],
    "answer": "D) Niger-Congo",
    "explanation": "The Niger-Congo family is vast. Moving to India, we find several major language families operating within one nation."
  },
  {
    "id": 17,
    "context": "India is highly multilingual, with languages stemming from different major global language families.",
    "question": "Hindi, Gujarati, Marathi, and Punjabi belong to which language sub-family?",
    "options": [
      "A) Dravidian",
      "B) Indo-Aryan (part of Indo-European)",
      "C) Austro-Asiatic",
      "D) Tibeto-Burman"
    ],
    "answer": "B) Indo-Aryan (part of Indo-European)",
    "explanation": "While Indo-Aryan languages dominate much of India, the southern and eastern regions feature entirely different language families."
  },
  {
    "id": 18,
    "context": "Beyond Indo-Aryan, India contains languages that exhibit completely different linguistic roots.",
    "question": "Which of the following are also major language families found in India?",
    "options": [
      "A) Niger-Congo and Sino-Tibetan",
      "B) Dravidian and Austro-Asiatic",
      "C) Uralic and Altaic",
      "D) Afroasiatic and Japonic"
    ],
    "answer": "B) Dravidian and Austro-Asiatic",
    "explanation": "Because India has such diverse language families (like Dravidian and Austro-Asiatic), NLP models cannot easily generalize. This leads to a stark realization about model transferability."
  },
  {
    "id": 19,
    "context": "Diversity across linguistic structures creates a massive barrier for building universal NLP systems.",
    "question": "What is a direct consequence of language diversity across different families in NLP?",
    "options": [
      "A) One model built for a specific language will easily work for another language family.",
      "B) There is no single solution; a model for one language cannot be expected to work perfectly for another.",
      "C) All languages will eventually merge into English.",
      "D) Language families share the exact same syntax."
    ],
    "answer": "B) There is no single solution; a model for one language cannot be expected to work perfectly for another.",
    "explanation": "Since we cannot re-use models perfectly, we must build new ones from scratch for many languages. However, doing so requires something many languages lack."
  },
  {
    "id": 20,
    "context": "Building an NLP model for a new language requires substantial foundational materials.",
    "question": "What is the third major challenge in NLP, heavily prevalent in Indian languages, described as a 'low resource situation'?",
    "options": [
      "A) Lack of internet access",
      "B) Lack of human speakers",
      "C) Lack of sufficient data, resources, pre-processing tools, and technology",
      "D) Lack of character encodings"
    ],
    "answer": "C) Lack of sufficient data, resources, pre-processing tools, and technology",
    "explanation": "A low resource situation means developers don't have the text data needed to train models. This text data primarily comes in two distinct forms."
  },
  {
    "id": 21,
    "context": "To train statistical or neural NLP models, researchers rely heavily on large collections of text called corpora.",
    "question": "What is the difference between monolingual and parallel corpora?",
    "options": [
      "A) Monolingual is spoken text; parallel is written text.",
      "B) Monolingual contains data in one language; parallel contains equivalent/translated data in two languages.",
      "C) Monolingual is used for sentiment analysis; parallel is used for summarization.",
      "D) There is no difference."
    ],
    "answer": "B) Monolingual contains data in one language; parallel contains equivalent/translated data in two languages.",
    "explanation": "Parallel corpora are vital for tasks like machine translation, while monolingual corpora teach the model general language structure. In addition to raw text, models often need human-guided insights."
  },
  {
    "id": 22,
    "context": "Raw text alone is sometimes not enough; linguistic expertise is also required to train accurate models.",
    "question": "Besides monolingual and parallel corpora, what other missing resource contributes to the 'low resource' problem?",
    "options": [
      "A) Cloud computing servers",
      "B) Audio recording devices",
      "C) Manually crafted linguistic resources",
      "D) English translation dictionaries"
    ],
    "answer": "C) Manually crafted linguistic resources",
    "explanation": "Manually crafted linguistic resources (like annotated data) are incredibly scarce for most languages. However, a select few languages do not suffer from this scarcity at all."
  },
  {
    "id": 23,
    "context": "In the landscape of NLP, there is a massive disparity in data availability between different language groups.",
    "question": "Which group of languages is predominantly classified as 'resource-rich'?",
    "options": [
      "A) Tibeto-Burman languages",
      "B) European language families",
      "C) Dravidian languages",
      "D) Austro-Asiatic languages"
    ],
    "answer": "B) European language families",
    "explanation": "European languages benefit from vast amounts of digital text and annotated data. Beneath them is a tier of languages that have moderate amounts of data."
  },
  {
    "id": 24,
    "context": "While few languages are 'resource-rich', several global languages fall into a 'medium resource' category.",
    "question": "Which Indian language is considered a 'medium resource' language alongside Chinese, Arabic, and Russian?",
    "options": [
      "A) Tamil",
      "B) Bengali",
      "C) Telugu",
      "D) Hindi"
    ],
    "answer": "D) Hindi",
    "explanation": "Hindi has some data available, but most of the remaining 6000+ languages are resource-poor. Even for languages with rich history, the domain of their data might be a problem."
  },
  {
    "id": 25,
    "context": "Data must be in a usable domain (like news or Wikipedia) to train modern NLP applications effectively.",
    "question": "Why is having rich classical literature not immediately helpful for building standard NLP tasks for Indian languages?",
    "options": [
      "A) Classical literature cannot be digitized.",
      "B) Modern NLP tasks typically require data from domains like parliamentary proceedings, news, and everyday conversations rather than ancient literature.",
      "C) Classical literature is always perfectly unambiguous.",
      "D) NLP algorithms only work on English literature."
    ],
    "answer": "B) Modern NLP tasks typically require data from domains like parliamentary proceedings, news, and everyday conversations rather than ancient literature.",
    "explanation": "Because classical texts don't reflect modern conversational domains, NLP models struggle to interpret modern contexts. Understanding context is actually one of the most critical parts of human language comprehension."
  },
  {
    "id": 26,
    "context": "To resolve ambiguity, humans unconsciously use the surrounding context of a sentence to figure out who or what is being referred to.",
    "question": "In the sentence 'The man could not lift his son because he was so weak', who does the pronoun 'he' refer to?",
    "options": [
      "A) The son",
      "B) The man",
      "C) An unmentioned third person",
      "D) Both the man and the son"
    ],
    "answer": "B) The man",
    "explanation": "Context tells us that the person trying to lift (the man) is the one lacking strength (weak). If we change just one word, the entire reference shifts."
  },
  {
    "id": 27,
    "context": "A single adjective can alter the logical structure of a sentence and change pronoun resolution entirely.",
    "question": "If the sentence is changed to 'The man couldn't lift his son because he was so heavy', who does the pronoun 'he' now refer to?",
    "options": [
      "A) The man",
      "B) The son",
      "C) The lifting action",
      "D) Neither"
    ],
    "answer": "B) The son",
    "explanation": "The word 'heavy' applies to the object being lifted, switching the reference of 'he' to the son. Sometimes, ambiguity isn't about adjectives, but about relational nouns."
  },
  {
    "id": 28,
    "context": "Nouns that describe relationships can create ambiguity about how subjects are connected.",
    "question": "Why does the sentence 'Mary and Sue are mothers' require a larger context to understand?",
    "options": [
      "A) It is grammatically incorrect.",
      "B) It's unclear if they are mothers to the same child or to different children.",
      "C) The word 'mothers' is a homonym.",
      "D) It lacks a verb."
    ],
    "answer": "B) It's unclear if they are mothers to the same child or to different children.",
    "explanation": "Without broader context, we don't know the exact familial structure being described. Action verbs can also create sudden shifts in pronoun targets."
  },
  {
    "id": 29,
    "context": "The direction of an action verb dictates who is giving and who is receiving.",
    "question": "In the sentences 'John thanked Susan for the help she received' versus '...the help she given', what does changing the verb prove about language?",
    "options": [
      "A) That language is immune to verb changes.",
      "B) That 'she' always refers to the first noun.",
      "C) That language does not act as simple, static substitutional information; substituting one word changes the whole interpretation of the sentence.",
      "D) That thanking someone is a syntactic ambiguity."
    ],
    "answer": "C) That language does not act as simple, static substitutional information; substituting one word changes the whole interpretation of the sentence.",
    "explanation": "Because words change the entire logical flow, models need deep knowledge to follow the plot. This brings us to a complex example involving a toy train."
  },
  {
    "id": 30,
    "context": "Without context, sentences can seem to violate the physical laws of our world.",
    "question": "Why is the sentence 'He found his train in the pen' highly ambiguous and confusing without context?",
    "options": [
      "A) Because trains don't exist anymore.",
      "B) Because it violates the 'container and contained' relationship; a physical writing pen cannot hold a real train.",
      "C) Because 'found' is a polysemous word.",
      "D) Because it lacks pronouns."
    ],
    "answer": "B) Because it violates the 'container and contained' relationship; a physical writing pen cannot hold a real train.",
    "explanation": "Our physical understanding of the world clashes with the sentence. To make sense of it, we need a narrative context."
  },
  {
    "id": 31,
    "context": "Providing a short story provides the context necessary to resolve bizarre sentences.",
    "question": "In the provided context of little Tom crying over his lost toy, what does 'train' refer to in 'He found his train in the pen'?",
    "options": [
      "A) A commuter locomotive",
      "B) The father's real train",
      "C) Tom's toy train",
      "D) A training session"
    ],
    "answer": "C) Tom's toy train",
    "explanation": "Context resolves 'train' to a toy train, reducing its physical size. However, we still need to figure out what 'pen' means in this context."
  },
  {
    "id": 32,
    "context": "Words can have secondary meanings based on cultural or domestic use.",
    "question": "In the context of the story about Tom's toy train, what does the word 'pen' mean?",
    "options": [
      "A) An instrument for writing",
      "B) An enclosure where things (like toys or animals) are kept",
      "C) A penitentiary",
      "D) A brand of train"
    ],
    "answer": "B) An enclosure where things (like toys or animals) are kept",
    "explanation": "Understanding 'pen' as a playpen or enclosure requires cultural knowledge. This highlights the highest level of knowledge a human uses to understand text."
  },
  {
    "id": 33,
    "context": "Humans combine linguistic, contextual, cultural, and pragmatic knowledge seamlessly.",
    "question": "What is described as the most important type of knowledge, which comes through the complete experience of a human being?",
    "options": [
      "A) Syntactic knowledge",
      "B) Lexical knowledge",
      "C) World Knowledge",
      "D) Phonetic knowledge"
    ],
    "answer": "C) World Knowledge",
    "explanation": "World knowledge allows us to effortlessly solve these puzzles, but teaching a machine this knowledge is incredibly difficult. To tackle it, NLP researchers break ambiguity down into four specific categories."
  },
  {
    "id": 34,
    "context": "To structure the 'hard problem', the lecture breaks ambiguity down into four major classifications.",
    "question": "Which of the following is NOT one of the four major types of ambiguity discussed in the lecture?",
    "options": [
      "A) Lexical ambiguity",
      "B) Morphological ambiguity",
      "C) Semantic ambiguity",
      "D) Pragmatic ambiguity"
    ],
    "answer": "B) Morphological ambiguity",
    "explanation": "The four types are Lexical, Syntactic, Semantic, and Pragmatic. Let's look closely at Lexical ambiguity, which deals with words having multiple meanings."
  },
  {
    "id": 35,
    "context": "Lexical ambiguity occurs when words look or sound the same but mean different things.",
    "question": "Words that sound alike and are spelled alike but have completely different meanings (like 'bark' of a tree vs. dog 'bark') are called:",
    "options": [
      "A) Synonyms",
      "B) Polysemes",
      "C) Homonyms",
      "D) Antonyms"
    ],
    "answer": "C) Homonyms",
    "explanation": "Homonyms share zero related meaning. However, another type of lexical ambiguity involves words whose multiple meanings are actually connected."
  },
  {
    "id": 36,
    "context": "Sometimes a single word evolves to have multiple, conceptually linked definitions.",
    "question": "How does 'Polysemy' (e.g., the word 'head') differ from homonymy?",
    "options": [
      "A) Polysemy involves different spellings.",
      "B) Polysemy involves a single word with multiple RELATED meanings.",
      "C) Polysemy only occurs in verbs.",
      "D) Polysemy involves words with opposite meanings."
    ],
    "answer": "B) Polysemy involves a single word with multiple RELATED meanings.",
    "explanation": "The 'head' of a body and the 'head' of an organization are conceptually related, making them polysemous. Moving up from words, ambiguity also happens at the sentence structure level."
  },
  {
    "id": 37,
    "context": "Syntactic ambiguity occurs when a sentence can be diagrammed or parsed in multiple valid ways.",
    "question": "In the sentence 'He saw the man with the telescope', what specific grammatical issue causes the ambiguity?",
    "options": [
      "A) Coordination ambiguity",
      "B) Attachment ambiguity (where to attach the prepositional phrase)",
      "C) Lexical polysemy",
      "D) Deictic ambiguity"
    ],
    "answer": "B) Attachment ambiguity (where to attach the prepositional phrase)",
    "explanation": "The prepositional phrase 'with the telescope' can attach to the verb 'saw' or the noun 'man'. Another syntactic issue arises when joining words with conjunctions."
  },
  {
    "id": 38,
    "context": "Using conjunctions like 'and' can create structural ambiguity about which words modify which.",
    "question": "What type of syntactic ambiguity is present in the phrase 'old men and women'?",
    "options": [
      "A) Attachment ambiguity",
      "B) Coordination ambiguity",
      "C) Quantifier scope",
      "D) Anaphoric ambiguity"
    ],
    "answer": "B) Coordination ambiguity",
    "explanation": "Coordination ambiguity makes it unclear if 'old' modifies only 'men' or both 'men and women'. Semantic ambiguity goes deeper into the actual logic and meaning of phrases."
  },
  {
    "id": 39,
    "context": "Semantic ambiguity occurs when the logical interpretation of words generates multiple meanings.",
    "question": "The sentence 'All students read some books' is an example of which type of semantic ambiguity?",
    "options": [
      "A) Anaphoric ambiguity",
      "B) Quantifier scope ambiguity",
      "C) Homonymy",
      "D) Speech act ambiguity"
    ],
    "answer": "B) Quantifier scope ambiguity",
    "explanation": "The scope of the quantifiers 'all' and 'some' creates confusion about whether it is the same set of books or different ones. Another semantic issue deals with pronouns pointing backward."
  },
  {
    "id": 40,
    "context": "Pronouns must link back to a previous noun, but sometimes there are multiple valid targets.",
    "question": "When a pronoun can be linked to multiple possible antecedents (e.g., 'John told Peter he would win'), it is called:",
    "options": [
      "A) Deictic ambiguity",
      "B) Syntactic attachment",
      "C) Anaphoric ambiguity",
      "D) Lexical ambiguity"
    ],
    "answer": "C) Anaphoric ambiguity",
    "explanation": "Anaphoric ambiguity requires context to resolve who 'he' refers to. The final major category, pragmatic ambiguity, relies almost entirely on the situation."
  },
  {
    "id": 41,
    "context": "Pragmatic ambiguity occurs when interpretation relies heavily on the physical or conversational context.",
    "question": "Which of the following are examples of 'deictic expressions' that cause pragmatic ambiguity if the context is unknown?",
    "options": [
      "A) Bank, Duck, Bark",
      "B) And, Or, But",
      "C) This, That, Here, There",
      "D) Every, Some, All"
    ],
    "answer": "C) This, That, Here, There",
    "explanation": "Deictic words act as pointers; if you don't know where the speaker is pointing, 'here' and 'there' are meaningless. Sometimes, the entire intent of a sentence is pragmaticly ambiguous."
  },
  {
    "id": 42,
    "context": "A sentence structured as a question might actually be a command or a request.",
    "question": "The sentence 'Can you pass the salt?' exhibits speech act ambiguity because it can be interpreted as either a question of capability or:",
    "options": [
      "A) A sarcastic remark",
      "B) A polite request",
      "C) A factual statement",
      "D) A deictic expression"
    ],
    "answer": "B) A polite request",
    "explanation": "Figuring out the 'speech act' (request vs. question) is a major pragmatic challenge. Emotion and tone introduce yet another pragmatic hurdle."
  },
  {
    "id": 43,
    "context": "Human tone can invert the literal dictionary meaning of words.",
    "question": "Saying 'Oh great, another meeting' is a form of pragmatic ambiguity primarily caused by:",
    "options": [
      "A) Irony and sarcasm",
      "B) Attachment issues",
      "C) Quantifier scope",
      "D) Homonyms"
    ],
    "answer": "A) Irony and sarcasm",
    "explanation": "Sarcasm requires understanding the speaker's true attitude. To solve all these ambiguities, NLP has shifted its core methodologies over time."
  },
  {
    "id": 44,
    "context": "Historically, NLP relied on specific toolkits to resolve meaning, but modern approaches use massive amounts of data.",
    "question": "According to the lecture, what technology now helps machines learn context over longer distances, replacing older Word Sense Disambiguation tools?",
    "options": [
      "A) Rule-based grammar engines",
      "B) Transformers and data-driven Machine Learning techniques",
      "C) Manual syntax trees",
      "D) Deictic pointers"
    ],
    "answer": "B) Transformers and data-driven Machine Learning techniques",
    "explanation": "Transformers use data to understand context. However, applying these advanced models in highly diverse environments like India presents unique logistical challenges."
  },
  {
    "id": 45,
    "context": "Processing multilingual NLP in a diverse country poses unique challenges to unified model development.",
    "question": "According to the 8th schedule mentioned in the lecture, how many official languages does India have?",
    "options": [
      "A) 14",
      "B) 22",
      "C) 100",
      "D) Over 6000"
    ],
    "answer": "B) 22",
    "explanation": "These 22 official languages all have distinct linguistic characteristics. Furthermore, what is officially counted as one language might actually encompass many more."
  },
  {
    "id": 46,
    "context": "Major languages often serve as umbrella terms for a variety of distinct regional dialects and sub-languages.",
    "question": "Which languages are mentioned as being grouped under the larger umbrella of 'Hindi'?",
    "options": [
      "A) Tamil, Telugu, Kannada",
      "B) Braj Bhasha, Awadhi, Bhojpuri, Sadri",
      "C) Lambadi, Tulu, Chenchu",
      "D) Marathi, Gujarati, Punjabi"
    ],
    "answer": "B) Braj Bhasha, Awadhi, Bhojpuri, Sadri",
    "explanation": "Because so many distinct speech patterns are grouped under one label, a single 'Hindi' model might not work for Awadhi. This diversity varies drastically depending on the specific Indian state."
  },
  {
    "id": 47,
    "context": "Linguistic diversity is not evenly spread across geographical regions.",
    "question": "According to the lecture, which Indian states represent the most diverse and least diverse in terms of languages spoken?",
    "options": [
      "A) Most diverse: Tamil Nadu; Least diverse: Gujarat",
      "B) Most diverse: Nagaland; Least diverse: Kerala",
      "C) Most diverse: Maharashtra; Least diverse: Punjab",
      "D) Most diverse: Kerala; Least diverse: Nagaland"
    ],
    "answer": "B) Most diverse: Nagaland; Least diverse: Kerala",
    "explanation": "Nagaland has immense diversity, while Kerala is predominantly Malayalam speaking. Even within a single, unified language area, the way individuals speak varies constantly."
  },
  {
    "id": 48,
    "context": "Language variability occurs across different speakers based on a variety of factors, including geography.",
    "question": "Variations in language spoken by specific geographical groups (e.g., using 'truck' in America vs. 'lorry' in Britain/India) are called:",
    "options": [
      "A) Idiolects",
      "B) Sociolects",
      "C) Dialects",
      "D) Homonyms"
    ],
    "answer": "C) Dialects",
    "explanation": "Dialects are geographical variations. However, variation also happens among people living in the exact same area based on their social groups."
  },
  {
    "id": 49,
    "context": "A person's class, education, and occupation heavily influence their vocabulary and language use.",
    "question": "Using the word 'tablet' to mean medicine in a hospital but a computer in an IT firm is an example of professional jargon, which is a type of:",
    "options": [
      "A) Dialect",
      "B) Sociolect",
      "C) Idiolect",
      "D) Polysemy"
    ],
    "answer": "B) Sociolect",
    "explanation": "Sociolects reflect social and occupational identities. Finally, the most granular level of language variation comes down to the individual person."
  },
  {
    "id": 50,
    "context": "Every single person has a unique way of speaking based on their personality and background.",
    "question": "What term refers to the unique form of language used by an individual, such as personal preferences for fillers like 'you know' or 'like'?",
    "options": [
      "A) Dialect",
      "B) Sociolect",
      "C) Idiolect",
      "D) Pragmatic ambiguity"
    ],
    "answer": "C) Idiolect",
    "explanation": "Idiolects showcase the ultimate variability of language. Combining this individual variation with structural ambiguity, low resources, and the computational complexity of running large models summarizes exactly why NLP remains a deeply challenging field."
  }
];


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
