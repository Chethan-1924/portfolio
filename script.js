// ---------- Data ----------
const SKILLS = [
  { label: 'Languages', level: 'PROFICIENT', items: ['Python', 'SQL', 'JavaScript'] },
  { label: 'Frameworks / APIs', level: 'PROFICIENT', items: ['Flask', 'REST API Design'] },
  { label: 'Front-End', level: 'WORKING', items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'] },
  { label: 'Databases', level: 'PROFICIENT', items: ['MySQL', 'Schema Design', 'CRUD Operations'] },
  { label: 'Tools & Platforms', level: 'WORKING', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { label: 'Security', level: 'FAMILIAR', items: ['Kali Linux', 'Wireshark', 'Metasploit', 'SET Toolkit'] },
];

const PROJECTS = [
  {
    file: 'report/grocery-store.log',
    title: 'Grocery Store Management System',
    subtitle: 'Full-stack POS & inventory web app',
    stack: ['Python', 'Flask', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    points: [
      'Built a POS-style billing system managing 500+ SKUs with real-time product, order, and pricing management.',
      'Designed RESTful APIs in Flask (GET, POST, DELETE) covering product, unit-of-measure, and order workflows.',
      'Implemented full CRUD operations with automatic bill calculation, cutting manual billing errors.',
      'Architected a normalized MySQL schema for transactions and order history, improving query performance.',
      'Built a responsive front-end that streamlined store workflow end to end.',
    ],
    link: 'https://github.com/Chethan-1924',
  },
  {
    file: 'report/social-engineering.log',
    title: 'Simulating Social Engineering Attacks',
    subtitle: 'Cybersecurity research project',
    stack: ['SET Toolkit', 'Kali Linux', 'Phishing Simulation'],
    points: [
      'Ran controlled social engineering and phishing simulations using the Social-Engineer Toolkit (SET) to surface credential-harvesting vulnerabilities.',
      'Executed simulated credential-harvesting attacks in an isolated lab environment.',
      'Authored user-awareness documentation and best-practice guidelines to strengthen credential protection.',
    ],
    link: 'https://github.com/Chethan-1924',
  },
];

const EXPERIENCE = [
  {
    when: 'Nov 2023 – Mar 2024',
    title: 'Ethical Hacking Intern',
    org: 'L&T EduTech',
    points: [
      'Learned core ethical hacking and cybersecurity fundamentals — reconnaissance, vulnerability scanning, and exploitation techniques.',
      'Executed simulated cyberattacks in controlled lab environments using Kali Linux, Wireshark, and Metasploit.',
      'Documented findings and remediation steps following standard penetration testing methodology.',
    ],
  },
];

const EDUCATION = [
  {
    when: '2021 – 2025',
    degree: 'Bachelor of Technology, Computer Science and Engineering',
    org: 'Sri Venkateswara College of Engineering and Technology, Chittoor',
  },
  {
    when: '2019 – 2021',
    degree: 'Board of Intermediate Education (12th)',
    org: 'Sri Chaitanya Junior College, Vijayawada',
  },
];

const CERTIFICATION = {
  title: 'Python Full Stack Development',
  org: 'Pentagon Space, Banglore',
};

// ---------- Terminal typing ----------
const BOOT_LINES = [
  'whoami',
  '# D Chethan Kumar — Full-Stack & Python Developer',
  'cat mission.txt',
  '# Building reliable, production-ready software — with a security-first mindset.',
  './status --check',
  '# READY. Open to entry-level Software Developer roles.',
];

function typeTerminal(el, lines, speed = 22, startDelay = 300) {
  let lineIdx = 0;
  const container = el;

  function typeLine() {
    if (lineIdx >= lines.length) return;
    const text = lines[lineIdx];
    const isComment = text.startsWith('#');
    const lineEl = document.createElement('div');
    lineEl.className = 'line';
    const promptEl = document.createElement('span');
    promptEl.className = 'prompt';
    promptEl.textContent = isComment ? '' : '$ ';
    const textEl = document.createElement('span');
    const cursorEl = document.createElement('span');
    cursorEl.className = 'term-cursor';
    cursorEl.textContent = '▍';
    lineEl.appendChild(promptEl);
    lineEl.appendChild(textEl);
    lineEl.appendChild(cursorEl);
    container.appendChild(lineEl);

    let charIdx = 0;
    const interval = setInterval(() => {
      charIdx++;
      textEl.textContent = text.slice(0, charIdx);
      if (charIdx >= text.length) {
        clearInterval(interval);
        cursorEl.remove();
        lineIdx++;
        setTimeout(typeLine, 240);
        if (lineIdx < lines.length) {
          // add cursor to next line once it starts
        }
      }
    }, speed);
  }

  setTimeout(typeLine, startDelay);
}

// ---------- Render helpers ----------
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS.map((g) => `
    <div class="card skill-card">
      <div class="skill-card-head">
        <span class="skill-label">[SCAN] ${g.label}</span>
        <span class="skill-level ${g.level}">${g.level}</span>
      </div>
      <div class="tag-row">
        ${g.items.map((i) => `<span class="tag">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const list = document.getElementById('projects-list');
  list.innerHTML = PROJECTS.map((p) => `
    <div class="card project-card">
      <div class="project-file">
        <span>${p.file}</span>
        <a href="${p.link}" target="_blank" rel="noreferrer">⌥ repo</a>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p class="subtitle">${p.subtitle}</p>
        <div class="tag-row" style="margin-bottom:18px;">
          ${p.stack.map((s) => `<span class="tag">${s}</span>`).join('')}
        </div>
        <ul>${p.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = EXPERIENCE.map((e) => `
    <div class="timeline-item">
      <p class="when mono">${e.when}</p>
      <h3>${e.title}</h3>
      <p class="org">${e.org}</p>
      <ul>${e.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderEducation() {
  const grid = document.getElementById('education-grid');
  const eduCards = EDUCATION.map((e) => `
    <div class="card edu-card">
      <p class="when mono">${e.when}</p>
      <h3>${e.degree}</h3>
      <p class="org">${e.org}</p>
    </div>
  `).join('');
  const certCard = `
    <div class="card edu-card">
      <div class="cert-label mono">🏅 CERTIFICATION</div>
      <h3>${CERTIFICATION.title}</h3>
      <p class="org">${CERTIFICATION.org}</p>
    </div>
  `;
  grid.innerHTML = eduCards + certCard;
}

// ---------- Nav ----------
function setupNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
  });

  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('nav-mobile-panel');
  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.textContent = open ? '×' : '≡';
  });
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.textContent = '≡';
    });
  });
}

// ---------- Scroll reveal ----------
function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  setupNav();
  setupReveal();
  typeTerminal(document.getElementById('terminal-output'), BOOT_LINES);
});
