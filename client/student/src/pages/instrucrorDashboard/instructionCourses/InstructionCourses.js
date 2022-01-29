import React from 'react';
import Carousel from "react-grid-carousel";
import InstructionCoursesCard from '../instructionCoursesCard/InstructionCoursesCard';
import { useStyle } from './styles';

const InstructionCourses = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <h1 className={classes.dashboard}>Instructor Dashbaord</h1>
            <Carousel cols={4} rows={1} gap={20} loop>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
                <Carousel.Item>
                    <InstructionCoursesCard />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default InstructionCourses;