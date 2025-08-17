"use client"
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Points, PointMaterial, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

function FloatingText() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = Math.sin(clock.elapsedTime / 4) * 0.12
    ref.current.position.y = Math.sin(clock.elapsedTime / 2) * 0.15
  })

  return (
    <group ref={ref}>
      <Text
        fontSize={1}
        maxWidth={6}
        lineHeight={1}
        letterSpacing={-0.05}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle">
        Bodayemo
        <meshBasicMaterial toneMapped={false} attach="material" color={'#00E6A8'} />
      </Text>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.24}
        anchorX="center"
        anchorY="middle">
        Entertainment • MC • Content Creator
        <meshBasicMaterial toneMapped={false} attach="material" color={'#a7f3d0'} />
      </Text>
    </group>
  )
}

function ParticleField() {
  // simple random points
  const points = new Array(400).fill().map(() => [
    (Math.random() - 0.5) * 18,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 6
  ])

  return (
    <Points limit={400}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={new Float32Array(points.flat())}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial size={0.012} sizeAttenuation depthWrite={false} color="#39FFB0" />
    </Points>
  )
}

export default function Hero3D() {
  return (
    <section className="w-full h-[76vh] relative">
      <div className="absolute inset-0 pointer-events-none z-0"></div>

      <div className="container px-6 h-full relative z-10 flex items-center">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold">
            Bodayemo Entertainment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-300 max-w-lg">
            Master of Ceremony • Content Creator • Video Editor • Script Writer • Public Speaking
          </motion.p>

          <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <a className="bg-primary text-gray-900 px-5 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition" href="#contact">Book Me</a>
            <a className="border border-gray-700 px-5 py-3 rounded-md text-gray-300 hover:border-white transition" href="#packages">Packages</a>
          </motion.div>
        </div>

        <div className="hidden md:block w-1/2 h-[60vh]">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <Suspense fallback={null}>
              <FloatingText />
              <ParticleField />
            </Suspense>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
