import Link from "next/link"
import s from "./header.module.css"

export default function Header() {
  return (
    <header className={s.root}>
      <Link href="/" className={s.link}>
        Home
      </Link>
      <Link href="/about" className={s.link}>
        About
      </Link>
      <Link href="/contact" className={s.link}>
        Contact
      </Link>
    </header>
  )
}
