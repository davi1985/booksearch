import { useQuery, useQueryClient } from '@tanstack/react-query'
import { findBooksByTerm } from '../services/find-book-by-term'
import { useState } from 'react'

export const useBooks = () => {
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)

  const {
    data,
    error,
    isLoading: queryIsLoading,
  } = useQuery({
    queryKey: ['books'],
    queryFn: () => findBooksByTerm(''),
    enabled: false,
  })

  const fetch = async (term: string) => {
    if (term.length < 3) return
    setLoading(true)

    const books = await findBooksByTerm(term)
    queryClient.setQueryData(['books'], books)
    setLoading(false)
  }

  const clear = () => queryClient.setQueryData(['books'], [])

  return {
    books: data ?? [],
    isLoading: queryIsLoading || loading,
    fetch,
    clear,
    error,
  }
}
