import { Heart } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export const Header = ({ count }: { count: number }) => (
  <header className="flex items-center justify-between">
    <div>
      <h1 className="font-bold text-3xl -tracking-wider">booksearch</h1>
      <small className="text-muted-foreground">Encontrei o seu livro</small>
    </div>

    <div className="flex items-center gap-4 cursor-pointer">
      <div className="flex items-center relative">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Heart />
            </TooltipTrigger>
            <TooltipContent>
              {count > 0
                ? `${count} livro${count > 1 ? 's' : ''} favoritado${
                    count > 1 ? 's' : ''
                  }!`
                : 'Adicione um livro'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <span className="rounded-full absolute left-3 bottom-3 bg-zinc-300 text-zinc-900 text-xs font-medium px-1 py-0.5">
          {count}
        </span>
      </div>

      <ThemeToggle />
    </div>
  </header>
)
