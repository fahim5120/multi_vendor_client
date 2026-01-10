// import { Box, TextField, Grid, Button } from "@mui/material";
// import React from "react";
// import { useFormik } from "formik";
// import { useAppDispatch } from "../../../Redux Toolkit/store";
// // import { createOrder } from "../../../Redux Toolkit/features/customer/orderSlice";
// import { addUserAddress } from "../../../Redux Toolkit/features/customer/userSlice";

// const AddressForm = ({handleClose}) => {
//   const dispatch=useAppDispatch()
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       mobile: "",
//       address: "",
//       city: "",
//       state: "",
//       pinCode: "",
//       locality: "",
//     },
//   onSubmit: async (value) => {
//       await dispatch(
//         addUserAddress({
//           address: value,
//           jwt: localStorage.getItem("jwt"),
//         })
//       );

//       handleClose(); // 🔥 IMPORTANT
//     },
//   });

  
//   return (
//     <div className="">
//       <Box sx={{ maxWidth: 600, mx: "auto" }} />
//       <p className="text-xl font-bold text-center pb-5">Contact Details</p>

//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               name="name"
//               label="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           <Grid size={{ xs: 6 }}>
//             <TextField
//               fullWidth
//               name="mobile"
//               label="Mobile"
//               value={formik.values.mobile}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.mobile && Boolean(formik.errors.mobile)}
//               helperText={formik.touched.mobile && formik.errors.mobile}
//             />
//           </Grid>
//           <Grid size={{ xs: 6 }}>
//             <TextField
//               fullWidth
//               name="pinCode"
//               label="Pin Code"
//               value={formik.values.pinCode}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
//               helperText={formik.touched.pinCode && formik.errors.pinCode}
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               name="address"
//               label="Address (House No, Building, Street)"
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address && Boolean(formik.errors.address)}
//               helperText={formik.touched.address && formik.errors.address}
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               name="locality"
//               label="Locality/Town"
//               value={formik.values.locality}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.locality && Boolean(formik.errors.locality)}
//               helperText={formik.touched.locality && formik.errors.locality}
//             />
//           </Grid>
//           <Grid size={{ xs: 6 }}>
//             <TextField
//               fullWidth
//               name="city"
//               label="City"
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.city && Boolean(formik.errors.city)}
//               helperText={formik.touched.city && formik.errors.city}
//             />
//           </Grid>
//           <Grid size={{ xs: 6 }}>
//             <TextField
//               fullWidth
//               name="state"
//               label="State"
//               value={formik.values.state}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.state && Boolean(formik.errors.state)}
//               helperText={formik.touched.state && formik.errors.state}
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <Button
//               sx={{ py: "14px" }}
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//             >
//               Add Address
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Grid } from "@mui/material";



import { useAppDispatch } from "../../../Redux Toolkit/store";
import { createOrder } from "../../../Redux Toolkit/features/customer/orderSlice";
import { addUserAddress } from "../../../Redux Toolkit/features/customer/userSlice";

const ContactSchema = Yup.object({
  name: Yup.string().required("Required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Required"),
  pincode: Yup.string()
    .matches(/^\d{6}$/, "Invalid pincode")
    .required("Required"),
  address: Yup.string().required("Required"),
  locality: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

const AddressForm = ({ handleClose }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      dispatch(
        addUserAddress({
          address: values,
          jwt: localStorage.getItem("jwt") || "",
         
        })
      );
      handleClose();
    },
  });

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Contact Details</p>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {[
            { name: "name", label: "Name" },
            { name: "mobile", label: "Mobile" },
            { name: "pincode", label: "Pin Code" },
            { name: "address", label: "Address" },
            { name: "locality", label: "Locality" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
          ].map((field, i) => (
            <Grid item xs={12} sm={i === 1 || i === 2 || i === 5 || i === 6 ? 6 : 12} key={field.name}>
              <TextField
                fullWidth
                name={field.name}
                label={field.label}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth sx={{ py: "14px" }}>
              Add Address
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;




  