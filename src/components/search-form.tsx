import { ChangeEvent, FormEvent } from 'react'
import { Search, Trash } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'

type Props = {
  term: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClean: () => void
}

export const SearchForm = ({ term, onChange, onSubmit, onClean }: Props) => (
  <form className="flex gap-2 items-center" onSubmit={onSubmit}>
    <Input
      placeholder="Digite o título de um livro"
      value={term}
      onChange={onChange}
    />

    <div className="flex gap-2 items-center">
      <Button variant="ghost" type="submit">
        <Search className="h-4 w-4" />
      </Button>

      <span
        onClick={onClean}
        className="block cursor-pointer p-2 hover:bg-red-300 rounded-sm transition-colors"
      >
        <Trash className="h-4 w-4" />
      </span>
    </div>
  </form>
)
