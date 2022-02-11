import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import ProfileLayout from '../ProfileLayout';
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from '@mui/icons-material/Settings';

const GeneralSetting = () => {
    return (
        <ProfileLayout>
            <Container>
                <div style={{ color: "#645A53", display: "flex", alignItems: "center" }}>
                    <SettingsIcon />
                    <h2> Change Password</h2>
                </div>
                <Grid container spacing={4} alignItems="center" >
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Current Password"
                            variant="outlined"
                            color="warning"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="New Password"
                            variant="outlined"
                            color="warning"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Repeat New Password"
                            variant="outlined"
                            color="warning"
                            type="password"
                        />
                    </Grid>
                </Grid>

                <Button
                    // onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    style={{
                        backgroundColor: "#EA5252",
                        textTransform: "none",
                    }}
                    sx={{ mt: 5 }}
                >
                    <SaveIcon /> Update Password
                </Button>

            </Container>
        </ProfileLayout>
    );
};

export default GeneralSetting;