import { DetailFooter, DetailGrid, DetailNav } from '../components/DetailLayout.jsx'
import { shivastras } from '../data/siteContent.jsx'

export default function ShivastrasPage() {
  return (
    <main className="detail-page shivastras-page">
      <DetailNav />

      <section className="detail-hero">
        <div className="detail-kicker">{shivastras.kicker}</div>
        <h1>{shivastras.heading}</h1>
        <p>{shivastras.intro}</p>

        <div className="ring-visual" aria-hidden="true">
          <span className="ring-band" />
          <span className="ring-stone" />
          <span className="ring-pulse pulse-one" />
          <span className="ring-pulse pulse-two" />
        </div>
      </section>

      <section className="shivastras-position">
        <p>Not another screen. Not another stream of notifications.</p>
        <strong>A quieter relationship with technology.</strong>
      </section>

      <DetailGrid items={shivastras.items} />

      <section className="research-status">
        <div>
          <span>Current phase</span>
          <h2>Research, feasibility and validation</h2>
        </div>
        <p>
          The concept is being evaluated through user research, engineering
          feasibility and product validation. Features and materials may evolve
          as the work progresses.
        </p>
      </section>

      <DetailFooter
        copy="Interested in wearable technology, research or product partnerships?"
        action="Start a conversation"
      />
    </main>
  )
}
