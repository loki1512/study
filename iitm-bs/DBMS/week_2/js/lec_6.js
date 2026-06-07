// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "The course shifts focus from the limitations of file-based applications to the advantages of database management systems.",
    "question": "Why would an organization prefer a database management system over a simple file-based application?",
    "options": [
      "A) It uses simpler algorithms",
      "B) It is easier to write in Python",
      "C) To manage a wide range of applications and specific data needs",
      "D) It requires less hardware"
    ],
    "answer": "C) To manage a wide range of applications and specific data needs",
    "explanation": "Databases handle complex, specific needs and wide-ranging applications better than file systems. Next, we will look at how relational databases organize this data structurally."
  },
  {
    "id": 2,
    "context": "The foundational structure of a relational database system relies on basic geometric-like organization to keep data readable.",
    "question": "In a relational model, what is a 'relation' fundamentally analogous to?",
    "options": [
      "A) A text file",
      "B) A table with columns identified by names",
      "C) A procedural function",
      "D) A network graph"
    ],
    "answer": "B) A table with columns identified by names",
    "explanation": "A relation is simply a table containing named columns. Moving forward, we'll learn the specific terminology used for these specific columns."
  },
  {
    "id": 3,
    "context": "Columns in a relation have specific names, and their ordering does not matter, but the names are critical for identifying data.",
    "question": "What is the formal relational term for these named columns?",
    "options": [
      "A) Tuples",
      "B) Instances",
      "C) Attributes",
      "D) Schemas"
    ],
    "answer": "C) Attributes",
    "explanation": "Columns in a relational table are called attributes, and they describe the entity. Next, we explore the terminology for the rows that populate these columns."
  },
  {
    "id": 4,
    "context": "Data is stored across multiple rows according to the defined attributes, holding specific entity information.",
    "question": "What is a single row in a relation officially called?",
    "options": [
      "A) An atomic type",
      "B) A domain",
      "C) A schema",
      "D) A record or tuple"
    ],
    "answer": "D) A record or tuple",
    "explanation": "Every row is a record or a tuple, holding specific values for the attributes. Next, we will discuss how designers choose which attributes to include for an entity."
  },
  {
    "id": 5,
    "context": "A real-world entity, like a student, has millions of potential attributes ranging from parents' names to hobbies.",
    "question": "How does a database designer decide which attributes to actually include in a schema?",
    "options": [
      "A) By including all possible physical traits",
      "B) By choosing only parameters relevant to the business purpose of the application",
      "C) By generating surrogate values for everything",
      "D) By asking the user to define them at runtime"
    ],
    "answer": "B) By choosing only parameters relevant to the business purpose of the application",
    "explanation": "We model entities by selecting only the parameters relevant to the purpose of the application, which is a business decision. Next, we examine a strict structural rule applied to all these chosen attributes."
  },
  {
    "id": 6,
    "context": "Once chosen, each attribute is assigned an atomic type, like an alphanumeric string or a date.",
    "question": "What defines an attribute type as 'atomic' in the relational model?",
    "options": [
      "A) It must be a number",
      "B) It is composed of multiple sub-parts",
      "C) It is indivisible and primitive",
      "D) It must be synthetically generated"
    ],
    "answer": "C) It is indivisible and primitive",
    "explanation": "Atomic means the attribute type is primitive and indivisible. Next, we look at a practical example of what violates this indivisibility rule."
  },
  {
    "id": 7,
    "context": "Because attributes must be indivisible, certain common data groupings are invalid as single attributes in a strict relational model.",
    "question": "Why can't 'first name' and 'last name' be combined into a single 'Name' attribute?",
    "options": [
      "A) It would require too much memory",
      "B) It is a composite value consisting of a pair of strings, not a single atomic string",
      "C) First names are often nullable",
      "D) It violates the Turing completeness rule"
    ],
    "answer": "B) It is a composite value consisting of a pair of strings, not a single atomic string",
    "explanation": "Combining them creates a composite value (a pair of alpha strings), which violates the rule that attributes must be atomic. Next, we'll see how the system handles missing atomic values."
  },
  {
    "id": 8,
    "context": "Some students might not possess certain non-mandatory attributes, like a passport, making the attribute 'nullable'.",
    "question": "How is the data entered for an attribute when the person does not have the item in question?",
    "options": [
      "A) It is left blank using a space character",
      "B) A synthetic key is generated",
      "C) The record is deleted",
      "D) A special value called 'null' is used"
    ],
    "answer": "D) A special value called 'null' is used",
    "explanation": "If a person lacks a passport, the value is entered as 'null' since the attribute is nullable. Next, we will define the exact semantic meaning of 'null'."
  },
  {
    "id": 9,
    "context": "When entering data for a nullable attribute like a passport number, a 'null' value is utilized.",
    "question": "What does the value 'null' strictly represent in a database?",
    "options": [
      "A) Zero",
      "B) There is no value or the value is not known",
      "C) A deliberate deletion of the record",
      "D) A syntax error"
    ],
    "answer": "B) There is no value or the value is not known",
    "explanation": "Null simply means there is no value or it is not known. However, not every attribute can be left blank, which leads us to our next question."
  },
  {
    "id": 10,
    "context": "While 'passport number' is nullable, other attributes are essential for identifying the record and cannot be omitted.",
    "question": "Which of the following attributes logically cannot accept a 'null' value for a student?",
    "options": [
      "A) Passport Number",
      "B) Secondary Email",
      "C) Roll Number",
      "D) Hobbies"
    ],
    "answer": "C) Roll Number",
    "explanation": "You cannot have a null roll number or first name, as it's impossible to identify a student without one. Next, we will discuss the pool of allowed values for an attribute."
  },
  {
    "id": 11,
    "context": "Every attribute has a specified type, such as an alphanumeric string for a roll number.",
    "question": "What formal term dictates the universal set of valid values that an attribute can take?",
    "options": [
      "A) Its domain",
      "B) Its tuple",
      "C) Its super key",
      "D) Its relation"
    ],
    "answer": "A) Its domain",
    "explanation": "The domain of an attribute dictates the possible set of values, like strings composed of A-to-Z and 0-9. Next, we look at what happens when data violates this domain."
  },
  {
    "id": 12,
    "context": "The 'Date of Birth' field relies on a specific primitive data type, such as 'mm-dd-yy'.",
    "question": "Why would entering the string '27th March, 1997' into a DOB field be rejected by the system?",
    "options": [
      "A) It contains numbers",
      "B) It lacks a time zone",
      "C) It is incompatible with the specified date domain",
      "D) It is a composite key"
    ],
    "answer": "C) It is incompatible with the specified date domain",
    "explanation": "Values must be compatible with the defined domain; a freeform text string cannot be put into a strict 'date' type. Next, we distinguish between a table's structural rules and its actual data."
  },
  {
    "id": 13,
    "context": "A database strictly distinguishes between its structural definition and the actual data it currently holds.",
    "question": "What defines the specific attributes and their associated types in a relation?",
    "options": [
      "A) The Query Language",
      "B) The Relational Instance",
      "C) The Relational Schema",
      "D) The Foreign Key"
    ],
    "answer": "C) The Relational Schema",
    "explanation": "The relational schema defines the attributes and their associated types. Next, we explore the terminology for the data currently residing within that structural blueprint."
  },
  {
    "id": 14,
    "context": "The schema acts as a structural blueprint for the table, establishing rules but holding no data itself.",
    "question": "What term describes the actual set of tuples (rows) present in the table at a given time?",
    "options": [
      "A) Relational Domain",
      "B) Relational Instance",
      "C) Candidate Key",
      "D) Relational Tuple Calculus"
    ],
    "answer": "B) Relational Instance",
    "explanation": "The relational instance refers to the actual values or tuples that exist according to the schema. Next, we look at the mathematical definition combining domains into an instance."
  },
  {
    "id": 15,
    "context": "Mathematically, an instance relies on the domains D1, D2, up to Dn of its respective attributes.",
    "question": "How is a relation (R) mathematically defined in relation to these domains?",
    "options": [
      "A) As the sum of all domains",
      "B) As a subset of the Cartesian product D1 x D2 x ... x Dn",
      "C) As the intersection of D1 and Dn",
      "D) As the minimal super key of the domains"
    ],
    "answer": "B) As a subset of the Cartesian product D1 x D2 x ... x Dn",
    "explanation": "A relation is a subset of the Cartesian product of the attribute domains. Because it is a subset, it inherits mathematical set properties, which we cover next."
  },
  {
    "id": 16,
    "context": "A relation is fundamentally defined as a mathematical set, which dictates how it behaves.",
    "question": "How does the set property influence the arrangement of rows in a table?",
    "options": [
      "A) Rows must be sorted alphabetically by the primary key",
      "B) The order of tuples in the relation is completely irrelevant",
      "C) Rows are ordered by insertion date",
      "D) Nullable attributes must appear last"
    ],
    "answer": "B) The order of tuples in the relation is completely irrelevant",
    "explanation": "Since a set has no ordering between its member elements, the order of tuples in a table is irrelevant. Next, we examine another crucial set property regarding duplication."
  },
  {
    "id": 17,
    "context": "Another mathematical property of a set is that all its elements must be strictly distinct.",
    "question": "What does this distinctness constraint mean for a relational instance?",
    "options": [
      "A) Every table must have a different schema",
      "B) Two attributes cannot have the same domain",
      "C) No two tuples (rows) can be completely identical",
      "D) Nulls are never permitted"
    ],
    "answer": "C) No two tuples (rows) can be completely identical",
    "explanation": "Every tuple must be distinct from every other tuple; identical rows are not allowed. This requirement naturally leads to the necessity of Keys to uniquely identify these rows."
  },
  {
    "id": 18,
    "context": "Because every row is unique, all attributes taken together can theoretically identify any row.",
    "question": "Is it always mandatory to use every single attribute to uniquely identify a tuple?",
    "options": [
      "A) Yes, otherwise the set property is violated",
      "B) No, a smaller subset of attributes is usually sufficient",
      "C) Only if the relation has no null values",
      "D) Yes, this is called the minimal key constraint"
    ],
    "answer": "B) No, a smaller subset of attributes is usually sufficient",
    "explanation": "While all attributes uniquely identify a row, we usually work with a smaller subset of attributes that can do the same job. This introduces the concept of a 'Super Key'."
  },
  {
    "id": 19,
    "context": "We seek a subset of attributes 'k' that can securely identify a unique tuple in any possible instance of the relation.",
    "question": "What is this unique-identifying subset 'k' formally called?",
    "options": [
      "A) A Foreign Key",
      "B) A Nullable Key",
      "C) A Super Key",
      "D) A Domain Key"
    ],
    "answer": "C) A Super Key",
    "explanation": "A subset 'k' is a super key if its values are sufficient to identify a unique tuple. Let's look at an example of a super key next."
  },
  {
    "id": 20,
    "context": "In an employee table, two employees cannot have an identical Employee ID.",
    "question": "If {ID} is a super key, which of the following is ALSO guaranteed to be a super key?",
    "options": [
      "A) {Name, Department}",
      "B) {ID, Name}",
      "C) {Department, Designation}",
      "D) {Salary}"
    ],
    "answer": "B) {ID, Name}",
    "explanation": "Anything bigger than the ID, such as the {ID, Name} pair, will also uniquely identify the row and is therefore a super key. But we generally prefer smaller keys, explored next."
  },
  {
    "id": 21,
    "context": "Both {ID} and {ID, Name} successfully act as super keys for identifying an employee.",
    "question": "Why is {ID, Name} considered merely a super key and NOT a candidate key?",
    "options": [
      "A) Because Names are strings",
      "B) Because it is not minimal (it contains the subset {ID} which is already a super key)",
      "C) Because IDs can be null",
      "D) Because it is a surrogate key"
    ],
    "answer": "B) Because it is not minimal (it contains the subset {ID} which is already a super key)",
    "explanation": "{ID, Name} is not minimal because its subset {ID} is also a super key. Next, we formalize the definition of this minimality."
  },
  {
    "id": 22,
    "context": "A key must not only be unique but ideally minimal, meaning no proper subset of it is a super key.",
    "question": "What is the formal database term for a minimal super key?",
    "options": [
      "A) Primary Key",
      "B) Candidate Key",
      "C) Surrogate Key",
      "D) Foreign Key"
    ],
    "answer": "B) Candidate Key",
    "explanation": "A super key is called a candidate key if it is minimal, meaning no subset of it is a super key. Let's test this concept on student attributes next."
  },
  {
    "id": 23,
    "context": "A student table has {Roll Number} and {Aadhaar Number}, both of which uniquely identify a student and have no smaller identifying subsets.",
    "question": "In relation to the student table, what are {Roll Number} and {Aadhaar Number}?",
    "options": [
      "A) Surrogate keys",
      "B) Foreign keys",
      "C) Multiple Candidate keys",
      "D) Composite keys"
    ],
    "answer": "C) Multiple Candidate keys",
    "explanation": "Both qualify as minimal unique identifiers, meaning a table can have multiple candidate keys. However, a table needs one primary identifier, discussed next."
  },
  {
    "id": 24,
    "context": "A table might have several candidate keys, like Roll Number and Aadhaar Number.",
    "question": "What do we call the specific candidate key chosen by the database designer to be the main identifier for the table?",
    "options": [
      "A) Primary Key",
      "B) Secondary Key",
      "C) Simple Key",
      "D) Alternate Key"
    ],
    "answer": "A) Primary Key",
    "explanation": "Of the candidate keys, the designer chooses one to serve as the primary key. Next, we explore what happens to the remaining candidate keys."
  },
  {
    "id": 25,
    "context": "If Roll Number is selected as the primary key, the Aadhaar Number is left unused as the primary identifier.",
    "question": "What is the formal term for a candidate key that is NOT chosen as the primary key?",
    "options": [
      "A) Surrogate key",
      "B) Secondary or Alternate key",
      "C) Nullable key",
      "D) Foreign key"
    ],
    "answer": "B) Secondary or Alternate key",
    "explanation": "Candidate keys not chosen as the primary key are known as secondary or alternate keys. Next, we look at the application criteria designers use to choose a primary key."
  },
  {
    "id": 26,
    "context": "A designer must carefully choose the best primary key based on additional application criteria.",
    "question": "Why would the combination {First Name, Last Name} be a poor choice for a primary key for university students?",
    "options": [
      "A) They are atomic values",
      "B) Two students cannot have the same name",
      "C) Names are frequently identical across different individuals (not unique)",
      "D) Names cannot be stored in an alphanumeric string"
    ],
    "answer": "C) Names are frequently identical across different individuals (not unique)",
    "explanation": "Names are rarely unique (e.g., Google Scholar has multiple people named 'Partha Pratim Das'), causing identity conflicts. Next, we look at how 'nulls' affect key viability."
  },
  {
    "id": 27,
    "context": "The passport number is guaranteed to be unique for every individual who actually possesses one.",
    "question": "Why is 'Passport Number' completely disqualified from being a candidate key for all students in a typical university database?",
    "options": [
      "A) It is not minimal",
      "B) It is a composite key",
      "C) It is nullable (optional), so not every student has one",
      "D) It contains alphabet characters"
    ],
    "answer": "C) It is nullable (optional), so not every student has one",
    "explanation": "Because it is nullable, some students wouldn't have an identifier, disqualifying it as a candidate key. Next, we examine keys made of several attributes."
  },
  {
    "id": 28,
    "context": "Sometimes a single attribute isn't enough to guarantee uniqueness, requiring a combination of columns to act as a key.",
    "question": "What is the specific term for a key that consists of more than one component (e.g., First Name + Last Name)?",
    "options": [
      "A) Simple key",
      "B) Alternate key",
      "C) Composite key",
      "D) Synthetic key"
    ],
    "answer": "C) Composite key",
    "explanation": "A composite key has more than one component combined together to ensure uniqueness. Next, we contrast this with keys made of a single column."
  },
  {
    "id": 29,
    "context": "Unlike a combination of columns, an Aadhaar number resides entirely in one column as a cohesive identifier.",
    "question": "What is a key formally called when it is composed of exactly one attribute?",
    "options": [
      "A) Simple key",
      "B) Composite key",
      "C) Foreign key",
      "D) Relation key"
    ],
    "answer": "A) Simple key",
    "explanation": "A simple key is a single attribute, such as an Aadhaar number or roll number. Next, we look at how even simple atomic keys can hide complex meanings."
  },
  {
    "id": 30,
    "context": "An IIT student's roll number might look like '14-CS-92-P-01'.",
    "question": "In the context of strict relational attributes, how is this complex roll number syntactically treated?",
    "options": [
      "A) As a composite value spanning five columns",
      "B) As an atomic alphanumeric string",
      "C) As a relational instance",
      "D) As a surrogate integer"
    ],
    "answer": "B) As an atomic alphanumeric string",
    "explanation": "Syntactically, it is an atomic value (an alphanumeric string), even though semantically it is composite. Next, we break down why it is structured this way."
  },
  {
    "id": 31,
    "context": "The string '14-CS-92-P-01' compacts admission year, department, category, type, and serial number into one value.",
    "question": "Why do systems encode multiple pieces of information into a single atomic key rather than keeping them as separate columns?",
    "options": [
      "A) Because the relational model bans more than 5 columns",
      "B) It functions as a shorthand encoding since these attributes aren't frequently needed separately",
      "C) To bypass Turing completeness",
      "D) To force the key to be nullable"
    ],
    "answer": "B) It functions as a shorthand encoding since these attributes aren't frequently needed separately",
    "explanation": "It's compacted because you rarely need these attributes separately, but a small algorithm can extract them if necessary. Next, we investigate scenarios where real-world data provides no natural unique identifier."
  },
  {
    "id": 32,
    "context": "A customer orders 3 identical apples from Big Bazaar twice on the same day. The raw data (item, quantity, price, person) for both orders is completely identical.",
    "question": "How does a database distinguish between these two identical, separate orders?",
    "options": [
      "A) By allowing duplicate rows",
      "B) By using the customer's Name as the key",
      "C) By synthetically generating a unique 'Order Number'",
      "D) By deleting one of the orders"
    ],
    "answer": "C) By synthetically generating a unique 'Order Number'",
    "explanation": "Because the natural data cannot easily distinguish them, the system generates an Order Number to uniquely identify each transaction. Next, we learn the formal term for this type of generated identifier."
  },
  {
    "id": 33,
    "context": "An 'Order Number' does not exist naturally in the real world; it is created by the system strictly to force uniqueness.",
    "question": "What is this type of synthetically generated identifier formally called?",
    "options": [
      "A) Surrogate or synthetic key",
      "B) Foreign key",
      "C) Composite key",
      "D) Alternate key"
    ],
    "answer": "A) Surrogate or synthetic key",
    "explanation": "Synthetically generated data created at transaction time just to establish uniqueness is known as a surrogate or synthetic key. However, not all synthetic keys are identical in nature, which we cover next."
  },
  {
    "id": 34,
    "context": "Both Order Numbers and Roll Numbers are technically generated by an organization, not inherently found in nature.",
    "question": "What distinguishes a Roll Number from a true surrogate key like an Order Number?",
    "options": [
      "A) Order numbers contain letters, roll numbers do not",
      "B) Roll numbers have permanence tied to an entity, while order numbers identify a short-lived transaction",
      "C) Roll numbers are nullable",
      "D) Order numbers are composite keys"
    ],
    "answer": "B) Roll numbers have permanence tied to an entity, while order numbers identify a short-lived transaction",
    "explanation": "Roll numbers identify an entity with permanence (the student), whereas an order number is tied to a short-lived, otherwise indistinguishable transaction. Next, we learn how keys link different tables together."
  },
  {
    "id": 35,
    "context": "The 'Students' table uses Roll Number as its primary key. An 'Enrolment' table also has a Roll Number column to record which courses a student is taking.",
    "question": "What role does the 'Roll Number' attribute play within the 'Enrolment' table?",
    "options": [
      "A) A nullable key",
      "B) A foreign key",
      "C) A procedural key",
      "D) A surrogate key"
    ],
    "answer": "B) A foreign key",
    "explanation": "Because it links back to the key of the Students table, it is a foreign key in the Enrolment table. Let's formalize this definition next."
  },
  {
    "id": 36,
    "context": "The Roll Number acts as a relational bridge between the Students table and the Enrolment table.",
    "question": "What is the definitive characteristic of a foreign key?",
    "options": [
      "A) It is always synthetically generated",
      "B) It is an attribute that is a key in a different table",
      "C) It must be a composite key",
      "D) It cannot be numeric"
    ],
    "answer": "B) It is an attribute that is a key in a different table",
    "explanation": "A foreign key is simply an attribute that serves as a key somewhere else. Next, we clarify a common misconception about what type of key it must link to."
  },
  {
    "id": 37,
    "context": "A foreign key in Table B points back to Table A to establish a relationship.",
    "question": "Must a foreign key always point exclusively to the 'primary key' of the other relation?",
    "options": [
      "A) Yes, it is a strict requirement",
      "B) No, it might be a foreign key pointing to something that is a key, but not necessarily the primary key",
      "C) Yes, unless the primary key is composite",
      "D) No, it points to a surrogate key only"
    ],
    "answer": "B) No, it might be a foreign key pointing to something that is a key, but not necessarily the primary key",
    "explanation": "The lecture notes that a foreign key points to a 'key' in another relation, but it may not always be the primary key. Next, we'll practice the concept of keys using a new hypothetical table."
  },
  {
    "id": 38,
    "context": "Imagine a 'Cars' table with attributes {LicensePlate, Color, Model}. Every car has a unique License Plate.",
    "question": "Is the combination {LicensePlate, Color} a super key for this table?",
    "options": [
      "A) No, because Color is not unique",
      "B) Yes, because it contains the LicensePlate, which is unique on its own",
      "C) No, because it is not minimal",
      "D) Yes, but only if the car is painted a unique color"
    ],
    "answer": "B) Yes, because it contains the LicensePlate, which is unique on its own",
    "explanation": "Since {LicensePlate} is unique, any subset containing it (like {LicensePlate, Color}) uniquely identifies the row, making it a super key. Next, we test the minimality of this set."
  },
  {
    "id": 39,
    "context": "The subset {LicensePlate, Color} successfully identifies any unique car.",
    "question": "Is {LicensePlate, Color} considered a Candidate Key?",
    "options": [
      "A) Yes, because it uniquely identifies the row",
      "B) Yes, because it is a super key",
      "C) No, because its subset {LicensePlate} is also a super key, so it lacks minimality",
      "D) No, because color can change"
    ],
    "answer": "C) No, because its subset {LicensePlate} is also a super key, so it lacks minimality",
    "explanation": "A candidate key must be minimal; since {LicensePlate} alone works, the combination is not minimal and therefore not a candidate key. Now that we understand table structures, we move on to querying them."
  },
  {
    "id": 40,
    "context": "After designing a schema and populating instances, a user needs to retrieve data using a query language.",
    "question": "What are the two foundational programming paradigms used for querying databases?",
    "options": [
      "A) Object-Oriented and Functional",
      "B) Procedural and Declarative",
      "C) Static and Dynamic",
      "D) Relational and Non-Relational"
    ],
    "answer": "B) Procedural and Declarative",
    "explanation": "The two fundamental ways to construct a query language are procedural and declarative. Let's explore the procedural approach first."
  },
  {
    "id": 41,
    "context": "Traditional programming languages like C, C++, Java, and Python are primarily procedural.",
    "question": "What is the defining trait of a procedural programming language?",
    "options": [
      "A) It specifies 'what' answer is needed without giving steps",
      "B) It tells you exactly 'how' you find a value step-by-step",
      "C) It uses surrogate keys automatically",
      "D) It cannot use variables"
    ],
    "answer": "B) It tells you exactly 'how' you find a value step-by-step",
    "explanation": "A procedural language details the exact computational steps ('how') to arrive at the answer. Next, we contrast this with the declarative paradigm used heavily in databases."
  },
  {
    "id": 42,
    "context": "Relational query languages generally lean toward a declarative style.",
    "question": "How does a declarative language differ from a procedural one?",
    "options": [
      "A) It is Turing complete",
      "B) It executes faster in all scenarios",
      "C) It specifies 'what' you want as an answer, without stating 'how' to find it",
      "D) It requires manual loop unrolling"
    ],
    "answer": "C) It specifies 'what' you want as an answer, without stating 'how' to find it",
    "explanation": "In a declarative language, the user states the desired outcome ('what'), leaving the execution steps ('how') to the system. Let's look at a math example next."
  },
  {
    "id": 43,
    "context": "To find a square root, an algorithm might iteratively guess a number, check the deviation, and refine the guess.",
    "question": "Does this step-by-step refinement algorithm represent a procedural or declarative approach?",
    "options": [
      "A) Procedural",
      "B) Declarative",
      "C) Both",
      "D) Neither"
    ],
    "answer": "A) Procedural",
    "explanation": "Because it details the exact iteration and refinement steps to compute the answer, it is a procedural approach. Next, how would a declarative statement approach this math problem?"
  },
  {
    "id": 44,
    "context": "Instead of writing an iterative loop to find a root, you write: 'Given n, find m such that m squared is equal to n'.",
    "question": "Why is this mathematical statement considered declarative?",
    "options": [
      "A) It includes an equals sign",
      "B) It states the desired end result ('what') without providing the algorithm to compute it ('how')",
      "C) It uses variables 'm' and 'n'",
      "D) It executes in O(1) time"
    ],
    "answer": "B) It states the desired end result ('what') without providing the algorithm to compute it ('how')",
    "explanation": "It only states what the correct answer looks like, which is the hallmark of a declarative statement. Next, we identify the specific query models built on these paradigms."
  },
  {
    "id": 45,
    "context": "The relational model relies on three fundamental formal query models for data retrieval.",
    "question": "Which of the following is NOT one of the three foundational relational query models?",
    "options": [
      "A) Relational Algebra",
      "B) Relational Tuple Calculus",
      "C) Relational Domain Calculus",
      "D) Relational Object Calculus"
    ],
    "answer": "D) Relational Object Calculus",
    "explanation": "The three models are Relational Algebra, Relational Tuple Calculus, and Relational Domain Calculus. Next, we examine a specific computational limitation of these models."
  },
  {
    "id": 46,
    "context": "While Relational Algebra and Calculus are powerful for extracting data, they have a formal computational limit by design.",
    "question": "Are these relational query models Turing complete?",
    "options": [
      "A) Yes, they can compute any computable function",
      "B) No, they are not Turing complete",
      "C) Yes, but only Relational Algebra",
      "D) Yes, but only Domain Calculus"
    ],
    "answer": "B) No, they are not Turing complete",
    "explanation": "The relational query languages are specifically designed not to be Turing complete to ensure queries are safe and decidable. Next, let's circle back to review how domains restrict our queries."
  },
  {
    "id": 47,
    "context": "A query can only retrieve values that mathematically exist within the relation's domains.",
    "question": "If a 'Department' attribute has a domain of purely alphabetical strings, can a query find a tuple where Department is 'CSE235'?",
    "options": [
      "A) Yes, if it is a surrogate key",
      "B) No, because 'CSE235' contains numbers and is incompatible with the alphabetical domain",
      "C) Yes, if using a declarative language",
      "D) No, because 'CSE235' is a composite key"
    ],
    "answer": "B) No, because 'CSE235' contains numbers and is incompatible with the alphabetical domain",
    "explanation": "Values must strictly conform to their domain types; an alphabetical domain cannot contain numeric digits. Next, we review how nullable domains affect uniqueness."
  },
  {
    "id": 48,
    "context": "We've established that a Primary Key must uniquely identify every single tuple in the table.",
    "question": "Can an attribute with a 'nullable' domain be chosen as the Primary Key?",
    "options": [
      "A) Yes, nulls are treated as unique values",
      "B) No, because a null means the value is unknown, making reliable identification impossible for that tuple",
      "C) Yes, if it is also a foreign key",
      "D) No, because nulls require declarative queries"
    ],
    "answer": "B) No, because a null means the value is unknown, making reliable identification impossible for that tuple",
    "explanation": "Nulls represent unknown data; you cannot uniquely identify a row with an unknown value, disqualifying nullable attributes from being primary keys. Next, we review the fundamental structure that brings keys and domains together."
  },
  {
    "id": 49,
    "context": "The combination of attributes, their domains, and the designated primary key forms a cohesive blueprint.",
    "question": "What encapsulates all these structural definitions (attributes, types, keys) without containing the actual data rows?",
    "options": [
      "A) The Relational Instance",
      "B) The Tuple Calculus",
      "C) The Relational Schema",
      "D) The Surrogate Model"
    ],
    "answer": "C) The Relational Schema",
    "explanation": "The Relational Schema is the structural blueprint containing attributes and types. Let's summarize the ultimate goal of the relation in our final question."
  },
  {
    "id": 50,
    "context": "We have covered how schemas, tuples, domains, and keys interact to form a rigorous relational database model.",
    "question": "Ultimately, what is the core mathematical requirement for any valid relational instance regarding its tuples?",
    "options": [
      "A) They must be ordered alphabetically",
      "B) They must contain at least one null value",
      "C) They must all be distinct from one another, with no identical duplicates",
      "D) They must be queried procedurally"
    ],
    "answer": "C) They must all be distinct from one another, with no identical duplicates",
    "explanation": "Because a relation is mathematically a set, every tuple must be absolutely distinct. This concludes the fundamentals of relational attributes, schemas, and keys!"
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
