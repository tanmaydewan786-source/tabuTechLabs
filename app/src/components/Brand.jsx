export default function Brand({ compact = false }) {
  if (compact) {
    return <a href="/" className="detail-brand">Tabutech labs</a>
  }

  return (
    <a className="brand" href="#top" aria-label="Tabutech labs home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>Tabutech <b>labs</b></span>
    </a>
  )
}
