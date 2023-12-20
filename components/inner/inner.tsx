import { motion } from "framer-motion"
import { opacity, perspective, slide } from "./anim"
import s from "./inner.module.css"
import Header from "@/components/header"
import clsx from "clsx"

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

export default function Inner({ className, children }: Props) {
  return (
    <div className={clsx(s.root, className)}>
      <motion.div className={s.slide} {...anim(slide)}></motion.div>
      <motion.div className={s.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <Header />
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
