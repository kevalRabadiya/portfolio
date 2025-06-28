"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react"

interface BlogPost {
  title: string
  description: string
  link: string
  pubDate: string
  categories: string[]
  readTime?: string
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const mockPosts: BlogPost[] = [
    {
      title: "Fan-out Architectures in System Design: Scalability Through Smart Distribution",
      description:
        "As systems scale and user demands grow, developers often face a critical challenge: how to handle a single event that must trigger multiple downstream processes simultaneously. This is where fan-out architectures step in.",
      link: "https://medium.com/@kevalrabadiya27/fan-out-architectures-in-system-design-scalability-through-smart-distribution-aff650202378",
      pubDate: "2025-06-29",
      categories: ["System Design", "AWS", "Backend", "Architecture", "Scalability"],
      readTime: "3 min read",
    },
    {
      title: "Deploying a Node.js App on AWS with PM2, NGINX, and SSL",
      description:
        "Learn how to deploy a Node.js application on AWS using PM2 for process management, NGINX as a reverse proxy, and Let's Encrypt for SSL.",
      link: "https://medium.com/@kevalrabadiya27/deploying-a-node-js-app-on-aws-with-pm2-nginx-and-ssl-35498c9de7b1",
      pubDate: "2025-02-25",
      categories: ["AWS", "PM2", "Nginx", "SSL", "NodeJS"],
      readTime: "3 min read",
    },
    {
      title: "Secure Image Uploads to Amazon S3 with Presigned URLs: A Step-by-Step Guide",
      description:
        "In this blog, we will explore how to securely upload images to Amazon S3 using presigned URLs. This method allows clients to directly upload files to S3 without exposing your server credentials or making your server handle the file upload",
      link: "https://medium.com/@kevalrabadiya27/secure-image-uploads-to-amazon-s3-with-presigned-urls-a-step-by-step-guide-2100ad0f1956",
      pubDate: "2024-09-09",
      categories: ["AWS S3", "NodeJS", "Image Upload", "Presigned URLs"],
      readTime: "4 min read",
    },
  ]

  useEffect(() => {
    // Simulate API call to fetch Medium articles
    const fetchPosts = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate loading
        setPosts(mockPosts)
      } catch (err) {
        setError("Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing insights about backend development, cloud architecture, and software engineering best practices
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
            <Button asChild variant="outline">
              <a href="https://medium.com/@kevalrabadiya27" target="_blank" rel="noopener noreferrer">
                Visit Medium Profile
              </a>
            </Button>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Blog Posts Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm working on some exciting articles about backend development and cloud architecture. Stay tuned for
              insights and tutorials!
            </p>
            <Button asChild>
              <a href="https://medium.com/@kevalrabadiya27" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Follow on Medium
              </a>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.slice(0, 6).map((post, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.pubDate)}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 3).map((category, catIndex) => (
                        <Badge key={catIndex} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <a href="https://medium.com/@kevalrabadiya27" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View All Posts on Medium
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
