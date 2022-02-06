import { Container } from '@mui/material';
import React from 'react';
import { useStyle } from './styles';


const AllSubmission = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <div>
                    ALL SUBMISSION
                </div>
            </Container>
        </div>
    );
};

export default AllSubmission;