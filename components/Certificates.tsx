import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Award } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2026",
      credentialId: "916342cf-857b-49d6-9fc2-cb47c286cf38",
      credlyUrl: "https://www.credly.com/badges/916342cf-857b-49d6-9fc2-cb47c286cf38/public_url",
      description: "Validates expertise in developing and maintaining applications on the AWS platform",
      skills: [
        "AWS Lambda",
        "Amazon DynamoDB",
        "Amazon S3",
        "AWS API Gateway",
        "AWS CloudFormation",
        "AWS CodePipeline",
        "AWS X-Ray",
        "Amazon SQS",
        "Amazon SNS",
        "AWS IAM"
      ],
      examCode: "DVA-C02"
    }
  ]

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional certifications that validate my cloud and technical expertise
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {certificates.map((cert, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      {cert.name}
                    </CardTitle>
                    <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {cert.issueDate}</span>
                      {cert.examCode && (
                        <Badge variant="outline" className="ml-2">
                          {cert.examCode}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Skills Validated:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {cert.credlyUrl && (
                  <div className="flex items-center gap-2">
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Credential on Credly
                    </a>
                  </div>
                )}

                {cert.credentialId && (
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: {cert.credentialId}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
