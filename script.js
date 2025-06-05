// Motivational quotes array
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Every expert was once a beginner.",
  "Success is the sum of small efforts repeated daily.",
  "Doubt kills more dreams than failure ever will.",
  "Your only limit is your mind.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Java today, job tomorrow!",
  "Code your way to success, one day at a time.",
  "Small progress is still progress.",
  "Your future self will thank you for the work you put in today.",
  "Practice makes perfect - code every day!",
  "Algorithms today, solutions tomorrow!",
]

// Topic icons mapping (using emojis and symbols)
const topicIcons = {
  "Core Java": "☕",
  Programming: "💻",
  "Advanced Java": "🚀",
  Aptitude: "🧮",
  Communication: "💬",
  HR: "👥",
  Testing: "🧪",
  Mock: "📝",
  Revision: "📚",
}

// Study plan data
const data = [
  {
    day: "Day 1",
    totalHours: "10-11 hours",
    topics: {
      "Core Java": {
        tasks: ["OOP Basics", "Classes & Objects", "Constructors"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Java Syntax basics",
          "Variables, loops, conditionals",
          "Print patterns",
          "Factorial problems",
          "Prime number algorithms",
        ],
        time: "2 hrs",
      },
      Aptitude: {
        tasks: ["Number Systems", "Time & Work"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Self Intro Practice"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Tell me about yourself"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Review Day's Learning", "Practice OOP concepts"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 2",
    totalHours: "10-11 hours",
    topics: {
      "Core Java": {
        tasks: ["Inheritance", "Polymorphism", "Method Overriding"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Arrays & Strings problems",
          "Search algorithms",
          "Sort algorithms",
          "Reverse operations",
          "Find duplicates",
          "Substring checks",
        ],
        time: "2 hrs",
      },
      Aptitude: {
        tasks: ["Percentages", "Averages"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Review Intro Recording"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Strengths & Weaknesses"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Practice Inheritance", "Array problems practice"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 3",
    totalHours: "11-12 hours",
    topics: {
      "Core Java": {
        tasks: ["Interfaces", "Abstract Classes", "Interface vs Abstract"],
        time: "5 hrs",
      },
      Programming: {
        tasks: [
          "Bubble Sort implementation",
          "Selection Sort",
          "Insertion Sort",
          "Sorting practice on arrays",
          "Compare sorting algorithms",
        ],
        time: "2 hrs",
      },
      Aptitude: {
        tasks: ["Ages", "Profit & Loss"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Topic Speech (2 mins)"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Situational Questions"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Interface practice", "Sorting algorithm comparison"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 4",
    totalHours: "10-11 hours",
    topics: {
      "Core Java": {
        tasks: ["Exception Handling", "Try-catch blocks", "Packages"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Recursion basics",
          "Factorial using recursion",
          "Fibonacci series",
          "Sum of digits",
          "Backtracking introduction",
        ],
        time: "2 hrs",
      },
      Aptitude: {
        tasks: ["Ratios", "Simple Interest"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Mock HR"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Career Goals"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Exception handling practice", "Recursion problems"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 5",
    totalHours: "11-12 hours",
    topics: {
      "Core Java": {
        tasks: ["Collections Framework", "List interface", "Set interface", "Map basics"],
        time: "4 hrs",
      },
      Programming: {
        tasks: [
          "Linear Search",
          "Binary Search implementation",
          "Collections coding problems",
          "Search in sorted arrays",
        ],
        time: "2 hrs",
      },
      "Advanced Java": {
        tasks: ["JDBC Introduction", "Database connectivity"],
        time: "1 hr",
      },
      Aptitude: {
        tasks: ["Online Test Practice"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Explain JDBC"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Why Java?"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Collections practice", "Search algorithms"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 6",
    totalHours: "10-11 hours",
    topics: {
      "Core Java": {
        tasks: ["JDBC CRUD operations", "Database connections"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Singly Linked List",
          "Doubly Linked List",
          "Linked List implementation",
          "Insert/Delete operations",
          "Linked List problems",
        ],
        time: "2 hrs",
      },
      Aptitude: {
        tasks: ["Logical Reasoning"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Group Discussion"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Pressure Handling"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["JDBC practice", "Linked List operations"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 7",
    totalHours: "11-12 hours",
    topics: {
      "Advanced Java": {
        tasks: ["Servlets Basics", "JSP Introduction", "Web development concepts"],
        time: "4 hrs",
      },
      Programming: {
        tasks: [
          "Stack implementation",
          "Queue implementation",
          "Stack problems",
          "Queue problems",
          "Expression evaluation",
        ],
        time: "2 hrs",
      },
      "Core Java": {
        tasks: ["Generics", "Custom Sorting"],
        time: "1 hr",
      },
      Aptitude: {
        tasks: ["Mock Test"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Presentation"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Team Experience"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Servlet practice", "Stack/Queue problems"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 8",
    totalHours: "11-12 hours",
    topics: {
      "Advanced Java": {
        tasks: ["Hibernate Basics", "ORM concepts", "HQL queries"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Binary Trees",
          "Binary Search Trees",
          "Tree traversal (Inorder, Preorder, Postorder)",
          "BST operations",
          "Tree problems",
        ],
        time: "2 hrs",
      },
      Testing: {
        tasks: ["JUnit Basics"],
        time: "1 hr",
      },
      Aptitude: {
        tasks: ["Final Practice"],
        time: "1 hr",
      },
      Communication: {
        tasks: ["Project Explanation"],
        time: "0.5 hr",
      },
      HR: {
        tasks: ["Why Development?"],
        time: "0.5 hr",
      },
      Revision: {
        tasks: ["Hibernate practice", "Tree algorithms"],
        time: "2 hrs",
      },
    },
  },
  {
    day: "Day 9",
    totalHours: "11-12 hours",
    topics: {
      "Advanced Java": {
        tasks: ["Spring Boot Overview", "REST API basics", "Spring Boot + MySQL"],
        time: "4-5 hrs",
      },
      Programming: {
        tasks: [
          "Graph Introduction",
          "Graph representation",
          "BFS algorithm",
          "DFS algorithm",
          "Graph traversal problems",
        ],
        time: "2 hrs",
      },
      Mock: {
        tasks: ["Online Test Practice"],
        time: "2 hrs",
      },
      Communication: {
        tasks: ["Tech Interview Mock"],
        time: "1 hr",
      },
      HR: {
        tasks: ["Company-specific HR"],
        time: "1 hr",
      },
      Revision: {
        tasks: ["Spring Boot practice", "Graph algorithms"],
        time: "1 hr",
      },
    },
  },
  {
    day: "Day 10",
    totalHours: "10-12 hours",
    topics: {
      Revision: {
        tasks: ["JEE concepts review", "Core Java Review", "Advanced Java Review"],
        time: "3-4 hrs",
      },
      Programming: {
        tasks: [
          "Dynamic Programming basics",
          "DP sample problems",
          "Combined problems from previous days",
          "Algorithm revision",
        ],
        time: "2 hrs",
      },
      Mock: {
        tasks: ["Final Interview", "Final Aptitude Test", "Coding Interview Practice"],
        time: "4-5 hrs",
      },
      Communication: {
        tasks: ["Motivation & Confidence", "Final preparation"],
        time: "1 hr",
      },
    },
  },
]

// Initialize the application
function initializeApp() {
  // Set random motivational quote
  document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)]

  // Load dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark")
  }

  // Generate the timetable
  generateTimetable()
}

// Generate the complete timetable
function generateTimetable() {
  const container = document.getElementById("timetable")

  data.forEach((item, dayIndex) => {
    const dayDiv = document.createElement("div")
    dayDiv.className = "day"

    const header = document.createElement("h2")
    header.innerHTML = `${item.day} <span>➕</span>`
    const topicsDiv = document.createElement("div")
    topicsDiv.className = "topics"

    const countdown = document.createElement("div")
    countdown.className = "countdown"
    countdown.textContent = `Countdown: ${10 - dayIndex} days remaining`
    dayDiv.appendChild(countdown)

    // Add daily summary
    const dailySummary = document.createElement("div")
    dailySummary.className = "daily-summary"
    dailySummary.textContent = `📅 Total Study Time: ${item.totalHours}`
    topicsDiv.appendChild(dailySummary)

    let totalTasks = 0
    let completedTasks = 0

    Object.entries(item.topics).forEach(([category, topicData]) => {
      const group = document.createElement("div")
      group.className = "topic-group"
      group.setAttribute("data-category", category)

      // Add floating background element
      const backgroundDiv = document.createElement("div")
      backgroundDiv.className = "topic-background"
      group.appendChild(backgroundDiv)

      const topicHeader = document.createElement("div")
      topicHeader.className = "topic-header"

      const titleContainer = document.createElement("div")
      titleContainer.className = "topic-title-container"

      // Add topic icon with emoji
      const icon = document.createElement("div")
      icon.className = "topic-icon"
      icon.textContent = topicIcons[category] || "📖"

      const title = document.createElement("strong")
      title.textContent = category

      titleContainer.appendChild(icon)
      titleContainer.appendChild(title)

      const timeIndicator = document.createElement("span")
      timeIndicator.className = "time-indicator"
      timeIndicator.textContent = `⏱️ ${topicData.time}`

      topicHeader.appendChild(titleContainer)
      topicHeader.appendChild(timeIndicator)
      group.appendChild(topicHeader)

      const ul = document.createElement("ul")
      topicData.tasks.forEach((task, taskIndex) => {
        totalTasks++
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const storageKey = `day${dayIndex}_${category}_${task}`
        checkbox.checked = localStorage.getItem(storageKey) === "true"
        if (checkbox.checked) completedTasks++

        checkbox.addEventListener("change", () => {
          localStorage.setItem(storageKey, checkbox.checked)
          updateProgress(dayDiv, dayIndex)
        })
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(task))
        ul.appendChild(li)
      })
      group.appendChild(ul)
      topicsDiv.appendChild(group)
    })

    // Add progress bar
    const progressBar = document.createElement("div")
    progressBar.className = "progress-bar"
    const progressFill = document.createElement("div")
    progressFill.className = "progress-fill"
    const progressPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
    progressFill.style.width = `${progressPercent}%`
    progressBar.appendChild(progressFill)
    topicsDiv.appendChild(progressBar)

    header.addEventListener("click", () => {
      const open = topicsDiv.style.display === "block"

      // Close all other cards first
      document.querySelectorAll(".day").forEach((otherDay) => {
        if (otherDay !== dayDiv) {
          const otherTopics = otherDay.querySelector(".topics")
          const otherHeader = otherDay.querySelector("h2 span")
          if (otherTopics && otherHeader) {
            otherTopics.style.display = "none"
            otherHeader.textContent = "➕"
          }
        }
      })

      // Then toggle current card
      topicsDiv.style.display = open ? "none" : "block"
      header.querySelector("span").textContent = open ? "➕" : "➖"
    })

    dayDiv.appendChild(header)
    dayDiv.appendChild(topicsDiv)
    container.appendChild(dayDiv)
  })
}

// Update progress for a specific day
function updateProgress(dayDiv, dayIndex) {
  let totalTasks = 0
  let completedTasks = 0

  Object.entries(data[dayIndex].topics).forEach(([category, topicData]) => {
    topicData.tasks.forEach((task) => {
      totalTasks++
      const storageKey = `day${dayIndex}_${category}_${task}`
      if (localStorage.getItem(storageKey) === "true") {
        completedTasks++
      }
    })
  })

  const progressBar = dayDiv.querySelector(".progress-fill")
  const progressPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  progressBar.style.width = `${progressPercent}%`
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark")
  localStorage.setItem("darkMode", document.body.classList.contains("dark"))
}

// Reset all progress
function resetProgress() {
  if (confirm("Are you sure you want to reset your progress?")) {
    // Keep dark mode setting
    const darkMode = localStorage.getItem("darkMode")
    localStorage.clear()
    if (darkMode) {
      localStorage.setItem("darkMode", darkMode)
    }
    location.reload()
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp)
