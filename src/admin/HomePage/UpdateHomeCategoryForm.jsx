import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Box,
  FormHelperText,
} from "@mui/material";



import { updateHomeCategory } from "../../Redux Toolkit/features/admin/adminSlice";
import { useAppDispatch } from "../../Redux Toolkit/store";
import { mainCategory } from "../../data/category/mainCategory";
import { menLevelTwo } from "../../data/category/levelTwo/menLevelTwo";
import { menLevelThree } from "../../data/category/levelThree/menLevelThree";
import { womenLevelTwo } from "../../data/category/levelTwo/womenLevelTwo";
import { womenLevelThree } from "../../data/category/levelThree/womenLevelThree";
import { furnitureLevelThree } from "../../data/category/levelThree/furnitureLevelThree";
import { electronicsLevelThree } from "../../data/category/levelThree/electronicLevelThree";
import { furnitureLevelTwo } from "../../data/category/levelTwo/furnitureLevelTwo";
import { electronicsLevelTwo } from "../../data/category/levelTwo/electronicLevelTwo";


/* =======================
   Yup validation schema
======================= */
const validationSchema = Yup.object({
  image: Yup.string().required("Image is required"),
  category: Yup.string().required("Category is required"),
});

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const UpdateHomeCategoryForm = ({ category, handleClose }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
      category: "",
      category2: "",
      category3: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values, category);

      if (category && category._id) {
        dispatch(
          updateHomeCategory({
            id: category._id,
            data: {
              image: values.image,
              categoryId: values.category3,
            },
          })
        );
      }

      handleClose();
    },
  });

  const childCategory = (categoryList, parentCategoryId) => {
    return categoryList.filter(
      (child) => child.parentCategoryId == parentCategoryId
    );
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <Typography variant="h4" gutterBottom>
        Update Category
      </Typography>

      {/* Image */}
      <TextField
        fullWidth
        id="image"
        name="image"
        label="Image URL"
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
      />

      {/* Main Category */}
      <FormControl
        fullWidth
        error={formik.touched.category && Boolean(formik.errors.category)}
        required
      >
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Category"
        >
          {mainCategory.map((item) => (
            <MenuItem key={item.categoryId} value={item.categoryId}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && (
          <FormHelperText>{formik.errors.category}</FormHelperText>
        )}
      </FormControl>

      {/* Second Category */}
      <FormControl fullWidth required>
        <InputLabel id="category2-label">Second Category</InputLabel>
        <Select
          labelId="category2-label"
          id="category2"
          name="category2"
          value={formik.values.category2}
          onChange={formik.handleChange}
          label="Second Category"
        >
          {formik.values.category &&
            categoryTwo[formik.values.category]?.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* Third Category */}
      <FormControl fullWidth required>
        <InputLabel id="category3-label">Third Category</InputLabel>
        <Select
          labelId="category3-label"
          id="category3"
          name="category3"
          value={formik.values.category3}
          onChange={formik.handleChange}
          label="Third Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {formik.values.category2 &&
            childCategory(
              categoryThree[formik.values.category],
              formik.values.category2
            ).map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* Submit */}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ py: ".9rem" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default UpdateHomeCategoryForm;



