// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════
const QUESTIONS =
[
  {
    "id": 1,
    "type": "mcq",
    "context": "Welcome to the foundations of relational query languages. Our journey starts in the late 70s at IBM's San Jose Research Laboratory with the System R project. A new language was developed to interact with relational databases.",
    "question": "What was the original name of the query language developed by IBM before it was renamed to SQL?",
    "options": [
      "A) QUEL",
      "B) SPARQL",
      "C) SEQUEL",
      "D) DML"
    ],
    "answer": "C) SEQUEL",
    "explanation": "It started as Structured English Query Language (SEQUEL) before being shortened to SQL. Understanding its origins leads us to its core functionality: defining and manipulating data."
  },
  {
    "id": 2,
    "type": "mcq",
    "context": "As SEQUEL evolved into SQL, it retained the ability to handle the two major parts of database management: defining the structure and manipulating the records within.",
    "question": "Which two language components does SQL natively combine?",
    "options": [
      "A) HTML and XML",
      "B) Data Definition Language (DDL) and Data Manipulation Language (DML)",
      "C) Relational Calculus and Relational Algebra",
      "D) Procedural and Object-Oriented syntax"
    ],
    "answer": "B) Data Definition Language (DDL) and Data Manipulation Language (DML)",
    "explanation": "SQL can do both DDL (schema creation) and DML (querying). To ensure consistency across different database systems, SQL had to undergo a rigorous standardization process."
  },
  {
    "id": 3,
    "type": "mcq",
    "context": "Because every globally used language needs standardization, efforts began with ANSI in 1986. However, a major milestone was reached a few years later with an international standard that most commercial databases still comply with today.",
    "question": "Which version of SQL represents the first major ISO international standard (ISO 9075)?",
    "options": [
      "A) SQL-86",
      "B) SQL-89",
      "C) SQL-92",
      "D) SQL-1999"
    ],
    "answer": "C) SQL-92",
    "explanation": "SQL-92 was a landmark release establishing the de facto industry standard. As the new millennium approached, the language required advanced programmatic features."
  },
  {
    "id": 4,
    "type": "mcq",
    "context": "Getting close to the year 2000, database requirements grew beyond simple queries. Developers needed transitive closures, regular expressions, and ways to integrate SQL tightly with modern programming languages.",
    "question": "What major feature was added in the SQL-1999 standard?",
    "options": [
      "A) Basic Cartesian Products",
      "B) XML integration",
      "C) Formal embedding mechanisms for Java (SQLJ/JDBC) and procedural triggers",
      "D) The initial DDL syntax"
    ],
    "answer": "C) Formal embedding mechanisms for Java (SQLJ/JDBC) and procedural triggers",
    "explanation": "SQL-1999 brought procedural controls, arrays, and Java embedding. Shortly after, the rise of web data exchange formats necessitated another update."
  },
  {
    "id": 5,
    "type": "mcq",
    "context": "In the early 2000s, a specific data format became the standard for Information Interchange across the web. The SQL committee recognized this and added robust support for importing, storing, and manipulating it.",
    "question": "Which standard data format was integrated into SQL starting in the 2003 release?",
    "options": [
      "A) JSON",
      "B) XML",
      "C) CSV",
      "D) RDF"
    ],
    "answer": "B) XML",
    "explanation": "XML functionality was added in 2003 and expanded in 2006. While SQL dominates relational systems, some alternative systems like graph databases require a different query approach."
  },
  {
    "id": 6,
    "type": "mcq",
    "context": "Though SQL practically has no alternatives in the relational database domain, other data structures like Resource Description Framework (RDF) triple stores required a specialized language.",
    "question": "Which query language serves as the de facto standard for querying RDF and graph databases?",
    "options": [
      "A) QUEL",
      "B) SPARQL",
      "C) Lisp",
      "D) Scala"
    ],
    "answer": "B) SPARQL",
    "explanation": "SPARQL handles graph databases efficiently. Returning our focus strictly to relational SQL, our first technical step is defining the structural blueprint of the database."
  },
  {
    "id": 7,
    "type": "mcq",
    "context": "Before storing a single record, a database must understand the framework it is holding. This relies heavily on the Data Definition Language (DDL) subset of SQL.",
    "question": "What is the primary role of Data Definition Language (DDL)?",
    "options": [
      "A) To retrieve user data securely",
      "B) To define the schema, relations, domain of attributes, and integrity constraints",
      "C) To loop through arrays and complex structures",
      "D) To execute Cartesian products"
    ],
    "answer": "B) To define the schema, relations, domain of attributes, and integrity constraints",
    "explanation": "DDL dictates the schema and constraints. A core part of defining attributes is accurately specifying the type of data they will hold."
  },
  {
    "id": 8,
    "type": "mcq",
    "context": "When defining text attributes, database administrators must choose how to allocate storage. SQL offers both fixed and variable character types.",
    "question": "What is the difference between 'char(n)' and 'varchar(n)'?",
    "options": [
      "A) char is for numbers; varchar is for text",
      "B) char is a fixed-length field; varchar is a variable-length field up to a maximum",
      "C) char allows nulls; varchar does not",
      "D) char is case-sensitive; varchar is not"
    ],
    "answer": "B) char is a fixed-length field; varchar is a variable-length field up to a maximum",
    "explanation": "char(n) enforces exactly n characters, padding if necessary, while varchar(n) only uses as much space as the string requires up to n. Let's write these types out."
  },
  {
    "id": 9,
    "type": "type-in",
    "context": "Imagine you are defining a column for a country's ISO alpha-3 code (like 'USA' or 'GBR'), which always requires exactly 3 letters.",
    "question": "Write the exact SQL data type declaration for a fixed-length string of exactly 3 characters. (Hint: use the term 'char')",
    "answer": "char(3)",
    "explanation": "char(3) creates a strict 3-character field. Next, consider attributes where the text length fluctuates."
  },
  {
    "id": 10,
    "type": "type-in",
    "context": "For a user's first name, the length can vary greatly. You want to allow up to 50 characters, but not force short names to be padded with empty spaces.",
    "question": "Write the exact SQL data type declaration for a variable-length string that can hold up to 50 characters.",
    "answer": "varchar(50)",
    "explanation": "varchar(50) perfectly handles variable text. Aside from strings, numbers must also be defined precisely."
  },
  {
    "id": 11,
    "type": "mcq",
    "context": "Financial data requires exact precision. While floating-point types exist, SQL provides a 'numeric' type where the administrator explicitly declares the scale and precision.",
    "question": "In the declaration 'numeric(10, 2)', what does the '10' represent?",
    "options": [
      "A) The number of digits after the decimal point",
      "B) The maximum allowable value (10.00)",
      "C) The total maximum number of digits allowed, both before and after the decimal point",
      "D) The minimum required digits"
    ],
    "answer": "C) The total maximum number of digits allowed, both before and after the decimal point",
    "explanation": "The first number is total digits, the second is digits after the decimal. Let's apply this syntax."
  },
  {
    "id": 12,
    "type": "type-in",
    "context": "You are creating a 'salary' column. The maximum salary could be 999999.99, meaning there are 8 digits in total, with 2 of them representing the cents.",
    "question": "Write the exact SQL data type declaration for a numeric value with 8 total digits and 2 decimal places.",
    "answer": "numeric(8,2)",
    "explanation": "numeric(8,2) is perfect for this financial field. Once data types are set, we must enforce logical rules on the data, known as integrity constraints."
  },
  {
    "id": 13,
    "type": "mcq",
    "context": "Data types define what the data looks like, but integrity constraints dictate what rules the data must follow to maintain a logical database.",
    "question": "Which of the following is an example of an integrity constraint specified during DDL?",
    "options": [
      "A) SELECT *",
      "B) primary key",
      "C) varchar(10)",
      "D) drop table"
    ],
    "answer": "B) primary key",
    "explanation": "A primary key constraint enforces uniqueness. The primary key has a unique secondary behavior regarding empty data."
  },
  {
    "id": 14,
    "type": "mcq",
    "context": "To uniquely identify a record, a primary key must never be identical to another record's key. Logically, this also affects its ability to accept empty values.",
    "question": "By default, what implicit constraint is applied to an attribute the moment it is declared as a primary key?",
    "options": [
      "A) foreign key",
      "B) numeric",
      "C) not null",
      "D) varchar"
    ],
    "answer": "C) not null",
    "explanation": "A primary key cannot be null because nulls cannot be uniquely compared. Let's declare a primary key."
  },
  {
    "id": 15,
    "type": "type-in",
    "context": "You are defining an 'ID' column and want to designate it as the main unique identifier for the table.",
    "question": "Write the exact constraint declaration to set the column 'ID' as the primary key. (Hint: put the attribute name inside parentheses)",
    "answer": "primary key (ID)",
    "explanation": "Declaring 'primary key (ID)' secures uniqueness. However, tables often need to connect to other tables."
  },
  {
    "id": 16,
    "type": "mcq",
    "context": "In a relational database, tables rarely exist in isolation. They refer to each other. For example, an instructor's department name must exist in the actual department table.",
    "question": "What constraint ensures that a value in one table corresponds to a valid, existing record in another table?",
    "options": [
      "A) not null",
      "B) distinct",
      "C) foreign key references",
      "D) Cartesian product"
    ],
    "answer": "C) foreign key references",
    "explanation": "A foreign key guarantees referential integrity. Let's write the code to establish this link."
  },
  {
    "id": 17,
    "type": "type-in",
    "context": "You want the 'dept_name' column in your current table to strictly match an existing department in the 'department' table.",
    "question": "Write the exact constraint phrase to link 'dept_name' to the 'department' table. (Hint: use the syntax 'foreign key (...) references ...')",
    "answer": "foreign key (dept_name) references department",
    "explanation": "This securely links the tables. Finally, there are fields that aren't primary keys but still shouldn't be left empty."
  },
  {
    "id": 18,
    "type": "mcq",
    "context": "An instructor must have a name to be logically meaningful in the system, even if the name isn't the primary key.",
    "question": "Which constraint explicitly prevents a tuple from being inserted if a specific attribute is missing a value?",
    "options": [
      "A) default",
      "B) numeric",
      "C) not null",
      "D) distinct"
    ],
    "answer": "C) not null",
    "explanation": "The 'not null' constraint rejects empty submissions. Let's apply it."
  },
  {
    "id": 19,
    "type": "type-in",
    "context": "You are defining the 'name' attribute and want to ensure no one is entered into the database without a name.",
    "question": "Write the exact SQL constraint keyword(s) used to prevent empty values in a column.",
    "answer": "not null",
    "explanation": "Appending 'not null' secures the requirement. Sometimes, despite best efforts, a schema needs to be altered after it is created."
  },
  {
    "id": 20,
    "type": "mcq",
    "context": "Database requirements change. You may need to add a 'birth_date' column or drop an old column without destroying the entire table.",
    "question": "Which DDL command is used to edit the structure of an existing schema (e.g., adding or dropping attributes)?",
    "options": [
      "A) ALTER TABLE",
      "B) DROP TABLE",
      "C) UPDATE",
      "D) SELECT"
    ],
    "answer": "A) ALTER TABLE",
    "explanation": "ALTER TABLE edits the schema. When a new column is added, existing rows face an interesting dilemma."
  },
  {
    "id": 21,
    "type": "mcq",
    "context": "When you use ALTER TABLE to add a brand-new attribute to a table containing a thousand records, those old records don't immediately have data for the new column.",
    "question": "What value do existing tuples automatically take for a newly added attribute?",
    "options": [
      "A) Zero",
      "B) An empty string",
      "C) Null",
      "D) They are deleted"
    ],
    "answer": "C) Null",
    "explanation": "They take a Null value because the data doesn't exist yet. Sometimes editing isn't enough; you might need to erase data entirely."
  },
  {
    "id": 22,
    "type": "mcq",
    "context": "There is a distinct difference between clearing the contents of a table and destroying the table's structural definition itself.",
    "question": "Which command removes all rows from a table but leaves the schema completely intact so you can insert new data later?",
    "options": [
      "A) DROP TABLE",
      "B) DELETE FROM",
      "C) ALTER TABLE",
      "D) SELECT DISTINCT"
    ],
    "answer": "B) DELETE FROM",
    "explanation": "DELETE FROM removes the data (tuples). Let's write the command to perform this wipe."
  },
  {
    "id": 23,
    "type": "type-in",
    "context": "The 'students' table was populated with test data that now needs to be cleared, but the table structure must remain for production use.",
    "question": "Write the exact SQL command to remove all tuples from the 'students' table.",
    "answer": "delete from students",
    "explanation": "The table is now empty but still exists. Conversely, if the schema itself is obsolete, we must destroy it."
  },
  {
    "id": 24,
    "type": "type-in",
    "context": "The university is moving to a new system and the 'students' table is no longer needed in the data dictionary.",
    "question": "Write the exact SQL command to entirely discard the 'students' table and its structure from the database.",
    "answer": "drop table students",
    "explanation": "DROP TABLE entirely removes the schema. With data definition and structural changes covered, we move to retrieving data: Data Manipulation Language (DML)."
  },
  {
    "id": 25,
    "type": "mcq",
    "context": "The heart of SQL is querying. Retrieving data is structured around three foundational clauses that work together.",
    "question": "What is the basic foundational structure of an SQL data retrieval query?",
    "options": [
      "A) insert - update - delete",
      "B) select - from - where",
      "C) create - alter - drop",
      "D) try - catch - finally"
    ],
    "answer": "B) select - from - where",
    "explanation": "Select, from, and where form the core DML block. Let's analyze the first component: SELECT."
  },
  {
    "id": 26,
    "type": "mcq",
    "context": "The SELECT clause dictates exactly which columns will appear in your final result set.",
    "question": "In terms of relational algebra, what operation does the SELECT clause represent?",
    "options": [
      "A) Selection",
      "B) Projection",
      "C) Cartesian Product",
      "D) Transitive Closure"
    ],
    "answer": "B) Projection",
    "explanation": "SELECT represents projection (picking columns). Interestingly, SQL's implementation of projection has a specific mathematical deviation."
  },
  {
    "id": 27,
    "type": "mcq",
    "context": "In pure relational algebra (set theory), a set cannot contain duplicate elements. However, SQL query results can.",
    "question": "How does SQL handle duplicate tuples in a query result by default?",
    "options": [
      "A) It throws a compile error.",
      "B) It automatically removes them.",
      "C) It allows them unless explicitly told not to.",
      "D) It moves them to a temporary table."
    ],
    "answer": "C) It allows them unless explicitly told not to.",
    "explanation": "SQL allows duplicates for performance reasons. To enforce pure set behavior, we must use a specific keyword."
  },
  {
    "id": 28,
    "type": "type-in",
    "context": "You are generating a report of all department names from the instructor table, but you don't want 'Computer Science' to show up 50 times.",
    "question": "Write the exact SELECT clause to project only the unique, non-duplicated values of the 'dept_name' attribute. (Hint: use two keywords before the attribute)",
    "answer": "select distinct dept_name",
    "explanation": "SELECT DISTINCT removes the duplicates. Now, where are these columns coming from? That is the role of the FROM clause."
  },
  {
    "id": 29,
    "type": "mcq",
    "context": "The FROM clause dictates the scope of the query by listing the tables. When multiple tables are listed, SQL attempts to combine them.",
    "question": "What operation does SQL perform by default if multiple tables are listed in the FROM clause without any filtering?",
    "options": [
      "A) A Union",
      "B) An Intersection",
      "C) A Cartesian Product",
      "D) A Left Outer Join"
    ],
    "answer": "C) A Cartesian Product",
    "explanation": "It creates a Cartesian Product—every possible combination of rows. Let's write a query that generates one."
  },
  {
    "id": 30,
    "type": "type-in",
    "context": "You want to see every possible mathematical combination between the records in the 'instructor' table and the 'teaches' table.",
    "question": "Write the query to select all attributes (using the wildcard) from both the 'instructor' and 'teaches' tables. (Hint: list the tables separated by a comma)",
    "answer": "select * from instructor, teaches",
    "explanation": "This outputs a massive, unfiltered grid. To make Cartesian products meaningful, we require a filtering condition, leading us to our real-world scenario."
  },
  {
    "id": 31,
    "type": "mcq",
    "context": "Scenario Phase 1: Database Setup.\nYou are hired as the DBA for a new university. Your first task is to set up the 'instructor' table from scratch so professors can be registered.\n\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Which language subset must you use to build this table structure?",
    "options": [
      "A) DML",
      "B) XML",
      "C) DDL",
      "D) HTML"
    ],
    "answer": "C) DDL",
    "explanation": "DDL is used for schema creation. We will now execute the schema creation step-by-step."
  },
  {
    "id": 32,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]\n\nLet's start by initiating the table block.",
    "question": "Write the exact SQL command to initiate the creation of a table named 'instructor', omitting any parentheses or column definitions for now.",
    "answer": "create table instructor",
    "explanation": "The table creation block is open. Now we must define the first attribute: the identifier."
  },
  {
    "id": 33,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]\n\nInside the table definition, we need an ID column.",
    "question": "Write the attribute definition for 'ID' ensuring it is a fixed string exactly 5 characters long. (Do not include commas)",
    "answer": "ID char(5)",
    "explanation": "The ID is defined. Next, we need the professor's name, which is mandatory."
  },
  {
    "id": 34,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Write the attribute definition for 'name', allowing up to 20 variable characters, and enforce that it cannot be left empty. (Do not include commas)",
    "answer": "name varchar(20) not null",
    "explanation": "The name attribute is secure. Now for the department association."
  },
  {
    "id": 35,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Write the attribute definition for 'dept_name', allowing up to 20 variable characters. (Do not include commas)",
    "answer": "dept_name varchar(20)",
    "explanation": "Department name is set. Now we need to define their compensation."
  },
  {
    "id": 36,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Write the attribute definition for 'salary' as a numeric type with an 8-digit total precision and 2 decimal places. (Do not include commas)",
    "answer": "salary numeric(8,2)",
    "explanation": "Attributes are done! Now we declare the integrity constraints, starting with the primary key."
  },
  {
    "id": 37,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Write the constraint declaration making the 'ID' attribute the primary key. (Hint: use parentheses)",
    "answer": "primary key (ID)",
    "explanation": "Uniqueness is secured. Finally, link the department string to the actual department table."
  },
  {
    "id": 38,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5, PK), name (varchar 20, not null), dept_name (varchar 20, FK), salary (numeric 8,2)]",
    "question": "Write the constraint declaration making 'dept_name' a foreign key referencing the 'department' table. (Hint: use parentheses around dept_name)",
    "answer": "foreign key (dept_name) references department",
    "explanation": "The table schema is fully built! But a mistake happened during script execution."
  },
  {
    "id": 39,
    "type": "mcq",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5), name (varchar 20), dept_name (varchar 20), salary (numeric 8,2)]\n\nYou accidentally ran the creation script on the legacy database server instead of the new one. The empty table structure is sitting in the wrong environment.",
    "question": "What is the fastest way to completely eliminate this erroneous schema from the legacy dictionary?",
    "options": [
      "A) DELETE FROM",
      "B) ALTER TABLE",
      "C) DROP TABLE",
      "D) SELECT DISTINCT"
    ],
    "answer": "C) DROP TABLE",
    "explanation": "DROP TABLE eliminates the schema completely. Let's run it."
  },
  {
    "id": 40,
    "type": "type-in",
    "context": "Scenario Phase 1: Database Setup.\nTarget Schema for 'instructor': [ID (char 5), name (varchar 20), dept_name (varchar 20), salary (numeric 8,2)]\n\nYou need to erase your mistake.",
    "question": "Write the exact SQL command to completely discard the 'instructor' table from the schema.",
    "answer": "drop table instructor",
    "explanation": "The legacy server is clean. You successfully rebuild the table on the new server, and data is inserted. Time to fetch it."
  },
  {
    "id": 41,
    "type": "mcq",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |\n\nThe dean requests an overview. To pull this, you must construct a query block. Which clause dictates the specific relation/table you are pulling from?",
    "question": "Which SQL clause identifies the data source?",
    "options": [
      "A) SELECT",
      "B) WHERE",
      "C) FROM",
      "D) DISTINCT"
    ],
    "answer": "C) FROM",
    "explanation": "The FROM clause sets the target table. Let's construct a basic query to pull everything."
  },
  {
    "id": 42,
    "type": "type-in",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |",
    "question": "Write the SQL command to retrieve all attributes for all rows from the 'instructor' table. (Hint: use the wildcard character)",
    "answer": "select * from instructor",
    "explanation": "You've printed the entire table! However, the dean complains there is too much data and only wants a list of names."
  },
  {
    "id": 43,
    "type": "mcq",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |\n\nWe need to trim the width of our output. What relational operation are we performing by restricting the query to a single column?",
    "question": "What is the technical term for limiting the query output to specific attributes?",
    "options": [
      "A) Selection",
      "B) Projection",
      "C) Constraints",
      "D) Intersection"
    ],
    "answer": "B) Projection",
    "explanation": "We project the desired column using the SELECT clause."
  },
  {
    "id": 44,
    "type": "type-in",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |",
    "question": "Write the SQL query to project ONLY the 'name' column from the 'instructor' table.",
    "answer": "select name from instructor",
    "explanation": "You now have a clean list of 4 names. Next, the dean wants a list of the departments currently staffed by these instructors."
  },
  {
    "id": 45,
    "type": "mcq",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |\n\nIf you simply 'select dept_name', the output will be: 'Computer Science', 'Finance', 'History', 'Computer Science'.",
    "question": "Why does 'Computer Science' appear twice in a standard SQL projection?",
    "options": [
      "A) Because it is a foreign key",
      "B) Because SQL allows duplicates by default",
      "C) Because the database is corrupted",
      "D) Because it is a primary key"
    ],
    "answer": "B) Because SQL allows duplicates by default",
    "explanation": "SQL doesn't automatically filter duplicates. We must force it to act like a true mathematical set."
  },
  {
    "id": 46,
    "type": "type-in",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |",
    "question": "Write the complete SQL query to retrieve only the unique 'dept_name' values from the 'instructor' table.",
    "answer": "select distinct dept_name from instructor",
    "explanation": "Now the output is just 'Computer Science', 'Finance', 'History'. The dean is pleased. Now he wants to focus just on the Computer Science faculty."
  },
  {
    "id": 47,
    "type": "mcq",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |\n\nTo see only Computer Science faculty, we need to filter the rows vertically, rather than just projecting columns horizontally.",
    "question": "Which SQL clause evaluates a Boolean condition to act as a selection predicate?",
    "options": [
      "A) SELECT",
      "B) FROM",
      "C) DISTINCT",
      "D) WHERE"
    ],
    "answer": "D) WHERE",
    "explanation": "The WHERE clause filters rows based on a true/false condition. Let's write the condition."
  },
  {
    "id": 48,
    "type": "type-in",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |",
    "question": "Write the complete SQL query to select the 'name' from the 'instructor' table where the 'dept_name' is exactly equal to the string literal 'Computer Science'. (Use single quotes for the literal)",
    "answer": "select name from instructor where dept_name = 'Computer Science'",
    "explanation": "The output successfully returns 'Srinivasan' and 'Katz'. Finally, the payroll department calls with an urgent request."
  },
  {
    "id": 49,
    "type": "mcq",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |\n\nPayroll needs a list of names alongside their monthly salary projection. The stored 'salary' is annual.",
    "question": "Does SQL allow mathematical arithmetic directly in the SELECT projection list?",
    "options": [
      "A) No, data must be exported and calculated in a language like Python.",
      "B) Yes, you can perform inline arithmetic operations.",
      "C) Yes, but only in the WHERE clause.",
      "D) No, mathematical operations require the ALTER TABLE command."
    ],
    "answer": "B) Yes, you can perform inline arithmetic operations.",
    "explanation": "SQL seamlessly calculates data on the fly within the projection. Let's solve this final problem."
  },
  {
    "id": 50,
    "type": "type-in",
    "context": "Scenario Phase 2: Querying the Database.\n\nCurrent Table 'instructor':\n| ID | name | dept_name | salary |\n|---|---|---|---|\n| 10101 | Srinivasan | Computer Science | 65000.00 |\n| 12121 | Wu | Finance | 90000.00 |\n| 32343 | El Said | History | 60000.00 |\n| 45565 | Katz | Computer Science | 75000.00 |",
    "question": "Write the complete SQL query to project the 'name' and the calculated monthly salary (using the expression 'salary / 12') from the 'instructor' table.",
    "answer": "select name, salary / 12 from instructor",
    "explanation": "You've successfully retrieved the calculated monthly salaries for the payroll department! You've mastered basic DDL table creation and fundamental DML queries."
  }
]

//  STATE
// ══════════════════════════════════════════════
let state = {
  phase: 'context',   // context | question | explanation | final
  qIdx: 0,
  selected: null,     // for mcq: the chosen option string
  typedAnswer: '',    // for type-in
  answered: [],       // {correct, chosen}
  correctCount: 0,
  wrongCount: 0,
};
 
// ══════════════════════════════════════════════
//  UTILITY
// ══════════════════════════════════════════════
function normalizeAnswer(s) {
  return String(s)
    .replace(/\s+/g, '')
    .toLowerCase()
    .replace(/;$/, '');
}
 
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
 
function renderInline(text) {
  return escapeHtml(text)
    .replace(/\$\$(.+?)\$\$/gs, '$$$$$$1$$$$')
    .replace(/\$([^$\n]+?)\$/g, '\\($1\\)');
}
 
function renderCode(text) {
  return text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="sf-code">${escapeHtml(code.trim())}</pre>`;
  });
}
 
// Render markdown-style tables (| col | col | rows)
function renderMarkdownTable(text) {
  const lines = text.split('\n');
  let result = '';
  let inTable = false;
  let tableLines = [];
  const flushTable = () => {
    if (tableLines.length < 2) { result += tableLines.join('\n') + '\n'; tableLines = []; return; }
    const parseRow = l => l.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
    const headers = parseRow(tableLines[0]);
    // skip separator line (line 1)
    const rows = tableLines.slice(2).map(parseRow);
    let t = `<div class="sf-table-wrap"><table class="sf-table"><thead><tr>`;
    headers.forEach(h => { t += `<th>${escapeHtml(h)}</th>`; });
    t += `</tr></thead><tbody>`;
    rows.forEach(row => {
      t += `<tr>${row.map(v => `<td>${escapeHtml(v)}</td>`).join('')}</tr>`;
    });
    t += `</tbody></table></div>`;
    result += t;
    tableLines = [];
  };
  lines.forEach(line => {
    if (/^\s*\|/.test(line)) {
      tableLines.push(line);
    } else {
      if (tableLines.length) flushTable();
      result += line + '\n';
    }
  });
  if (tableLines.length) flushTable();
  return result;
}
 
function processContent(text) {
  if (!text) return '';
  text = renderCode(text);
  text = renderMarkdownTable(text);
  return text.split('\n').map(line => {
    if (line.startsWith('<')) return line;
    return line.trim() ? `<p>${renderInline(line)}</p>` : '';
  }).join('');
}
 
function renderMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([document.getElementById('sf-card')]).catch(() => {});
  }
}
 
// ══════════════════════════════════════════════
//  SCORE / HEADER
// ══════════════════════════════════════════════
function updateHeader() {
  const answered = state.answered.length;
  const c = state.correctCount;
  document.getElementById('sc-correct').textContent = c;
  document.getElementById('sc-total').textContent = answered;
  document.getElementById('sc-acc').textContent = answered ? Math.round(c / answered * 100) + '%' : '—%';
  const pct = state.qIdx / QUESTIONS.length * 100;
  document.getElementById('sf-progress').style.width = pct + '%';
  document.getElementById('sf-prog-text').textContent = `${state.qIdx} / ${QUESTIONS.length}`;
}
 
// ══════════════════════════════════════════════
//  PHASE RENDERERS
// ══════════════════════════════════════════════
function renderContext() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  const alreadyAnswered = state.answered[state.qIdx] != null;
  const typeBadge = q.type === 'type-in'
    ? `<span class="sf-type-badge typein">⌨ TYPE-IN</span>`
    : `<span class="sf-type-badge mcq">◉ MCQ</span>`;
 
  card.innerHTML = `
    <div class="sf-context-badge">
      CONCEPT ${state.qIdx + 1} / ${QUESTIONS.length}
      ${alreadyAnswered ? ' · <span style="color:var(--sf-text-muted)">REVIEWED</span>' : ''}
    </div>
    <div class="sf-label">Context</div>
    <div style="margin-bottom:12px;">${typeBadge}</div>
    <div class="sf-content">${processContent(q.context)}</div>
    <p class="sf-next-hint" style="margin-top:auto;padding-top:12px;">
      ${alreadyAnswered
        ? 'Already answered. Press <kbd class="sf-kb-key">Enter</kbd> or click Review to see your result.'
        : 'Press <kbd class="sf-kb-key">Enter</kbd> or click Continue to answer the question.'
      }
    </p>
    <div class="sf-actions" style="margin-top:14px;">
      ${state.qIdx > 0 ? '<button class="sf-action sf-action-secondary" id="btn-prev" tabindex="0">◀ PREV</button>' : ''}
      <button class="sf-action" id="btn-ctx-next" tabindex="0">
        ${alreadyAnswered ? 'REVIEW ▶' : 'CONTINUE ▶'}
      </button>
    </div>`;
 
  renderMath();
  document.getElementById('btn-ctx-next').focus();
  document.getElementById('btn-ctx-next').addEventListener('click', () => {
    if (alreadyAnswered) renderReview(state.qIdx);
    else goPhase('question');
  });
  document.getElementById('btn-prev')?.addEventListener('click', prevQuestion);
}
 
function renderQuestion() {
  if (guardQuestion()) return;
  const q = QUESTIONS[state.qIdx];
  if (q.type === 'type-in') renderTypeIn();
  else renderMCQ();
}
 
// ── MCQ ──
function renderMCQ() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  const optHtml = q.options.map((opt, i) => `
    <li>
      <button class="sf-opt-btn" data-opt="${escapeHtml(opt)}" tabindex="0">
        <span class="sf-key-hint">${i + 1}</span> ${renderInline(opt)}
      </button>
    </li>`).join('');
 
  card.innerHTML = `
    <div class="sf-label">Question ${state.qIdx + 1} <span style="color:var(--sf-text-muted);font-size:9px;margin-left:8px;">MCQ</span></div>
    <div class="sf-content">${processContent(q.question)}</div>
    <ul class="sf-options" id="sf-opts">${optHtml}</ul>
    <div class="sf-actions">
      <button class="sf-action sf-action-secondary" id="btn-skip" tabindex="0">SKIP</button>
      <button class="sf-action" id="btn-submit" disabled tabindex="0">SUBMIT ▶</button>
    </div>`;
 
  renderMath();
  card.querySelectorAll('.sf-opt-btn')[0]?.focus();
  card.querySelectorAll('.sf-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => selectOption(btn.dataset.opt));
  });
  document.getElementById('btn-submit').addEventListener('click', submitMCQ);
  document.getElementById('btn-skip').addEventListener('click', () => {
    state.answered.push({ correct: false, chosen: '—' });
    advanceQuestion();
  });
}
 
function selectOption(opt) {
  state.selected = opt;
  document.querySelectorAll('.sf-opt-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.opt === opt);
  });
  document.getElementById('btn-submit').disabled = false;
}
 
function submitMCQ() {
  const q = QUESTIONS[state.qIdx];
  const correct = state.selected === q.answer;
  state.answered.push({ correct, chosen: state.selected });
  if (correct) state.correctCount++; else state.wrongCount++;
  updateHeader();
  revealMCQ(correct);
}
 
function revealMCQ(correct) {
  state.phase = 'explanation';
  const q = QUESTIONS[state.qIdx];
  document.querySelectorAll('.sf-opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.opt === q.answer) btn.classList.add('correct-reveal');
    else if (btn.dataset.opt === state.selected) btn.classList.add('wrong-reveal');
  });
  injectFeedbackAndExplanation(correct, q.answer);
}
 
// ── TYPE-IN ──
function renderTypeIn() {
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  card.innerHTML = `
    <div class="sf-label">Question ${state.qIdx + 1} <span style="color:var(--sf-text-muted);font-size:9px;margin-left:8px;">TYPE-IN</span></div>
    <div class="sf-content">${processContent(q.question)}</div>
    <div class="sf-typein-wrap">
      <span class="sf-typein-label">▸ Your answer</span>
      <textarea class="sf-typein" id="sf-typein-input" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type your SQL here..."></textarea>
    </div>
    <div class="sf-actions">
      <button class="sf-action sf-action-secondary" id="btn-skip" tabindex="0">SKIP</button>
      <button class="sf-action" id="btn-submit" tabindex="0">SUBMIT ▶</button>
    </div>`;
 
  renderMath();
  const input = document.getElementById('sf-typein-input');
  input.focus();
 
  // Enable submit always for type-in (allow empty submission to be marked wrong)
  document.getElementById('btn-submit').addEventListener('click', submitTypeIn);
  document.getElementById('btn-skip').addEventListener('click', () => {
    state.answered.push({ correct: false, chosen: '—' });
    advanceQuestion();
  });
}
 
function submitTypeIn() {
  const q = QUESTIONS[state.qIdx];
  const input = document.getElementById('sf-typein-input');
  const userVal = input ? input.value : '';
  const correct = normalizeAnswer(userVal) === normalizeAnswer(q.answer);
  state.answered.push({ correct, chosen: userVal });
  if (correct) state.correctCount++; else state.wrongCount++;
  updateHeader();
  revealTypeIn(correct, userVal, q.answer);
}
 
function revealTypeIn(correct, userVal, correctAnswer) {
  state.phase = 'explanation';
  const q = QUESTIONS[state.qIdx];
  const input = document.getElementById('sf-typein-input');
  if (input) {
    input.disabled = true;
    input.classList.add(correct ? 'correct-reveal' : 'wrong-reveal');
  }
 
  const correctAnswerHtml = !correct
    ? `<div class="sf-correct-answer">
        <span class="lbl">Correct answer</span>
        <code>${escapeHtml(correctAnswer)}</code>
       </div>`
    : '';
 
  const actions = document.querySelector('.sf-actions');
  const fb = document.createElement('div');
  fb.className = 'sf-feedback ' + (correct ? 'ok' : 'fail');
  fb.textContent = correct ? '✓ CORRECT' : '✗ INCORRECT';
  actions.before(fb);
 
  if (correctAnswerHtml) {
    const caDiv = document.createElement('div');
    caDiv.innerHTML = correctAnswerHtml;
    fb.after(caDiv.firstElementChild);
  }
 
  const expl = document.createElement('div');
  expl.className = 'sf-explanation';
  expl.innerHTML = processContent(q.explanation);
  // insert after correct-answer div if present, else after fb
  const caEl = document.querySelector('.sf-correct-answer');
  (caEl || fb).after(expl);
 
  swapToNextActions();
  renderMath();
}
 
// ── SHARED: inject feedback for MCQ ──
function injectFeedbackAndExplanation(correct, correctAnswer) {
  const q = QUESTIONS[state.qIdx];
  const actions = document.querySelector('.sf-actions');
 
  const fb = document.createElement('div');
  fb.className = 'sf-feedback ' + (correct ? 'ok' : 'fail');
  fb.textContent = correct ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${correctAnswer}`;
  actions.before(fb);
 
  const expl = document.createElement('div');
  expl.className = 'sf-explanation';
  expl.innerHTML = processContent(q.explanation);
  fb.after(expl);
 
  if (q.application) {
    const app = document.createElement('div');
    app.className = 'sf-application';
    app.innerHTML = `<strong>▸ APPLICATION</strong> — ${processContent(q.application)}`;
    expl.after(app);
  }
 
  swapToNextActions();
  renderMath();
}
 
function swapToNextActions() {
  const actions = document.querySelector('.sf-actions');
  actions.innerHTML = '';
  if (state.qIdx < QUESTIONS.length - 1) {
    const btn = document.createElement('button');
    btn.className = 'sf-action';
    btn.textContent = 'NEXT ▶';
    btn.tabIndex = 0;
    btn.addEventListener('click', advanceQuestion);
    actions.appendChild(btn);
    btn.focus();
  } else {
    const btn = document.createElement('button');
    btn.className = 'sf-action';
    btn.textContent = 'FINISH ✓';
    btn.tabIndex = 0;
    btn.addEventListener('click', showFinal);
    actions.appendChild(btn);
    btn.focus();
  }
}
 
// ── REVIEW (read-only replay) ──
function renderReview(idx) {
  state.phase = 'explanation';
  state.qIdx = idx;
  updateHeader();
  const q = QUESTIONS[idx];
  const prev = state.answered[idx];
  const card = document.getElementById('sf-card');
  const isMCQ = q.type === 'mcq';
 
  const feedbackCls = (prev && prev.correct) ? 'ok' : 'fail';
  const feedbackTxt = (prev && prev.correct)
    ? '✓ CORRECT'
    : isMCQ
      ? `✗ INCORRECT — Correct answer: ${q.answer}${prev && prev.chosen !== '—' ? ` · You chose: ${prev.chosen}` : ''}`
      : `✗ INCORRECT — Correct answer: ${q.answer}`;
 
  let answerArea = '';
  if (isMCQ) {
    const optHtml = q.options.map((opt, i) => {
      let cls = 'sf-opt-btn';
      if (opt === q.answer) cls += ' correct-reveal';
      else if (prev && opt === prev.chosen) cls += ' wrong-reveal';
      return `<li><button class="${cls}" disabled tabindex="-1">
        <span class="sf-key-hint">${i + 1}</span> ${renderInline(opt)}
      </button></li>`;
    }).join('');
    answerArea = `<ul class="sf-options">${optHtml}</ul>`;
  } else {
    const userVal = prev ? escapeHtml(prev.chosen === '—' ? '(skipped)' : prev.chosen) : '';
    const inputCls = 'sf-typein ' + ((prev && prev.correct) ? 'correct-reveal' : 'wrong-reveal');
    answerArea = `
      <div class="sf-typein-wrap">
        <span class="sf-typein-label">▸ Your answer</span>
        <textarea class="${inputCls}" disabled tabindex="-1">${userVal}</textarea>
        ${!(prev && prev.correct)
          ? `<div class="sf-correct-answer"><span class="lbl">Correct answer</span><code>${escapeHtml(q.answer)}</code></div>`
          : ''}
      </div>`;
  }
 
  const nextBtn = idx < QUESTIONS.length - 1
    ? `<button class="sf-action" id="btn-rev-next" tabindex="0">NEXT ▶</button>`
    : `<button class="sf-action" id="btn-rev-finish" tabindex="0">FINISH ✓</button>`;
  const prevBtn = idx > 0
    ? `<button class="sf-action sf-action-secondary" id="btn-rev-prev" tabindex="0">◀ PREV</button>`
    : '';
 
  card.innerHTML = `
    <div class="sf-label" style="color:var(--sf-text-muted)">
      Review — Question ${idx + 1}
      <span style="font-size:10px;letter-spacing:.1em;">(READ ONLY)</span>
    </div>
    <div class="sf-content">${processContent(q.question)}</div>
    ${answerArea}
    <div class="sf-feedback ${feedbackCls}">${feedbackTxt}</div>
    <div class="sf-explanation">${processContent(q.explanation)}</div>
    <div class="sf-actions">${prevBtn}${nextBtn}</div>`;
 
  renderMath();
 
  document.getElementById('btn-rev-next')?.addEventListener('click', () => {
    state.qIdx = idx + 1;
    updateHeader();
    goPhase('context');
  });
  document.getElementById('btn-rev-finish')?.addEventListener('click', showFinal);
  document.getElementById('btn-rev-prev')?.addEventListener('click', () => {
    state.qIdx = idx - 1;
    updateHeader();
    goPhase('context');
  });
  document.querySelector('.sf-actions .sf-action')?.focus();
}
 
// ══════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════
function advanceQuestion() {
  state.qIdx++;
  state.selected = null;
  state.typedAnswer = '';
  if (state.qIdx >= QUESTIONS.length) { showFinal(); return; }
  updateHeader();
  goPhase('context');
}
 
function prevQuestion() {
  if (state.qIdx === 0) return;
  state.qIdx--;
  state.selected = null;
  state.typedAnswer = '';
  updateHeader();
  goPhase('context');
}
 
function guardQuestion() {
  if (state.answered[state.qIdx] != null) {
    renderReview(state.qIdx);
    return true;
  }
  return false;
}
 
function goPhase(ph) {
  state.phase = ph;
  if (ph === 'context') renderContext();
  else if (ph === 'question') renderQuestion();
  else if (ph === 'final') showFinal();
}
 
// ══════════════════════════════════════════════
//  FINAL SCREEN
// ══════════════════════════════════════════════
function showFinal() {
  state.phase = 'final';
  const total = QUESTIONS.length;
  const c = state.correctCount;
  const w = state.wrongCount;
  const attempted = state.answered.length;
  const acc = attempted ? Math.round(c / attempted * 100) : 0;
  let grade = '', gradeColor = 'var(--sf-accent)';
  if (acc >= 90) { grade = 'DISTINCTION'; gradeColor = 'var(--sf-success)'; }
  else if (acc >= 75) { grade = 'MERIT'; gradeColor = 'var(--sf-accent)'; }
  else if (acc >= 50) { grade = 'PASS'; gradeColor = 'var(--sf-warn)'; }
  else { grade = 'RETRY'; gradeColor = 'var(--sf-error)'; }
 
  const dots = QUESTIONS.map((_, i) => {
    const a = state.answered[i];
    const cls = a ? (a.correct ? 'c' : 'w') : '';
    return `<div class="sf-dot ${cls}" title="Q${i + 1}${a ? (' — ' + (a.correct ? '✓' : '✗')) : ''}"></div>`;
  }).join('');
 
  document.getElementById('sf-card').innerHTML = `
    <div class="sf-final">
      <div class="sf-final-title">SESSION COMPLETE</div>
      <div class="sf-grade" style="color:${gradeColor}">${grade}</div>
      <div class="sf-final-stats">
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-success)">${c}</span><span class="lbl">Correct</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-error)">${w}</span><span class="lbl">Wrong</span></div>
        <div class="sf-stat-box"><span class="num" style="color:var(--sf-accent)">${acc}%</span><span class="lbl">Accuracy</span></div>
      </div>
      <div style="width:100%;max-width:420px;">
        <div style="font-size:10px;color:var(--sf-text-muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">Question Map</div>
        <div class="sf-dot-map">${dots}</div>
      </div>
      <p class="sf-final-note">Review any red squares above, then restart to reinforce your SQL foundations.</p>
      <button class="sf-action" id="btn-restart" style="margin-top:8px;" tabindex="0">↺ RESTART QUIZ</button>
    </div>`;
 
  document.getElementById('btn-restart').addEventListener('click', restartQuiz);
  document.getElementById('sf-progress').style.width = '100%';
  document.getElementById('sf-prog-text').textContent = `${QUESTIONS.length} / ${QUESTIONS.length}`;
}
 
function restartQuiz() {
  state = { phase: 'context', qIdx: 0, selected: null, typedAnswer: '', answered: [], correctCount: 0, wrongCount: 0 };
  updateHeader();
  goPhase('context');
}
 
// ══════════════════════════════════════════════
//  MODAL (kept for structural parity)
// ══════════════════════════════════════════════
function closeModal() {
  document.getElementById('sf-modal-backdrop').classList.remove('open');
}
document.getElementById('btn-modal-close').addEventListener('click', closeModal);
document.getElementById('sf-modal-backdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('sf-modal-backdrop')) closeModal();
});
 
// ══════════════════════════════════════════════
//  KEYBOARD
// ══════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const backdrop = document.getElementById('sf-modal-backdrop');
    if (backdrop.classList.contains('open')) { closeModal(); return; }
  }
  if (document.getElementById('sf-modal-backdrop').classList.contains('open')) return;
 
  const tag = document.activeElement?.tagName;
 
  if (state.phase === 'context') {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state.answered[state.qIdx] != null) renderReview(state.qIdx);
      else goPhase('question');
    }
    return;
  }
 
  if (state.phase === 'question') {
    const q = QUESTIONS[state.qIdx];
    if (q.type === 'mcq') {
      if (e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const opt = q.options[parseInt(e.key) - 1];
        if (opt) selectOption(opt);
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const sub = document.getElementById('btn-submit');
        if (sub && !sub.disabled) submitMCQ();
        return;
      }
    } else {
      // type-in: Ctrl+Enter or Cmd+Enter submits
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        submitTypeIn();
        return;
      }
    }
    return;
  }
 
  if (state.phase === 'explanation' || state.phase === 'final') {
    if (tag === 'TEXTAREA' || tag === 'INPUT') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      const nb = document.querySelector('.sf-actions .sf-action');
      if (nb) nb.click();
    }
  }
});
 
// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
updateHeader();
goPhase('context');