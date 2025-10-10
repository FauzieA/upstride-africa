// src/data/programsData.js
// Data store for all Programs (workshops, bootcamps, training).
// Add or edit entries here to update the site dynamically.

export const programsData = [
  {
    id: "code-create-bootcamp",
    title: "Code & Create Bootcamp",
    category: "Bootcamp",
    short: "Hands-on: build and launch a personal profile website using HTML/CSS and no-code tools.",
    expectation:
      "Hands-on experience building and launching your first personal profile website using HTML/CSS and simple no-code tools.",
    outcome: "Launch a live personal website you can use as a portfolio.",
    duration: "2 Days",
    modules: [
      "Foundations of the Web — What is a website?",
      "Intro to HTML & CSS — Start building a personal 'About Me' site",
      "Go No-Code — Use platforms to design a no-code site",
      "Deploy & Present — Launch and share your website",
    ],
    image: "/assets/code-create.jpg",
  },
  {
    id: "ai-explorers-bootcamp",
    title: "AI Explorers Bootcamp",
    category: "Bootcamp",
    short: "Intro to AI + build a simple chatbot using beginner-friendly tools.",
    expectation:
      "A deep dive into AI fundamentals and building a simple chatbot using accessible tools.",
    outcome: "A working chatbot project and foundational understanding of AI.",
    duration: "2 Days",
    modules: [
      "What is AI? Intro to Artificial Intelligence",
      "Learn about chatbots and use-cases",
      "Hands-on with Teachable Machine / Dialogflow-style tools",
      "Build, test and present a chatbot project",
    ],
    image: "/assets/ai-explorers.jpg",
  },
  {
    id: "tech-for-good-bootcamp",
    title: "Tech for Good Bootcamp",
    category: "Bootcamp",
    short: "Design thinking + prototype a tech solution for a real community problem.",
    expectation:
      "Use design thinking to identify problems and build a prototype that creates social value.",
    outcome: "A user-focused prototype and short pitch demonstrating impact potential.",
    duration: "2 Days",
    modules: [
      "Understand & Ideate — What is design thinking?",
      "Identify problems in your school/community",
      "Brainstorm and sketch solutions",
      "Prototype & Pitch — Build and present a simple prototype",
    ],
    image: "/assets/tech-for-good.jpg",
  },
  {
    id: "future-ready-tech-careers",
    title: "Future Ready: Exploring Tech Careers",
    category: "Program",
    short: "Explore tech careers, build a digital brand and begin a portfolio.",
    expectation:
      "Explore roles in tech, match strengths to careers, and build a digital presence/portfolio.",
    outcome:
      "A starter digital portfolio and clearer career direction in technology.",
    duration: "2 Days",
    modules: [
      "Exploring tech roles & skill needs",
      "Build a personal 'About Me' website",
      "Digital branding & online presence",
      "Present and get feedback on your portfolio",
    ],
    image: "/assets/future-ready.jpg",
  },
  {
    id: "entrepreneurship-workshop",
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    short: "Practical entrepreneurship: from spotting problems to prototyping business ideas.",
    goal:
      "Equip young people with entrepreneurial thinking, problem-solving, and the confidence to design purpose-driven solutions.",
    duration: "2 Days",
    modules: [
      "Day 1: Re-Thinking Possibility — 'I Can Be A Creator'",
      "Spotting Problems — From frustration to innovation",
      "Day 2: Finding Purpose & Passion — 'Ideas That Matter'",
      "From Idea to Action — Building blocks of business",
    ],
    image: "/assets/entrepreneurship.jpg",
  },
  {
    id: "teacher-training-workshop",
    title: "Teacher Training Workshop",
    category: "Workshop",
    short: "Practical pedagogy: facilitation, inquiry-based learning and inclusive classrooms.",
    goal:
      "Empower teachers with facilitation skills, problem-solving pedagogy, and inclusive classroom strategies.",
    duration: "2 Days",
    modules: [
      "Day 1: The 21st Century Educator — shifting to facilitation & mentorship",
      "Problem-Solving Pedagogy — teaching through inquiry & challenges",
      "Day 2: Creating Inclusive & Holistic Classrooms",
      "Ethics, Values & Growth Mindset in Teaching",
    ],
    image: "/assets/teacher-training.jpg",
  },
  {
    id: "social-business-workshop",
    title: "Social Business Workshop",
    category: "Workshop",
    short: "Design and implement sustainable, impact-driven social business solutions.",
    goal:
      "Equip changemakers to design sustainable social businesses that address local challenges.",
    duration: "2 Days",
    modules: [
      "Day 1: Introduction to Social Business & Africa’s Future",
      "Understanding community needs",
      "Designing social business solutions",
      "Day 2: Sustainability & Impact Measurement",
      "From Idea to Action — Building The Africa We Want",
    ],
    image: "/assets/social-business.jpg",
  },
];
