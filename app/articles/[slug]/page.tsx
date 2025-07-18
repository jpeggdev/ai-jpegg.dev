import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeft, Share2 } from "lucide-react"
import { CodeSnippet } from "@/components/code-snippet"
import { CommentSection } from "@/components/comment-section"
import { getArticleBySlug } from "@/lib/content"
import { notFound } from "next/navigation"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/articles">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        <div className="flex items-center gap-2 mb-4">
          <Badge>{article.category}</Badge>
          <span className="text-sm text-muted-foreground flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {article.date}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">{article.title}</h1>

        <p className="text-xl text-muted-foreground mb-6">{article.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <span className="font-medium text-sm">{article.author.charAt(0)}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{article.author}</p>
              <p className="text-xs text-muted-foreground">AI Engineer</p>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share article</span>
          </Button>
        </div>
      </div>

      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="not-prose mt-8 flex items-center justify-between border-t border-border pt-8">
          <div>
            <h3 className="text-lg font-semibold">Share this article</h3>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </div>
          <div>
            <Button asChild>
              <Link href="/articles">
                More Articles
                <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Comments Section */}
      <div className="mt-16 border-t border-border pt-8">
        <CommentSection articleSlug={slug} />
      </div>
    </article>
  )
}
