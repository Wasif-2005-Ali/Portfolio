import { projectSchema } from '@/lib/validation/content';

export type Project = {
  slug: string;
  name: string;
  category: 'Mobile + Backend' | 'Web · Live' | 'Full-Stack' | 'Algorithms · C++' | 'Desktop · Java' | 'Web · C#';
  kind: string;
  summary: string;
  problem: string;
  role: string;
  status: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  approach: { title: string; body: string }[];
  evidence: { label: string; value: string; note: string; source?: string }[];
  limitations: string[];
  repo?: string;
  demo?: string;
  video?: string;
  image?: string;
  accent: 'orange' | 'ink' | 'paper';
};

export const projects: Project[] = [
  {
    slug: 'appointly',
    name: 'Appointly',
    category: 'Mobile + Backend',
    kind: 'Appointment platform · Flutter + Django',
    summary: 'Appointment booking with in-app chat and voice/video calls: a Flutter app with a Django backend, built end to end.',
    problem: 'Booking an appointment is only half the job — patients and providers also need to talk before and after it. Appointly keeps booking, chat and calls in one place instead of three apps.',
    role: 'Solo developer — Flutter frontend and Django backend.',
    status: 'In active development.',
    featured: true,
    stack: ['Flutter', 'Dart', 'Django', 'Python', 'MongoDB', 'JWT', 'WebRTC', 'SQLite'],
    highlights: [
      'Appointment booking with local persistence',
      'In-app chat rooms and messages (MongoDB)',
      'WebRTC voice/video call screen matching the backend call protocol',
      'Django auth with JWT; chat and call services wired in settings/URLs/ASGI',
    ],
    approach: [
      { title: 'Book first', body: 'Appointments, users and chat history live in the app with SQLite, so the core flow works before any server is involved.' },
      { title: 'Add the server', body: 'Django serves auth (JWT) plus chat and call services, with chat/call data in MongoDB collections.' },
      { title: 'Connect calls', body: 'A WebRTC call screen follows the backend call protocol for signalling between callers.' },
    ],
    evidence: [
      { label: 'Repos', value: '2', note: 'appointly-frontend (Flutter) and appointly-backend (Django).' },
      { label: 'Services', value: 'Chat + Call', note: 'Two Django service apps wired into the backend.' },
    ],
    limitations: [
      'Frontend and backend are not yet connected end to end in a public deployment; integration is in progress.',
      'No public demo yet — the app runs locally while the hosted backend is being finished.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/appointly-frontend',
    accent: 'orange',
  },
  {
    slug: 'oasis-foundation-website',
    name: 'OASIS Foundation Website',
    category: 'Web · Live',
    kind: 'Community website · Director IT',
    summary: 'The public website of OASIS Foundation, a student-led community-service organisation — designed and built as its Director IT.',
    problem: 'OASIS runs workshops, lectures and mentorship inside campuses across Pakistan, but it had no home on the web to explain what it does or how students join.',
    role: 'Director IT, OASIS Foundation — designed and built the site.',
    status: 'Live at oasisfoundation.net; actively maintained.',
    featured: true,
    stack: ['Web Development'],
    highlights: [
      'Programme and mission pages for six focus areas',
      'Volunteer roles (mentor, campus ambassador, content creator)',
      'Join flow and FAQs for students across Pakistan',
    ],
    approach: [
      { title: 'Say what it is', body: 'The site leads with the mission — by students, for students — before any detail.' },
      { title: 'Show the work', body: 'Programmes, impact and volunteer roles are presented as concrete things to join, not slogans.' },
      { title: 'Make joining easy', body: 'A join form and clear contact paths turn readers into volunteers.' },
    ],
    evidence: [
      { label: 'Live', value: 'oasisfoundation.net', note: 'Public website, built and maintained by the owner.' },
      { label: 'Founded', value: '24 May 2026', note: 'Grassroots organisation; every programme is free for students.' },
    ],
    limitations: [
      'Content is owned by the Foundation and changes with its programmes.',
      'Joining is form-based; there is no member portal.',
    ],
    demo: 'https://oasisfoundation.net',
    accent: 'ink',
  },
  {
    slug: 'gosafar',
    name: 'GoSafar',
    category: 'Web · Live',
    kind: 'Travel booking website',
    summary: 'Tours, group trips and rides across northern Pakistan — a live booking website with tour packages, 4x4 jeep safaris and WhatsApp booking.',
    problem: 'Travellers across Kamra, Attock and Islamabad plan trips over scattered WhatsApp chats. GoSafar puts tours, group trips and custom packages in one place and keeps booking one tap away.',
    role: 'Founder & developer.',
    status: 'Live on GitHub Pages.',
    featured: true,
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Weekly fixed group trips and 100% tailor-made private tours',
      'Tour packages: Hunza, Kalam, Naran, Shugran and Skardu',
      '4x4 jeep safaris, hotel stays, photography, meals and camping trips',
      'WhatsApp booking on every listing',
    ],
    approach: [
      { title: 'Show the trips', body: 'Tour pages lead with destinations, group departures and what is included — transport, stays, meals and photography.' },
      { title: 'Sell the journey', body: 'Packages bundle transport, stays, meals and a guide, so travellers see the whole trip before they ask for a price.' },
      { title: 'Keep booking human', body: 'Every listing ends in a WhatsApp chat — no accounts, no checkout friction.' },
    ],
    evidence: [
      { label: 'Live', value: 'GitHub Pages', note: 'Public booking website.' },
      { label: 'Travellers', value: '50+', note: 'Happy travellers, per the live site.' },
      { label: 'Destinations', value: '10+', note: 'Across northern Pakistan, per the live site.' },
    ],
    limitations: [
      'Booking is WhatsApp-based; there is no online payment.',
      'Fares and availability are managed by the business and change.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/gosafar-website',
    demo: 'https://wasif-2005-ali.github.io/gosafar-website/',
    accent: 'paper',
  },
  {
    slug: 'edurace',
    name: 'EduRace',
    category: 'Mobile + Backend',
    kind: 'Gamified learning platform · Flutter + Firebase',
    summary: 'A gamified MCQ learning and racing platform: real-time multiplayer quiz battles with leaderboards, teacher dashboards and AI-enhanced insights — built with Flutter and Firebase.',
    problem: 'Revision is lonely and easy to postpone. EduRace turns MCQs into live races so students compete, practise and improve together.',
    role: 'Built as a full-stack, cross-platform edtech platform (as shared on LinkedIn).',
    status: 'Built and shared publicly (2026).',
    featured: true,
    stack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    highlights: [
      'Race-based MCQ battles with live multiplayer racing',
      'Personalised dashboards & progress analytics',
      'Gamified rewards & leaderboards',
      'Teacher admin dashboard, downloadable notes & structured content',
      'Secure Firebase Authentication, Cloud Firestore real-time sync',
      'AI-enhanced learning insights',
    ],
    approach: [
      { title: 'Race, don’t revise alone', body: 'MCQ battles turn practice into live multiplayer races.' },
      { title: 'Keep everyone in sync', body: 'Cloud Firestore syncs race state and progress in real time.' },
      { title: 'Serve both sides', body: 'Students get dashboards and rewards; teachers get an admin dashboard and structured content.' },
    ],
    evidence: [
      { label: 'Platform', value: 'Flutter + Firebase', note: 'Cross-platform app with real-time sync.' },
      { label: 'Modes', value: 'Races + dashboards', note: 'Student racing, teacher admin, progress analytics.' },
    ],
    limitations: [
      'No public demo or repository link is published for this project yet.',
      'AI insights are described as a feature, not a measured result.',
    ],
    accent: 'paper',
  },
  {
    slug: 'course-management-system',
    name: 'University Course Management System',
    category: 'Full-Stack',
    kind: 'Course platform · Node.js + MySQL',
    summary: 'A university course platform with student/admin roles, secure login and full course management — bcrypt password hashing, JWT sessions and role-based access.',
    problem: 'Course enrolment paperwork is slow and error-prone. This system gives students a searchable catalogue and admins full control over courses and users.',
    role: 'Built as a full-stack university project — Node.js/Express backend, MySQL schema, jQuery frontend.',
    status: 'Complete — verified end to end against a live database.',
    featured: false,
    stack: ['Node.js', 'Express', 'MySQL', 'jQuery', 'JWT', 'bcrypt'],
    highlights: [
      'Student and admin roles with JWT authentication',
      'Course CRUD with search',
      'Password hashing with bcrypt',
      'Seeded demo accounts and six sample courses',
    ],
    approach: [
      { title: 'Secure the doors', body: 'bcrypt hashing and JWT sessions; protected routes return 401 without a token.' },
      { title: 'Model the domain', body: 'A MySQL schema (UniversityDB) for users, courses and enrolments.' },
      { title: 'Verify live', body: 'Tested against a real database: login, course listing and unauthorised access all checked.' },
    ],
    evidence: [
      { label: 'Smoke tests', value: '15/15 passed', note: 'Auth and validation checks against the live server.' },
      { label: 'Syntax checks', value: '12/12 passed', note: 'Whole codebase.' },
    ],
    limitations: [
      'University project, not a production deployment.',
      'Requires a MySQL server; no hosted demo.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University',
    video: '/videos/course-management-system.mp4',
    accent: 'orange',
  },
  {
    slug: 'accessdesk',
    name: 'AccessDesk',
    category: 'Full-Stack',
    kind: 'Access portal · FSD Assignment 05',
    summary: 'A role-based customer access portal: one MySQL database shared by four API-key roles, each with its own row limits, credit allowance and visible fields — enforced on the server.',
    problem: 'One customer database, four kinds of callers. Guests should see names only; admins need usage data. AccessDesk puts every permission decision on the server, so the browser never decides what a caller may see.',
    role: 'Full Stack Web Development Assignment 05, Air University Kamra.',
    status: 'Coursework project — Oct 2026.',
    featured: false,
    stack: ['Node.js', 'Express', 'MySQL', 'jQuery', 'AJAX'],
    highlights: [
      'Four API-key roles: Guest, Student, Teacher, Admin',
      'Row limits + credit allowances per role (429 when exhausted)',
      'Field projection: each role sees only its allowed columns',
      'Fixed middleware chain: identity (401) → action (403) → credits (429) → validated, parameterized SQL',
      'No credentials or permission logic in the browser',
    ],
    approach: [
      { title: 'Identify first', body: 'Every request carries an API key in the x-api-key header; unknown keys get 401 before anything else runs.' },
      { title: 'Check in order', body: 'One middleware chain enforces action permission, database/table allow-listing and credit balance, each with its own status code.' },
      { title: 'Return only what is allowed', body: 'Row limits and column whitelists are applied per role, and search uses bound parameters — never string-built SQL.' },
    ],
    evidence: [
      { label: 'Roles', value: '4', note: 'Guest, Student, Teacher, Admin — each with row limit and credits.' },
      { label: 'Checks', value: '5-step chain', note: '401 → 403 → 403 → 429 → validated SQL.' },
      { label: 'Docs', value: '13-page report', note: 'Design, API routes, security analysis and verification cases.' },
    ],
    limitations: [
      'Academic assignment; credits live in server memory and reset on restart.',
      'No hosted demo; runs on localhost with XAMPP MySQL.',
      'Demo API keys are for the assignment only — no key values are published here.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/5th%20Semester/FSD%20Lab/Assignment%20no%2002',
    accent: 'orange',
  },
  {
    slug: 'maze-explorer',
    name: 'Maze Explorer',
    category: 'Algorithms · C++',
    kind: 'Graph game · DSA project',
    summary: 'A graph-based adventure game in C++: DFS generates the maze, BFS finds the shortest path.',
    problem: 'Graph algorithms are easy to memorise and hard to feel. Maze Explorer turns DFS and BFS into something you can watch and play.',
    role: 'Data Structures & Algorithms project, Air University Kamra.',
    status: 'Coursework project — 2025.',
    featured: false,
    stack: ['C++', 'DFS', 'BFS'],
    highlights: [
      'DFS-based dynamic maze generation',
      'BFS shortest-path finding',
      'Real-time rendering and leaderboard',
      'Modular C++ architecture',
    ],
    approach: [
      { title: 'Generate with DFS', body: 'Depth-first search carves a new maze every run.' },
      { title: 'Solve with BFS', body: 'Breadth-first search finds the shortest path through it.' },
      { title: 'Make it a game', body: 'Real-time rendering and a leaderboard turn the algorithms into play.' },
    ],
    evidence: [
      { label: 'Algorithms', value: 'DFS + BFS', note: 'Generation and solving in one game.' },
    ],
    limitations: [
      'Coursework game, not a commercial release.',
      'Desktop C++ project; no web version.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/3rd%20Semester/DSA',
    accent: 'ink',
  },
  {
    slug: 'climate-impact-calculator',
    name: 'Climate Impact Calculator',
    category: 'Algorithms · C++',
    kind: 'Carbon calculator · C++',
    summary: 'A C++ console program that turns emissions figures into a carbon footprint: total CO2, an air quality index, a log-scale impact factor, and the trees and solar panels needed to offset it.',
    problem: 'A carbon footprint is an abstract number. This calculator turns emissions into figures people can picture — how many trees to plant, how many solar panels to install — alongside CO2 totals and an air quality index.',
    role: 'Programming Fundamentals project, 1st semester, Air University Kamra.',
    status: 'Coursework project — 2024.',
    featured: false,
    stack: ['C++'],
    highlights: [
      'Total CO2 emissions from input figures',
      'Air Quality Index (AQI) calculation',
      'Climate Change Impact Factor on a log scale: log(Total Emissions + 1) × 10',
      'Trees required and solar panels required to offset emissions',
      'Documented with algorithm, flow chart, report and presentation',
    ],
    approach: [
      { title: 'Start from emissions', body: 'The program takes emissions figures and totals CO2 output.' },
      { title: 'Make impact readable', body: 'A log-scale factor compresses huge emission totals into a comparable score.' },
      { title: 'Answer in actions', body: 'Trees and solar panels translate the footprint into concrete offsets.' },
    ],
    evidence: [
      { label: 'Outputs', value: '5', note: 'CO2 total, AQI, impact factor, trees required, solar panels required.' },
      { label: 'Docs', value: 'Algorithm + report', note: 'Flow chart, algorithm document and project report in the repo.' },
    ],
    limitations: [
      'Console program; no graphical interface or live deployment.',
      'Source code is not in the repository — the folder holds the algorithm, flow chart, report and presentation.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/1st%20Semester/Climate%20Impact%20Calculator',
    image: '/images/climate-impact-calculator.png',
    accent: 'paper',
  },
  {
    slug: 'pharma-ease',
    name: 'Pharmacy Management System',
    category: 'Desktop · Java',
    kind: 'Pharmacy system · OOP project',
    summary: 'A desktop pharmacy system with role-based access, MySQL inventory and real-time stock updates.',
    problem: 'A pharmacy juggles stock, sales and three kinds of users. Pharma Ease gives each role — admin, seller, customer — exactly the screens they need.',
    role: 'Object Oriented Programming project, Air University Kamra.',
    status: 'Coursework project — 2025.',
    featured: false,
    stack: ['Java', 'Swing', 'MySQL', 'JDBC', 'OOP'],
    highlights: [
      'Role-based access: admin, seller, customer',
      'MySQL inventory management and sales tracking',
      'Real-time stock updates',
      'Modular class design with controller pattern and Swing UI',
    ],
    approach: [
      { title: 'Separate the roles', body: 'Admins manage stock, sellers sell, customers browse — one codebase, three views.' },
      { title: 'Keep stock honest', body: 'Every sale updates MySQL inventory immediately.' },
    ],
    evidence: [{ label: 'Roles', value: '3', note: 'Admin, seller, customer.' }],
    limitations: [
      'Academic OOP project; desktop-only.',
      'No live deployment; runs against a local MySQL database.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/2nd%20Semester/OOP%20Final%20Project',
    image: '/images/pharma-ease.png',
    accent: 'paper',
  },
  {
    slug: 'inventory-management-system',
    name: 'Inventory Management System',
    category: 'Web · C#',
    kind: 'Inventory system · Visual Programming',
    summary: 'A Blazor inventory system with role-based authorisation and synchronised stock state.',
    problem: 'Small inventories drift out of sync when stock, carts and permissions live in different places. This system keeps one shared state behind role-based access.',
    role: 'Visual Programming lab project, Air University Kamra.',
    status: 'Coursework project — 2025.',
    featured: false,
    stack: ['C#', 'Blazor', '.NET'],
    highlights: [
      'Role-based authorisation (AppState + AuthService)',
      'Controlled cart logic',
      'State synchronisation across views',
    ],
    approach: [
      { title: 'One state', body: 'AppState holds the shared inventory state every view reads.' },
      { title: 'Guard the actions', body: 'AuthService checks roles before stock or cart changes are allowed.' },
    ],
    evidence: [
      { label: 'Framework', value: 'Blazor / .NET', note: 'Visual Programming coursework.' },
    ],
    limitations: [
      'Lab project; no live deployment.',
      'Built for coursework scale, not multi-branch retail.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/3rd%20Semester/VP/VP%20Project',
    image: '/images/inventory-management-system.png',
    accent: 'orange',
  },
  {
    slug: 'task-management-system',
    name: 'Task & Appointment Management System',
    category: 'Web · C#',
    kind: 'Task manager · Visual Programming',
    summary: 'A Blazor task and appointment manager built during Visual Programming coursework.',
    problem: 'Tasks and appointments compete for the same day. This tool keeps both in one place.',
    role: 'Visual Programming coursework, Air University Kamra.',
    status: 'Coursework project.',
    featured: false,
    stack: ['C#', 'Blazor', '.NET'],
    highlights: ['Task and appointment workflows', 'Built with Blazor/C#'],
    approach: [
      { title: 'One list for the day', body: 'Tasks and appointments share a single workflow instead of two tools.' },
    ],
    evidence: [
      { label: 'Framework', value: 'Blazor / .NET', note: 'Visual Programming coursework.' },
    ],
    limitations: [
      'Coursework tool; no live deployment.',
      'Details are as documented in the repository.',
    ],
    repo: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/3rd%20Semester/VP',
    accent: 'ink',
  },
];

projectSchema.array().parse(projects);

export const featuredProjects = projects.filter((project) => project.featured);
export function getProject(slug: string): Project | undefined { return projects.find((project) => project.slug === slug); }
