import Arrow from '../components/Arrow.jsx'
import Brand from '../components/Brand.jsx'
import { linkedInUrl, portalCards } from '../data/siteContent.jsx'
import { routeHref } from '../routing.js'

const services = [
  'Software development',
  'App development',
  'Hardware integrations',
  'Market research',
  'Marketing services',
]

function CardArt({ type }) {
  const shapeCount = type === 'service-art' || type === 'grow-art' ? 4 : 3

  return (
    <div className={`card-art ${type}`} aria-hidden="true">
      {Array.from({ length: shapeCount }, (_, index) => <i key={index} />)}
    </div>
  )
}

function LabLinks() {
  return (
    <div className="product-links">
      <a href={routeHref('/truthbubble-ai')}>
        <b>TruthBubble AI</b>
        <small>Trust in digital information</small>
        <Arrow />
      </a>
      <a href={routeHref('/shivastras')}>
        <b>Shivastras</b>
        <small>Mindful wearable technology</small>
        <Arrow />
      </a>
    </div>
  )
}

function StoryLinks() {
  return (
    <>
      <div className="mission-lines">
        <p><b>Vision</b> Build one of India’s most trusted technology companies.</p>
        <p><b>Mission</b> Create scalable products that solve meaningful problems.</p>
      </div>
      <div className="story-actions">
        <a href={routeHref('/research')}>Research <Arrow /></a>
        <a href="#contact">Contact <Arrow /></a>
      </div>
      <div className="social-row" aria-label="Social channels">
        <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
        <span aria-label="Instagram — profile link pending" title="Instagram link pending">ig</span>
        <span aria-label="Reddit — profile link pending" title="Reddit link pending">rd</span>
        <span aria-label="Kickstarter — profile link pending" title="Kickstarter link pending">ks</span>
      </div>
    </>
  )
}

function ServicesList() {
  return (
    <ul className="service-list">
      {services.map((service) => <li key={service}>{service}</li>)}
    </ul>
  )
}

function GrowLinks() {
  return (
    <>
      <div className="culture-tags">
        <span>Long-term thinking</span>
        <span>Evidence first</span>
        <span>Ownership</span>
      </div>
      <div className="grow-actions">
        <a href="#contact">Opportunities <Arrow /></a>
        <a href="#contact">Partnerships <Arrow /></a>
      </div>
    </>
  )
}

const cardContent = {
  lab: LabLinks,
  stories: StoryLinks,
  services: ServicesList,
  grow: GrowLinks,
}

function PortalCard({ card }) {
  const Content = cardContent[card.id]

  return (
    <article className={`portal-card ${card.theme}`} id={card.id}>
      <div className="card-top">
        <span>{card.number} · {card.label}</span>
        <Arrow />
      </div>
      <CardArt type={card.art} />
      <div className="card-copy">
        <h2>{card.title}</h2>
        {card.copy && <p>{card.copy}</p>}
        <Content />
      </div>
    </article>
  )
}

export default function HomePage() {
  return (
    <main className="home-shell" id="top">
      <section className="home-intro">
        <header>
          <Brand />
          <span className="company-label">Indian technology company · 2026</span>
        </header>

        <div className="intro-copy">
          <h1>Striving to build for<br /><em>the next 100+ years...</em></h1>
          <p className="intro-deck">
            Tabutech Labs is an Indian technology research and engineering
            company, building patent-pending products and delivering the same
            capability to our partners.
          </p>
          <a
            className="intro-button"
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
          >
            Connect with us <Arrow />
          </a>
        </div>

        <footer id="contact">
          <div>
            <span>तकनीक से प्रगति</span>
            <small>Progress through technology</small>
          </div>
        </footer>
      </section>

      <section className="portal-grid" aria-label="Explore Tabutech Labs">
        {portalCards.map((card) => <PortalCard card={card} key={card.id} />)}
      </section>
    </main>
  )
}
