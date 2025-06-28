import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "7Span Internet Private Limited",
      position: "Backend Engineer",
      duration: "Jan 2024 – Present",
      location: "Ahmedabad",
      type: "Full-time",
      projects: [
        {
          name: "Dimboo - Social Media Posts Planner",
          description:
            "A comprehensive social media management platform for brands to publish and track content across POS profiles",
          technologies: ["Node.js", "Express", "TypeScript", "MySQL", "Prisma", "AWS"],
          achievements: [
            "Optimized API response time by 20-30% through performance tuning and database optimizations",
            "Implemented serverless architecture using AWS Lambda, reducing infrastructure costs",
            "Designed secure media upload solutions with AWS S3 for high-volume digital assets",
            "Developed interactive analytics dashboards for actionable insights",
            "Set up automated cron jobs for analytics storage and reporting",
            "Configured AWS CloudWatch for real-time monitoring and tracing",
          ],
        },
      ],
    },
    {
      company: "7Span Internet Private Limited",
      position: "Backend Engineer Intern",
      duration: "Jul 2023 – Dec 2023",
      location: "Ahmedabad",
      type: "Internship",
      projects: [
        {
          name: "Ride Booking App",
          description: "REST API backend for ride booking application handling high-volume requests",
          technologies: ["Node.js", "MongoDB", "Twilio", "Stripe", "AWS", "Docker"],
          achievements: [
            "Developed REST API handling 100+ requests per minute",
            "Integrated Google Maps API for real-time distance calculation",
            "Achieved 99.9% uptime with EC2 and Docker deployment",
            "Enhanced trip accuracy by 20% through location services",
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Building scalable solutions and driving innovation in backend development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.position}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>{exp.type}</Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
