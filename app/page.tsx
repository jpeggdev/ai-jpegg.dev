import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Code, Cpu, Sparkles } from "lucide-react"
import { FeaturedPost } from "@/components/featured-post"
import { NewsletterForm } from "@/components/newsletter-form"
import { CodeSnippet } from "@/components/code-snippet"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-background/80 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/10 via-transparent to-teal-500/10" />
        <div className="container relative space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="px-4 py-1 text-base" variant="secondary">
              <Sparkles className="mr-1 h-3.5 w-3.5" />A Programmer's Perspective on AI
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-green-500 via-foreground to-teal-400 bg-clip-text text-transparent">
              Decoding AI for Developers
            </h1>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              Exploring artificial intelligence through code, algorithms, and practical implementations. Written by
              developers, for developers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/articles">
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
          <p className="text-muted-foreground">
            The latest insights on AI development, machine learning, and programming.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeaturedPost
            title="Building Your First Neural Network in Python"
            description="A step-by-step guide to implementing a neural network from scratch using NumPy."
            date="July 10, 2025"
            category="Machine Learning"
            image="/placeholder.svg?height=200&width=400"
            slug="/articles/building-your-first-neural-network"
          />
          <FeaturedPost
            title="Understanding Transformer Architecture"
            description="Deep dive into the architecture that powers modern language models like GPT-4."
            date="July 8, 2025"
            category="Deep Learning"
            image="/placeholder.svg?height=200&width=400"
            slug="/articles/understanding-transformer-architecture"
          />
          <FeaturedPost
            title="Practical Guide to Prompt Engineering"
            description="Learn effective techniques to craft prompts that get the best results from AI models."
            date="July 5, 2025"
            category="AI Engineering"
            image="/placeholder.svg?height=200&width=400"
            slug="/articles/practical-guide-to-prompt-engineering"
          />
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/articles">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="container">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Code in Action</h2>
          <p className="text-muted-foreground">Practical examples of AI implementation in code.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <CodeSnippet
            title="Sequential AI Generations with AI SDK"
            language="typescript"
            code={`import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

async function sequentialActions() {
  // Generate blog post ideas
  const ideasGeneration = await generateText({
    model: openai('gpt-4o'),
    prompt: 'Generate 10 ideas for a blog post about AI.',
  });
  
  // Pick the best idea
  const bestIdeaGeneration = await generateText({
    model: openai('gpt-4o'),
    prompt: \`Here are some blog post ideas:
\${ideasGeneration}
Pick the best idea from the list above.\`,
  });
  
  console.log('Best Idea:', bestIdeaGeneration);
}`}
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Understanding the Code</h3>
            <p>
              This example demonstrates how to create sequential AI generations using the AI SDK. The output of one
              generation becomes the input for the next, allowing for more complex AI workflows.
            </p>
            <p>
              This pattern is particularly useful when you need to break down complex tasks into smaller, more
              manageable steps that build upon each other.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/articles/sequential-generations">
                  Read Full Tutorial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="flex flex-col gap-2 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why CodeAI?</h2>
          <p className="text-muted-foreground mx-auto max-w-[42rem]">
            We focus on the practical aspects of AI from a developer's perspective, with code examples and real-world
            applications.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Code-First Approach</CardTitle>
              <CardDescription>
                Every concept is explained with practical code examples that you can run and modify.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Deep Technical Insights</CardTitle>
              <CardDescription>
                We go beyond the surface to explain the underlying algorithms and mathematics.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Cpu className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Practical Applications</CardTitle>
              <CardDescription>
                Learn how to apply AI in real-world projects with our step-by-step tutorials.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container">
        <div className="rounded-lg border bg-card p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground">
                Get the latest articles, tutorials, and resources delivered to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
