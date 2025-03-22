import { Book } from './book'
import { Book as BookType } from '../app/types'
import { Frown, Loader } from 'lucide-react'
import { BookDetail } from './book-detail'
import { useState } from 'react'

type Props = {
  books: BookType[]
  loading: boolean
  onFavorite: (book: BookType) => void
}

export const BookList = ({ books, loading, onFavorite }: Props) => {
  const [bookDetailModalOpened, setBookDetailModalOpened] = useState(false)
  const [bookSelected, setBookSelected] = useState<BookType | undefined>(
    undefined
  )

  const handleFavorite = () => bookSelected && onFavorite(bookSelected)

  const handleSelectedBook = (bookId: string) => {
    setBookDetailModalOpened(true)
    setBookSelected(books.filter(({ id }) => id === bookId)[0])
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-100">
        <Loader className="animate-spin" />
      </div>
    )
  }

  return (
    <div>
      {books.length === 0 ? (
        <div className="flex justify-center items-center h-100">
          <h2 className="text-muted-foreground font-medium text-sm mb-4 flex items-center gap-2 justify-center">
            <Frown className="h-5 w-5" />
            Nenhum livro por aqui.
          </h2>
        </div>
      ) : (
        <h2 className="text-muted-foreground font-medium text-sm mb-4">
          Resultados da busca:
        </h2>
      )}

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 mb-12">
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            onSelected={handleSelectedBook}
            onFavorite={() => onFavorite(book)}
          />
        ))}
      </div>

      <BookDetail
        isOpen={bookDetailModalOpened}
        book={bookSelected}
        onClose={() => setBookDetailModalOpened(false)}
        onFavorite={handleFavorite}
      />
    </div>
  )
}
