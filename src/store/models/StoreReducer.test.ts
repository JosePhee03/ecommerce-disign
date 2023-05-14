import { test, expect, describe } from 'vitest'

import { PRODUCT_MOCK as product, CART_MOCK as originStore } from '@/mocks'

import { AddProductToStore, RemoveProductToStore } from './StoreReducer.models'

describe('Test store reducer', () => {
  const firstStore = AddProductToStore(product, originStore)

  const secondStore = RemoveProductToStore(product.id, firstStore)

  test('Should add a product to the store', () => {
    expect(firstStore.length).toEqual(originStore.length + 1)
  })

  test('Should remove a product to the store', () => {
    expect(secondStore.length).toEqual(originStore.length)
  })
})