import { Header } from './components/header'
import { SearchForm } from './components/search-form'
import { ThemeProvider } from './components/theme-provider'
import { Separator } from './components/ui/separator'
import { BookList } from './components/book-list'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useBooks } from './app/hooks/use-books'
import { Footer } from './components/footer'
import { Book } from './app/types'

export const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([])
  const [term, setTerm] = useState('')

  const { books, fetch, clear, isLoading } = useBooks()

  const handleChangeTerm = (event: ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!term) return

    fetch(term)
    setTerm('')
  }

  const handleClean = () => clear()

  const handleFavoriteBook = (book: Book) =>
    setFavoriteBooks((prevFavorites) => {
      if (!prevFavorites.some(({ id }) => id === book.id)) {
        return [...prevFavorites, book]
      }

      return prevFavorites
    })

  return (
    <ThemeProvider>
      <div className="w-full md:max-w-[600px] lg:max-w-[1000px] mx-auto mt-5 p-4">
        <Header count={favoriteBooks.length} />

        <main className="mt-10 space-y-3">
          <SearchForm
            term={term}
            onChange={handleChangeTerm}
            onSubmit={handleSubmit}
            onClean={handleClean}
          />

          <Separator />

          <BookList
            books={books}
            loading={isLoading}
            onFavorite={handleFavoriteBook}
          />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
