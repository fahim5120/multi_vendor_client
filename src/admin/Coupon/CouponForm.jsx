// import React from "react";
// import { useFormik } from "formik";
// import { Box, Grid, TextField } from "@mui/material";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs, { Dayjs } from "dayjs";


// interface CouponFormValues {
//   code: string;
//   discountPercentage: number;
//   validityStartDate: Dayjs | null;
//   validityEndDate: Dayjs | null;
//   minimumOrderValue: number;
// }


// const CouponForm = () => {
//   const formik = useFormik<CouponFormValues>({
//     initialValues: {
//        code: "",
//       discountPercentage: 0,
//       validityStartDate: null,
//       validityEndDate: null,
//       minimumOrderValue: 0,
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div className="max-w-3xl">
//       <Box sx={{ mt: 3 }} component="form" onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid size={{ xs: 12, sm: 6 }}>
//             <TextField
//               fullWidth
//               id="code"
//               name="code"
//               label="Coupon Code"
//               value={formik.values.code}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.code && Boolean(formik.errors.code)}
//               helperText={formik.touched.code && formik.errors.code}
//               margin="normal"
//             />
//           </Grid>

//           <Grid size={{ xs: 12, sm: 6 }}>
//             <TextField
//               fullWidth
//               name="discountPercentage"
//               label="Discount Percentage"
//               value={formik.values.discountPercentage}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.discountPercentage &&
//                 Boolean(formik.errors.discountPercentage)
//               }
//               helperText={
//                 formik.touched.discountPercentage &&
//                 formik.errors.discountPercentage
//               }
//             />
//           </Grid>

//           <Grid size={{ xs: 12, sm: 6 }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 sx={{ width: "100%" }}
//                 label="Validity Start Date"
//                 value={formik.values.validityStartDate}
//                 onChange={(value) =>
//                   formik.setFieldValue("validityStartDate", value)
//                 }
//               />
//             </LocalizationProvider>
//           </Grid>

//           <Grid size={{ xs: 12, sm: 6 }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 sx={{ width: "100%" }}
//                 label="Validity End Date"
//                 value={formik.values.validityEndDate}
//                 onChange={(value) =>
//                   formik.setFieldValue("validityEndDate", value)
//                 }
//               />
//             </LocalizationProvider>
//           </Grid>

//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               id="minimumOrderValue"
//               name="minimumOrderValue"
//               label="Minimum Order Value"
             
//               value={formik.values.minimumOrderValue}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.minimumOrderValue &&
//                 Boolean(formik.errors.minimumOrderValue)
//               }
//               helperText={
//                 formik.touched.minimumOrderValue &&
//                 formik.errors.minimumOrderValue
//               }
            
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default CouponForm;


import React from "react";
import { useFormik } from "formik";
import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch } from "../../Redux Toolkit/store";
import { createCoupon } from "../../Redux Toolkit/features/admin/CouponSlice";



const CouponForm = () => {
  const dispatch=useAppDispatch()
  const formik = useFormik({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(createCoupon({
        coupon:values,
        jwt:localStorage.getItem("jwt")
      }))
    },
  });

  return (
    <div className="max-w-3xl">
      <Box sx={{ mt: 3 }} component="form" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              name="code"
              label="Coupon Code"
              value={formik.values.code}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              type="number"
              name="discountPercentage"
              label="Discount Percentage"
              value={formik.values.discountPercentage}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Validity Start Date"
                value={formik.values.validityStartDate}
                sx={{ width: "100%" }}
                onChange={(value) =>
                  formik.setFieldValue("validityStartDate", value)
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Validity End Date"
                value={formik.values.validityEndDate}
                sx={{ width: "100%" }}
                onChange={(value) =>
                  formik.setFieldValue("validityEndDate", value)
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              type="number"
              name="minimumOrderValue"
              label="Minimum Order Value"
              value={formik.values.minimumOrderValue}
              onChange={formik.handleChange}
              error={
                  formik.touched.minimumOrderValue &&
                  Boolean(formik.errors.minimumOrderValue)
                }
                  helperText={
                  formik.touched.minimumOrderValue &&
                  formik.errors.minimumOrderValue
                }
            />
          </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
              sx={{py:"12px"}}
                variant="contained"
                type="submit"
                fullWidth
              
              >
               Submit
              </Button>
            </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default CouponForm;
