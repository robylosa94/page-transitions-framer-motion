import Header from "@/components/header"
import "@/styles/globals.css"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}
