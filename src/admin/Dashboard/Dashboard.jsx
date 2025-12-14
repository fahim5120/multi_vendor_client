import React from 'react'
import Navbar from '../../common/NAvbar'
import AdminDrawerList from '../SideBar/AdminDrawerList'
import AdminRoutes from '../../routes/AdminRoutes'

const Dashboard = () => {
  return (
    <div className="min-h-screen">
        <Navbar DrawerList={AdminDrawerList}/>
        <section className="lg:flex lg:h-[90vh]"> 
          <div  className="hidden lg:block h-full">
            <AdminDrawerList/>
          </div >
          <div className="p-10 w-full lg:w-[80%]  overflow-auto">
    <AdminRoutes />
          </div>
        </section>

    </div>
  )
}

export default Dashboard