import * as React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BattlesuitPage = (props) => {

    const theme = useTheme();
    let { character_name, battlesuit_name } = useParams();
    let { characters } = props.characters;
    let character = characters.find(char => char.character.split(" ").join("_") === character_name);
    let battlesuit;
    if (character !== undefined) {
        battlesuit = character.battlesuits.find(battlesuit => battlesuit.name.split(" ").join("_") === battlesuit_name);
    }

    if (battlesuit !== undefined) {
        let { name, type, rank } = battlesuit;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <Box sx={{ position: "absolute", left: "20px" }}>
                            <img src={`${process.env.REACT_APP_URL}/ranks/Valkyrie_${rank}.png`} alt={rank} />
                        </Box>
                        <img src={`${process.env.REACT_APP_URL}/characters/battlesuits/images/${name.split(" ").join("_")}.png`} alt={name}
                            style={{
                                width: "25vw",
                                height: "660px",
                                objectFit: "cover",
                                marginLeft: "15px",
                                borderLeft: `1px solid ${theme.border.color}`,
                                borderRight: `1px solid ${theme.border.color}`,
                                borderBottom: `1px solid ${theme.border.color}`,
                                borderRadius: "0px 0px 5px 5px",
                            }}
                        />
                    </Grid>
                    <Grid xs>
                        <Box sx={{ display: "flex" }}>
                            <img src={`${process.env.REACT_APP_URL}/types/${type}.png`} alt={type}
                                style={{
                                    height: "72px",
                                    width: "72px",
                                    marginLeft: "25px",
                                    marginTop: "25px",
                                }}
                            />
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
                    </Grid>
                </Grid>
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