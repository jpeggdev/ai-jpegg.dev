export interface ArticleMetadata {
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  slug: string
}

export interface Article extends ArticleMetadata {
  content: string
}

export type ArticleCategory = 
  | "Machine Learning"
  | "Deep Learning" 
  | "AI Engineering"
  | "Neural Networks"