import * as React from "react";
import { Box, Typography } from "@mui/material";

const BattlesuitCard = (props) => {

    let {battlesuit} = props

    return (
        <Box>
            <Typography>{battlesuit.name}</Typography>
        </Box>
    )

}

export default BattlesuitCard;