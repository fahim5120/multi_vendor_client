import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { menLevelTwo } from "../../data/category/levelTwo/menLevelTwo";
const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ width: 600, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <div>
        <Typography textAlign="center" variant="h4">
          Create New Deal
        </Typography>
      </div>

      <div>
        <TextField
          fullWidth
          id="discount"
          name="discount"
          label="Discount"
          type="number"
          value={formik.values.discount}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <FormControl fullWidth required>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            id="category"
            labelId="category-label"
            name="category"
            value={formik.values.category}
            label="Category"
            onChange={formik.handleChange}
          >
            <MenuItem value="none">none</MenuItem>
            {menLevelTwo.map((item, index) => (
              <MenuItem key={index} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <Button fullWidth type="submit" variant="contained" sx={{ py: "11px" }}>
          Create Deal
        </Button>
      </div>
    </Box>
  );
};

export default CreateDealForm;
