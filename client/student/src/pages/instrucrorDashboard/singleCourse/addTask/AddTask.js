import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import { useStyle } from "./styles";

const AddTask = () => {
    const classes = useStyle();
    const [startvalue, setStartValue] = React.useState(new Date());
    const [endvalue, setEndValue] = React.useState(new Date());
    return (
        <div className={classes.root}>
            <div className={classes.containers}>
                <Container maxWidth="xl">
                    <h1>Task</h1>
                    <Grid container spacing={4} alignItems="center" >
                        <Grid item xs={12} sx={{ marginBottom: "12px" }}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Task Title"
                                variant="outlined"
                                color="warning"
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
                            color="warning"
                        />
                    </Grid>

                    <Grid container sx={{ marginTop: "1px" }} spacing={3}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    fullWidth
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Start Date"
                                    value={startvalue}
                                    color="warning"
                                    onChange={(newStartValue) => {
                                        setStartValue(newStartValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    fullWidth
                                    renderInput={(props) => <TextField {...props} />}
                                    label="End Date"
                                    value={endvalue}
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
        </div>
    );
};

export default AddTask;