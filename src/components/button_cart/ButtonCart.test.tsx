import { describe, it, expect } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { PRODUCT_MOCK } from '@/mocks'
import ButtonCart from './ButtonCart'

describe('Test ButtonCart', () => {
  const mockAddProduct = vi.fn()
  const mockRemoveProduct = vi.fn()

  beforeEach(() => {
    mockAddProduct.mockClear()
    mockRemoveProduct.mockClear()
  })

  it('button normal is render', () => {
    render(<ButtonCart
      addProduct={mockAddProduct}
      isProductInCart={false}
      fontSize='text-sm'
      product={PRODUCT_MOCK}
      removeProduct={mockRemoveProduct}
    />)

    const buttonNormal = screen.getByRole('button')
    expect(screen.getByText('add to')).toBeInTheDocument()
    expect(buttonNormal).toHaveClass('button-normal')

    fireEvent.click(buttonNormal)
    expect(mockAddProduct).toHaveBeenCalledTimes(1)
    expect(mockRemoveProduct).toHaveBeenCalledTimes(0)
  })

  it('button in cart is render', () => {
    render(<ButtonCart
      addProduct={mockAddProduct}
      isProductInCart={true}
      fontSize='text-sm'
      product={PRODUCT_MOCK}
      removeProduct={mockRemoveProduct}
    />)

    const buttonInCart = screen.getByRole('button')
    expect(screen.getByText('in the')).toBeInTheDocument()
    expect(buttonInCart).toHaveClass('button-in-cart')

    fireEvent.click(buttonInCart)
    expect(mockAddProduct).toHaveBeenCalledTimes(0)
    expect(mockRemoveProduct).toHaveBeenCalledTimes(1)
  })
})

//color: #E5252C;
//background: rgba(229, 37, 44, 0.1254901961);