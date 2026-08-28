import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderAt(path) {
  window.history.replaceState({}, '', path)
  return render(<App />)
}

describe('Tabutech labs routes', () => {
  it('renders the homepage and all portal sections', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: /striving to build/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lab' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Grow with us' })).toBeInTheDocument()
  })

  it.each([
    ['/truthbubble-ai', /verification should be/i, 'TruthBubble AI · Tabutech labs'],
    ['/shivastras', /technology that knows/i, 'Shivastras · Tabutech labs'],
    ['/research', /start with the problem/i, 'Research · Tabutech labs'],
  ])('renders the %s route directly', async (path, heading, title) => {
    renderAt(path)

    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    await waitFor(() => expect(document.title).toBe(title))
  })

  it('navigates between internal pages without a reload', async () => {
    renderAt('/')
    fireEvent.click(screen.getByRole('link', { name: /truthbubble ai/i }))

    expect(window.location.pathname).toBe('/truthbubble-ai')
    expect(screen.getByRole('heading', { name: /verification should be/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link', { name: /back to lab/i }))
    expect(window.location.pathname).toBe('/')
    expect(screen.getByRole('heading', { name: /striving to build/i })).toBeInTheDocument()
  })

  it('keeps external contact links safe and outside client routing', () => {
    renderAt('/truthbubble-ai')
    const contactLink = screen.getByRole('link', { name: /start a conversation/i })

    expect(contactLink).toHaveAttribute('target', '_blank')
    expect(contactLink).toHaveAttribute('rel', 'noreferrer')
    expect(contactLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
  })
})
