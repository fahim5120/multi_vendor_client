import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import BecomeSellerStep1 from "./BecomeSellerStep1";
import BecomeSellerStep2 from "./BecomeSellerStep2";
import BecomeSellerStep3 from "./BecomeSellerStep3";
import BecomeSellerStep4 from "./BecomeSellerStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      GSTIN: "",
      pickupAddress: {
        name: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        locality: "",
      },
      bankDetails: {
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    // validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values, "formik submitted");
      // console.log("active step ", activeStep);
      // dispatch(createSeller(formik.values));
    },
  });
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-20 space-y-10">
        {activeStep == 0 ? (
          <BecomeSellerStep1
          formik={formik}
          // handleOtpChange={handleOtpChange}
          />
        ) : activeStep == 1 ? (
          <BecomeSellerStep2
           formik={formik}
          />
        ) : activeStep == 2 ? (
          <BecomeSellerStep3
          formik={formik}
          />
        ) : (
          <BecomeSellerStep4
          formik={formik}
          />
        )}
      </div>
      <div className="flex items-center justify-between mt-5">
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
          variant="contained"
        >
          Back
        </Button>

        <Button
          onClick={activeStep === steps.length - 1 ? formik.handleSubmit :
             () => setActiveStep(activeStep + 1)}
                        
          variant="contained"
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default SellerAccountForm;
