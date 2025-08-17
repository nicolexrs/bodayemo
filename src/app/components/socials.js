"use client"

import React from 'react'
import { motion } from 'framer-motion'

const socials = [
  { name: 'Instagram', url: 'https://instagram.com/Bodayemo', icon: '📸' },
  { name: 'YouTube', url: 'https://youtube.com/BodayemoTv', icon: '▶️' },
  { name: 'WhatsApp', url: 'https://wa.me/your-number', icon: '💬' }
]

export default function SocialBar(){
  return (
    <div className="flex items-center gap-4">
      {socials.map((s,i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank" rel="noreferrer"
          whileHover={{ rotate: 6, scale: 1.06 }}
          className="bg-gray-800 p-3 rounded-lg flex items-center gap-3 border border-gray-700"
        >
          <div className="text-xl">{s.icon}</div>
          <div>
            <div className="text-sm font-medium">{s.name}</div>
            <div className="text-xs text-gray-400">/{s.name === 'YouTube' ? 'BodayemoTv' : 'Bodayemo'}</div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
