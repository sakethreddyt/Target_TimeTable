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

// Global variables for edit mode
let currentCategory = ""
let isEditMode = false

// Countdown variables
let countdownInterval = null
let countdownStarted = false
let targetDate = null

// Start countdown from selected date
function startCountdown() {
  const dateInput = document.getElementById("interview-date")
  if (!dateInput.value) {
    alert("Please select your interview date first!")
    return
  }

  targetDate = new Date(dateInput.value)
  const currentDate = new Date()

  // Check if date is valid and in the future
  if (isNaN(targetDate) || targetDate <= currentDate) {
    alert("Please select a valid future date!")
    return
  }

  // Save target date to localStorage
  localStorage.setItem("interviewTargetDate", targetDate.toISOString())

  // Update countdown status
  countdownStarted = true
  localStorage.setItem("countdownStarted", "true")

  // Update UI
  updateCountdownDisplay()
  updateCountdownButtons()

  // Set interval to update countdown daily
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }

  // Update every hour to catch day changes
  countdownInterval = setInterval(updateCountdownDisplay, 3600000)

  console.log("Countdown started with target date:", targetDate)
}

// Stop countdown
function stopCountdown() {
  countdownStarted = false
  localStorage.removeItem("interviewTargetDate")
  localStorage.removeItem("countdownStarted")

  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }

  // Reset UI
  document.querySelectorAll(".countdown").forEach((el) => {
    el.textContent = "Countdown not started"
  })

  updateCountdownButtons()
  console.log("Countdown stopped")
}

// Update countdown display
function updateCountdownDisplay() {
  if (!countdownStarted || !targetDate) return

  const currentDate = new Date()
  const timeDiff = targetDate.getTime() - currentDate.getTime()

  // Calculate days remaining (round up to include current day)
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24))

  // Update all countdown elements
  document.querySelectorAll(".countdown").forEach((el, index) => {
    // For each day card, show appropriate countdown
    const dayIndex = Number.parseInt(el.closest(".day")?.getAttribute("data-day-index") || "0")

    if (daysRemaining <= 0) {
      el.textContent = "🎯 Interview Day! Good luck!"
      el.classList.add("countdown-urgent")
    } else {
      // Show day number for each day (day 1 shows 1 day, day 2 shows 2 days, etc.)
      // Last day shows all remaining days
      const dayNumber = dayIndex + 1
      const isLastDay = dayIndex === 9 // Assuming 10-day plan (0-9 indices)
      const adjustedDays = isLastDay ? daysRemaining : dayNumber

      if (adjustedDays === 0) {
        el.textContent = "📅 Today's Focus!"
        el.classList.add("countdown-today")
      } else {
        el.textContent = `Countdown: ${adjustedDays} day${adjustedDays !== 1 ? "s" : ""} remaining`

        // Add urgency classes
        el.classList.remove("countdown-urgent", "countdown-warning", "countdown-normal", "countdown-today")
        if (adjustedDays <= 2) {
          el.classList.add("countdown-urgent")
        } else if (adjustedDays <= 5) {
          el.classList.add("countdown-warning")
        } else {
          el.classList.add("countdown-normal")
        }
      }
    }
  })
}

// Update countdown buttons visibility
function updateCountdownButtons() {
  const startBtn = document.getElementById("start-countdown")
  const stopBtn = document.getElementById("stop-countdown")
  const dateInput = document.getElementById("interview-date")

  if (countdownStarted) {
    startBtn.style.display = "none"
    stopBtn.style.display = "inline-block"
    dateInput.disabled = true
  } else {
    startBtn.style.display = "inline-block"
    stopBtn.style.display = "none"
    dateInput.disabled = false
  }
}

// Restore countdown state
function restoreCountdownState() {
  const savedDate = localStorage.getItem("interviewTargetDate")
  const savedState = localStorage.getItem("countdownStarted")

  if (savedDate && savedState === "true") {
    targetDate = new Date(savedDate)
    countdownStarted = true

    // Update UI
    const dateInput = document.getElementById("interview-date")
    if (dateInput) {
      // Format date as YYYY-MM-DD for input
      const formattedDate = targetDate.toISOString().split("T")[0]
      dateInput.value = formattedDate
      dateInput.disabled = true
    }

    updateCountdownDisplay()
    updateCountdownButtons()

    // Set interval to update countdown daily
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }
    countdownInterval = setInterval(updateCountdownDisplay, 3600000)

    console.log("Countdown state restored with target date:", targetDate)
  }
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
  try {
    console.log("Initializing app...")

    // Set random motivational quote
    const quoteElement = document.getElementById("quote")
    if (quoteElement) {
      quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)]
    }

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark")
    }

    // Generate the timetable
    generateTimetable()

    // Restore countdown state
    restoreCountdownState()

    console.log("App initialized successfully")
  } catch (error) {
    console.error("Error initializing app:", error)
    const timetableElement = document.getElementById("timetable")
    if (timetableElement) {
      timetableElement.innerHTML =
        '<div style="text-align: center; padding: 20px; color: red;">❌ Error loading content. Please refresh the page.</div>'
    }
  }
}

// Generate the complete timetable
function generateTimetable() {
  console.log("Generating timetable...")
  const container = document.getElementById("timetable")
  if (!container) {
    console.error("Timetable container not found")
    return
  }

  // Clear any existing content
  container.innerHTML = ""

  // Add countdown controls at the top
  const countdownControls = document.createElement("div")
  countdownControls.className = "countdown-controls"
  countdownControls.innerHTML = `
    <div class="countdown-header">
      <h3>📅 Set Your Interview Date</h3>
      <p>Select your interview date to start the countdown</p>
    </div>
    <div class="countdown-inputs">
      <input type="date" id="interview-date" class="date-input">
      <button id="start-countdown" class="countdown-btn start-btn" onclick="startCountdown()">Start Countdown</button>
      <button id="stop-countdown" class="countdown-btn stop-btn" onclick="stopCountdown()" style="display: none;">Reset Countdown</button>
    </div>
  `
  container.appendChild(countdownControls)

  // Set minimum date to today
  const dateInput = document.getElementById("interview-date")
  if (dateInput) {
    const today = new Date()
    const formattedDate = today.toISOString().split("T")[0]
    dateInput.min = formattedDate

    // Default to 10 days from now
    const defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 10)
    dateInput.value = defaultDate.toISOString().split("T")[0]
  }

  data.forEach((item, dayIndex) => {
    const dayDiv = document.createElement("div")
    dayDiv.className = "day"
    dayDiv.setAttribute("data-day-index", dayIndex)

    const header = document.createElement("h2")
    header.innerHTML = `${item.day} <span>➕</span>`
    const topicsDiv = document.createElement("div")
    topicsDiv.className = "topics"

    const countdown = document.createElement("div")
    countdown.className = "countdown"
    countdown.textContent = "Countdown not started"
    dayDiv.appendChild(countdown)

    // Add daily summary with planned study time only
    const dailySummary = document.createElement("div")
    dailySummary.className = "daily-summary"
    dailySummary.innerHTML = `
      <div>📅 Planned Study Time: ${item.totalHours}</div>
    `
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

      // Add topic actions (notes button and time indicator)
      const topicActions = document.createElement("div")
      topicActions.className = "topic-actions"

      const notesBtn = document.createElement("button")
      notesBtn.className = "notes-btn"
      notesBtn.innerHTML = "📝 Notes"
      notesBtn.onclick = (e) => {
        e.stopPropagation()
        openNotesModal(category)
      }

      const timeIndicator = document.createElement("span")
      timeIndicator.className = "time-indicator"
      timeIndicator.innerHTML = `
        <div>⏱️ Planned: ${topicData.time}</div>
      `

      topicActions.appendChild(notesBtn)
      topicActions.appendChild(timeIndicator)

      topicHeader.appendChild(titleContainer)
      topicHeader.appendChild(topicActions)
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

  // Restore countdown state
  restoreCountdownState()
  updateCountdownDisplay()
  updateCountdownButtons()

  console.log("Timetable generated successfully")
}

// Open notes modal
function openNotesModal(category) {
  try {
    console.log("Opening notes for category:", category)
    currentCategory = category

    const modal = document.getElementById("notesModal")
    const modalTitle = document.getElementById("modalTitle")
    const notesContent = document.getElementById("notesContent")
    const editContent = document.getElementById("editContent")

    if (!modal || !modalTitle || !notesContent) {
      console.error("Modal elements not found")
      return
    }

    modalTitle.textContent = `📝 ${category} - Study Notes`

    // Reset edit mode
    isEditMode = false
    notesContent.style.display = "block"
    editContent.style.display = "none"
    document.getElementById("editBtn").textContent = "✏️ Edit"

    // Clear previous content
    notesContent.innerHTML = ""

    // Check for custom notes first
    if (loadCustomNotes(category)) {
      modal.style.display = "block"
      return
    }

    // Get default notes for the category
    const categoryNotes = window.studyNotes ? window.studyNotes[category] : null
    console.log("Category notes:", categoryNotes)

    if (categoryNotes && Object.keys(categoryNotes).length > 0) {
      Object.entries(categoryNotes).forEach(([topic, noteData]) => {
        const section = document.createElement("div")
        section.className = "notes-section"

        const title = document.createElement("h3")
        title.textContent = noteData.title
        section.appendChild(title)

        if (noteData.sections) {
          noteData.sections.forEach((sectionData) => {
            if (sectionData.heading) {
              const heading = document.createElement("h4")
              heading.textContent = sectionData.heading
              section.appendChild(heading)
            }

            if (sectionData.content) {
              const content = document.createElement("p")
              content.style.whiteSpace = "pre-line"
              content.textContent = sectionData.content
              section.appendChild(content)
            }

            if (sectionData.list) {
              const list = document.createElement("ul")
              sectionData.list.forEach((item) => {
                const listItem = document.createElement("li")
                listItem.textContent = item
                list.appendChild(listItem)
              })
              section.appendChild(list)
            }

            if (sectionData.code) {
              const codeBlock = document.createElement("div")
              codeBlock.className = "code-block"
              codeBlock.textContent = sectionData.code
              section.appendChild(codeBlock)
            }
          })
        }

        notesContent.appendChild(section)
      })
    } else {
      notesContent.innerHTML = `
        <div class="notes-section">
          <h3>📚 Notes Coming Soon!</h3>
          <p>Study notes for ${category} will be added soon. You can add your own notes by clicking the Edit button!</p>
          <p><strong>Click "✏️ Edit" to add your custom notes for this topic.</strong></p>
        </div>
      `
    }

    modal.style.display = "block"
    console.log("Notes modal opened successfully")
  } catch (error) {
    console.error("Error opening notes modal:", error)
    alert("There was an error opening the notes. Please try again.")
  }
}

// Toggle edit mode
function toggleEditMode() {
  const notesContent = document.getElementById("notesContent")
  const editContent = document.getElementById("editContent")
  const editBtn = document.getElementById("editBtn")
  const notesEditor = document.getElementById("notesEditor")

  if (!isEditMode) {
    // Switch to edit mode
    isEditMode = true
    notesContent.style.display = "none"
    editContent.style.display = "block"
    editBtn.textContent = "👁️ View"

    // Load existing notes into editor
    const existingNotes = getNotesAsText(currentCategory)
    notesEditor.value = existingNotes
    notesEditor.focus()
  } else {
    // Switch to view mode
    isEditMode = false
    notesContent.style.display = "block"
    editContent.style.display = "none"
    editBtn.textContent = "✏️ Edit"
  }
}

// Get notes as plain text for editing
function getNotesAsText(category) {
  const categoryNotes = window.studyNotes ? window.studyNotes[category] : null
  if (!categoryNotes) {
    return `# ${category} - Study Notes

Add your notes here...

## Key Points:
- 
- 
- 

## Interview Questions:
1. 
2. 
3. 

## Code Examples:
\`\`\`java
// Your code here
\`\`\`

## Tips:
- 
- 
- `
  }

  let text = ""
  Object.entries(categoryNotes).forEach(([topic, noteData]) => {
    text += `# ${noteData.title}\n\n`

    if (noteData.sections) {
      noteData.sections.forEach((section) => {
        if (section.heading) {
          text += `## ${section.heading}\n`
        }
        if (section.content) {
          text += `${section.content}\n\n`
        }
        if (section.list) {
          section.list.forEach((item) => {
            text += `- ${item}\n`
          })
          text += "\n"
        }
        if (section.code) {
          text += `\`\`\`java\n${section.code}\n\`\`\`\n\n`
        }
      })
    }
    text += "\n---\n\n"
  })

  return text
}

// Save notes
function saveNotes() {
  const notesEditor = document.getElementById("notesEditor")
  const customNotesKey = `custom_notes_${currentCategory}`

  try {
    // Save to localStorage
    localStorage.setItem(customNotesKey, notesEditor.value)

    // Update the display
    displayCustomNotes(currentCategory, notesEditor.value)

    // Switch back to view mode
    toggleEditMode()

    // Show success message
    alert("Notes saved successfully! 💾")
  } catch (error) {
    console.error("Error saving notes:", error)
    alert("Error saving notes. Please try again.")
  }
}

// Display custom notes
function displayCustomNotes(category, notesText) {
  const notesContent = document.getElementById("notesContent")

  // Clear existing content
  notesContent.innerHTML = ""

  // Create a section for custom notes
  const section = document.createElement("div")
  section.className = "notes-section"

  // Parse and display the notes text
  const lines = notesText.split("\n")
  let currentElement = null
  let inCodeBlock = false
  let codeContent = ""

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        // End code block
        const codeBlock = document.createElement("div")
        codeBlock.className = "code-block"
        codeBlock.textContent = codeContent
        section.appendChild(codeBlock)
        codeContent = ""
        inCodeBlock = false
      } else {
        // Start code block
        inCodeBlock = true
      }
    } else if (inCodeBlock) {
      codeContent += line + "\n"
    } else if (line.startsWith("# ")) {
      const h3 = document.createElement("h3")
      h3.textContent = line.substring(2)
      section.appendChild(h3)
    } else if (line.startsWith("## ")) {
      const h4 = document.createElement("h4")
      h4.textContent = line.substring(3)
      section.appendChild(h4)
    } else if (line.startsWith("- ")) {
      if (!currentElement || currentElement.tagName !== "UL") {
        currentElement = document.createElement("ul")
        section.appendChild(currentElement)
      }
      const li = document.createElement("li")
      li.textContent = line.substring(2)
      currentElement.appendChild(li)
    } else if (line.trim() !== "" && !line.startsWith("---")) {
      currentElement = document.createElement("p")
      currentElement.textContent = line
      section.appendChild(currentElement)
    }
  })

  notesContent.appendChild(section)
}

// Cancel edit
function cancelEdit() {
  if (confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
    toggleEditMode()
  }
}

// Close notes modal
function closeNotesModal() {
  const modal = document.getElementById("notesModal")
  modal.style.display = "none"
  isEditMode = false
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("notesModal")
  if (event.target === modal) {
    modal.style.display = "none"
    isEditMode = false
  }
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
  if (progressBar) {
    const progressPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
    progressBar.style.width = `${progressPercent}%`
  }
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark")
  localStorage.setItem("darkMode", document.body.classList.contains("dark"))
}

// Reset all progress
function resetProgress() {
  if (confirm("Are you sure you want to reset your progress?")) {
    // Keep dark mode setting and custom notes
    const darkMode = localStorage.getItem("darkMode")
    const customNotes = {}

    // Save custom notes before clearing
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("custom_notes_")) {
        customNotes[key] = localStorage.getItem(key)
      }
    })

    localStorage.clear()

    // Restore dark mode and custom notes
    if (darkMode) {
      localStorage.setItem("darkMode", darkMode)
    }
    Object.entries(customNotes).forEach(([key, value]) => {
      localStorage.setItem(key, value)
    })

    location.reload()
  }
}

// Load custom notes when opening modal
function loadCustomNotes(category) {
  const customNotesKey = `custom_notes_${category}`
  const customNotes = localStorage.getItem(customNotesKey)

  if (customNotes) {
    displayCustomNotes(category, customNotes)
    return true
  }
  return false
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing app...")
  initializeApp()
})

// Add some debugging
console.log("Script loaded successfully")
