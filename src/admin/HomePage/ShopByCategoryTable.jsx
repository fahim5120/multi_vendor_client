import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../Redux Toolkit/store'

const ShopByCategoryTable = () => {
   const homeCategories=useAppSelector(store=>store.homeCategory.homeCategories)

  return (
    <HomeCategoryTable categories={homeCategories.shopByCategories} />
  )
}

export default ShopByCategoryTable