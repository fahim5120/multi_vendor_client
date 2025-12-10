import React from "react";
import Navbar from "../../common/NAvbar";
import SellerDrawerList from "../sidebar/SellerDrawerList";



const SellerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar DrawerList={SellerDrawerList} />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
            <SellerDrawerList/>
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;
