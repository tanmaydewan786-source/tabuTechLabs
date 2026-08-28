import { DetailFooter, DetailGrid, DetailNav } from '../components/DetailLayout.jsx'

export default function DetailPage({ page }) {
  return (
    <main className={`detail-page ${page.className}`}>
      <DetailNav backLabel={page.backLabel} />

      <section className="detail-hero">
        <div className="detail-kicker">{page.kicker}</div>
        <h1>{page.heading}</h1>
        <p>{page.intro}</p>
      </section>

      {page.questions && (
        <section className="research-questions">
          {page.questions.map((question) => (
            <p key={question}>{question}</p>
          ))}
        </section>
      )}

      <DetailGrid items={page.items} />
      <DetailFooter copy={page.footer} action={page.action} />
    </main>
  )
}
