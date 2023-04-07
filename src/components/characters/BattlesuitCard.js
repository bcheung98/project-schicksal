import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const BattlesuitCard = (props) => {

    const theme = useTheme();
    let { battlesuit } = props;

    return (
        <Box>
            <img src={(`${process.env.REACT_APP_URL}/characters/battlesuits/icons/${battlesuit.name.split(" ").join("_")}_(Icon).png`)} alt={battlesuit.name} />
            <Typography sx={`${theme.font}`}>{battlesuit.name}</Typography>
        </Box>
    )

}

export default BattlesuitCard;