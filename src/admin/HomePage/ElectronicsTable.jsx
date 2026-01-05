import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../Redux Toolkit/store'
const image="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/g/g/-original-imagywnz46fngcks.jpeg?q=70"
const ElectronicsTable = () => {
   const homeCategories=useAppSelector(store=>store.homeCategory.homeCategories)
  return (
    <div>
      <HomeCategoryTable categories={homeCategories.electricCategories}/>
    </div>
  )
}

export default ElectronicsTable