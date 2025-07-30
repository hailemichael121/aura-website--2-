"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Flag, ArrowLeft, Send, Clock, User } from "lucide-react"
import { notFound } from "next/navigation"

interface ForumPost {
  id: number
  title: string
  content: string
  author: string
  category: string
  replies: number
  likes: number
  views: number
  timeAgo: string
  isAnonymous: boolean
  status: string
}

interface Comment {
  id: number
  content: string
  author: string
  timeAgo: string
  isAnonymous: boolean
  likes: number
}

export default function ForumPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<ForumPost | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    // Simulate fetching post data
    const fetchPost = async () => {
      // Mock data - replace with actual API call
      const mockPost: ForumPost = {
        id: Number.parseInt(params.id),
        title: "How do I talk to my parents about therapy?",
        content: `I've been struggling with anxiety for months and I know I need help, but I'm scared to tell my parents. They come from a generation where mental health wasn't really discussed, and I'm worried they'll think I'm weak or that there's something seriously wrong with me.

I've been having panic attacks more frequently, especially before exams, and I can't concentrate on my studies. I know therapy could help, but I need my parents' support (and honestly, their financial help too since I'm still a student).

Has anyone else been in a similar situation? How did you approach this conversation with your family? Any advice would be really appreciated.`,
        author: "Anonymous",
        category: "Youth Corner",
        replies: 12,
        likes: 8,
        views: 45,
        timeAgo: "2 hours ago",
        isAnonymous: true,
        status: "approved",
      }

      const mockComments: Comment[] = [
        {
          id: 1,
          content:
            "I went through something similar last year. What helped me was starting with a smaller conversation about stress and how it was affecting my studies. Once they saw I was struggling academically, they were more open to the idea of getting help.",
          author: "Sarah M.",
          timeAgo: "1 hour ago",
          isAnonymous: false,
          likes: 5,
        },
        {
          id: 2,
          content:
            "You could try sharing some educational resources about mental health with them first. Sometimes parents just need to understand that therapy is like going to a doctor for your mind - it's healthcare, not a sign of weakness.",
          author: "Anonymous",
          timeAgo: "45 minutes ago",
          isAnonymous: true,
          likes: 3,
        },
      ]

      // Check if post exists
      if (Number.parseInt(params.id) > 100) {
        notFound()
      }

      setPost(mockPost)
      setComments(mockComments)
      setLoading(false)
    }

    fetchPost()
  }, [params.id])

  const handleLike = () => {
    setIsLiked(!isLiked)
    if (post) {
      setPost({
        ...post,
        likes: isLiked ? post.likes - 1 : post.likes + 1,
      })
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: comments.length + 1,
      content: newComment,
      author: "You",
      timeAgo: "Just now",
      isAnonymous: false,
      likes: 0,
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFFF8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#31960F] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading discussion...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/forum" className="inline-flex items-center text-[#31960F] hover:text-[#2A7F0C] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Forum
        </Link>

        {/* Main Post */}
        <Card className="border-0 shadow-xl rounded-3xl bg-white mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-[#31960F] text-white">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {post.timeAgo}
              </div>
            </div>
            <CardTitle className="text-2xl">{post.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              {post.isAnonymous && (
                <Badge variant="secondary" className="text-xs">
                  Anonymous
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-600`}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {post.replies}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                <Flag className="w-4 h-4 mr-1" />
                Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="border-0 shadow-lg rounded-3xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl">Replies ({comments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts and support..."
                className="mb-4 rounded-2xl"
                rows={4}
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="anonymous" className="rounded" />
                  <label htmlFor="anonymous" className="text-sm text-gray-600">
                    Post anonymously
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="bg-[#31960F] hover:bg-[#2A7F0C] text-white rounded-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Reply
                </Button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="border-l-4 border-[#31960F] pl-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-[#31960F] text-white">
                        {comment.isAnonymous ? "A" : comment.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-gray-900">{comment.author}</span>
                        {comment.isAnonymous && (
                          <Badge variant="secondary" className="text-xs">
                            Anonymous
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                          <Heart className="w-3 h-3 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
