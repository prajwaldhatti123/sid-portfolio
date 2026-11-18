/* =====================================================================
   ALL THE WORDS ON THE SITE LIVE IN THIS FILE.
   Change text between the quotes, save, and the site updates.
   Keep the quotes, commas and brackets exactly as they are.
   ===================================================================== */

export const person = {
  name: 'Siddharoodha Dhatti',
  firstName: 'Siddharoodha',
  role: 'UI/UX Designer',
  city: 'Bengaluru',
  location: 'Bengaluru, Karnataka, India',
  /** Short line shown in the nav pill and hero tile. No start date on purpose. */
  availability: 'Open to full-time roles',
  email: 'siddharoodhadhatti067@gmail.com',
  phone: '+91 99169 77560',
  whatsappUrl: 'https://wa.me/919916977560',
  linkedinUrl: 'https://www.linkedin.com/in/siddharoodha-dhatti/',
  framerSiteUrl: 'https://siddudhatti.framer.website/',
  /** The PDF sits in the /public folder. Replace that file to update the resume. */
  resumeUrl: '/siddharoodha-resume.pdf',
};

/** The public address of the site, without a slash at the end.
    CHANGE THIS when the site has its real address. It is used for the sitemap,
    the share image and what Google shows. */
export const siteUrl = 'https://sid.dhatti.com';

export const seo = {
  title: 'Siddharoodha Dhatti — UI/UX Designer',
  description:
    'Portfolio of Siddharoodha Dhatti, a UI/UX designer in Bengaluru trained at Designboat. Two case studies: StudySync, a study-planning app tested with five students, and Antcluster.com, a 29-page website.',
  keywords: 'Siddharoodha Dhatti, UI/UX designer, UX designer Bengaluru, product designer portfolio, Figma, StudySync case study, Antcluster website design, Designboat',
};

/* ---------- HERO ---------- */
export const hero = {
  eyebrow: 'UI/UX designer · Bengaluru · Open to full-time roles',
  /** The headline is in three parts so one word can get the highlighter. */
  headline: { start: 'I stay in grey boxes', middle: 'until the flow', marked: 'works.' },
  /** Use **double stars** around the words that should be bright. */
  intro:
    'I’m **Siddharoodha**, a UI/UX designer in Bengaluru, trained on **Designboat’s** five-month UI/UX program. I work in a fixed order: paper sketches, grey wireframes, five people testing, then colour.',
  facts: [
    { label: 'Based', value: 'Bengaluru, IN' },
    { label: 'Trained at', value: 'Designboat, UI/UX' },
    { label: 'Status', value: 'Open to full-time roles' },
  ],
  primaryCta: 'See the two projects',
  /** The three states of the phone in the hero, in order. */
  scrub: {
    screen: 'StudySync / Home',
    stages: [
      { tag: 'Sketch', label: 'paper sketch' },
      { tag: 'Wireframe', label: 'grey wireframe' },
      { tag: 'Final', label: 'final UI' },
    ],
    /** Notes around the phone. `stage` is 0 sketch, 1 wireframe, 2 final. `side` is l or r. `top` is how far down. */
    notes: [
      { stage: 0, side: 'r', top: '20%', title: 'Paper first', text: '16 hand-drawn screens before I opened Figma.' },
      { stage: 0, side: 'l', top: '30%', title: 'Boxes, not pixels', text: 'Important task on top, study schedule under it.' },
      { stage: 1, side: 'r', top: '20%', title: '30+ screens in grey', text: 'Every flow wired up before any colour went in.' },
      { stage: 1, side: 'l', top: '30%', title: 'Same order as paper', text: 'The sketch layout survived. The labels got real.' },
      { stage: 2, side: 'r', top: '20%', title: 'Tested with 5 students', text: 'All 20 task attempts completed, on 4 tasks.' },
      { stage: 2, side: 'l', top: '30%', title: 'What the test found', text: 'Streak info was hard to find for first-time users.' },
    ],
    hint: 'Scroll, or drag the dot',
  },
  stickerLabel: 'that’s me',
};

/* ---------- WORK ---------- */
export const work = {
  heading: 'Selected work',
  note: 'Training & website work, 2026',
  sticker: '2 projects, start to finish.',
  /** The label on each project card. The whole card opens the case study. */
  openLabel: 'View case study',
  projects: [
    {
      id: 'studysync',
      caseUrl: '/work/studysync/',
      index: '01',
      kind: 'UX case study · 2026',
      title: 'StudySync',
      summary:
        'A study-planning app for students: assignments, deadlines, schedules and reminders in one place. The insight that shaped it: the problem isn’t completing tasks, it’s remembering them.',
      spec: [
        { label: 'Role', value: 'UI/UX designer: research, flows, sketches, wireframes, final UI, prototypes' },
        { label: 'Platforms', value: 'iOS and Android, 30+ screens, in Figma' },
        { label: 'Evidence', value: '12-question student survey, 6 competitor apps, usability test with 5 students' },
      ],
      metric: { from: 0, to: 20, of: 20, unit: 'tasks completed by 5 students' },
      metricNote: 'Find today’s tasks ≈17s · add a task 32s',
      links: [
        { label: 'iOS prototype', url: 'https://www.figma.com/proto/JjMWuIa5U4MtwvhcDVxxk4/Untitled?node-id=1-10656&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' },
        { label: 'Android prototype', url: 'https://www.figma.com/proto/JjMWuIa5U4MtwvhcDVxxk4/Untitled?node-id=1-2162&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=1%3A2150' },
      ],
      figure: { tl: 'Fig. 1', tr: 'Smart Capture · Task tracker · Calendar', bl: 'Final iOS screens' },
    },
    {
      id: 'antcluster',
      caseUrl: '/work/antcluster/',
      index: '02',
      kind: 'Website · Apr–Oct 2026',
      title: 'Antcluster.com',
      summary:
        'The public website for an AI agent that answers business questions from a company’s databases. One rule for every graphic: thin lines that travel, meet and brighten, like ant trails.',
      spec: [
        /* DRAFT — Siddharoodha must confirm this role line before the site goes public. */
        { label: 'Role', value: 'Visual and interaction design, with the founding engineer who built it in React' },
        { label: 'System', value: '14 colour tokens, 14 templates, three diagrams: a web, a tree, a ring' },
        { label: 'Decisions', value: 'Home page ordered as a first-time visitor’s questions; working demo moved up to second' },
      ],
      metric: { from: 1, to: 29, of: null, unit: 'pages, from one' },
      metricNote: 'Seven sections on one page → 29 pages from 14 templates',
      links: [{ label: 'Live site', url: 'https://antcluster.com' }],
      figure: { tl: 'Fig. 2', tr: 'Home hero · phone menu · agent ring', bl: 'antcluster.com' },
    },
  ],
};

/* ---------- ABOUT ---------- */
export const about = {
  heading: 'About',
  /** `lead` is bright, `rest` is grey. */
  statement: {
    lead: 'I trained as a UI/UX designer at Designboat.',
    rest: 'Five months of user research, wireframing, prototyping and usability evaluation, and two projects I can walk you through screen by screen.',
  },
  /** Three numbers under the statement. All from the two projects above. */
  stats: [
    { value: '30+', label: 'StudySync screens, iOS and Android' },
    { value: '5', label: 'students in the usability test' },
    { value: '29', label: 'Antcluster pages' },
  ],
  paragraphs: [
    'I work the same way each time: talk to the people who will use it, draw it on paper, wire it in grey, put it in front of five users, and only then make it look finished. **Figma is my main tool**.',
    'I’m looking for my first full-time UI/UX role.',
  ],
  /** The training card at the top of the About panel. */
  training: {
    label: 'Design training',
    school: 'Designboat',
    course: 'UI/UX Design Intensive',
    length: '5 months',
    covered: ['User research', 'Wireframing', 'Prototyping', 'Usability evaluation'],
    note: 'Plus Coursera certifications and a redesign of the Juno app.',
  },
  details: [
    { label: 'Degree', value: 'B.Tech, UVCE Bengaluru', note: 'Civil engineering · expected 2026' },
    { label: 'Languages', value: 'English, Hindi, Kannada', note: '' },
  ],
};

/* ---------- SKILLS & TOOLS ---------- */
export const toolkit = {
  heading: 'Skills & tools',
  note: 'What I use, and where you can see it',
  /** `icon` must be a name from src/data/icons.ts. `main: true` makes the tile wide. */
  tools: [
    { icon: 'figma', name: 'Figma & FigJam', main: true },
    { icon: 'framer', name: 'Framer', main: false },
    { icon: 'canva', name: 'Canva', main: false },
    { icon: 'photoshop', name: 'Photoshop', main: false },
  ],
  aiLabel: 'AI tools I work with',
  ai: [
    { icon: 'claude', name: 'Claude' },
    { icon: 'chatgpt', name: 'ChatGPT' },
  ],
  /** `proof` is the short note on the right: where that skill shows up. Leave '' for none. */
  groups: [
    {
      tag: 'UX',
      title: 'Finding the right problem',
      skills: [
        { name: 'User research', proof: '12-question survey' },
        { name: 'Usability testing', proof: '5 students · 20/20 tasks' },
        { name: 'Information architecture', proof: 'Card sort → 5 tabs' },
        { name: 'User flows', proof: '4 task flows' },
        { name: 'Design thinking', proof: 'Discover → Test' },
      ],
    },
    {
      tag: 'UI',
      title: 'Making it clear on screen',
      skills: [
        { name: 'Wireframing', proof: '16 on paper · 30+ in Figma' },
        { name: 'High-fidelity prototyping', proof: 'iOS + Android' },
        { name: 'Visual design', proof: 'StudySync UI' },
        { name: 'Design systems', proof: '14 colour tokens' },
        { name: 'Responsive web & mobile', proof: 'Antcluster.com' },
        { name: 'Micro-interactions', proof: '' },
      ],
    },
  ],
};

/* ---------- PROCESS ---------- */
export const process = {
  heading: 'How I work — five stages, from research to testing',
  steps: [
    { name: 'Discover', text: 'User interviews, competitor analysis, user research.' },
    { name: 'Define', text: 'Problem statement, persona, empathy map.' },
    { name: 'Ideate', text: 'Journey map, user flow, information architecture.' },
    { name: 'Design', text: 'Wireframes, visual design, prototyping.' },
    { name: 'Test', text: 'Usability testing, then fix what it finds.' },
  ],
};

/* ---------- CONTACT ---------- */
export const contact = {
  eyebrow: 'Contact',
  heading: { lead: 'Looking for a UI/UX designer', rest: 'who tests before he polishes?' },
  badgeText: 'SAY HI · OPEN TO FULL-TIME ROLES ·',
};

export const footer = {
  credit: 'Designed by Siddharoodha, built with Astro',
};
