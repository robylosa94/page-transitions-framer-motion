"use client"

import { useEffect, useState } from "react"
import s from "./curve.module.css"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { curve, text, translate } from "./anim"
import clsx from "clsx"

const routes: any = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
}

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  }
}

interface Props {
  className?: string | undefined
  children: React.ReactNode
}

export default function Curve({ className, children }: Props) {
  const router = useRouter()

  const [dimensions, setDimensions] = useState<any>({
    width: null,
    height: null,
  })

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    resize()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className={clsx(s.root, className)}>
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className={s.bg} />
      <motion.p className={s.route} {...anim(text)}>
        {routes[router.route]}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  )
}

interface SVGProps {
  height: number
  width: number
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
      M0 300 
      Q${width / 2} 0 ${width} 300
      L${width} ${height + 300}
      Q${width / 2} ${height + 600} 0 ${height + 300}
      L0 0
  `

  const targetPath = `
      M0 300
      Q${width / 2} 0 ${width} 300
      L${width} ${height}
      Q${width / 2} ${height} 0 ${height}
      L0 0
  `

  return (
    <motion.svg {...anim(translate)} className={s.svg}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  )
}
