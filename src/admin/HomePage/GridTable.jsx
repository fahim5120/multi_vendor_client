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
import HomeCategoryTable from "./HomeCategoryTable";
import { useAppSelector } from "../../Redux Toolkit/store";

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
const image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeJPd5pE6SUPYguDl3djtVfjfhzUg6CHoLDKwUsMPzIKzoo8l9EhYmvXTiRzZkOLNt0kR3DGQqsmonXAWCY5ADbgNoVqpFPLkUi8tkRkDt4xZQcyUvt9vY"
export default function GridTable() {
   const homeCategories=useAppSelector(store=>store.homeCategory.homeCategories)
  return (
    <HomeCategoryTable categories={homeCategories?.grid}/>
  );
}
