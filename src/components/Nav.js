import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";

const Nav = () => {

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: "rgb(20, 19, 27)",
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
                                null
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