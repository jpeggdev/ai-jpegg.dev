import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeft, Share2 } from "lucide-react"
import { CodeSnippet } from "@/components/code-snippet"
import { CommentSection } from "@/components/comment-section"

// This is a mock function to simulate fetching article data
function getArticleData(slug: string) {
  // In a real app, this would fetch data from an API or database
  return {
    title: "Building Your First Neural Network in Python",
    description: "A step-by-step guide to implementing a neural network from scratch using NumPy.",
    date: "July 10, 2025",
    author: "Alex Chen",
    category: "Machine Learning",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Neural networks are the backbone of modern AI systems. In this tutorial, we'll build a simple neural network from scratch using only NumPy, to help you understand the fundamental concepts.</p>
      
      <h2>Understanding the Basics</h2>
      <p>Before we dive into the code, let's understand what a neural network is. At its core, a neural network is a series of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics how the human brain operates.</p>
      
      <h2>Setting Up Our Environment</h2>
      <p>First, let's make sure we have NumPy installed and import the necessary libraries:</p>
      
      <h2>Implementing the Neural Network</h2>
      <p>Now, let's implement a simple feedforward neural network with one hidden layer:</p>
      
      <h2>Training the Network</h2>
      <p>With our neural network class defined, we can now train it on some data:</p>
      
      <h2>Testing Our Neural Network</h2>
      <p>Let's test our neural network on some new data to see how well it performs:</p>
      
      <h2>Visualizing the Results</h2>
      <p>It's always helpful to visualize the results of our neural network to better understand its performance:</p>
      
      <h2>Conclusion</h2>
      <p>In this tutorial, we've built a simple neural network from scratch using NumPy. This should give you a solid understanding of how neural networks work under the hood. In future articles, we'll explore more advanced topics like convolutional neural networks and recurrent neural networks.</p>
    `,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)

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
        <p>
          Neural networks are the backbone of modern AI systems. In this tutorial, we'll build a simple neural network
          from scratch using only NumPy, to help you understand the fundamental concepts.
        </p>

        <h2>Understanding the Basics</h2>
        <p>
          Before we dive into the code, let's understand what a neural network is. At its core, a neural network is a
          series of algorithms that attempts to recognize underlying relationships in a set of data through a process
          that mimics how the human brain operates.
        </p>

        <h2>Setting Up Our Environment</h2>
        <p>First, let's make sure we have NumPy installed and import the necessary libraries:</p>

        <CodeSnippet
          title="Setting up the environment"
          language="python"
          code={`import numpy as np
import matplotlib.pyplot as plt

# Set random seed for reproducibility
np.random.seed(42)`}
        />

        <h2>Implementing the Neural Network</h2>
        <p>Now, let's implement a simple feedforward neural network with one hidden layer:</p>

        <CodeSnippet
          title="Neural Network Implementation"
          language="python"
          code={`class NeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize weights and biases
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))
        
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    
    def sigmoid_derivative(self, x):
        return x * (1 - x)
    
    def forward(self, X):
        # Forward propagation
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.sigmoid(self.z2)
        return self.a2
    
    def backward(self, X, y, output, learning_rate):
        # Backward propagation
        m = X.shape[0]
        
        # Calculate gradients
        dz2 = output - y
        dW2 = np.dot(self.a1.T, dz2) / m
        db2 = np.sum(dz2, axis=0, keepdims=True) / m
        
        dz1 = np.dot(dz2, self.W2.T) * self.sigmoid_derivative(self.a1)
        dW1 = np.dot(X.T, dz1) / m
        db1 = np.sum(dz1, axis=0, keepdims=True) / m
        
        # Update parameters
        self.W2 -= learning_rate * dW2
        self.b2 -= learning_rate * db2
        self.W1 -= learning_rate * dW1
        self.b1 -= learning_rate * db1
    
    def train(self, X, y, epochs, learning_rate):
        losses = []
        
        for epoch in range(epochs):
            # Forward propagation
            output = self.forward(X)
            
            # Calculate loss
            loss = -np.mean(y * np.log(output) + (1 - y) * np.log(1 - output))
            losses.append(loss)
            
            # Backward propagation
            self.backward(X, y, output, learning_rate)
            
            if epoch % 100 == 0:
                print(f"Epoch {epoch}, Loss: {loss}")
        
        return losses`}
        />

        <h2>Training the Network</h2>
        <p>With our neural network class defined, we can now train it on some data:</p>

        <CodeSnippet
          title="Training the Neural Network"
          language="python"
          code={`# Generate some sample data (XOR problem)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

# Create and train the neural network
nn = NeuralNetwork(input_size=2, hidden_size=4, output_size=1)
losses = nn.train(X, y, epochs=10000, learning_rate=0.1)

# Plot the loss over time
plt.figure(figsize=(10, 6))
plt.plot(losses)
plt.title('Loss over Training')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.grid(True)
plt.show()`}
        />

        <h2>Testing Our Neural Network</h2>
        <p>Let's test our neural network on some new data to see how well it performs:</p>

        <CodeSnippet
          title="Testing the Neural Network"
          language="python"
          code={`# Test the trained network
predictions = nn.forward(X)
print("Predictions:")
for i in range(len(X)):
    print(f"Input: {X[i]}, Target: {y[i][0]}, Prediction: {predictions[i][0]:.4f}")`}
        />

        <h2>Visualizing the Results</h2>
        <p>It's always helpful to visualize the results of our neural network to better understand its performance:</p>

        <CodeSnippet
          title="Visualizing the Decision Boundary"
          language="python"
          code={`# Create a mesh grid to visualize the decision boundary
h = 0.01
x_min, x_max = -0.5, 1.5
y_min, y_max = -0.5, 1.5
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
Z = nn.forward(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

# Plot the decision boundary
plt.figure(figsize=(10, 8))
plt.contourf(xx, yy, Z, cmap=plt.cm.Spectral, alpha=0.8)
plt.scatter(X[:, 0], X[:, 1], c=y.ravel(), cmap=plt.cm.Spectral, edgecolors='k')
plt.xlim(xx.min(), xx.max())
plt.ylim(yy.min(), yy.max())
plt.title('Neural Network Decision Boundary')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.show()`}
        />

        <h2>Conclusion</h2>
        <p>
          In this tutorial, we've built a simple neural network from scratch using NumPy. This should give you a solid
          understanding of how neural networks work under the hood. In future articles, we'll explore more advanced
          topics like convolutional neural networks and recurrent neural networks.
        </p>

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
        <CommentSection articleSlug={params.slug} />
      </div>
    </article>
  )
}
