import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Database, Zap } from "lucide-react"

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
      description: "AWS certified with experience in serverless and scalable solutions",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Proficient in MySQL, MongoDB with ORM tools like Prisma",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Achieved 20-30% API response time improvements through optimization",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a dedicated Backend Engineer with a passion for creating scalable, efficient solutions. Currently
            working at 7Span Internet Private Limited, I specialize in building robust APIs, implementing cloud
            architectures, and optimizing system performance.
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
