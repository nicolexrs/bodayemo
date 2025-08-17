"use client"
import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { name: 'Master of Ceremony', icon: '🎤' },
  { name: 'Content Creator', icon: '🎬' },
  { name: 'Video Editor', icon: '🎥' },
  { name: 'Script Writer', icon: '✍️' },
  { name: 'Public Speaking', icon: '🎙️' }
]

export default function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            key={s.name}
            className="bg-gray-800 p-5 rounded-xl shadow-lg border border-transparent hover:border-primary">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 font-semibold">{s.name}</h3>
            <p className="mt-2 text-gray-400 text-sm">Professional and engaging delivery tailored to your event.</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
