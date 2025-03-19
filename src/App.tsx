import { Header } from './components/header'
import { ThemeProvider } from './components/theme-provider'

export const App = () => {
  return (
    <ThemeProvider>
      <div className="max-w-[500px] mx-auto mt-20">
        <Header />
      </div>
    </ThemeProvider>
  )
}
