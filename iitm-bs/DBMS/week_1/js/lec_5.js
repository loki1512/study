// The complete quiz payload
const quizData =
[
{
"id": 1,
"context": "In Module 5 of the DBMS course, the focus shifts to understanding the models of a Database Management System and familiarizing students with its internal mechanics.",
"question": "What is the primary internal mechanism of a DBMS that is not directly visible but makes the system highly capable?",
"options": [
"A) The operating system",
"B) The database engine",
"C) The logical schema",
"D) The user interface"
],
"answer": "B) The database engine",
"explanation": "The key components that make database systems more capable than file-based programming are parts of the database engine. Understanding this engine requires first looking at the two main components of the database design process, starting with the physical design."
},
{
"id": 2,
"context": "The general structure of the database design process involves two components, the first being the physical database design.",
"question": "What does the physical database design primarily deal with?",
"options": [
"A) Deciding on the attributes and tables",
"B) Capturing business requirements",
"C) Laying out data, files, B-trees, and pages on the disk",
"D) Creating ER diagrams"
],
"answer": "C) Laying out data, files, B-trees, and pages on the disk",
"explanation": "Physical design handles the physical layout of data and memory transactions. The next step in the design process is what most users will interact with: the logical design."
},
{
"id": 3,
"context": "While physical design deals with files and memory, the logical design focuses on the database schema.",
"question": "What is the primary goal of logical database design?",
"options": [
"A) Allocating disk pages",
"B) Deciding how to organize the data into attributes, tables, and relationships",
"C) Managing the operating system's file manager",
"D) Designing B-trees"
],
"answer": "B) Deciding how to organize the data into attributes, tables, and relationships",
"explanation": "Logical design determines the schema and data organization. This process is typically influenced by two main streams of factors, the first being business decisions."
},
{
"id": 4,
"context": "Business decisions form one of the two streams of factors that influence logical database design.",
"question": "What do business decisions specifically dictate in the logical design process?",
"options": [
"A) Which normalization theory to apply",
"B) What information to keep and what kind of queries to support",
"C) How to parallelize the architecture",
"D) Where to place files on the disk"
],
"answer": "B) What information to keep and what kind of queries to support",
"explanation": "Businesses decide the required information and queries, dictating the initial design approach. However, the actual structuring requires a second stream of factors known as algorithmic or computer science decisions."
},
{
"id": 5,
"context": "The second stream of factors in logical design involves computer science or algorithmic decisions regarding the relational schema.",
"question": "What is an example of a computer science decision in logical design?",
"options": [
"A) Determining the company's annual budget",
"B) Choosing between a flat schema or a segregated schema and how to normalize it",
"C) Deciding what products to sell",
"D) Upgrading the server hardware"
],
"answer": "B) Choosing between a flat schema or a segregated schema and how to normalize it",
"explanation": "Computer science decisions shape the schema's structure and normalization. While the logical schema is refined, the physical design remains largely invariant across different applications."
},
{
"id": 6,
"context": "Physical design is typically done at an initial stage of the database system and often remains invariant even across different applications.",
"question": "What principle ensures that logical design does not need to know the details of physical design?",
"options": [
"A) Data redundancy",
"B) Transaction commit",
"C) Physical data independence",
"D) XML markup"
],
"answer": "C) Physical data independence",
"explanation": "Physical data independence allows physical designs to change without significantly impacting the logical design. To understand logical schemas better, we can evaluate a poorly designed flat table containing university data."
},
{
"id": 7,
"context": "A flat table design might store information about a faculty member alongside their department, building, and budget all in one place.",
"question": "Why is keeping faculty, department, building, and budget information in a single flat table considered a bad design?",
"options": [
"A) It prevents the use of SQL",
"B) It causes identical department data to be repeated for every faculty member in that department",
"C) It encrypts the data automatically",
"D) It requires XML tags"
],
"answer": "B) It causes identical department data to be repeated for every faculty member in that department",
"explanation": "Putting all this information in one flat table creates multiple identical entries for the same department. This repetition of data is formally known as redundancy."
},
{
"id": 8,
"context": "When multiple faculty members belong to the computer science department, the building and budget information are repeated identically.",
"question": "What is the specific term used to describe the same data being repeated at multiple times in a database?",
"options": [
"A) Concurrency",
"B) Independence",
"C) Redundancy",
"D) Normalization"
],
"answer": "C) Redundancy",
"explanation": "Redundant data occurs when identical facts, like a department's building, are repeated. This redundancy naturally leads to increased storage requirements."
},
{
"id": 9,
"context": "Redundancy in a database implies that the same data is kept at multiple places.",
"question": "What is the most evident, though less severe, problem caused by data redundancy?",
"options": [
"A) Slower network speeds",
"B) Increased storage requirements",
"C) Loss of physical independence",
"D) CPU overheating"
],
"answer": "B) Increased storage requirements",
"explanation": "Keeping data in multiple places necessitates more storage space. While storage is a concern, a much more severe problem arises when this redundant data needs to be updated."
},
{
"id": 10,
"context": "A more severe problem than storage requirements occurs when redundant data, such as a department's budget, changes over time.",
"question": "What happens when a dynamically changing value like a department budget is stored redundantly across multiple faculty rows?",
"options": [
"A) The database deletes the rows automatically",
"B) The budget must be updated individually for every faculty member in that department",
"C) The budget is locked and cannot be changed",
"D) The operating system handles the update"
],
"answer": "B) The budget must be updated individually for every faculty member in that department",
"explanation": "Changing a redundant quantity requires multiple updates, creating more work. This repetitive updating process introduces the dangerous risk of missing some rows due to system issues."
},
{
"id": 11,
"context": "When updating redundant rows, system issues might cause some updates to succeed while others fail.",
"question": "What dangerous situation occurs if a database has two different budget figures for the same department due to a failed update?",
"options": [
"A) An anomaly",
"B) A successful commit",
"C) Physical independence",
"D) XML parsing"
],
"answer": "A) An anomaly",
"explanation": "An anomaly leads to deep inconsistencies where the same entity shows conflicting data. To avoid such anomalies, databases are factored into segregated tables."
},
{
"id": 12,
"context": "To solve redundancy and anomalies, a database design should be factored so that information is only kept where relevant.",
"question": "How is a flat table containing both faculty and department details improved?",
"options": [
"A) By combining it with another flat table",
"B) By putting the data into a segregated form with separate tables for faculty and departments",
"C) By removing the budget column",
"D) By using magnetic tape"
],
"answer": "B) By putting the data into a segregated form with separate tables for faculty and departments",
"explanation": "Segregating the data means one table holds faculty info and another holds department info. However, these segregated tables still need an attribute to relate them together."
},
{
"id": 13,
"context": "In a segregated design with two tables, there must be a way to relate a faculty member to their department's information.",
"question": "Which attribute serves as the link to find a faculty member's specific department budget and building?",
"options": [
"A) Faculty salary",
"B) Name of the department",
"C) Building name",
"D) Faculty name"
],
"answer": "B) Name of the department",
"explanation": "The department name allows a user to look up all related department details in the second table. This basic principle of design is formalized through specific models like the Entity-Relationship model."
},
{
"id": 14,
"context": "To ensure every relation in the database is good, designers use formal models to capture requirements and organize tables.",
"question": "Which model primarily tries to capture business requirements, entities, and their relationships in a diagrammatic form?",
"options": [
"A) The XML model",
"B) The Entity Relationship (ER) model",
"C) The NoSQL paradigm",
"D) The Object-Relational model"
],
"answer": "B) The Entity Relationship (ER) model",
"explanation": "The ER model visualizes business requirements and entities. After creating the ER diagram, a formal theory must be applied to organize the relational tables properly."
},
{
"id": 15,
"context": "After determining the ER model, the database tables must be organized to avoid redundancy problems.",
"question": "What is the formal theory developed over 50 years ago to organize tables properly from a computer science perspective?",
"options": [
"A) Theory of relativity",
"B) Theory of computation",
"C) Theory of normalization",
"D) Theory of transaction management"
],
"answer": "C) Theory of normalization",
"explanation": "Normalization organizes databases to prevent anomalies and redundancy. While relational models are powerful, they strictly require flat, atomic data values."
},
{
"id": 16,
"context": "In a strictly relational model, every attribute must be a simple string, number, or date.",
"question": "What kind of value is not allowed as a single attribute in a traditional relational model?",
"options": [
"A) A flat string",
"B) An atomic number",
"C) A composite or non-atomic thing, like a 'student' object",
"D) A character"
],
"answer": "C) A composite or non-atomic thing, like a 'student' object",
"explanation": "Relational models limit attributes to atomic values, prohibiting complex composite entities. To overcome this limitation, the object-relational data model was developed."
},
{
"id": 17,
"context": "To handle complex data structures, an extension of the relational data model was created.",
"question": "What does the object-relational data model allow attributes to have while preserving the relational foundation?",
"options": [
"A) Only atomic values",
"B) Complex or non-atomic types",
"C) XML tags exclusively",
"D) Unstructured physical files"
],
"answer": "B) Complex or non-atomic types",
"explanation": "Object-relational models allow attributes to contain non-atomic, complex values. Another highly popular parallel development for handling complex, hierarchical data is XML."
},
{
"id": 18,
"context": "In parallel to database models, the Extensible Markup Language (XML) was defined by the W3C.",
"question": "What was XML originally designed for?",
"options": [
"A) Query processing",
"B) Marking up documents with name-value pairs",
"C) Managing physical disk sectors",
"D) Normalizing relational tables"
],
"answer": "B) Marking up documents with name-value pairs",
"explanation": "XML uses tags to mark up documents efficiently. Unlike flat tables, these XML tags can enclose other tags to create a specific structure."
},
{
"id": 19,
"context": "In XML, a tag can be composite and contain multiple other tags, which themselves can have values.",
"question": "What kind of data description does XML support that is not possible in a flat representation?",
"options": [
"A) Atomic description",
"B) Relational algebraic description",
"C) Hierarchical description",
"D) Binary description"
],
"answer": "C) Hierarchical description",
"explanation": "XML supports hierarchical structures, making it versatile for complex nesting. Because of this flexibility, XML is heavily used for moving data outside of database systems."
},
{
"id": 20,
"context": "XML has become an extensively used format for taking data dumps and keeping them outside the database system.",
"question": "What is the primary computational use case for XML mentioned in the context of databases?",
"options": [
"A) Data interchange and representation of unstructured data",
"B) Calculating query execution plans",
"C) Handling OS file authentication",
"D) Serializing train berth tickets"
],
"answer": "A) Data interchange and representation of unstructured data",
"explanation": "XML is a standard for data interchange and backbone representation in newer non-relational systems. Handling all this internal data securely requires the core database engine."
},
{
"id": 21,
"context": "The core of what supports all database activity is the database engine, which consists of three major components.",
"question": "Which of the following is NOT one of the three major components of the database engine?",
"options": [
"A) Storage manager",
"B) Query processing",
"C) Network router",
"D) Transaction manager"
],
"answer": "C) Network router",
"explanation": "The three components are the storage manager, query processing, and transaction manager. The foundation of data retention begins with the storage manager."
},
{
"id": 22,
"context": "The first major engine component is the storage manager, which must store the entire data and dictionary.",
"question": "Since a DBMS does not create a new computing system from scratch, what must the storage manager interact with?",
"options": [
"A) The XML schema",
"B) The operating system file manager",
"C) The transaction log",
"D) The application programmer"
],
"answer": "B) The operating system file manager",
"explanation": "The storage manager interacts with the OS file manager to securely store files. Furthermore, it uses specific techniques to make storage and retrieval efficient."
},
{
"id": 23,
"context": "The storage manager is responsible for making data storage, retrieval, and updating as efficient as possible.",
"question": "What are some of the access organization techniques used by the storage manager?",
"options": [
"A) XML and JSON",
"B) Indexing and hashing",
"C) Committing and rolling back",
"D) Client and server routing"
],
"answer": "B) Indexing and hashing",
"explanation": "Indexing and hashing are used by the storage manager to organize file access. Once data is efficiently stored, the query processing component is used to retrieve it."
},
{
"id": 24,
"context": "The second major component of the database engine is query processing, which handles user requests written in languages like SQL.",
"question": "What is the first primary step in the query processing pipeline?",
"options": [
"A) Transaction commit",
"B) Normalization",
"C) Parsing and translation",
"D) Disk formatting"
],
"answer": "C) Parsing and translation",
"explanation": "Parsing and translation convert the written SQL into a format the system understands. Specifically, SQL is translated into a rigorous mathematical model."
},
{
"id": 25,
"context": "SQL is a commercial query language that must be translated into an implementable mathematical model.",
"question": "What mathematical expression is a SQL query converted into during the translation phase?",
"options": [
"A) Differential equations",
"B) Relational algebra expressions",
"C) Boolean logic gates",
"D) Cobol scripts"
],
"answer": "B) Relational algebra expressions",
"explanation": "Relational algebra expressions act like algebraic equations for query handling. Once converted to relational algebra, formal theory is applied to optimize the query."
},
{
"id": 26,
"context": "After converting to relational algebra, the system can use theory to optimize the query just like choosing an efficient algorithm.",
"question": "What is the immediate output of the optimization step in query processing?",
"options": [
"A) An execution plan",
"B) A normalized table",
"C) A transaction commit",
"D) An XML dump"
],
"answer": "A) An execution plan",
"explanation": "The optimizer decides on an execution plan to actually access the data tables. However, the real-world performance of this plan requires continuous monitoring."
},
{
"id": 27,
"context": "The performance of an optimized query in a database is not absolute and does not rely solely on theoretical best/worst cases.",
"question": "What actual system factor heavily influences the performance of a query?",
"options": [
"A) The XML markup tags",
"B) The physical data distribution",
"C) The name of the database administrator",
"D) The size of the computer monitor"
],
"answer": "B) The physical data distribution",
"explanation": "Data distribution determines how well a query performs in reality. To track this performance over time, the system relies on an evaluation engine."
},
{
"id": 28,
"context": "Because performance varies based on data distribution, the query processing system needs to track its own efficiency.",
"question": "What component keeps statistics on how queries have performed to help improve future queries?",
"options": [
"A) The evaluation engine",
"B) The OS file manager",
"C) The ER diagram",
"D) The Cobol compiler"
],
"answer": "A) The evaluation engine",
"explanation": "The evaluation engine generates statistics for the optimizer to use. While query processing retrieves data, making reliable changes to the data requires transaction management."
},
{
"id": 29,
"context": "The third and arguably most interesting major component of the database engine handles the reliable execution of complex tasks.",
"question": "What is the primary function of the transaction management component?",
"options": [
"A) Translating SQL to relational algebra",
"B) Managing operations that perform a single logical function",
"C) Creating XML tags",
"D) Allocating physical disk sectors"
],
"answer": "B) Managing operations that perform a single logical function",
"explanation": "Transactions manage collections of operations as one logical unit. A classic example of a transaction is a banking transfer."
},
{
"id": 30,
"context": "A transaction, like transferring 100 rupees to a friend, involves multiple operations including checking balances, debiting, and crediting.",
"question": "What command finalizes all the operations in a transaction so that they are permanently recorded?",
"options": [
"A) Parse",
"B) Serialize",
"C) Commit",
"D) Normalize"
],
"answer": "C) Commit",
"explanation": "The 'commit' command tells the system that the transaction is done and permanent. This transaction manager operates on top of the other database layers."
},
{
"id": 31,
"context": "The database engine builds up in three layers, starting with the storage manager and moving up to the query and transaction managers.",
"question": "What is the specific role of the middle layer, the query manager, in this architecture?",
"options": [
"A) Interacting directly with OS files",
"B) Asking specific queries or requesting specific updates",
"C) Serializing transactions",
"D) Taking XML backups"
],
"answer": "B) Asking specific queries or requesting specific updates",
"explanation": "The query manager allows users to request specific data, acting between storage and transactions. The top layer, transaction management, must also manage multi-user scenarios."
},
{
"id": 32,
"context": "When multiple people try to access or update the database simultaneously, it creates concurrency issues.",
"question": "How does the transaction manager resolve simultaneous conflicting actions, such as two users buying the same train berth?",
"options": [
"A) By allocating two berths",
"B) By deleting the database",
"C) By properly serializing the actions",
"D) By bypassing the storage manager"
],
"answer": "C) By properly serializing the actions",
"explanation": "Serialization ensures that actions occur sequentially so data isn't corrupted. Beneath these logical layers, physical sub-components manage the runtime."
},
{
"id": 33,
"context": "The storage manager uses various sub-components to bridge the gap between the file system and actual runtime execution.",
"question": "What specific sub-component must the storage manager manage between the file system and runtime execution?",
"options": [
"A) Buffers",
"B) XML schemas",
"C) Cobol tapes",
"D) Naive interfaces"
],
"answer": "A) Buffers",
"explanation": "Buffers temporarily hold data in memory during execution. Users interacting with these complex systems are categorized by their expertise, starting with naive users."
},
{
"id": 34,
"context": "Database users vary in technical skill. The simplest users do not write database code directly.",
"question": "How do 'naive users', such as someone buying potatoes on Big Bazaar, interact with the database?",
"options": [
"A) Through relational algebra",
"B) By configuring physical storage",
"C) Using an application interface",
"D) By writing SQL scripts"
],
"answer": "C) Using an application interface",
"explanation": "Naive users use simple interfaces like e-commerce portals. These portal interfaces are constructed by a more technical class of users."
},
{
"id": 35,
"context": "E-commerce portals with logic for adding items to a cart and processing payments must be coded manually.",
"question": "Who is responsible for actually writing the application interfaces and portal logic?",
"options": [
"A) Database administrators",
"B) Application programmers",
"C) Naive users",
"D) Storage managers"
],
"answer": "B) Application programmers",
"explanation": "Application programmers write the software portals that naive users interact with. For more complex queries, programmers rely on advanced experts."
},
{
"id": 36,
"context": "In massive applications, similar complex queries might run millions of times and require expert tuning.",
"question": "Which advanced users act as the 'gurus' of application programmers, building tools for frequent and complex queries?",
"options": [
"A) Analysts",
"B) Naive users",
"C) OS developers",
"D) Hardware technicians"
],
"answer": "A) Analysts",
"explanation": "Analysts look deeply into complex queries and optimize them. Above analysts in the hierarchy are the users who oversee the entire DBMS."
},
{
"id": 37,
"context": "Administering the entire database environment requires configuring storage, installation, backups, and recovery.",
"question": "Who serves as the 'supremo' of the database management system, handling overall administration?",
"options": [
"A) Application programmers",
"B) Database administrators (DBAs)",
"C) Analysts",
"D) File managers"
],
"answer": "B) Database administrators (DBAs)",
"explanation": "DBAs set up physical stores and configure database parameters. The systems DBAs manage have undergone major architectural evolution."
},
{
"id": 38,
"context": "The overall architecture of database systems has evolved through multiple stages since its inception.",
"question": "What was the initial architectural model of early databases?",
"options": [
"A) Distributed cloud computing",
"B) Client-server architecture",
"C) Centralized monolithic mainframes",
"D) Peer-to-peer unstructured networks"
],
"answer": "C) Centralized monolithic mainframes",
"explanation": "Early systems were highly centralized, with everything happening in one store. These early mainframes utilized older languages and hardware."
},
{
"id": 39,
"context": "Early monolithic mainframes relied on centralized file-based systems.",
"question": "Which programming language was prominently used as a file-based system in the earliest mainframe stage?",
"options": [
"A) SQL",
"B) XML",
"C) Cobol",
"D) NoSQL"
],
"answer": "C) Cobol",
"explanation": "Cobol was heavily used in early centralized file systems. Centralized systems were eventually replaced by a loosely coupled model."
},
{
"id": 40,
"context": "To overcome the limits of centralized mainframes, a loosely coupled architecture was developed.",
"question": "Which architecture separates the database into a server and applications into clients?",
"options": [
"A) Client-server architecture",
"B) Monolithic architecture",
"C) Centralized RDBMS",
"D) Flat file architecture"
],
"answer": "A) Client-server architecture",
"explanation": "The client-server model makes the database a server accessed by client applications. This architecture is foundational and allowed for later parallelization."
},
{
"id": 41,
"context": "Client-server architecture laid the foundation for scaling up by allowing multiple clients and servers to interact.",
"question": "What advancement followed the standard client-server model to handle more intensive workloads?",
"options": [
"A) Reverting to magnetic tapes",
"B) Parallelizing and distributing it over local and wide area networks",
"C) Removing the query processor",
"D) Banning naive users"
],
"answer": "B) Parallelizing and distributing it over local and wide area networks",
"explanation": "Parallel and distributed systems allowed the client-server model to expand across networks. This physical distribution naturally paved the way for modern Internet infrastructures."
},
{
"id": 42,
"context": "Distributing databases over wide area networks and the Internet eventually led to the modern scaling solutions we use today.",
"question": "Where are many highly distributed database systems hosted today as a result of architectural evolution?",
"options": [
"A) In Cobol mainframes",
"B) On single magnetic tapes",
"C) In the cloud",
"D) Within XML documents strictly"
],
"answer": "C) In the cloud",
"explanation": "Modern architectures allow database systems to be hosted and scaled in the cloud. This scale-out is achieved using specific architectural models."
},
{
"id": 43,
"context": "Scaling out database architectures in modern distributed systems requires specific storage handling models.",
"question": "Which models are explicitly mentioned for scaling out advanced distributed database architectures?",
"options": [
"A) Shared disk and shared nothing models",
"B) Flat and atomic models",
"C) Monolithic and centralized models",
"D) Parsing and evaluation models"
],
"answer": "A) Shared disk and shared nothing models",
"explanation": "Shared disk and shared nothing models help databases scale out across distributed hardware. While these handle structured relational data, unstructured data requires a different approach."
},
{
"id": 44,
"context": "Client-server and distributed relational models manage structured data well, but unstructured data requires a different architectural section.",
"question": "What is the primary paradigm used for architectures dealing with unstructured data?",
"options": [
"A) SQL paradigm",
"B) NoSQL paradigm",
"C) Cobol paradigm",
"D) ER mapping paradigm"
],
"answer": "B) NoSQL paradigm",
"explanation": "The NoSQL paradigm specifically addresses unstructured data architecture. Interestingly, the NoSQL paradigm draws upon some older system designs."
},
{
"id": 45,
"context": "The NoSQL paradigm has introduced very interesting architectures for unstructured databases.",
"question": "Which older type of system was surprisingly repurposed and reused within the NoSQL paradigm?",
"options": [
"A) Relational flat files",
"B) Network systems",
"C) Magnetic tapes",
"D) Evaluation engines"
],
"answer": "B) Network systems",
"explanation": "Old network systems found new life and repurposing within unstructured NoSQL databases. Understanding these unstructured systems is crucial for specific modern data roles."
},
{
"id": 46,
"context": "Familiarity with various database architectures, including NoSQL and unstructured databases, is highly beneficial for modern tech careers.",
"question": "For which specific expert role is knowledge of unstructured databases and the NoSQL paradigm noted as being particularly good to know?",
"options": [
"A) Front-end application programmer",
"B) Expert data scientist",
"C) Hardware network router",
"D) Naive user"
],
"answer": "B) Expert data scientist",
"explanation": "Data scientists benefit greatly from understanding NoSQL unstructured databases. Having covered these paradigms, the instructor concludes the module's discussion."
},
{
"id": 47,
"context": "Module 5 concludes after explaining database roles, architectures, and models.",
"question": "Which set of users is explicitly stated as not needing further explanation at the end of the module because they were already covered?",
"options": [
"A) Database users and administrators",
"B) Unstructured data analysts",
"C) Cloud network operators",
"D) Cobol programmers"
],
"answer": "A) Database users and administrators",
"explanation": "The instructor skips further explanation of database users and administrators because they were explained earlier. This leads into the module's final summary."
},
{
"id": 48,
"context": "At the conclusion of the lecture, the instructor provides a summary of the topics introduced.",
"question": "What were the major technical components of the database that the instructor familiarized the students with during the module?",
"options": [
"A) The UI design components",
"B) The major components of the database engine",
"C) The OS file system components only",
"D) The XML schema components only"
],
"answer": "B) The major components of the database engine",
"explanation": "The module successfully familiarized students with the database engine components. The summary also included an overview of database structures."
},
{
"id": 49,
"context": "The final remarks of the lecture encapsulate the broad overview of how database systems are physically and logically built.",
"question": "Besides models and engine components, what else did the instructor provide a little bit of an overview on?",
"options": [
"A) Front-end JavaScript frameworks",
"B) The architecture that a database system might have",
"C) The mathematical proofs of relational algebra",
"D) Machine learning algorithms"
],
"answer": "B) The architecture that a database system might have",
"explanation": "An overview of database architectures was a key concluding point of the module. With this overview complete, the instructor signals the end of the current lecture block."
},
{
"id": 50,
"context": "The instructor officially signs off from the current session after summarizing models, engine components, and architectures.",
"question": "When will the instructor see the students next following the conclusion of Module 5?",
"options": [
"A) In the next semester",
"B) In Module 6 next week",
"C) In the database administration lab",
"D) In Module 4 tomorrow"
],
"answer": "B) In Module 6 next week",
"explanation": "The instructor states they will see the students in Module 6 next week, completing the sequence for Module 5."
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
