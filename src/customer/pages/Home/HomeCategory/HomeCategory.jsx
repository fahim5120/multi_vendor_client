// import React from 'react'
// import HomeCatogoryCard from './HomeCatogoryCard'
// import { useAppSelector } from '../../../../Redux Toolkit/store'



// const HomeCategory = () => {
//   const categories = useAppSelector(
//     store => store.homeCategory.homeCategories?.shopByCategories || []
//   );

//   return (
//     <div className="flex justify-center gap-7 flex-wrap">
//       {categories.map((item,index) => (
//         <HomeCatogoryCard  key={`${item.categoryId}-${index}`} item={item} />
//       ))}
//     </div>
//   );
// };

// export default HomeCategory;
import React from 'react'
import { useAppSelector } from '../../../../Redux Toolkit/store';
import HomeCatogoryCard from './HomeCatogoryCard'
const HomeCategory = () => {
  // const shopByCategories = useAppSelector(
  //   store => store.homeCategory.homeCategories?.shopByCategories
  // );
   const { homePage} = useAppSelector((store) => store);

  return (
    <div className="flex justify-center gap-7 flex-wrap">
      {homePage?.homePageData?.shopByCategories?.map((item, index) => (
        <HomeCatogoryCard
          key={`${item.categoryId}-${index}`}
          item={item}
        />
      ))}
    </div>
  );
};

export default HomeCategory;


