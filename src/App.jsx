import { useState } from "react";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit,
  ChartNoAxesCombined, Code2, Database, Github, Linkedin, Mail, Menu,
  Network, Sparkles, X, MapPin, GraduationCap, BriefcaseBusiness,
  ExternalLink, Send, ChevronRight
} from "lucide-react";
import { profile, skills, projects, experience } from "./data";

const iconMap = {
  brain: BrainCircuit,
  network: Network,
  chart: ChartNoAxesCombined,
  database: Database
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Projects", "#projects"],
    ["Skills", "#skills"], ["Experience", "#experience"]
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to homepage">
        <span className="brand-mark"><ChartNoAxesCombined size={19} /></span>
        <span>data<span className="brand-accent">folio</span><span className="brand-period">.</span></span>
      </a>
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function DataVisual() {
  const bars = [30, 48, 38, 62, 50, 75, 58, 88, 66, 96, 76, 100];
  return (
    <div className="visual-card">
      <div className="visual-top">
        <div>
          <span className="visual-label">DATA EXPLORATION</span>
          <h3>Finding the signal.</h3>
        </div>
        <span className="visual-icon"><Sparkles size={18} /></span>
      </div>
      <div className="chart-area" aria-label="Decorative bar chart">
        {bars.map((height, i) => <div key={i} className={`chart-bar ${i === 9 ? "bar-highlight" : ""}`} style={{ height: `${height}%` }} />)}
      </div>
      <div className="visual-bottom">
        <div><span className="mini-dot blue-dot" />Explore</div>
        <div><span className="mini-dot purple-dot" />Analyze</div>
        <div><span className="mini-dot green-dot" />Communicate</div>
      </div>
      <div className="floating-chip chip-one"><BrainCircuit size={15} /> Machine Learning</div>
      <div className="floating-chip chip-two"><Database size={15} /> Data Insights</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="status-pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
        <p className="hero-kicker">HELLO, I'M {profile.name.toUpperCase()}</p>
        <h1>Turning data into <span className="gradient-text">meaningful</span> insights.</h1>
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
          <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
          <a className="button button-quiet" href={profile.cvPath} download>Download CV <ArrowDown size={16} /></a>
        </div>
        <div className="hero-meta">
          <span><MapPin size={14} /> {profile.location}</span>
          <span className="meta-divider" />
          <span><GraduationCap size={15} /> Information Systems</span>
        </div>
      </div>
      <div className="hero-visual"><div className="visual-glow" /><DataVisual /></div>
      <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={14} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets <span className="gradient-text">data.</span></>} />
      <div className="about-grid">
        <div className="about-main">
          <div className="about-avatar">{profile.initials}</div>
          <div>
            <h3>Hi, I'm {profile.name}.</h3>
            <p>{profile.about}</p>
          </div>
        </div>
        <div className="about-note">
          <span className="note-icon"><Sparkles size={18} /></span>
          <h3>My approach</h3>
          <p>Start with the right question. Understand the data. Build, evaluate, and communicate solutions that people can use.</p>
          <div className="note-tags"><span>Curiosity</span><span>Critical thinking</span><span>Continuous learning</span></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Machine Learning", "Data Analytics", "Data Engineering", "LLM"];
  const filtered = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Machine Learning") return project.category.includes("MACHINE LEARNING");
    if (filter === "Data Analytics") return project.category.includes("DATA ANALYTICS");
    if (filter === "Data Engineering") return project.category.includes("DATA ENGINEERING");
    return project.category.includes("LLM");
  });
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built on <span className="gradient-text">curiosity.</span></>} description="A selection of academic work and ongoing explorations. Replace the sample links with your actual repositories and demos." />
      <div className="project-toolbar">
        <span className="project-count">{String(filtered.length).padStart(2, "0")} PROJECTS</span>
        <div className="filter-list" aria-label="Filter projects">
          {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "filter-button active" : "filter-button"}>{item}</button>)}
        </div>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => {
          const Icon = iconMap[project.icon] || Code2;
          return (
            <article className={`project-card accent-${project.accent}`} key={project.number}>
              <div className="project-card-top">
                <div className="project-icon"><Icon size={22} /></div>
                <span className="project-number">{project.number}</span>
              </div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-card-bottom">
                <span className="project-status"><span />{project.status}</span>
                <div className="project-card-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open live demo for ${project.title}`} className="project-link-demo"><ExternalLink size={15} /> Live</a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open repository for ${project.title}`}><Github size={17} /><ArrowUpRight size={13} /></a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className="project-disclaimer"><Sparkles size={14} /> Project descriptions are starter content. Update them to reflect work you have actually completed.</p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools to make data <span className="gradient-text">useful.</span></>} description="A growing toolkit for data exploration, modeling, visualization, and building digital solutions." />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={skill.group}>
            <div className="skill-card-head"><span className={`skill-index skill-index-${i}`}>0{i + 1}</span><ChevronRight size={17} /></div>
            <h3>{skill.group}</h3>
            <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
      <p className="skills-note">Only list tools and technologies you can comfortably discuss in an interview.</p>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-wrap section-block" id="experience">
      <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning by <span className="gradient-text">building.</span></>} description="Experiences that are shaping my approach to technology and data." />
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-marker">{i === 0 ? <BriefcaseBusiness size={17} /> : <GraduationCap size={17} />}</div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
        <span className="eyebrow"><span className="eyebrow-dot" /> LET'S CONNECT</span>
        <h2>Have a question or an <span className="gradient-text">opportunity?</span></h2>
        <p>I'm always happy to connect, learn from others, and discuss data-driven ideas.</p>
        <button className="button button-primary contact-email" onClick={copyEmail}>
          <Mail size={17} /> {copied ? "Email copied!" : profile.email} <Send size={15} />
        </button>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ExternalLink size={13} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand footer-brand" href="#home"><span className="brand-mark"><ChartNoAxesCombined size={17} /></span><span>data<span className="brand-accent">folio</span><span className="brand-period">.</span></span></a>
      <p>Designed with curiosity. Built with purpose.</p>
      <a href="#home" className="back-top">Back to top ↑</a>
      <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="background-grid" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}