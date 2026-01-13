import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import { useEffect } from "react";
import { deleteDeal, getAllDeals } from "../../Redux Toolkit/features/admin/dealSlice";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DealTable() {
  const dispatch=useAppDispatch()
  const deal=useAppSelector(store=>store.deal)
  useEffect(
    ()=>{
dispatch(getAllDeals(localStorage.getItem("jwt")))
    },[]
  )

  const handleDeleteDeal=(id)=>{
dispatch(deleteDeal(id))
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deal.deals.map((item, index) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>

              <StyledTableCell align="right">
                {/* {item.category.image} */}
                <img
                  className="w-20 rounded-md"
                  src={item.category.image}
                  alt=""
                />
              </StyledTableCell>
              <StyledTableCell align="right">{item.category.name}</StyledTableCell>

              <StyledTableCell align="right">{item.discount}%</StyledTableCell>

              <StyledTableCell align="right">
                <IconButton>
                  <EditIcon color="primary" />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="right">
                <IconButton onClick={()=>handleDeleteDeal(item._id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeJPd5pE6SUPYguDl3djtVfjfhzUg6CHoLDKwUsMPzIKzoo8l9EhYmvXTiRzZkOLNt0kR3DGQqsmonXAWCY5ADbgNoVqpFPLkUi8tkRkDt4xZQcyUvt9vY
