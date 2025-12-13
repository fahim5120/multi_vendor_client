import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'




const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
         onSubmit: (values) => {
           
           console.log(values);
        }
        
    
    });
  return (
    <div>
       <h1 className='text-2xl-center font-bold  text-teal-600 pb-5'>Login As Seller</h1>
     
    <form onSubmit={formik.handleSubmit} className='space-y-5'>

        <div>
    <TextField
  fullWidth
  name="email"
  label="Enter Your Email"
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.email && Boolean(formik.errors.email)}
  helperText={formik.touched.email ? formik.errors.email : ""}
/>


        </div>
       

        <div>
      <TextField
  fullWidth
  name="otp"
  label="otp"
  value={formik.values.otp}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.otp && Boolean(formik.errors.otp)}
  helperText={formik.touched.otp ? formik.errors.otp : ""}
/>

          </div>
           <div>
          <Button variant='contained' 
          fullWidth type='submit' 
          sx={{ py: "12px" }}>Login</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm