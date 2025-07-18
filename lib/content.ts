import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Article, ArticleMetadata } from './types'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getAllArticles(): ArticleMetadata[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        image: data.image,
        slug: data.slug,
      } as ArticleMetadata
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return articles
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Convert markdown to HTML
    const htmlContent = marked(content)
    
    return {
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      image: data.image,
      slug: data.slug,
      content: htmlContent,
    } as Article
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}