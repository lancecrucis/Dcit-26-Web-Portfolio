import { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

const skills = [
  { label: 'Frontend', value: 'React 19, Tailwind CSS, Spline 3D' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs' },
  { label: 'Cloud / Platforms', value: 'Supabase, Firebase, Vercel, Render' },
  { label: 'Languages', value: 'JavaScript, TypeScript, Python' },
]

const projects = [
  { name: 'lancelet Flashcards', url: 'https://lancelet.vercel.app/', img: '/projects/lanceletwebsite.png' },
  { name: 'Unofficial Lord of the Mysteries', url: 'https://unofficial-lord-of-the-mysteries.vercel.app/', img: '/projects/lotm website.png' },
  { name: 'Valorant Commputer Vision Skin Classifier', url: 'https://xg-inventory-management-system-frontend.onrender.com', img: '/projects/valorant.png' },
]

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals', org: 'Microsoft', date: 'Issued Jun 2026', img: '/certs/Credentials - lancechristianccrucis-2364 _ Microsoft Learn_page-0001.jpg' },
  { title: 'Certificate of Completion: Claude 101', org: 'Anthropic', date: 'Issued Mar 2026', img: '/certs/claude101 cert.jpg' },
  { title: "CS50's Introduction to Computer Science", org: 'Harvard University', date: 'Issued Dec 2025', img: '/certs/CS50x cert.png' },
  { title: 'AI Essentials: Theory and Practice', org: 'University of the Philippines Open University', date: 'Issued Jun 2025', img: '/certs/uplb ai essential cert.jpg' },
  { title: 'WarFrames: Where Design Meets Data (41st CS Week, UPLB)', org: 'University of the Philippines Los Baños', date: 'Issued Mar 2025', img: '/certs/warframe uplb cert.jpg' },
]

function TiltProfilePic() {
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100
    setMouse({ x, y })
    setTilt({ x: -(y / 50) * 12, y: (x / 50) * 12 })
  }, [])

  return (
    <motion.div
      ref={ref}
      className="relative w-[200px] h-[200px] rounded-full"
      style={{ perspective: 1000 }}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }) }}
    >
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#f0f0f0]"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <img
          src="/profile_pic.jpg"
          alt="Lance Christian C. Crucis"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mouse.x / 2 + 50}% ${mouse.y / 2 + 50}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  )
}

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
          <TiltProfilePic />
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
        <div className="flex flex-col gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full rounded-2xl overflow-hidden h-[280px] group"
            >
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0  via-black/20 to-transparent" />
              <div className="relative z-10 flex flex-col items-start justify-start h-full pt-8 pl-8">
                <h4 className="text-white text-2xl font-bold max-w-xs leading-tight">
                  {p.name}
                </h4>
                <p className="text-white/70 text-sm mt-1.5">
                  The project is Live!
                </p>
                <span className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-5 py-2 rounded-full border border-white/30 group-hover:bg-white/30 transition-colors">
                  Visit Site &rarr;
                </span>
              </div>
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