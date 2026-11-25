export const CODING_MODULES = [
  {
    "id": "zero",
    "name": "28 · Absolute zero: computers and first programs",
    "area": "Software engineering",
    "level": "Starter",
    "color": "#84c5ff",
    "description": "From files and terminals to running, tracing and correcting your first Python programs."
  },
  {
    "id": "pycore",
    "name": "29 · Python fluency and object model",
    "area": "Software engineering",
    "level": "Intermediate",
    "color": "#84c5ff",
    "description": "Containers, references, iteration, object-oriented design and reliable file handling."
  },
  {
    "id": "algocore",
    "name": "30 · Data structures and algorithms from scratch",
    "area": "Software engineering",
    "level": "Intermediate",
    "color": "#84c5ff",
    "description": "Search, sorting, stacks, queues, hash maps and complexity with invariant-based explanations."
  },
  {
    "id": "webcore",
    "name": "31 · Web foundations: HTML, CSS and JavaScript",
    "area": "Software engineering",
    "level": "Starter",
    "color": "#84c5ff",
    "description": "Build accessible pages and understand the browser before frameworks."
  },
  {
    "id": "tsreact",
    "name": "32 · TypeScript, React and frontend engineering",
    "area": "Software engineering",
    "level": "Intermediate",
    "color": "#84c5ff",
    "description": "Type safety, component state, forms, effects and practical UI architecture."
  },
  {
    "id": "backend",
    "name": "33 · Backend engineering, networking and APIs",
    "area": "Software engineering",
    "level": "Advanced",
    "color": "#84c5ff",
    "description": "HTTP, API contracts, authentication, relational transactions and reliable services."
  },
  {
    "id": "oscore",
    "name": "34 · Computer systems, OS and concurrency",
    "area": "Software engineering",
    "level": "Advanced",
    "color": "#84c5ff",
    "description": "Understand processes, memory, threads, asynchronous IO and networks."
  },
  {
    "id": "quality",
    "name": "35 · Professional testing, debugging and security",
    "area": "Software engineering",
    "level": "Advanced",
    "color": "#84c5ff",
    "description": "Reproduce defects, write useful tests, review changes and protect applications."
  },
  {
    "id": "arch",
    "name": "36 · Software architecture and engineering design",
    "area": "Software engineering",
    "level": "Expert",
    "color": "#84c5ff",
    "description": "Build maintainable systems with interfaces, observability and clear tradeoffs."
  },
  {
    "id": "cscore",
    "name": "37 · Low-level programming and language transfer",
    "area": "Software engineering",
    "level": "Intermediate",
    "color": "#84c5ff",
    "description": "C memory, Java and transferable programming concepts; optional systems specialization."
  },
  {
    "id": "build",
    "name": "38 · Independent coding and professional product delivery",
    "area": "Software engineering",
    "level": "Expert",
    "color": "#84c5ff",
    "description": "No-AI exercises, full-stack project execution, portfolio and interview evidence."
  }
];
export const CODING_LESSONS = [
  {
    "module": "zero",
    "title": "Files, folders and the terminal",
    "objective": "Locate a file and run it deliberately.",
    "theory": "A computer stores persistent data in files; a running program occupies memory and is managed as a process. A filename extension is a convention, not magic: a text file named hello.py contains Python source. A directory groups files. A path tells the operating system where to find one. Absolute paths start from a root; relative paths are resolved from the current working directory.\n\nOn Windows open PowerShell, type Get-Location, then mkdir fabready and cd fabready. In VS Code open this folder rather than an unrelated file. Create hello.py, type the sample, save with Ctrl+S, and run python hello.py. If python is unavailable, try py --version on Windows and install Python from python.org if needed. On Linux/macOS use pwd, mkdir, cd and python3. A terminal executes commands; the Python interactive prompt executes Python expressions. Do not type terminal commands into the Python prompt.\n\nIf a command fails, read the exact error. File not found is different from Python not found: first check the current directory, then list files, then check the interpreter. Do not reinstall everything before identifying the failure. Keep projects in their own folders and never run random downloaded scripts.",
    "example": "If the working directory is C:\\study and hello.py lives in C:\\study\\week1, either cd week1 or run python week1/hello.py.",
    "pitfall": "Saving a file in Downloads while running commands in Documents.",
    "task": "A saved hello.py lives in a subfolder week1. What should you do before executing it?",
    "answer": "Change to week1 or supply the correct relative path.",
    "quiz": {
      "q": "A saved hello.py lives in a subfolder week1. What should you do before executing it?",
      "options": [
        "Rename Python",
        "Change to week1 or supply the correct relative path.",
        "Delete the folder",
        "Type Python code into PowerShell"
      ],
      "correct": 1,
      "why": "Change to week1 or supply the correct relative path."
    },
    "minutes": 40,
    "code": "print(\"Hello, engineer!\")",
    "reference": "https://docs.python.org/3/tutorial/"
  },
  {
    "module": "zero",
    "title": "Values, types and expressions",
    "objective": "Trace a simple expression without running it.",
    "theory": "A value is a piece of data: 7, 2.5, \"wafer\", True. Its type determines which operations are valid. An integer is exact within Python’s arbitrary-precision integer range; a floating-point number is an approximation; a string is text; a Boolean represents truth. Assignment binds a name to a value. The equals sign is assignment, while == compares two values.\n\nEvaluate the right side before binding the left. For x = 2 + 3 * 4, multiplication precedes addition; x becomes 14. Parentheses make intent explicit. Use / for real division, // for floor division and % for remainder. For negative numbers floor division rounds toward negative infinity. Convert input text with int or float when numeric interpretation is intended.\n\nPython uses binary floating-point, so 0.1 + 0.2 is usually not exactly 0.3. Compare measured floating-point values with a tolerance, not exact equality. For currency, use integer minor units or Decimal with clear rounding rules. Use print and type to inspect intermediate values. A TypeError indicates an operation is inappropriate for a type, not that the computer is broken.",
    "example": "count = int(\"12\"); count + 3 produces 15. Without conversion, \"12\" + \"3\" produces \"123\".",
    "pitfall": "Confusing assignment with equality; treating all input as numeric.",
    "task": "What is the result of 2 + 3 * 4?",
    "answer": "14",
    "quiz": {
      "q": "What is the result of 2 + 3 * 4?",
      "options": [
        "20",
        "24",
        "14",
        "9"
      ],
      "correct": 2,
      "why": "14"
    },
    "minutes": 40,
    "code": "x = 2 + 3 * 4\nprint(x, type(x))\nprint(7 // 3, 7 % 3)",
    "reference": ""
  },
  {
    "module": "zero",
    "title": "Conditions and Boolean reasoning",
    "objective": "Design branches that cover every input.",
    "theory": "A condition is an expression that is true or false. An if statement executes its indented body only when its condition is true. An elif is examined only if preceding branches did not run; else covers everything remaining. Indentation defines structure in Python. Use four spaces and keep nested logic shallow.\n\nThe operators and, or and not combine conditions. Python short-circuits: in x != 0 and y / x > 2, division is skipped if x is zero. Use comparisons such as 0 <= score <= 100. Think in mutually exclusive ranges; order matters. If score >= 60 comes before score >= 90, a score of 95 enters the first branch and never reaches the second.\n\nBefore coding, draw a truth table or list boundaries. Test just below, at, and just above each threshold. Treat invalid input separately rather than silently assigning it a valid category. In manufacturing, a threshold may require units and instrument calibration; an exact numerical rule is not automatically a meaningful alarm.",
    "example": "If 0 <= temperature <= 100 is valid, -1 and 101 are invalid; 0 and 100 are valid boundary cases.",
    "pitfall": "Checking broad conditions before narrow ones or using or when both conditions must hold.",
    "task": "Which condition accepts only values between 0 and 100 inclusive?",
    "answer": "0 <= x <= 100",
    "quiz": {
      "q": "Which condition accepts only values between 0 and 100 inclusive?",
      "options": [
        "x >= 0 or x <= 100",
        "x > 0 and x < 100",
        "x == 0 and x == 100",
        "0 <= x <= 100"
      ],
      "correct": 3,
      "why": "0 <= x <= 100"
    },
    "minutes": 40,
    "code": "def grade(x):\n    if not 0 <= x <= 100:\n        return \"invalid\"\n    if x >= 90:\n        return \"A\"\n    return \"other\"\nprint(grade(90))",
    "reference": ""
  },
  {
    "module": "zero",
    "title": "Loops, state and tracing",
    "objective": "Follow changing variables line by line.",
    "theory": "A loop repeats a block. A for loop iterates over an iterable such as a list or range. range(3) generates 0, 1, 2, stopping before 3. A while loop repeats while its condition is true; if the condition never changes, it may never finish. Choose for when iterating over known items; choose while when completion depends on evolving state.\n\nAn accumulator stores a running result. Start total at zero, then add each value. A counter increments only when a condition holds. Trace the values on paper: before the loop, after each iteration, after the loop. In a loop invariant, a statement remains true after every iteration, such as total equaling the sum of already processed elements.\n\nOff-by-one errors happen when indexing or range limits are wrong. Test an empty list, a one-element list and a multi-element list. Avoid changing a list while iterating through it unless you understand the consequences. Use break to exit a loop and continue to skip the remaining body for the current iteration.",
    "example": "For [2,4,1], total evolves 0 → 2 → 6 → 7.",
    "pitfall": "Resetting an accumulator inside the loop or writing range(len(items)+1).",
    "task": "What is the final total when starting at 0 and adding 2, 4, then 1?",
    "answer": "7",
    "quiz": {
      "q": "What is the final total when starting at 0 and adding 2, 4, then 1?",
      "options": [
        "7",
        "1",
        "6",
        "0"
      ],
      "correct": 0,
      "why": "7"
    },
    "minutes": 40,
    "code": "total = 0\nfor value in [2, 4, 1]:\n    total += value\n    print(total)",
    "reference": ""
  },
  {
    "module": "zero",
    "title": "Functions, contracts and errors",
    "objective": "Separate reusable logic from input and output.",
    "theory": "A function receives parameters and returns a result. Calling a function evaluates arguments, binds local parameter names and executes the body. return ends the call and gives the caller a value. print writes to an output stream and usually returns None. A function that prints an answer cannot be composed as easily as a function that returns it.\n\nA contract states accepted inputs, output and failure behavior. For divide(a, b), define whether b=0 is rejected and what numeric types are allowed. Validate at the boundary and raise a specific exception such as ValueError for invalid domain values. Avoid broad except clauses that hide programming defects. A stack trace shows the chain of calls and the line where the exception occurred.\n\nPrefer pure functions for computations; pass data explicitly rather than depend on mutable global state. Then test them with assertions. Build a program as small functions with names that describe intent. Write tests before changing complicated logic. To debug, reproduce the smallest failing call and inspect inputs before modifying the implementation.",
    "example": "The expression add(2,3)*2 equals 10 if add returns 5; a function that only prints 5 returns None.",
    "pitfall": "Using print in place of return; catching every exception and returning zero.",
    "task": "Why should a reusable calculation return a value?",
    "answer": "So callers can compose and test the result.",
    "quiz": {
      "q": "Why should a reusable calculation return a value?",
      "options": [
        "So all errors disappear",
        "So callers can compose and test the result.",
        "So the function runs twice",
        "So variables become global"
      ],
      "correct": 1,
      "why": "So callers can compose and test the result."
    },
    "minutes": 40,
    "code": "def add(a, b):\n    return a + b\nassert add(2,3) == 5\nprint(add(2,3)*2)",
    "reference": ""
  },
  {
    "module": "pycore",
    "title": "Lists, tuples, dictionaries and sets",
    "objective": "Choose a collection based on its required behavior.",
    "theory": "Lists are ordered, mutable sequences; tuples are ordered and immutable containers; dictionaries map hashable keys to values; sets store distinct hashable elements. A list supports indexed access; a dictionary supports key lookup; a set is useful for membership. A tuple can contain a mutable object, so immutability of the container is not deep immutability.\n\nChoose the structure from the operation: preserve all sensor readings in a list, map tool IDs to calibration values with a dictionary, track seen IDs using a set. Dictionary and set lookup is generally constant time on average; scanning a list takes linear time. Ordering a set is not guaranteed; if output order is required, use sorted or explicitly maintain order.\n\nUse dict.get for a default only when missing has a defined meaning. A missing measurement is not automatically zero. Iterating a dictionary directly yields keys; .items() yields pairs. Validate empty inputs and duplicates. When grouping, initialize a list per key rather than accidentally share a single list.",
    "example": "counts = {}; for x in values: counts[x] = counts.get(x,0)+1 counts occurrences.",
    "pitfall": "Converting a list to a set when multiplicity matters.",
    "task": "Which collection is most natural for counting occurrences by ID?",
    "answer": "A dictionary keyed by ID.",
    "quiz": {
      "q": "Which collection is most natural for counting occurrences by ID?",
      "options": [
        "A single string",
        "A dictionary keyed by ID.",
        "A set of IDs only",
        "A Boolean"
      ],
      "correct": 1,
      "why": "A dictionary keyed by ID."
    },
    "minutes": 40,
    "code": "counts = {}\nfor x in [\"A\",\"B\",\"A\"]:\n    counts[x] = counts.get(x,0)+1\nprint(counts)",
    "reference": ""
  },
  {
    "module": "pycore",
    "title": "References, copying and mutation",
    "objective": "Predict aliasing and avoid shared-state bugs.",
    "theory": "Python names refer to objects. Assigning b = a does not copy the object; it creates another reference. If a is a list and b.append(5) mutates it, both names observe the change. A shallow copy such as a[:] or list(a) creates a new outer list but still shares nested objects. deepcopy recursively copies supported objects, with tradeoffs in time and semantics.\n\nMutable default arguments are evaluated once when the function is defined. def f(x, out=[]): out.append(x) shares out between calls. Use None as a sentinel and allocate a fresh list inside. Distinguish equality (==) from identity (is); use is None for the sentinel.\n\nA function may mutate input even if it returns nothing. Document whether a function owns or borrows an object. If state unexpectedly changes, draw boxes for objects and arrows for names, then check the smallest reproducible call. Immutability can make reasoning simpler, but copying everything can waste memory.",
    "example": "a=[1]; b=a; b.append(2) means a is now [1,2].",
    "pitfall": "Using a shallow copy to isolate nested lists.",
    "task": "What does b=a do when a is a list?",
    "answer": "Both names reference the same list.",
    "quiz": {
      "q": "What does b=a do when a is a list?",
      "options": [
        "Makes a deep copy",
        "Converts a to a tuple",
        "Both names reference the same list.",
        "Deletes a"
      ],
      "correct": 2,
      "why": "Both names reference the same list."
    },
    "minutes": 40,
    "code": "a = [1]\nb = a\nb.append(2)\nprint(a)",
    "reference": ""
  },
  {
    "module": "pycore",
    "title": "Comprehensions, iterators and generators",
    "objective": "Process collections without unnecessary materialization.",
    "theory": "A list comprehension constructs a list from an iterable, optionally filtering it: [x*x for x in values if x>0]. A generator expression produces items lazily. Iterators expose next values one at a time, raising StopIteration when exhausted. An iterable can create an iterator; a generator is usually single-use.\n\nLazy processing is useful for large files, streaming data and pipelines. A generator does not save memory if you immediately convert the entire result into a list. It also may defer exceptions until iteration, so error handling must cover consumption. Use enumerate when you need indexes and zip to pair iterables; ordinary zip stops at the shortest input, which can hide length mismatch. Use strict=True when appropriate in supported Python versions.\n\nPrefer readable loops over dense nested comprehensions. For a million log records, process each line, validate it and yield only relevant observations. Measure peak memory rather than assuming lazy is always faster. If you need to iterate twice, recreate the generator or explicitly materialize if feasible.",
    "example": "sum(x*x for x in range(1000)) avoids storing the list of all squares.",
    "pitfall": "Reusing an exhausted generator and assuming it still contains items.",
    "task": "Which approach avoids storing a full list of squares when only the sum is needed?",
    "answer": "sum(x*x for x in values)",
    "quiz": {
      "q": "Which approach avoids storing a full list of squares when only the sum is needed?",
      "options": [
        "list(values)*2",
        "sorted(values)",
        "set(values)",
        "sum(x*x for x in values)"
      ],
      "correct": 3,
      "why": "sum(x*x for x in values)"
    },
    "minutes": 40,
    "code": "def squares(values):\n    for x in values:\n        yield x*x\nprint(sum(squares(range(5))))",
    "reference": ""
  },
  {
    "module": "pycore",
    "title": "Classes, composition and interfaces",
    "objective": "Model state and behavior without unnecessary inheritance.",
    "theory": "A class defines behavior and typically instance state. __init__ initializes a new object; self refers to the instance receiving the method. Class attributes belong to the class and may be shared; instance attributes belong to a specific instance. A dataclass is useful for records but does not automatically enforce runtime types.\n\nComposition means an object contains another object or receives a dependency, such as a service receiving a repository. Inheritance models an is-a relationship and requires substitutable behavior. Prefer composition when you want to replace a database with a fake in tests. A protocol describes methods consumers need rather than forcing a particular inheritance tree.\n\nKeep domain calculations separate from IO. A SensorReading value holds timestamp and pressure; a validator checks units and range; a repository saves readings. This separation supports focused tests and changes. Avoid a single giant class that handles UI, database, model training and networking.",
    "example": "A YieldService accepts a repository interface; tests pass an in-memory repository.",
    "pitfall": "Putting a mutable shared list at class scope or inheriting just to reuse one method.",
    "task": "What design makes replacing a real database with a fake easiest?",
    "answer": "Inject a repository dependency through composition.",
    "quiz": {
      "q": "What design makes replacing a real database with a fake easiest?",
      "options": [
        "Inject a repository dependency through composition.",
        "Use one global database",
        "Copy the entire application",
        "Hard-code the database address"
      ],
      "correct": 0,
      "why": "Inject a repository dependency through composition."
    },
    "minutes": 40,
    "code": "from dataclasses import dataclass\n@dataclass\nclass Reading:\n    tool: str\n    pressure: float\nprint(Reading(\"T1\",101.2))",
    "reference": ""
  },
  {
    "module": "pycore",
    "title": "Files, JSON, CSV and context managers",
    "objective": "Read and write data with explicit encoding and failure handling.",
    "theory": "Use with open(path, encoding=\"utf-8\") as f to ensure a file is closed even when an exception occurs. A text file decodes bytes using an encoding; binary mode returns bytes. CSV is a table interchange format with quoting rules; use the csv module, not split(\",\"), because a field may contain commas or newlines. JSON represents structured values; Python json.loads parses text and json.dumps serializes compatible objects.\n\nData from files is untrusted. Validate keys, types, units and missingness before using them. A JSON document can parse successfully yet have a wrong schema. Avoid loading untrusted pickle files because deserialization may execute code. For large line-oriented logs, process line by line with explicit handling for malformed records.\n\nWrite to a temporary file and atomically replace a destination when appropriate; avoid leaving partially written files on a crash. For parallel writers, atomic replace alone does not resolve concurrent changes. Preserve original inputs and produce new output paths. Report rejected rows and reasons instead of dropping records silently.",
    "example": "csv.DictReader parses quoted names such as \"A, Inc.\" as one field.",
    "pitfall": "Splitting CSV by commas; relying on successful JSON parsing as schema validation.",
    "task": "Which tool correctly parses quoted CSV fields?",
    "answer": "Python csv module.",
    "quiz": {
      "q": "Which tool correctly parses quoted CSV fields?",
      "options": [
        "str.split(\",\")",
        "Python csv module.",
        "eval",
        "pickle"
      ],
      "correct": 1,
      "why": "Python csv module."
    },
    "minutes": 40,
    "code": "import json\nraw = '{\"tool\":\"T1\",\"passed\":9}'\nrecord = json.loads(raw)\nassert isinstance(record[\"passed\"], int)",
    "reference": ""
  },
  {
    "module": "algocore",
    "title": "Big-O, memory and input size",
    "objective": "Explain growth rather than guessing speed.",
    "theory": "An algorithm transforms input to output. Time complexity describes how operation count grows as input size n increases, and space complexity describes additional memory use. Big-O gives an asymptotic upper bound, not an exact runtime. A single pass over n items is O(n); nested loops over all pairs are O(n²); binary search on sorted random-access data is O(log n).\n\nCount the dominant repeated operation and state assumptions. Two consecutive O(n) loops remain O(n), while an O(n) loop nested inside another O(n) loop is O(n²). Sorting commonly costs O(n log n), and a dictionary-based counting pass is expected O(n), with memory O(k) for k distinct keys. Worst-case hash behavior differs from the average.\n\nComplexity does not replace benchmarks. Small inputs, cache locality, Python interpreter overhead and network IO can dominate actual runtime. Compare algorithms using representative sizes and avoid optimizing before measuring. In interviews explain correctness first, then complexity and tradeoffs.",
    "example": "A list membership scan repeated for every input can be quadratic; a set can reduce expected time.",
    "pitfall": "Assuming any two loops imply quadratic complexity even when they run consecutively.",
    "task": "What is the time complexity of two separate full passes over n items?",
    "answer": "O(n)",
    "quiz": {
      "q": "What is the time complexity of two separate full passes over n items?",
      "options": [
        "O(n²)",
        "O(n)",
        "O(log n)",
        "O(1)"
      ],
      "correct": 1,
      "why": "O(n)"
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "algocore",
    "title": "Binary search and boundary invariants",
    "objective": "Search sorted data correctly including absent targets.",
    "theory": "Binary search requires a sorted random-access sequence. Maintain a half-open interval [lo, hi) that contains every remaining candidate. Choose mid=(lo+hi)//2. If a[mid] is smaller than the target, discard mid and everything left of it; otherwise keep the left portion including mid as a possible boundary. Stop when lo equals hi.\n\nThis lower-bound algorithm returns the first position whose value is at least the target. To test for exact membership, verify that the index is in bounds and the value equals the target. For duplicates it returns the first occurrence; if every element is smaller, it returns len(a). Each step roughly halves the interval, giving O(log n) time and O(1) auxiliary space.\n\nTest empty, one element, duplicates, absent values below and above the range. An infinite loop often means the new bounds did not shrink. Do not apply binary search to unsorted data; sorting first costs time and changes original positions.",
    "example": "In [1,3,3,8], lower_bound(3) is 1; lower_bound(9) is 4.",
    "pitfall": "Returning mid immediately when asked for first occurrence.",
    "task": "What is the lower bound index of 3 in [1,3,3,8]?",
    "answer": "1",
    "quiz": {
      "q": "What is the lower bound index of 3 in [1,3,3,8]?",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correct": 2,
      "why": "1"
    },
    "minutes": 40,
    "code": "def lower_bound(a, x):\n    lo, hi = 0, len(a)\n    while lo < hi:\n        mid = (lo + hi)//2\n        if a[mid] < x:\n            lo = mid+1\n        else:\n            hi = mid\n    return lo\nprint(lower_bound([1,3,3,8],3))",
    "reference": ""
  },
  {
    "module": "algocore",
    "title": "Stacks, queues and parentheses",
    "objective": "Use LIFO and FIFO behavior deliberately.",
    "theory": "A stack is last-in-first-out: the most recently pushed value is popped first. A queue is first-in-first-out: the earliest enqueued value leaves first. Python lists support efficient append and pop at the end; deque supports efficient operations at both ends. Removing from the front of a list shifts remaining elements and is linear time.\n\nFor balanced brackets, push each opening bracket. For a closing bracket, the stack must be nonempty and the top must be its matching opening bracket. Pop when matched. At the end, the stack must be empty. This handles nested structure that a simple counter cannot distinguish: ([)] has equal counts but is not properly nested.\n\nQueues support breadth-first search and task processing. Real concurrent queues need synchronization, backpressure and failure handling; an ordinary list is not a durable work queue. Test empty structures and underflow. Explain the invariant: the stack holds exactly the unmatched open brackets in encounter order.",
    "example": "The input ([)] fails when ) sees [ at the top of the stack.",
    "pitfall": "Counting open and close brackets without checking nesting.",
    "task": "Which structure correctly handles nested bracket matching?",
    "answer": "Stack",
    "quiz": {
      "q": "Which structure correctly handles nested bracket matching?",
      "options": [
        "FIFO queue only",
        "Unordered set only",
        "One counter for all types",
        "Stack"
      ],
      "correct": 3,
      "why": "Stack"
    },
    "minutes": 40,
    "code": "from collections import deque\nq = deque([1,2]); q.append(3)\nprint(q.popleft())",
    "reference": ""
  },
  {
    "module": "algocore",
    "title": "Sorting, stable order and two pointers",
    "objective": "Use sorted order to simplify search and merging.",
    "theory": "Sorting orders elements using a key. Python sorted returns a new list; list.sort mutates the list and returns None. Python sorting is stable: elements with equal keys retain their relative order. Sorting n items generally takes O(n log n) time, though implementations may exploit existing runs.\n\nTwo pointers can merge two sorted lists in O(n+m). Compare current items, emit the smaller, advance only its pointer and append remaining items after either list is exhausted. The invariant is that the emitted prefix is sorted and contains the smallest items processed so far. A two-pointer solution for pair sum on a sorted list moves the left pointer right if the sum is too small and the right pointer left if too large.\n\nSorting may change row order and discard the association between an item and its original index unless you carry that index. For multi-field ordering, use a tuple key; specify tie behavior. Test duplicates and empty inputs. Do not call sort inside every loop iteration if you only need to sort once.",
    "example": "sorted(records, key=lambda r: (r[\"tool\"], r[\"time\"])) sorts by tool then time.",
    "pitfall": "Assigning a = a.sort() and unexpectedly receiving None.",
    "task": "What is the complexity of merging two already sorted lists with lengths n and m?",
    "answer": "O(n+m)",
    "quiz": {
      "q": "What is the complexity of merging two already sorted lists with lengths n and m?",
      "options": [
        "O(n+m)",
        "O(n*m)",
        "O(1)",
        "O(log n)"
      ],
      "correct": 0,
      "why": "O(n+m)"
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "algocore",
    "title": "Graphs, BFS, DFS and dependencies",
    "objective": "Represent relationships and find reachable nodes.",
    "theory": "A graph has vertices and edges; an adjacency list maps each vertex to its neighbors. Directed edges represent one-way relationships such as dependency A → B. Breadth-first search explores by distance using a FIFO queue; depth-first search explores a branch before backtracking using a stack or recursion.\n\nIn an unweighted graph, BFS discovers nodes in increasing shortest-path distance from a source. Mark visited when enqueuing to avoid repeated queue entries and store parent pointers to reconstruct paths. DFS is useful for reachability and cycle detection; directed cycle detection requires distinguishing active recursion-stack nodes from fully visited nodes.\n\nWith adjacency lists, visiting each node and edge once costs O(V+E). A disconnected graph requires separate starts if all components matter. Topological order exists only for directed acyclic graphs; Kahn’s algorithm removes nodes of indegree zero, and a leftover node indicates a cycle. Test self-loops, repeated edges and unreachable targets.",
    "example": "A→B, A→C, B→D: BFS from A reaches D at distance 2.",
    "pitfall": "Marking nodes visited too late or using BFS for weighted shortest paths without adaptation.",
    "task": "Which traversal gives shortest edge-count paths in an unweighted graph?",
    "answer": "Breadth-first search",
    "quiz": {
      "q": "Which traversal gives shortest edge-count paths in an unweighted graph?",
      "options": [
        "Arbitrary DFS",
        "Breadth-first search",
        "Sorting vertex names",
        "Random walk"
      ],
      "correct": 1,
      "why": "Breadth-first search"
    },
    "minutes": 40,
    "code": "from collections import deque\ng={\"A\":[\"B\",\"C\"],\"B\":[\"D\"],\"C\":[],\"D\":[]}\nq=deque([\"A\"]); dist={\"A\":0}\nwhile q:\n    u=q.popleft()\n    for v in g[u]:\n        if v not in dist:\n            dist[v]=dist[u]+1; q.append(v)\nprint(dist)",
    "reference": ""
  },
  {
    "module": "webcore",
    "title": "HTML documents and accessible forms",
    "objective": "Build meaningful document structure.",
    "theory": "HTML describes the structure of a document, not the visual layout or application logic. The browser parses elements into a DOM tree. Use a single meaningful h1, hierarchical headings, main for primary content, nav for navigation, and button for an action. Links navigate; buttons perform actions. Semantic elements have browser behavior and accessibility information that generic divs lack.\n\nA form associates labels with controls. Use label for=\"email\" and input id=\"email\" so the browser and assistive technologies know the purpose. Add type=\"email\" for basic browser validation, but the server must validate independently. Set button type explicitly to avoid unexpected submissions. Use alt text to describe meaningful images and an empty alt for decorative ones.\n\nInspect the Elements panel in developer tools. The live DOM can differ from source HTML after JavaScript changes it. Use keyboard navigation and focus checks; don't rely exclusively on color. Never interpolate untrusted text into HTML: use textContent or framework escaping. Accessibility is a functional requirement, not decoration.",
    "example": "A label and input with matching for/id let users click the label and identify the control.",
    "pitfall": "Using a clickable div with no keyboard support.",
    "task": "Which element is the best default for a submit action?",
    "answer": "A semantic button.",
    "quiz": {
      "q": "Which element is the best default for a submit action?",
      "options": [
        "An unlabelled div",
        "A semantic button.",
        "A decorative image",
        "A CSS pseudo-element"
      ],
      "correct": 1,
      "why": "A semantic button."
    },
    "minutes": 40,
    "code": "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" required>\n  <button type=\"submit\">Subscribe</button>\n</form>",
    "reference": "https://developer.mozilla.org/en-US/docs/Learn_web_development"
  },
  {
    "module": "webcore",
    "title": "CSS box model and responsive layout",
    "objective": "Control spacing and layouts without fixed-screen assumptions.",
    "theory": "CSS selects elements and applies declarations. Cascading rules depend on origin, importance, specificity and source order. Use simple selectors and avoid escalating specificity with !important. The box model contains content, padding, border and margin. With box-sizing: border-box, specified width includes padding and border.\n\nFlexbox arranges items along a main axis and handles alignment; Grid is useful for rows and columns. A responsive layout uses flexible sizes, max-width, wrapping and media queries rather than assuming one monitor width. Use rem for scalable text and meaningful spacing; avoid horizontal overflow by allowing children to shrink, for example min-width: 0 on flex items.\n\nUse the browser inspector to see computed styles and the box model. Test narrow screens, keyboard focus, text zoom and long content. A fixed height may clip translated or enlarged text. Design clear visual hierarchy with consistent spacing and contrast before adding decorative effects.",
    "example": "A 300px border-box with 20px padding on each side and no border leaves 260px content width.",
    "pitfall": "Using absolute positioning for an entire responsive layout.",
    "task": "With border-box, does width include padding and border?",
    "answer": "Yes.",
    "quiz": {
      "q": "With border-box, does width include padding and border?",
      "options": [
        "No",
        "Only margin",
        "Yes.",
        "Only text"
      ],
      "correct": 2,
      "why": "Yes."
    },
    "minutes": 40,
    "code": "* { box-sizing: border-box; }\n.cards { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 1rem; }",
    "reference": ""
  },
  {
    "module": "webcore",
    "title": "JavaScript values, functions and arrays",
    "objective": "Write predictable browser-side computations.",
    "theory": "JavaScript values include numbers, strings, booleans, null, undefined and objects. const prevents rebinding, not object mutation; let allows rebinding. Prefer strict equality === to avoid implicit type conversions. A missing object property yields undefined. Number arithmetic uses floating-point except BigInt, which has different operations.\n\nFunctions accept arguments and return values. Array map transforms each element, filter selects elements and reduce accumulates a result. These methods do not automatically deep-copy objects. Use for...of for a direct readable loop. Avoid using for...in to iterate array values because it enumerates keys.\n\nA closure remembers its lexical environment after the outer function returns. It is useful for event callbacks but may capture stale state. Validate external JSON at runtime even if its structure looks correct. In DevTools Console test small expressions and inspect variables; do not paste untrusted scripts into the console.",
    "example": "[1,2,3].filter(x=>x>1).map(x=>x*2) returns [4,6].",
    "pitfall": "Using == and relying on implicit string-to-number coercion.",
    "task": "Which method selects array elements satisfying a predicate?",
    "answer": "filter",
    "quiz": {
      "q": "Which method selects array elements satisfying a predicate?",
      "options": [
        "map",
        "join",
        "push",
        "filter"
      ],
      "correct": 3,
      "why": "filter"
    },
    "minutes": 40,
    "code": "const values = [1,2,3];\nconsole.log(values.filter(x=>x>1).map(x=>x*2));",
    "reference": ""
  },
  {
    "module": "webcore",
    "title": "DOM events, rendering and form validation",
    "objective": "Connect UI actions to state without injection.",
    "theory": "The DOM is a browser-managed tree. querySelector returns the first matching element or null. addEventListener attaches a callback that receives an event. In a form submit handler, preventDefault prevents navigation only when you intentionally handle submission in JavaScript. Read input.value as text and explicitly validate conversions.\n\nMaintain application state separately from rendered elements. After a state change, update the relevant DOM. Avoid adding duplicate event listeners on every render. Event delegation attaches a handler to a stable ancestor and checks the target. textContent inserts plain text safely; innerHTML parses markup and can enable injection if input is untrusted.\n\nA UI should handle pending, success, empty and error states. A user double-clicking submit should not create duplicate records; disable the control during work and use server-side idempotency where required. Preserve focus after updates and announce important changes accessibly.",
    "example": "Use result.textContent = input.value to display user text without interpreting HTML.",
    "pitfall": "Using innerHTML with untrusted form input.",
    "task": "Which property displays arbitrary user text as plain text?",
    "answer": "textContent",
    "quiz": {
      "q": "Which property displays arbitrary user text as plain text?",
      "options": [
        "textContent",
        "innerHTML",
        "outerHTML",
        "eval"
      ],
      "correct": 0,
      "why": "textContent"
    },
    "minutes": 40,
    "code": "const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  document.querySelector(\"output\").textContent = \"Saved\";\n});",
    "reference": ""
  },
  {
    "module": "webcore",
    "title": "Promises, async/await and fetch",
    "objective": "Handle browser network failures and concurrent work.",
    "theory": "JavaScript uses an event loop: synchronous work runs to completion, while promises schedule continuations. async functions return promises; await suspends that async function until settlement, not the entire browser. A rejected promise becomes an exception at await. Use try/catch and finally for cleanup.\n\nfetch resolves for HTTP error responses such as 404 or 500; check response.ok before parsing JSON. Network failures reject. Use AbortController to cancel a request when navigating or replacing a search. A slow earlier response can arrive after a newer one; check a request identifier or cancel superseded requests to avoid overwriting fresh state.\n\nPromise.all runs independent asynchronous operations concurrently and rejects if any rejects. Do not launch unbounded requests for thousands of records; limit concurrency. Avoid retrying state-changing requests blindly. Keep API keys on the server, and never expose privileged credentials in browser bundles.",
    "example": "A successful fetch promise with status 404 still has response.ok=false.",
    "pitfall": "Assuming fetch rejects on every HTTP error.",
    "task": "What should you check before parsing a normal successful JSON response?",
    "answer": "response.ok",
    "quiz": {
      "q": "What should you check before parsing a normal successful JSON response?",
      "options": [
        "The color of the button",
        "response.ok",
        "Whether fetch returned a promise",
        "The length of the URL"
      ],
      "correct": 1,
      "why": "response.ok"
    },
    "minutes": 40,
    "code": "async function load() {\n  const r = await fetch(\"/api/status\");\n  if (!r.ok) throw new Error(`HTTP ${r.status}`);\n  return await r.json();\n}",
    "reference": ""
  },
  {
    "module": "tsreact",
    "title": "TypeScript types and runtime boundaries",
    "objective": "Use types without confusing them with validation.",
    "theory": "TypeScript extends JavaScript with static type checking. A type describes the values a variable or function may accept. Interfaces and type aliases describe object shapes; union types express alternatives. Narrow a union by checking a discriminant or using typeof. The compiler checks source and emits JavaScript; most types disappear at runtime.\n\nExternal JSON is untrusted, even if you assign it an interface with a type assertion. Prefer unknown at the boundary, check properties and their runtime types, then return a typed value. Avoid any because it disables useful checking. Optional properties and nullability require explicit handling under strict mode.\n\nWrite functions with clear parameter and return types. A discriminated union such as {status:\"loading\"} | {status:\"success\", data:Reading[]} | {status:\"error\", message:string} prevents impossible combinations such as a loading state with an error result. Run tsc --noEmit in CI. Runtime tests still matter because type correctness does not prove business logic.",
    "example": "A server can return pressure:\"oops\" even if your TS interface says pressure:number.",
    "pitfall": "Using as Reading to pretend unvalidated JSON is valid.",
    "task": "Does a TypeScript type assertion validate incoming JSON at runtime?",
    "answer": "No.",
    "quiz": {
      "q": "Does a TypeScript type assertion validate incoming JSON at runtime?",
      "options": [
        "Yes, always",
        "No.",
        "Only on Vercel",
        "Only in React"
      ],
      "correct": 1,
      "why": "No."
    },
    "minutes": 40,
    "code": "type Reading = { tool: string; pressure: number };\nfunction isReading(x: unknown): x is Reading {\n  if (typeof x !== \"object\" || x === null) return false;\n  const r = x as Record<string, unknown>;\n  return typeof r.tool === \"string\" && typeof r.pressure === \"number\" && Number.isFinite(r.pressure);\n}",
    "reference": "https://www.typescriptlang.org/docs/"
  },
  {
    "module": "tsreact",
    "title": "React components, props and state",
    "objective": "Render from state and handle updates correctly.",
    "theory": "React components describe UI from props and state. Props are inputs supplied by a parent; state stores information that changes over time. Rendering should be pure: calculate the output without side effects. A state update schedules a render; the value in the current handler is a snapshot, not a mutable live variable.\n\nUse functional state updates when the next value depends on the previous one, for example setCount(c=>c+1). Treat arrays and objects in state as immutable: create a new array or object when updating. In a list, stable unique keys identify items across updates; array indexes can cause identity bugs when items reorder.\n\nKeep state minimal and derive values such as filtered arrays from current inputs. Lift shared state to a common parent; avoid duplicating it across components. Split components by responsibilities rather than arbitrary line counts. Test behaviors visible to users rather than implementation details such as internal hook counts.",
    "example": "setCount(c=>c+1) twice increments by two even when updates are batched.",
    "pitfall": "Mutating state directly and expecting React to detect changes.",
    "task": "Which update correctly depends on the previous count?",
    "answer": "setCount(c => c + 1)",
    "quiz": {
      "q": "Which update correctly depends on the previous count?",
      "options": [
        "count++ only",
        "props.count = 9",
        "setCount(c => c + 1)",
        "setCount(null)"
      ],
      "correct": 2,
      "why": "setCount(c => c + 1)"
    },
    "minutes": 40,
    "code": "import {useState} from \"react\";\nexport default function Counter(){\n  const [count,setCount]=useState(0);\n  return <button onClick={()=>setCount(c=>c+1)}>{count}</button>;\n}",
    "reference": ""
  },
  {
    "module": "tsreact",
    "title": "Effects, data loading and state machines",
    "objective": "Avoid race conditions and unnecessary effects.",
    "theory": "An effect synchronizes a React component with an external system after rendering, for example a subscription or network request. It is not the default way to compute derived values. Dependencies must include reactive values read by the effect. Cleanup runs before re-synchronization and when the component unmounts.\n\nIf an effect starts a request, cancel or ignore results that are no longer relevant. Development Strict Mode can exercise setup and cleanup more than once; effects should be resilient rather than depend on running once. A dependency loop often results from an effect setting state that changes its own dependencies.\n\nModel remote data as explicit states: idle, loading, success, empty or error. Provide meaningful retry behavior. Keep server data caching and local interaction state conceptually separate. Framework data-loading mechanisms can avoid unnecessary client waterfalls; learn their constraints rather than fetching every resource in an effect.",
    "example": "A search for A returns after a search for B; cancel A or ignore it so results for B remain visible.",
    "pitfall": "Using an effect to compute total from quantities when it can be calculated directly.",
    "task": "What should an effect that subscribes to events return?",
    "answer": "A cleanup function that unsubscribes.",
    "quiz": {
      "q": "What should an effect that subscribes to events return?",
      "options": [
        "The event log",
        "A new component",
        "A database password",
        "A cleanup function that unsubscribes."
      ],
      "correct": 3,
      "why": "A cleanup function that unsubscribes."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "tsreact",
    "title": "Next.js routing and server/client separation",
    "objective": "Design a web app with safe execution boundaries.",
    "theory": "Next.js App Router maps folders in app/ to routes and uses page and layout files. A layout can wrap multiple pages. Server Components can read server-side resources and send rendered output without shipping all component code to the browser. Client Components are needed for interactive state, effects and browser APIs; mark the relevant boundary with \"use client\".\n\nA Route Handler defines HTTP endpoints, such as app/api/readings/route.ts. Treat it as a public interface: authenticate, authorize, validate input and use parameterized database operations. Secrets must remain in server-only environment variables. Public environment variables included in client bundles are visible to users. Never put a database service-role key in frontend code.\n\nCaching and rendering behavior depends on framework version and configuration. Specify freshness requirements, verify response behavior and consult official docs for the installed version. Deploy on Vercel, inspect build logs, set separate development/production variables, and test direct navigation and error states. Keep database migrations and rollback procedures explicit.",
    "example": "An interactive filter uses a Client Component; private database access lives in a server function or route handler.",
    "pitfall": "Marking the whole application as client-side and accidentally bundling a secret.",
    "task": "Where should a privileged database credential be used?",
    "answer": "Server-only code.",
    "quiz": {
      "q": "Where should a privileged database credential be used?",
      "options": [
        "Server-only code.",
        "Browser localStorage",
        "Public environment variables",
        "A React prop sent to every user"
      ],
      "correct": 0,
      "why": "Server-only code."
    },
    "minutes": 40,
    "code": "",
    "reference": "https://nextjs.org/docs"
  },
  {
    "module": "backend",
    "title": "HTTP, DNS, TLS and request lifecycle",
    "objective": "Trace a request from browser to service.",
    "theory": "DNS resolves a domain name to network addresses. A client establishes a connection, negotiates TLS for HTTPS, sends an HTTP request and receives a response. A reverse proxy or load balancer may route requests to an application. HTTP method, URL, headers and body describe the request; status, headers and body describe the response.\n\nGET should be safe in intent, POST often creates or triggers operations, PUT often replaces a representation and DELETE requests removal. Idempotency means repeating an operation has the same intended effect; it does not imply identical status codes. Use 400 for malformed/invalid requests as defined by your API, 401 for missing/invalid authentication, 403 for forbidden access, 404 for not found and 500 for unexpected server errors.\n\nTLS protects data in transit when correctly configured, not authorization or storage. When troubleshooting, distinguish DNS failure, connection timeout, TLS error, HTTP status and malformed payload. Use browser Network panel, curl and structured server logs with a request ID. Avoid logging credentials or sensitive payloads.",
    "example": "A 403 means the server received the request and refused it; reinstalling DNS is unlikely to fix it.",
    "pitfall": "Treating all network problems as server crashes.",
    "task": "What status typically means an authenticated user lacks permission?",
    "answer": "403",
    "quiz": {
      "q": "What status typically means an authenticated user lacks permission?",
      "options": [
        "200",
        "403",
        "401",
        "302"
      ],
      "correct": 1,
      "why": "403"
    },
    "minutes": 40,
    "code": "curl -i https://example.com",
    "reference": ""
  },
  {
    "module": "backend",
    "title": "REST API contracts and validation",
    "objective": "Design consistent endpoints with explicit errors.",
    "theory": "An API contract defines operations, schemas, constraints, authorization and error behavior. Model resources with stable identifiers and consistent JSON shapes. Use pagination for large lists; cursor-based pagination can avoid offset instability if the order is deterministic. Define maximum page size and filter rules.\n\nFastAPI and Pydantic can validate request shapes and generate OpenAPI documentation. Domain validation still matters: passed dies cannot exceed tested dies even if both are integers. Validate on the server, not only in the UI. Return structured error codes without exposing stack traces or internal SQL. Version breaking contract changes or provide a migration path.\n\nTest success, invalid values, unauthorized access, missing resources and duplicate requests. Integrate database transactions so a failed write does not partially mutate related records. For a retryable create operation, an idempotency key scoped to the caller can prevent duplicates. Document what happens when identical keys carry different payloads.",
    "example": "POST /readings accepts tool_id, timestamp and pressure; rejects missing IDs or non-finite pressure.",
    "pitfall": "Returning HTTP 200 with an error string for every failure.",
    "task": "What is the best place for business-rule validation?",
    "answer": "The server boundary and domain logic.",
    "quiz": {
      "q": "What is the best place for business-rule validation?",
      "options": [
        "Only CSS",
        "Only a README",
        "The server boundary and domain logic.",
        "Only the browser button"
      ],
      "correct": 2,
      "why": "The server boundary and domain logic."
    },
    "minutes": 40,
    "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\napp = FastAPI()\nclass Reading(BaseModel):\n    tool: str = Field(min_length=1)\n    pressure: float = Field(gt=0,allow_inf_nan=False)\n@app.post(\"/readings\")\ndef create(r: Reading):\n    return r.model_dump()",
    "reference": ""
  },
  {
    "module": "backend",
    "title": "Authentication, authorization and tenant isolation",
    "objective": "Protect users and data at every endpoint.",
    "theory": "Authentication determines who is making a request; authorization determines what that identity may do. A session cookie or verified token can identify a user. Tokens require verification of signature, expiration, issuer and audience as appropriate. A role such as admin is not a substitute for checking ownership of an individual record.\n\nPasswords should be hashed with an established password-hashing algorithm via a maintained library, not encrypted reversibly or stored as plain text. Use secure, HttpOnly cookies when suitable; CSRF protections depend on how credentials are sent. Restrict CORS to intended origins, but remember CORS is a browser policy, not access control.\n\nFor a multi-tenant app, derive tenant identity from a verified session and scope all data access to it. PostgreSQL row-level security can be defense in depth; test permissions as ordinary users, not only admin. Do not trust a tenant_id from the client. Keep service-role keys server-side, rotate exposed secrets and maintain audit logs without sensitive data.",
    "example": "User A requests /reports/B-id; the server checks report ownership before returning data.",
    "pitfall": "Checking login but not ownership (broken object-level authorization).",
    "task": "What prevents one logged-in user from reading another user’s record?",
    "answer": "Server-side per-record authorization.",
    "quiz": {
      "q": "What prevents one logged-in user from reading another user’s record?",
      "options": [
        "A hidden UI button",
        "A long URL",
        "Client-side filtering",
        "Server-side per-record authorization."
      ],
      "correct": 3,
      "why": "Server-side per-record authorization."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "backend",
    "title": "Transactions, indexes and safe migrations",
    "objective": "Preserve data invariants under failures and concurrency.",
    "theory": "A transaction groups database operations into an atomic unit. Isolation controls what concurrent transactions can observe; durability means committed changes survive within the database’s guarantees. Constraints enforce invariants at the storage layer, such as a unique external ID and foreign keys. Application checks alone can race.\n\nIndexes can accelerate reads but consume space and increase write costs. A composite index on (tool_id, event_time) supports common per-tool time-range queries; column order matters. Use EXPLAIN and representative data to understand access paths. Avoid SELECT * when only a few columns are needed; parameterize SQL to separate values from query syntax.\n\nA safe migration is compatible with existing application versions, rehearsed on nonproduction data and backed by recovery planning. For large tables, avoid long exclusive locks when possible. Expand with a new nullable column, backfill in batches, deploy compatible code, validate, then remove legacy fields later. Test restore; a backup that has never been restored is weak evidence.",
    "example": "Two requests inserting the same external_id should be protected by a database UNIQUE constraint.",
    "pitfall": "Using a check-then-insert sequence as the only duplicate protection.",
    "task": "Which database mechanism reliably enforces uniqueness across concurrent writes?",
    "answer": "A UNIQUE constraint.",
    "quiz": {
      "q": "Which database mechanism reliably enforces uniqueness across concurrent writes?",
      "options": [
        "A UNIQUE constraint.",
        "A frontend warning",
        "A Python print",
        "A daily report"
      ],
      "correct": 0,
      "why": "A UNIQUE constraint."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "oscore",
    "title": "Processes, memory and operating systems",
    "objective": "Understand what runs beneath your code.",
    "theory": "An operating system manages CPU scheduling, memory, file access and hardware. A process has an address space and resources; threads within a process usually share memory. Virtual memory maps virtual addresses to physical memory or backing storage and provides isolation. A file descriptor represents an open resource such as a file or socket.\n\nA program can be CPU-bound (computation dominates), IO-bound (waiting dominates) or memory-bound. Profiling helps distinguish them. More threads do not automatically speed CPU work; context switching and contention can hurt. In standard CPython builds with a GIL, Python bytecode execution is constrained across threads, though native libraries may release it and newer configurations differ.\n\nUse a process monitor to inspect CPU, memory and process lifetime. Resource leaks such as unclosed files can cause failures after long runtimes. Use context managers and bounded worker pools. A container shares the host kernel rather than being a full virtual machine. Do not assume container isolation alone protects against arbitrary hostile code.",
    "example": "A file-reading workload often benefits from overlapping IO; a Python CPU loop may need multiprocessing or vectorized native code.",
    "pitfall": "Adding threads without identifying the bottleneck.",
    "task": "What do threads within the same process usually share?",
    "answer": "The process address space.",
    "quiz": {
      "q": "What do threads within the same process usually share?",
      "options": [
        "Separate machines",
        "The process address space.",
        "No memory at all",
        "Different operating systems"
      ],
      "correct": 1,
      "why": "The process address space."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "oscore",
    "title": "Concurrency, locks and race conditions",
    "objective": "Reason about interleavings and shared state.",
    "theory": "Concurrency means tasks make progress during overlapping periods; parallelism means execution occurs simultaneously. A race occurs when results depend on timing. Read-modify-write operations on shared state can lose updates: two threads read 10, both compute 11, then both write 11 instead of 12.\n\nA lock protects a critical section. Keep critical sections short, avoid waiting on slow network calls while holding a lock, and establish consistent lock ordering to reduce deadlocks. Deadlock occurs when tasks wait cyclically for resources. Use timeouts for recovery but do not treat them as proof of correctness.\n\nPrefer designs with less shared mutable state, such as message passing, immutable data or isolated workers. Distributed processes need database constraints or distributed coordination; an in-process mutex cannot guard writes from another service instance. Test concurrency with controlled scheduling and repeated runs; a single successful run does not rule out races.",
    "example": "A global lock cannot stop two separate containers from simultaneously writing duplicate database rows.",
    "pitfall": "Assuming x += 1 is always a portable atomic operation.",
    "task": "What is a lost update?",
    "answer": "Two operations overwrite each other because both read stale shared state.",
    "quiz": {
      "q": "What is a lost update?",
      "options": [
        "A missing semicolon",
        "A slow CSS transition",
        "Two operations overwrite each other because both read stale shared state.",
        "A successful database backup"
      ],
      "correct": 2,
      "why": "Two operations overwrite each other because both read stale shared state."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "oscore",
    "title": "Async IO, queues and backpressure",
    "objective": "Bound work and avoid overloaded services.",
    "theory": "Async IO allows a task to await a nonblocking operation while the event loop runs other tasks. In Python asyncio, await gives control to the event loop when the awaited operation suspends. A CPU-heavy synchronous function inside an async handler blocks that event loop. Offload CPU work or use a separate worker appropriately.\n\nA bounded queue limits the number of waiting tasks. Backpressure means the producer slows, rejects or sheds load when consumers cannot keep up. Without it, memory grows and latency increases until the service may fail. Set timeouts, concurrency limits and cancellation behavior. Distinguish retryable errors from permanent failures.\n\nUse exponential backoff with jitter for transient failures and limit total retry attempts. For durable work, store jobs in a reliable queue and design idempotent consumers, because messages may be redelivered. Monitor queue age, backlog and throughput; depth alone does not show how long users wait.",
    "example": "If incoming requests exceed processing capacity, a bounded queue can reject with a clear overload response rather than consume unlimited RAM.",
    "pitfall": "Using unbounded gather over a million network calls.",
    "task": "What does backpressure do?",
    "answer": "Limits or slows new work when processing capacity is exhausted.",
    "quiz": {
      "q": "What does backpressure do?",
      "options": [
        "Disables all tests",
        "Makes CPUs infinitely fast",
        "Deletes all queued requests",
        "Limits or slows new work when processing capacity is exhausted."
      ],
      "correct": 3,
      "why": "Limits or slows new work when processing capacity is exhausted."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "oscore",
    "title": "Caching, latency and distributed consistency",
    "objective": "Explain why distributed systems can fail partially.",
    "theory": "A cache stores reusable results to reduce latency or load. Choose cache keys that include all inputs influencing results, including tenant identity when appropriate. TTL bounds staleness but does not guarantee freshness. Invalidation must match updates and access-control changes. Avoid caching private data under shared keys.\n\nDistributed systems experience partial failures: one service may time out while another commits a write. A timeout is uncertainty, not proof that nothing happened. Retrying can duplicate actions unless the operation is idempotent or deduplicated. Establish source of truth, consistency requirements and recovery behavior.\n\nMeasure latency distributions, not only averages. p95 describes a threshold at or below which approximately 95% of observed latencies fall. Trace a request through components; include queueing and dependency times. Choose simple architecture until scale, reliability or team constraints justify complexity. Microservices introduce network and operational costs.",
    "example": "A payment or job creation request times out after commit; retry with the same idempotency key to avoid duplicate work.",
    "pitfall": "Caching all tenants’ data by report ID alone.",
    "task": "What does a timeout prove about whether a remote write committed?",
    "answer": "Nothing definitive; the result is uncertain.",
    "quiz": {
      "q": "What does a timeout prove about whether a remote write committed?",
      "options": [
        "Nothing definitive; the result is uncertain.",
        "It always failed",
        "It always succeeded",
        "It deleted the database"
      ],
      "correct": 0,
      "why": "Nothing definitive; the result is uncertain."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "quality",
    "title": "Systematic debugging and stack traces",
    "objective": "Find the first incorrect assumption.",
    "theory": "Debugging is an experiment. Write down expected behavior, actual behavior and a reproducible input. Reduce the failing input without losing the failure. Read the stack trace from the exception and relevant frames; distinguish where a symptom appears from where invalid data originates. Inspect state using a breakpoint or targeted logging.\n\nForm one hypothesis and predict an observation before changing code. If a mean is incorrect, inspect row count, values and denominator. If a request is unauthorized, inspect authentication and permission checks rather than bypassing them. Use git bisect when a regression has a reproducible good and bad revision.\n\nAfter identifying the root cause, add a regression test that fails on the old code and passes on the fix. Make the smallest sensible change, rerun related tests and document what was wrong. Do not suppress an exception merely to make the program appear successful.",
    "example": "A list average divides by len(values)-1; reproduce with [4], see division by zero, fix denominator and add one-item/empty tests.",
    "pitfall": "Changing five unrelated lines and losing knowledge of which one fixed the bug.",
    "task": "What should you do before modifying a reproducible bug?",
    "answer": "Capture a minimal failing case and inspect expected versus actual behavior.",
    "quiz": {
      "q": "What should you do before modifying a reproducible bug?",
      "options": [
        "Delete all tests",
        "Capture a minimal failing case and inspect expected versus actual behavior.",
        "Silence the error",
        "Replace the whole application"
      ],
      "correct": 1,
      "why": "Capture a minimal failing case and inspect expected versus actual behavior."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "quality",
    "title": "Unit, integration, end-to-end and property tests",
    "objective": "Choose tests that catch real regressions.",
    "theory": "A unit test checks focused logic in isolation; an integration test checks interacting components such as an API and a real test database; an end-to-end test exercises a user-visible workflow. Each catches different failures. Unit tests are fast, while integration and end-to-end tests cover contracts and configuration at higher cost.\n\nTest boundaries, invalid inputs, typical cases and relevant invariants. Property-based testing generates inputs to check a general property, such as sorting preserving multiplicity. Use deterministic fixtures and isolate data between tests. Avoid mocking every dependency so heavily that tests pass while real integration fails.\n\nCoverage reports which code executed, not whether assertions are meaningful. A test that only calls a function may execute all lines yet detect no wrong result. Write failure-path tests for unavailable services and permission errors. A useful CI pipeline runs formatting checks, lint, type checks and tests on every proposed change.",
    "example": "A yield ratio function should reject zero tested, negative counts and passed>tested, and return 1 for equal positive counts.",
    "pitfall": "Treating 100% line coverage as proof of correctness.",
    "task": "Which test checks a complete browser login and report workflow?",
    "answer": "End-to-end test.",
    "quiz": {
      "q": "Which test checks a complete browser login and report workflow?",
      "options": [
        "A single arithmetic unit test",
        "A code comment",
        "End-to-end test.",
        "A formatter"
      ],
      "correct": 2,
      "why": "End-to-end test."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "quality",
    "title": "Git branches, code review and CI workflows",
    "objective": "Collaborate without breaking the main branch.",
    "theory": "Git records snapshots and relationships between commits. Create a focused branch, commit logically related changes, and review git diff before pushing. A pull request explains the problem, solution, test evidence and risks. Merge conflicts require understanding both changes, not blindly selecting one side.\n\nCode review should inspect correctness, security, maintainability and tests. Ask whether a change handles errors, preserves contracts, and has a rollback path. Separate formatting-only changes from semantic changes to keep diffs readable. Avoid committing secrets; deleting a secret in a later commit does not erase it from history, so rotate exposed credentials.\n\nCI runs reproducible checks in a clean environment. Pin dependencies reasonably, use lockfiles, configure least-privilege credentials, and require checks before merging. Keep deployment separate from untrusted pull request execution. Record a release version and a rollback procedure. A failed build is feedback, not a reason to disable checks.",
    "example": "A pull request fixes duplicate job creation and includes a regression test with repeated idempotency keys.",
    "pitfall": "Committing an .env secret or force-pushing over shared work.",
    "task": "What is the strongest evidence for a bug-fix PR?",
    "answer": "A failing-before/passing-after regression test plus a focused explanation.",
    "quiz": {
      "q": "What is the strongest evidence for a bug-fix PR?",
      "options": [
        "A large diff",
        "A screenshot alone",
        "A claim that AI wrote it",
        "A failing-before/passing-after regression test plus a focused explanation."
      ],
      "correct": 3,
      "why": "A failing-before/passing-after regression test plus a focused explanation."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "quality",
    "title": "Threat modeling and secure input handling",
    "objective": "Design defensively from the beginning.",
    "theory": "Threat modeling starts with assets, actors, trust boundaries and likely misuse. A report service stores user data, accepts browser input and accesses a database; each crossing is a boundary. Identify threats such as unauthorized reads, injection, resource abuse and exposed credentials. Prioritize mitigations by impact and likelihood.\n\nSQL injection occurs when untrusted data becomes executable query syntax; use parameterized queries, not string concatenation. Cross-site scripting occurs when untrusted data becomes executable browser content; escape output and use safe DOM operations. Path traversal occurs when untrusted paths escape an allowed directory; validate resolved paths and prefer server-generated identifiers.\n\nSecrets belong in managed server-side configuration. Enforce least privilege, rate limits, input limits and dependency updates. Avoid leaking sensitive logs. Security tests should use authorized local or synthetic systems, never real employers’ systems without permission. Document security assumptions and residual risks.",
    "example": "A search value containing quotes is passed as a database parameter, never concatenated into SQL.",
    "pitfall": "Assuming client-side filtering prevents SQL injection.",
    "task": "How should untrusted values be passed to SQL?",
    "answer": "Parameterized queries.",
    "quiz": {
      "q": "How should untrusted values be passed to SQL?",
      "options": [
        "Parameterized queries.",
        "String concatenation",
        "eval",
        "HTML escaping alone"
      ],
      "correct": 0,
      "why": "Parameterized queries."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "arch",
    "title": "Requirements, interfaces and modularity",
    "objective": "Turn a vague idea into testable software.",
    "theory": "Begin with user needs and measurable acceptance criteria. A report dashboard might require authenticated users to view their own reports within a stated latency target. Separate functional requirements from nonfunctional constraints such as reliability, accessibility, security and cost. Clarify assumptions before coding.\n\nA module owns a coherent responsibility and exposes a small interface. Keep dependencies flowing toward stable domain logic; infrastructure adapters implement contracts for storage and network. A modular monolith is often easier to deploy and debug than many services. Choose service boundaries when operational or organizational needs justify them.\n\nWrite an architecture decision record with context, chosen approach, alternatives, consequences and revisit criteria. A design pattern is a vocabulary for recurring problems, not a mandate to create layers for every function. Review interfaces for failure behavior and version compatibility. Test assumptions early with a small vertical slice.",
    "example": "A dashboard vertical slice: login → authorize → query one report → render → integration test.",
    "pitfall": "Designing ten microservices before confirming a single user workflow.",
    "task": "What is a useful first implementation for an uncertain architecture?",
    "answer": "A small end-to-end vertical slice.",
    "quiz": {
      "q": "What is a useful first implementation for an uncertain architecture?",
      "options": [
        "A thousand empty classes",
        "A small end-to-end vertical slice.",
        "A logo",
        "Ten unconnected services"
      ],
      "correct": 1,
      "why": "A small end-to-end vertical slice."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "arch",
    "title": "Reliability, observability and incidents",
    "objective": "Operate software and diagnose production-style failures.",
    "theory": "An SLI measures a service property such as success rate or latency. An SLO sets an internal objective over a window. Logs capture events, metrics summarize quantities and traces connect operations across components. Use structured logs with request IDs and safe metadata. Define alerts that require an actionable response.\n\nA production incident needs detection, containment, diagnosis, recovery and follow-up. Mitigate impact first, perhaps by rolling back a bad release. Preserve evidence without exposing private data. A blameless postmortem records timeline, contributing factors and corrective actions with owners. Do not confuse a root cause with the last human who touched the code.\n\nUse load testing with realistic workloads, failure simulation and recovery drills. Monitor error rates, saturation, latency and queue age. A service can meet average latency but fail p99. Set resource budgets and timeouts; verify graceful behavior when dependencies fail. Make recovery steps reproducible.",
    "example": "After a release doubles p95 latency, compare traces and database plans, roll back if needed, then reproduce in staging.",
    "pitfall": "Alerting on every log line rather than actionable service impact.",
    "task": "Which signal connects a request across multiple services?",
    "answer": "A distributed trace.",
    "quiz": {
      "q": "Which signal connects a request across multiple services?",
      "options": [
        "A CSS class",
        "A database password",
        "A distributed trace.",
        "A screenshot of the homepage"
      ],
      "correct": 2,
      "why": "A distributed trace."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "arch",
    "title": "System design: scalable data and ML services",
    "objective": "Estimate workloads and defend architectural choices.",
    "theory": "A design interview begins by clarifying requirements: requests per second, payload size, read/write mix, freshness, latency, privacy and failure tolerance. Convert assumptions into rough capacity estimates and distinguish peak from average traffic. Then draw client, API, database, queue, workers, object storage and monitoring as needed.\n\nUse synchronous paths for fast operations whose result users need immediately. Offload slow or retryable model jobs to a durable queue, return a job ID, and expose progress. Store large artifacts in object storage rather than bloating transactional rows. Keep model versions and feature definitions traceable. Use autoscaling only with resource and cost limits.\n\nDiscuss failure modes: duplicate jobs, dependency outage, stale models, unauthorized access, corrupted data and bad releases. Define idempotency, backups, rollback and monitoring. Compare a simple baseline architecture with a scaled variant, explain when to migrate, and identify what you would measure before adding complexity.",
    "example": "A wafer model batch job returns 202 Accepted plus job ID; workers handle retries and store predictions with model version.",
    "pitfall": "Choosing Kafka or Kubernetes without understanding the workload.",
    "task": "What should precede choosing a scalable architecture?",
    "answer": "Requirements and rough workload estimates.",
    "quiz": {
      "q": "What should precede choosing a scalable architecture?",
      "options": [
        "Picking the most tools",
        "Buying a GPU immediately",
        "Choosing a color theme",
        "Requirements and rough workload estimates."
      ],
      "correct": 3,
      "why": "Requirements and rough workload estimates."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "arch",
    "title": "Performance measurement and optimization",
    "objective": "Optimize with evidence, not intuition.",
    "theory": "Performance is a measurable property of a specific workload and environment. Establish baseline latency, throughput, memory and cost; use representative datasets and warm-up rules. A profiler identifies hot functions, query plans reveal database bottlenecks and traces expose cross-service delays. Optimize the dominant bottleneck first.\n\nAlgorithmic changes often have greater impact than small syntax tweaks. Batch database requests to avoid N+1 patterns; use appropriate indexes; vectorize numerical operations when it improves measured performance. Cache only when freshness and access rules permit. Batching can improve throughput while increasing latency for individual requests, so measure both.\n\nValidate correctness before and after optimization. Benchmark multiple runs and report variability; avoid comparing different hardware or workload conditions without disclosure. Keep a regression test and a benchmark in the repository. Stop when requirements are met rather than pursuing impressive but unnecessary micro-optimizations.",
    "example": "Fetching 100 reports with one parameterized batch query may outperform 100 sequential queries; compare measured p95 and results.",
    "pitfall": "Optimizing code without measuring or verifying correctness.",
    "task": "What is the first step in optimization?",
    "answer": "Measure a representative baseline and locate the bottleneck.",
    "quiz": {
      "q": "What is the first step in optimization?",
      "options": [
        "Measure a representative baseline and locate the bottleneck.",
        "Rewrite everything in Rust",
        "Disable validation",
        "Add ten servers"
      ],
      "correct": 0,
      "why": "Measure a representative baseline and locate the bottleneck."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "cscore",
    "title": "C values, pointers and memory safety",
    "objective": "Understand addresses and explicit lifetime.",
    "theory": "C exposes lower-level representations than Python. Variables have declared types and objects occupy memory. A pointer holds an address of an object or a null value. The & operator obtains an address, and * dereferences a valid pointer. Array access requires valid bounds; C does not automatically provide Python-style bounds checking.\n\nAutomatic storage often lives for the duration of a block; dynamically allocated storage from malloc must be freed exactly once when no longer needed. Check allocation failure. Returning a pointer to an object whose lifetime ended is invalid. Access after free, out-of-bounds writes and uninitialized values can cause undefined behavior.\n\nCompile with warnings enabled and use sanitizers in local practice when supported. Begin with small programs: sum an array given pointer and length, then handle empty arrays. Do not assume that a program producing the expected output once is memory-safe. Prefer safer abstractions and languages when manual memory control is unnecessary.",
    "example": "int x=7; int *p=&x; *p=9 changes x to 9.",
    "pitfall": "Returning the address of a local automatic variable.",
    "task": "What must be true before dereferencing a pointer?",
    "answer": "It points to a valid live object of the appropriate type.",
    "quiz": {
      "q": "What must be true before dereferencing a pointer?",
      "options": [
        "It is always zero",
        "It points to a valid live object of the appropriate type.",
        "It is a string",
        "It has a large numeric address"
      ],
      "correct": 1,
      "why": "It points to a valid live object of the appropriate type."
    },
    "minutes": 40,
    "code": "int main(void) {\n    int x = 7;\n    int *p = &x;\n    *p = 9;\n    return x == 9 ? 0 : 1;\n}",
    "reference": ""
  },
  {
    "module": "cscore",
    "title": "Java, static types and managed memory",
    "objective": "Transfer core concepts to enterprise backends.",
    "theory": "Java source compiles to bytecode executed by a JVM. Static types describe variables and methods; classes encapsulate behavior and interfaces describe contracts. Objects are managed by garbage collection, but resources such as streams and connections still need explicit cleanup, often through try-with-resources.\n\nGenerics such as List<String> help enforce element types at compile time. Distinguish primitive types and references; == on object references tests identity, while equals typically tests logical equality when implemented appropriately. Exceptions can be checked or unchecked. Avoid catching exceptions without meaningful recovery.\n\nBuild a small command-line program before learning an enterprise framework. Then explore a simple HTTP service in Spring Boot if target postings call for Java. Compare the same design in Python and Java: data contract, domain function, repository interface, tests. Transfer concepts rather than memorizing syntax alone.",
    "example": "Two different String objects with equal text should be compared using equals, not reference identity.",
    "pitfall": "Assuming garbage collection closes database connections automatically.",
    "task": "What compares logical string content in Java?",
    "answer": "equals",
    "quiz": {
      "q": "What compares logical string content in Java?",
      "options": [
        "Reference ==",
        "A pointer cast",
        "equals",
        "sizeof"
      ],
      "correct": 2,
      "why": "equals"
    },
    "minutes": 40,
    "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello engineer\");\n  }\n}",
    "reference": ""
  },
  {
    "module": "cscore",
    "title": "Memory, recursion and numerical representation",
    "objective": "Connect language behavior to underlying computation.",
    "theory": "Integers in fixed-width languages may overflow if results exceed their range; rules depend on the language and type. Floating-point values approximate real numbers and operations introduce rounding. Text uses encodings such as UTF-8; a character, code point and byte are different concepts. Understand units when serializing or measuring data.\n\nFunction calls create logical call frames that contain local state and return information. Recursion solves a problem using smaller instances with a terminating base case. Deep recursion can exhaust stack limits. Iterative solutions can replace some recursive algorithms and may use an explicit stack for control.\n\nTrace factorial on small integers, then reason about invalid negative inputs and growth. In systems code, examine overflow, memory access and input boundaries. Numerical algorithms should state precision and tolerances. In data science, compare stable formulations rather than assuming mathematical equivalence implies identical floating-point behavior.",
    "example": "factorial(3) calls factorial(2), factorial(1), then returns 6, if the base case is n<=1.",
    "pitfall": "Recursing without a shrinking input or valid base case.",
    "task": "What is essential for a recursive algorithm to terminate?",
    "answer": "A reachable base case and progress toward it.",
    "quiz": {
      "q": "What is essential for a recursive algorithm to terminate?",
      "options": [
        "A global list",
        "A web browser",
        "A random number generator",
        "A reachable base case and progress toward it."
      ],
      "correct": 3,
      "why": "A reachable base case and progress toward it."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "build",
    "title": "From problem statement to code without AI",
    "objective": "Develop repeatable independent problem-solving habits.",
    "theory": "Read the problem and restate inputs, outputs, constraints and invalid cases. Work one example by hand. Identify the invariant and write pseudocode before choosing syntax. Start with a simple correct approach, then analyze its time and space requirements. Use documentation to recall syntax, but avoid solution lookup during independent assessments.\n\nWrite the smallest implementation, run examples and add edge-case tests. If a test fails, trace actual values rather than ask AI for a replacement. Record the first mistaken assumption and how you corrected it. Review the solution after a delay and solve a related variant without copying. This develops transfer rather than recognition.\n\nProfessional work allows collaboration and tools, but your own reasoning must remain accountable. A useful readiness exercise is a timed session with no AI, public documentation allowed, an unseen specification, automated tests and a reviewer asking why the implementation works. Browser exercises are self-assessments because test code and state remain inspectable.",
    "example": "For deduplication preserving order, use a seen set and append only the first occurrence; state why output order is preserved.",
    "pitfall": "Memorizing complete solutions and failing on small variants.",
    "task": "What should you do first for an unfamiliar coding problem?",
    "answer": "Clarify the input/output contract and work a small example manually.",
    "quiz": {
      "q": "What should you do first for an unfamiliar coding problem?",
      "options": [
        "Ask for a complete solution",
        "Clarify the input/output contract and work a small example manually.",
        "Choose a framework",
        "Start optimizing immediately"
      ],
      "correct": 1,
      "why": "Clarify the input/output contract and work a small example manually."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "build",
    "title": "Build a full-stack product in vertical slices",
    "objective": "Deliver a maintainable application from an empty repository.",
    "theory": "A portfolio product should demonstrate more than attractive screens. Choose a concrete user problem, for example tracking fictional factory incidents. Define user roles, core workflow, data model, API contract and success criteria. Build a vertical slice with a real database and authenticated access before expanding features.\n\nUse a local development environment, migrations, sample data, tests and a repeatable deployment. Separate UI components, service logic and persistence. Add error handling, loading states and permissions. Inspect network requests and server logs; reproduce issues locally. Write an architecture decision record and a README with setup instructions.\n\nDeploy to a staging environment, verify end-to-end workflows, run accessibility checks and test failure conditions. Keep a small public demo with synthetic data only. A reviewer should be able to clone the repository, run tests and understand limitations. A project built from a copied template still needs original work and an explanation of every significant design decision.",
    "example": "Milestone 1: create an incident and retrieve it under the correct user account. Milestone 2: filtering, metrics, deployment and monitoring.",
    "pitfall": "Building all UI pages before implementing any reliable backend workflow.",
    "task": "What makes a full-stack portfolio project credible?",
    "answer": "A reproducible working system with tests, permissions and documented tradeoffs.",
    "quiz": {
      "q": "What makes a full-stack portfolio project credible?",
      "options": [
        "Many screenshots",
        "A large generated codebase",
        "A reproducible working system with tests, permissions and documented tradeoffs.",
        "An unsupported claim of scale"
      ],
      "correct": 2,
      "why": "A reproducible working system with tests, permissions and documented tradeoffs."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "build",
    "title": "Build an AI assistant as a software system",
    "objective": "Implement retrieval and tool interfaces with evaluation.",
    "theory": "An AI assistant application combines a user interface, conversation state, an LLM or local model, optional retrieval and tools. A foundational model itself requires a very different training effort. You can build a useful assistant by integrating existing models while understanding tokenization, inference limits and evaluation.\n\nDesign the assistant’s boundaries: what information it may access, what actions require approval and when it should abstain. Store conversations only if needed and protect them. A retrieval system indexes approved content, returns relevant evidence and provides citations. Tool calls must be validated against schemas and authorized by the application, not trusted because the model requested them.\n\nEvaluate with representative questions, known answers, adversarial inputs and failure cases. Measure correctness, citation grounding, latency and cost. Use a deterministic baseline or mock provider in tests. Do not claim an assistant reliably fixes every bug or matches frontier-model capability. For a coding assistant, show diffs, sandbox execution locally and require review before writes.",
    "example": "A tutor asks the learner for a failing test, explains an error and provides a minimal hint before suggesting a solution.",
    "pitfall": "Giving a model unrestricted database or shell privileges.",
    "task": "Who must enforce authorization for a model-requested tool call?",
    "answer": "The application or service.",
    "quiz": {
      "q": "Who must enforce authorization for a model-requested tool call?",
      "options": [
        "The model’s confidence score",
        "The user-interface color",
        "The retrieved document",
        "The application or service."
      ],
      "correct": 3,
      "why": "The application or service."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  },
  {
    "module": "build",
    "title": "Technical interview, evidence and salary filters",
    "objective": "Prepare to demonstrate ability instead of claiming a score.",
    "theory": "A technical interview tests problem framing, reasoning, code correctness and communication. Practice solving unfamiliar problems with a time limit, then explain complexity and alternatives. For software interviews, defend API contracts, database schema, authentication, tests and reliability. For AI interviews, explain data splits, baselines, metrics and model failure modes.\n\nMaintain an evidence portfolio with original commits, runnable projects, tests, measured results and limitations. Ask another engineer to review the code and conduct a live walkthrough. Use feedback to identify gaps. Do not present guided exercises or self-checked boxes as independent certification.\n\nFor Kaohsiung roles, check actual worksite, language expectations, degree/experience and current requirements. Your salary threshold is strictly above NT$100,000 fixed monthly base, not bonus-inclusive annual compensation. Confirm the written offer and distinguish salary from allowances. Strong skills improve competitiveness but cannot override vacancy availability, experience expectations or hiring decisions.",
    "example": "A reviewer gives a new endpoint requirement; you implement, test and explain it live without AI generating the solution.",
    "pitfall": "Assuming a completed course equals a guaranteed salary or global ranking.",
    "task": "What counts as strong independent coding evidence?",
    "answer": "A reviewed original solution to an unfamiliar task with tests and explanation.",
    "quiz": {
      "q": "What counts as strong independent coding evidence?",
      "options": [
        "A reviewed original solution to an unfamiliar task with tests and explanation.",
        "Lesson completion alone",
        "A copied repository",
        "A self-assigned percentile"
      ],
      "correct": 0,
      "why": "A reviewed original solution to an unfamiliar task with tests and explanation."
    },
    "minutes": 40,
    "code": "",
    "reference": ""
  }
];
