import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import './styles/site.css'

export default function App() {
  useEffect(() => {
    document.title = 'Tabutech Labs'
  }, [])

  return <HomePage />
}
