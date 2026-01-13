// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import { useAppSelector } from "../../Redux Toolkit/store";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function HomeCategoryTable({categories}) {

   
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//              <StyledTableCell>No</StyledTableCell>
//               <StyledTableCell >Id</StyledTableCell>
//               <StyledTableCell >Image</StyledTableCell>
//               <StyledTableCell align="right">Category</StyledTableCell>
//               <StyledTableCell align="right">update</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {categories?.map((item,index) => (
//             <StyledTableRow key={item._id}>
//               <StyledTableCell component="th" scope="row">
//                 {index}
//               </StyledTableCell>
//               <StyledTableCell >{item._id}</StyledTableCell>
//               <StyledTableCell align="right">  <img
//                     className="w-20 rounded-md"
//                     src={item.image}
//                     alt=""
//                   /></StyledTableCell>
//               <StyledTableCell align="right">{item.categoryId}</StyledTableCell>
//                <StyledTableCell align="right">
//                   <IconButton >
//                     <EditIcon color="primary" />
//                   </IconButton>
//                 </StyledTableCell>
             
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// //https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeJPd5pE6SUPYguDl3djtVfjfhzUg6CHoLDKwUsMPzIKzoo8l9EhYmvXTiRzZkOLNt0kR3DGQqsmonXAWCY5ADbgNoVqpFPLkUi8tkRkDt4xZQcyUvt9vY




import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Modal, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UpdateHomeCategoryForm from "./UpdateHomeCategoryForm";


/* =======================
   Styled Components
======================= */
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

/* =======================
   Modal style
======================= */
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const HomeCategoryTable = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (category) => () => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories?.map((category, index) => (
              <StyledTableRow key={category._id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>

                <StyledTableCell>{category._id}</StyledTableCell>

                <StyledTableCell>
                  <img
                    className="w-20 rounded-md"
                    src={category.image}
                    alt="category"
                  />
                </StyledTableCell>

                <StyledTableCell align="right">
                  {category.categoryId}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton onClick={handleOpen(category)}>
                    <EditIcon className="text-orange-400 cursor-pointer" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ===== MODAL ===== */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <UpdateHomeCategoryForm
            category={selectedCategory}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default HomeCategoryTable;





