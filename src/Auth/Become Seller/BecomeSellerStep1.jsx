import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerStep1 = ({ formik }) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-9">Contact Details</p>
      <div className="space-y-9">
        <div>
          <TextField
            fullWidth
            name="mobile"
            label="Mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>

        <div>
          <TextField
            fullWidth
            name="GSTIN"
            label="GSTIN Number"
            value={formik.values.GSTIN}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
            helperText={formik.touched.GSTIN && formik.errors.GSTIN}
          />
        </div>
      </div>
    </Box>
  );
};

export default BecomeSellerStep1;
