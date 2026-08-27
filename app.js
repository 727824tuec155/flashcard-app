/**
 * FLASHIFY — 3D Digital Flashcards & Quiz Studio
 * Complete Client-Side Application Logic
 */

// ==========================================
// 1. DEFAULT DATA & PRELOADED DECKS
// ==========================================
const DEFAULT_DECKS = [
  {
    id: "web-dev",
    title: "Web Development & JavaScript",
    description: "Core JS fundamentals, scope, async programming, and modern web APIs.",
    icon: "⚡",
    cards: [
      {
        id: "wd-1",
        question: "What is the difference between let, const, and var in JavaScript?",
        answer: "• var is function-scoped and hoisted with undefined.\n• let is block-scoped, can be reassigned, and is in temporal dead zone.\n• const is block-scoped, cannot be reassigned, and must be initialized.",
        category: "JavaScript",
        difficulty: "Medium",
        hint: "Think about scope (function vs block) and hoisting behavior.",
        tags: ["javascript", "es6", "variables"],
        codeFront: "",
        codeBack: "let count = 1;\nconst PI = 3.14159;\nvar legacy = true;"
      },
      {
        id: "wd-2",
        question: "What is a JavaScript Closure and why is it useful?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding lexical environment. It gives an inner function access to an outer function's scope even after the outer function has executed.",
        category: "JavaScript",
        difficulty: "Hard",
        hint: "Remembers the variables from where it was created.",
        tags: ["closures", "functions", "scope"],
        codeFront: "",
        codeBack: "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = makeCounter();\ncounter(); // 1"
      },
      {
        id: "wd-3",
        question: "How does the JavaScript Event Loop work?",
        answer: "JavaScript is single-threaded. The Call Stack executes synchronous code. Asynchronous tasks (timers, fetch) run in Web APIs, then queue callbacks into the Microtask Queue (Promises) and Macrotask/Task Queue (setTimeout). The Event Loop moves tasks to Call Stack when empty.",
        category: "Architecture",
        difficulty: "Hard",
        hint: "Microtasks (Promises) always run before Macrotasks (setTimeout).",
        tags: ["async", "event-loop", "runtime"],
        codeFront: "",
        codeBack: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\n// Output: 1, 3, 2"
      },
      {
        id: "wd-4",
        question: "What is the difference between CSS Grid and Flexbox?",
        answer: "• Flexbox is one-dimensional (content-first, arranges items in a single row OR column).\n• CSS Grid is two-dimensional (layout-first, arranges items simultaneously in rows AND columns).",
        category: "CSS",
        difficulty: "Easy",
        hint: "1D (axis) vs 2D (matrix grid).",
        tags: ["css", "layout", "responsive"],
        codeFront: "",
        codeBack: "/* Flexbox */\ndisplay: flex;\njustify-content: space-between;\n\n/* Grid */\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);"
      },
      {
        id: "wd-5",
        question: "What is the Virtual DOM and how does reconciliation work?",
        answer: "The Virtual DOM is a lightweight in-memory representation of real DOM elements. When state changes, a new VDOM tree is created, 'diffed' against the previous VDOM, and only the minimal required batch of changes is applied to the real browser DOM.",
        category: "React / Frontend",
        difficulty: "Medium",
        hint: "Diffing algorithm + batch updates = high performance.",
        tags: ["react", "vdom", "performance"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "wd-6",
        question: "What is the difference between Debouncing and Throttling?",
        answer: "• Debouncing delays execution until a certain amount of time has elapsed since the LAST event call (e.g. search input autocomplete).\n• Throttling limits the execution to at most once per specified time interval (e.g. window scroll or resize events).",
        category: "Performance",
        difficulty: "Medium",
        hint: "Debounce = wait for pause; Throttle = steady interval pulse.",
        tags: ["performance", "optimization", "dom"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "wd-7",
        question: "How is CSS Specificity calculated?",
        answer: "Specificity is calculated with 4 components (a, b, c, d):\n1. Inline styles (1, 0, 0, 0)\n2. IDs (0, 1, 0, 0)\n3. Classes, Attributes, & Pseudo-classes (0, 0, 1, 0)\n4. Elements & Pseudo-elements (0, 0, 0, 1)\n*!important overrides standard specificity.",
        category: "CSS",
        difficulty: "Medium",
        hint: "Inline > ID > Class > Element",
        tags: ["css", "specificity", "styles"],
        codeFront: "",
        codeBack: "#nav .link:hover /* (0, 1, 2, 0) */"
      },
      {
        id: "wd-8",
        question: "What is the difference between localStorage, sessionStorage, and Cookies?",
        answer: "• localStorage: ~5-10MB, persists indefinitely until cleared manually.\n• sessionStorage: ~5MB, cleared when the browser tab/session closes.\n• Cookies: ~4KB, sent automatically with HTTP requests, has expiration date.",
        category: "Web APIs",
        difficulty: "Easy",
        hint: "Check capacity and whether data is sent to server on HTTP request.",
        tags: ["storage", "security", "browser"],
        codeFront: "",
        codeBack: "localStorage.setItem('key', 'value');\nconst data = localStorage.getItem('key');"
      }
    ]
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science & Algorithms",
    description: "Data structures, Big-O complexity, algorithms, and core system concepts.",
    icon: "💻",
    cards: [
      {
        id: "cs-1",
        question: "What is the time and space complexity of Binary Search?",
        answer: "• Time Complexity: O(log n) because the search space is halved in every step.\n• Space Complexity: O(1) iterative, or O(log n) recursive call stack.",
        category: "Algorithms",
        difficulty: "Easy",
        hint: "Array must be sorted first!",
        tags: ["algorithms", "searching", "big-o"],
        codeFront: "",
        codeBack: "while (low <= high) {\n  let mid = Math.floor((low + high) / 2);\n  if (arr[mid] === target) return mid;\n  if (arr[mid] < target) low = mid + 1;\n  else high = mid - 1;\n}"
      },
      {
        id: "cs-2",
        question: "What are the ACID properties in database transactions?",
        answer: "• Atomicity: All operations succeed or all roll back.\n• Consistency: Database remains in a valid state before and after.\n• Isolation: Concurrent transactions execute without interference.\n• Durability: Committed data is permanently saved even during crashes.",
        category: "Databases",
        difficulty: "Medium",
        hint: "A.C.I.D = All or nothing, Valid state, Independent, Permanent.",
        tags: ["database", "sql", "architecture"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "cs-3",
        question: "What is the difference between TCP and UDP protocols?",
        answer: "• TCP (Transmission Control Protocol): Connection-oriented, guarantees packet delivery, ordering, and error-checking (HTTP, SSH, Email).\n• UDP (User Datagram Protocol): Connectionless, faster, no delivery guarantee or retransmission (Live streaming, VoIP, Gaming).",
        category: "Networking",
        difficulty: "Medium",
        hint: "Reliable & Ordered vs Fast & Best-effort.",
        tags: ["networking", "protocols", "internet"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "cs-4",
        question: "What is the difference between a Stack and a Queue?",
        answer: "• Stack: LIFO (Last-In, First-Out). Elements are added (pushed) and removed (popped) from the top.\n• Queue: FIFO (First-In, First-Out). Elements are enqueued at the back and dequeued from the front.",
        category: "Data Structures",
        difficulty: "Easy",
        hint: "Stack of plates vs Line at a ticket counter.",
        tags: ["data-structures", "stack", "queue"],
        codeFront: "",
        codeBack: "// Stack: push() / pop()\n// Queue: push() / shift()"
      },
      {
        id: "cs-5",
        question: "How do Hash Tables handle collisions?",
        answer: "1. Separate Chaining: Each bucket holds a linked list or tree of colliding key-value pairs.\n2. Open Addressing: Finds next available slot using Linear Probing, Quadratic Probing, or Double Hashing.",
        category: "Data Structures",
        difficulty: "Hard",
        hint: "Linked list per bucket or probe next empty slot.",
        tags: ["hash-table", "data-structures"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "cs-6",
        question: "What is the difference between BFS and DFS graph traversals?",
        answer: "• BFS (Breadth-First Search): Explores neighbors level by level using a Queue (ideal for shortest paths in unweighted graphs).\n• DFS (Depth-First Search): Explores as deep as possible along each branch before backtracking using a Stack or recursion.",
        category: "Algorithms",
        difficulty: "Medium",
        hint: "Queue (level order) vs Stack (deep dive).",
        tags: ["graphs", "algorithms", "bfs-dfs"],
        codeFront: "",
        codeBack: ""
      }
    ]
  },
  {
    id: "css-magic",
    title: "Modern CSS & Frontend Tricks",
    description: "Cutting-edge CSS selectors, container queries, clamp(), and animation techniques.",
    icon: "🎨",
    cards: [
      {
        id: "cm-1",
        question: "What is the CSS :has() relational pseudo-class?",
        answer: "The :has() selector acts as a 'parent selector'. It allows styling an element based on its descendant or succeeding sibling elements without JavaScript.",
        category: "Modern CSS",
        difficulty: "Medium",
        hint: "Style the parent if it contains a specific child element.",
        tags: ["css", "selectors", "modern"],
        codeFront: "",
        codeBack: "/* Style card parent if it has an image inside */\n.card:has(img) {\n  padding: 0;\n}\n/* Style form when any input is invalid */\nform:has(:invalid) button[type=\"submit\"] {\n  opacity: 0.5;\n}"
      },
      {
        id: "cm-2",
        question: "What are CSS Container Queries and how do they differ from Media Queries?",
        answer: "Media Queries query the entire viewport width/height. Container Queries (`@container`) allow styling a component based on the size of its parent container element, making components truly modular and self-contained.",
        category: "Modern CSS",
        difficulty: "Hard",
        hint: "Component-level responsiveness vs global screen size.",
        tags: ["container-queries", "responsive", "css"],
        codeFront: "",
        codeBack: ".card-wrapper {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card { display: flex; }\n}"
      },
      {
        id: "cm-3",
        question: "How does the clamp() function work in CSS for fluid typography?",
        answer: "clamp(MIN, VAL, MAX) takes three parameters: a minimum value, a preferred value, and a maximum value. It allows values to scale smoothly with viewport size while remaining bounded.",
        category: "Modern CSS",
        difficulty: "Easy",
        hint: "No media queries needed for fluid font sizing!",
        tags: ["typography", "responsive", "clamp"],
        codeFront: "",
        codeBack: "font-size: clamp(1rem, 2.5vw + 0.5rem, 2.5rem);"
      },
      {
        id: "cm-4",
        question: "What is the difference between aspect-ratio property and padding-top hack?",
        answer: "The modern `aspect-ratio: 16 / 9;` CSS property natively enforces proportional dimensions on any element without requiring nested wrapper elements or 0-height padding percentage hacks.",
        category: "Layout",
        difficulty: "Easy",
        hint: "Native aspect ratio support in all modern browsers.",
        tags: ["css", "aspect-ratio", "layout"],
        codeFront: "",
        codeBack: "img.hero {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}"
      }
    ]
  },
  {
    id: "world-trivia",
    title: "World Trivia & Science",
    description: "Fascinating science facts, geography trivia, and general world knowledge.",
    icon: "🌍",
    cards: [
      {
        id: "wt-1",
        question: "What is the speed of light in a vacuum?",
        answer: "Approximately 299,792,458 meters per second (approx. 300,000 km/s or 186,282 miles per second).",
        category: "Physics",
        difficulty: "Easy",
        hint: "c = ~3 × 10^8 m/s",
        tags: ["physics", "science", "light"],
        codeFront: "",
        codeBack: "c ≈ 3.00 × 10⁸ m/s"
      },
      {
        id: "wt-2",
        question: "Which organelle is considered the powerhouse of the cell?",
        answer: "The Mitochondrion (Mitochondria). It generates most of the chemical energy needed to power the cell's biochemical reactions through ATP production.",
        category: "Biology",
        difficulty: "Easy",
        hint: "Produces Adenosine Triphosphate (ATP).",
        tags: ["biology", "cells", "science"],
        codeFront: "",
        codeBack: ""
      },
      {
        id: "wt-3",
        question: "What is the chemical formula for Photosynthesis?",
        answer: "6CO₂ (Carbon Dioxide) + 6H₂O (Water) + Light Energy ➔ C₆H₁₂O₆ (Glucose) + 6O₂ (Oxygen)",
        category: "Chemistry",
        difficulty: "Medium",
        hint: "Sunlight + Water + CO2 makes Glucose and Oxygen.",
        tags: ["chemistry", "plants", "biology"],
        codeFront: "",
        codeBack: "6CO₂ + 6H₂O + hv ➔ C₆H₁₂O₆ + 6O₂"
      },
      {
        id: "wt-4",
        question: "What is the deepest point in Earth's oceans?",
        answer: "The Challenger Deep in the Mariana Trench, reaching a depth of approximately 10,928 meters (35,853 feet) below sea level in the Western Pacific Ocean.",
        category: "Geography",
        difficulty: "Easy",
        hint: "Located in the Mariana Trench.",
        tags: ["geography", "oceans", "earth"],
        codeFront: "",
        codeBack: ""
      }
    ]
  }
];

// ==========================================
// 2. AUDIO SYNTHESIS ENGINE (Web Audio API)
// ==========================================
class SoundFXEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playFlip() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  playMastered() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Play high harmonic chime
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.1, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.25);
      });
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  playShuffle() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      for (let i = 0; i < 4; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(300 + i * 80, now + i * 0.03);
        gain.gain.setValueAtTime(0.05, now + i * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.03 + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.03);
        osc.stop(now + i * 0.03 + 0.04);
      }
    } catch (e) {}
  }

  playQuizAnswer(isCorrect) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      if (isCorrect) {
        [587.33, 880].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.2);
        });
      } else {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    } catch (e) {}
  }
}

// ==========================================
// 3. APPLICATION STATE STORE
// ==========================================
class FlashifyApp {
  constructor() {
    this.sfx = new SoundFXEngine();
    this.decks = [];
    this.activeDeckId = "web-dev";
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.activeFilter = "all"; // 'all' | 'unmastered' | 'mastered' | 'starred'
    this.activeMode = "study"; // 'study' | 'quiz' | 'manage'

    // User Progress Data
    this.progress = {
      masteredCardIds: [],
      starredCardIds: [],
      streakCount: 1,
      lastStudyDate: new Date().toISOString().split("T")[0]
    };

    // Quiz Session State
    this.quizState = {
      questions: [],
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      isAnswered: false
    };

    this.filteredCards = [];
    this.editingCardId = null;

    this.init();
  }

  init() {
    this.loadStateFromStorage();
    this.setupTheme();
    this.cacheDOM();
    this.bindEvents();
    this.updateDeckSelectOptions();
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.renderManagerDeckGrid();
  }

  // --- Storage Helpers ---
  loadStateFromStorage() {
    try {
      const savedDecks = localStorage.getItem("flashify_decks");
      if (savedDecks) {
        this.decks = JSON.parse(savedDecks);
      } else {
        this.decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
        this.saveDecksToStorage();
      }

      const savedProgress = localStorage.getItem("flashify_progress");
      if (savedProgress) {
        this.progress = { ...this.progress, ...JSON.parse(savedProgress) };
      }

      // Check streak
      const today = new Date().toISOString().split("T")[0];
      if (this.progress.lastStudyDate !== today) {
        const lastDate = new Date(this.progress.lastStudyDate);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          this.progress.streakCount += 1;
        } else if (diffDays > 1) {
          this.progress.streakCount = 1;
        }
        this.progress.lastStudyDate = today;
        this.saveProgressToStorage();
      }

      const savedDeckId = localStorage.getItem("flashify_active_deck_id");
      if (savedDeckId && this.decks.some(d => d.id === savedDeckId)) {
        this.activeDeckId = savedDeckId;
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
      this.decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
    }
  }

  saveDecksToStorage() {
    try {
      localStorage.setItem("flashify_decks", JSON.stringify(this.decks));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }

  saveProgressToStorage() {
    try {
      localStorage.setItem("flashify_progress", JSON.stringify(this.progress));
    } catch (e) {}
  }

  // --- DOM Elements Cache ---
  cacheDOM() {
    // Navigation & Tabs
    this.deckSelect = document.getElementById("deckSelect");
    this.studyTabBtn = document.getElementById("studyTabBtn");
    this.quizTabBtn = document.getElementById("quizTabBtn");
    this.manageTabBtn = document.getElementById("manageTabBtn");
    this.navTabs = [this.studyTabBtn, this.quizTabBtn, this.manageTabBtn];

    // Views
    this.studyView = document.getElementById("studyView");
    this.quizView = document.getElementById("quizView");
    this.manageView = document.getElementById("manageView");

    // Metrics Bar
    this.activeDeckTitle = document.getElementById("activeDeckTitle");
    this.cardCounterText = document.getElementById("cardCounterText");
    this.progressBarFill = document.getElementById("progressBarFill");
    this.masteredCountVal = document.getElementById("masteredCountVal");
    this.starredCountVal = document.getElementById("starredCountVal");
    this.streakCountVal = document.getElementById("streakCountVal");

    // Study Arena
    this.flashcard = document.getElementById("activeFlashcard");
    this.cardFrontCategory = document.getElementById("cardFrontCategory");
    this.cardFrontDifficulty = document.getElementById("cardFrontDifficulty");
    this.cardQuestionText = document.getElementById("cardQuestionText");
    this.cardFrontCodeBlock = document.getElementById("cardFrontCodeBlock");
    this.cardFrontTags = document.getElementById("cardFrontTags");
    this.hintWrapper = document.getElementById("hintWrapper");
    this.hintToggleBtn = document.getElementById("hintToggleBtn");
    this.hintContentText = document.getElementById("hintContentText");
    this.starCardBtn = document.getElementById("starCardBtn");
    this.ttsSpeakFrontBtn = document.getElementById("ttsSpeakFrontBtn");

    this.cardBackCategory = document.getElementById("cardBackCategory");
    this.cardBackStatusBadge = document.getElementById("cardBackStatusBadge");
    this.cardAnswerText = document.getElementById("cardAnswerText");
    this.cardBackCodeBlock = document.getElementById("cardBackCodeBlock");
    this.ttsSpeakBackBtn = document.getElementById("ttsSpeakBackBtn");
    this.editCardDirectBtn = document.getElementById("editCardDirectBtn");

    // Controls
    this.prevCardBtn = document.getElementById("prevCardBtn");
    this.flipCardBtn = document.getElementById("flipCardBtn");
    this.nextCardBtn = document.getElementById("nextCardBtn");
    this.rateNeedsPracticeBtn = document.getElementById("rateNeedsPracticeBtn");
    this.rateMasteredBtn = document.getElementById("rateMasteredBtn");
    this.shuffleDeckBtn = document.getElementById("shuffleDeckBtn");
    this.resetDeckStatsBtn = document.getElementById("resetDeckStatsBtn");

    // Filter pills
    this.filterAllBtn = document.getElementById("filterAllBtn");
    this.filterUnmasteredBtn = document.getElementById("filterUnmasteredBtn");
    this.filterMasteredBtn = document.getElementById("filterMasteredBtn");
    this.filterStarredBtn = document.getElementById("filterStarredBtn");
    this.studyEmptyState = document.getElementById("studyEmptyState");
    this.flashcardScene = document.getElementById("flashcardScene");
    this.emptyResetFilterBtn = document.getElementById("emptyResetFilterBtn");

    // Counts
    this.countAll = document.getElementById("countAll");
    this.countUnmastered = document.getElementById("countUnmastered");
    this.countMastered = document.getElementById("countMastered");
    this.countStarred = document.getElementById("countStarred");

    // Themes & SFX
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.themeIconDark = document.getElementById("themeIconDark");
    this.themeIconLight = document.getElementById("themeIconLight");
    this.themeIconNeon = document.getElementById("themeIconNeon");
    this.soundToggleBtn = document.getElementById("soundToggleBtn");
    this.soundIconOn = document.getElementById("soundIconOn");
    this.soundIconOff = document.getElementById("soundIconOff");
    this.shortcutsModalBtn = document.getElementById("shortcutsModalBtn");

    // Modals
    this.cardModalBackdrop = document.getElementById("cardModalBackdrop");
    this.openAddCardModalBtn = document.getElementById("openAddCardModalBtn");
    this.closeCardModalBtn = document.getElementById("closeCardModalBtn");
    this.cancelCardModalBtn = document.getElementById("cancelCardModalBtn");
    this.cardForm = document.getElementById("cardForm");
    this.cardFormEditId = document.getElementById("cardFormEditId");
    this.cardFormDeck = document.getElementById("cardFormDeck");
    this.cardFormCategory = document.getElementById("cardFormCategory");
    this.cardFormQuestion = document.getElementById("cardFormQuestion");
    this.cardFormAnswer = document.getElementById("cardFormAnswer");
    this.cardFormHint = document.getElementById("cardFormHint");
    this.cardFormTags = document.getElementById("cardFormTags");
    this.cardModalTitle = document.getElementById("cardModalTitle");

    this.deckModalBackdrop = document.getElementById("deckModalBackdrop");
    this.openNewDeckModalBtn = document.getElementById("openNewDeckModalBtn");
    this.closeDeckModalBtn = document.getElementById("closeDeckModalBtn");
    this.cancelDeckModalBtn = document.getElementById("cancelDeckModalBtn");
    this.deckForm = document.getElementById("deckForm");

    this.shortcutsModalBackdrop = document.getElementById("shortcutsModalBackdrop");
    this.closeShortcutsModalBtn = document.getElementById("closeShortcutsModalBtn");
    this.gotItShortcutsBtn = document.getElementById("gotItShortcutsBtn");

    // Manager View elements
    this.deckOverviewGrid = document.getElementById("deckOverviewGrid");
    this.managerActiveDeckName = document.getElementById("managerActiveDeckName");
    this.managerCardCountBadge = document.getElementById("managerCardCountBadge");
    this.cardSearchInput = document.getElementById("cardSearchInput");
    this.managerCardsGrid = document.getElementById("managerCardsGrid");
    this.exportDeckBtn = document.getElementById("exportDeckBtn");
    this.importDeckBtn = document.getElementById("importDeckBtn");
    this.importFileInput = document.getElementById("importFileInput");

    // Quiz View elements
    this.quizSetupCard = document.getElementById("quizSetupCard");
    this.quizConfigDeckTitle = document.getElementById("quizConfigDeckTitle");
    this.quizConfigTotalCount = document.getElementById("quizConfigTotalCount");
    this.startQuizBtn = document.getElementById("startQuizBtn");

    this.quizPlayArena = document.getElementById("quizPlayArena");
    this.quizQuestionCounter = document.getElementById("quizQuestionCounter");
    this.quizCurrentScore = document.getElementById("quizCurrentScore");
    this.quizProgressBarFill = document.getElementById("quizProgressBarFill");
    this.quizCategoryTag = document.getElementById("quizCategoryTag");
    this.quizQuestionHeading = document.getElementById("quizQuestionHeading");
    this.quizOptionsGrid = document.getElementById("quizOptionsGrid");
    this.quizFeedbackBanner = document.getElementById("quizFeedbackBanner");
    this.feedbackTitle = document.getElementById("feedbackTitle");
    this.feedbackExplanation = document.getElementById("feedbackExplanation");
    this.quizNextQuestionBtn = document.getElementById("quizNextQuestionBtn");

    this.quizResultsCard = document.getElementById("quizResultsCard");
    this.resultsScorePercent = document.getElementById("resultsScorePercent");
    this.resultsCorrectCount = document.getElementById("resultsCorrectCount");
    this.resultsIncorrectCount = document.getElementById("resultsIncorrectCount");
    this.resultsSubtext = document.getElementById("resultsSubtext");
    this.retakeQuizBtn = document.getElementById("retakeQuizBtn");
    this.backToStudyFromQuizBtn = document.getElementById("backToStudyFromQuizBtn");

    this.toastContainer = document.getElementById("toastContainer");
  }

  // --- Event Bindings ---
  bindEvents() {
    // Deck selection change
    this.deckSelect.addEventListener("change", (e) => {
      this.switchDeck(e.target.value);
    });

    // Navigation Tabs
    this.studyTabBtn.addEventListener("click", () => this.switchMode("study"));
    this.quizTabBtn.addEventListener("click", () => this.switchMode("quiz"));
    this.manageTabBtn.addEventListener("click", () => this.switchMode("manage"));

    // 3D Card Interaction
    this.flashcard.addEventListener("click", (e) => {
      // Don't flip if clicking interactive sub-buttons
      if (e.target.closest("button") || e.target.closest(".hint-container") || e.target.closest(".code-preview-block")) {
        return;
      }
      this.toggleFlip();
    });

    this.flipCardBtn.addEventListener("click", () => this.toggleFlip());
    this.prevCardBtn.addEventListener("click", () => this.prevCard());
    this.nextCardBtn.addEventListener("click", () => this.nextCard());

    // Hint toggle
    this.hintToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.hintContentText.classList.toggle("hidden");
    });

    // Rating buttons
    this.rateNeedsPracticeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.markCardMastered(false);
    });

    this.rateMasteredBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.markCardMastered(true);
    });

    // Star / Bookmark Button
    this.starCardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleStarCard();
    });

    // Text to Speech
    this.ttsSpeakFrontBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.speakActiveCard(true);
    });

    this.ttsSpeakBackBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.speakActiveCard(false);
    });

    // Direct Edit from Back of card
    this.editCardDirectBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentCard = this.getCurrentCard();
      if (currentCard) {
        this.openEditCardModal(currentCard);
      }
    });

    // Study Actions (Shuffle & Reset)
    this.shuffleDeckBtn.addEventListener("click", () => this.shuffleCards());
    this.resetDeckStatsBtn.addEventListener("click", () => this.resetDeckProgress());

    // Filter Pills
    [this.filterAllBtn, this.filterUnmasteredBtn, this.filterMasteredBtn, this.filterStarredBtn].forEach(btn => {
      btn.addEventListener("click", (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.setFilter(filter);
      });
    });

    this.emptyResetFilterBtn.addEventListener("click", () => this.setFilter("all"));

    // Theme & SFX
    this.themeToggleBtn.addEventListener("click", () => this.cycleTheme());
    this.soundToggleBtn.addEventListener("click", () => this.toggleSound());
    this.shortcutsModalBtn.addEventListener("click", () => this.openModal(this.shortcutsModalBackdrop));
    this.closeShortcutsModalBtn.addEventListener("click", () => this.closeModal(this.shortcutsModalBackdrop));
    this.gotItShortcutsBtn.addEventListener("click", () => this.closeModal(this.shortcutsModalBackdrop));

    // Card Modal
    this.openAddCardModalBtn.addEventListener("click", () => this.openAddCardModal());
    this.closeCardModalBtn.addEventListener("click", () => this.closeModal(this.cardModalBackdrop));
    this.cancelCardModalBtn.addEventListener("click", () => this.closeModal(this.cardModalBackdrop));
    this.cardForm.addEventListener("submit", (e) => this.handleCardFormSubmit(e));

    // Deck Modal
    this.openNewDeckModalBtn.addEventListener("click", () => this.openModal(this.deckModalBackdrop));
    this.closeDeckModalBtn.addEventListener("click", () => this.closeModal(this.deckModalBackdrop));
    this.cancelDeckModalBtn.addEventListener("click", () => this.closeModal(this.deckModalBackdrop));
    this.deckForm.addEventListener("submit", (e) => this.handleDeckFormSubmit(e));

    // Manager View Search & Export/Import
    this.cardSearchInput.addEventListener("input", (e) => this.filterManagerCards(e.target.value));
    this.exportDeckBtn.addEventListener("click", () => this.exportCurrentDeck());
    this.importDeckBtn.addEventListener("click", () => this.importFileInput.click());
    this.importFileInput.addEventListener("change", (e) => this.handleImportDeckFile(e));

    // Quiz Mode Event Listeners
    this.startQuizBtn.addEventListener("click", () => this.startQuizSession());
    this.quizNextQuestionBtn.addEventListener("click", () => this.advanceQuizQuestion());
    this.retakeQuizBtn.addEventListener("click", () => this.startQuizSession());
    this.backToStudyFromQuizBtn.addEventListener("click", () => this.switchMode("study"));

    // Global Keyboard Shortcuts
    window.addEventListener("keydown", (e) => this.handleGlobalKeydown(e));
  }

  // ==========================================
  // 4. DECK & FILTER MANAGEMENT
  // ==========================================
  getActiveDeck() {
    return this.decks.find(d => d.id === this.activeDeckId) || this.decks[0];
  }

  switchDeck(deckId) {
    if (!this.decks.some(d => d.id === deckId)) return;
    this.activeDeckId = deckId;
    localStorage.setItem("flashify_active_deck_id", deckId);
    this.deckSelect.value = deckId;
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.flashcard.classList.remove("flipped");
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.renderManagerCards();
    this.renderManagerDeckGrid();
    this.updateQuizConfig();
    this.sfx.playClick();
  }

  updateDeckSelectOptions() {
    this.deckSelect.innerHTML = "";
    this.cardFormDeck.innerHTML = "";

    this.decks.forEach(deck => {
      const option = document.createElement("option");
      option.value = deck.id;
      option.textContent = `${deck.icon || "📚"} ${deck.title} (${deck.cards.length})`;
      if (deck.id === this.activeDeckId) option.selected = true;
      this.deckSelect.appendChild(option);

      const formOption = document.createElement("option");
      formOption.value = deck.id;
      formOption.textContent = `${deck.icon || "📚"} ${deck.title}`;
      if (deck.id === this.activeDeckId) formOption.selected = true;
      this.cardFormDeck.appendChild(formOption);
    });
  }

  syncFilterCards() {
    const deck = this.getActiveDeck();
    const allCards = deck.cards || [];

    const masteredSet = new Set(this.progress.masteredCardIds);
    const starredSet = new Set(this.progress.starredCardIds);

    const masteredCards = allCards.filter(c => masteredSet.has(c.id));
    const unmasteredCards = allCards.filter(c => !masteredSet.has(c.id));
    const starredCards = allCards.filter(c => starredSet.has(c.id));

    // Update count labels
    this.countAll.textContent = allCards.length;
    this.countUnmastered.textContent = unmasteredCards.length;
    this.countMastered.textContent = masteredCards.length;
    this.countStarred.textContent = starredCards.length;

    switch (this.activeFilter) {
      case "unmastered":
        this.filteredCards = unmasteredCards;
        break;
      case "mastered":
        this.filteredCards = masteredCards;
        break;
      case "starred":
        this.filteredCards = starredCards;
        break;
      case "all":
      default:
        this.filteredCards = allCards;
        break;
    }

    if (this.currentCardIndex >= this.filteredCards.length) {
      this.currentCardIndex = Math.max(0, this.filteredCards.length - 1);
    }
  }

  setFilter(filterName) {
    this.activeFilter = filterName;
    [this.filterAllBtn, this.filterUnmasteredBtn, this.filterMasteredBtn, this.filterStarredBtn].forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === filterName);
    });
    this.isFlipped = false;
    this.flashcard.classList.remove("flipped");
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.sfx.playClick();
  }

  getCurrentCard() {
    if (this.filteredCards.length === 0) return null;
    return this.filteredCards[this.currentCardIndex] || null;
  }

  // ==========================================
  // 5. FLASHCARD RENDERING & CONTROLS
  // ==========================================
  renderActiveCard() {
    const deck = this.getActiveDeck();
    const card = this.getCurrentCard();

    this.activeDeckTitle.textContent = `${deck.icon || "⚡"} ${deck.title}`;

    if (!card) {
      this.flashcardScene.classList.add("hidden");
      this.studyEmptyState.classList.remove("hidden");
      this.cardCounterText.textContent = "0 of 0";
      this.progressBarFill.style.width = "0%";
      return;
    }

    this.flashcardScene.classList.remove("hidden");
    this.studyEmptyState.classList.add("hidden");

    // Reset Card Flip State smoothly
    this.isFlipped = false;
    this.flashcard.classList.remove("flipped");

    // Card Front Details
    this.cardFrontCategory.textContent = card.category || "General";
    this.cardFrontDifficulty.textContent = card.difficulty || "Standard";
    this.cardQuestionText.textContent = card.question;

    // Code preview front
    if (card.codeFront && card.codeFront.trim()) {
      this.cardFrontCodeBlock.textContent = card.codeFront;
      this.cardFrontCodeBlock.classList.remove("hidden");
    } else {
      this.cardFrontCodeBlock.classList.add("hidden");
    }

    // Hint
    if (card.hint && card.hint.trim()) {
      this.hintWrapper.classList.remove("hidden");
      this.hintContentText.textContent = card.hint;
      this.hintContentText.classList.add("hidden"); // start collapsed
    } else {
      this.hintWrapper.classList.add("hidden");
    }

    // Tags
    this.cardFrontTags.innerHTML = "";
    if (card.tags && card.tags.length > 0) {
      card.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag-badge";
        span.textContent = `#${tag}`;
        this.cardFrontTags.appendChild(span);
      });
    }

    // Star status
    const isStarred = this.progress.starredCardIds.includes(card.id);
    this.starCardBtn.classList.toggle("active", isStarred);

    // Card Back Details
    this.cardBackCategory.textContent = card.category ? `${card.category} • Solution` : "Answer";
    const isMastered = this.progress.masteredCardIds.includes(card.id);
    this.cardBackStatusBadge.textContent = isMastered ? "✨ Mastered" : "🔄 Learning";
    this.cardBackStatusBadge.className = `card-status-badge ${isMastered ? "success" : ""}`;

    // Format newlines into HTML paragraphs for better readability
    const formattedAnswer = card.answer
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => {
        // Simple bold markdown parser (**text**)
        const parsed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return `<p style="margin-bottom: 0.4rem;">${parsed}</p>`;
      })
      .join("");

    this.cardAnswerText.innerHTML = formattedAnswer || card.answer;

    // Code preview back
    if (card.codeBack && card.codeBack.trim()) {
      this.cardBackCodeBlock.textContent = card.codeBack;
      this.cardBackCodeBlock.classList.remove("hidden");
    } else {
      this.cardBackCodeBlock.classList.add("hidden");
    }

    // Update Progress bar & Counter
    const total = this.filteredCards.length;
    const current = this.currentCardIndex + 1;
    this.cardCounterText.textContent = `${current} of ${total}`;
    const percent = total > 0 ? (current / total) * 100 : 0;
    this.progressBarFill.style.width = `${percent}%`;

    // Disable prev/next on bounds
    this.prevCardBtn.disabled = this.currentCardIndex === 0;
    this.nextCardBtn.disabled = this.currentCardIndex >= total - 1;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    this.flashcard.classList.toggle("flipped", this.isFlipped);
    this.sfx.playFlip();
  }

  nextCard() {
    if (this.currentCardIndex < this.filteredCards.length - 1) {
      this.currentCardIndex++;
      this.renderActiveCard();
      this.sfx.playClick();
    }
  }

  prevCard() {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
      this.renderActiveCard();
      this.sfx.playClick();
    }
  }

  shuffleCards() {
    const deck = this.getActiveDeck();
    if (!deck.cards || deck.cards.length <= 1) return;

    // Fisher-Yates Shuffle on deck cards
    for (let i = deck.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }

    this.currentCardIndex = 0;
    this.saveDecksToStorage();
    this.syncFilterCards();
    this.renderActiveCard();
    this.sfx.playShuffle();
    this.showToast("🔀 Deck shuffled successfully!", "info");
  }

  resetDeckProgress() {
    const deck = this.getActiveDeck();
    const deckCardIds = new Set(deck.cards.map(c => c.id));

    this.progress.masteredCardIds = this.progress.masteredCardIds.filter(id => !deckCardIds.has(id));
    this.saveProgressToStorage();
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.renderManagerDeckGrid();
    this.showToast("🔄 Reset progress for this deck.", "info");
  }

  markCardMastered(isMastered) {
    const card = this.getCurrentCard();
    if (!card) return;

    const idIndex = this.progress.masteredCardIds.indexOf(card.id);

    if (isMastered) {
      if (idIndex === -1) {
        this.progress.masteredCardIds.push(card.id);
      }
      this.sfx.playMastered();
      this.showToast("✨ Card marked as Mastered!", "success");
    } else {
      if (idIndex !== -1) {
        this.progress.masteredCardIds.splice(idIndex, 1);
      }
      this.sfx.playClick();
      this.showToast("🔄 Card queued for further practice.", "warning");
    }

    this.saveProgressToStorage();
    this.syncFilterCards();
    this.updateMetrics();
    this.renderManagerDeckGrid();

    // Auto advance if there are more cards in view
    setTimeout(() => {
      if (this.currentCardIndex < this.filteredCards.length - 1) {
        this.nextCard();
      } else {
        this.renderActiveCard();
      }
    }, 280);
  }

  toggleStarCard() {
    const card = this.getCurrentCard();
    if (!card) return;

    const idx = this.progress.starredCardIds.indexOf(card.id);
    if (idx === -1) {
      this.progress.starredCardIds.push(card.id);
      this.starCardBtn.classList.add("active");
      this.showToast("⭐ Card bookmarked!", "info");
    } else {
      this.progress.starredCardIds.splice(idx, 1);
      this.starCardBtn.classList.remove("active");
      this.showToast("Removed bookmark.", "info");
    }

    this.saveProgressToStorage();
    this.syncFilterCards();
    this.updateMetrics();
  }

  speakActiveCard(isFront) {
    const card = this.getCurrentCard();
    if (!card) return;

    if (!('speechSynthesis' in window)) {
      this.showToast("Speech synthesis not supported on this browser.", "warning");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech
    const textToSpeak = isFront ? card.question : card.answer;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    this.sfx.playClick();
  }

  updateMetrics() {
    const deck = this.getActiveDeck();
    const deckCardIds = new Set(deck.cards.map(c => c.id));

    const totalMasteredInDeck = this.progress.masteredCardIds.filter(id => deckCardIds.has(id)).length;
    const totalStarredInDeck = this.progress.starredCardIds.filter(id => deckCardIds.has(id)).length;

    this.masteredCountVal.textContent = `${totalMasteredInDeck} / ${deck.cards.length}`;
    this.starredCountVal.textContent = totalStarredInDeck;
    this.streakCountVal.textContent = `${this.progress.streakCount} ${this.progress.streakCount === 1 ? 'Day' : 'Days'}`;
  }

  // ==========================================
  // 6. QUIZ MODE ENGINE
  // ==========================================
  updateQuizConfig() {
    const deck = this.getActiveDeck();
    this.quizConfigDeckTitle.textContent = `${deck.icon || "⚡"} ${deck.title}`;
    this.quizConfigTotalCount.textContent = deck.cards.length;
  }

  startQuizSession() {
    const deck = this.getActiveDeck();
    if (!deck.cards || deck.cards.length === 0) {
      this.showToast("Cannot start quiz with empty deck.", "warning");
      return;
    }

    // Prepare quiz questions (shuffle copy of cards)
    const questions = [...deck.cards].sort(() => 0.5 - Math.random());
    this.quizState = {
      questions,
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      isAnswered: false
    };

    this.quizSetupCard.classList.add("hidden");
    this.quizResultsCard.classList.add("hidden");
    this.quizPlayArena.classList.remove("hidden");

    this.renderQuizQuestion();
    this.sfx.playClick();
  }

  renderQuizQuestion() {
    const q = this.quizState.questions[this.quizState.currentIndex];
    const total = this.quizState.questions.length;
    const currentNum = this.quizState.currentIndex + 1;

    this.quizState.isAnswered = false;
    this.quizQuestionCounter.textContent = `Question ${currentNum} of ${total}`;
    this.quizCurrentScore.textContent = this.quizState.score;
    this.quizProgressBarFill.style.width = `${(currentNum / total) * 100}%`;

    this.quizCategoryTag.textContent = q.category || "General";
    this.quizQuestionHeading.textContent = q.question;
    this.quizFeedbackBanner.classList.add("hidden");

    // Generate 4 dynamic choices (1 correct + 3 distractor answers from deck or pool)
    const options = this.generateQuizOptions(q);

    this.quizOptionsGrid.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    options.forEach((opt, idx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option-card";
      optBtn.innerHTML = `
        <span class="option-prefix">${letters[idx]}</span>
        <span class="option-text">${opt.text}</span>
      `;

      optBtn.addEventListener("click", () => this.handleQuizAnswer(opt.isCorrect, optBtn, q));
      this.quizOptionsGrid.appendChild(optBtn);
    });
  }

  generateQuizOptions(correctCard) {
    const deck = this.getActiveDeck();
    const options = [{ text: correctCard.answer.split("\n")[0], isCorrect: true }];

    // Pick 3 distractors from same deck or other decks
    const candidateCards = this.decks
      .flatMap(d => d.cards)
      .filter(c => c.id !== correctCard.id);

    // Shuffle candidate cards
    candidateCards.sort(() => 0.5 - Math.random());

    for (let c of candidateCards) {
      if (options.length >= 4) break;
      const snippet = c.answer.split("\n")[0];
      if (!options.some(o => o.text === snippet)) {
        options.push({ text: snippet, isCorrect: false });
      }
    }

    // In case there are not enough cards in total, add placeholder options
    while (options.length < 4) {
      options.push({ text: `None of the above for ${correctCard.category}`, isCorrect: false });
    }

    // Shuffle options so correct answer is not always first
    return options.sort(() => 0.5 - Math.random());
  }

  handleQuizAnswer(isCorrect, clickedBtn, card) {
    if (this.quizState.isAnswered) return;
    this.quizState.isAnswered = true;

    const allButtons = this.quizOptionsGrid.querySelectorAll(".quiz-option-card");
    allButtons.forEach(btn => btn.classList.add("disabled"));

    if (isCorrect) {
      clickedBtn.classList.add("correct");
      this.quizState.score += 10;
      this.feedbackTitle.innerHTML = "✅ <b>Correct!</b> Outstanding recall.";
      this.feedbackTitle.style.color = "var(--success)";
      this.sfx.playQuizAnswer(true);

      // Also automatically mark in progress
      if (!this.progress.masteredCardIds.includes(card.id)) {
        this.progress.masteredCardIds.push(card.id);
        this.saveProgressToStorage();
      }
    } else {
      clickedBtn.classList.add("incorrect");
      // Highlight the correct one
      allButtons.forEach(btn => {
        if (btn.querySelector(".option-text").textContent.includes(card.answer.split("\n")[0])) {
          btn.classList.add("correct");
        }
      });
      this.feedbackTitle.innerHTML = "❌ <b>Incorrect.</b> Let's review:";
      this.feedbackTitle.style.color = "var(--danger)";
      this.sfx.playQuizAnswer(false);
    }

    this.feedbackExplanation.textContent = card.answer;
    this.quizFeedbackBanner.classList.remove("hidden");
    this.quizCurrentScore.textContent = this.quizState.score;
  }

  advanceQuizQuestion() {
    this.quizState.currentIndex++;
    if (this.quizState.currentIndex < this.quizState.questions.length) {
      this.renderQuizQuestion();
      this.sfx.playClick();
    } else {
      this.showQuizResults();
    }
  }

  showQuizResults() {
    this.quizPlayArena.classList.add("hidden");
    this.quizResultsCard.classList.remove("hidden");

    const total = this.quizState.questions.length;
    const maxScore = total * 10;
    const percent = Math.round((this.quizState.score / maxScore) * 100);
    const correctCount = this.quizState.score / 10;
    const incorrectCount = total - correctCount;

    this.resultsScorePercent.textContent = `${percent}%`;
    this.resultsCorrectCount.textContent = correctCount;
    this.resultsIncorrectCount.textContent = incorrectCount;

    if (percent >= 80) {
      this.resultsSubtext.textContent = "🌟 Phenomenal job! You demonstrated mastery of this subject.";
      this.sfx.playMastered();
    } else if (percent >= 50) {
      this.resultsSubtext.textContent = "👍 Good effort! A little more review will make you unstoppable.";
      this.sfx.playClick();
    } else {
      this.resultsSubtext.textContent = "📚 Keep practicing! Re-study the cards and try again.";
      this.sfx.playClick();
    }

    this.updateMetrics();
  }

  // ==========================================
  // 7. DECK & CARD MANAGER
  // ==========================================
  renderManagerDeckGrid() {
    this.deckOverviewGrid.innerHTML = "";

    this.decks.forEach(deck => {
      const cardItem = document.createElement("div");
      cardItem.className = `deck-card-item ${deck.id === this.activeDeckId ? "active" : ""}`;

      const masteredCount = deck.cards.filter(c => this.progress.masteredCardIds.includes(c.id)).length;
      const percent = deck.cards.length > 0 ? Math.round((masteredCount / deck.cards.length) * 100) : 0;

      cardItem.innerHTML = `
        <div>
          <div class="deck-top">
            <div class="deck-icon-badge">${deck.icon || "📚"}</div>
            <span class="card-status-badge ${percent === 100 ? 'success' : ''}">${percent}% Mastered</span>
          </div>
          <h4>${deck.title}</h4>
          <p>${deck.description || "No description provided."}</p>
        </div>
        <div class="deck-bottom">
          <span class="deck-count">${deck.cards.length} cards</span>
          <span style="font-weight: 700; color: var(--accent-primary);">Study Deck ➔</span>
        </div>
      `;

      cardItem.addEventListener("click", () => {
        this.switchDeck(deck.id);
        this.showToast(`Switched to "${deck.title}"`, "info");
      });

      this.deckOverviewGrid.appendChild(cardItem);
    });

    this.renderManagerCards();
  }

  renderManagerCards(filterQuery = "") {
    const deck = this.getActiveDeck();
    this.managerActiveDeckName.textContent = deck.title;
    this.managerCardCountBadge.textContent = `${deck.cards.length} cards`;
    this.managerCardsGrid.innerHTML = "";

    let cards = deck.cards || [];
    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      cards = cards.filter(c => 
        c.question.toLowerCase().includes(q) || 
        c.answer.toLowerCase().includes(q) ||
        (c.category && c.category.toLowerCase().includes(q))
      );
    }

    if (cards.length === 0) {
      this.managerCardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          No cards found matching your query.
        </div>
      `;
      return;
    }

    cards.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.className = "manager-card-item";

      const isMastered = this.progress.masteredCardIds.includes(card.id);
      const isStarred = this.progress.starredCardIds.includes(card.id);

      cardEl.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span class="category-pill">${card.category || "General"}</span>
            <div style="display: flex; gap: 0.3rem;">
              ${isStarred ? '<span title="Starred">⭐</span>' : ''}
              <span class="card-status-badge ${isMastered ? 'success' : ''}">${isMastered ? 'Mastered' : 'Learning'}</span>
            </div>
          </div>
          <h4 class="card-item-question">${card.question}</h4>
          <p class="card-item-answer">${card.answer}</p>
        </div>
        <div class="card-item-footer">
          <span style="font-size: 0.72rem; color: var(--text-muted);">ID: ${card.id}</span>
          <div class="card-item-actions">
            <button class="btn btn-outline btn-sm edit-card-btn" title="Edit Card">✏️ Edit</button>
            <button class="btn btn-ghost btn-sm del-card-btn" style="color: var(--danger);" title="Delete Card">🗑️</button>
          </div>
        </div>
      `;

      cardEl.querySelector(".edit-card-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.openEditCardModal(card);
      });

      cardEl.querySelector(".del-card-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.deleteCard(card.id);
      });

      this.managerCardsGrid.appendChild(cardEl);
    });
  }

  filterManagerCards(query) {
    this.renderManagerCards(query);
  }

  openAddCardModal() {
    this.editingCardId = null;
    this.cardModalTitle.textContent = "Add New Flashcard";
    this.cardFormEditId.value = "";
    this.cardForm.reset();
    this.cardFormDeck.value = this.activeDeckId;
    this.openModal(this.cardModalBackdrop);
  }

  openEditCardModal(card) {
    this.editingCardId = card.id;
    this.cardModalTitle.textContent = "Edit Flashcard";
    this.cardFormEditId.value = card.id;
    this.cardFormDeck.value = this.activeDeckId;
    this.cardFormCategory.value = card.category || "";
    this.cardFormQuestion.value = card.question || "";
    this.cardFormAnswer.value = card.answer || "";
    this.cardFormHint.value = card.hint || "";
    this.cardFormTags.value = (card.tags || []).join(", ");
    this.openModal(this.cardModalBackdrop);
  }

  handleCardFormSubmit(e) {
    e.preventDefault();

    const deckId = this.cardFormDeck.value;
    const category = this.cardFormCategory.value.trim();
    const question = this.cardFormQuestion.value.trim();
    const answer = this.cardFormAnswer.value.trim();
    const hint = this.cardFormHint.value.trim();
    const tags = this.cardFormTags.value.split(",").map(t => t.trim()).filter(Boolean);

    const targetDeck = this.decks.find(d => d.id === deckId);
    if (!targetDeck) return;

    if (this.editingCardId) {
      // Edit existing
      const card = targetDeck.cards.find(c => c.id === this.editingCardId);
      if (card) {
        card.category = category;
        card.question = question;
        card.answer = answer;
        card.hint = hint;
        card.tags = tags;
        this.showToast("Flashcard updated!", "success");
      }
    } else {
      // Create new
      const newCard = {
        id: `c-${Date.now()}`,
        question,
        answer,
        category,
        difficulty: "Medium",
        hint,
        tags,
        codeFront: "",
        codeBack: ""
      };
      targetDeck.cards.push(newCard);
      this.showToast("✨ Flashcard added successfully!", "success");
    }

    this.saveDecksToStorage();
    this.closeModal(this.cardModalBackdrop);
    this.updateDeckSelectOptions();
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.renderManagerDeckGrid();
  }

  deleteCard(cardId) {
    if (!confirm("Are you sure you want to delete this flashcard?")) return;

    const deck = this.getActiveDeck();
    deck.cards = deck.cards.filter(c => c.id !== cardId);
    this.progress.masteredCardIds = this.progress.masteredCardIds.filter(id => id !== cardId);
    this.progress.starredCardIds = this.progress.starredCardIds.filter(id => id !== cardId);

    this.saveDecksToStorage();
    this.saveProgressToStorage();
    this.syncFilterCards();
    this.renderActiveCard();
    this.updateMetrics();
    this.renderManagerDeckGrid();
    this.showToast("Flashcard deleted.", "info");
  }

  handleDeckFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("deckFormName").value.trim();
    const description = document.getElementById("deckFormDesc").value.trim();
    const icon = document.getElementById("deckFormIcon").value.trim() || "📚";

    const newDeck = {
      id: `deck-${Date.now()}`,
      title,
      description,
      icon,
      cards: []
    };

    this.decks.push(newDeck);
    this.saveDecksToStorage();
    this.closeModal(this.deckModalBackdrop);
    this.deckForm.reset();
    this.updateDeckSelectOptions();
    this.switchDeck(newDeck.id);
    this.showToast(`🎉 Created deck "${title}"!`, "success");
  }

  exportCurrentDeck() {
    const deck = this.getActiveDeck();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(deck, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `flashify-${deck.id}-deck.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Deck exported to JSON file.", "success");
  }

  handleImportDeckFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (!imported.title || !Array.isArray(imported.cards)) {
          throw new Error("Invalid deck format");
        }

        imported.id = `imported-${Date.now()}`;
        this.decks.push(imported);
        this.saveDecksToStorage();
        this.updateDeckSelectOptions();
        this.switchDeck(imported.id);
        this.showToast(`📥 Successfully imported "${imported.title}"!`, "success");
      } catch (err) {
        this.showToast("Error importing JSON. Please check file format.", "danger");
      }
    };
    reader.readAsText(file);
    e.target.value = ""; // reset
  }

  // ==========================================
  // 8. THEME & APP MODES
  // ==========================================
  setupTheme() {
    const savedTheme = localStorage.getItem("flashify_theme") || "dark";
    this.applyTheme(savedTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("flashify_theme", theme);

    if (this.themeIconDark && this.themeIconLight && this.themeIconNeon) {
      this.themeIconDark.classList.toggle("hidden", theme !== "dark");
      this.themeIconLight.classList.toggle("hidden", theme !== "light");
      this.themeIconNeon.classList.toggle("hidden", theme !== "neon");
    }
  }

  cycleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const themes = ["dark", "light", "neon"];
    const nextIndex = (themes.indexOf(current) + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    this.applyTheme(nextTheme);
    this.sfx.playClick();
    this.showToast(`Theme switched to ${nextTheme.toUpperCase()}`, "info");
  }

  toggleSound() {
    this.sfx.enabled = !this.sfx.enabled;
    this.soundIconOn.classList.toggle("hidden", !this.sfx.enabled);
    this.soundIconOff.classList.toggle("hidden", this.sfx.enabled);
    if (this.sfx.enabled) this.sfx.playClick();
    this.showToast(this.sfx.enabled ? "🔊 Sound effects enabled" : "🔇 Sound effects muted", "info");
  }

  switchMode(mode) {
    this.activeMode = mode;

    this.navTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.mode === mode);
    });

    this.studyView.classList.toggle("active", mode === "study");
    this.quizView.classList.toggle("active", mode === "quiz");
    this.manageView.classList.toggle("active", mode === "manage");

    if (mode === "quiz") {
      this.updateQuizConfig();
      this.quizSetupCard.classList.remove("hidden");
      this.quizPlayArena.classList.add("hidden");
      this.quizResultsCard.classList.add("hidden");
    } else if (mode === "manage") {
      this.renderManagerDeckGrid();
    } else if (mode === "study") {
      this.renderActiveCard();
    }

    this.sfx.playClick();
  }

  // ==========================================
  // 9. MODAL & TOAST UTILITIES
  // ==========================================
  openModal(backdropEl) {
    backdropEl.classList.remove("hidden");
    this.sfx.playClick();
  }

  closeModal(backdropEl) {
    backdropEl.classList.add("hidden");
  }

  showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  // Global Keyboard Shortcuts
  handleGlobalKeydown(e) {
    // Ignore keystrokes when typing inside inputs or textareas
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      return;
    }

    // Modal open check
    if (!this.cardModalBackdrop.classList.contains("hidden") || 
        !this.deckModalBackdrop.classList.contains("hidden")) {
      if (e.key === "Escape") {
        this.closeModal(this.cardModalBackdrop);
        this.closeModal(this.deckModalBackdrop);
        this.closeModal(this.shortcutsModalBackdrop);
      }
      return;
    }

    if (this.activeMode === "study") {
      switch (e.key) {
        case " ":
        case "Enter":
          e.preventDefault();
          this.toggleFlip();
          break;
        case "ArrowRight":
        case "j":
        case "J":
          this.nextCard();
          break;
        case "ArrowLeft":
        case "k":
        case "K":
          this.prevCard();
          break;
        case "1":
          this.markCardMastered(false);
          break;
        case "2":
          this.markCardMastered(true);
          break;
        case "s":
        case "S":
          this.shuffleCards();
          break;
        case "b":
        case "B":
          this.toggleStarCard();
          break;
        case "t":
        case "T":
          this.speakActiveCard(!this.isFlipped);
          break;
        case "?":
          this.openModal(this.shortcutsModalBackdrop);
          break;
      }
    }
  }
}

// Instantiate App on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.flashify = new FlashifyApp();
});
