'use client'

import { useState } from 'react'

type CoreValue = {
  title: string
  desc: string
  icon: string
}

type CoreValuesOrbitProps = {
  values: CoreValue[]
}

export default function CoreValuesOrbit({ values }: CoreValuesOrbitProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedValue = values[selectedIndex]

  return (
    <div className="core-values-orbit" aria-label="Al Barakh core values">
      <div className="core-values-orbit-center" aria-live="polite">
        <span className="core-values-orbit-center-mark">AL BARAKAH</span>
        <span className="core-values-orbit-center-label">OUR PRINCIPLES</span>
        <span className="core-values-orbit-center-icon" aria-hidden="true">{selectedValue.icon}</span>
        <h4>{selectedValue.title}</h4>
        <p>{selectedValue.desc}</p>
      </div>

      <div className="core-values-orbit-items">
        {values.map((value, index) => (
          <button
            key={value.title}
            type="button"
            className={`core-value-node${selectedIndex === index ? ' is-selected' : ''}`}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setSelectedIndex(index)}
            onFocus={() => setSelectedIndex(index)}
            aria-pressed={selectedIndex === index}
          >
            <span className="core-value-node-icon" aria-hidden="true">{value.icon}</span>
            <span className="core-value-node-title">{value.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
