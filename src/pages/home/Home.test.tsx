import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from '@/store'
import Home from './Home'

describe('Home component test', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <Home/>
        </StoreProvider>
      </BrowserRouter>
    )
  })

  it('should exist the title Shop', () => {
    expect(screen.getByText(/Shop/i)).toBeDefined()
  })
})