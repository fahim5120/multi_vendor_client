import React from 'react'
import HomeCatogoryCard from './HomeCatogoryCard'

const HomeCategory = () => {
  return (
    <div className='flex justify-center gap-7 flex-wrap'>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=><HomeCatogoryCard/>)}
    </div>
  )
}

export default HomeCategory