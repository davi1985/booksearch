import { Heart } from 'lucide-react'
import type { Book as BookType } from '../app/types'
import { Button } from './ui/button'

type Props = {
  book: BookType
  onSelected: (id: string) => void
  onFavorite: () => void
}

export const Book = ({ book, onSelected, onFavorite }: Props) => (
  <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm w-full  dark:border-gray-800 dark:bg-gray-900 gap-2">
    <img
      className="object-fill rounded-l-lg h-full w-40"
      src={book.volumeInfo.imageLinks?.thumbnail}
    />
    <div className="flex flex-col justify-between p-4 leading-normal w-full gap-2">
      <div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {book.volumeInfo.title}
        </h5>

        {book.volumeInfo.subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {book.volumeInfo.subtitle}
          </p>
        )}
      </div>

      <div className="flex gap-2 flex-col">
        <div className="flex gap-2">
          <p className="flex text-sm font-medium">
            Autor:
            <span className="block truncate w-18 text-gray-500 dark:text-gray-300 ml-2">
              {book.volumeInfo.authors?.join(', ')}
            </span>
          </p>

          <p className="text-sm font-medium">
            Páginas:
            <span className="text-gray-500 dark:text-gray-300 ml-2">
              {book.volumeInfo.pageCount}
            </span>
          </p>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => onSelected(book.id)}
          >
            Ver mais
          </Button>

          <Button
            variant="secondary"
            className="cursor-pointer flex items-center justify-center"
            onClick={onFavorite}
          >
            <Heart className="h-4 w-4" /> Favoritar
          </Button>
        </div>
      </div>
    </div>
  </div>
)
