export type Book = {
  id: string
  searchInfo: {
    textSnippet: string
  }
  volumeInfo: {
    title: string
    subtitle: string
    authors: string[]
    pageCount: number
    categories: string[]
    description: string
    imageLinks: {
      thumbnail: string
    }
  }
}
