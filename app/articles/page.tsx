import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FeaturedPost } from "@/components/featured-post"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function ArticlesPage() {
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
        <FeaturedPost
          title="Implementing Attention Mechanisms"
          description="A detailed look at how attention mechanisms work in neural networks with code examples."
          date="July 3, 2025"
          category="Deep Learning"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/implementing-attention-mechanisms"
        />
        <FeaturedPost
          title="Fine-tuning LLMs for Specific Tasks"
          description="How to fine-tune large language models for domain-specific applications."
          date="June 30, 2025"
          category="AI Engineering"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/fine-tuning-llms"
        />
        <FeaturedPost
          title="Building AI-Powered Applications with the AI SDK"
          description="Learn how to use the AI SDK to build applications with AI capabilities."
          date="June 28, 2025"
          category="AI Engineering"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/ai-sdk-applications"
        />
        <FeaturedPost
          title="Reinforcement Learning from Human Feedback"
          description="Understanding how RLHF works and how it's used to train modern AI systems."
          date="June 25, 2025"
          category="Machine Learning"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/reinforcement-learning-human-feedback"
        />
        <FeaturedPost
          title="Optimizing Neural Networks for Production"
          description="Techniques for making neural networks faster and more efficient in production environments."
          date="June 22, 2025"
          category="Neural Networks"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/optimizing-neural-networks"
        />
        <FeaturedPost
          title="Understanding Embeddings in AI"
          description="A comprehensive guide to vector embeddings and their applications in AI."
          date="June 20, 2025"
          category="AI Engineering"
          image="/placeholder.svg?height=200&width=400"
          slug="/articles/understanding-embeddings"
        />
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
