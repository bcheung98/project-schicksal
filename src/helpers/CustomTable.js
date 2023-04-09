import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled((props) => (
    <TableCell align="center" size="small" component="th" {...props} />
))(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: `${theme.table.head.backgroundColor}`,
        color: "white",
        fontSize: "11pt",
        fontFamily: "Roboto, sans-serif",
    },
    color: "white",
    fontSize: "10pt",
    fontFamily: "Roboto, sans-serif",
    border: `1px solid ${theme.table.border}`,
}))