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
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[#111]">
          Lance Christian C. Crucis
        </h1>
        <p className="text-base text-[#666] mt-1">
          3rd-Year BS Computer Science &middot; Cavite State University
        </p>
      </div>

      <section className="flex items-center gap-10 mb-14">
        <div className="shrink-0">
          <img
            src="/profile_pic.jpg"
            alt="Lance Christian C. Crucis"
            className="w-[200px] h-[200px] rounded-full object-cover border-4 border-[#f0f0f0]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[1.75rem] font-bold text-[#111] mb-3">Hello</h2>
          <p className="text-[1.05rem] text-[#444] mb-2 leading-relaxed">
            I'm a 3rd-Year BS Computer Science student at Cavite State University
            — Silang Campus, based in Dasmariñas, Cavite, Philippines. I build
            things with React, Node.js, and modern web technologies.
          </p>
          <p className="text-[#888] text-[0.95rem]">Dasmariñas, Cavite, Philippines</p>
          <a
            className="inline-block mt-2.5 text-[#555] no-underline text-base border-b-2 border-[#ddd] hover:text-black hover:border-black transition-[color,border-color]"
            href="https://github.com/lancecrucis"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lancecrucis &rarr;
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-[1.15rem] font-semibold tracking-wide uppercase text-[#999] mb-6">
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4">
              <div className="text-[0.75rem] font-semibold uppercase tracking-wide text-[#aaa] mb-1.5">
                {s.label}
              </div>
              <div className="text-[0.9rem] text-[#222]">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-[1.15rem] font-semibold tracking-wide uppercase text-[#999] mb-6">
          Projects
        </h3>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col text-[#333] no-underline border border-[#eee] rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#fafafa]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover block" />
              </div>
              <span className="block px-3.5 py-3 text-[0.85rem] font-medium">{p.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-[1.15rem] font-semibold tracking-wide uppercase text-[#999] mb-6">
          Certifications
        </h3>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="flex flex-col border border-[#eee] rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div className="w-full bg-[#fafafa] flex items-center justify-center p-5">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-auto max-h-[300px] object-contain block"
                />
              </div>
              <div className="px-4 py-3.5 border-t border-[#eee]">
                <div className="font-medium text-[0.85rem] text-[#111]">{c.title}</div>
                <div className="text-[0.78rem] text-[#777] mt-1">
                  {c.org} &middot; <span className="text-[#aaa]">{c.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-none border-t border-[#eee] my-12" />

      <footer className="text-center text-[0.8rem] text-[#bbb] py-6">
        &copy; {new Date().getFullYear()} Lance Christian C. Crucis
      </footer>
    </div>
  )
}