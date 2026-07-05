'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Particles
    const geometry = new THREE.BufferGeometry()
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      colors[i] = Math.random() * 0.5 + 0.5
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Animation
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX = (event.clientX - rect.left) / rect.width - 0.5
      mouseY = (event.clientY - rect.top) / rect.height - 0.5
    }

    containerRef.current.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      if (particles) {
        particles.rotation.x += 0.0005
        particles.rotation.y += 0.001
        particles.rotation.x += mouseY * 0.0005
        particles.rotation.y += mouseX * 0.0005
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeEventListener('mousemove', handleMouseMove)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="bg-[#121a22] rounded-2xl border border-border h-[260px] overflow-hidden relative"
    >
      <div className="absolute bottom-2 right-3 text-tiny text-muted">particles · morph</div>
    </div>
  )
}