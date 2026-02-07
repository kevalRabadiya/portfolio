import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Database, Server, Award, MapPin, Calendar, User } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Development",
      description: "Expert in Node.js, Express, and TypeScript for building robust, scalable APIs and microservices",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "AWS Certified Developer",
      description: "Certified AWS Developer Associate with hands-on experience in serverless architecture and cloud solutions",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Architecture",
      description: "Proficient in PostgreSQL, MySQL, MongoDB with advanced ORM tools like Prisma for optimal data management",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "System Design",
      description: "Architected complete systems including scheduled crons, Lambda triggers, and intelligent data pipelines",
    },
  ]

  const stats = [
    { label: "Years of Experience", value: "1.5+" },
    { label: "Projects Completed", value: "3+" },
    { label: "AWS Certifications", value: "1" },
    { label: "Tech Stack Mastery", value: "8+" },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm an <span className="font-semibold text-blue-600 dark:text-blue-400">AWS Certified Backend Engineer</span> with 
            hands-on experience building scalable, cloud-native web applications and REST APIs using modern technologies. 
            Currently contributing at <span className="font-semibold">7Span Internet Private Limited</span>, I specialize in 
            designing high-performance backend architectures, serverless functions, and intelligent data pipelines with 
            verified expertise in AWS cloud services.
          </p>
        </div>

        {/* Personal Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <User className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Background</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Passionate backend engineer focused on building scalable solutions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ahmedabad, India
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Certification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AWS Certified Developer Associate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Expertise */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Node.js", "Express.js", "TypeScript", "JavaScript", 
              "AWS Lambda", "AWS S3", "AWS RDS", "PostgreSQL", "MySQL", 
              "MongoDB", "Prisma", "REST APIs", "Serverless", "Docker", 
              "Git", "CI/CD", "System Design"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to discuss your next project or explore collaboration opportunities?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}
