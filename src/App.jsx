const skills = [
  { label: 'Frontend', value: 'React 19, Tailwind CSS, Spline 3D' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs' },
  { label: 'Cloud / Platforms', value: 'Supabase, Firebase, Vercel, Render' },
  { label: 'Languages', value: 'JavaScript, TypeScript, Python' },
]

const projects = [
  { name: 'lancelet.vercel.app', url: 'https://lancelet.vercel.app/', img: '/projects/lanceletwebsite.jpg' },
  { name: 'unofficial-lord-of-the-mysteries.vercel.app', url: 'https://unofficial-lord-of-the-mysteries.vercel.app/', img: '/projects/lotm website.jpg' },
  { name: 'xg-inventory-management-system-frontend.onrender.com', url: 'https://xg-inventory-management-system-frontend.onrender.com', img: '/projects/xg inventory.jpg' },
]

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals', org: 'Microsoft', date: 'Issued Jun 2026', img: '/certs/Credentials - lancechristianccrucis-2364 _ Microsoft Learn_page-0001.jpg' },
  { title: 'Certificate of Completion: Claude 101', org: 'Anthropic', date: 'Issued Mar 2026', img: '/certs/claude101 cert.jpg' },
  { title: "CS50's Introduction to Computer Science", org: 'Harvard University', date: 'Issued Dec 2025', img: '/certs/CS50x cert.png' },
  { title: 'AI Essentials: Theory and Practice', org: 'University of the Philippines Open University', date: 'Issued Jun 2025', img: '/certs/uplb ai essential cert.jpg' },
  { title: 'WarFrames: Where Design Meets Data (41st CS Week, UPLB)', org: 'University of the Philippines Los Baños', date: 'Issued Mar 2025', img: '/certs/warframe uplb cert.jpg' },
]

export default function App() {
  return (
    <div className="container">
      <div className="intro-section">
        <header>
          <div className="name-title">
            <h1>Lance Christian C. Crucis</h1>
            <p className="tagline">3rd-Year BS Computer Science &middot; Cavite State University</p>
          </div>
        </header>

        <div className="hero">
          <div className="hero-image">
            <img src="/profile_pic.jpg" alt="Lance Christian C. Crucis" />
          </div>
          <div className="hero-text">
            <h2>Hello</h2>
            <p>
              I'm a 3rd-Year BS Computer Science student at Cavite State University
              — Silang Campus, based in Dasmariñas, Cavite, Philippines. I build
              things with React, Node.js, and modern web technologies.
            </p>
            <p className="location">Dasmariñas, Cavite, Philippines</p>
            <a className="github" href="https://github.com/lancecrucis" target="_blank" rel="noopener noreferrer">
              github.com/lancecrucis &rarr;
            </a>
          </div>
        </div>
      </div>

      <section>
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-cat" key={s.label}>
              <div className="cat-label">{s.label}</div>
              <div className="cat-value">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="projects-scroll">
          <div className="projects-track">
            {[...projects, ...projects, ...projects].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
                <img src={p.img} alt={p.name} />
                <span>{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3>Certifications</h3>
        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="cert-card" key={c.title}>
              <img src={c.img} alt={c.title} />
              <div className="cert-card-body">
                <div className="cert-title">{c.title}</div>
                <div className="cert-meta">
                  {c.org} &middot; <span className="cert-date">{c.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <footer>
        &copy; {new Date().getFullYear()} Lance Christian C. Crucis
      </footer>
    </div>
  )
}