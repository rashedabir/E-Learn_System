import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';

const AddTask = () => {
    const [startvalue, setStartValue] = React.useState(new Date());
    const [endvalue, setEndValue] = React.useState(new Date());
    return (
        <div>
            <Container maxWidth="xl">
                <h1>Task </h1>
                <Grid container spacing={4} alignItems="center" >
                    <Grid item xs={12} sx={{ marginBottom: "12px" }}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Task Title"
                            variant="outlined"
                            color="secondary"
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Task Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        style={{
                            color: "#EA5252",
                        }}
                    />
                </Grid>

                <Grid container sx={{ marginTop: "1px" }} spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker sx={{ width: "100%" }}
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Start Date"
                                    value={startvalue}
                                    fullWidth
                                    onChange={(newStartValue) => {
                                        setStartValue(newStartValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="End Date"
                                value={endvalue}
                                fullWidth
                                onChange={(newEndValue) => {
                                    setEndValue(newEndValue);
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Button
                    sx={{ my: 5 }}
                    fullWidth
                    variant="contained"
                    style={{
                        backgroundColor: "#EA5252",
                        textTransform: "none",
                    }}
                >
                    Add Task
                </Button>
            </Container>
        </div>
    );
};

export default AddTask;