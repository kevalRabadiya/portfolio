import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Database, Server, } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Development",
      description: "Expert in Node.js, Express, and TypeScript for building robust APIs",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Architecture",
      description: "Experienced in building serverless and scalable solutions using AWS services.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Proficient in MySQL, MongoDB with ORM tools like Prisma",
    },
    {
    icon: <Server className="h-6 w-6" />,
    title: "System Design",
    description: "Designed complete project architecture including scheduled crons, Lambda triggers, and data pipelines to store and process analytics in databases.",
  },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I’m a Backend Engineer with hands-on experience building scalable, cloud-native web applications and REST APIs using Node.js, TypeScript, MySQL, and AWS. Currently contributing at 7Span, a social media automation platform, I specialize in designing high-performance backend architectures, serverless functions, and intelligent data pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
