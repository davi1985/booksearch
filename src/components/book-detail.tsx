import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

import { Book } from '../app/types'
import { Heart } from 'lucide-react'

type Props = {
  isOpen: boolean
  onClose: () => void
  book?: Book
  onFavorite: () => void
}

export const BookDetail = ({ isOpen, book, onClose, onFavorite }: Props) => {
  const handleClick = () => {
    onFavorite()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>{book?.volumeInfo.title}</DialogTitle>
          <DialogDescription>{book?.volumeInfo.subtitle}</DialogDescription>
        </DialogHeader>

        <div className="flex gap-4 flex-col">
          <div className="flex gap-4">
            <img
              className="object-fill h-60 rounded w-40"
              src={book?.volumeInfo?.imageLinks.thumbnail}
            />

            <div className="h-60 w-full overflow-y-auto scroll-auto">
              <p className="text-justify text-sm">
                {book?.volumeInfo.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full gap-2">
            <p className="flex text-sm font-medium">
              Autor:
              <span className="block text-gray-500 dark:text-gray-300 ml-2 break-words">
                {book?.volumeInfo.authors?.join(', ')}
              </span>
            </p>

            <p className="text-sm font-medium">
              Páginas:
              <span className="text-gray-500 dark:text-gray-300 ml-2">
                {book?.volumeInfo.pageCount}
              </span>
            </p>
          </div>
        </div>

        <DialogFooter onClick={handleClick}>
          <Button type="submit" variant="outline">
            <Heart className="w-4 h-4" />
            Favoritar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
