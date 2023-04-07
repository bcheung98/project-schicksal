import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";

const Nav = () => {

    const theme = useTheme();

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderBottom: "1px solid rgb(83, 71, 60)"
            }}
        >
            <Container maxWidth="xl" sx={{ margin: 0 }}>
                <Toolbar disableGutters>
                    <ButtonBase
                        disableRipple
                        href={`/project-elysia/`}
                    >
                        <CardHeader
                            avatar={
                                <Avatar src={(`${process.env.REACT_APP_URL}/Crystal_Rose.png`)} alt="PROJECT ELYSIA" sx={{ height: "64px", width: "64px" }} />
                            }
                            title={
                                <Typography variant="h6" noWrap
                                    sx={{
                                        mr: 2,
                                        display: { xs: "none", md: "flex" },
                                        letterSpacing: ".3rem",
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    PROJECT ELYSIA
                                </Typography>
                            }
                        />
                    </ButtonBase>
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Nav;