import React from 'react'
import ElectronicCategory from './Electronic Category/ElectronicCategory'
import Grid from './Grid/Grid'
import Deal from './Deals/Deal'
import HomeCategory from './HomeCategory/HomeCategory'
import Button from '@mui/material/Button'
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();

   const becomeSellerClick = () => {
        navigate("/become-seller")
    }
  return (
    <div className="space-y-10"
    ><ElectronicCategory />
    <section>
      <Grid/>
      </section>
      <section className='pt-10'>
        <h1 className='text-3xl font-black text-center pb-5'>Today's Deal</h1>
        <Deal/>
      </section>

       <section className='pt-10'>
        <h1 className='text-3xl font-black text-center pb-5'>Shop By Category</h1>
      <HomeCategory/>
      </section>



<section className="lg:px-20 relative h-[200px] lg:px-[450px] object-cover">
  <img
    className="absolute inset-0 w-full h-full object-cover object-center"
    src="https://img.freepik.com/premium-photo/happy-middle-aged-man-sitting-chair-showing-free-space-aside-advertising-offer-demonstrating-your-design_116547-30316.jpg"
    alt="Sell your product"
  />


  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

 
  <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
    <h1 className="text-3xl lg:text-4xl font-black">
      Sell Your Product
    </h1>
    <p className='text-lg md:text-2xl'>With 
      <strong className='logo text-3xl md:text-5xl pl-2'>Buyza</strong></p>
  <div className='pt-6 flex justify-center'>
    <Button 
      onClick={becomeSellerClick}
    startIcon={<StoreIcon/>}
     variant="contained">Become seller</Button>
  </div>
  </div>
</section>







      </div>
  )
}

export default Home
