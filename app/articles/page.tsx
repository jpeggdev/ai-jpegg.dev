import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FeaturedPost } from "@/components/featured-post"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { getAllArticles } from "@/lib/content"

export default function ArticlesPage() {
  const articles = getAllArticles()
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Articles</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          Explore our collection of articles on artificial intelligence, machine learning, and programming.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 mb-8 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-9" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            Machine Learning
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            Deep Learning
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            AI Engineering
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
            Neural Networks
          </Badge>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <FeaturedPost
            key={article.slug}
            title={article.title}
            description={article.description}
            date={article.date}
            category={article.category}
            image={article.image}
            slug={`/articles/${article.slug}`}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}
