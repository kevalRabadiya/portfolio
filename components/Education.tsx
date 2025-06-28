import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Strong academic foundation in computer engineering</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      Bachelor of Engineering in Computer Engineering
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      Darshan Institute of Engineering and Technology
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <Award className="h-3 w-3 mr-1" />
                    CGPA: 8.70
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2020 – 2024
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Rajkot, India
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Coursework</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Database Management Systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Software Engineering
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Computer Networks
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Operating Systems
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Academic Highlights</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Graduated with Distinction (8.70 CGPA)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Strong foundation in programming
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Practical project experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Industry-relevant curriculum
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
