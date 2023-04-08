import * as React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BattlesuitSkills from "./BattlesuitSkills";

const BattlesuitPage = (props) => {

    const theme = useTheme();
    let { character_name, battlesuit_name } = useParams();
    let { characters } = props.characters;
    let character = characters.find(char => char.character.split(" ").join("_") === character_name);
    let battlesuit;
    if (character !== undefined) {
        battlesuit = character.battlesuits.find(battlesuit => battlesuit.name.split(" ").join("_") === battlesuit_name);
    }

    const CoreStrengthImage = {
        height: "40px",
        marginRight: "5px",
        padding: "2.5px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
    }

    if (battlesuit !== undefined) {
        let { name, rank, type, damageType, coreStrengths } = battlesuit;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <Box sx={{ position: "absolute", left: "20px", top: "120px" }}>
                            <img src={`${process.env.REACT_APP_URL}/ranks/Valkyrie_${rank}.png`} alt={rank} />
                        </Box>
                        <img src={`${process.env.REACT_APP_URL}/characters/battlesuits/images/${name.split(" ").join("_")}.png`} alt={name}
                            style={{
                                width: "25vw",
                                height: "660px",
                                objectFit: "cover",
                                marginLeft: "15px",
                                marginTop: "20px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`
                            }}
                        />
                    </Grid>
                    <Grid xs
                        sx={{
                            mx: "25px",
                            my: "20px",
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`
                        }}
                    >
                        <Box sx={{ display: "flex" }}>
                            <CustomTooltip title={type} arrow placement="top">
                                <img src={`${process.env.REACT_APP_URL}/types/${type}.png`} alt={type}
                                    style={{
                                        height: "72px",
                                        width: "72px",
                                        marginLeft: "25px",
                                        marginTop: "25px",
                                    }}
                                />
                            </CustomTooltip>
                            <Box sx={{ ml: "25px" }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mt: "15px",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {character.character}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    {battlesuit.displayName ? battlesuit.displayName : name}
                                </Typography>
                            </Box>
                        </Box>
                        <hr style={{ border: `.5px solid ${theme.border.color}`, margin: "15px" }} />
                        <Box sx={{ ml: "25px" }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: "15px",
                                    fontStyle: "italic",
                                    color: "rgb(0, 162, 232)",
                                }}
                            >
                                Core Strengths
                            </Typography>
                            <Box sx={{ display: "flex", mt: "5px" }}>
                                <CustomTooltip title={damageType} arrow placement="top">
                                    <img src={`${process.env.REACT_APP_URL}/cores/Core_${damageType}.png`} alt={damageType} style={CoreStrengthImage} />
                                </CustomTooltip>
                                {
                                    coreStrengths.map((core, index) => {
                                        return (
                                            <CustomTooltip key={index} title={core} arrow placement="top">
                                                <img src={`${process.env.REACT_APP_URL}/cores/Core_${core.split(" ").join("_")}.png`} alt={core} key={core} style={CoreStrengthImage} />
                                            </CustomTooltip>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <BattlesuitSkills skills={battlesuit.skills} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(BattlesuitPage);