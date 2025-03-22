import axios from 'axios'
import { Book } from '../types'

export const findBooksByTerm = async (term: string) => {
  const { data } = await axios.get(`${import.meta.env.API_URL}${term}`)

  return data.items as Book[]
}
