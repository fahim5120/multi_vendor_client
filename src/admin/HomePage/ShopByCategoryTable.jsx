import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../Redux Toolkit/store'

const ShopByCategoryTable = () => {
   const homeCategories=useAppSelector(store=>store.homeCategory.homeCategories)
  const image ="https://rukminim2.flixcart.com/image/300/300/j84so7k0/sandal/a/x/z/asd652-6-stylos-black-original-imaexweh8vab5jy4.jpeg"
  return (
    <HomeCategoryTable categories={homeCategories.shopByCategories} />
  )
}

export default ShopByCategoryTable