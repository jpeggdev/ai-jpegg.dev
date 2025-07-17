import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Code, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">About CodeAI</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          Learn more about our mission, team, and the story behind CodeAI.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At CodeAI, we believe that artificial intelligence should be accessible to all developers. Our mission is
              to demystify AI concepts and provide practical, code-first resources that help programmers implement AI
              solutions in their projects.
            </p>
            <p className="text-muted-foreground mb-4">
              We focus on the intersection of programming and AI, offering tutorials, articles, and resources that
              bridge the gap between theoretical concepts and practical implementation.
            </p>
            <p className="text-muted-foreground">
              Whether you're a seasoned AI engineer or just starting your journey, CodeAI is here to support your
              learning and development.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="CodeAI Mission" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-0">
              <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=160&width=320" alt="Alex Chen" fill className="object-cover" />
              </div>
              <CardTitle>Alex Chen</CardTitle>
              <CardDescription>Founder & AI Engineer</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Alex has over 10 years of experience in machine learning and AI development. Previously worked at Google
                AI and OpenAI.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=160&width=320" alt="Maya Rodriguez" fill className="object-cover" />
              </div>
              <CardTitle>Maya Rodriguez</CardTitle>
              <CardDescription>Lead Developer & Writer</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Maya specializes in making complex AI concepts accessible through code. She has contributed to several
                open-source ML libraries.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=160&width=320" alt="David Kim" fill className="object-cover" />
              </div>
              <CardTitle>David Kim</CardTitle>
              <CardDescription>AI Researcher & Educator</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                David holds a PhD in Computer Science with a focus on deep learning. He's passionate about teaching AI
                concepts to developers.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="CodeAI Story" fill className="object-cover" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              CodeAI began in 2023 when a group of AI engineers and developers recognized a gap in the resources
              available for programmers looking to implement AI in their projects.
            </p>
            <p className="text-muted-foreground mb-4">
              While there were plenty of theoretical resources and academic papers, there was a lack of practical,
              code-first content that showed developers how to actually implement these concepts.
            </p>
            <p className="text-muted-foreground">
              We started CodeAI to bridge this gap, providing tutorials, articles, and resources that focus on the
              practical implementation of AI concepts, with real code examples and projects that developers can use in
              their own work.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Code-First Learning</CardTitle>
              <CardDescription>
                We believe in learning by doing. Every concept we teach is accompanied by practical code examples.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>
                We strive to make complex AI concepts accessible to developers of all skill levels.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-primary mb-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                We foster a supportive community where developers can learn, share, and grow together.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Have questions or want to collaborate? Reach out to us.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>contact@codeai.example.com</span>
                </div>
                <div className="flex items-center">
                  <Twitter className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>@CodeAI</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>github.com/codeai</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Be part of our growing community of AI developers and enthusiasts. Subscribe to our newsletter, follow us
              on social media, and join our Discord server.
            </p>
            <div className="space-y-4">
              <Button asChild>
                <Link href="/newsletter">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex space-x-2">
                <Badge variant="outline" className="px-4 py-2">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M9 17l6-5-6-5"></path>
                  </svg>
                  Discord
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
