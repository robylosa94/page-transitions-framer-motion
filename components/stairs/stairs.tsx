import { motion } from "framer-motion"
import s from "./stairs.module.css"
import { expand, opacity } from "./anim"
import clsx from "clsx"

const anim = (variants: any, custom: number | null = null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    custom,
    variants,
  }
}

interface Props {
  className?: string | undefined
  children: React.ReactNode
}

export default function Stairs({ className, children }: Props) {
  const nbOfColumns = 5

  return (
    <div className={clsx(s.root, className)}>
      <motion.div className={s.bg} {...anim(opacity)} />
      <div className={s.cols}>
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div className={s.col} key={i} {...anim(expand, nbOfColumns - i)} />
        })}
      </div>
      {children}
    </div>
  )
}
