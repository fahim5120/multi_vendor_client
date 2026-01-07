
import HomeCategoryTable from "../HomePage/HomeCategoryTable";
import { useAppSelector } from "../../Redux Toolkit/store";




const image="https://sm.pcmag.com/pcmag_me/photo/default/macbook-6_hgfm.jpg "
export default function DealCategoryTable() {
   const homeCategories=useAppSelector(store=>store.homeCategory.homeCategories)
  return (
    <HomeCategoryTable categories={homeCategories.dealCategories}/>
  );
}
//https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeJPd5pE6SUPYguDl3djtVfjfhzUg6CHoLDKwUsMPzIKzoo8l9EhYmvXTiRzZkOLNt0kR3DGQqsmonXAWCY5ADbgNoVqpFPLkUi8tkRkDt4xZQcyUvt9vY
