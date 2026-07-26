export const profile = {
  name: 'Aryan Sagar Sunku',
  initials: 'AS',
  role: 'Software Engineer',
  location: 'Germany',
  email: 'aryan.sunku@example.com',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  resumeUrl: '/resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const aboutJourney = [
  {
    title: 'Application Engineer',
    body: 'I started by bridging customer needs, hardware, and network reliability in high-stakes environments.',
  },
  {
    title: 'IoT',
    body: 'Working close to devices taught me how systems behave under real constraints: latency, failure modes, and uptime.',
  },
  {
    title: 'Networking',
    body: 'Industrial deployments sharpened my understanding of secure, resilient communication at the infrastructure layer.',
  },
  {
    title: 'Full Stack Development',
    body: 'I moved into building products that sit on top of those systems: APIs, interfaces, and product experiences.',
  },
  {
    title: 'AI Engineering',
    body: 'Now I focus on shipping software that is not only reliable, but intelligent and product-minded.',
  },
]

export const experiences = [
  {
    role: 'Application Engineer',
    company: 'Alltronix International',
    period: '2022 — 2024',
    location: 'India',
    summary:
      'Delivered resilient industrial networking and IoT systems for critical infrastructure clients, translating complex technical requirements into dependable field deployments.',
    highlights: [
      'Supported mission-critical connectivity deployments for Kempegowda International Airport and railway infrastructure projects.',
      'Provided trusted technical support across commissioning, troubleshooting, and client-facing implementation work.',
      'Built a strong operating instinct for reliability, system integration, and real-world engineering tradeoffs.',
    ],
    tags: ['Industrial Networking', 'IoT', 'Systems Integration', 'Field Engineering'],
  },
]

export type Project = {
  title: string
  status: 'shipped' | 'planned'
  image?: string
  tech: string[]
  problem: string
  solution: string
  role: string
  architecture: string
  challenges: string
  results: string
  features: string[]
  github?: string
  demo?: string
  futureImprovements?: string[]
}

export const projects: Project[] = [
  {
    title: 'E-Cop — Pocket Police Companion',
    status: 'shipped',
    image: '/projects/ecop.png',
    tech: ['React Native', 'Node.js', 'Firebase', 'Maps API', 'Geolocation'],
    problem:
      'Emergency reporting was fragmented and slow, leaving citizens without a dependable way to share context when response time mattered most.',
    solution:
      'Built a mobile-first incident companion that compresses emergency reporting into a guided flow with live location sharing and nearest-unit routing.',
    role: 'Product-minded full-stack engineer driving UX, backend services, and location-aware workflows.',
    architecture: 'React Native client with a lightweight Node service layer, Firebase auth, and geospatial APIs for routing and reporting.',
    challenges:
      'Designing for urgency, privacy, and low-connectivity conditions without sacrificing clarity or trust.',
    results:
      'Improved time-to-report for critical events and made the experience feel calm under pressure.',
    features: [
      'One-tap SOS with live geolocation sharing',
      'Structured incident reporting with media attachments',
      'Nearest-unit routing and status updates',
    ],
    github: 'https://github.com/',
    demo: '#',
    futureImprovements: ['Offline queueing', 'Multi-language support', 'Dispatch analytics'],
  },
  {
    title: 'Accident Prevention Mechanism using IoT',
    status: 'shipped',
    image: '/projects/iot-accident.png',
    tech: ['Embedded C', 'Sensors', 'Microcontrollers', 'Telemetry'],
    problem:
      'Vehicles operating in high-risk, low-visibility environments needed proactive hazard awareness before impact occurred.',
    solution:
      'Designed a sensor-driven prevention system that detects proximity risks and triggers escalating alerts based on real-time conditions.',
    role: 'Hardware-software integrator focused on firmware, telemetry, and alert logic.',
    architecture: 'Embedded sensing layer with telemetry aggregation and alerting logic designed for low-latency decision support.',
    challenges:
      'Balancing sensitivity, accuracy, and reliability in a constrained real-world environment.',
    results:
      'Created a tangible prevention workflow that turns raw sensor data into actionable intervention.',
    features: [
      'Real-time proximity and obstacle detection',
      'Driver-state monitoring with escalating alerts',
      'Live telemetry dashboard for analysis',
    ],
    github: 'https://github.com/',
    demo: '#',
    futureImprovements: ['Edge analytics', 'Predictive risk models', 'Cloud dashboard sync'],
  },
  {
    title: 'AI SaaS Platform',
    status: 'planned',
    tech: ['Next.js', 'AI SDK', 'PostgreSQL', 'Vercel'],
    problem: 'Exploring production-grade, multi-tenant AI product architecture with strong operational thinking.',
    solution: 'A subscription-based platform with AI-assisted workflows, usage awareness, and team collaboration by design.',
    role: 'Full-stack architecture and AI integration.',
    architecture: 'Next.js application shell with API routes, managed data layer, and streaming AI experiences.',
    challenges: 'Designing for reliability, cost control, and user trust in an AI-native surface.',
    results: 'A clear foundation for a high-signal product that can grow from prototype to platform.',
    features: ['Streaming AI responses', 'Usage-based billing', 'Team workspaces'],
    futureImprovements: ['Auth, billing, and observability', 'Fine-tuned model routing', 'Role-based workspaces'],
  },
  {
    title: 'Task Manager',
    status: 'planned',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
    problem: 'A focused productivity tool with real-time collaboration that feels calm rather than crowded.',
    solution: 'Keyboard-first task management with sync, offline support, and layered collaboration experiences.',
    role: 'Full-stack development and interaction design.',
    architecture: 'Realtime collaboration layer layered on a performant client and resilient API foundation.',
    challenges: 'Making collaboration feel effortless while maintaining clarity and low friction.',
    results: 'A strong blueprint for a refined daily workflow product.',
    features: ['Real-time sync', 'Command palette', 'Offline-first'],
    futureImprovements: ['Realtime presence', 'Smart reminders', 'Workspace templates'],
  },
  {
    title: 'E-Commerce Storefront',
    status: 'planned',
    tech: ['Next.js', 'Stripe', 'Headless CMS', 'Edge APIs'],
    problem: 'A modern retail experience needs fast checkout, strong merchandising, and a polished product surface.',
    solution: 'Composable storefront architecture with instant search, rich content, and smooth payment flows.',
    role: 'Frontend systems and payments integration.',
    architecture: 'Edge-rendered storefront with content APIs and flexible checkout orchestration.',
    challenges: 'Balancing conversion goals with performance, maintainability, and content flexibility.',
    results: 'A scalable front-end foundation shaped for product growth and experimentation.',
    features: ['Instant search', 'Stripe checkout', 'Edge rendering'],
    futureImprovements: ['Personalization', 'A/B testing', 'Inventory-aware UX'],
  },
  {
    title: 'Realtime Chat Application',
    status: 'planned',
    tech: ['WebSockets', 'Redis', 'React', 'Node.js'],
    problem: 'Low-latency messaging at scale requires a disciplined architecture from day one.',
    solution: 'Presence-aware chat with typing indicators, durable history, and an API designed around real-time expectations.',
    role: 'Full-stack development and systems thinking.',
    architecture: 'Event-driven messaging layer with durable storage and low-latency channel delivery.',
    challenges: 'Maintaining responsiveness and consistency as concurrency and presence grow.',
    results: 'A technically sound foundation for a product that has to feel immediate.',
    features: ['Presence & typing', 'Message persistence', 'Push notifications'],
    futureImprovements: ['Channel moderation', 'Message search', 'Read receipts'],
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Authentication'] },
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C', 'Embedded C'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL'] },
  { title: 'Cloud', items: ['Vercel', 'AWS (learning)', 'Serverless'], placeholder: true },
  { title: 'DevOps', items: ['Git', 'CI/CD (learning)', 'Docker (learning)'], placeholder: true },
  { title: 'Networking', items: ['Industrial Networking', 'TCP/IP', 'Routing & Switching'] },
  { title: 'IoT & Embedded', items: ['Microcontrollers', 'Sensors', 'Telemetry', 'Field Deployment'] },
  { title: 'Tools', items: ['VS Code', 'Postman', 'Figma', 'Linux'] },
]

export const education = [
  {
    degree: 'Bachelor of Technology',
    school: 'Jain University',
    period: '2018 — 2022',
    location: 'Bengaluru, India',
    detail:
      'Built a strong foundation in engineering fundamentals, electronics, and computing — the first environment where connected systems began to feel like product opportunities.',
    current: false,
  },
  {
    degree: 'Advanced Studies — Software & AI',
    school: 'Studying in Germany',
    period: '2024 — Present',
    location: 'Germany',
    detail:
      'Deepening full-stack engineering and AI-driven development while adapting to a new academic and professional environment with a strong focus on building real products.',
    current: true,
  },
]

export const certifications = [
  'Cisco Networking Certification',
  'Industrial IoT & Automation Workshops',
  'Full-Stack Web Development Training',
]

export const achievements = [
  {
    title: 'Cisco Certified',
    detail: 'Formal networking certification underpinning hands-on industrial deployments and modern infrastructure thinking.',
  },
  {
    title: 'Volunteer & Community Work',
    detail: 'Contributed to community initiatives and mentoring, strengthening communication and collaboration in technical environments.',
  },
  {
    title: 'Technical Workshops',
    detail: 'Participated in IoT, automation, and development workshops that broadened both systems thinking and product intuition.',
  },
  {
    title: 'On-Site Leadership',
    detail: 'Led field commissioning and client support for critical infrastructure environments with high reliability demands.',
  },
  {
    title: 'Continuous Training',
    detail: 'Ongoing upskilling across software engineering, web systems, and AI-driven product development.',
  },
  {
    title: 'Cross-Domain Delivery',
    detail: 'Bridged hardware, networking, and software across projects with a strong emphasis on end-to-end outcomes.',
  },
]
