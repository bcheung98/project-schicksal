import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Table, TableBody, TableContainer, TableHead, Paper, TableRow } from "@mui/material";
import { StyledTableCell } from "../../helpers/CustomTable";

const BattlesuitUnlockCosts = (props) => {

    const theme = useTheme();
    let { unlockCosts } = props;

    return (
        <React.Fragment>
            <Typography
                variant="body1"
                sx={{
                    margin: "auto",
                    width: "50%",
                }}
            >
                <b>Unlock Cost:</b> {unlockCosts.unlockCost} Fragments
            </Typography>
            <br />
            <TableContainer
                component={Paper}
                sx={{
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    margin: "auto",
                    width: "50%",
                }}
            >
                <Table sx={{ backgroundColor: theme.paper.backgroundColor }}>
                    <TableHead>
                        <StyledTableCell>Rank</StyledTableCell>
                        <StyledTableCell>Fragments Required</StyledTableCell>
                    </TableHead>
                    <TableBody>
                        {
                            unlockCosts.rankUpCosts.map((key, index) => (
                                <TableRow key={index}>
                                    <StyledTableCell>
                                        <Box sx={{ display: "flex" }}>
                                            <img src={`${process.env.REACT_APP_URL}/ranks/Valkyrie_${key[0].split("-")[0]}.png`} alt={key[0].split("-")[0]} style={{ height: "32px" }} />
                                            <Typography sx={{ mt: "5px" }}>→</Typography>
                                            <img src={`${process.env.REACT_APP_URL}/ranks/Valkyrie_${key[0].split("-")[1]}.png`} alt={key[0].split("-")[1]} style={{ height: "32px" }} />
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell>{key[1]}</StyledTableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default BattlesuitUnlockCosts;