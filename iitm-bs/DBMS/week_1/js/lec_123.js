// The complete quiz payload
const quizData =
[
  {
    "id": 1,
    "context": "The course begins by emphasizing how databases pervade all aspects of modern life, touching applications we may not even realize.",
    "question": "What common device relies on a massive database to track caller locations and tower infrastructure?",
    "options": [
      "A) A mechanical watch",
      "B) A basic cell phone",
      "C) A physical ledger",
      "D) A Jacquard loom"
    ],
    "answer": "B) A basic cell phone",
    "explanation": "Even simple cell phones use databases to manage connections and towers, which paves the way for understanding massive national health databases like Aarogya Setu."
  },
  {
    "id": 2,
    "context": "During the pandemic, nations built massive database applications to track health conditions and contact traces.",
    "question": "Which application was used to track Coronavirus health conditions and correlate information among citizens?",
    "options": [
      "A) VisiCalc",
      "B) Aarogya Setu",
      "C) COWIN",
      "D) Excel"
    ],
    "answer": "B) Aarogya Setu",
    "explanation": "Aarogya Setu tracked COVID-19 health data, which naturally leads to discussing another nationwide app used for tracking vaccinations."
  },
  {
    "id": 3,
    "context": "Following health tracking, the nation needed to monitor the massive rollout of vaccines to millions of citizens.",
    "question": "Which application tracked the entire nation's vaccination program, including doses and dates?",
    "options": [
      "A) COWIN",
      "B) Aarogya Setu",
      "C) Aadhaar",
      "D) Bigtable"
    ],
    "answer": "A) COWIN",
    "explanation": "COWIN managed massive vaccination records. Managing such vast records requires understanding the fundamental needs of human society regarding data storage."
  },
  {
    "id": 4,
    "context": "Whether 300 years ago or today, human society has basic needs for managing records.",
    "question": "What are the first two basic requirements for managing records and data?",
    "options": [
      "A) Security and Scalability",
      "B) Storage and Retrieval",
      "C) Audit and Archival",
      "D) Transactions and Concurrency"
    ],
    "answer": "B) Storage and Retrieval",
    "explanation": "Storage and retrieval are the foundational needs. Once data is stored, it often changes hands, bringing us to the concept of data exchange."
  },
  {
    "id": 5,
    "context": "Beyond simply keeping and fetching records, society needs a way to handle exchanges, such as buying a two-wheeler.",
    "question": "What term describes the process where data is exchanged or moved, such as transferring ownership or funds?",
    "options": [
      "A) Archival",
      "B) Audit",
      "C) Transaction",
      "D) Storage"
    ],
    "answer": "C) Transaction",
    "explanation": "Transactions manage the active exchange of data. After transactions occur, systems must verify that rules and regulations were followed."
  },
  {
    "id": 6,
    "context": "To ensure financial transactions are correct and to prevent scams, stored data must be examined.",
    "question": "Which data management requirement focuses on checking if rules, regulations, and taxes were properly handled?",
    "options": [
      "A) Archival",
      "B) Audit",
      "C) Retrieval",
      "D) Scalability"
    ],
    "answer": "B) Audit",
    "explanation": "Audits ensure correctness. Once current records are audited and age, they must be preserved for potential future use."
  },
  {
    "id": 7,
    "context": "Sometimes, data is no longer actively used but must be kept securely for historical reference.",
    "question": "What is the requirement called when data is kept for possible future use?",
    "options": [
      "A) Audit",
      "B) Transaction",
      "C) Archival",
      "D) Bookkeeping"
    ],
    "answer": "C) Archival",
    "explanation": "Archival ensures long-term preservation. Fulfilling these basic needs varies greatly depending on the size of the entity involved."
  },
  {
    "id": 8,
    "context": "Data management systems are built for specific target users, ranging in size and scope.",
    "question": "According to the lecture, who might require a data management system?",
    "options": [
      "A) Only global organizations like Apple",
      "B) Only individuals",
      "C) Only small enterprises",
      "D) Individuals, small enterprises, and global organizations"
    ],
    "answer": "D) Individuals, small enterprises, and global organizations",
    "explanation": "Users span from individuals to global organizations. Across human history, these users have relied on two primary approaches to manage their data."
  },
  {
    "id": 9,
    "context": "If we look at human history, there have been primarily two major eras or approaches to record management.",
    "question": "What are the two major approaches to data and records management in human history?",
    "options": [
      "A) Local and Cloud",
      "B) Physical and Electronic",
      "C) Flat files and DBMS",
      "D) Structured and Unstructured"
    ],
    "answer": "B) Physical and Electronic",
    "explanation": "The evolution moved from physical to electronic systems. The physical era, which lasted for centuries, used a very specific formal practice."
  },
  {
    "id": 10,
    "context": "For most of human civilization, maintaining physical forms of data and records was standard practice.",
    "question": "What is the formal name for the physical management of records and data?",
    "options": [
      "A) Bookkeeping",
      "B) Data Science",
      "C) File Handling",
      "D) Data Warehousing"
    ],
    "answer": "A) Bookkeeping",
    "explanation": "Bookkeeping is the traditional physical method, which relies on specific manual tools to keep track of information."
  },
  {
    "id": 11,
    "context": "Bookkeeping requires tools to write down daily transactions and maintain account balances manually.",
    "question": "What are the primary tools used in traditional bookkeeping?",
    "options": [
      "A) Punch cards and tapes",
      "B) Ledgers and journals",
      "C) Spreadsheets and CSV files",
      "D) File cabinets and folders"
    ],
    "answer": "B) Ledgers and journals",
    "explanation": "Ledgers and journals record the data. To organize these paper records better, a key invention arrived in the late 19th century."
  },
  {
    "id": 12,
    "context": "As the volume of physical paper grew, an American inventor named Henry Brown created a solution in the late 19th century.",
    "question": "What did Henry Brown invent to help organize physical papers?",
    "options": [
      "A) The Jacquard loom",
      "B) The file cabinet",
      "C) Magnetic tapes",
      "D) The punch card"
    ],
    "answer": "B) The file cabinet",
    "explanation": "The file cabinet organized paper physically. However, writing everything was laborious, prompting early mechanical memory solutions."
  },
  {
    "id": 13,
    "context": "Writing records by hand is laborious and error-prone. Herman Hollerith adapted a technology from weaving to help with mechanical computation.",
    "question": "What technology did Herman Hollerith adapt from the Jacquard loom to act as memory?",
    "options": [
      "A) Magnetic disks",
      "B) Punch cards",
      "C) VisiCalc",
      "D) Magnetic tapes"
    ],
    "answer": "B) Punch cards",
    "explanation": "Punch cards represented early mechanical data processing, bridging the gap before true electronic databases emerged in the mid-20th century."
  },
  {
    "id": 14,
    "context": "Around the mid-20th century, computers arrived, and the concept of electronic data management began to take shape.",
    "question": "In which decade did electronic database management systems (DBMS) mostly start happening?",
    "options": [
      "A) 1940s",
      "B) 1960s",
      "C) 1980s",
      "D) 2000s"
    ],
    "answer": "B) 1960s",
    "explanation": "The 1960s saw the birth of DBMS, utilizing early electronic storage mediums that replaced paper."
  },
  {
    "id": 15,
    "context": "Early electronic systems needed primary storage solutions to keep records before modern hard drives existed.",
    "question": "What storage mediums were initially used in the 1950s and 60s for electronic data?",
    "options": [
      "A) Magnetic disks and SSDs",
      "B) Tapes and punch cards",
      "C) Cloud storage",
      "D) File cabinets"
    ],
    "answer": "B) Tapes and punch cards",
    "explanation": "Tapes and punch cards stored early electronic data. By the 1970s, significant software innovations further changed data processing."
  },
  {
    "id": 16,
    "context": "The 1970s brought the CODASYL approach, the COBOL language, and early software that revolutionized accounting.",
    "question": "Which software introduced by Apple in the 70s is considered the 'great grand forefather' of modern spreadsheets?",
    "options": [
      "A) Excel",
      "B) VisiCalc",
      "C) Google Sheets",
      "D) Oracle"
    ],
    "answer": "B) VisiCalc",
    "explanation": "VisiCalc pioneered spreadsheets. Following this, the 1980s introduced a specific mathematical model that revolutionized database systems entirely."
  },
  {
    "id": 17,
    "context": "The 1980s saw a massive boom in database technology with the introduction of a new model defined by Ted Codd.",
    "question": "What type of database system changed the face of data management in the 1980s?",
    "options": [
      "A) Relational database systems",
      "B) NoSQL systems",
      "C) Flat file systems",
      "D) XML systems"
    ],
    "answer": "A) Relational database systems",
    "explanation": "Relational databases standardized data management. Then, the 1990s brought a technology that made database access global."
  },
  {
    "id": 18,
    "context": "While databases in the 80s were mostly centralized or on local networks, the 1990s expanded their reach worldwide.",
    "question": "What technological shift in the 1990s made data and records management global?",
    "options": [
      "A) The invention of the punch card",
      "B) The arrival of the Internet",
      "C) The creation of COBOL",
      "D) The invention of magnetic disks"
    ],
    "answer": "B) The arrival of the Internet",
    "explanation": "The Internet globalized databases. The subsequent e-commerce boom in the 2000s introduced a new challenge: managing data that wasn't just neat rows and columns."
  },
  {
    "id": 19,
    "context": "With the rise of social media and e-commerce, systems needed to store images, videos, and natural language text.",
    "question": "What type of database emerged in the 2000s specifically to manage unstructured data?",
    "options": [
      "A) Relational Databases",
      "B) NoSQL",
      "C) Spreadsheet software",
      "D) Physical ledgers"
    ],
    "answer": "B) NoSQL",
    "explanation": "NoSQL handled unstructured data efficiently. The vast accumulation of structured and unstructured data paved the way for advanced analytics in the 2010s."
  },
  {
    "id": 20,
    "context": "In the last decade, analyzing huge volumes of data became crucial. The foundation of this field relies heavily on database systems.",
    "question": "Which field started riding high in the last decade, built upon data warehousing and mining?",
    "options": [
      "A) Data Science",
      "B) Bookkeeping",
      "C) Mechanical computation",
      "D) Web Development"
    ],
    "answer": "A) Data Science",
    "explanation": "Data Science relies on modern databases. To understand why modern databases are built the way they are, we must look at key performance parameters."
  },
  {
    "id": 21,
    "context": "Data systems are evaluated on several parameters. One parameter ensures data survives over time without being lost.",
    "question": "Which parameter questions whether electronic records will safely remain available for ages together?",
    "options": [
      "A) Scalability",
      "B) Durability",
      "C) Efficiency",
      "D) Security"
    ],
    "answer": "B) Durability",
    "explanation": "Durability prevents data loss. Another crucial parameter dictates how the system handles a growing number of users."
  },
  {
    "id": 22,
    "context": "An electronic system must work just as well for 10 people as it does for billions of transactions.",
    "question": "What parameter describes a system's ability to handle increasing amounts of people or transactions?",
    "options": [
      "A) Consistency",
      "B) Durability",
      "C) Scalability",
      "D) Audit"
    ],
    "answer": "C) Scalability",
    "explanation": "Scalability ensures growth. Alongside growth, systems holding sensitive information must keep malicious actors out."
  },
  {
    "id": 23,
    "context": "The level of protection required for a digital library differs significantly from a hospital management system.",
    "question": "Which parameter ensures that data access is controlled and protected appropriately based on the application?",
    "options": [
      "A) Security",
      "B) Retrieval",
      "C) Scalability",
      "D) Consistency"
    ],
    "answer": "A) Security",
    "explanation": "Security protects data. When authorized users access data, the system must also guarantee that transactions leave the data in a valid state."
  },
  {
    "id": 24,
    "context": "If a transaction fails midway, money shouldn't simply disappear. The state before and after must make sense.",
    "question": "Which parameter dictates that a database must be in a valid state before and after a transaction?",
    "options": [
      "A) Efficiency",
      "B) Consistency",
      "C) Scalability",
      "D) Durability"
    ],
    "answer": "B) Consistency",
    "explanation": "Consistency prevents errors like missing money. Evaluating physical bookkeeping against these parameters reveals its major flaws."
  },
  {
    "id": 25,
    "context": "Physical bookkeeping suffers from several drawbacks, particularly when physical elements degrade over time.",
    "question": "What poses a durability problem for physical records management?",
    "options": [
      "A) Cloud server crashes",
      "B) Termites, humidity, wear and tear, and fire",
      "C) Hackers breaking passwords",
      "D) Software bugs"
    ],
    "answer": "B) Termites, humidity, wear and tear, and fire",
    "explanation": "Physical records are highly susceptible to environmental damage. They also fail when businesses try to expand massively."
  },
  {
    "id": 26,
    "context": "While a ledger works for a small medicine shop, it becomes impossible to use as the customer base grows.",
    "question": "Which parameter is practically impossible to maintain with a physical ledger for a million customers?",
    "options": [
      "A) Scalability",
      "B) Durability",
      "C) Archival",
      "D) Security"
    ],
    "answer": "A) Scalability",
    "explanation": "Physical scalability is limited. To combat these physical limits, businesses adopted early electronic files like spreadsheets."
  },
  {
    "id": 27,
    "context": "Spreadsheets like Excel or Google Sheets are widely used by small enterprises and improve upon physical ledgers.",
    "question": "How do modern spreadsheets (like Google Sheets) improve durability compared to physical ledgers?",
    "options": [
      "A) They prevent negative values from being typed",
      "B) They are stored in cloud infrastructure that prevents loss",
      "C) They can hold millions of records infinitely",
      "D) They use blockchain technology"
    ],
    "answer": "B) They are stored in cloud infrastructure that prevents loss",
    "explanation": "Cloud infrastructure improves durability. However, spreadsheets have their own strict limitations, particularly regarding size."
  },
  {
    "id": 28,
    "context": "Spreadsheets are flat file solutions and have inherent limitations preventing them from being true enterprise solutions.",
    "question": "What is a major scalability limitation of spreadsheet software?",
    "options": [
      "A) They lack a graphical interface",
      "B) They have a maximum limit on the number of rows",
      "C) They cannot perform arithmetic",
      "D) They cannot be password protected"
    ],
    "answer": "B) They have a maximum limit on the number of rows",
    "explanation": "Row limits restrict scalability. Spreadsheets also struggle with enforcing complex business rules."
  },
  {
    "id": 29,
    "context": "While Excel can restrict data entry (like preventing negative numbers), it struggles with transaction-based rules.",
    "question": "What type of constraints are very difficult to manage in a file-based system like a spreadsheet?",
    "options": [
      "A) Simple data entry constraints",
      "B) Formatting constraints (like font color)",
      "C) Constraints resulting from transactions",
      "D) Simple arithmetic formulas"
    ],
    "answer": "C) Constraints resulting from transactions",
    "explanation": "Transaction constraints require complex custom code in file systems. They also lack advanced permission features."
  },
  {
    "id": 30,
    "context": "A spreadsheet can be password protected, but it lacks granular control for teams.",
    "question": "What security limitation do spreadsheets have regarding user access?",
    "options": [
      "A) They cannot have multiple people use the same file with multiple levels of authority",
      "B) They cannot use passwords at all",
      "C) They delete themselves if a password fails",
      "D) They require physical keys"
    ],
    "answer": "A) They cannot have multiple people use the same file with multiple levels of authority",
    "explanation": "Limited permission levels in flat files make them unsuitable for complex enterprises. This leads directly into the detailed comparison between file-based Python scripts and SQL in Module 3."
  },
  {
    "id": 31,
    "context": "To illustrate why a DBMS is superior to file systems, the lecture uses a rudimentary case study.",
    "question": "What specific case study is used to compare a file-based Python system with an SQL database?",
    "options": [
      "A) A digital library checkout",
      "B) A simple banking transaction for fund transfer",
      "C) A hospital patient admission",
      "D) A grocery store inventory update"
    ],
    "answer": "B) A simple banking transaction for fund transfer",
    "explanation": "The bank transaction highlights critical data handling differences. This transaction must follow specific business rules."
  },
  {
    "id": 32,
    "context": "In the banking system example, specific conditions must be met before a fund transfer occurs.",
    "question": "What is the system's rule if the account balance is not enough?",
    "options": [
      "A) It allows an overdraft",
      "B) It transfers whatever is available",
      "C) It will not allow the fund transfer",
      "D) It deletes the account"
    ],
    "answer": "C) It will not allow the fund transfer",
    "explanation": "Insufficient funds block the transfer. Another critical check involves verifying the target accounts."
  },
  {
    "id": 33,
    "context": "Transactions involve a sender and a receiver, both of which must be valid.",
    "question": "What happens if the account numbers provided are not correct?",
    "options": [
      "A) The system guesses the closest account",
      "B) It flashes a message and terminates the transaction",
      "C) It credits a default suspense account",
      "D) It waits indefinitely"
    ],
    "answer": "B) It flashes a message and terminates the transaction",
    "explanation": "Invalid accounts terminate the process. To implement this in Python, specific file structures are used."
  },
  {
    "id": 34,
    "context": "The file-based Python implementation uses comma-separated value files to store the bank's data.",
    "question": "Which two CSV files are utilized in the Python file-based banking system?",
    "options": [
      "A) Users.csv and History.csv",
      "B) Accounts.csv and Ledger.csv",
      "C) Bank.csv and Transactions.csv",
      "D) Data.csv and Log.csv"
    ],
    "answer": "B) Accounts.csv and Ledger.csv",
    "explanation": "Accounts.csv stores balances, and Ledger.csv stores the history. DBMS uses a different foundational structure."
  },
  {
    "id": 35,
    "context": "Instead of using flat CSV files, a Database Management System organizes data structurally.",
    "question": "What corresponding structures does the DBMS implementation use instead of CSV files?",
    "options": [
      "A) Lists",
      "B) Tables (Accounts table and Ledger table)",
      "C) Dictionaries",
      "D) Text documents"
    ],
    "answer": "B) Tables (Accounts table and Ledger table)",
    "explanation": "Tables organize data in a DBMS. To interact with these tables, a specific programming language is required."
  },
  {
    "id": 36,
    "context": "The standard language for querying and transacting with a relational database system is SQL.",
    "question": "What does SQL stand for?",
    "options": [
      "A) Simple Query Logic",
      "B) Standard Query Language",
      "C) Structured Query Language",
      "D) Sequential Query Language"
    ],
    "answer": "C) Structured Query Language",
    "explanation": "SQL is used for DB interaction. When starting a transaction, the first step in both Python and SQL involves initialization."
  },
  {
    "id": 37,
    "context": "Before Python can read account balances from the CSV, it must prepare the system to access the files.",
    "question": "In the Python script, what initialization step must happen at the beginning of the transaction function?",
    "options": [
      "A) Compiling the code",
      "B) Opening file handles (e.g., using open() for read and append modes)",
      "C) Restarting the server",
      "D) Creating a new database"
    ],
    "answer": "B) Opening file handles (e.g., using open() for read and append modes)",
    "explanation": "Opening file handles requires explicit coding in Python, contrasting sharply with how a DBMS operates."
  },
  {
    "id": 38,
    "context": "Unlike Python, where files must be explicitly opened for every transaction, a DBMS simplifies this.",
    "question": "How does a DBMS handle initialization tasks like opening files and creating handles?",
    "options": [
      "A) The user must write an initialization script before every query",
      "B) They are handled implicitly by mechanisms built into the database",
      "C) The OS handles it requiring a bash script",
      "D) Initialization is not required for databases"
    ],
    "answer": "B) They are handled implicitly by mechanisms built into the database",
    "explanation": "Implicit initialization saves programmer effort. After setup, the system must check the sender's balance."
  },
  {
    "id": 39,
    "context": "To check a balance in SQL, the programmer writes a straightforward query without iterating through every record.",
    "question": "Which SQL command directly fetches the sender's balance into a variable?",
    "options": [
      "A) GET balance FROM accounts",
      "B) SELECT balance FROM accounts INTO sbalance",
      "C) FETCH balance",
      "D) READ accounts WHERE balance"
    ],
    "answer": "B) SELECT balance FROM accounts INTO sbalance",
    "explanation": "The SELECT statement easily fetches data. Both Python and SQL then compare this balance to the transaction amount."
  },
  {
    "id": 40,
    "context": "In Python, data read from a CSV is generally treated as text, requiring conversion before math operations.",
    "question": "How does the Python code check if there is enough balance?",
    "options": [
      "A) By writing an SQL SELECT query",
      "B) By using an if condition that converts string values to integers: int(sRec['Balance']) > int(amt)",
      "C) By asking the OS to compare files",
      "D) By using an external math library"
    ],
    "answer": "B) By using an if condition that converts string values to integers: int(sRec['Balance']) > int(amt)",
    "explanation": "Explicit type conversion is needed in file handling. SQL handles this logically within its block."
  },
  {
    "id": 41,
    "context": "If the balance check fails in the SQL block, the transaction must be halted and the user notified.",
    "question": "In the SQL example, what happens if 'sbalance < amt'?",
    "options": [
      "A) The database crashes",
      "B) It raises a notice stating 'Insufficient balance'",
      "C) It automatically deducts what is available",
      "D) It drops the table"
    ],
    "answer": "B) It raises a notice stating 'Insufficient balance'",
    "explanation": "Raising a notice handles the failure. If the balance is sufficient, the system proceeds to deduct the funds."
  },
  {
    "id": 42,
    "context": "Debiting funds in Python requires calculating the new value and updating the dictionary representation of the row.",
    "question": "How is the debit operation mathematically performed in the Python file handler?",
    "options": [
      "A) UPDATE sRec SET Balance = Balance - amt",
      "B) sRec['Balance'] = str(int(sRec['Balance']) - int(amt))",
      "C) sRec.deduct(amt)",
      "D) It is impossible in Python"
    ],
    "answer": "B) sRec['Balance'] = str(int(sRec['Balance']) - int(amt))",
    "explanation": "The Python dictionary is manually updated and converted back to a string, whereas SQL updates the data directly."
  },
  {
    "id": 43,
    "context": "SQL abstracts away the manual string-to-integer conversions and dictionary updates during a debit.",
    "question": "Which SQL command directly performs the debit on the accounts table?",
    "options": [
      "A) INSERT balance - amt",
      "B) SET balance = balance - amt",
      "C) UPDATE accounts SET balance = balance - amt",
      "D) MODIFY accounts WITH balance - amt"
    ],
    "answer": "C) UPDATE accounts SET balance = balance - amt",
    "explanation": "The UPDATE command modifies the record. Following the debit, a record of the transaction must be created."
  },
  {
    "id": 44,
    "context": "In the Python system, after modifying the balance, the action must be recorded in the ledger CSV.",
    "question": "How does the Python code insert a new transaction record into the ledger?",
    "options": [
      "A) Using f_writer.writerow() to append a dictionary",
      "B) Using INSERT INTO Ledger.csv",
      "C) By printing to the console",
      "D) By using a pandas DataFrame"
    ],
    "answer": "A) Using f_writer.writerow() to append a dictionary",
    "explanation": "The writer appends the file. SQL does this seamlessly with its own syntax."
  },
  {
    "id": 45,
    "context": "The DBMS must also track the history of fund transfers in its ledger table.",
    "question": "Which SQL command is used to record the fund transfer into the ledger table?",
    "options": [
      "A) WRITE INTO ledger",
      "B) INSERT INTO ledger(sendAc, recAc, amnt, ttype) VALUES(...)",
      "C) UPDATE ledger WITH values",
      "D) ADD RECORD ledger"
    ],
    "answer": "B) INSERT INTO ledger(sendAc, recAc, amnt, ttype) VALUES(...)",
    "explanation": "INSERT INTO writes to the ledger. Meanwhile, Python must prepare to credit the receiver, storing changes temporarily."
  },
  {
    "id": 46,
    "context": "While updating multiple rows in Python (debiting sender, crediting receiver), the CSV isn't updated instantly line-by-line.",
    "question": "What Python data structure is used to hold the modified account records temporarily before writing them back to the file?",
    "options": [
      "A) A temporary list (e.g., temp.append(sRec))",
      "B) A temporary CSV file",
      "C) A SQL database connection",
      "D) A string buffer"
    ],
    "answer": "A) A temporary list (e.g., temp.append(sRec))",
    "explanation": "The temp list holds in-memory changes. This reliance on memory introduces a massive vulnerability."
  },
  {
    "id": 47,
    "context": "If the debit succeeds but the system fails before the credit is applied and the temp list is saved, disaster strikes.",
    "question": "What is the consequence if the Python program crashes right after the debit operation but before the file is fully written?",
    "options": [
      "A) The Python interpreter automatically fixes it upon restart",
      "B) The CSV file is left in an inconsistent state, causing data loss",
      "C) The OS rolls back the CSV file",
      "D) The recipient gets double the money"
    ],
    "answer": "B) The CSV file is left in an inconsistent state, causing data loss",
    "explanation": "Inconsistent files destroy data integrity. A DBMS, however, is designed specifically to prevent this."
  },
  {
    "id": 48,
    "context": "When a similar mid-transaction failure happens in a DBMS, it does not leave the tables in a corrupted state.",
    "question": "What built-in database mechanism undoes partial transaction effects if a failure occurs?",
    "options": [
      "A) Backup",
      "B) Restore",
      "C) Rollback",
      "D) Commit"
    ],
    "answer": "C) Rollback",
    "explanation": "Rollback guarantees consistency. If there is no failure, the transaction must be explicitly saved."
  },
  {
    "id": 49,
    "context": "At the end of a successful Python transaction, the temporary memory list must be made permanent.",
    "question": "How are the changes finalized in the Python script?",
    "options": [
      "A) By calling the save() method",
      "B) By rewriting the entire Accounts.csv file using the temp list data",
      "C) By calling commit()",
      "D) By closing the terminal"
    ],
    "answer": "B) By rewriting the entire Accounts.csv file using the temp list data",
    "explanation": "Rewriting the entire file is inefficient and risky compared to SQL's finalization process."
  },
  {
    "id": 50,
    "context": "SQL finalizes transactions without rewriting the entire table from memory.",
    "question": "What standard SQL keyword guarantees that all operations within the transaction block are permanently saved?",
    "options": [
      "A) SAVE",
      "B) FINALIZE",
      "C) COMMIT",
      "D) UPDATE"
    ],
    "answer": "C) COMMIT",
    "explanation": "Commit makes changes durable. But what happens if invalid data is provided at the start?"
  },
  {
    "id": 51,
    "context": "Sometimes the user inputs wrong account numbers. The Python script must handle this gracefully without crashing.",
    "question": "What structural block is used in Python to catch errors and invalid conditions, jumping to the end to display an error?",
    "options": [
      "A) if-else statements only",
      "B) try-except block",
      "C) while loop",
      "D) function decorators"
    ],
    "answer": "B) try-except block",
    "explanation": "Try-except blocks handle exceptions. After the block finishes, resources must be cleaned up."
  },
  {
    "id": 52,
    "context": "Leaving file handles open in Python can lead to memory leaks and file locks.",
    "question": "What must the Python programmer explicitly do with 'f_obj_Account1' and other file handles at the end of the script?",
    "options": [
      "A) Delete the file",
      "B) Close them using .close()",
      "C) Upload them to the cloud",
      "D) Leave them open for the next transaction"
    ],
    "answer": "B) Close them using .close()",
    "explanation": "Explicit closing is required in file handling, whereas DBMS handles resource cleanup automatically."
  },
  {
    "id": 53,
    "context": "Once an SQL transaction is committed or rolled back, the DBMS takes over resource management.",
    "question": "Does the programmer need to manually close tables or release handles in SQL after a COMMIT?",
    "options": [
      "A) Yes, using the CLOSE TABLE command",
      "B) Yes, otherwise the database locks up",
      "C) No, it is handled implicitly by the database",
      "D) No, because SQL does not use handles internally"
    ],
    "answer": "C) No, it is handled implicitly by the database",
    "explanation": "Implicit cleanup saves coding effort. This brings us to a parameterized comparison, starting with data volume scalability."
  },
  {
    "id": 54,
    "context": "When a system grows from hundreds of records to millions, file systems degrade in performance.",
    "question": "Why does the efficiency of file-based Python systems reduce drastically as the number of records increases?",
    "options": [
      "A) Python cannot read files larger than 1MB",
      "B) Time spent sequentially searching for right records and OS file-size limitations",
      "C) The CSV format automatically encrypts large files",
      "D) Python removes older records to save space"
    ],
    "answer": "B) Time spent sequentially searching for right records and OS file-size limitations",
    "explanation": "Sequential searching is slow. A DBMS solves this search problem using a specific technique."
  },
  {
    "id": 55,
    "context": "Databases are designed to scale and find data almost instantly, regardless of the table's size.",
    "question": "What in-built mechanism allows a DBMS to provide high scalability and quick access to records?",
    "options": [
      "A) Data duplication",
      "B) Indexing",
      "C) Data deletion",
      "D) Compression"
    ],
    "answer": "B) Indexing",
    "explanation": "Indexing provides fast access. Besides data volume, scalability also involves changing the structure of the data."
  },
  {
    "id": 56,
    "context": "If a new tax rule requires tracking a new piece of user data, the system structure must change.",
    "question": "Why is adding a new attribute difficult in a file-based system?",
    "options": [
      "A) CSVs only allow 10 columns max",
      "B) Every record must be manually re-initialized with a default value by a program",
      "C) Python cannot write new columns",
      "D) The OS prevents structural changes to text files"
    ],
    "answer": "B) Every record must be manually re-initialized with a default value by a program",
    "explanation": "Manual initialization is tedious. A DBMS handles structural changes natively."
  },
  {
    "id": 57,
    "context": "Adding a new column in an SQL database requires just a single line of code.",
    "question": "How does a DBMS seamlessly handle adding an attribute to an existing table?",
    "options": [
      "A) It deletes the old table and makes the user re-enter data",
      "B) It sets all existing values to NULL and crashes",
      "C) A default value can be defined that instantly initializes the new attribute for all existing records",
      "D) It requires writing a Python script to update the table"
    ],
    "answer": "C) A default value can be defined that instantly initializes the new attribute for all existing records",
    "explanation": "Default values make structural changes easy. This efficiency translates to execution speed as well."
  },
  {
    "id": 58,
    "context": "Searching and modifying flat files is inherently slow because the system reads the data line-by-line.",
    "question": "To process a 1GB file, how long would a Python file handler typically take compared to a DBMS?",
    "options": [
      "A) Seconds for Python vs. Milliseconds for DBMS",
      "B) Milliseconds for Python vs. Seconds for DBMS",
      "C) Hours for Python vs. Minutes for DBMS",
      "D) The exact same time"
    ],
    "answer": "A) Seconds for Python vs. Milliseconds for DBMS",
    "explanation": "DBMS execution is exponentially faster. However, setting up a DBMS has its own initial time costs."
  },
  {
    "id": 59,
    "context": "Despite the query speed, a DBMS isn't always the fastest solution if the project is very small.",
    "question": "Why might a file-based system be faster overall for a very small dataset?",
    "options": [
      "A) SQL cannot handle small datasets",
      "B) The overhead in installing and configuring a database outweighs query speed advantages",
      "C) Python is natively faster at math",
      "D) CSV files execute in kernel space"
    ],
    "answer": "B) The overhead in installing and configuring a database outweighs query speed advantages",
    "explanation": "Setup overhead makes file systems viable for tiny tasks. Next, we compare data persistence."
  },
  {
    "id": 60,
    "context": "Once data is entered, it must persist. File systems rely on temporary structures before saving.",
    "question": "In Python file handling, where is data kept during processing before it is manually updated to the file?",
    "options": [
      "A) In the CPU cache permanently",
      "B) In memory using temporary data structures",
      "C) In a hidden backup file",
      "D) In a cloud server"
    ],
    "answer": "B) In memory using temporary data structures",
    "explanation": "In-memory data is volatile and risks loss. DBMS uses different mechanisms for persistence."
  },
  {
    "id": 61,
    "context": "A DBMS ensures that once a transaction is committed, it will not be lost, even if the power fails.",
    "question": "How is data persistence ensured in a DBMS?",
    "options": [
      "A) By making the user print the data",
      "B) Via automatic, system-induced mechanisms",
      "C) By saving an Excel backup every 5 minutes",
      "D) By avoiding disk storage completely"
    ],
    "answer": "B) Via automatic, system-induced mechanisms",
    "explanation": "System mechanisms guarantee persistence. This ties directly into the system's robustness against crashes."
  },
  {
    "id": 62,
    "context": "If a system crashes, retrieving lost data is extremely difficult in flat files, often requiring manual reconstruction.",
    "question": "How does a DBMS handle system crashes and data corruption compared to file systems?",
    "options": [
      "A) It offers standard backup, recovery, and restore mechanisms needing minimal manual intervention",
      "B) It automatically writes a Python script to fix it",
      "C) It relies entirely on the OS to recover the data",
      "D) It cannot recover from crashes"
    ],
    "answer": "A) It offers standard backup, recovery, and restore mechanisms needing minimal manual intervention",
    "explanation": "Robust recovery mechanisms protect the data. Access to that data is governed by security parameters."
  },
  {
    "id": 63,
    "context": "Security in file systems usually relies on OS-level passwords, meaning whoever opens the file sees everything.",
    "question": "What advanced security feature does a DBMS provide that a file system generally lacks?",
    "options": [
      "A) It prevents the use of passwords",
      "B) It relies entirely on the OS login",
      "C) User-specific access with multiple levels of authority at the database level",
      "D) It only allows physical terminal access"
    ],
    "answer": "C) User-specific access with multiple levels of authority at the database level",
    "explanation": "Granular security is built into DBMS. Building all these features manually affects the programmer."
  },
  {
    "id": 64,
    "context": "If a programmer has to manually build persistence, robustness, and security into a Python file handler, it takes immense effort.",
    "question": "How does using a DBMS increase a programmer's productivity?",
    "options": [
      "A) By forcing them to learn Python",
      "B) Standard built-in queries reduce manual coding effort for enforcing constraints and maintaining data",
      "C) By automatically writing the frontend interface",
      "D) By eliminating the need to write code altogether"
    ],
    "answer": "B) Standard built-in queries reduce manual coding effort for enforcing constraints and maintaining data",
    "explanation": "DBMS abstracts the heavy lifting. However, Python still holds an advantage in one specific programmatic area."
  },
  {
    "id": 65,
    "context": "Python is a Turing-complete, general-purpose language with massive libraries for math and science.",
    "question": "In what area does Python file handling have a distinct advantage over SQL?",
    "options": [
      "A) Concurrency control",
      "B) Data persistence",
      "C) Extensive support for complex arithmetic and recursive logical operations",
      "D) Structural scalability"
    ],
    "answer": "C) Extensive support for complex arithmetic and recursive logical operations",
    "explanation": "Python excels at complex math. SQL is primarily designed for data manipulation, not advanced arithmetic."
  },
  {
    "id": 66,
    "context": "If you need to perform complex scientific calculations on database data, SQL alone might struggle.",
    "question": "How are complex arithmetic computations usually handled when using a DBMS?",
    "options": [
      "A) They are done entirely using standard SQL queries",
      "B) They are impossible and simply not done",
      "C) They must often be done outside SQL using a high-level language",
      "D) SQL automatically imports Python libraries"
    ],
    "answer": "C) They must often be done outside SQL using a high-level language",
    "explanation": "External languages handle the heavy math. Finally, the choice between these systems often comes down to cost."
  },
  {
    "id": 67,
    "context": "Implementing a file handler in Python is relatively cheap, requiring no specialized server software.",
    "question": "What are the typical costs associated with file handling via Python?",
    "options": [
      "A) Extremely high software licensing costs",
      "B) Low costs for hardware, software, and human resources",
      "C) High costs for specialized DBAs",
      "D) Expensive dedicated server hardware"
    ],
    "answer": "B) Low costs for hardware, software, and human resources",
    "explanation": "Python is budget-friendly for small tasks. In contrast, enterprise DBMS systems require significant investment."
  },
  {
    "id": 68,
    "context": "An enterprise DBMS relies on dedicated servers, expensive software licenses, and highly trained personnel.",
    "question": "What specialized human resource is specifically needed to install, configure, and maintain a large DBMS?",
    "options": [
      "A) A Network Administrator",
      "B) A Database Administrator (DBA)",
      "C) A Frontend Developer",
      "D) A Data Entry Clerk"
    ],
    "answer": "B) A Database Administrator (DBA)",
    "explanation": "DBAs represent a high human resource cost. This comprehensive comparison concludes the module's case study."
  },
  {
    "id": 69,
    "context": "The entire comparison in Module 3 hinges on understanding the practical differences between two specific tools solving one problem.",
    "question": "According to the module summary, what was the primary purpose of the Bank Transaction example?",
    "options": [
      "A) To teach banking finance",
      "B) To elucidate the difference between File handling by Python and DBMS",
      "C) To show how to connect Python to a DBMS",
      "D) To demonstrate how hackers steal money"
    ],
    "answer": "B) To elucidate the difference between File handling by Python and DBMS",
    "explanation": "The bank example clearly contrasted the two. As a final review, let's recall the specific file writing mechanic in Python."
  },
  {
    "id": 70,
    "context": "In the Python bank transfer, saving the ledger relies on the csv module.",
    "question": "Which Python object and method is specifically used to add a single transaction dictionary to Ledger.csv?",
    "options": [
      "A) f_writer.writerow()",
      "B) f_obj_Ledger.append()",
      "C) csv.insert()",
      "D) writer.writeall()"
    ],
    "answer": "A) f_writer.writerow()",
    "explanation": "writerow() is the manual way to log data. Conversely, let's recall the exact SQL command for this."
  },
  {
    "id": 71,
    "context": "SQL bypasses manual writers and dictionary formats entirely when logging to the ledger.",
    "question": "What specific SQL syntax inserts the values for sender, receiver, amount, and type into the ledger table?",
    "options": [
      "A) APPEND TO ledger sender, receiver, amount, type",
      "B) INSERT INTO ledger(sendAc, recAc, amnt, ttype) VALUES(sendVal, recVal, amt, 'D')",
      "C) PUSH ledger VALUES(sendVal, recVal)",
      "D) UPDATE ledger INSERT(sendVal, recVal)"
    ],
    "answer": "B) INSERT INTO ledger(sendAc, recAc, amnt, ttype) VALUES(sendVal, recVal, amt, 'D')",
    "explanation": "INSERT INTO executes the write efficiently. Another key review point is Python's final file save mechanic."
  },
  {
    "id": 72,
    "context": "Recall that Python must rewrite the entire Accounts file if the transaction is fully successful.",
    "question": "What Python logic condition determines if the Accounts.csv file will be overwritten with the temporary list data?",
    "options": [
      "A) if success == 1:",
      "B) if file_open == True:",
      "C) if rollback == False:",
      "D) if account != NULL:"
    ],
    "answer": "A) if success == 1:",
    "explanation": "The success flag triggers the dangerous rewrite. SQL avoids this entirely."
  },
  {
    "id": 73,
    "context": "Instead of a success flag triggering a massive file overwrite, SQL uses a single keyword to make all updates permanent.",
    "question": "What is the very last SQL command executed to finalize the successful bank transaction?",
    "options": [
      "A) END",
      "B) SUCCESS",
      "C) COMMIT;",
      "D) SAVE TABLE"
    ],
    "answer": "C) COMMIT;",
    "explanation": "COMMIT finalizes the block natively. This difference highlights the overall ease of maintenance in DBMS."
  },
  {
    "id": 74,
    "context": "Maintenance is a massive factor for programmer productivity over years of a software's life.",
    "question": "Who or what is responsible for maintaining consistency and sanity checks during data updates in a DBMS?",
    "options": [
      "A) The end user",
      "B) The Python programmer",
      "C) The OS file system",
      "D) The DBMS's in-built mechanisms"
    ],
    "answer": "D) The DBMS's in-built mechanisms",
    "explanation": "Built-in mechanisms save vast amounts of programmer time. This leads to the ultimate conclusion of why we study DBMS."
  },
  {
    "id": 75,
    "context": "Ultimately, while flat files work for tiny projects, mastering DBMS is essential for modern, scalable, robust enterprise systems and advanced analytics.",
    "question": "If you aspire to be a data scientist handling massive, scalable, and robust data, what foundational system must you be really good at according to the lecture?",
    "options": [
      "A) Double-entry bookkeeping",
      "B) Python CSV file handlers",
      "C) Database Management Systems (DBMS)",
      "D) Physical file cabinet organization"
    ],
    "answer": "C) Database Management Systems (DBMS)",
    "explanation": "DBMS is the bedrock of data science and modern enterprise technology, concluding our deep dive into its evolution and superiority."
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
