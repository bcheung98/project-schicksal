import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const BattlesuitBackground = (battlesuitType) => {
    let color = "";
    switch (battlesuitType) {
        case "Biologic":
            color = "rgb(255, 175, 44)";
            break;
        case "Psychic":
            color = "rgb(255, 102, 204)";
            break;
        case "Mecha":
            color = "rgb(44, 227, 255)";
            break;
        case "Quantum":
            color = "rgb(160, 135, 255)";
            break;
        case "Imaginary":
            color = "rgb(241, 212, 144)";
            break;
        default:
            color = "rgb(192, 192, 192)";
    }
    return color;
}

const BattlesuitCard = (props) => {

    const theme = useTheme();
    let { battlesuit } = props;

    return (
        <Box
            sx={{
                width: "135px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: BattlesuitBackground(battlesuit.type),
                }}
            >
                <img src={(`${process.env.REACT_APP_URL}/characters/battlesuits/icons/${battlesuit.name.split(" ").join("_")}_(Icon).png`)} alt={battlesuit.name} />
            </Box>
            <Typography sx={`${theme.font}`}>{battlesuit.name}</Typography>
        </Box>
    )

}

export default BattlesuitCard;