import { ThemeToggle } from './theme-toggle'

export const Header = () => (
  <header className="flex items-center justify-between">
    <div>
      <h1 className="font-bold text-3xl -tracking-wider">booksearch</h1>
      <small className="text-muted-foreground">Encontrei o seu livro</small>
    </div>

    <ThemeToggle />
  </header>
)
