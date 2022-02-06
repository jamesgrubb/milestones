import React, { Suspense } from 'react'
import { Canvas, Box } from 'react-three-fiber'
import Model from '../public/images/Dancing'
import { OrbitControls } from '@react-three/drei'

const Dance = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
    </Canvas>
  )
}

export default Dance
