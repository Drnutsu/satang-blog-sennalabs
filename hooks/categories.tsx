import React, { createContext, ReactNode, useContext } from 'react'
import { CategoryComponentType, ComponentQueryBase } from '../interfaces/blog'

type CategoriesProviderProps = {
  categories: ComponentQueryBase<CategoryComponentType>[]
  children: ReactNode
}

const CategoriesContext = createContext({
  categories: [] as ComponentQueryBase<CategoryComponentType>[],
})

export function CategoriesProvider({
  categories,
  children,
}: CategoriesProviderProps) {
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => {
  return useContext(CategoriesContext)
}
