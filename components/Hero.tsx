"use client"

import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/keval-profile.jpg"
                alt="Keval Rabadiya"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Keval Rabadiya
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Software Engineer
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Backend Developer
              </Badge>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate Backend Engineer specializing in Node.js, AWS, and scalable web applications. Currently
              building innovative solutions at 7Span Internet Private Limited.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download="Keval_Rabadiya_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/KevalRabadiya"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/keval-rabadiya"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://medium.com/@kevalrabadiya27"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
