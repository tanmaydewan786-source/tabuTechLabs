import { useState } from 'react'
import Arrow from '../components/Arrow.jsx'
import Brand from '../components/Brand.jsx'
import { linkedInUrl } from '../data/siteContent.jsx'

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
  { name: 'AI & applied research', icon: 'spark' },
  { name: 'QA & test automation', icon: 'check' },
]

const iconPaths = {
  code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
  web: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20c-2.2-2.2-3.4-5-3.4-8S9.8 6.2 12 4Z" /></>,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 6h4M11 18h2" /></>,
  cloud: <><path d="M7.5 18h9a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.3 8.5 4.8 4.8 0 0 0 7.5 18Z" /><path d="m10 13 2-2 2 2M12 11v5" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M17 9h4M3 15h4M17 15h4" /></>,
  chart: <><path d="M5 20V10M12 20V4M19 20v-7M3 20h18" /></>,
  spark: <><path d="M12 3c.5 4.5 2.5 6.5 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5-.5 6.5-2.5 7-7Z" /><path d="M19 16c.2 1.7 1 2.5 2.7 2.7-1.7.2-2.5 1-2.7 2.7-.2-1.7-1-2.5-2.7-2.7 1.7-.2 2.5-1 2.7-2.7Z" /></>,
  check: <><path d="m8 12 2.5 2.5L16 9" /><path d="M20 12a8 8 0 1 1-4.2-7" /><path d="m16 4 2 2 3-3" /></>,
}

function ServiceIcon({ name }) {
  return (
    <span className="service-icon" aria-hidden="true">
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
        <article className="product-card truth-product">
          <div>
            <h3>TruthBubble AI</h3>
            <p>An AI-assisted verification layer for claims, sources, and context.</p>
          </div>
        </article>
        <article className="product-card shivastras-product">
          <div>
            <h3>Shivastras</h3>
            <p>A screen-free wearable concept for meditation and conscious breathing.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function AboutPanel() {
  return (
    <section className="panel-section" aria-labelledby="about-title">
      <p className="panel-kicker">The company</p>
      <h2 id="about-title">About us</h2>
      <p className="panel-statement">
        We are building an India-rooted technology company designed to think
        beyond product cycles and work on problems that will matter for decades.
      </p>
      <div className="about-grid">
        <article>
          <span>Vision</span>
          <p>Build one of India&apos;s most trusted technology companies.</p>
        </article>
        <article>
          <span>Mission</span>
          <p>Create scalable products that solve meaningful problems.</p>
        </article>
        <article>
          <span>How we work</span>
          <p>Long-term thinking, evidence first, and meaningful ownership.</p>
        </article>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <section className="panel-section contact-panel" aria-labelledby="contact-title">
      <p className="panel-kicker">Start a conversation</p>
      <h2 id="contact-title">Contact us</h2>
      <p className="panel-statement">
        Talk to us about software, research, product development, partnerships,
        or an ambitious problem worth solving together.
      </p>
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
