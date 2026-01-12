

// import { useAppSelector } from '../../../Redux Toolkit/store'
// import UserAddressCard from './UserAddressCard'


// const Addresses = () => {
//     const { user } = useAppSelector(store => store)
//     return (
//         <>
//             <div className='space-y-3'>
//                 {user.user?.addressess?.map((item) =>
//                     <UserAddressCard
//                         key={item._id}
//                         item={item} />)}
//             </div>
//         </>
//     )
// }

// export default Addresses





import { useAppSelector } from "../../../Redux Toolkit/store";
import UserAddressCard from './UserAddressCard'


const Addresses = () => {
  const { user } = useAppSelector(store => store);

  console.log("USER FROM STORE 👉", user.user);
  console.log("ADDRESSES 👉", user.user?.addressess);

  return (
    <div className='space-y-3'>
      {user.user?.addressess?.map((item) => {
        console.log("EACH ADDRESS ITEM 👉", item);
        return <UserAddressCard key={item._id} item={item} />;
      })}
    </div>
  );
};


export default Addresses;
