"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function FooterCTA() {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Let’s Make Your Event Unforgettable</h3>
          <p className="mt-2 text-gray-400">Fill the form and we'll get back to confirm availability & next steps.</p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <form className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
            <input className="px-4 py-3 rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400" placeholder="Your name" />
            <input className="px-4 py-3 rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400" placeholder="Phone or email" />
            <button className="px-6 py-3 rounded-md bg-primary text-gray-900 font-semibold">Contact</button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
