import React, { useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { colors } from "../../data/filters/color";
import { mainCategory } from "../../data/category/mainCategory";
import { electronicsLevelTwo } from "../../data/category/levelTwo/electronicLevelTwo";
import { furnitureLevelTwo } from "../../data/category/levelTwo/furnitureLevelTwo";
import { womenLevelTwo } from "../../data/category/levelTwo/womenLevelTwo";
import { menLevelTwo } from "../../data/category/levelTwo/menLevelTwo";
import { electronicsLevelThree } from "../../data/category/levelThree/electronicLevelThree";
import { womenLevelThree } from "../../data/category/levelThree/womenLevelThree";
import { menLevelThree } from "../../data/category/levelThree/menLevelThree";
import { furnitureLevelThree } from "../../data/category/levelThree/furnitureLevelThree";
import { uploadToCloudinary } from "../../util/uploadToCloudnary";
import { useAppDispatch } from "../../Redux Toolkit/store";
import { createProduct } from "../../Redux Toolkit/features/seller/sellerProductSlice";

const AddProducts = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch=useAppDispatch()
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: 100,
      color: "",
      images: [

      ],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (value) => {
      const jwt=localStorage.getItem("jwt")
      value.quantity
      dispatch(createProduct({jwt,request:value}))
      console.log(value);
    },
//     onSubmit: (value) => {
//   const jwt = localStorage.getItem("jwt");

//   const payload = {
//     ...value,
//     mrpPrice: Number(value.mrpPrice),
//     sellingPrice: Number(value.sellingPrice),
//   };

//   dispatch(createProduct({ jwt, request: payload }));
// }

  });

//   const handleImageChange = async(event) => {
// const file=event.target.files[0]
// setUploadImage(true)
// const image=await uploadToCloudinary(file)
// formik.setFieldValue("image",[...formik.values.images,image]);
// setUploadImage(false)
//     console.log("handle image change");
//   };

const handleImageChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;


  setUploadImage(true);

  const imageUrl = await uploadToCloudinary(file);

  if (imageUrl) {
    formik.setFieldValue("images", [
      ...formik.values.images,
      imageUrl,
    ]);
  }

  setUploadImage(false);
};

  const handleRemoveImage = () => {
    console.log("handle remove image");
  };
  const sizes = ["FREE", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];

  const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    kids: [],
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronics: electronicsLevelTwo,
  };

  const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    kids: [],
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronics: electronicsLevelThree,
  };
const childCategory = (categoryList = [], parentCategoryId) => {
  return categoryList.filter(
    (child) => child.parentCategoryId === parentCategoryId
  );
};



  return (
    <div>
      <h1 className="font-bold text-3xl text-center py-5">ADD PRODUCTS</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="fileInput" className="relative">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternateIcon className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((item, index) => (
                <div className="relative" key={index}>
                  <img src={item} alt="" className="w-24 h-24 object-cover" />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_Price"
              name="mrpPrice"
              label="MRP Price"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id="selling_Price"
              name="sellingPrice"
              label="selling Price"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                id="color"
                labelId="color-label"
                name="color"
                value={formik.values.color}
                label="Color"
                onChange={formik.handleChange}
              >
                <MenuItem value="none">none</MenuItem>
                {colors.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FormControl fullWidth required>
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                id="size"
                labelId="size-label"
                name="sizes"
                value={formik.values.sizes}
                label="size"
                onChange={formik.handleChange}
              >
                <MenuItem value="none">none</MenuItem>
                {sizes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
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
                {mainCategory.map((item, index) => (
                  <MenuItem key={index} value={item.categoryid}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>



          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <FormControl fullWidth required>
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                id="category2"
                labelId="category2-label"
                name="category2"
                value={formik.values.category2}
                label="SecondCategory"
                onChange={formik.handleChange}
              >
                <MenuItem value="none">none</MenuItem>
                {formik.values.category &&categoryTwo[formik.values.category]?.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <FormControl fullWidth required>
              <InputLabel id="category3-label">Third Category</InputLabel>
              <Select
                id="category3"
                labelId="category3-label"
                name="category3"
                value={formik.values.category3}
                label="ThirdCategory"
                onChange={formik.handleChange}
              >
                <MenuItem value="none">none</MenuItem>
                {formik.values.category2 &&
                childCategory(categoryThree[formik.values.category],
                  formik.values.category2)?.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid  size={{ xs: 12 }} >
         <Button sx={{p:"14px"}} type="submit" fullWidth variant="contained">
           Add product
         </Button>
          </Grid>


        </Grid>
      </form>
    </div>
  );
};

export default AddProducts;
