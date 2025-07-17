import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Star } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">AI Projects</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          Explore our collection of open-source AI projects with code examples and tutorials.
        </p>
      </div>

      {/* Featured Project */}
      <section className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Image Generator"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4">Featured Project</Badge>
            </div>
            <div className="p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="px-3 py-1">
                    <Star className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                    4.9/5 Stars
                  </Badge>
                  <Badge variant="secondary">Open Source</Badge>
                </div>
                <CardTitle className="text-2xl">AI Image Generator</CardTitle>
                <CardDescription>
                  A full-stack application that generates images using AI models with a clean React frontend.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 py-4">
                <p className="text-muted-foreground mb-4">
                  This project demonstrates how to build a complete image generation application using the latest AI
                  models. It includes authentication, image storage, and a responsive UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">AI SDK</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
              <CardFooter className="px-0 pt-0 flex justify-between">
                <Button asChild>
                  <Link href="/projects/ai-image-generator">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="AI Chatbot"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>AI Chatbot with Memory</CardTitle>
              <CardDescription>
                A conversational AI chatbot that remembers context and previous interactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">AI SDK</Badge>
                <Badge variant="outline">Next.js</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                This project demonstrates how to build a chatbot with memory using the AI SDK and vector databases.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/ai-chatbot">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Text Summarizer"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Text Summarization API</CardTitle>
              <CardDescription>An API that summarizes long articles and documents using AI.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Express</Badge>
                <Badge variant="outline">AI SDK</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Learn how to build a text summarization API that can process long documents and generate concise
                summaries.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/text-summarizer">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Sentiment Analysis"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Sentiment Analysis Dashboard</CardTitle>
              <CardDescription>
                A dashboard for analyzing sentiment in customer feedback and social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">FastAPI</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                This project shows how to build a sentiment analysis dashboard with a React frontend and Python backend.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/sentiment-analysis">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="AI Code Assistant"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>AI Code Assistant</CardTitle>
              <CardDescription>A VS Code extension that helps developers write better code with AI.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">VS Code API</Badge>
                <Badge variant="outline">AI SDK</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Learn how to build a VS Code extension that uses AI to provide code suggestions and improvements.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/ai-code-assistant">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Document QA"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Document QA System</CardTitle>
              <CardDescription>A system that answers questions based on uploaded documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">AI SDK</Badge>
                <Badge variant="outline">Vector DB</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                This project demonstrates how to build a document QA system that can answer questions based on the
                content of uploaded documents.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/document-qa">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="AI Music Generator"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>AI Music Generator</CardTitle>
              <CardDescription>A web app that generates music based on text prompts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Web Audio API</Badge>
                <Badge variant="outline">AI SDK</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Learn how to build a music generation application that creates original music based on text
                descriptions.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/projects/ai-music-generator">View Project</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
