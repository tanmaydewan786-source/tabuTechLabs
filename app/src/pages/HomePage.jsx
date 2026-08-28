import { useState } from 'react'
import Arrow from '../components/Arrow.jsx'
import Brand from '../components/Brand.jsx'

const linkedInUrl = 'https://www.linkedin.com/in/praveet-chandra-064418b5'

const navigation = [
  { id: 'capabilities', label: 'What we do' },
  { id: 'products', label: 'Our products' },
  { id: 'about', label: 'About us' },
  { id: 'contact', label: 'Contact us' },
]

const capabilities = [
  { name: 'Software development', icon: 'code' },
  { name: 'Web development', icon: 'web' },
  { name: 'Mobile app development', icon: 'mobile' },
  { name: 'SaaS product development', icon: 'cloud' },
  { name: 'Hardware integration', icon: 'chip' },
  { name: 'Market research', icon: 'chart' },
  { name: 'AI & applied research', icon: 'brain' },
  { name: 'QA & test automation', icon: 'check' },
]

const iconPaths = {
  code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
  web: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20c-2.2-2.2-3.4-5-3.4-8S9.8 6.2 12 4Z" /></>,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 6h4M11 18h2" /></>,
  cloud: <><path d="M7.5 18h9a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.3 8.5 4.8 4.8 0 0 0 7.5 18Z" /><path d="m10 13 2-2 2 2M12 11v5" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M17 9h4M3 15h4M17 15h4" /></>,
  chart: <><path d="M5 20V10M12 20V4M19 20v-7M3 20h18" /></>,
  brain: <><path d="M9.5 4.5A3 3 0 0 0 6.7 8 3.2 3.2 0 0 0 5 13.8 3 3 0 0 0 8.2 18 2.8 2.8 0 0 0 12 19V6.5a2.5 2.5 0 0 0-2.5-2Z" /><path d="M14.5 4.5A3 3 0 0 1 17.3 8a3.2 3.2 0 0 1 1.7 5.8 3 3 0 0 1-3.2 4.2A2.8 2.8 0 0 1 12 19V6.5a2.5 2.5 0 0 1 2.5-2ZM8 10h2M14 8v3h2M8 15h2M14 14h2" /></>,
  check: <><path d="m8 12 2.5 2.5L16 9" /><path d="M20 12a8 8 0 1 1-4.2-7" /><path d="m16 4 2 2 3-3" /></>,
}

function ServiceIcon({ name }) {
  return (
    <span className={`service-icon service-icon--${name}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[name]}
      </svg>
    </span>
  )
}

function CapabilitiesPanel() {
  return (
    <section className="panel-section" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">What we do</h2>
      <div className="capability-list">
        {capabilities.map((capability) => (
          <article key={capability.name}>
            <ServiceIcon name={capability.icon} />
            <h3>{capability.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductsPanel() {
  return (
    <section className="panel-section" aria-labelledby="products-title">
      <h2 id="products-title">Our products</h2>
      <div className="product-showcase">
        <a
          className="product-card truth-product"
          href="https://truthbubbleai.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit the TruthBubble AI website"
        >
          <img
            className="product-image"
            src="/images/products/truthbubble-ai.webp"
            alt="TruthBubble AI verification experience shown on two mobile phones"
          />
          <div className="product-card-copy">
            <div>
              <h3>TruthBubble AI</h3>
              <p>An AI-assisted verification layer for claims, sources, and context.</p>
            </div>
            <Arrow />
          </div>
        </a>
        <a
          className="product-card shivastras-product"
          href="https://shivastras.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit the Shivastras website"
        >
          <img
            className="product-image"
            src="/images/products/shivastras.webp"
            alt="Shivastras wearable ring with a blue gemstone and illuminated internal electronics"
          />
          <div className="product-card-copy">
            <div>
              <h3>Shivastras</h3>
              <p>A screen-free wearable concept for meditation and conscious breathing.</p>
            </div>
            <Arrow />
          </div>
        </a>
      </div>
    </section>
  )
}

function AboutPanel() {
  return (
    <section className="panel-section" aria-labelledby="about-title">
      <h2 id="about-title">About us</h2>
      <p className="panel-statement about-statement">
        Tabutech Labs Pvt Ltd is a technology research and software engineering
        company dedicated to building next-generation artificial intelligence
        solutions, SaaS platforms, and digital applications. We specialize in
        information processing, automated verification systems, and data-driven
        platforms designed to solve real-world problems. Starting with our
        flagship product, Truth Bubble AI, our lab focuses on enhancing digital
        trust, decision-making, and productivity. Tabutech Labs is committed to
        continuous innovation, turning cutting-edge technology into scalable,
        proprietary products that empower users and enterprises.
      </p>
    </section>
  )
}

function ContactPanel() {
  return (
    <section className="panel-section contact-panel" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact us</h2>
      <a className="panel-contact-button" href={linkedInUrl} target="_blank" rel="noreferrer">
        Connect on LinkedIn <Arrow />
      </a>
      <p className="contact-note">Partnerships · Product engineering · Research</p>
    </section>
  )
}

const panels = {
  capabilities: CapabilitiesPanel,
  products: ProductsPanel,
  about: AboutPanel,
  contact: ContactPanel,
}

export default function HomePage() {
  const [activePanel, setActivePanel] = useState('capabilities')
  const ActivePanel = panels[activePanel]

  return (
    <main className="home-shell single-page-shell" id="top">
      <section className="home-intro">
        <header>
          <Brand />
        </header>

        <div className="intro-copy">
          <h1 className="hero-heading">
            <span className="desktop-heading-copy">
              Striving to build<br /><em>the next 100+ years...</em>
            </span>
            <span className="mobile-heading-copy">
              <span>Striving to</span>
              <span>build the</span>
              <em>next 100+ years...</em>
            </span>
          </h1>
          <p className="intro-deck">
            Tabutech Labs is a technology research and engineering
            company, building patent-pending products and delivering the same
            capability to our partners.
          </p>
          <a className="intro-button" href={linkedInUrl} target="_blank" rel="noreferrer">
            Connect with us <Arrow />
          </a>
        </div>

        <footer>
          <div>
            <span>तकनीक से प्रगति</span>
            <small>Progress through technology</small>
          </div>
        </footer>
      </section>

      <section className="content-panel">
        <nav className="panel-navigation" aria-label="Company sections">
          {navigation.map((item) => (
            <button
              className={activePanel === item.id ? 'active' : ''}
              type="button"
              aria-pressed={activePanel === item.id}
              onClick={() => setActivePanel(item.id)}
              key={item.id}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="panel-content" key={activePanel}>
          <ActivePanel />
        </div>
      </section>
    </main>
  )
}
