export const linkedInUrl = 'https://www.linkedin.com/in/praveet-chandra-064418b5'

export const portalCards = [
  {
    id: 'lab', number: '01', label: 'Product lines', title: 'Lab', art: 'lab-art', theme: 'lab-card',
    copy: 'Two focused product lines exploring trust, attention and healthier relationships with technology.',
  },
  { id: 'stories', number: '02', label: 'Company', title: 'Stories', art: 'story-art', theme: 'stories-card' },
  {
    id: 'services', number: '03', label: 'Capabilities', title: 'Services', art: 'service-art', theme: 'services-card',
    copy: 'Selected capabilities supporting our product lines and aligned technology partners.',
  },
  {
    id: 'grow', number: '04', label: 'People & partners', title: 'Grow with us', art: 'grow-art', theme: 'grow-card',
    copy: 'Curious minds, responsible ambition and the courage to work on problems without obvious answers.',
  },
]

export const detailPages = {
  truthbubble: {
    title: 'TruthBubble AI', className: 'truth-page', kicker: 'Product line 01 · Early validation & research',
    heading: <>Verification should be<br /><em>as effortless as sharing.</em></>,
    intro: 'TruthBubble AI is exploring a trusted verification layer for the internet—helping people understand claims, sources and context without breaking their flow.',
    items: [
      { title: 'The problem', copy: 'Information moves instantly. Verification remains slow, fragmented and dependent on specialist skills.' },
      { title: 'The direction', copy: 'An AI-assisted, source-grounded experience designed to make checking information immediate and understandable.' },
      { title: 'The ambition', copy: 'Become a verification layer trusted by people, journalists, platforms and the broader information ecosystem.' },
    ],
    footer: 'Interested in research, media or technology partnerships?', action: 'Start a conversation',
  },
  research: {
    title: 'Research', className: 'research-page', backLabel: 'Back home', kicker: 'Research at Tabutech labs',
    heading: <>Start with the problem<br /><em>that refuses to shrink.</em></>,
    intro: 'Our research asks which challenges are becoming more consequential, why existing solutions fall short and where focused technology can create lasting value.',
    questions: ['Which problems are growing faster than the solutions?', 'What challenge, if solved, would improve millions of lives?', 'Why does this problem still exist?', 'What makes this impossible to ignore?'],
    items: [
      { title: 'Trust', copy: 'Improving how people evaluate information, evidence and sources in a high-velocity digital world.' },
      { title: 'Attention', copy: 'Exploring healthier relationships with technology through quiet, intentional and human-centred experiences.' },
      { title: 'Translation', copy: 'Moving from insight to testable product concepts through research, prototyping and market validation.' },
    ],
    footer: 'Research institutions and domain experts are welcome.', action: 'Collaborate with us',
  },
}

export const shivastras = {
  kicker: 'Product line 02 · Research phase',
  heading: <>Technology that knows<br /><em>when to be quiet.</em></>,
  intro: 'Shivastras is exploring a screen-free wearable ring that uses gentle haptic cues to support meditation, conscious breathing and focused moments—without demanding more attention.',
  items: [
    { title: 'Gentle guidance', copy: 'Subtle haptic patterns designed to guide breathing, meditation intervals and moments of intentional focus.' },
    { title: 'Quiet by design', copy: 'A screen-free experience that supports attention without introducing another distracting interface.' },
    { title: 'Meaningful form', copy: 'Exploring premium materials, gemstone integration and a wearable form intended to feel personal—not clinical.' },
  ],
}
