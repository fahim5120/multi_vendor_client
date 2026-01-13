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
// import { useAppDispatch } from "../../Redux Toolkit/store";
// import { useEffect } from "react";
// import { fetchTransactionsBySeller } from "../../Redux Toolkit/features/seller/transactionSlice";

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

// export default function PaymentTable() {
//   const dispatch = useAppDispatch();


//   useEffect(
//     ()=>{
// dispatch(fetchTransactionsBySeller(localStorage.getItem("jwt")))
//     },[]
//   )
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Date</StyledTableCell>
//             <StyledTableCell align="right">Customer</StyledTableCell>
//             <StyledTableCell align="right">Order</StyledTableCell>
//             <StyledTableCell align="right">Amount</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 <div className="">
//                  <p> December 10, </p>
//                   <p>2025 10:34:41 AM</p>
//                 </div>
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">₹12495</StyledTableCell>
             
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }




import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";



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

export default function PaymentTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);

//   useEffect(() => {
//     dispatch(fetchPayoutsBySeller(localStorage.getItem("jwt") || ""));
//   }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Order Items</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sellerOrder?.orders?.map((order) => (
            <StyledTableRow key={order._id}>
              {/* DATE */}
              <StyledTableCell>
                <div>
                  <p>{new Date(order.createdAt).toDateString()}</p>
                  <p>{new Date(order.createdAt).toLocaleTimeString()}</p>
                </div>
              </StyledTableCell>

              {/* ORDER ITEMS */}
              <StyledTableCell>
                <div className="flex gap-3 flex-wrap">
                  {order.orderItems.map((item) => (
                    <div key={item._id} className="flex gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-16 h-20 rounded-md object-cover"
                      />
                      <div className="text-sm">
                        <p><b>{item.product.title}</b></p>
                        <p>₹{item.product.sellingPrice}</p>
                        <p>Size: {item.size}</p>
                        <p>Color: {item.product.color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>

              {/* AMOUNT */}
              <StyledTableCell align="right">
                ₹{order.totalSellingPrice}
              </StyledTableCell>

              {/* STATUS */}
              <StyledTableCell align="right">
                {order.paymentStatus || "PENDING"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

