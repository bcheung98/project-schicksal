import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Table, TableBody, TableContainer, TableHead, Paper, TableRow } from "@mui/material";
import { StyledTableCell } from "../../helpers/CustomTable";

const BattlesuitStats = (props) => {

    const theme = useTheme();

    return (
        <TableContainer
            component={Paper}
            sx={{
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                margin: "auto",
                width: "95%",
            }}
        >
            <Table sx={{ backgroundColor: theme.paper.backgroundColor }}>
                <TableHead>
                    <StyledTableCell>Rank</StyledTableCell>
                    <StyledTableCell>Level</StyledTableCell>
                    <StyledTableCell>HP</StyledTableCell>
                    <StyledTableCell>SP</StyledTableCell>
                    <StyledTableCell>ATK</StyledTableCell>
                    <StyledTableCell>DEF</StyledTableCell>
                    <StyledTableCell>CRIT</StyledTableCell>
                </TableHead>
                <TableBody>
                    {
                        Object.values(props.stats).map((row, index) => (
                            <TableRow key={index}>
                                <StyledTableCell><img src={`${process.env.REACT_APP_URL}/ranks/Valkyrie_${Object.keys(props.stats)[index]}.png`} alt={Object.keys(props.stats)[index]} style={{ height: "32px" }} /></StyledTableCell>
                                <StyledTableCell>80</StyledTableCell>
                                <StyledTableCell>{row[0]}</StyledTableCell>
                                <StyledTableCell>{row[1]}</StyledTableCell>
                                <StyledTableCell>{row[2]}</StyledTableCell>
                                <StyledTableCell>{row[3]}</StyledTableCell>
                                <StyledTableCell>{row[4]}</StyledTableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BattlesuitStats;