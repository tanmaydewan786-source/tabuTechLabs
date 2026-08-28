import Arrow from './Arrow.jsx'
import Brand from './Brand.jsx'

export function DetailNav({ backLabel = 'Back to Lab' }) {
  return (
    <header className="detail-nav">
      <Brand compact />
      <a href="/" className="back-link">{backLabel} <span aria-hidden="true">←</span></a>
    </header>
  )
}

export function DetailGrid({ items }) {
  return (
    <section className="detail-grid">
      {items.map((item, index) => (
        <article key={item.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h2>{item.title}</h2>
          <p>{item.copy}</p>
        </article>
      ))}
    </section>
  )
}

export function DetailFooter({ copy, action }) {
  return (
    <footer className="detail-footer">
      <p>{copy}</p>
      <a href="https://www.linkedin.com/in/praveet-chandra-064418b5" target="_blank" rel="noreferrer">
        {action} <Arrow />
      </a>
    </footer>
  )
}
