// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import {
//   Button,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
// import { getAllDeals } from "../../Redux Toolkit/features/admin/dealSlice";
// import { fetchSellers } from "../../Redux Toolkit/features/seller/sellerSlice";

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

// const accountStatuses = [
//   {
//     status: "PENDING_VERIFICATION",
//     title: "Pending Verification",
//     description: "Account is created but not yet verified",
//   },
//   {
//     status: "ACTIVE",
//     title: "Active",
//     description: "Account is active and in good standing",
//   },
//   {
//     status: "SUSPENDED",
//     title: "Suspended",
//     description: "Account is temporarily suspended, possibly due to violations",
//   },
//   {
//     status: "DEACTIVATED",
//     title: "Deactivated",
//     description:
//       "Account is deactivated, user may have chosen to deactivate it",
//   },
//   {
//     status: "BANNED",
//     title: "Banned",
//     description: "Account is permanently banned due to severe violations",
//   },
//   {
//     status: "CLOSED",
//     title: "Closed",
//     description: "Account is permanently closed, possibly at user request",
//   },
// ];

// export default function SellerTable() {
//   const dispatch = useAppDispatch();
//   const seller = useAppSelector((store) => store.seller);

//   const [status, setstatus] = useState(accountStatuses[0].status);

//   const handleChange = (event) => {
//     setstatus(event.target.value);
//   };

//   useEffect(() => {
//     dispatch(fetchSellers(status));
//   }, [status]);

//   console.log(seller);

//   return (
//     <>
//       <div className="pb-5 w-60">
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">status</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={status}
//             label="status"
//             onChange={handleChange}
//           >
//             {" "}
//             {accountStatuses.map((status) => (
//               <MenuItem value={status.status}>{status.status}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Seller Name</StyledTableCell>
//               <StyledTableCell align="right">Email</StyledTableCell>
//               <StyledTableCell align="right">Mobile</StyledTableCell>
//               <StyledTableCell align="right">GSTIN</StyledTableCell>
//               <StyledTableCell>Bussiness Name</StyledTableCell>
//               <StyledTableCell align="right">Account Status</StyledTableCell>
//               <StyledTableCell align="right">Change Status</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {seller?.sellers.map((item) => (
//               <StyledTableRow key={item._id}>
//                 <StyledTableCell component="th" scope="row">
//                   {item.sellerName}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{item.email}</StyledTableCell>
//                 <StyledTableCell align="right">{item.mobile}</StyledTableCell>
//                 <StyledTableCell align="right">{item.GSTIN}</StyledTableCell>
//                 <StyledTableCell align="right">
//                   {item.businessDetails.businessName}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   {item.accountStatus}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">
//                   <Button>update</Button>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
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
import {
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import {
  fetchSellers,
  updateSellerAccountStatus,
} from "../../Redux Toolkit/features/seller/sellerSlice";

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

const accountStatuses = [
  { status: "PENDING_VERIFICATION", title: "Pending Verification" },
  { status: "ACTIVE", title: "Active" },
  { status: "SUSPENDED", title: "Suspended" },
  { status: "DEACTIVATED", title: "Deactivated" },
  { status: "BANNED", title: "Banned" },
  { status: "CLOSED", title: "Closed" },
];

export default function SellerTable() {
  const dispatch = useAppDispatch();
  const seller = useAppSelector((store) => store.seller);

  const [status, setStatus] = useState(accountStatuses[0].status);
  const [anchorEl, setAnchorEl] = useState({});

  useEffect(() => {
    dispatch(fetchSellers(status));
  }, [status, dispatch]);

  const handleStatusFilterChange = (event) => {
    setStatus(event.target.value);
  };

  const handleMenuOpen = (event, sellerId) => {
    setAnchorEl((prev) => ({ ...prev, [sellerId]: event.currentTarget }));
  };

  const handleMenuClose = (sellerId) => {
    setAnchorEl((prev) => ({ ...prev, [sellerId]: null }));
  };

  const handleUpdateSellerStatus = (sellerId, newStatus) => {
    dispatch(updateSellerAccountStatus({ id: sellerId, status: newStatus }));
    handleMenuClose(sellerId);
  };

  return (
    <>
      {/* STATUS FILTER */}
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select value={status} label="Status" onChange={handleStatusFilterChange}>
            {accountStatuses.map((s) => (
              <MenuItem key={s.status} value={s.status}>
                {s.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Mobile</StyledTableCell>
              <StyledTableCell>GSTIN</StyledTableCell>
              <StyledTableCell>Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {seller?.sellers?.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell>{item.sellerName}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>{item.mobile}</StyledTableCell>
                <StyledTableCell>{item.GSTIN}</StyledTableCell>
                <StyledTableCell>
                  {item.businessDetails?.businessName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.accountStatus}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={(e) => handleMenuOpen(e, item._id)}>
                    Change Status
                  </Button>

                  <Menu
                    anchorEl={anchorEl[item._id]}
                    open={Boolean(anchorEl[item._id])}
                    onClose={() => handleMenuClose(item._id)}
                  >
                    {accountStatuses.map((s) => (
                      <MenuItem
                        key={s.status}
                        onClick={() =>
                          handleUpdateSellerStatus(item._id, s.status)
                        }
                      >
                        {s.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}

            {seller?.sellers?.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No sellers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

