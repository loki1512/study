// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "Welcome to the Introduction to DBMS. The previous modules compared file-based systems with databases. Now, the focus shifts to fundamental database concepts.",
    "question": "What are the main topics introduced in Module 4 of the DBMS course?",
    "options": [
      "A) Network protocols and routing",
      "B) Basic jargons, data models, languages, and design approaches",
      "C) Advanced SQL indexing and server management",
      "D) File system implementation and disk fragmentation"
    ],
    "answer": "B) Basic jargons, data models, languages, and design approaches",
    "explanation": "The module introduces basic notions, terminology, data models, languages, and approaches to database design. This sets the stage for understanding how data is fundamentally viewed and abstracted in a DBMS."
  },
  {
    "id": 2,
    "context": "To understand how data is organized, we look at the database architecture. A database system does not look at data in just one monolithic way.",
    "question": "How many levels of abstraction are typically used in a database system?",
    "options": [
      "A) One",
      "B) Two",
      "C) Three",
      "D) Four"
    ],
    "answer": "C) Three",
    "explanation": "Data is viewed at three distinct levels: physical, logical, and view. To grasp this structure, we must start with the lowest and most foundational of these levels."
  },
  {
    "id": 3,
    "context": "The lowest level of abstraction deals with the actual electronic descriptor of the data.",
    "question": "What does the physical level of abstraction describe?",
    "options": [
      "A) How the record is actually stored in memory or disk (bits and bytes)",
      "B) The mathematical relationship between tables",
      "C) The user interface of the application",
      "D) Derived attributes like a user's age"
    ],
    "answer": "A) How the record is actually stored in memory or disk (bits and bytes)",
    "explanation": "The physical level describes the storage details, like bits, bytes, and memory organization. Sitting directly above this physical hardware layout is a level that gives meaning to those bits."
  },
  {
    "id": 4,
    "context": "Sitting above the physical layout of bits and bytes is a level that defines what a record actually represents conceptually.",
    "question": "Which level of abstraction describes the data stored in the database and their relationships, such as defining an 'instructor' as a record?",
    "options": [
      "A) Physical level",
      "B) Logical level",
      "C) View level",
      "D) Application level"
    ],
    "answer": "B) Logical level",
    "explanation": "The logical level defines the basic abstraction of the data, grouping raw data into records. These records are further broken down into specific constituent parts."
  },
  {
    "id": 5,
    "context": "At the logical level, an entity like an instructor is defined by a collection of individual data points.",
    "question": "What is the definition of 'fields' in the context of a logical record?",
    "options": [
      "A) Different types of data mixed together randomly",
      "B) Physical memory locations on a hard drive",
      "C) Attributes which are of the same type and hold specific values",
      "D) Graphical interface buttons for the user"
    ],
    "answer": "C) Attributes which are of the same type and hold specific values",
    "explanation": "Fields are attributes of a specific type (like a string for a name, or an integer for a salary) that make up a record. However, not all of these fields should be visible to every user accessing the system."
  },
  {
    "id": 6,
    "context": "Because some fields (like an instructor's salary) contain sensitive data, and different applications need different data combinations, a higher level of abstraction is required.",
    "question": "Which level of abstraction selectively shows or hides details, such as hiding an instructor's salary from certain users?",
    "options": [
      "A) Physical level",
      "B) Logical level",
      "C) View level",
      "D) Hardware level"
    ],
    "answer": "C) View level",
    "explanation": "The view level presents specific parts of the logical data, ensuring users only see what is relevant or permitted. This specific level is tailored for a particular group of professionals."
  },
  {
    "id": 7,
    "context": "The different levels cater to different roles in database management and software development.",
    "question": "While the logical level is primarily for database engineers, who is the view level primarily for?",
    "options": [
      "A) System administrators",
      "B) Network engineers",
      "C) Application programmers",
      "D) Hardware designers"
    ],
    "answer": "C) Application programmers",
    "explanation": "Application programmers use the view level to integrate specific data perspectives into their software. Interestingly, this level can also present information that isn't directly stored in the database."
  },
  {
    "id": 8,
    "context": "The view level does not only filter existing logical fields; it can also present dynamic information synthesized on the fly.",
    "question": "How does the view level handle dynamic information like a person's age?",
    "options": [
      "A) It stores the age in the physical database and updates it daily",
      "B) It computes the age dynamically from a stored Date of Birth (DOB)",
      "C) It requires the user to manually input their age at login",
      "D) It cannot display age because it is not a physical field"
    ],
    "answer": "B) It computes the age dynamically from a stored Date of Birth (DOB)",
    "explanation": "A view can show derived forms of data, like calculating age from a stored date of birth, which avoids the problem of storing data that changes daily. Because views are derived, they offer great flexibility compared to the underlying physical data."
  },
  {
    "id": 9,
    "context": "A single logical database entity can be interacted with in multiple ways simultaneously depending on the context.",
    "question": "While there is only one physical and logical instance of a record at a given time, how many views can exist?",
    "options": [
      "A) Exactly one",
      "B) Two (one for user, one for admin)",
      "C) Multiple, depending on the application's needs",
      "D) None"
    ],
    "answer": "C) Multiple, depending on the application's needs",
    "explanation": "Multiple views can exist for the same data (e.g., one for course assignments, one for vaccination eligibility). Understanding how data structures permit this flexibility leads us to differentiate between the structure itself and the actual data."
  },
  {
    "id": 10,
    "context": "Now that we understand how data is layered, we must differentiate between the structural design of the database and its actual contents.",
    "question": "In simple terms, what is the fundamental difference between a schema and an instance?",
    "options": [
      "A) Schema is the actual data; instance is the organization.",
      "B) Schema is the way data will be organized; instance is the actual value of the data.",
      "C) Schema is used for integers; instance is used for strings.",
      "D) Schema is the physical hardware; instance is the software view."
    ],
    "answer": "B) Schema is the way data will be organized; instance is the actual value of the data.",
    "explanation": "Schema defines the organization (like a variable's type), while instance refers to the actual data values (like the variable's value). This structural concept applies directly to the different levels of abstraction."
  },
  {
    "id": 11,
    "context": "Just as there are different levels of abstraction for the data itself, the schemas (structural definitions) are also categorized.",
    "question": "What do the logical schema and physical schema correspond to, respectively?",
    "options": [
      "A) View level and Network level",
      "B) Logical level of abstraction and Physical level of abstraction",
      "C) Instances and Views",
      "D) Tables and Queries"
    ],
    "answer": "B) Logical level of abstraction and Physical level of abstraction",
    "explanation": "The logical schema defines the logical abstraction, and the physical schema defines the physical abstraction. Let's look at a concrete example to understand logical schemas better."
  },
  {
    "id": 12,
    "context": "A logical schema describes the blueprint for a particular entity, outlining exactly what categories of information will be stored.",
    "question": "Which of the following best represents a 'customer schema'?",
    "options": [
      "A) The specific name 'John Doe' and his ID '123'",
      "B) The definition that a customer entity must have a Name, Customer ID, Account number, and Mobile number",
      "C) The physical server rack where customer data is held",
      "D) A query asking for a specific customer's balance"
    ],
    "answer": "B) The definition that a customer entity must have a Name, Customer ID, Account number, and Mobile number",
    "explanation": "A schema is the logical structure or definition, telling you how a customer is described, but not providing any specific customer's data. Once we populate this structure, we create something else."
  },
  {
    "id": 13,
    "context": "Once a schema dictates the structure, the database can be populated with actual data conforming to that strict structure.",
    "question": "What constitutes a 'customer instance'?",
    "options": [
      "A) The rules for creating a customer profile",
      "B) The actual records or data values of customers based on the schema",
      "C) The data dictionary tracking the tables",
      "D) The DDL compiler"
    ],
    "answer": "B) The actual records or data values of customers based on the schema",
    "explanation": "An instance consists of the actual data records present in the database at a given moment. While instances are fluid and change constantly, changing the underlying schema has broader consequences."
  },
  {
    "id": 14,
    "context": "Instances are fluid, but schemas are relatively static. However, business needs sometimes require a schema to be altered.",
    "question": "What happens if you change the schema of a database, such as adding or removing an attribute?",
    "options": [
      "A) Only the physical level is affected",
      "B) The instances remain completely unimpacted",
      "C) All instances get impacted",
      "D) A new database is automatically generated"
    ],
    "answer": "C) All instances get impacted",
    "explanation": "Changing the schema impacts the instances because the existing data must now conform to the new structure (e.g., adding a new required field). To simplify this relationship, we can use a basic visual analogy."
  },
  {
    "id": 15,
    "context": "To make the relationship between schema and instance instantly understandable, they can be compared to a common way we visualize data.",
    "question": "What is a useful visual analogy for understanding schema and instance?",
    "options": [
      "A) A keyboard (schema) and monitor (instance)",
      "B) The structure of a table (schema) and the contents of the table (instance)",
      "C) Hardware (schema) and Software (instance)",
      "D) Compiler (schema) and Interpreter (instance)"
    ],
    "answer": "B) The structure of a table (schema) and the contents of the table (instance)",
    "explanation": "The schema is analogous to the structure or column headers of a table, while the instance represents the actual rows of data within it. Managing how physical storage changes affect this logical table requires a specific design principle."
  },
  {
    "id": 16,
    "context": "When database administrators upgrade storage systems or change physical data structures, they want to avoid breaking the logical tables.",
    "question": "What concept ensures that implementing changes at the physical level does not significantly affect the logical level?",
    "options": [
      "A) View-level dynamic generation",
      "B) Physical data independence",
      "C) Relational algebra mapping",
      "D) Schema instance synchronization"
    ],
    "answer": "B) Physical data independence",
    "explanation": "Physical data independence allows physical storage details to change without requiring changes to the logical schema. This concept is mirrored heavily in modern software engineering principles."
  },
  {
    "id": 17,
    "context": "The separation of the physical implementation from the logical representation is a widespread concept in computer science, beyond just databases.",
    "question": "To which object-oriented programming concept is physical data independence compared?",
    "options": [
      "A) Inheritance and Polymorphism",
      "B) Classes and Objects",
      "C) Interface and Implementation",
      "D) Loops and Conditionals"
    ],
    "answer": "C) Interface and Implementation",
    "explanation": "Like an interface that remains invariant while the implementation behind it changes, the logical schema stays stable even if physical storage changes. To fully map out these interfaces and schemas, systems use comprehensive data models."
  },
  {
    "id": 18,
    "context": "To define how data is connected, structured, and constrained logically, database systems rely on specific conceptual frameworks.",
    "question": "What is a 'data model' in a DBMS?",
    "options": [
      "A) A 3D physical representation of the database server",
      "B) A specific query syntax",
      "C) A collection of tools describing data, relationships, semantics, and constraints",
      "D) The hardware architecture of the solid-state drives"
    ],
    "answer": "C) A collection of tools describing data, relationships, semantics, and constraints",
    "explanation": "A data model provides the concepts to describe how data is organized, its meaning, and its rules. Out of the many data models available, one stands out as the primary focus of this course."
  },
  {
    "id": 19,
    "context": "While many data models exist, the course primarily focuses on the one that has dominated the industry since the 1980s.",
    "question": "Which data model will be significantly discussed as the mainstay in this DBMS course?",
    "options": [
      "A) Relational model",
      "B) Hierarchical model",
      "C) Network model",
      "D) Graph model"
    ],
    "answer": "A) Relational model",
    "explanation": "The relational model is the dominant model for structuring data and is the main focus of the course. However, before a relational model is physically built, another conceptual model is often used to map things out."
  },
  {
    "id": 20,
    "context": "Before creating actual relational tables, developers often conceptualize the database using a more abstract design framework.",
    "question": "What is the Entity Relationship (ER) data model primarily used for?",
    "options": [
      "A) Physical storage optimization",
      "B) Compiling SQL code",
      "C) Database design",
      "D) Managing unstructured video data"
    ],
    "answer": "C) Database design",
    "explanation": "The ER model is used mainly during the database design phase to visualize entities before creating actual tables. Because it maps real-world entities, it shares similarities with standard software modeling techniques."
  },
  {
    "id": 21,
    "context": "The ER model is highly conceptual, relying on diagramming entities and their relationships, much like modern software design.",
    "question": "The Entity Relationship model is noted to be familiar to anyone who has worked with which concept?",
    "options": [
      "A) Object-oriented systems or UML",
      "B) Assembly language programming",
      "C) Network routing protocols",
      "D) B-tree storage algorithms"
    ],
    "answer": "A) Object-oriented systems or UML",
    "explanation": "ER modeling shares strong similarities with UML and object-oriented modeling, as both map out real-world entities and their connections. While relational and ER models are standard now, they replaced older paradigms."
  },
  {
    "id": 22,
    "context": "Database technology has evolved significantly since the 1960s, moving away from early, rigid architectural structures.",
    "question": "Which two data models are mentioned as older models that existed for a long time before the relational model became dominant?",
    "options": [
      "A) Relational and NoSQL",
      "B) Graph and Unstructured",
      "C) Network model and Hierarchical model",
      "D) ER model and Multidimensional model"
    ],
    "answer": "C) Network model and Hierarchical model",
    "explanation": "The network and hierarchical models were used historically before the relational model became the industry standard. As technology progressed further, modern needs gave rise to entirely new data categories."
  },
  {
    "id": 23,
    "context": "Traditional data models are great for numbers and short text, but modern applications deal with complex, non-tabular formats.",
    "question": "Over the last 10-15 years, models have emerged to handle semi-structured or unstructured data. What are examples of this data?",
    "options": [
      "A) Integers and Booleans",
      "B) Images, videos, audios, and natural language sentences",
      "C) Pre-calculated salary fields",
      "D) Fixed 5-character strings"
    ],
    "answer": "B) Images, videos, audios, and natural language sentences",
    "explanation": "Unstructured data includes rich media and natural language that do not fit neatly into traditional rows and columns. Specifically, the rise of social media required a new model to track complex interconnectivity."
  },
  {
    "id": 24,
    "context": "In the 2000s, platforms like Facebook exploded, creating a need to efficiently map out complex relationships between users, posts, and tags.",
    "question": "Which modern data model handles massive web of relationships such as friends, tagging, and groups?",
    "options": [
      "A) Hierarchical model",
      "B) Relational model",
      "C) Graph model",
      "D) Tuple relational calculus"
    ],
    "answer": "C) Graph model",
    "explanation": "The graph model is ideal for representing complex interconnections, like those found in social networks. Following the graph model, the last decade introduced yet another set of models for vast scalability."
  },
  {
    "id": 25,
    "context": "Following the rise of graph models, the last decade has seen another major shift to handle scale, speed, and varied data structures.",
    "question": "What model has emerged over the last decade as a consequence of dealing with varied and massive modern datasets?",
    "options": [
      "A) NoSQL models",
      "B) Hierarchical models",
      "C) Relational Algebra models",
      "D) View level models"
    ],
    "answer": "A) NoSQL models",
    "explanation": "NoSQL models have become prominent to handle non-relational database needs at scale. Despite these exciting new models, we must return our focus to the core foundation of this course: the relational model."
  },
  {
    "id": 26,
    "context": "Returning to the core focus of the course, we must define the fundamental building block of the relational data model.",
    "question": "In the relational model, how is everything primarily stored?",
    "options": [
      "A) As linked nodes and edges",
      "B) In terms of tables, which are mathematically called relations",
      "C) As a hierarchy of parent-child folders",
      "D) As continuous unstructured byte streams"
    ],
    "answer": "B) In terms of tables, which are mathematically called relations",
    "explanation": "The relational model organizes data into two-dimensional grids called tables, formally known as relations. These tables are composed of distinct vertical and horizontal elements."
  },
  {
    "id": 27,
    "context": "A relation (table) is structured as a grid. The vertical components dictate the schema of the table.",
    "question": "In relational terminology, what are the columns of a table called?",
    "options": [
      "A) Records",
      "B) Instances",
      "C) Attributes",
      "D) Keys"
    ],
    "answer": "C) Attributes",
    "explanation": "Columns in a relation are called attributes, and they define the specific data fields (like ID or Name). The horizontal components, on the other hand, contain the actual data."
  },
  {
    "id": 28,
    "context": "While attributes define the structural rules of the data, the actual information is populated horizontally.",
    "question": "In a relational table, what do the rows represent?",
    "options": [
      "A) Attributes",
      "B) Records (the actual data instances)",
      "C) The logical schema definition",
      "D) Metadata dictionaries"
    ],
    "answer": "B) Records (the actual data instances)",
    "explanation": "Rows represent the records or instances of data within the table. To create these structures and interact with these records, specific specialized database languages are required."
  },
  {
    "id": 29,
    "context": "Database systems require a way to define the schema or the structural blueprint of the tables before inserting any data.",
    "question": "What does DDL stand for in the context of database languages?",
    "options": [
      "A) Data Dictionary Language",
      "B) Data Definition Language",
      "C) Database Design Layout",
      "D) Dynamic Data Link"
    ],
    "answer": "B) Data Definition Language",
    "explanation": "DDL stands for Data Definition Language, which is used to define the schema and overall structure of the data. Let's look at how DDL is practically applied."
  },
  {
    "id": 30,
    "context": "An administrator needs to create a new 'instructor' table with specific fields like ID and name.",
    "question": "Which of the following is a typical DDL command used to define the structural schematic of a table?",
    "options": [
      "A) SELECT FROM",
      "B) UPDATE",
      "C) CREATE TABLE",
      "D) INSERT INTO"
    ],
    "answer": "C) CREATE TABLE",
    "explanation": "'CREATE TABLE' is a basic DDL command used to set up the structural template of a database. Once this command is executed, the database must store this structural blueprint somewhere safe."
  },
  {
    "id": 31,
    "context": "When a DDL command creates a table, the database must remember the table's name, its attributes, and their data types for future reference.",
    "question": "Where does the DDL compiler keep track of schema information, table templates, and attribute types?",
    "options": [
      "A) In the view level",
      "B) In a data dictionary",
      "C) In the physical bits directly",
      "D) In the DML query script"
    ],
    "answer": "B) In a data dictionary",
    "explanation": "A data dictionary is a set of internal tables that keeps track of metadata—information about schemas, tables, and attributes. With the schema defined and stored, we need a different language to interact with the actual records."
  },
  {
    "id": 32,
    "context": "Once the tables exist and the schema is locked in the data dictionary, users need to populate them, read from them, and modify the data inside them.",
    "question": "What language component is specifically used to interact with instances, such as getting information or modifying values?",
    "options": [
      "A) Data Definition Language (DDL)",
      "B) Data Manipulation Language (DML)",
      "C) Entity Relationship Model",
      "D) Data Dictionary Language"
    ],
    "answer": "B) Data Manipulation Language (DML)",
    "explanation": "DML is used for data manipulation and interacting with the actual instances (records). Because of its primary function of extracting information, DML is often referred to by a more common name."
  },
  {
    "id": 33,
    "context": "DML allows users to ask the database questions, extract specific records, and filter results based on conditions.",
    "question": "What is a popular alternative name for a Data Manipulation Language (DML)?",
    "options": [
      "A) Schema Language",
      "B) Query Language",
      "C) Dictionary Language",
      "D) Compilation Language"
    ],
    "answer": "B) Query Language",
    "explanation": "DML is popularly called a query language because its primary function is querying and manipulating data. We can look at specific commands to see how this manipulation occurs."
  },
  {
    "id": 34,
    "context": "A user needs to retrieve a list of customers, add a new one, and change an existing customer's phone number.",
    "question": "Which of the following sets of operations are examples of DML?",
    "options": [
      "A) CREATE, ALTER, DROP",
      "B) SELECT, UPDATE, INSERT",
      "C) INT, STRING, BOOLEAN",
      "D) PHYSICAL, LOGICAL, VIEW"
    ],
    "answer": "B) SELECT, UPDATE, INSERT",
    "explanation": "SELECT (getting info), UPDATE (changing values), and INSERT (adding records) are core DML commands. These operations are not arbitrary; they are grounded in a specific mathematical foundation."
  },
  {
    "id": 35,
    "context": "The relational model is highly predictable and structured because it is amenable to formal mathematical processing.",
    "question": "There are three equivalent forms of mathematics for the relational model. Which of the following is one of them?",
    "options": [
      "A) Boolean algebra",
      "B) Relational algebra",
      "C) Linear algebra",
      "D) Graph calculus"
    ],
    "answer": "B) Relational algebra",
    "explanation": "Relational algebra, tuple relational calculus, and domain relational calculus form the mathematical foundation of the relational model. Among these, one is highlighted as the primary teaching tool."
  },
  {
    "id": 36,
    "context": "Among the three mathematical models supporting relational databases, the instructor chooses to focus on one specifically for beginners.",
    "question": "Why will the instructor primarily talk about relational algebra over the calculus forms?",
    "options": [
      "A) It is the only mathematical form that commercial databases support",
      "B) It is easier to understand at the beginning",
      "C) It is a Turing complete language",
      "D) SQL strictly rejects calculus"
    ],
    "answer": "B) It is easier to understand at the beginning",
    "explanation": "Relational algebra is emphasized because it provides an intuitive, procedural way to understand data manipulation. In commercial systems, this algebra is implemented via a ubiquitous textual language."
  },
  {
    "id": 37,
    "context": "While relational algebra provides the mathematical theory, a practical, textual language is necessary to interact with real-world database systems.",
    "question": "What is the most widely used commercial language for databases that corresponds to relational algebra?",
    "options": [
      "A) C++",
      "B) Python",
      "C) SQL (Structured Query Language)",
      "D) Java"
    ],
    "answer": "C) SQL (Structured Query Language)",
    "explanation": "SQL is the standard commercial language for interacting with relational databases. Interestingly, while its name implies it is just a 'Query' language, it serves multiple functions."
  },
  {
    "id": 38,
    "context": "Although originally designed for querying data (DML), SQL has evolved to cover all aspects of database management.",
    "question": "Which language components does SQL encompass?",
    "options": [
      "A) Only DML",
      "B) Only DDL",
      "C) Neither DML nor DDL",
      "D) Both DML and DDL, and more"
    ],
    "answer": "D) Both DML and DDL, and more",
    "explanation": "SQL serves as both a Data Manipulation Language (DML) and a Data Definition Language (DDL), allowing users to define schemas and query data simultaneously. However, despite its wide utility, SQL has severe theoretical limitations regarding complex programming."
  },
  {
    "id": 39,
    "context": "Because SQL is tailored specifically for set-based database operations, it lacks certain general-purpose programming constructs like infinite loops.",
    "question": "From a theoretical computer science perspective, how is SQL classified compared to general-purpose languages like C or Python?",
    "options": [
      "A) SQL is faster at compiling than C",
      "B) SQL is not a Turing complete language",
      "C) SQL can theoretically compute any function that C can",
      "D) SQL is strictly used for physical hardware management"
    ],
    "answer": "B) SQL is not a Turing complete language",
    "explanation": "SQL is not Turing complete, meaning there are complex computational problems it cannot solve on its own, unlike Turing complete languages like C. This limitation necessitates a collaborative approach to software development."
  },
  {
    "id": 40,
    "context": "If a system needs to compute complex algorithms, such as intricate tax rebate logic based on database records, SQL alone will not suffice.",
    "question": "Since SQL cannot compute all complex functions independently, how is it typically used in a real software application?",
    "options": [
      "A) It is embedded within and used alongside a host language like C, Java, or Python",
      "B) It is completely abandoned in favor of pure C code",
      "C) It relies entirely on the view level to perform the math",
      "D) It is upgraded to a Turing complete version via a plugin"
    ],
    "answer": "A) It is embedded within and used alongside a host language like C, Java, or Python",
    "explanation": "Because SQL focuses on data retrieval, it is embedded within a host language that handles the complex, Turing-complete application logic. Setting up these structures so they can be easily queried requires careful architectural planning."
  },
  {
    "id": 41,
    "context": "Designing a database is a complex process. Just as data has logical and physical levels, the design process is appropriately split into phases.",
    "question": "Database design consists of two main components corresponding to levels of abstraction. What are they?",
    "options": [
      "A) Schema design and Instance design",
      "B) View design and User interface design",
      "C) Logical design and Physical design",
      "D) Network design and Hardware design"
    ],
    "answer": "C) Logical design and Physical design",
    "explanation": "Database design involves physical design (managing disk storage) and logical design (structuring the schemas). The physical design deals with low-level storage mechanics."
  },
  {
    "id": 42,
    "context": "The physical design phase determines how data will be laid out efficiently on the raw storage media.",
    "question": "Which of the following is a primary concern of physical database design?",
    "options": [
      "A) Choosing the specific name of the instructor table",
      "B) Deciding on physical layout and storage structures like B-trees",
      "C) Determining the business goals of the company",
      "D) Writing the correct SELECT query syntax"
    ],
    "answer": "B) Deciding on physical layout and storage structures like B-trees",
    "explanation": "Physical design deals with how data is structurally optimized on disk, using complex algorithms and structures like B-trees. In contrast, logical design is about data organization for human and application understanding."
  },
  {
    "id": 43,
    "context": "Logical design is about organizing the entities, relations, and attributes into tables that make sense and avoid future anomalies.",
    "question": "What is the main goal of the logical design phase?",
    "options": [
      "A) Deciding on a good, appropriate collection of relational schemas",
      "B) Writing the fastest sorting algorithm in C",
      "C) Purchasing the correct server hard drives",
      "D) Upgrading the system from SQL to a Graph model"
    ],
    "answer": "A) Deciding on a good, appropriate collection of relational schemas",
    "explanation": "The logical design phase focuses on creating a 'good schema'—determining the best way to divide data into various tables. Crafting a 'good schema' requires balancing competing priorities."
  },
  {
    "id": 44,
    "context": "When defining schemas, a database architect cannot just think about code; they must satisfy multiple domains.",
    "question": "What are the two types of decisions that heavily impact logical database design?",
    "options": [
      "A) Hardware layout and Software patching decisions",
      "B) Business decisions and Computer science/algorithmic decisions",
      "C) Network routing and View display decisions",
      "D) Schema static decisions and Instance dynamic decisions"
    ],
    "answer": "B) Business decisions and Computer science/algorithmic decisions",
    "explanation": "A good logical design balances business decisions (what information the company needs to track) and computer science decisions (how data is easily manipulated and stored). To help understand good design, the instructor provides a questionable example."
  },
  {
    "id": 45,
    "context": "At the end of the module, the instructor presents an example where an 'instructor' table and a 'department' table are combined into a single large table.",
    "question": "What attributes does the combined Instructor-Department table have in the instructor's final example?",
    "options": [
      "A) Only ID and Name",
      "B) ID, name, salary, department name, building, and budget",
      "C) Department name and budget only",
      "D) Student ID, Courses, and Grades"
    ],
    "answer": "B) ID, name, salary, department name, building, and budget",
    "explanation": "The example forcefully combined the original instructor attributes (ID, name, salary, dept name) with department attributes (building, budget) into one massive table. This combination is meant to raise a fundamental design question."
  },
  {
    "id": 46,
    "context": "The instructor leaves the students with a specific question to ponder regarding this newly merged, massive table.",
    "question": "What does the instructor ask the students to consider about the combined Instructor-Department table?",
    "options": [
      "A) Whether it is a good, appropriate design or if something is not right",
      "B) How to write a complex Python program to access it",
      "C) What the physical B-tree structure of the table would look like",
      "D) How to permanently delete the table using DDL"
    ],
    "answer": "A) Whether it is a good, appropriate design or if something is not right",
    "explanation": "The instructor uses the combined table to provoke thought on whether throwing all data into one table is actually a 'good design', hinting at concepts like redundancy that will be covered later. This cliffhanger leads into the conclusion of the lecture."
  },
  {
    "id": 47,
    "context": "Wrapping up the current lecture, the instructor reviews what has been accomplished in this session.",
    "question": "Which of the following summarizes the content covered in Module 4 according to the instructor's closing remarks?",
    "options": [
      "A) An in-depth masterclass on optimizing B-trees on hard disks",
      "B) Familiarization with basic DBMS notions, terminology, data models, languages, and approaches to design",
      "C) Completing the entire SQL language tutorial and syntax guide",
      "D) A full technical comparison of Java and Python as host languages"
    ],
    "answer": "B) Familiarization with basic DBMS notions, terminology, data models, languages, and approaches to design",
    "explanation": "The module successfully served as an introduction, covering foundational vocabulary, levels of abstraction, models, and languages. The learning journey, however, doesn't stop with this session."
  },
  {
    "id": 48,
    "context": "As Module 4 concludes, the instructor hints at what the students can expect in the following session to maintain continuity.",
    "question": "What will be the primary focus of Module 5?",
    "options": [
      "A) Advanced application development in Java",
      "B) Continuing the introductory components on the same theme of DBMS basics",
      "C) Shifting entirely back to file-based handling systems",
      "D) Preparing for the final exams"
    ],
    "answer": "B) Continuing the introductory components on the same theme of DBMS basics",
    "explanation": "The introductory concepts of DBMS are vast, and the instructor notes that the same introductory theme will continue into Module 5. This continued learning will solidify the understanding of transitioning from older systems to modern databases."
  },
  {
    "id": 49,
    "context": "The underlying context of this entire course module is based on the transition from file-based systems (using standard programming languages) to modern database management systems.",
    "question": "Moving to a database management system implies what about writing application logic?",
    "options": [
      "A) All application logic must now be written entirely in SQL",
      "B) SQL is used for database interaction, while host languages still handle complex application logic",
      "C) File handling is completely banned in modern applications",
      "D) SQL replaces the need for an operating system entirely"
    ],
    "answer": "B) SQL is used for database interaction, while host languages still handle complex application logic",
    "explanation": "Transitioning to a DBMS doesn't mean SQL does everything; SQL manages the data, but languages like Python or Java still handle the core application logic. This synergy is essential for modern software development."
  },
  {
    "id": 50,
    "context": "To understand how databases fit perfectly into real-world applications alongside host languages, the instructor references the broader B.Sc. curriculum.",
    "question": "What other course in the program does the instructor mention that will further elucidate how to use SQL and database interfaces practically?",
    "options": [
      "A) Advanced Calculus",
      "B) Application Development",
      "C) Network Security",
      "D) Hardware Architecture"
    ],
    "answer": "B) Application Development",
    "explanation": "An 'Application Development' course is mentioned as the place where students will fully learn how to bind SQL database interfaces with host languages to build complete software solutions, finalizing the holistic view of DBMS."
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
