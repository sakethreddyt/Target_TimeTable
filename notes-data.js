// Study Notes Database
const studyNotes = {
  "Core Java": {
    "OOP Basics": {
      title: "🔶 OOP Basics (Object-Oriented Programming)",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            'OOP is a programming paradigm based on the concept of "objects," which can contain data and methods. Java is an object-oriented language that uses OOP principles like:',
          list: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        },
        {
          heading: "🧠 Real-World Analogy:",
          content: "A car is an object. It has:",
          list: ["Properties (data) – color, speed, fuel.", "Behaviors (methods) – accelerate, brake, turn."],
        },
        {
          heading: "📝 Interview Questions:",
          list: [
            "What are the four pillars of OOP?",
            "How does Java implement OOP concepts?",
            "What is the difference between procedural and object-oriented programming?",
          ],
        },
      ],
    },
    "Classes & Objects": {
      title: "🔶 Classes & Objects",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Class: A blueprint for creating objects. It defines properties (fields) and behaviors (methods).\n\nObject: An instance of a class that contains real values.",
        },
        {
          heading: "🔢 Example:",
          code: `class Car {
    // Properties (fields)
    String color;
    int speed;

    // Behavior (method)
    void drive() {
        System.out.println("Car is driving at " + speed + " km/h");
    }
}`,
        },
      ],
    },
    Constructors: {
      title: "🔶 Constructors",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A constructor is a special method that gets called when an object is created. It has the same name as the class and doesn't have a return type.",
        },
        {
          heading: "🧠 Types:",
          list: [
            "Default Constructor – no parameters.",
            "Parameterized Constructor – with parameters to set initial values.",
          ],
        },
      ],
    },
    Inheritance: {
      title: "🔶 Inheritance",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Inheritance is a mechanism where one class acquires the properties and behaviors of another class. It promotes code reusability.",
        },
        {
          heading: "🧠 Types:",
          list: [
            "Single Inheritance – One class inherits from another",
            "Multilevel Inheritance – Chain of inheritance",
            "Hierarchical Inheritance – Multiple classes inherit from one parent",
          ],
        },
      ],
    },
    Polymorphism: {
      title: "🔶 Polymorphism",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            'Polymorphism means "many forms." It allows one interface to be used for different underlying data types.',
        },
        {
          heading: "🧠 Types:",
          list: [
            "Method Overloading – Same method name, different parameters",
            "Method Overriding – Child class provides specific implementation of parent method",
          ],
        },
      ],
    },
    "Method Overriding": {
      title: "🔶 Method Overriding",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class.",
        },
        {
          heading: "🧠 Rules:",
          list: [
            "Method must have same name and parameters as in parent class",
            "Return type must be same or covariant (subtype)",
            "Access modifier cannot be more restrictive than parent method",
          ],
        },
      ],
    },
    "Exception Handling": {
      title: "🔶 Exception Handling",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Exception handling is a mechanism to handle runtime errors to maintain normal flow of application execution.",
        },
        {
          heading: "🧠 Types of Exceptions:",
          list: [
            "Checked Exceptions - Compile-time exceptions (e.g., IOException)",
            "Unchecked Exceptions - Runtime exceptions (e.g., NullPointerException)",
            "Error - Serious problems that application should not try to catch",
          ],
        },
      ],
    },
    Packages: {
      title: "🔶 Packages",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A package is a namespace that organizes a set of related classes and interfaces. It helps in avoiding name conflicts and provides access protection.",
        },
        {
          heading: "🧠 Types:",
          list: [
            "Built-in Packages - java.lang, java.util, java.io, etc.",
            "User-defined Packages - Created by developers",
          ],
        },
      ],
    },
    "Collections Framework": {
      title: "🔶 Collections Framework",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "The Collections Framework is a unified architecture for representing and manipulating collections of objects.",
        },
        {
          heading: "🧠 Core Interfaces:",
          list: [
            "Collection - Root interface",
            "List - Ordered collection (e.g., ArrayList, LinkedList)",
            "Set - Collection with no duplicates (e.g., HashSet, TreeSet)",
            "Map - Key-value pairs (e.g., HashMap, TreeMap)",
          ],
        },
      ],
    },
    "JDBC CRUD operations": {
      title: "🔶 JDBC CRUD Operations",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "JDBC (Java Database Connectivity) CRUD operations refer to Create, Read, Update, and Delete operations performed on a database using Java.",
        },
        {
          heading: "🧠 Steps for JDBC Operations:",
          list: [
            "Load the JDBC driver",
            "Establish a connection",
            "Create a statement",
            "Execute the query",
            "Process the results",
            "Close the connection",
          ],
        },
      ],
    },
    Generics: {
      title: "🔶 Generics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods. They provide compile-time type safety.",
        },
        {
          heading: "🧠 Benefits:",
          list: [
            "Type safety - Errors caught at compile time rather than runtime",
            "Elimination of type casting",
            "Enable implementation of generic algorithms",
          ],
        },
      ],
    },
    "Custom Sorting": {
      title: "🔶 Custom Sorting",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Custom sorting in Java allows you to define your own sorting logic for objects using the Comparable and Comparator interfaces.",
        },
        {
          heading: "🧠 Approaches:",
          list: [
            "Comparable - Natural ordering (implements Comparable interface)",
            "Comparator - Custom ordering (separate class implementing Comparator)",
          ],
        },
      ],
    },
  },
  Programming: {
    "Java Syntax basics": {
      title: "🔶 Java Syntax Fundamentals",
      sections: [
        {
          heading: "✅ Basic Structure:",
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        },
        {
          heading: "🔢 Variables:",
          content: "Java has different data types:",
          list: [
            "int - Integer numbers",
            "double - Decimal numbers",
            "String - Text",
            "boolean - true/false",
            "char - Single character",
          ],
        },
      ],
    },
    "Arrays & Strings problems": {
      title: "🔶 Arrays & Strings",
      sections: [
        {
          heading: "✅ Array Declaration:",
          code: `// Declaration and initialization
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[5];

// Accessing elements
int first = numbers[0];
names[0] = "John";`,
        },
        {
          heading: "🔍 Common Array Problems:",
          list: [
            "Find maximum/minimum element",
            "Search for an element",
            "Sort array elements",
            "Find duplicates",
            "Reverse array",
          ],
        },
      ],
    },
    "Bubble Sort implementation": {
      title: "🔶 Bubble Sort Implementation",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
        },
        {
          heading: "🧠 Characteristics:",
          list: [
            "Time Complexity: O(n²) in worst and average cases",
            "Space Complexity: O(1)",
            "Stable sorting algorithm",
            "In-place algorithm",
          ],
        },
      ],
    },
    "Selection Sort": {
      title: "🔶 Selection Sort",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Selection Sort is a simple sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist.",
        },
        {
          heading: "🧠 Characteristics:",
          list: [
            "Time Complexity: O(n²) in all cases",
            "Space Complexity: O(1)",
            "Not stable by default",
            "In-place algorithm",
          ],
        },
      ],
    },
    "Insertion Sort": {
      title: "🔶 Insertion Sort",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.",
        },
        {
          heading: "🧠 Characteristics:",
          list: [
            "Time Complexity: O(n²) worst and average case, O(n) best case",
            "Space Complexity: O(1)",
            "Stable sorting algorithm",
            "In-place algorithm",
          ],
        },
      ],
    },
    "Recursion basics": {
      title: "🔶 Recursion Basics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem by breaking it down into smaller, similar subproblems.",
        },
        {
          heading: "🧠 Components of Recursion:",
          list: [
            "Base Case - Condition to terminate recursion",
            "Recursive Case - Calls the function with a smaller or simpler input",
            "Progress Toward Base Case - Each recursive call must move closer to the base case",
          ],
        },
      ],
    },
    "Binary Search implementation": {
      title: "🔶 Binary Search Implementation",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.",
        },
        {
          heading: "🧠 Characteristics:",
          list: [
            "Time Complexity: O(log n)",
            "Space Complexity: O(1) for iterative, O(log n) for recursive",
            "Requires sorted array",
            "Divide and conquer algorithm",
          ],
        },
      ],
    },
    "Linked List implementation": {
      title: "🔶 Linked List Implementation",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Linked List is a linear data structure where elements are not stored at contiguous memory locations. Each element (node) contains data and a reference to the next node.",
        },
        {
          heading: "🧠 Types of Linked Lists:",
          list: [
            "Singly Linked List - Each node points to the next node",
            "Doubly Linked List - Each node points to both next and previous nodes",
            "Circular Linked List - Last node points back to the first node",
          ],
        },
      ],
    },
    "Stack implementation": {
      title: "🔶 Stack Implementation",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element inserted is the first one to be removed.",
        },
        {
          heading: "🧠 Basic Operations:",
          list: [
            "Push - Add an element to the top of the stack",
            "Pop - Remove the top element from the stack",
            "Peek/Top - Get the top element without removing it",
            "isEmpty - Check if the stack is empty",
          ],
        },
      ],
    },
    "Queue implementation": {
      title: "🔶 Queue Implementation",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Queue is a linear data structure that follows the First In First Out (FIFO) principle. The first element inserted is the first one to be removed.",
        },
        {
          heading: "🧠 Basic Operations:",
          list: [
            "Enqueue - Add an element to the end of the queue",
            "Dequeue - Remove the element from the front of the queue",
            "Front - Get the front element without removing it",
            "isEmpty - Check if the queue is empty",
          ],
        },
      ],
    },
    "Binary Trees": {
      title: "🔶 Binary Trees",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.",
        },
        {
          heading: "🧠 Types of Binary Trees:",
          list: [
            "Full Binary Tree - Every node has 0 or 2 children",
            "Complete Binary Tree - All levels are filled except possibly the last level",
            "Perfect Binary Tree - All internal nodes have two children and all leaf nodes are at the same level",
            "Balanced Binary Tree - Height is O(log n) where n is the number of nodes",
          ],
        },
      ],
    },
    "Binary Search Trees": {
      title: "🔶 Binary Search Trees",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Binary Search Tree (BST) is a binary tree where each node has a value greater than all values in its left subtree and less than all values in its right subtree.",
        },
        {
          heading: "🧠 Properties:",
          list: [
            "Left subtree of a node contains only nodes with keys less than the node's key",
            "Right subtree of a node contains only nodes with keys greater than the node's key",
            "Both the left and right subtrees must also be binary search trees",
            "No duplicate nodes (in standard BST)",
          ],
        },
      ],
    },
    "Graph Introduction": {
      title: "🔶 Graph Introduction",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "A Graph is a non-linear data structure consisting of nodes (vertices) and edges. The nodes are connected by edges, which may be directed or undirected.",
        },
        {
          heading: "🧠 Types of Graphs:",
          list: [
            "Directed Graph - Edges have direction",
            "Undirected Graph - Edges have no direction",
            "Weighted Graph - Edges have weights/costs",
            "Connected Graph - There is a path between every pair of vertices",
            "Cyclic Graph - Contains at least one cycle",
          ],
        },
      ],
    },
    "Dynamic Programming basics": {
      title: "🔶 Dynamic Programming Basics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems overlap and have optimal substructure.",
        },
        {
          heading: "🧠 Key Concepts:",
          list: [
            "Overlapping Subproblems - Same subproblems are solved multiple times",
            "Optimal Substructure - Optimal solution to the problem contains optimal solutions to subproblems",
            "Memoization - Storing results of expensive function calls to avoid redundant calculations",
            "Tabulation - Bottom-up approach to solve the problem",
          ],
        },
      ],
    },
  },
  "Advanced Java": {
    "JDBC Introduction": {
      title: "🔶 JDBC (Java Database Connectivity)",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "JDBC is a Java API that enables Java applications to interact with databases. It provides methods to query and update data in a database.",
        },
        {
          heading: "🔗 JDBC Steps:",
          list: [
            "Load the driver",
            "Establish connection",
            "Create statement",
            "Execute query",
            "Process results",
            "Close connection",
          ],
        },
      ],
    },
    "Servlets Basics": {
      title: "🔶 Servlets Basics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Servlets are Java programs that run on a web server and handle HTTP requests and responses. They are used to extend the capabilities of servers that host applications.",
        },
        {
          heading: "🧠 Servlet Lifecycle:",
          list: [
            "Loading and instantiation",
            "Initialization (init method)",
            "Request handling (service method)",
            "Destruction (destroy method)",
          ],
        },
      ],
    },
    "Hibernate Basics": {
      title: "🔶 Hibernate Basics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Hibernate is an Object-Relational Mapping (ORM) tool for Java that simplifies database operations by mapping Java objects to database tables.",
        },
        {
          heading: "🧠 Key Features:",
          list: [
            "ORM - Maps Java objects to database tables",
            "HQL - Hibernate Query Language",
            "Caching - Improves performance",
            "Transaction management",
            "Automatic table creation",
          ],
        },
      ],
    },
    "Spring Boot Overview": {
      title: "🔶 Spring Boot Overview",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "Spring Boot is a framework that simplifies the development of Spring applications by providing defaults for code and annotation configuration.",
        },
        {
          heading: "🧠 Key Features:",
          list: [
            "Auto-configuration - Automatically configures Spring application based on dependencies",
            "Standalone - Creates stand-alone Spring applications",
            "Embedded servers - No need to deploy WAR files",
            "Production-ready features - Metrics, health checks, externalized configuration",
          ],
        },
      ],
    },
  },
  Aptitude: {
    "Number Systems": {
      title: "🔶 Number Systems",
      sections: [
        {
          heading: "✅ Types:",
          list: [
            "Decimal (Base 10) - 0,1,2,3,4,5,6,7,8,9",
            "Binary (Base 2) - 0,1",
            "Octal (Base 8) - 0,1,2,3,4,5,6,7",
            "Hexadecimal (Base 16) - 0-9, A-F",
          ],
        },
        {
          heading: "🔄 Conversion Methods:",
          content: "Decimal to Binary: Divide by 2, note remainders\nBinary to Decimal: Multiply by powers of 2",
        },
      ],
    },
    "Time & Work": {
      title: "🔶 Time & Work",
      sections: [
        {
          heading: "✅ Basic Concepts:",
          list: [
            "If A can do a work in n days, then A's 1 day's work = 1/n",
            "If A's 1 day's work = 1/n, then A can finish the work in n days",
            "If A can do a work in n days and B can do the same work in m days, then working together, they can finish the work in (n*m)/(n+m) days",
          ],
        },
        {
          heading: "🔢 Example:",
          content:
            "If A can do a work in 10 days and B can do the same work in 15 days, then working together, they can finish the work in (10*15)/(10+15) = 150/25 = 6 days.",
        },
      ],
    },
  },
  Communication: {
    "Self Intro Practice": {
      title: "🔶 Self Introduction Practice",
      sections: [
        {
          heading: "✅ Structure:",
          list: [
            "Greeting and name",
            "Educational background",
            "Professional experience (if any)",
            "Technical skills relevant to the position",
            "Brief mention of a project or achievement",
            "Career goals and why you're interested in the company",
          ],
        },
        {
          heading: "🧠 Tips:",
          list: [
            "Keep it concise (1-2 minutes)",
            "Focus on relevant information",
            "Practice but don't memorize word for word",
            "Maintain eye contact and confident body language",
            "End with enthusiasm about the opportunity",
          ],
        },
      ],
    },
  },
  HR: {
    "Tell me about yourself": {
      title: "🔶 Tell Me About Yourself",
      sections: [
        {
          heading: "✅ Structure:",
          list: [
            "Present: Start with your current role or educational status",
            "Past: Briefly mention relevant past experiences",
            "Future: Express your goals and why you're interested in this position",
          ],
        },
        {
          heading: "🧠 Tips:",
          list: [
            "Keep it professional and relevant to the job",
            "Focus on strengths and achievements",
            "Be concise (1-2 minutes)",
            "Practice but sound natural",
            "Tailor your answer to the specific role",
          ],
        },
      ],
    },
    "Strengths & Weaknesses": {
      title: "🔶 Strengths & Weaknesses",
      sections: [
        {
          heading: "✅ Discussing Strengths:",
          list: [
            "Choose strengths relevant to the job",
            "Provide specific examples to back up claims",
            "Relate strengths to the requirements of the position",
            "Be confident but not arrogant",
          ],
        },
        {
          heading: "✅ Discussing Weaknesses:",
          list: [
            "Choose genuine weaknesses that aren't critical to the job",
            "Show self-awareness and a growth mindset",
            "Explain steps you're taking to improve",
            "Frame weaknesses as areas for development",
          ],
        },
      ],
    },
  },
  Testing: {
    "JUnit Basics": {
      title: "🔶 JUnit Basics",
      sections: [
        {
          heading: "✅ Definition:",
          content:
            "JUnit is a unit testing framework for Java programming language. It plays a crucial role in test-driven development and is part of a family of unit testing frameworks known as xUnit.",
        },
        {
          heading: "🧠 Key Features:",
          list: [
            "Annotations - @Test, @Before, @After, etc.",
            "Assertions - assertEquals(), assertTrue(), assertFalse(), etc.",
            "Test Runners - Run tests with different configurations",
            "Test Suites - Group multiple test classes",
          ],
        },
      ],
    },
  },
  Mock: {
    "Online Test Practice": {
      title: "🔶 Online Test Practice",
      sections: [
        {
          heading: "✅ Common Topics:",
          list: [
            "Data Structures and Algorithms",
            "Java Programming Fundamentals",
            "Object-Oriented Programming",
            "Database Concepts (SQL)",
            "Logical Reasoning",
            "Quantitative Aptitude",
          ],
        },
        {
          heading: "🧠 Preparation Tips:",
          list: [
            "Practice on platforms like HackerRank, LeetCode, and CodeSignal",
            "Time yourself to improve speed and accuracy",
            "Review common algorithms and data structures",
            "Practice SQL queries for database questions",
            "Take full-length mock tests to build stamina",
          ],
        },
      ],
    },
  },
  Revision: {
    "Review Day's Learning": {
      title: "🔶 Review Day's Learning",
      sections: [
        {
          heading: "✅ Effective Review Techniques:",
          list: [
            "Summarize key concepts in your own words",
            "Create flashcards for important terms and definitions",
            "Solve practice problems related to the topics covered",
            "Explain concepts to someone else (or pretend to)",
            "Identify areas of confusion for further study",
          ],
        },
        {
          heading: "🧠 Spaced Repetition:",
          content:
            "Review material at increasing intervals: same day, next day, after 3 days, after a week. This helps move information from short-term to long-term memory.",
        },
      ],
    },
  },
}

// Make studyNotes available globally
if (typeof window !== "undefined") {
  window.studyNotes = studyNotes
}
