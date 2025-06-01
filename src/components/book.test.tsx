import { render, screen } from '@testing-library/react'
import { Book } from './book'

describe('<Book />', () => {
  it('should render correctly', () => {
    render(
      <Book
        book={{
          id: 'A001',
          searchInfo: { textSnippet: 'some' },
          volumeInfo: {
            authors: ['John Doe'],
            categories: ['Technology'],
            description: 'any description',
            imageLinks: {
              thumbnail: 'any',
            },
            pageCount: 200,
            subtitle: 'Subtitle',
            title: 'Title',
          },
        }}
        onFavorite={vitest.fn()}
        onSelected={vitest.fn()}
      />
    )

    screen.getByRole('img')
    screen.getByRole('heading', {
      name: /title/i,
    })
    screen.getByText(/subtitle/i)
    screen.getByText(/autor:/i)
    screen.getByRole('button', {
      name: /ver mais/i,
    })
    screen.getByRole('button', {
      name: /favoritar/i,
    })
  })
})
