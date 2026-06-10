const quizData = 

[
  {
    "id": 1,
    "context": "NLP applications require data and modeling, meaning any NLP task goes through a multi-stage pipeline involving extensive data transformation.",
    "question": "What is considered the most crucial and initial aspect of the entire NLP pipeline according to the text?",
    "options": [
      "A) Feature engineering",
      "B) Text modeling",
      "C) Data collection",
      "D) Model deployment"
    ],
    "answer": "C) Data collection",
    "explanation": "Data collection is the fundamental starting point of the NLP pipeline, as the raw text is required before any cleaning, pre-processing, or modeling can occur. Once the necessity of data collection is established, the next step is identifying the sources from which to gather this data."
  },
  {
    "id": 2,
    "context": "Once the necessity of data collection is established, the next step is identifying the sources from which to gather this text to ensure it accurately represents the target language.",
    "question": "Which of the following are explicitly mentioned as sources for collecting text data?",
    "options": [
      "A) Only strictly moderated academic journals",
      "B) Websites, books, articles, and social media",
      "C) Exclusively proprietary databases",
      "D) Only structured corporate databases"
    ],
    "answer": "B) Websites, books, articles, and social media",
    "explanation": "The text states that data is gathered from various sources such as websites, books, articles, and social media. However, pulling data from these diverse real-world environments introduces significant challenges regarding the quality of the raw data."
  },
  {
    "id": 3,
    "context": "Pulling data from diverse real-world environments introduces significant challenges regarding the quality of the raw data, as the crawling techniques used might encounter technical issues.",
    "question": "What is a common data quality issue that arises when automatic crawling techniques fail due to technical or code issues?",
    "options": [
      "A) Hyper-structured data",
      "B) Over-anonymized data",
      "C) Incomplete and missing data",
      "D) Unusually large datasets"
    ],
    "answer": "C) Incomplete and missing data",
    "explanation": "Technical failures during data crawling often result in incomplete or missing data, which negatively impacts the quality of language representation. Alongside missing information, another major quality challenge involves the actual structures in which the data is housed."
  },
  {
    "id": 4,
    "context": "Alongside missing information, another major quality challenge involves the actual structures in which the data is housed across different sources.",
    "question": "Which challenge arises from data being represented as HTML pages, SQL resources, PDFs, or images?",
    "options": [
      "A) Data accessibility limits",
      "B) Inconsistent data formats",
      "C) Grammatical perfection",
      "D) Automatic data anonymization"
    ],
    "answer": "B) Inconsistent data formats",
    "explanation": "Because data exists in modes like HTML, SQL, PDFs, or images, researchers deal with inconsistent data formats that must be converted into an editable form. In addition to structural inconsistencies, the content itself is often cluttered with unrelated elements."
  },
  {
    "id": 5,
    "context": "In addition to structural inconsistencies, the content itself is often cluttered with unrelated elements, particularly when scraped from modern websites.",
    "question": "What kind of unwanted elements are frequently encountered as 'noise' or 'outliers' when collecting data from websites?",
    "options": [
      "A) Advertisements and highlighted predictions",
      "B) Standardized unicode characters",
      "C) Clean, grammatical sentences",
      "D) Only relevant search queries"
    ],
    "answer": "A) Advertisements and highlighted predictions",
    "explanation": "Websites are filled with noise such as advertisements and search prediction highlights that must be cleaned to obtain quality data. Once we know how to handle the noise, we must immediately address the ethical and legal boundaries of using this text."
  },
  {
    "id": 6,
    "context": "Once we know how to handle noise and formatting, we must immediately address the ethical and legal boundaries of using this text, as data cannot just be freely copied and pasted.",
    "question": "If an open-source dataset contains highly sensitive information, what crucial step must be taken regarding data privacy?",
    "options": [
      "A) Data monetization",
      "B) Data anonymization",
      "C) Data duplication",
      "D) Data dissemination"
    ],
    "answer": "B) Data anonymization",
    "explanation": "To ensure privacy, sensitive data must undergo anonymization so that personal or sensitive details are not openly exposed. Beyond basic anonymization, data usage must also strictly adhere to established legal frameworks."
  },
  {
    "id": 7,
    "context": "Beyond basic anonymization, data usage must also strictly adhere to established legal frameworks to ensure proper authorization.",
    "question": "Which specific regulation and licensing technique does the lecture mention as essential to comply with during data collection?",
    "options": [
      "A) General Data Protection Regulation (GDPR) and CC-BY licenses",
      "B) Federal Communications Commission (FCC) guidelines",
      "C) Open Web Application Security Project (OWASP)",
      "D) International Organization for Standardization (ISO) 9001"
    ],
    "answer": "A) General Data Protection Regulation (GDPR) and CC-BY licenses",
    "explanation": "The lecture highlights the General Data Protection Regulation (GDPR) and CC-BY licenses as critical frameworks to follow so data usage is legally compliant. After navigating legal compliance, researchers face the physical challenge of keeping the collected data safe."
  },
  {
    "id": 8,
    "context": "After navigating legal compliance, researchers face the physical challenge of keeping the collected data safe, as data cannot simply be dumped anywhere.",
    "question": "What challenge follows data collection and regulation compliance, regarding the placement of the acquired data?",
    "options": [
      "A) Translating the data immediately",
      "B) Securing data storage and transfer",
      "C) Printing the data to physical formats",
      "D) Deleting the original data sets permanently"
    ],
    "answer": "B) Securing data storage and transfer",
    "explanation": "Securing data storage and transfer is necessary because collected data requires a safe environment where it can be stored and accessed when required. However, simply having a storage space does not guarantee that all desired data is easy to obtain."
  },
  {
    "id": 9,
    "context": "Having a storage space does not guarantee that all desired data is easy to obtain, as there are significant accessibility hurdles depending on the source.",
    "question": "Why is data accessibility considered a challenge even after knowing where the data resides?",
    "options": [
      "A) Because all data is freely available to the public",
      "B) Because data is usually too small to analyze",
      "C) Because some data from various sources are proprietary or sensitive",
      "D) Because data does not exist for NLP tasks"
    ],
    "answer": "C) Because some data from various sources are proprietary or sensitive",
    "explanation": "Data accessibility is challenging because many sources protect their data as proprietary or highly sensitive, preventing open access. Certain specialized domains are particularly restrictive, raising financial barriers."
  },
  {
    "id": 10,
    "context": "Certain specialized domains are particularly restrictive and not openly available due to privacy or security, which raises significant financial or logistical barriers.",
    "question": "Which two specific sectors were highlighted as having high costs or high barriers for acquiring datasets?",
    "options": [
      "A) Sports and entertainment",
      "B) Defense and health",
      "C) Social media and blogging",
      "D) Weather and agriculture"
    ],
    "answer": "B) Defense and health",
    "explanation": "The defense and health sectors are highlighted because their data is highly sensitive, not openly available, and extremely difficult or costly to acquire. Assuming access is granted, the focus then shifts to the demographics and sheer size of the dataset."
  },
  {
    "id": 11,
    "context": "Assuming access is granted to these domains, the focus then shifts to the demographics and sheer size of the dataset needed to build a robust application.",
    "question": "When assessing the 'variety' of required data, what demographic factors should ideally be represented?",
    "options": [
      "A) Only the formal written vocabulary of a language",
      "B) Geographic location, age groups, and gender representation",
      "C) Exclusively urban speakers",
      "D) Only the technical jargon of a specific field"
    ],
    "answer": "B) Geographic location, age groups, and gender representation",
    "explanation": "To truly represent a language, data variety must capture different speakers across various geographic locations, age groups, and genders. Gathering this varied data naturally leads to the accumulation of massive datasets."
  },
  {
    "id": 12,
    "context": "Gathering this varied representation across multiple demographics naturally leads to the accumulation of massive datasets, transitioning into the realm of Big Data.",
    "question": "What makes volume management particularly difficult in modern NLP data collection?",
    "options": [
      "A) Modern NLP only requires a few megabytes of data",
      "B) Integrating large volumes of unstructured data from multiple sources and formats",
      "C) Finding storage devices that support text files",
      "D) Compressing text into binary format"
    ],
    "answer": "B) Integrating large volumes of unstructured data from multiple sources and formats",
    "explanation": "Modern NLP requires Big Data, which means managing, integrating, and handling massive volumes of unstructured data from varying sources and formats is extremely difficult. Furthermore, handling such large volumes requires careful attention to ensure the model learns fairly."
  },
  {
    "id": 13,
    "context": "Furthermore, handling such large volumes requires careful attention to ensure the model learns fairly and accurately reflects the real world.",
    "question": "Why is it important to ensure representativeness in NLP data collection?",
    "options": [
      "A) To ensure the data only represents the wealthy population",
      "B) To deliberately inject inherent biases into the model",
      "C) To avoid and mitigate inherent biases in the data collection process",
      "D) To limit the geographic scope of the application"
    ],
    "answer": "C) To avoid and mitigate inherent biases in the data collection process",
    "explanation": "Ensuring representativeness helps to avoid inherent biases, making sure the data accurately reflects the whole population and maintaining overall quality. This relationship between massive scale and quality is particularly strained in certain specific scenarios."
  },
  {
    "id": 14,
    "context": "The relationship between massive scale and quality is particularly strained in certain scenarios where gathering Big Data is simply impossible.",
    "question": "In a 'low resource scenario' where high quantity data is unavailable, what becomes the most crucial factor for an NLP application?",
    "options": [
      "A) Ignoring the data completely",
      "B) High quality of the available data",
      "C) Increasing the noise in the data",
      "D) Using only numerical data"
    ],
    "answer": "B) High quality of the available data",
    "explanation": "In low resource settings where quantity is impossible to achieve, maintaining high quality in the small amount of data available makes a critical difference in application performance. To achieve this high quality, the raw collected data must immediately undergo a refinement process."
  },
  {
    "id": 15,
    "context": "To achieve high quality, raw collected data cannot simply be fed into a model; it must immediately undergo a refinement process starting with basic text cleaning.",
    "question": "What does the first phase of text cleaning typically involve removing?",
    "options": [
      "A) Nouns and verbs",
      "B) Valid dictionary words",
      "C) Punctuation, numbers, and special characters",
      "D) All vowels from the text"
    ],
    "answer": "C) Punctuation, numbers, and special characters",
    "explanation": "The basic cleaning phase often starts with removing punctuation, numbers, and special characters that are considered noise for later processing. Removing these elements serves a very specific purpose for the model's focus."
  },
  {
    "id": 16,
    "context": "Removing numbers and special characters serves a specific purpose for the model's focus as it processes the remaining tokens.",
    "question": "Why is it sometimes necessary to remove numbers, punctuations, and special characters from text data?",
    "options": [
      "A) Because they are foreign elements that don't help in focusing on the meaningful part of the text",
      "B) Because computer models cannot parse symbols at all",
      "C) Because doing so increases the file size",
      "D) Because it automatically corrects grammatical errors"
    ],
    "answer": "A) Because they are foreign elements that don't help in focusing on the meaningful part of the text",
    "explanation": "Removing these elements cleans the text of unneeded 'foreign elements', helping the processing stages focus solely on the meaningful textual parts. However, the remaining meaningful text is often flawed because of how it was originally generated."
  },
  {
    "id": 17,
    "context": "The remaining meaningful text is often flawed because humans naturally make mistakes when writing online, necessitating the next step of cleaning.",
    "question": "What is the second major text cleaning step required due to human writing habits?",
    "options": [
      "A) Converting everything to images",
      "B) Correcting spelling errors and grammatical mistakes",
      "C) Adding random punctuation for syntax parsing",
      "D) Translating the text into multiple languages"
    ],
    "answer": "B) Correcting spelling errors and grammatical mistakes",
    "explanation": "Because humans tend to make mistakes (spelling, grammar, coherence) when writing, correcting these errors is a vital part of the cleaning stage. Interestingly, the mathematical impact of correcting these spelling errors varies heavily depending on the size of the dataset."
  },
  {
    "id": 18,
    "context": "The mathematical impact of correcting spelling errors varies heavily depending on the size of the dataset, particularly between high and low resource settings.",
    "question": "How does the impact of a spelling mistake differ between a high resource setup and a very low resource setup?",
    "options": [
      "A) It is devastating in high resource setups but irrelevant in low resource setups",
      "B) In high resource setups it is statistically insignificant, but in low resource setups it greatly impacts the modeling stage",
      "C) It forces the model to crash in high resource setups only",
      "D) There is no difference; spelling mistakes always ruin both setups equally"
    ],
    "answer": "B) In high resource setups it is statistically insignificant, but in low resource setups it greatly impacts the modeling stage",
    "explanation": "In huge datasets, rare spelling mistakes lack statistical weight to confuse the machine. However, in small, low resource datasets, even minor errors skew the data significantly. This skewing directly affects how words are algorithmically valued."
  },
  {
    "id": 19,
    "context": "This skewing directly affects how words are algorithmically valued during the creation of textual embeddings.",
    "question": "Why must a sentence like 'this sentence contains spelling error' be corrected before text representation techniques like contextual embeddings?",
    "options": [
      "A) So that the text can be printed out",
      "B) So that the words receive proper weightage in techniques like 'word to wake' (Word2Vec) or 'glow' (GloVe)",
      "C) So that the sentence becomes longer",
      "D) Because contextual embeddings only accept 10-word sentences"
    ],
    "answer": "B) So that the words receive proper weightage in techniques like 'word to wake' (Word2Vec) or 'glow' (GloVe)",
    "explanation": "Correcting errors ensures that words get assigned proper mathematical weightage when fed into text representation algorithms like Word2Vec or GloVe. Beyond pure errors, words are also intentionally spelled differently based on regional dialects, requiring another form of correction."
  },
  {
    "id": 20,
    "context": "Beyond pure errors, words are also intentionally spelled differently based on regional dialects, requiring another form of text correction to group identical concepts.",
    "question": "What process is used to handle dialectal variations, such as standardizing 'color' and 'colour' into a single standard form?",
    "options": [
      "A) Normalization",
      "B) Tokenization",
      "C) Data Anonymization",
      "D) Lower casing"
    ],
    "answer": "A) Normalization",
    "explanation": "Normalization is the process used to convert intentional dialectal spelling variations (like color/colour) into a unified standard form. This standardization is incredibly important when dealing with text from highly informal environments."
  },
  {
    "id": 21,
    "context": "Standardization is incredibly important when dealing with text from highly informal environments, such as social media, where the vocabulary shifts drastically.",
    "question": "How should social media slang like 'OMG' be handled during the cleaning/normalization phase?",
    "options": [
      "A) It should be deleted as an unwanted special character",
      "B) It should be expanded and normalized into standard text, such as 'oh my God'",
      "C) It should be kept exactly as is to preserve grammatical structure",
      "D) It should be replaced with random numbers"
    ],
    "answer": "B) It should be expanded and normalized into standard text, such as 'oh my God'",
    "explanation": "Social media slang like 'OMG' needs to be expanded into standard text ('oh my God') to align with formal textual representation. Similarly, numerical abbreviations found online must also be deciphered."
  },
  {
    "id": 22,
    "context": "Similarly, numerical abbreviations found online must also be deciphered to ensure the model understands the underlying word.",
    "question": "According to the lecture, how should the social media abbreviation 'gr8' be normalized?",
    "options": [
      "A) Normalized to 'grade'",
      "B) Translated into a mathematical equation",
      "C) Normalized to 'great' (gr + eight marker)",
      "D) Ignored entirely as a typo"
    ],
    "answer": "C) Normalized to 'great' (gr + eight marker)",
    "explanation": "'gr8' uses an 'eight marker' to represent 'great', and must be normalized back to 'great'. Normalizing all these variations serves a critical overarching goal for the dataset."
  },
  {
    "id": 23,
    "context": "Normalizing all these slang terms, abbreviations, and dialect variations serves a critical overarching goal for managing the entire dataset.",
    "question": "What is the primary benefit of normalizing text across a dataset?",
    "options": [
      "A) It maximizes data redundancy",
      "B) It ensures clarity and consistency across the data set for a particular domain",
      "C) It guarantees the data is 100% anonymized",
      "D) It increases the file size of the database"
    ],
    "answer": "B) It ensures clarity and consistency across the data set for a particular domain",
    "explanation": "Normalization ensures clarity and consistency, providing a uniform representation of the language. With the text finally clean and consistent, it is ready to advance from simple cleaning to advanced linguistic pre-processing."
  },
  {
    "id": 24,
    "context": "With the text finally clean and consistent, it is ready to advance from simple cleaning to advanced linguistic pre-processing stages.",
    "question": "Which of the following tasks are considered high-level linguistic text pre-processing steps rather than just basic data cleaning?",
    "options": [
      "A) Crawling websites and storing SQL databases",
      "B) Removing HTML tags and CSS styles",
      "C) Tokenization, POS tagging, lemmatization, and named entity recognition",
      "D) Deleting incomplete data files"
    ],
    "answer": "C) Tokenization, POS tagging, lemmatization, and named entity recognition",
    "explanation": "Pre-processing involves linguistic structuring like tokenization, POS tagging, lemmatization, and NER to prepare text for modeling. Implementing these complex steps is vital because it profoundly impacts the output quality."
  },
  {
    "id": 25,
    "context": "Implementing these complex pre-processing steps is vital because it profoundly impacts the output quality and the computational burden on the system.",
    "question": "How does text pre-processing specifically improve a model's training efficiency?",
    "options": [
      "A) By increasing the dimensionality and complexity of the dataset",
      "B) By speeding up training through reducing data complexity and dimensionality",
      "C) By downloading more hardware resources automatically",
      "D) By bypassing the modeling stage entirely"
    ],
    "answer": "B) By speeding up training through reducing data complexity and dimensionality",
    "explanation": "Pre-processing reduces the overall complexity and dimensionality of the text data, which in turn significantly speeds up model training efficiency. Another major benefit of carefully analyzing and pre-processing text is tackling societal issues hidden within the raw data."
  },
  {
    "id": 26,
    "context": "Another major benefit of carefully analyzing and pre-processing text is tackling societal issues hidden within the raw, human-generated data.",
    "question": "What social issue can proper pre-processing help mitigate in the raw text data?",
    "options": [
      "A) Internet connection speeds",
      "B) Corporate taxation",
      "C) Inherent biases",
      "D) Financial inflation"
    ],
    "answer": "C) Inherent biases",
    "explanation": "Proper pre-processing helps to identify and mitigate inherent biases present in the raw text, ensuring fairer modeling. The very first operational step to begin this pre-processing journey involves breaking the text apart."
  },
  {
    "id": 27,
    "context": "The very first operational step to begin this pre-processing journey involves breaking the large blocks of text apart into manageable units.",
    "question": "What is the primary definition of the tokenization step in NLP pre-processing?",
    "options": [
      "A) Translating words into multiple languages",
      "B) Grouping multiple documents into a single massive file",
      "C) Splitting the text into individual words and sentences",
      "D) Reversing the order of characters in a string"
    ],
    "answer": "C) Splitting the text into individual words and sentences",
    "explanation": "Tokenization is defined as the process of splitting cleaned text into distinct sentences and individual words. While splitting text by periods sounds easy, it frequently encounters complex edge cases."
  },
  {
    "id": 28,
    "context": "While splitting text by periods sounds easy for sentence tokenization, it frequently encounters complex edge cases that confuse basic algorithms.",
    "question": "Why is the period (dot) considered ambiguous and challenging during sentence tokenization?",
    "options": [
      "A) Because periods are never used at the end of a sentence",
      "B) Because periods are also used in abbreviations like 'Ph.D.' and shouldn't be identified as sentence boundaries",
      "C) Because periods represent numbers in most languages",
      "D) Because periods are invisible to tokenization algorithms"
    ],
    "answer": "B) Because periods are also used in abbreviations like 'Ph.D.' and shouldn't be identified as sentence boundaries",
    "explanation": "Periods are ambiguous because they mark both sentence boundaries and abbreviations (like Ph.D., e.g.), requiring the tokenizer to distinguish between the two uses. Aside from periods, other punctuation marks also complicate sentence boundaries."
  },
  {
    "id": 29,
    "context": "Aside from periods, other punctuation marks also complicate sentence boundaries and must be handled carefully so sentences aren't fractured.",
    "question": "When performing sentence tokenization, what must be done regarding sentences that include quotes and parenthesis?",
    "options": [
      "A) They must be immediately deleted from the dataset",
      "B) They should be split into multiple separate sentences",
      "C) It must be ensured that they remain part of one sentence and are not erroneously split",
      "D) They must be converted into numerical values"
    ],
    "answer": "C) It must be ensured that they remain part of one sentence and are not erroneously split",
    "explanation": "Quotes and parenthesis must be maintained as part of a single sentence boundary rather than being split into multiple fragments. Once the text is successfully split into complete sentences, the tokenization process goes one level deeper."
  },
  {
    "id": 30,
    "context": "Once the text is successfully split into complete sentences, the tokenization process goes one level deeper to break down the sentences themselves.",
    "question": "Following sentence tokenization, what is the next specific tokenization process described?",
    "options": [
      "A) Character tokenization",
      "B) Paragraph tokenization",
      "C) Word tokenization",
      "D) Byte tokenization"
    ],
    "answer": "C) Word tokenization",
    "explanation": "Word tokenization is the subsequent process of splitting the identified sentences into individual words. Just like sentence tokenization, word tokenization struggles with periods acting as punctuation versus internal characters."
  },
  {
    "id": 31,
    "context": "Just like sentence tokenization, word tokenization struggles with periods acting as punctuation versus internal characters within a single concept.",
    "question": "During word tokenization, why must elements like 'm.p.h.' or 'Ph.D.' be handled carefully?",
    "options": [
      "A) Because they are inherently offensive words",
      "B) So that they are not split into different isolated letters but kept as one word boundary",
      "C) Because they are mathematically equivalent to zero",
      "D) Because they only occur in the defense sector"
    ],
    "answer": "B) So that they are not split into different isolated letters but kept as one word boundary",
    "explanation": "Abbreviations like 'm.p.h.' must be kept intact as a single word boundary instead of being split into 'm', 'p', and 'h'. Specialized digital text formats present similar grouping challenges during tokenization."
  },
  {
    "id": 32,
    "context": "Specialized digital text formats present similar grouping challenges during tokenization and require a specific parsing plan.",
    "question": "Which specific textual elements should have their own tokenization plan rather than being blindly split by special characters?",
    "options": [
      "A) Only proper nouns",
      "B) Email addresses and URLs",
      "C) Blank spaces",
      "D) Only words ending in 'ing'"
    ],
    "answer": "B) Email addresses and URLs",
    "explanation": "Email addresses and URLs contain intrinsic special characters (like @ and .) but hold value as a single cohesive unit, meaning the tokenizer must have a plan to keep them intact. The English language presents an additional challenge by merging words together using apostrophes."
  },
  {
    "id": 33,
    "context": "The English language presents an additional challenge by merging two words together using apostrophes, requiring the tokenizer to separate out distinct functional elements.",
    "question": "How does the lecture suggest handling an English contraction like 'we're' during tokenization?",
    "options": [
      "A) Treat it as a single unbreakable noun",
      "B) Split it into 'we' and an apostrophe 're', recognizing 're' as a distinct verb token (are)",
      "C) Delete it entirely since it's informal",
      "D) Replace the apostrophe with a period"
    ],
    "answer": "B) Split it into 'we' and an apostrophe 're', recognizing 're' as a distinct verb token (are)",
    "explanation": "Contractions like 'we're' are split into the pronoun ('we') and the verb token ('re') so the underlying grammatical units are accurately represented. Modern language models, however, take splitting words even further, often abandoning traditional linguistic rules entirely."
  },
  {
    "id": 34,
    "context": "Modern language models take splitting words even further, often abandoning traditional linguistic rules entirely in favor of statistical word division.",
    "question": "Unlike linguistic word tokenization, what modern tokenization technique do current language models use to handle long words like 'disestablishmentarianism'?",
    "options": [
      "A) Sentence boundary tokenization",
      "B) Vowel-only tokenization",
      "C) Subword tokenization based on frequency of occurrence",
      "D) Ignoring words over 10 letters"
    ],
    "answer": "C) Subword tokenization based on frequency of occurrence",
    "explanation": "Modern models use subword tokenization, breaking massive words down into frequent subword components rather than linguistic roots. Because these fragments are statistically generated, they can look very strange to human readers."
  },
  {
    "id": 35,
    "context": "Because these fragments are statistically generated based on frequency rather than grammar, they can look very strange to human readers.",
    "question": "What is a major characteristic of the 'subwords' generated by modern language model tokenization techniques?",
    "options": [
      "A) They are always valid dictionary words",
      "B) They are alien words that need not be meaningful linguistic elements",
      "C) They always end in a vowel",
      "D) They perfectly represent human syllables"
    ],
    "answer": "B) They are alien words that need not be meaningful linguistic elements",
    "explanation": "Subwords generated by models are often 'alien words' to the language because they are split based on mathematical frequency, not linguistic meaning. Once text is tokenized into manageable units, its casing is standardized."
  },
  {
    "id": 36,
    "context": "Once text is tokenized into manageable units, its casing is standardized, which is an especially crucial step for languages like English.",
    "question": "What does the pre-processing step of 'lower casing' involve?",
    "options": [
      "A) Moving text to the bottom of the document",
      "B) Converting all characters in a text into a lower case",
      "C) Lowering the volume of audio data",
      "D) Translating text into a lower-resource language"
    ],
    "answer": "B) Converting all characters in a text into a lower case",
    "explanation": "Lower casing is the straightforward process of converting all uppercase characters into lowercase form. This simple conversion yields a massive benefit for data processing systems."
  },
  {
    "id": 37,
    "context": "This simple conversion to lowercase yields a massive benefit for data processing systems by reducing the number of distinct entities the machine has to track.",
    "question": "Why is uniform representation through lower casing beneficial for processing large data?",
    "options": [
      "A) It makes the text harder to read for humans",
      "B) It treats words written in different cases as identical, simplifying matching and improving efficiency",
      "C) It automatically translates English to Hindi",
      "D) It increases the dimensionality of the text"
    ],
    "answer": "B) It treats words written in different cases as identical, simplifying matching and improving efficiency",
    "explanation": "Lower casing treats words like 'Apple' and 'apple' as identical, providing a uniform representation that simplifies matching and boosts model efficiency. We can clearly see this benefit in action when querying large databases."
  },
  {
    "id": 38,
    "context": "We can clearly see the benefit of lowercasing in action when users attempt to query large databases or utilize search engines.",
    "question": "In the search engine example, why would searching for 'quick brown fox' fail without lower casing?",
    "options": [
      "A) Because foxes are not allowed in the database",
      "B) Because a database storing 'Fox' (capital F) would not match a query for 'fox' (small f)",
      "C) Because search engines only accept numeric queries",
      "D) Because 'quick brown fox' is a stop word"
    ],
    "answer": "B) Because a database storing 'Fox' (capital F) would not match a query for 'fox' (small f)",
    "explanation": "Without lowercasing, the exact string match fails; a small 'f' in the query will not retrieve the capital 'F' document. After standardizing the casing, we must decide whether to filter out highly frequent, low-value words."
  },
  {
    "id": 39,
    "context": "After standardizing the casing, we must decide whether to filter out highly frequent, functionally necessary, but semantically weak words.",
    "question": "What is the primary function of 'stop word removal'?",
    "options": [
      "A) To remove the most unique words in a text",
      "B) To eliminate common, functional elements like 'and', 'the', and 'of' that add little value",
      "C) To remove punctuation at the end of sentences",
      "D) To stop the tokenization process"
    ],
    "answer": "B) To eliminate common, functional elements like 'and', 'the', and 'of' that add little value",
    "explanation": "Stop word removal eliminates common functional words that carry little semantic value on their own. However, blindly removing these words is dangerous; the decision depends entirely on the end goal of the NLP application."
  },
  {
    "id": 40,
    "context": "Blindly removing common words is dangerous; the decision to remove them depends entirely on the specific end goal of the NLP application.",
    "question": "For which types of NLP applications is stop word removal generally considered appropriate and useful?",
    "options": [
      "A) Machine translation and text generation",
      "B) Creating poetry and deep linguistic understanding",
      "C) Chatbots, information retrieval, and summarization techniques",
      "D) Transcribing audio files strictly word-for-word"
    ],
    "answer": "C) Chatbots, information retrieval, and summarization techniques",
    "explanation": "Stop words are often safely removed in applications like retrieval, topic modeling, and summarization where broad keywords are more important than grammar. Even within these appropriate applications, building the filter list is challenging."
  },
  {
    "id": 41,
    "context": "Even within appropriate retrieval applications, building the correct filter list to identify these words is challenging because languages function differently.",
    "question": "What is a major challenge in determining the appropriate stop word list?",
    "options": [
      "A) Stop words are identical across every human language",
      "B) It changes according to language and specific contexts",
      "C) Stop words only consist of nouns",
      "D) There are no common words in low-resource languages"
    ],
    "answer": "B) It changes according to language and specific contexts",
    "explanation": "Stop word lists are challenging to build because functional words differ entirely depending on the language and the specific context of the text. Context is especially vital when dealing with words that alter the meaning of an entire sentence."
  },
  {
    "id": 42,
    "context": "Context is especially vital when dealing with words that alter the meaning of an entire sentence, particularly those expressing negation.",
    "question": "Why should stop words like 'not' be retained when performing sentiment analysis?",
    "options": [
      "A) Because they are nouns",
      "B) Because removing 'not' from 'not happy' flips the sentiment completely opposite",
      "C) Because 'not' is a rare, low-frequency word",
      "D) Because sentiment analysis algorithms crash without the word 'not'"
    ],
    "answer": "B) Because removing 'not' from 'not happy' flips the sentiment completely opposite",
    "explanation": "In sentiment analysis, removing a stop word like 'not' changes 'not happy' to 'happy', entirely reversing the sentiment. Beyond sentiment, generative tasks also rely heavily on these functional words to produce natural text."
  },
  {
    "id": 43,
    "context": "Beyond sentiment analysis, generative tasks also rely heavily on these functional words to produce natural, grammatically correct text.",
    "question": "Why is it crucial to retain stop words like 'to' in machine translation and text generation (e.g., 'I went to the school')?",
    "options": [
      "A) It preserves grammatical structure and destination case markers",
      "B) It makes the text much shorter",
      "C) It prevents the model from generating English",
      "D) 'To' acts as a universal punctuation mark"
    ],
    "answer": "A) It preserves grammatical structure and destination case markers",
    "explanation": "Text generation requires grammatical markers like 'to' to properly construct valid sentences indicating destination and structural flow. Another major exception to stop word removal involves common words locked within idioms."
  },
  {
    "id": 44,
    "context": "Another major exception to stop word removal involves common words locked within specific idioms or set phrases that lose their meaning if broken apart.",
    "question": "What happens to Multi-Word Expressions (MWEs) like 'fish and chips' or 'kick the bucket' if stop words are aggressively removed?",
    "options": [
      "A) They become easier to translate",
      "B) They lose their specific idiomatic meaning",
      "C) They turn into single words",
      "D) Their sentiment becomes extremely positive"
    ],
    "answer": "B) They lose their specific idiomatic meaning",
    "explanation": "Removing the 'and' in 'fish and chips' or 'the' in 'kick the bucket' destroys the set phrase, causing the expression to lose its specific meaning. After tokenization, casing, and filtering, words undergo advanced normalization to resolve underlying digital representations."
  },
  {
    "id": 45,
    "context": "After basic tokenization, casing, and filtering, words undergo advanced normalization to resolve deep underlying digital representations and formatting issues.",
    "question": "What is the overall goal of advanced normalization?",
    "options": [
      "A) Converting text into random noise",
      "B) Converting text into a standard format, handling abbreviations, Unicode, and complex spellings",
      "C) Deleting the entire text dataset",
      "D) Adding typos to avoid plagiarism"
    ],
    "answer": "B) Converting text into a standard format, handling abbreviations, Unicode, and complex spellings",
    "explanation": "Normalization standardizes the text, comprehensively addressing differing spelling variations, expanding slang, and unifying Unicode encodings. An interesting normalization challenge arises when a community without a script adopts another language's alphabet."
  },
  {
    "id": 46,
    "context": "An interesting normalization challenge arises when a community without a written script adopts a neighboring language's alphabet to represent their sounds digitally.",
    "question": "According to the lecture, which spoken language group adopted the Tamil script to digitally represent their language?",
    "options": [
      "A) Hindi speakers in Delhi",
      "B) Badaga speakers living in Ooty (UTI)",
      "C) Bengali speakers in Kolkata",
      "D) Punjabi speakers using Gurmukhi"
    ],
    "answer": "B) Badaga speakers living in Ooty (UTI)",
    "explanation": "Badaga speakers living near Ooty adopted the nearby Tamil script to represent their oral language textually. While borrowing scripts creates variation, even languages with dedicated scripts face digital ambiguities regarding how characters are encoded."
  },
  {
    "id": 47,
    "context": "Even languages with dedicated scripts face digital ambiguities regarding how characters are encoded by the computer system.",
    "question": "What Unicode normalization problem arises with glyphs like a character with an 'NTA marker'?",
    "options": [
      "A) It cannot be displayed on modern screens",
      "B) It can be represented by either a single Unicode point or a combination of two separate Unicode points",
      "C) It automatically translates to Roman letters",
      "D) It requires special VR hardware to view"
    ],
    "answer": "B) It can be represented by either a single Unicode point or a combination of two separate Unicode points",
    "explanation": "A character might have one combined Unicode point, or be formed by adding a base character code to an NTA marker code, requiring normalization so both representations get equal weightage. Alongside digital encodings, valid alternate spellings of a single word must also be unified."
  },
  {
    "id": 48,
    "context": "Alongside digital encodings, valid alternate spellings of a single word must also be unified so they are treated identically by the algorithm.",
    "question": "How does the lecture propose normalizing multiple valid spellings of the Telugu word 'Tata' (meaning later/afterwards)?",
    "options": [
      "A) Discarding the word completely",
      "B) Normalizing to the spelling most frequently found in the core corpus",
      "C) Inventing a brand new spelling",
      "D) Translating it to English before modeling"
    ],
    "answer": "B) Normalizing to the spelling most frequently found in the core corpus",
    "explanation": "When there are multiple valid spellings, the pre-processing technique normalizes the word to whichever spelling is most frequent in the corpus. Finally, to analyze the core meaning of the vocabulary, the text undergoes root-word extraction."
  },
  {
    "id": 49,
    "context": "To analyze the core meaning of the vocabulary, the text undergoes root-word extraction techniques, the fastest of which is stemming.",
    "question": "Which of the following describes the 'stemming' process?",
    "options": [
      "A) It uses a complex dictionary to find exact contextual meaning",
      "B) It uses heuristic rules to blindly remove suffixes, which can sometimes produce non-words",
      "C) It adds grammatical inflections to base words",
      "D) It capitalizes all proper nouns"
    ],
    "answer": "B) It uses heuristic rules to blindly remove suffixes, which can sometimes produce non-words",
    "explanation": "Stemming uses simple heuristic rules to chop off suffixes (like 'ies' or 'ing'). Because it just chops letters, it often leaves a stem that is not an actual word (like 'fli' for 'flies'). To get a true, valid word, a more complex method is required."
  },
  {
    "id": 50,
    "context": "Because stemming simply chops letters to produce non-words like 'fli' or 'ladi', obtaining a true, valid dictionary word requires a more linguistically aware method.",
    "question": "How does lemmatization differ from stemming when processing a word like 'ladies'?",
    "options": [
      "A) Lemmatization outputs 'ladi' using heuristic rules",
      "B) Lemmatization removes the word entirely",
      "C) Lemmatization uses a dictionary and context to output the valid root word 'lady'",
      "D) Lemmatization pluralizes the word further"
    ],
    "answer": "C) Lemmatization uses a dictionary and context to output the valid root word 'lady'",
    "explanation": "Lemmatization differs by utilizing context and dictionary analysis to reduce 'ladies' to its valid root 'lady', unlike stemming which just reduces it to 'ladi'. This advanced, valid linguistic normalization prepares the finalized text for modeling."
  }
];


let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

// ── Utilities ────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

function acc() {
  const total = correct + wrong;
  return total ? Math.round((correct / total) * 100) + '%' : '--';
}

function refreshScore() {
  correct = answered.filter(a => a?.ok).length;
  wrong   = answered.filter(a => a && !a.ok).length;
}

function recordAnswer(q) {
  if (answered[idx]) return;
  answered[idx] = { selected: chosen, ok: chosen === q.answer };
  refreshScore();
}

function formatRanges(numbers) {
  if (!numbers.length) return '';
  const ranges = [];
  let start = numbers[0], end = numbers[0];
  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] === end + 1) { end = numbers[i]; continue; }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    start = end = numbers[i];
  }
  return ranges.join(', ');
}

function answeredRange() {
  return formatRanges(answered.map((a, i) => a ? i + 1 : null).filter(Boolean));
}

function questionGlimpse(q) {
  return q.length > 58 ? q.slice(0, 58) + '...' : q;
}

function setKey(handler) {
  document.onkeydown = handler;
}

// ── HUD / progress ───────────────────────────────────────────────────────────

function updateHUD() {
  $('hdr-correct').textContent = correct;
  $('hdr-wrong').textContent   = wrong;
  $('hdr-acc').textContent     = acc();
  const pct = idx >= quizData.length ? 100 : Math.round((idx / quizData.length) * 100);
  $('prog-fill').style.width   = pct + '%';
  $('prog-text').textContent   = idx >= quizData.length ? 'COMPLETE' : `Q ${idx + 1} / ${quizData.length}`;
}

// ── Render dispatcher ────────────────────────────────────────────────────────

function render() {
  updateHUD();
  const c = $('card-container');
  c.innerHTML = '';
  if (idx >= quizData.length) { renderFinal(c); return; }
  if (phase === 'context')        renderCtx(c);
  else if (phase === 'question')  renderQ(c);
  else                            renderExp(c);
}

// ── Shared HTML helpers ───────────────────────────────────────────────────────

function prevButtonHTML() {
  return idx > 0
    ? '<button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>'
    : '';
}

function renderOptions(q, disabled = false, response = null) {
  return q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (disabled) {
      if (o === q.answer)                           cls += ' correct-reveal';
      else if (response && o === response.selected && !response.ok) cls += ' wrong-reveal';
    }
    return `<li><button class="${cls}" ${disabled ? 'disabled' : ''} data-val="${o.replace(/"/g, '&quot;')}">${o}</button></li>`;
  }).join('');
}

// ── Phase renderers ───────────────────────────────────────────────────────────

function renderCtx(c) {
  const q = quizData[idx];
  c.innerHTML = `
    <div class="sf-label">context // node ${idx + 1}</div>
    <div class="sf-content">${q.context}</div>
    <button class="sf-action" id="btn-fwd">PROCEED TO QUERY &gt;</button>
  `;
  const goNext = () => { phase = 'question'; render(); };
  $('btn-fwd').onclick = goNext;
  setKey(e => { if (e.key === 'Enter') { e.preventDefault(); goNext(); } });
}

function renderQ(c) {
  const q = quizData[idx];
  chosen = null;
  c.innerHTML = `
    <div class="sf-label">query // node ${idx + 1}</div>
    <div class="sf-content">${q.question}</div>
    <ul class="sf-options">${renderOptions(q)}</ul>
    <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
  `;

  const sub       = $('btn-sub');
  const optBtns   = [...c.querySelectorAll('.sf-opt-btn')];

  const selectOption = btn => {
    optBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    chosen = btn.getAttribute('data-val');
    sub.disabled = false;
  };

  optBtns.forEach(btn => btn.onclick = () => selectOption(btn));

  const submitAnswer = () => { recordAnswer(q); phase = 'explanation'; render(); };
  sub.onclick = submitAnswer;

  setKey(e => {
    const n = Number(e.key);
    if (Number.isInteger(n) && n >= 1 && n <= optBtns.length) {
      e.preventDefault();
      selectOption(optBtns[n - 1]);
      return;
    }
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (!chosen) { selectOption(optBtns[0]); return; }
    submitAnswer();
  });
}

function renderExp(c) {
  const q        = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: chosen === q.answer };
  const btnLbl   = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';

  c.innerHTML = `
    <div class="sf-label">analysis // node ${idx + 1}</div>
    <div class="sf-feedback ${response.ok ? 'ok' : 'fail'}">${response.ok ? '[ CORRECT ]' : '[ INCORRECT ]'}</div>
    <div class="sf-content"><strong>Question:</strong> ${q.question}</div>
    <ul class="sf-options">${renderOptions(q, true, response)}</ul>
    <div class="sf-explanation">${q.explanation}</div>
    <div class="sf-review-jump">
      <label for="answered-jump">Jump to</label>
      <input id="answered-jump" type="number" min="1" max="${quizData.length}" value="${idx + 1}" inputmode="numeric">
      <span class="sf-review-allowed">Allowed: ${answeredRange()}</span>
      <button id="btn-jump" class="sf-action sf-action-secondary">Jump</button>
      <div id="answered-preview" class="sf-review-preview"></div>
    </div>
    <div class="sf-actions">
      ${prevButtonHTML()}
      <button class="sf-action" id="btn-nxt">${btnLbl}</button>
    </div>
  `;

  if (idx > 0) {
    $('btn-prev').onclick = () => { idx--; phase = 'explanation'; render(); };
  }

  // Jump widget
  const input   = $('answered-jump');
  const preview = $('answered-preview');
  const updatePreview = () => {
    const t = Number(input.value) - 1;
    preview.textContent = answered[t]
      ? `Question ${t + 1}: ${questionGlimpse(quizData[t].question)}`
      : `Allowed values: ${answeredRange()}`;
  };
  input.oninput = input.onchange = updatePreview;
  $('btn-jump').onclick = () => {
    const t = Number(input.value) - 1;
    if (!answered[t]) { updatePreview(); return; }
    idx = t; phase = 'explanation'; render();
  };
  updatePreview();

  const goNext = () => { idx++; phase = answered[idx] ? 'explanation' : 'context'; render(); };
  $('btn-nxt').onclick = goNext;
  setKey(e => { if (e.key === 'Enter') { e.preventDefault(); goNext(); } });
}

function renderFinal(c) {
  const total     = correct + wrong;
  const pct       = total ? Math.round((correct / total) * 100) : 0;
  const grade     = pct >= 90 ? 'EXCEPTIONAL' : pct >= 70 ? 'PROFICIENT' : pct >= 50 ? 'DEVELOPING' : 'RETRY';
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

  $('btn-prev').onclick = () => { idx = quizData.length - 1; phase = 'explanation'; render(); };
  $('btn-restart').onclick = () => {
    idx = 0; phase = 'context'; chosen = null; correct = 0; wrong = 0; answered = [];
    render();
  };

  setKey(null);
}

render();