"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { Heart, MessageCircle, Reply, Flag, MoreHorizontal, User, Lock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
    isVerified?: boolean
    role?: string
  }
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
  replies: Comment[]
  parentId?: string
}

interface CommentSectionProps {
  articleSlug: string
}

// Mock data - in a real app, this would come from an API
const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      role: "AI Engineer",
    },
    content:
      "Excellent tutorial! The step-by-step approach really helps understand the fundamentals. I've been working with neural networks for a while, but this explanation of backpropagation is one of the clearest I've seen.",
    timestamp: "2 hours ago",
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Alex Chen",
          avatar: "/placeholder.svg?height=40&width=40",
          isVerified: true,
          role: "Author",
        },
        content:
          "Thanks Sarah! I'm glad the backpropagation explanation was helpful. That's often the part that trips people up when they're starting out.",
        timestamp: "1 hour ago",
        likes: 5,
        isLiked: true,
        replies: [],
        parentId: "1",
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Full Stack Developer",
    },
    content:
      "I'm new to AI/ML and this was exactly what I needed. The NumPy implementation really shows what's happening under the hood. Quick question: how would you modify this for multi-class classification?",
    timestamp: "4 hours ago",
    likes: 8,
    isLiked: false,
    replies: [],
  },
  {
    id: "3",
    author: {
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      role: "Data Scientist",
    },
    content:
      "Great article! One suggestion: it might be helpful to add a section on different activation functions and when to use them. The sigmoid function works well for this example, but ReLU is often preferred in practice.",
    timestamp: "6 hours ago",
    likes: 15,
    isLiked: true,
    replies: [],
  },
]

interface User {
  name: string
  email: string
  avatar?: string
  isVerified?: boolean
  role?: string
}

export function CommentSection({ articleSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [user, setUser] = useState<User | null>(null)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [loginForm, setLoginForm] = useState({ name: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock login function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      name: loginForm.name,
      email: loginForm.email,
      avatar: `/placeholder.svg?height=40&width=40`,
      role: "Developer",
    }

    setUser(newUser)
    setShowLoginDialog(false)
    setLoginForm({ name: "", email: "" })
    setIsSubmitting(false)

    toast({
      title: "Welcome!",
      description: "You're now logged in and can participate in discussions.",
    })
  }

  const handleLogout = () => {
    setUser(null)
    toast({
      title: "Logged out",
      description: "You've been logged out successfully.",
    })
  }

  const handleSubmitComment = async () => {
    if (!user) {
      setShowLoginDialog(true)
      return
    }

    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const comment: Comment = {
      id: Date.now().toString(),
      author: user,
      content: newComment,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
      replies: [],
    }

    setComments((prev) => [comment, ...prev])
    setNewComment("")
    setIsSubmitting(false)

    toast({
      title: "Comment posted!",
      description: "Your comment has been added to the discussion.",
    })
  }

  const handleSubmitReply = async (parentId: string) => {
    if (!user || !replyContent.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: user,
      content: replyContent,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
      replies: [],
      parentId,
    }

    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          }
        }
        return comment
      }),
    )

    setReplyContent("")
    setReplyingTo(null)
    setIsSubmitting(false)

    toast({
      title: "Reply posted!",
      description: "Your reply has been added to the discussion.",
    })
  }

  const handleLike = async (commentId: string, isReply = false, parentId?: string) => {
    if (!user) {
      setShowLoginDialog(true)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200))

    setComments((prev) =>
      prev.map((comment) => {
        if (isReply && comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked,
                }
              }
              return reply
            }),
          }
        } else if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          }
        }
        return comment
      }),
    )
  }

  const CommentCard = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <Card className={`${isReply ? "ml-12 mt-4" : "mb-6"}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
              <AvatarFallback>
                {comment.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-sm">{comment.author.name}</h4>
                {comment.author.isVerified && (
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    ✓ Verified
                  </Badge>
                )}
                {comment.author.role && (
                  <Badge variant="outline" className="text-xs px-2 py-0">
                    {comment.author.role}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Flag className="mr-2 h-4 w-4" />
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm mb-4 leading-relaxed">{comment.content}</p>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLike(comment.id, isReply, comment.parentId)}
            className={`h-8 px-2 ${comment.isLiked ? "text-red-500" : ""}`}
          >
            <Heart className={`mr-1 h-4 w-4 ${comment.isLiked ? "fill-current" : ""}`} />
            {comment.likes}
          </Button>
          {!isReply && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="h-8 px-2"
            >
              <Reply className="mr-1 h-4 w-4" />
              Reply
            </Button>
          )}
        </div>

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="mt-4 space-y-3">
            <Textarea
              placeholder={`Reply to ${comment.author.name}...`}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="min-h-[80px]"
            />
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={() => handleSubmitReply(comment.id)}
                disabled={!replyContent.trim() || isSubmitting}
              >
                {isSubmitting ? "Posting..." : "Post Reply"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setReplyingTo(null)
                  setReplyContent("")
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Replies */}
        {comment.replies.length > 0 && (
          <div className="mt-4">
            {comment.replies.map((reply) => (
              <CommentCard key={reply.id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Discussion ({comments.length} {comments.length === 1 ? "comment" : "comments"})
        </h2>
        {user ? (
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{user.name}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Sign In to Comment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join the Discussion</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={loginForm.name}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  <span>We'll never share your email or spam you</span>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* New Comment Form */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Textarea
              placeholder={user ? "Share your thoughts on this article..." : "Sign in to join the discussion..."}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
              disabled={!user}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">Be respectful and constructive in your comments</p>
              <Button onClick={handleSubmitComment} disabled={!newComment.trim() || !user || isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Comment"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No comments yet</h3>
              <p className="text-muted-foreground">Be the first to share your thoughts on this article!</p>
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
        )}
      </div>
    </div>
  )
}
