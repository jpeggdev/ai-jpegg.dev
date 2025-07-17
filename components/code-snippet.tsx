"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CodeSnippetProps {
  title: string
  language: string
  code: string
  explanation?: string
}

export function CodeSnippet({ title, language, code, explanation }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 px-4 py-3 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8">
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="code">
          <TabsList className="w-full justify-start rounded-none border-b bg-muted/50">
            <TabsTrigger value="code" className="rounded-none">
              Code
            </TabsTrigger>
            {explanation && (
              <TabsTrigger value="explanation" className="rounded-none">
                Explanation
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="code" className="m-0">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{code}</code>
            </pre>
          </TabsContent>
          {explanation && (
            <TabsContent value="explanation" className="m-0 p-4">
              <p className="text-sm text-muted-foreground">{explanation}</p>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}
