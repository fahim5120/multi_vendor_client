import React, { useState } from "react";
import SellerLogin from "./SellerLogin";
import SellerAccountForm from "./SellerAccountForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen ">
      <section className="lg:col-span-1 md:cols-span-2  col-span-3 shadow-lg rounded-b-md p-5">
        {isLogin ? <SellerLogin /> : <SellerAccountForm />}

        <div className="mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">Have Account?</h1>
          <Button
            onClick={() => setIsLogin(!isLogin)}
            fullWidth
            sx={{ py: "11px" }}
            variant="outlined"
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      <section className=" hidden md:col-span-1 md:flex  lg:col-span-2 ">
        <div className="lg:w-[70%] px-5 space-y-10">
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcFVCdwFyH1f2noKBUvPrkf2znctY9JFQvg7nj4W3LhR-FV34ej_9P4OiaTNNrO38XMY&usqp=CAU"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
