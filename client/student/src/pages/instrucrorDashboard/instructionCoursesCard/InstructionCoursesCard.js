import { Card } from '@mui/material';
import React from 'react';
import { useStyle } from './styles';

const InstructionCoursesCard = () => {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.root}>
                <Card sx={{ border: "none", boxShadow: "none", }}>
                    <img className={classes.cardimg} width="100%" src="https://picsum.photos/800/600?random=2" alt="" />
                    <button className={classes.tag}>Beginer</button>
                    <h1 className={classes.heading}>Python and Django Full Stack Web Developer Bootcamp</h1>
                </Card>
            </div>
        </div>
    );
};

export default InstructionCoursesCard;