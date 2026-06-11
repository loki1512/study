const quizData = 

[
  {
    "id": 1,
    "type": "mcq",
    "context": "The NLP pipeline requires raw text to be cleaned and pre-processed before modeling. In the demo class, the instructor begins the pre-processing journey by breaking text into smaller, manageable pieces.",
    "question": "What is the process of breaking text into smaller pieces (like sentences or words) called?",
    "options": [
      "A) Normalization",
      "B) Stop word removal",
      "C) Tokenization",
      "D) Lemmatization"
    ],
    "answer": "C) Tokenization",
    "explanation": "Tokenization is the first step of 'reading' for a computer, breaking text into manageable tokens like sentences or words. The first major challenge in tokenization is identifying where sentences actually end."
  },
  {
    "id": 2,
    "type": "mcq",
    "context": "The first major challenge in tokenization is identifying where sentences end. The demo class highlights that a period (.) is not always a sentence boundary.",
    "question": "Why is the period symbol problematic when splitting a paragraph into sentences?",
    "options": [
      "A) It is only used in numbers.",
      "B) It is used in abbreviations like 'Dr.' or 'Dec.', which shouldn't trigger a sentence split.",
      "C) Computers cannot read the period symbol.",
      "D) It is an illegal character in Python strings."
    ],
    "answer": "B) It is used in abbreviations like 'Dr.' or 'Dec.', which shouldn't trigger a sentence split.",
    "explanation": "Periods are ambiguous because they mark both the end of a sentence and abbreviations like 'Dr.' or 'Ph.D.'. To handle this, the demo instructor wrote a complex Regular Expression (Regex), but NLTK provides a simpler built-in solution."
  },
  {
    "id": 3,
    "type": "mcq",
    "context": "To handle abbreviations without splitting sentences incorrectly, the demo instructor wrote a complex Regular Expression (Regex). However, the NLTK library provides a built-in function that is the standard for this task.",
    "question": "Which NLTK tokenizer is specifically designed to split paragraphs into sentences while intelligently handling abbreviations?",
    "options": [
      "A) word_tokenize()",
      "B) sent_tokenize()",
      "C) wordpunct_tokenize()",
      "D) TreebankWordTokenizer()"
    ],
    "answer": "B) sent_tokenize()",
    "explanation": "The sent_tokenize() function is used to break paragraphs into individual sentences accurately without breaking on abbreviations. Let's learn how to import this function into our Python code."
  },
  {
    "id": 4,
    "type": "type-in",
    "context": "We want to use NLTK's sentence tokenizer instead of writing custom Regex like the instructor did.",
    "question": "Import the sentence tokenizer function from the tokenize module of the nltk library. (Hint: use the 'from ... import ...' syntax for sent_tokenize).",
    "answer": "from nltk.tokenize import sent_tokenize",
    "explanation": "This imports the sent_tokenize function from the nltk.tokenize module. Now that it is imported, we can apply it to our text."
  },
  {
    "id": 5,
    "type": "type-in",
    "context": "Now that we have imported the sentence tokenizer, we can apply it to a string variable named 'text'.",
    "question": "Call the sentence tokenizer function, passing the 'text' variable as the argument. (Hint: just call the function directly with the variable inside the parentheses).",
    "answer": "sent_tokenize(text)",
    "explanation": "Calling sent_tokenize(text) returns a list of sentences. Once the paragraph is split into sentences, the next step in the pipeline is breaking those sentences into individual words."
  },
  {
    "id": 6,
    "type": "mcq",
    "context": "Once the paragraph is split into sentences, the next step in the pipeline is breaking those sentences into individual words. The instructor again used Regex to match alphabetic characters and spaces.",
    "question": "Which NLTK function replaces the instructor's custom Regex for general word tokenization?",
    "options": [
      "A) sent_tokenize()",
      "B) wordpunct_tokenize()",
      "C) word_tokenize()",
      "D) str.split()"
    ],
    "answer": "C) word_tokenize()",
    "explanation": "The word_tokenize() function is the standard tool for breaking text into words and punctuation for general NLP tasks. Let's practice importing it."
  },
  {
    "id": 7,
    "type": "type-in",
    "context": "We need to import the standard word tokenizer to avoid writing manual Regex patterns for splitting words.",
    "question": "Import the word tokenizer function from the tokenize module of the nltk library. (Hint: the function is named word_tokenize).",
    "answer": "from nltk.tokenize import word_tokenize",
    "explanation": "This imports the standard word tokenizer into your environment. Now let's use it on a sentence."
  },
  {
    "id": 8,
    "type": "type-in",
    "context": "You have a string variable called 'sentence' and have successfully imported the standard word tokenizer.",
    "question": "Call the word tokenizer function, passing the 'sentence' variable as the argument.",
    "answer": "word_tokenize(sentence)",
    "explanation": "This splits the sentence into a list of word tokens. Notice that word_tokenize() is smart enough to keep common abbreviations intact, like 'Dr.' remaining as one token."
  },
  {
    "id": 9,
    "type": "mcq",
    "context": "While word_tokenize() keeps common abbreviations intact (treating 'Dr.' as one token), some applications require punctuation to be completely separated from letters.",
    "question": "If you want to aggressively separate every single punctuation mark from the text, which NLTK tokenizer should you use?",
    "options": [
      "A) sent_tokenize()",
      "B) wordpunct_tokenize()",
      "C) TreebankWordTokenizer()",
      "D) word_tokenize()"
    ],
    "answer": "B) wordpunct_tokenize()",
    "explanation": "wordpunct_tokenize() separates text based strictly on word and punctuation boundaries, meaning 'Dr.' would become two tokens: 'Dr' and '.'. Let's import it."
  },
  {
    "id": 10,
    "type": "type-in",
    "context": "You decide that your spam detection algorithm needs to isolate all punctuation aggressively.",
    "question": "Import the aggressive punctuation tokenizer function from the tokenize module of the nltk library. (Hint: the function is named wordpunct_tokenize).",
    "answer": "from nltk.tokenize import wordpunct_tokenize",
    "explanation": "This imports wordpunct_tokenize. Let's test it on our text variable."
  },
  {
    "id": 11,
    "type": "type-in",
    "context": "You have a string variable named 'text' containing the phrase 'Dr. Smith'.",
    "question": "Separate every punctuation mark by applying the aggressive punctuation tokenizer function to the 'text' variable.",
    "answer": "wordpunct_tokenize(text)",
    "explanation": "This will return ['Dr', '.', 'Smith']. While separating punctuation is useful for spam detection, grammar analysis often requires a more linguistically aware approach to tokenization."
  },
  {
    "id": 12,
    "type": "mcq",
    "context": "Grammar analysis often requires a linguistically aware approach, especially when dealing with English contractions (like 'we're' or 'don't').",
    "question": "Which NLTK tokenizer is widely used in linguistic research because it handles contractions based on Penn Treebank corpus rules?",
    "options": [
      "A) wordpunct_tokenize()",
      "B) TreebankWordTokenizer()",
      "C) sent_tokenize()",
      "D) word_tokenize()"
    ],
    "answer": "B) TreebankWordTokenizer()",
    "explanation": "The TreebankWordTokenizer is specifically designed for grammar-aware processing, successfully splitting contractions like 'don't' into 'do' and 'n't'. Importing and using this tokenizer requires a few extra steps."
  },
  {
    "id": 13,
    "type": "type-in",
    "context": "To use the grammar-aware tokenizer, we first need to import it. Notice it will be capitalized because it is a Class.",
    "question": "Import the Treebank word tokenizer class from the tokenize module of the nltk library. (Hint: the class is named TreebankWordTokenizer).",
    "answer": "from nltk.tokenize import TreebankWordTokenizer",
    "explanation": "Because TreebankWordTokenizer is a Class, we cannot just call it directly like a simple function. We must first create an instance of it."
  },
  {
    "id": 14,
    "type": "type-in",
    "context": "Because the Treebank tokenizer is a Class, we must instantiate it before use.",
    "question": "Create an instance of the Treebank word tokenizer and assign it to a variable named 'tokenizer'. (Hint: remember to use parentheses to instantiate the class).",
    "answer": "tokenizer = TreebankWordTokenizer()",
    "explanation": "Now the 'tokenizer' variable is an object capable of processing text based on Treebank rules. We can now use its specific .tokenize() method."
  },
  {
    "id": 15,
    "type": "type-in",
    "context": "You now have an instantiated object named 'tokenizer' and a string variable named 'text'.",
    "question": "Call the tokenize method on your 'tokenizer' object, passing the 'text' variable as the argument. (Hint: use dot notation on your object).",
    "answer": "tokenizer.tokenize(text)",
    "explanation": "This applies the linguistically aware Treebank rules to the text. With all tokenization complete, the demo instructor moves on to standardizing the characters themselves through lowercasing."
  },
  {
    "id": 16,
    "type": "mcq",
    "context": "With tokenization complete, the demo instructor moves on to standardizing the characters themselves. He shows how to convert 'Apple' and 'apple' to the same format.",
    "question": "What is the massive benefit of converting all text to lowercase for data processing systems?",
    "options": [
      "A) It automatically checks spelling errors.",
      "B) It treats words written in different cases as identical, simplifying matching and improving efficiency.",
      "C) It separates paragraphs into sentences.",
      "D) It removes punctuation."
    ],
    "answer": "B) It treats words written in different cases as identical, simplifying matching and improving efficiency.",
    "explanation": "Lowercasing is crucial for languages like English to ensure uniform representation, so a search engine matching 'fox' easily finds documents containing 'Fox'. In Python, this is accomplished with a built-in string method."
  },
  {
    "id": 17,
    "type": "type-in",
    "context": "Instead of writing a custom function for lowercasing, Python provides a simple built-in string method.",
    "question": "Call the built-in lowercase method on a string variable named 'text'. (Hint: use dot notation on the variable without passing arguments).",
    "answer": "text.lower()",
    "explanation": "The .lower() method standardizes all characters. Once the tokens are lowercased, the instructor suggests filtering out words like 'is', 'it', and 'the'."
  },
  {
    "id": 18,
    "type": "mcq",
    "context": "Once the tokens are lowercased, the instructor suggests filtering out highly frequent, functionally necessary, but semantically weak words like 'is', 'it', and 'the'.",
    "question": "What is this specific filtering process called in NLP?",
    "options": [
      "A) Normalization",
      "B) Lemmatization",
      "C) Stop word removal",
      "D) Tokenization"
    ],
    "answer": "C) Stop word removal",
    "explanation": "Stop word removal eliminates common functional words that add little semantic value, which is very useful for search engines and topic modeling. However, it shouldn't be used for every NLP task."
  },
  {
    "id": 19,
    "type": "mcq",
    "context": "While stop word removal is great for summarization, it can be dangerous if applied blindly depending on the context.",
    "question": "For which tasks should you definitely NOT remove stop words?",
    "options": [
      "A) Chatbots and topic modeling",
      "B) Keyword extraction and spam detection",
      "C) Search engine indexing",
      "D) Sentiment analysis and machine translation"
    ],
    "answer": "D) Sentiment analysis and machine translation",
    "explanation": "In sentiment analysis, removing a stop word like 'not' flips the meaning completely. In translation, grammatical words like 'to' are required for correct sentence generation. To perform stop word removal safely, we can use NLTK's predefined lists."
  },
  {
    "id": 20,
    "type": "type-in",
    "context": "The instructor used a custom 'bag of words' list to filter stop words. In NLTK, we can just import a ready-made corpus of stop words.",
    "question": "Import the stopwords object from the corpus module of the nltk library. (Hint: use the 'from ... import ...' syntax).",
    "answer": "from nltk.corpus import stopwords",
    "explanation": "This imports the stopwords module. NLTK contains stop words for many different languages, so we must specify which language we want to use."
  },
  {
    "id": 21,
    "type": "type-in",
    "context": "We need to generate a list of English stop words to filter our English text.",
    "question": "Call the words method on the stopwords object, passing 'english' as the string argument, and assign the result to a variable called 'stop_words'.",
    "answer": "stop_words = stopwords.words('english')",
    "explanation": "The stop_words variable now holds a list of functional words like 'the', 'is', 'in'. We can use a Python list comprehension to filter our token list."
  },
  {
    "id": 22,
    "type": "type-in",
    "context": "We have a list of strings called 'tokens' and a list called 'stop_words'.",
    "question": "Write a list comprehension using 'word' as the temporary variable to keep only the elements from 'tokens' that are not present in the 'stop_words' list. (Hint: [word for word in list if condition]).",
    "answer": "[word for word in tokens if word not in stop_words]",
    "explanation": "This single line of code iterates through tokens and drops any functional stop words. Now that you've built the basic pipeline, let's test your ability to decide which tokenizer to use in different contexts."
  },
  {
    "id": 23,
    "type": "mcq",
    "context": "You have a large paragraph of text and your first task is simply to count how many complete sentences are in the paragraph.",
    "question": "Which NLTK tokenizer is best suited for this specific task?",
    "options": [
      "A) TreebankWordTokenizer()",
      "B) word_tokenize()",
      "C) sent_tokenize()",
      "D) wordpunct_tokenize()"
    ],
    "answer": "C) sent_tokenize()",
    "explanation": "sent_tokenize() is specifically built to break paragraphs into sentences while intelligently handling periods inside abbreviations. Next, you need to break those sentences into words."
  },
  {
    "id": 24,
    "type": "mcq",
    "context": "You are building a standard chatbot and need to break the user's sentences into words for general NLP processing.",
    "question": "Which tokenizer is recommended for general NLP tasks like this?",
    "options": [
      "A) sent_tokenize()",
      "B) wordpunct_tokenize()",
      "C) word_tokenize()",
      "D) Regex matching spaces only"
    ],
    "answer": "C) word_tokenize()",
    "explanation": "word_tokenize() is the standard go-to tokenizer for general text processing, handling basic words and common abbreviations effectively. But what if the task changes to social media analysis?"
  },
  {
    "id": 25,
    "type": "mcq",
    "context": "You switch projects to social media spam detection, where the presence of excessive exclamation marks and separated punctuation is a strong indicator of spam.",
    "question": "Which tokenizer should you choose when punctuation itself matters and must be aggressively separated from words?",
    "options": [
      "A) sent_tokenize()",
      "B) wordpunct_tokenize()",
      "C) TreebankWordTokenizer()",
      "D) word_tokenize()"
    ],
    "answer": "B) wordpunct_tokenize()",
    "explanation": "wordpunct_tokenize() aggressively separates every punctuation mark, meaning 'Hello!!!' becomes separate tokens: 'Hello', '!', '!', '!'. Finally, what if you are doing linguistic research?"
  },
  {
    "id": 26,
    "type": "mcq",
    "context": "You are performing a detailed grammatical syntax analysis of a text containing contractions like 'wouldn't' and 'we're'.",
    "question": "Which tokenizer is best suited to split contractions intelligently for grammar analysis?",
    "options": [
      "A) TreebankWordTokenizer()",
      "B) sent_tokenize()",
      "C) wordpunct_tokenize()",
      "D) str.lower()"
    ],
    "answer": "A) TreebankWordTokenizer()",
    "explanation": "The TreebankWordTokenizer uses Penn Treebank rules to separate linguistic components, turning 'wouldn't' into 'would' and 'n't'. It is important to know the differences between these word tokenizers."
  },
  {
    "id": 27,
    "type": "mcq",
    "context": "You notice that both word_tokenize() and wordpunct_tokenize() break text into smaller units, but they treat periods inside abbreviations (like 'Ph.D.') differently.",
    "question": "How does wordpunct_tokenize() handle the period in 'Dr.' compared to word_tokenize()?",
    "options": [
      "A) Both ignore the period.",
      "B) wordpunct_tokenize() separates the period ('Dr', '.'), while word_tokenize() keeps it attached ('Dr.').",
      "C) Both separate the period.",
      "D) word_tokenize() separates the period, while wordpunct_tokenize() deletes it."
    ],
    "answer": "B) wordpunct_tokenize() separates the period ('Dr', '.'), while word_tokenize() keeps it attached ('Dr.').",
    "explanation": "This key difference dictates which tokenizer you use depending on whether you want to preserve abbreviations or isolate all symbols. After tokenization, you review your pre-processing decisions."
  },
  {
    "id": 28,
    "type": "mcq",
    "context": "After tokenization, you are deciding on the next steps for your text summarization algorithm.",
    "question": "Should you perform lowercasing and stop word removal for a summarization or topic modeling task?",
    "options": [
      "A) Lowercasing yes, stop word removal no.",
      "B) Neither should be performed.",
      "C) Both should generally be performed.",
      "D) Lowercasing no, stop word removal yes."
    ],
    "answer": "C) Both should generally be performed.",
    "explanation": "For summarization and topic modeling, standardizing case and removing high-frequency, low-value words helps the model focus on the core semantic keywords of the text. Let's do a final review of the pipeline flow."
  },
  {
    "id": 29,
    "type": "type-in",
    "context": "Let's do a final practice of the NLTK pipeline flow. You have isolated a sentence and stored it in a variable called 'first_sentence'.",
    "question": "Tokenize this sentence into words using the standard word tokenizer function you learned earlier. (Hint: pass 'first_sentence' into the function).",
    "answer": "word_tokenize(first_sentence)",
    "explanation": "This gives you a list of words for the first sentence. To finalize the pipeline, you would lowercase the output and filter it, giving us a standard order of operations."
  },
  {
    "id": 30,
    "type": "mcq",
    "context": "You have learned how to import and apply various NLTK tokenizers, lowercase the text, and remove stop words.",
    "question": "Based on the learning path provided, what is the logical, sequential order of a classical NLP text pre-processing pipeline?",
    "options": [
      "A) Stop word removal -> Lowercasing -> Word Tokenization -> Sentence Tokenization",
      "B) Word Tokenization -> Sentence Tokenization -> Stop word removal -> Lowercasing",
      "C) Sentence Tokenization -> Word Tokenization -> Lowercasing -> Stop word removal",
      "D) Lowercasing -> Stop word removal -> Sentence Tokenization -> Word Tokenization"
    ],
    "answer": "C) Sentence Tokenization -> Word Tokenization -> Lowercasing -> Stop word removal",
    "explanation": "The typical pipeline flows from largest block to smallest refined block: break text into sentences, break sentences into words, normalize casing, and finally filter out unneeded functional words. Now let's apply this entire pipeline step-by-step to a real-world scenario."
  },
  {
    "id": 31,
    "type": "mcq",
    "context": "Now let's apply this entire pipeline to a real-world scenario. You have been hired to analyze customer product reviews. You receive a string variable named 'review' containing: 'Dr. Smith said I wouldn't believe the results! It is the BEST.'",
    "question": "Before analyzing the individual words or dealing with contractions and case, what is the most logical first preprocessing step for this multi-sentence string?",
    "options": [
      "A) Lowercase the entire string.",
      "B) Extract the word 'BEST'.",
      "C) Split the paragraph into individual sentences.",
      "D) Remove all punctuation immediately."
    ],
    "answer": "C) Split the paragraph into individual sentences.",
    "explanation": "Splitting the text into individual sentences ensures we can analyze the grammatical boundaries properly without breaking on 'Dr.'. Next, we need to import the tool to do this."
  },
  {
    "id": 32,
    "type": "type-in",
    "context": "We need to split the 'review' string ('Dr. Smith said I wouldn't believe the results! It is the BEST.') into sentences.",
    "question": "Import the sentence tokenizer function from the tokenize module of the nltk library so we can handle 'Dr.' correctly. (Hint: from ... import ...)",
    "answer": "from nltk.tokenize import sent_tokenize",
    "explanation": "The sent_tokenize function is now ready to safely split our review."
  },
  {
    "id": 33,
    "type": "type-in",
    "context": "With the sentence tokenizer imported, we must apply it to our 'review' string.",
    "question": "Apply the sentence tokenizer to the 'review' variable and assign the resulting list to a variable named 'sentences'. (Hint: sentences = ...)",
    "answer": "sentences = sent_tokenize(review)",
    "explanation": "The 'sentences' variable now holds two elements: ['Dr. Smith said I wouldn't believe the results!', 'It is the BEST.']. We will now focus on processing the first sentence."
  },
  {
    "id": 34,
    "type": "type-in",
    "context": "The first sentence, stored at sentences, contains the contraction \"wouldn't\". We want to process this with linguistic grammar rules.",
    "question": "Import the Treebank word tokenizer class from the tokenize module of the nltk library to handle this contraction. (Hint: import TreebankWordTokenizer)",
    "answer": "from nltk.tokenize import TreebankWordTokenizer",
    "explanation": "We chose TreebankWordTokenizer because it splits 'wouldn't' into 'would' and 'n't', aiding deeper grammatical analysis. Next, we must instantiate it."
  },
  {
    "id": 35,
    "type": "type-in",
    "context": "The Treebank tokenizer is a class, so it needs to be instantiated into an object before we can use its methods.",
    "question": "Create an instance of the TreebankWordTokenizer and assign it to a variable named 'tb_tokenizer'. (Hint: don't forget the parentheses).",
    "answer": "tb_tokenizer = TreebankWordTokenizer()",
    "explanation": "We now have a working tokenizer object. Let's use it on the first sentence of our review."
  },
  {
    "id": 36,
    "type": "type-in",
    "context": "Our text to process is the first sentence, located at 'sentences'. Our tokenizer object is 'tb_tokenizer'.",
    "question": "Call the tokenize method of 'tb_tokenizer' on 'sentences', and assign the output to a variable named 'raw_tokens'.",
    "answer": "raw_tokens = tb_tokenizer.tokenize(sentences)",
    "explanation": "The 'raw_tokens' list now contains ['Dr.', 'Smith', 'said', 'I', 'would', 'n't', 'believe', 'the', 'results', '!']. The next step is standardizing the casing."
  },
  {
    "id": 37,
    "type": "type-in",
    "context": "The words in 'raw_tokens' contain mixed capitalizations like 'Dr.' and 'I'. We need to convert them all to lowercase.",
    "question": "Write a list comprehension using 'word' as the temporary variable that calls the .lower() method on each 'word' in 'raw_tokens', and assign the result to a variable named 'lower_tokens'.",
    "answer": "lower_tokens = [word.lower() for word in raw_tokens]",
    "explanation": "Our tokens are now ['dr.', 'smith', 'said', 'i', 'would', 'n't', 'believe', 'the', 'results', '!']. The final step is removing low-value functional words."
  },
  {
    "id": 38,
    "type": "type-in",
    "context": "To remove low-value functional words like 'i' and 'the', we first need NLTK's list of stop words.",
    "question": "Import the stopwords object from the corpus module of the nltk library.",
    "answer": "from nltk.corpus import stopwords",
    "explanation": "The stopwords corpus contains lists for multiple languages. We need to specify English."
  },
  {
    "id": 39,
    "type": "type-in",
    "context": "With the stopwords module imported, we must extract the specific list for the English language.",
    "question": "Call the words method on the stopwords object, passing 'english' as the argument, and assign it to a variable named 'eng_stops'.",
    "answer": "eng_stops = stopwords.words('english')",
    "explanation": "The 'eng_stops' variable now contains a list of English stop words. We can finally filter our tokens."
  },
  {
    "id": 40,
    "type": "type-in",
    "context": "Our current tokens are stored in 'lower_tokens', and our stop words are in 'eng_stops'.",
    "question": "Write a list comprehension using 'word' as the temporary variable to iterate through 'lower_tokens', keeping only the words that are NOT in 'eng_stops', and assign the result to 'final_tokens'.",
    "answer": "final_tokens = [word for word in lower_tokens if word not in eng_stops]",
    "explanation": "Congratulations! You have successfully taken a raw, real-world string and run it through a complete, linguistically-aware NLTK pre-processing pipeline."
  }
]
;


let idx = 0, phase = 'context', chosen = null, correct = 0, wrong = 0;
let answered = [];

// ── Utilities ────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

function normalizeCode(s) {
  return s.replace(/\s+/g, '').toLowerCase();
}

function checkAnswer(q) {
  if (q.type === 'type-in') return normalizeCode(chosen) === normalizeCode(q.answer);
  return chosen === q.answer;
}

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
  answered[idx] = { selected: chosen, ok: checkAnswer(q) };
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
  if (phase === 'context')       renderCtx(c);
  else if (phase === 'question') renderQ(c);
  else                           renderExp(c);
}

// ── Shared HTML helpers ───────────────────────────────────────────────────────

function prevButtonHTML() {
  return idx > 0
    ? '<button class="sf-action sf-action-secondary" id="btn-prev">PREVIOUS</button>'
    : '';
}

function renderMCQOptions(q, disabled = false, response = null) {
  return q.options.map(o => {
    let cls = 'sf-opt-btn';
    if (disabled) {
      if (o === q.answer)                                            cls += ' correct-reveal';
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

  if (q.type === 'type-in') {
    c.innerHTML = `
      <div class="sf-label">type-in // node ${idx + 1}</div>
      <div class="sf-content">${q.question}</div>
      <input class="sf-type-input" id="type-input" type="text" placeholder="Type your answer here..." autocomplete="off" spellcheck="false">
      <div class="sf-type-hint">Spaces are ignored when checking your answer</div>
      <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
    `;
    const inp = $('type-input');
    const sub = $('btn-sub');
    inp.oninput = () => { chosen = inp.value; sub.disabled = !inp.value.trim(); };
    const submitAnswer = () => {
      if (!inp.value.trim()) return;
      chosen = inp.value;
      recordAnswer(q);
      phase = 'explanation';
      render();
    };
    sub.onclick = submitAnswer;
    inp.onkeyup = e => { if (e.key === 'Enter') { e.preventDefault(); submitAnswer(); } };
    setKey(e => {
      if (document.activeElement !== inp && e.key === 'Enter') { e.preventDefault(); submitAnswer(); }
    });
    inp.focus();

  } else {
    c.innerHTML = `
      <div class="sf-label">query // node ${idx + 1}</div>
      <div class="sf-content">${q.question}</div>
      <ul class="sf-options">${renderMCQOptions(q)}</ul>
      <button class="sf-action" id="btn-sub" disabled>SUBMIT RESPONSE &gt;</button>
    `;
    const sub     = $('btn-sub');
    const optBtns = [...c.querySelectorAll('.sf-opt-btn')];

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
}

function renderExp(c) {
  const q        = quizData[idx];
  const response = answered[idx] || { selected: chosen, ok: checkAnswer(q) };
  const btnLbl   = idx === quizData.length - 1 ? 'FINISH MISSION' : 'NEXT NODE &gt;';

  let answerDisplay = '';
  if (q.type === 'type-in') {
    const cls = response.ok ? 'correct-reveal' : 'wrong-reveal';
    answerDisplay = `
      <div class="sf-typein-review">
        <div class="sf-typein-label">Your answer</div>
        <input class="sf-type-input ${cls}" type="text" value="${(response.selected || '').replace(/"/g, '&quot;')}" disabled>
        ${!response.ok ? `
          <div class="sf-typein-label">Correct answer</div>
          <input class="sf-type-input correct-reveal" type="text" value="${q.answer.replace(/"/g, '&quot;')}" disabled>
        ` : ''}
      </div>
    `;
  } else {
    answerDisplay = `<ul class="sf-options">${renderMCQOptions(q, true, response)}</ul>`;
  }

  c.innerHTML = `
    <div class="sf-label">analysis // node ${idx + 1}</div>
    <div class="sf-feedback ${response.ok ? 'ok' : 'fail'}">${response.ok ? '[ CORRECT ]' : '[ INCORRECT ]'}</div>
    <div class="sf-content"><strong>Question:</strong> ${q.question}</div>
    ${answerDisplay}
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
  const total      = correct + wrong;
  const pct        = total ? Math.round((correct / total) * 100) : 0;
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

  $('btn-prev').onclick = () => { idx = quizData.length - 1; phase = 'explanation'; render(); };
  $('btn-restart').onclick = () => {
    idx = 0; phase = 'context'; chosen = null; correct = 0; wrong = 0; answered = [];
    render();
  };

  setKey(null);
}

render();