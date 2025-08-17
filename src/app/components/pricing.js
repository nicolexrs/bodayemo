"use client"
import React from 'react'
import { motion } from 'framer-motion'

const packages = [
  { id: 1, title: 'Hosting for 2hrs', price: '100k', features: ['MC for event (2hrs)'] },
  { id: 2, title: 'Hosting 3–5hrs + Games', price: '200k', features: ['MC for event (3–5hrs)', 'Wedding games'] },
  { id: 3, title: 'Full party + After', price: '300k', features: ['MC 4–6hrs', 'Games', 'After party'] },
  { id: 4, title: 'Full + Content', price: '400k', features: ['MC 4–6hrs', 'Games', 'Content Creation'] },
  { id: 5, title: 'Premium Complete', price: '500k', features: ['MC 4–6hrs', 'Games', 'After party', 'Content Creation'] }
]

export default function Pricing3D() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {packages.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 shadow-2xl">
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-gradient-to-tr from-primary/30 to-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-400 mt-1">Perfect for weddings & events</p>
            </div>
            <div className="text-2xl font-bold">{p.price}</div>
          </div>

          <ul className="mt-4 text-gray-300 space-y-1">
            {p.features.map((f, idx) => (
              <li key={idx}>• {f}</li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-4 py-2 rounded-md bg-primary text-gray-900 font-semibold shadow">Book Now</a>
            <button className="px-4 py-2 rounded-md border border-gray-700 text-gray-300">Details</button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
