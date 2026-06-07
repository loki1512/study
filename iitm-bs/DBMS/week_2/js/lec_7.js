
// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════
const QUESTIONS = [{"id":1,"context":"We begin by examining the mathematical foundation of relational models. A relation is defined fundamentally as a mathematical set.","question":"How does the relational model treat the ordering of rows within a table?","options":{"A":"Rows are strictly ordered by insertion time.","B":"Ordering of rows is inconsequential.","C":"Rows must be sorted alphabetically.","D":"Ordering determines the schema."},"answer":"B","explanation":"Because a relation is a set, the ordering of rows or tuples in a relation is inconsequential.","tables":"Table T1(A, B) with rows (a1, b1) and (a2, b2)","application":"If T1 has rows (a1, b1) then (a2, b2), reversing their order results in the exact same identical relational instance."},{"id":2,"context":"Following the understanding that row ordering does not matter, we look at another set property. This leads us to how relations handle identical tuples.","question":"If you have a table where the exact same tuple appears twice, what is true about this instance?","options":{"A":"It is a valid relational instance.","B":"It is not a valid relation because sets must have unique elements.","C":"It is valid if they have different index numbers.","D":"It is valid only in projection."},"answer":"B","explanation":"A set must always have its elements as unique, so all rows and tuples must be distinct, making duplicates not allowed.","tables":"Table T2(A, B) with rows (a1, b1), (a1, b1)","application":"T2 containing (a1, b1) twice is an invalid relation; only one unique row can exist."},{"id":3,"context":"Since a relation cannot have duplicate tuples, we must consider practical applications of this rule. Let's apply this to a basic modification of a valid table.","question":"What happens if a user attempts to insert a tuple that already exists in the relation?","options":{"A":"The relational system rejects the duplicate to maintain set uniqueness.","B":"The system adds a hidden unique ID to allow it.","C":"The table converts to a multi-set.","D":"The oldest tuple is overwritten."},"answer":"A","explanation":"Because relations are strict sets, all rows must be distinct.","tables":"Table T3(ID, Name): (1, 'Alice')","application":"Inserting (1, 'Alice') again into T3 will fail or be ignored because the tuple is already present."},{"id":4,"context":"We established that relation ordering is inconsequential and duplicates are forbidden. This applies equally to subsets.","question":"If two relations have the exact same distinct rows but in reverse order, how do they compare mathematically?","options":{"A":"They are different relations.","B":"They are identical instances.","C":"They have different schemas.","D":"One is a subset of the other."},"answer":"B","explanation":"Because a relation is a set, the ordering of elements is inconsequential, making them identical instances.","tables":"R1(A, B): (x, y), (z, w). R2(A, B): (z, w), (x, y).","application":"R1 and R2 are identical and can be used interchangeably."},{"id":5,"context":"Now that we know the structural rules of tables, we can filter them. The first operator slices data based on rows.","question":"What does the Select ($\\sigma$) operation primarily do?","options":{"A":"Extracts specific columns.","B":"Selects a subset of rows that satisfy a Boolean condition.","C":"Combines two tables.","D":"Sorts the tuples."},"answer":"B","explanation":"The select operation is used to select a subset of rows from a relational instance which satisfy a particular Boolean condition.","tables":"Table Emp(ID, Salary): (1, 500), (2, 800)","application":"$\\sigma_{Salary > 600}(Emp)$ will output only the row (2, 800)."},{"id":6,"context":"The Select operator filters rows using a Boolean condition. These conditions can be complex.","question":"Which of the following logical operators can be used within the subscript condition of a Select operator?","options":{"A":"Only equalities (=).","B":"Only inequalities (>).","C":"Conjunctions (AND) and disjunctions (OR).","D":"No logical operators are allowed."},"answer":"C","explanation":"The Boolean condition in a select can include conjunctions (and) or disjunctions (or).","tables":"Table T4(A, B, D): (a, b, 6), (x, y, 4)","application":"$\\sigma_{A=B \\land D>5}(T4)$ evaluates both conditions before returning a row."},{"id":7,"context":"We just used AND in our condition. Changing the logical operator changes the output size.","question":"If a Select condition uses an 'OR' instead of an 'AND', how might this affect the resulting relation compared to the original?","options":{"A":"It will always be empty.","B":"It might return the whole original relation itself.","C":"It removes duplicate columns.","D":"It throws a syntax error."},"answer":"B","explanation":"If any one of the OR conditions is satisfied, the tuple is taken, which means it is possible to get the whole relation itself as the output.","tables":"Table T5(A, D): (1, 10), (2, 2)","application":"$\\sigma_{A=1 \\lor D>1}(T5)$ will return both rows because the first satisfies A=1 and the second satisfies D>1."},{"id":8,"context":"Because select filters rows, it outputs a relation. Sometimes, no rows match the Boolean condition.","question":"What is the output of a Select operation if no tuples satisfy the given condition?","options":{"A":"An error.","B":"A single null value.","C":"An empty relation.","D":"The original relation."},"answer":"C","explanation":"It is possible that an operator yields an empty relation which does not have any tuple.","tables":"Table T6(A): (1), (2)","application":"$\\sigma_{A>5}(T6)$ returns an empty relation with schema A but 0 rows."},{"id":9,"context":"We established that Select takes out rows. However, we also need to take out columns horizontally.","question":"Which operator is responsible for selecting a subset of columns from a relation?","options":{"A":"Select ($\\sigma$)","B":"Project ($\\pi$)","C":"Union ($\\cup$)","D":"Rename ($\\rho$)"},"answer":"B","explanation":"Projection is written in terms of pi ($\\pi$) and takes out columns as a whole.","tables":"Table T7(A, B, C): (1, 2, 3)","application":"$\\pi_{A,C}(T7)$ erases column B and returns (1, 3)."},{"id":10,"context":"Projection removes columns. This removal can sometimes lead to unexpected data changes regarding the remaining rows.","question":"What happens automatically during a Project operation if removing a column causes two remaining tuples to become identical?","options":{"A":"The system throws an error.","B":"The duplicate rows are kept.","C":"One of the duplicate rows is deleted.","D":"The deleted column is restored."},"answer":"C","explanation":"Because every row in a relation has to be unique, duplicate rows generated by projection get deleted."},{"id":11,"context":"Duplicate removal is a core feature of projection. Let's verify how this affects output size.","question":"If relation R has 4 distinct tuples, can $\\pi_{A}(R)$ result in fewer than 4 tuples?","options":{"A":"No, projection only changes columns, not row counts.","B":"Yes, if the values in column A are not unique across the original 4 tuples.","C":"No, unless an AND condition is applied.","D":"Yes, but only if an empty relation is generated."},"answer":"B","explanation":"If attributes have duplicate values in the projected columns, unification is required and duplicate rows are removed.","tables":"Table T8(A, B): (alpha, 1), (alpha, 2)","application":"$\\pi_{A}(T8)$ yields only one row (alpha) because duplicates are removed."},{"id":12,"context":"We now know Select is for rows and Project is for columns. They are both unary operators.","question":"How many input relations do Select and Project operations require?","options":{"A":"Zero.","B":"One.","C":"Two.","D":"Unlimited."},"answer":"B","explanation":"Select and project are unary operators, meaning they take one relation and give you one relation.","tables":"Table T9(A): (1)","application":"You only pass a single table like T9 into a select or project operation."},{"id":13,"context":"Having covered unary operators, we move to classical set theory operations that take two relations. The first is Union.","question":"What is a strict prerequisite for applying the Union ($\\cup$) operator on two relations?","options":{"A":"They must have identical set of attributes.","B":"They must have the same number of rows.","C":"They must share no tuples.","D":"They must be purely numerical."},"answer":"A","explanation":"To take the union of two relations, they must have an identical set of attributes.","tables":"R1(A, B); R2(C, D)","application":"You cannot perform R1 $\\cup$ R2 because their attributes (AB vs CD) are not identical."},{"id":14,"context":"Union combines tuples from two identical schemas. As with projection, we must consider duplicates.","question":"What happens if a tuple exists in both input relations of a Union operation?","options":{"A":"It appears twice in the result.","B":"It is removed entirely from the result.","C":"The system uniquifies the result so it appears only once.","D":"It throws an error."},"answer":"C","explanation":"When putting tables together via union, you will have to uniquify so the duplicate tuple is had only once.","tables":"R1(A): (1), (2). R2(A): (2), (3).","application":"R1 $\\cup$ R2 results in (1), (2), (3) where (2) appears only once."},{"id":15,"context":"If Union adds sets together, another set operation subtracts them. This is called Difference.","question":"What does the Set Difference $(r - s)$ operation compute?","options":{"A":"Tuples that are in both r and s.","B":"Tuples that are in s but not in r.","C":"Tuples that are in r but not in s.","D":"All tuples combined minus the duplicates."},"answer":"C","explanation":"Difference finds what is there in r but not in s by taking out those things in s which are already in r."},{"id":16,"context":"Difference removes specific tuples. Let's consider what happens when there is no overlap.","question":"If relations r and s share no common tuples, what is the result of $r - s$?","options":{"A":"Relation s.","B":"Relation r.","C":"An empty relation.","D":"A Cartesian product."},"answer":"B","explanation":"Since difference removes elements of s that are in r, if none are in r, the result is the entirety of r.","tables":"r(A): (1). s(A): (2).","application":"r - s leaves (1) because there is nothing from s inside r to remove."},{"id":17,"context":"Difference identifies unique elements in one set. Conversely, we can find elements unique to BOTH sets.","question":"Which operation explicitly finds tuples that are common to both relations?","options":{"A":"Union ($\\cup$)","B":"Intersection ($\\cap$)","C":"Difference (-)","D":"Project ($\\pi$)"},"answer":"B","explanation":"Intersection yields tuples which are common to both relations.","tables":"r(A): (1), (2). s(A): (2), (3).","application":"r $\\cap$ s returns (2) because it is the only tuple common to both."},{"id":18,"context":"Intersection finds commonalities. Interestingly, it is not an entirely independent operator.","question":"How can the Intersection of r and s be written using only the Difference operator?","options":{"A":"s - (r - s)","B":"r - (r - s)","C":"(r - s) - s","D":"r - s"},"answer":"B","explanation":"Intersection and difference are not independent, as intersection can be written as r minus (r minus s).","tables":"r(A, B), s(A, B)","application":"Computing r - (r - s) takes all elements in r and subtracts elements strictly unique to r, leaving only the overlap."},{"id":19,"context":"Set operations require identical schemas. But relational models often need to combine different schemas.","question":"Which operator takes columns from two relations and makes all possible pairing combinations of their tuples?","options":{"A":"Intersection","B":"Union","C":"Cartesian Product","D":"Selection"},"answer":"C","explanation":"Cartesian product takes the columns of both relations and makes all possible pairing combinations of their tuples.","tables":"r(A): (1). s(B): (x), (y).","application":"r $\\times$ s creates combinations: (1, x) and (1, y)."},{"id":20,"context":"Cartesian product creates all combinations. This dramatically affects the size of the output.","question":"If relation r has 3 tuples and relation s has 5 tuples, how many tuples will be in their Cartesian product $(r \\times s)$?","options":{"A":"8","B":"15","C":"2","D":"0"},"answer":"B","explanation":"The product pairs all tuples, so multiplying the number of tuples gives the result; for example, 2 cross 4 is 8 tuples."},{"id":21,"context":"Cartesian product output sizes multiply. What happens to the schemas during this operation?","question":"If relation R has attributes A, B and relation S has attributes C, D, what is the schema of $R \\times S$?","options":{"A":"A, B","B":"C, D","C":"A, B, C, D","D":"A, C"},"answer":"C","explanation":"Cartesian product joins the schemas, taking the columns of both relations.","tables":"R(A, B), S(C, D)","application":"The output table schema will contain all 4 columns: A, B, C, D."},{"id":22,"context":"Combining schemas works perfectly if the column names are completely different. But what if they share a name?","question":"In a Cartesian product, what is done if both relations share an identically named attribute (e.g., 'B')?","options":{"A":"One column is deleted.","B":"The names are uniquified by qualifying them with the relation name (e.g., r.B and s.B).","C":"The Cartesian product fails.","D":"The values are summed."},"answer":"B","explanation":"Because you cannot have two attributes by the same name, you uniquify the name by qualifying it with the relation name.","tables":"r(A, B); s(B, C)","application":"The output schema for r $\\times$ s becomes r.A, r.B, s.B, s.C."},{"id":23,"context":"We qualify attribute names using relation names (r.B, s.B). This introduces a limitation if we want to cross a table with itself.","question":"Why does a self-cross product $(r \\times r)$ fail using standard attribute qualification?","options":{"A":"Because the table cannot be read twice.","B":"Because r.A and r.A do not uniquify since the relation names are identical.","C":"Because the resulting table would be empty.","D":"Because Cartesian product cannot accept identical inputs."},"answer":"B","explanation":"In a self-cross product, by qualification r.A and r.A do not uniquify because both relations are the same."},{"id":24,"context":"Because r.A and r.A do not uniquify, we must intervene. We need a new operator to solve this.","question":"Which operator is used to solve the self-cross product naming issue by changing the name of a relation?","options":{"A":"Rename ($\\rho$)","B":"Select ($\\sigma$)","C":"Project ($\\pi$)","D":"Union ($\\cup$)"},"answer":"A","explanation":"The rename operator ($\\rho$) allows us to change the name of a relation, so unification can happen easily."},{"id":25,"context":"The Rename operator ensures self-joins work. It can also rename specific columns if desired.","question":"If you are not happy with the qualified name r.B, the Rename operator allows you to change it to:","options":{"A":"Only another qualified name.","B":"Any arbitrary name, like 'p'.","C":"A numeric index.","D":"You cannot rename attributes, only tables."},"answer":"B","explanation":"If you are not happy with r.B, the renaming operator allows you to call r.B as say p."},{"id":26,"context":"We now have fundamental operators: Select, Project, Union, Difference, Product, Rename. Relational algebra's power comes from chaining them.","question":"What does it mean to do a 'composition of operations' in relational algebra?","options":{"A":"Writing query outputs to a hard drive.","B":"Building expressions using multiple operations, where the output of one relation is the input to another.","C":"Converting a relation to a single numerical value.","D":"Applying the same operator twice to clear duplicates."},"answer":"B","explanation":"You can compose any number of operations, like doing a Cartesian product followed by a selection to build up the algebra.","tables":"r(A, B), s(C, D)","application":"$\\sigma_{A=C}(r \\times s)$ creates combinations first, then immediately filters them."},{"id":27,"context":"A common composition is a Cartesian product followed by a Selection. This specific pattern filters combinations.","question":"In the composition $\\sigma_{A=C}(r \\times s)$, which tuples from the Cartesian product will survive the selection?","options":{"A":"All tuples.","B":"Only tuples where the value in attribute A is equal to the value in attribute C.","C":"Only tuples where A and C are null.","D":"Tuples where A is greater than C."},"answer":"B","explanation":"The selection ensures only tuples will survive in which A is equal to C, with everything else being removed."},{"id":28,"context":"Filtering a Cartesian product with equalities is so useful it gets its own dedicated operator. This operator is a specific type of join.","question":"What is the defining characteristic of a Natural Join ($\\bowtie$)?","options":{"A":"It pairs tuples randomly.","B":"It only pairs tuples that have identical values on each attribute that share the same name between the two relations.","C":"It unions tables automatically.","D":"It selects identical columns and deletes everything else."},"answer":"B","explanation":"A natural join only takes pairs of tuples that have the same value on each attribute that shares the same name in the intersection of their schemas."},{"id":29,"context":"Natural Join implicitly matches on columns with the same name. If no columns share a name, it behaves differently.","question":"If relations R and S have completely disjoint schemas (no identical attribute names), how does Natural Join behave?","options":{"A":"It fails and throws an error.","B":"It results in an empty relation.","C":"It effectively acts as a standard Cartesian product.","D":"It returns only relation R."},"answer":"C","explanation":"Because natural join pairs identical attributes, if none exist, it just takes every pair of tuples, which is the definition of a Cartesian product."},{"id":30,"context":"Natural Join shines when there are overlapping columns. Consider matching values on these columns.","question":"If R has row (1, 2) and S has row (3, 4), and they share the second attribute name, will they be paired in a Natural Join?","options":{"A":"Yes, because all tuples are paired.","B":"No, because the values (2 and 4) in the shared attribute are not identical.","C":"Yes, because 1 and 3 are different.","D":"No, because the first attributes do not match."},"answer":"B","explanation":"Tuples are only kept if they have identical values on those identical attributes, so 2 and 4 do not match."},{"id":31,"context":"We keep only matching rows in a Natural Join. What happens to the columns themselves in the final output?","question":"In a Natural Join matching on identical column 'B', what happens to r.B and s.B in the output relation?","options":{"A":"Both are kept and renamed.","B":"Both are dropped.","C":"Since they necessarily have identical values, one is removed to avoid redundancy.","D":"They are added together mathematically."},"answer":"C","explanation":"Necessarily both r.B and s.B have identical values, so it is redundant to keep both, meaning one is removed from the table."},{"id":32,"context":"By removing the redundant column, Natural Join cleans up the schema. The remaining matched column gets a clean name.","question":"Does the remaining matched column in a Natural Join output need a qualified name (like r.B)?","options":{"A":"Yes, to indicate its origin.","B":"No, once the duplicate is removed, the column does not need to be called by a qualified name.","C":"Yes, it defaults to s.B.","D":"No, it is left unnamed."},"answer":"B","explanation":"Once you remove the redundant column, you do not need to call it by a qualified name, you simply call it B."},{"id":33,"context":"Natural Join is just one of the binary operators. Binary operators always take exactly two inputs.","question":"Which of the following is NOT a binary operator?","options":{"A":"Union","B":"Cartesian Product","C":"Select","D":"Difference"},"answer":"C","explanation":"Union, intersection, difference, Cartesian product, and natural join are binary operators; select is unary."},{"id":34,"context":"Relational operators (unary and binary) all share one strict structural rule. This rule defines the language.","question":"What is the guaranteed output format of every relational algebra operator discussed so far?","options":{"A":"A boolean value.","B":"A relation (table).","C":"A numeric integer.","D":"A string."},"answer":"B","explanation":"The input will always have to be a relation and the output will always be a relation."},{"id":35,"context":"Relational operators output tables. However, query processing often needs summaries, requiring a new type of operator.","question":"What is the main purpose of Aggregate operators?","options":{"A":"To combine tables like Union.","B":"To perform arithmetic (like SUM or MAX) on one or more columns to produce a summary value.","C":"To rename schemas.","D":"To cross multiply columns."},"answer":"B","explanation":"Aggregate operations do numerical arithmetic on tuples to produce a single value."},{"id":36,"context":"Aggregate operators process numerical columns. Unlike relational operators, their output is fundamentally different.","question":"What is the output format of an aggregate operator?","options":{"A":"A new relation with multiple tuples.","B":"A single numerical value.","C":"A Cartesian product.","D":"An identical copy of the input."},"answer":"B","explanation":"Aggregate operations necessarily produce a single value, they do not produce a table."},{"id":37,"context":"Aggregations output a single value. But they can be chained with relational operators beforehand.","question":"Can you perform an aggregation on a relation that has just been filtered by a Select operator?","options":{"A":"No, aggregations only work on base tables.","B":"Yes, you can take a relation, filter it (e.g., B > 2), and then sum the resulting column.","C":"No, Select converts numbers to text.","D":"Yes, but only if the aggregation is MAX."},"answer":"B","explanation":"You can do an aggregation on a relationally operated file, such as doing a Select for values greater than 2 before performing a sum."},{"id":38,"context":"Because aggregations can follow relational operators, they are highly useful in database queries. However, they occupy a strange place in the theory.","question":"Are aggregate operators considered fundamental to pure relational algebra?","options":{"A":"Yes, they are the most fundamental operators.","B":"No, pure relational algebra only talks about operations that output relations.","C":"Yes, because they handle numbers.","D":"No, because they are not implemented in SQL."},"answer":"B","explanation":"Aggregation operators are not fundamental to pure relational algebra, because relational algebra only talks about relation-to-relation operations."},{"id":39,"context":"Despite not being fundamental, aggregations are critical for practical languages like SQL. They perform functions like SUM, AVG, MIN, and MAX.","question":"Which of the following is an example of an Aggregate operation?","options":{"A":"Natural Join","B":"Finding the average execution time of a query.","C":"Projecting the name column.","D":"Renaming relation R to S."},"answer":"B","explanation":"The average execution time of a query or maximum salary are different aggregations that can happen."},{"id":40,"context":"We have explored unary, binary, and aggregate operations. Let's test combinations.","question":"If you apply SUM to a column of an empty relation, what type of operation is this conceptually?","options":{"A":"An invalid composition.","B":"An aggregation on a relation.","C":"A pure relational algebra operation.","D":"A set difference."},"answer":"B","explanation":"It is an aggregation operation taking an input table (even if empty) to produce a value."},{"id":41,"context":"Let's revisit the Select operator to ensure we understand its mathematical strictness.","question":"If a Select operator specifies a condition $A=B$, and a tuple contains $A=\\alpha$ and $B=\\beta$, what happens to this tuple?","options":{"A":"It is selected.","B":"It is crossed out (rejected) because $\\alpha$ is not equal to $\\beta$.","C":"It is renamed.","D":"It throws an error."},"answer":"B","explanation":"The tuple is crossed out because A is not equal to B."},{"id":42,"context":"Selection can use multiple constraints. We use AND to chain them.","question":"In the condition $A=B \\land D>5$, if a tuple has $A=\\alpha$, $B=\\alpha$, and $D=4$, is it selected?","options":{"A":"Yes, because $A=B$ is true.","B":"No, because while $A=B$ is true, D is not greater than 5, and both must be true for AND.","C":"Yes, because $D>5$ is ignored.","D":"No, because $\\alpha$ is not a number."},"answer":"B","explanation":"Since there is a conjunction (and), you have to check if D is greater than 5; if D is not greater than 5, it is canceled out."},{"id":43,"context":"Let's revisit Projection and duplicate removal.","question":"If relation R has columns Name and Dept. Three tuples are ('John', 'Sales'), ('Mary', 'Sales'), ('Bob', 'HR'). What is $\\pi_{Dept}(R)$?","options":{"A":"('Sales'), ('Sales'), ('HR')","B":"('John'), ('Mary'), ('Bob')","C":"('Sales'), ('HR')","D":"An empty relation."},"answer":"C","explanation":"Projection takes the specified column and removes duplicate rows, so the two 'Sales' entries become one."},{"id":44,"context":"Projection uniquely outputs columns. Let's try an edge case.","question":"If you project all attributes of relation r using $\\pi$, what is the result?","options":{"A":"An empty relation.","B":"The identical relation r.","C":"A relation with no duplicates (if r was a valid set, it's unchanged).","D":"Both B and C are correct."},"answer":"D","explanation":"Projecting all columns leaves the rows intact, and since r is a valid relation, it already has no duplicates, leaving it identical."},{"id":45,"context":"Let's look closely at Union compatibility again.","question":"Can you union a table of 'Students' with a table of 'Courses' if they have completely different columns?","options":{"A":"Yes, it creates a Cartesian product.","B":"No, Union requires identical sets of attributes.","C":"Yes, missing columns are filled with nulls.","D":"No, unless you rename them."},"answer":"B","explanation":"If attributes are AB and CD, you cannot do any union; relations must have identical sets of attributes."},{"id":46,"context":"Difference relies on identical schemas as well.","question":"If r and s are identical instances, what does $r - s$ evaluate to?","options":{"A":"r","B":"s","C":"An empty relation.","D":"r + s"},"answer":"C","explanation":"Difference takes out things in s which are in r. Since all elements match, everything is removed, leaving an empty relation."},{"id":47,"context":"Intersection is simply the overlap.","question":"If r has (1), (2), (3) and s has (3), (4), (5), what is $r \\cap s$?","options":{"A":"(1), (2)","B":"(4), (5)","C":"(3)","D":"(1), (2), (3), (4), (5)"},"answer":"C","explanation":"Intersection yields tuples which are common to both, which in this case is only (3)."},{"id":48,"context":"Cartesian Product multiplies combinations unconditionally.","question":"If r is an empty relation (0 tuples) and s has 10 tuples, what is the size of $r \\times s$?","options":{"A":"10","B":"0","C":"Error","D":"1"},"answer":"B","explanation":"The product of 0 tuples and 10 tuples is 0 tuples, as no pairings can be made."},{"id":49,"context":"Cartesian product unifies schemas.","question":"If r has 2 columns and s has 3 columns, how many columns will $r \\times s$ have?","options":{"A":"2","B":"3","C":"5","D":"6"},"answer":"C","explanation":"The output schema is the union of attributes, so 2 + 3 gives 5 columns."},{"id":50,"context":"Rename ensures relation name uniqueness.","question":"Is the Rename operation ($\\rho$) primarily used to change data values or metadata (names)?","options":{"A":"Data values.","B":"Metadata (schema names and relation names).","C":"Both equally.","D":"Neither."},"answer":"B","explanation":"Rename is used to change the name of an attribute or a relation, which is metadata, not the tuple values themselves."},{"id":51,"context":"Composing operators allows complex queries.","question":"Which of the following describes a composition?","options":{"A":"$\\pi_{A}(\\sigma_{A>5}(r))$","B":"r + s","C":"MAX(r)","D":"r"},"answer":"A","explanation":"Composing operations means nesting them, like doing a selection and then a projection."},{"id":52,"context":"Natural join is a specialized composition.","question":"True or False: Natural Join can be expressed purely through a composition of Cartesian Product, Select, and Project.","options":{"A":"True","B":"False","C":"Only if there are no overlapping columns.","D":"Only if there are aggregate operators."},"answer":"A","explanation":"A natural join is executed by taking a cross product, doing an equality selection on identical columns, and projecting out the duplicates."},{"id":53,"context":"Natural Join behaves automatically based on schema names.","question":"What is the primary risk of using Natural Join carelessly?","options":{"A":"It deletes tables.","B":"It might match on a column just because it shares a name, even if the data meanings are unrelated.","C":"It changes numeric values.","D":"It creates duplicate columns."},"answer":"B","explanation":"Natural join automatically joins on ANY attributes that have identical names between R and S, which dictates what tuples are paired."},{"id":54,"context":"Let's review the output format of operations.","question":"Which operator type fundamentally breaks the 'input is relation, output is relation' rule?","options":{"A":"Unary relational operators.","B":"Binary relational operators.","C":"Aggregate operators.","D":"Composition operators."},"answer":"C","explanation":"Relational operators always produce a relation, whereas aggregate operations produce a single numerical value."},{"id":55,"context":"Aggregate operators have requirements on the data they process.","question":"Can you perform a SUM aggregation on a column containing text strings (like 'Alice', 'Bob')?","options":{"A":"Yes, it joins them.","B":"No, the type of the column has to be such that the specific numerical aggregate operation is possible.","C":"Yes, it returns the character count.","D":"Yes, it randomly selects one."},"answer":"B","explanation":"The type of that column has to be such that the particular aggregate operation is possible, meaning numerical for SUM."},{"id":56,"context":"Aggregations provide essential numerical summaries for querying.","question":"Which of the following aggregate operations finds the largest value in a column?","options":{"A":"SUM","B":"AVG","C":"MAX","D":"MIN"},"answer":"C","explanation":"You can do a max on a column to get the highest value, such as maximum salary."},{"id":57,"context":"We must finally assess the limits of relational algebra as a computational language. It is powerful, but has boundaries.","question":"Is Relational Algebra considered 'Turing complete'?","options":{"A":"Yes.","B":"No.","C":"Only in SQL.","D":"Only when using Cartesian Products."},"answer":"B","explanation":"Relational algebra is not Turing complete."},{"id":58,"context":"The fact that relational algebra is not Turing complete has practical implications.","question":"What does it mean practically that relational algebra is NOT Turing complete?","options":{"A":"It cannot run on modern computers.","B":"There are programs and problems for which no relational algebraic solution can be written.","C":"It cannot process numbers.","D":"It is completely useless."},"answer":"B","explanation":"Not Turing complete means there are programs for which no relational algebraic solution can be written."},{"id":59,"context":"Because relational algebra has limits, database systems must compensate.","question":"How do database systems overcome the fact that relational algebra is not Turing complete?","options":{"A":"They delete the database.","B":"They necessarily rely on a host language (like Java or Python) to handle complex procedural logic.","C":"They guess the answers.","D":"They ignore complex queries."},"answer":"B","explanation":"Because there are problems relational algebra cannot solve, you will necessarily have to go with a host language."},{"id":60,"context":"This concludes our comprehensive pass through the core concepts: set properties, basic unary and binary operators, aggregations, and computational limits.","question":"As a final summary, what is the core principle ensuring that any relational operation (excluding aggregations) can be used as the input for another relational operation?","options":{"A":"All data is stored in memory.","B":"Each query input is a table and each query output is a table.","C":"Queries run instantly.","D":"Natural join automatically formats output."},"answer":"B","explanation":"Because each query input is a table and each query output is a table, operators can be endlessly composed together."}];
 
// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let state = {
  phase: 'context',   // context | question | explanation | final
  qIdx: 0,
  selected: null,
  answered: [],       // {correct, chosen}
  correctCount: 0,
  wrongCount: 0,
};
 
// ══════════════════════════════════════════════
//  UTILITY
// ══════════════════════════════════════════════
function normalizeAnswer(s){
  return String(s).replace(/\s+/g,'').toUpperCase().replace(/;$/,'');
}
 
function renderMath(){
  if(window.MathJax && MathJax.typesetPromise){
    MathJax.typesetPromise([document.getElementById('sf-card')]).catch(()=>{});
  }
}
 
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
 
// Parse inline $...$ and $$...$$ to MathJax
function renderInline(text){
  return escapeHtml(text)
    .replace(/\$\$(.+?)\$\$/gs,'$$$$$$1$$$$')
    .replace(/\$([^$\n]+?)\$/g,'\\($1\\)');
}
 
// Parse table descriptions like "T1(A,B): (v1,v2), (v3,v4)"
function parseTableText(raw){
  if(!raw) return '';
  // split by ". " or "\n" to get multiple tables
  const parts = raw.split(/\.\s+(?=[A-Za-z])|\n/);
  return parts.map(part=>{
    // match TableName(cols): (r1c1,r1c2), ...
    const m = part.match(/^([A-Za-z0-9_.\s,;]+?)\(([^)]+)\)\s*(?:with rows\s*)?(.*)/i);
    if(!m) return `<p class="sf-content" style="font-size:12px;color:var(--sf-text-muted)">${escapeHtml(part)}</p>`;
    const name = m[1].trim();
    const cols = m[2].split(',').map(c=>c.trim());
    const rowStr = m[3];
    const rows = [];
    const rx = /\(([^)]+)\)/g;
    let rm;
    while((rm=rx.exec(rowStr))!==null){
      rows.push(rm[1].split(',').map(v=>v.trim()));
    }
    let html = `<div class="sf-table-wrap"><table class="sf-table"><caption style="caption-side:top;text-align:left;font-size:10px;color:var(--sf-accent);letter-spacing:.1em;text-transform:uppercase;padding-bottom:6px;">${escapeHtml(name)}</caption><thead><tr>`;
    cols.forEach(c=>{html+=`<th>${escapeHtml(c)}</th>`;});
    html+=`</tr></thead><tbody>`;
    if(rows.length===0){
      html+=`<tr>${cols.map(()=>'<td><em style="color:var(--sf-text-muted)">—</em></td>').join('')}</tr>`;
    } else {
      rows.forEach(row=>{
        html+=`<tr>${row.map(v=>`<td>${escapeHtml(v)}</td>`).join('')}</tr>`;
      });
    }
    html+=`</tbody></table></div>`;
    return html;
  }).join('');
}
 
// Render ``` code blocks
function renderCode(text){
  return text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_,lang,code)=>{
    return `<pre class="sf-code">${escapeHtml(code.trim())}</pre>`;
  });
}
 
function processContent(text){
  if(!text) return '';
  text = renderCode(text);
  // convert remaining plain text (non-html) lines to paragraphs — but don't wrap html tags
  return text.split('\n').map(line=>{
    if(line.startsWith('<')) return line;
    return line.trim() ? `<p>${renderInline(line)}</p>` : '';
  }).join('');
}
 
// ══════════════════════════════════════════════
//  SCORE UI
// ══════════════════════════════════════════════
function updateHeader(){
  const answered = state.answered.length;
  const total = answered;
  const c = state.correctCount, w = state.wrongCount;
  document.getElementById('sc-correct').textContent = c;
  document.getElementById('sc-total').textContent = total;
  document.getElementById('sc-acc').textContent = total ? Math.round(c/total*100)+'%' : '—%';
  const pct = state.qIdx / QUESTIONS.length * 100;
  document.getElementById('sf-progress').style.width = pct+'%';
  document.getElementById('sf-prog-text').textContent = `${state.qIdx} / ${QUESTIONS.length}`;
}
 
// ══════════════════════════════════════════════
//  RENDER PHASES
// ══════════════════════════════════════════════
function renderContext(){
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  card.innerHTML = `
    <div class="sf-context-badge">CONCEPT ${state.qIdx+1} / ${QUESTIONS.length}</div>
    <div class="sf-label">Context</div>
    <div class="sf-content">${processContent(q.context)}</div>
    ${q.tables ? parseTableText(q.tables) : ''}
    <p class="sf-next-hint" style="margin-top:auto;padding-top:12px;">Press <kbd class="sf-kb-key">Enter</kbd> or click Continue to answer the question.</p>
    <div class="sf-actions" style="margin-top:14px;">
      ${state.qIdx>0?`<button class="sf-action sf-action-secondary" id="btn-prev" tabindex="0">◀ PREV</button>`:''}
      <button class="sf-action" id="btn-ctx-next" tabindex="0">CONTINUE ▶</button>
    </div>`;
  renderMath();
  document.getElementById('btn-ctx-next').focus();
  document.getElementById('btn-ctx-next').addEventListener('click',()=>goPhase('question'));
  document.getElementById('btn-prev')?.addEventListener('click', prevQuestion);
}
 
function renderQuestion(){
  const q = QUESTIONS[state.qIdx];
  const card = document.getElementById('sf-card');
  const keys = Object.keys(q.options);
  const optHtml = keys.map((k,i)=>`
    <li>
      <button class="sf-opt-btn" data-key="${k}" tabindex="0">
        <span class="sf-key-hint">${i+1}</span> <strong>${k}.</strong> ${renderInline(q.options[k])}
      </button>
    </li>`).join('');
 
  card.innerHTML = `
    <div class="sf-label">Question ${state.qIdx+1}</div>
    <div class="sf-content">${processContent(q.question)}</div>
    <ul class="sf-options" id="sf-opts">${optHtml}</ul>
    <div class="sf-actions">
      <button class="sf-action sf-action-secondary" id="btn-skip" tabindex="0">SKIP</button>
      <button class="sf-action" id="btn-submit" disabled tabindex="0">SUBMIT ▶</button>
    </div>`;
 
  renderMath();
  // focus first option
  card.querySelectorAll('.sf-opt-btn')[0]?.focus();
 
  card.querySelectorAll('.sf-opt-btn').forEach(btn=>{
    btn.addEventListener('click',()=>selectOption(btn.dataset.key));
  });
  document.getElementById('btn-submit').addEventListener('click', submitAnswer);
  document.getElementById('btn-skip').addEventListener('click',()=>{
    state.answered.push({correct:false,chosen:'—'});
    advanceQuestion();
  });
}
 
function selectOption(key){
  state.selected = key;
  document.querySelectorAll('.sf-opt-btn').forEach(b=>{
    b.classList.toggle('selected', b.dataset.key===key);
  });
  document.getElementById('btn-submit').disabled = false;
}
 
function submitAnswer(){
  const q = QUESTIONS[state.qIdx];
  const correct = state.selected === q.answer;
  state.answered.push({correct, chosen: state.selected});
  if(correct) state.correctCount++; else state.wrongCount++;
  updateHeader();
  renderExplanation(correct);
}
 
function renderExplanation(correct){
  state.phase = 'explanation';
  const q = QUESTIONS[state.qIdx];
  const keys = Object.keys(q.options);
  // freeze options
  document.querySelectorAll('.sf-opt-btn').forEach(btn=>{
    btn.disabled = true;
    if(btn.dataset.key === q.answer) btn.classList.add('correct-reveal');
    else if(btn.dataset.key === state.selected) btn.classList.add('wrong-reveal');
  });
 
  // inject feedback + explanation below options
  const actions = document.querySelector('.sf-actions');
  const fb = document.createElement('div');
  fb.className='sf-feedback '+(correct?'ok':'fail');
  fb.textContent = correct ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${q.answer}`;
  actions.before(fb);
 
  const expl = document.createElement('div');
  expl.className='sf-explanation';
  expl.innerHTML = processContent(q.explanation);
  fb.after(expl);
 
  if(q.application){
    const app = document.createElement('div');
    app.className='sf-application';
    app.innerHTML=`<strong>▸ APPLICATION</strong> — ${processContent(q.application)}`;
    expl.after(app);
  }
 
  // swap actions
  actions.innerHTML='';
  if(state.qIdx < QUESTIONS.length-1){
    const btn = document.createElement('button');
    btn.className='sf-action';
    btn.textContent='NEXT ▶';
    btn.tabIndex=0;
    btn.addEventListener('click', advanceQuestion);
    actions.appendChild(btn);
    btn.focus();
  } else {
    const btn = document.createElement('button');
    btn.className='sf-action';
    btn.textContent='FINISH ✓';
    btn.tabIndex=0;
    btn.addEventListener('click', showFinal);
    actions.appendChild(btn);
    btn.focus();
  }
  renderMath();
}
 
function advanceQuestion(){
  state.qIdx++;
  state.selected = null;
  if(state.qIdx >= QUESTIONS.length){ showFinal(); return; }
  updateHeader();
  goPhase('context');
}
 
function prevQuestion(){
  if(state.qIdx===0) return;
  state.qIdx--;
  state.selected=null;
  updateHeader();
  goPhase('context');
}
 
function goPhase(ph){
  state.phase = ph;
  if(ph==='context') renderContext();
  else if(ph==='question') renderQuestion();
  else if(ph==='final') showFinal();
}
 
function showFinal(){
  state.phase='final';
  const total=QUESTIONS.length;
  const c=state.correctCount, w=state.wrongCount;
  const attempted=state.answered.length;
  const acc = attempted ? Math.round(c/attempted*100) : 0;
  let grade='', gradeColor='var(--sf-accent)';
  if(acc>=90){grade='DISTINCTION';gradeColor='var(--sf-success)';}
  else if(acc>=75){grade='MERIT';gradeColor='var(--sf-accent)';}
  else if(acc>=50){grade='PASS';gradeColor='var(--sf-warn)';}
  else{grade='RETRY';gradeColor='var(--sf-error)';}
 
  const dots = QUESTIONS.map((_,i)=>{
    const a=state.answered[i];
    const cls = a ? (a.correct?'c':'w') : '';
    return `<div class="sf-dot ${cls}" title="Q${i+1}${a?(' — '+(a.correct?'✓':'✗ '+a.chosen)):''}"></div>`;
  }).join('');
 
  document.getElementById('sf-card').innerHTML=`
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
      <p class="sf-final-note">After ${Math.ceil(60/20)} passes through all concepts, you should be able to explain each operator from memory. Keep practising!</p>
      <button class="sf-action" id="btn-restart" style="margin-top:8px;" tabindex="0">↺ RESTART QUIZ</button>
    </div>`;
  document.getElementById('btn-restart').addEventListener('click', restartQuiz);
  document.getElementById('sf-progress').style.width='100%';
  document.getElementById('sf-prog-text').textContent=`${QUESTIONS.length} / ${QUESTIONS.length}`;
}
 
function restartQuiz(){
  state={phase:'context',qIdx:0,selected:null,answered:[],correctCount:0,wrongCount:0};
  updateHeader();
  goPhase('context');
}
 
// ══════════════════════════════════════════════
//  KEYBOARD
// ══════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  // Don't intercept if focused on input/textarea
  const tag = document.activeElement?.tagName;
  if(tag==='TEXTAREA'||tag==='INPUT') return;
 
  if(state.phase==='context'){
    if(e.key==='Enter'){ e.preventDefault(); goPhase('question'); }
    return;
  }
  if(state.phase==='question'){
    if(e.key>='1'&&e.key<='4'){
      e.preventDefault();
      const keys=Object.keys(QUESTIONS[state.qIdx].options);
      const k=keys[parseInt(e.key)-1];
      if(k) selectOption(k);
      return;
    }
    if(e.key==='Enter'){
      e.preventDefault();
      const sub=document.getElementById('btn-submit');
      if(sub&&!sub.disabled) submitAnswer();
      return;
    }
    return;
  }
  // explanation / final
  if(e.key==='Enter'){
    e.preventDefault();
    const nb=document.querySelector('.sf-actions .sf-action');
    if(nb) nb.click();
  }
});
 
// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
updateHeader();
goPhase('context');
