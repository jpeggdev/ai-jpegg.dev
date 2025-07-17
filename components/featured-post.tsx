import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

interface FeaturedPostProps {
  title: string
  description: string
  date: string
  category: string
  image: string
  slug: string
}

export function FeaturedPost({ title, description, date, category, image, slug }: FeaturedPostProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={slug} className="block">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3 z-10">{category}</Badge>
        </div>
        <CardHeader className="p-4">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date}
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
