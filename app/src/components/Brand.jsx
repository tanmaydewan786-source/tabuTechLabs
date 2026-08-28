import { routeHref } from '../routing.js'

export default function Brand({ compact = false }) {
  if (compact) {
    return <a href={routeHref('/')} className="detail-brand">Tabutech Labs</a>
  }

  return (
    <a className="brand" href="#top" aria-label="Tabutech labs home">
      <span>Tabutech <b>Labs</b></span>
    </a>
  )
}
