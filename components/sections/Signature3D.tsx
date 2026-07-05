'use client'

import { motion } from 'framer-motion'

export function Signature3D() {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-headline font-medium">Visualize Your Future</h2>
        <span className="interactive-tag">scroll · morph</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0f161f] rounded-2xl border border-border h-[220px] overflow-hidden relative flex items-center justify-center"
      >
        <style>{`
          .cube-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .cube {
            width: 110px;
            height: 110px;
            position: relative;
            transform-style: preserve-3d;
            animation: spinCube 16s infinite linear;
          }
          .cube .face {
            position: absolute;
            width: 110px;
            height: 110px;
            background: rgba(70, 130, 255, 0.08);
            border: 1px solid #3b5f9f;
            border-radius: 12px;
            backdrop-filter: blur(6px);
            box-shadow: 0 0 30px rgba(60, 120, 255, 0.05);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .cube .face.front {
            transform: translateZ(55px);
            background: rgba(90, 123, 255, 0.12);
          }
          .cube .face.back {
            transform: rotateY(180deg) translateZ(55px);
          }
          .cube .face.right {
            transform: rotateY(90deg) translateZ(55px);
          }
          .cube .face.left {
            transform: rotateY(-90deg) translateZ(55px);
          }
          .cube .face.top {
            transform: rotateX(90deg) translateZ(55px);
          }
          .cube .face.bottom {
            transform: rotateX(-90deg) translateZ(55px);
          }
          @keyframes spinCube {
            0% {
              transform: rotateX(0) rotateY(0);
            }
            100% {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }
          .signature-3d:hover .face {
            background: rgba(70, 130, 255, 0.15);
            border-color: #5a7bff;
          }
        `}</style>
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
          <span className="mt-3 text-tiny text-muted tracking-wider">
            depth · parallax · rotation
          </span>
        </div>
      </motion.div>
    </section>
  )
}