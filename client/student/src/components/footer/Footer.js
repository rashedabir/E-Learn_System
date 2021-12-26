import { Container, Grid } from '@mui/material';
import React from 'react';
import { useStyle } from "./styles";

const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.footer}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                    Secuirity
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    Privacy
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    Cookie setting
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    Terms & condition
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            COPYRIGHT © udemy.com 2021
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Footer;