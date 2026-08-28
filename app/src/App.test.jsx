import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

const capabilities = [
  'Software development',
  'Web development',
  'Mobile app development',
  'SaaS product development',
  'Hardware integration',
  'Market research',
  'AI & applied research',
  'QA & test automation',
]

describe('Tabutech Labs single-page experience', () => {
  it('renders the company introduction and capabilities by default', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /striving to build/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What we do' })).toBeInTheDocument()

    capabilities.forEach((capability) => {
      expect(screen.getByRole('heading', { name: capability })).toBeInTheDocument()
    })
  })

  it('shows one active navigation item at a time', () => {
    render(<App />)
    const navigation = screen.getByRole('navigation', { name: 'Company sections' })
    const whatWeDo = within(navigation).getByRole('button', { name: 'What we do' })
    const products = within(navigation).getByRole('button', { name: 'Our products' })

    expect(whatWeDo).toHaveAttribute('aria-pressed', 'true')
    expect(products).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(products)
    expect(whatWeDo).toHaveAttribute('aria-pressed', 'false')
    expect(products).toHaveAttribute('aria-pressed', 'true')
  })

  it('opens the products panel without changing the page URL', () => {
    render(<App />)
    const initialPath = window.location.pathname

    fireEvent.click(screen.getByRole('button', { name: 'Our products' }))

    expect(screen.getByRole('heading', { name: 'TruthBubble AI' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Shivastras' })).toBeInTheDocument()
    expect(window.location.pathname).toBe(initialPath)
  })

  it('opens the about panel', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'About us' }))

    expect(screen.getByRole('heading', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByText(/most trusted technology companies/i)).toBeInTheDocument()
    expect(screen.getByText(/long-term thinking/i)).toBeInTheDocument()
  })

  it('opens the contact panel with a safe external action', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Contact us' }))
    const contactLink = screen.getByRole('link', { name: /connect on linkedin/i })

    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('target', '_blank')
    expect(contactLink).toHaveAttribute('rel', 'noreferrer')
    expect(contactLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
  })

  it('sets the company document title', () => {
    render(<App />)
    expect(document.title).toBe('Tabutech Labs')
  })
})
