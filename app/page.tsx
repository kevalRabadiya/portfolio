import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
