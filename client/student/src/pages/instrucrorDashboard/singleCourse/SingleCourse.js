import React, { useEffect, useState } from 'react';
import { useStyle } from "./styles";
import { Link, useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const SingleCourse = () => {
    const classes = useStyle();
    const { courseId } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/course_details/${courseId}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [courseId])
    return (
        <div className={classes.root}>
            <Container>
                {/* <h2>Course Name : {course?.courseDetails?.title}</h2> */}
                <div className={classes.top}>
                    <span className={classes.link}><Link to={`/course_edit/${courseId}`}><h3 className={classes.linktxt}>Edit</h3></Link></span>
                    <span className={classes.link}><Link to={`/course_task/${courseId}`}><h3 className={classes.linktxt}>Add Task</h3></Link></span>
                    <span className={classes.link}><Link to={`/course_lesson/${courseId}`}><h3 className={classes.linktxt}>Add Lesson</h3></Link></span>
                </div>
                <img src={course?.courseDetails?.banner?.url} className={classes.banner} alt="..." />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h3>Course Name : {course?.courseDetails?.title}</h3>
                        <p>Cattegory : {course?.courseDetails?.title}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <h3>Istructor : {course?.courseDetails?.instructor?.name}</h3>
                        <p>Price : {course?.courseDetails?.price} Taka</p>
                    </Grid>
                    <div>
                        <p><b>About </b>: {course?.courseDetails?.about} --- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, laudantium recusandae. Distinctio cum officia aperiam aliquam, quisquam corporis aspernatur! Architecto excepturi ex explicabo sed sapiente quidem dicta numquam ullam ipsa impedit voluptatem inventore natus suscipit, eius repellat nostrum voluptatum corporis rem illum. Officia illo atque nemo rem debitis error saepe.</p>

                        <p><b>Description </b>: {course?.courseDetails?.description} --- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, laudantium recusandae. Distinctio cum officia aperiam aliquam, quisquam corporis aspernatur! Architecto excepturi ex explicabo sed sapiente quidem dicta numquam ullam ipsa impedit voluptatem inventore natus suscipit, eius repellat nostrum voluptatum corporis rem illum. Officia illo atque nemo rem debitis error saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa architecto hic maxime itaque sint at numquam. Similique harum fugiat corrupti. Molestias aspernatur dolorum dolorem sint libero ab veniam voluptatem! Id quos, quo vel perferendis molestiae voluptatibus quasi odio natus nihil sint fugit perspiciatis magnam totam numquam eius ea quod. Aliquam delectus debitis et quam. Inventore, sapiente dolore! Repudiandae quae fuga fugit unde sapiente id dolorem, corrupti molestiae eum ducimus dolorum cumque quasi doloribus aspernatur, incidunt nam maxime pariatur? Ipsam quo inventore deserunt minus debitis libero minima dolorum illum neque sapiente suscipit similique maiores, esse iste nemo nisi rem quidem sint possimus? Ipsa deserunt odit incidunt labore animi, recusandae, veritatis reiciendis cum non voluptas quibusdam iusto aspernatur laboriosam sint magnam saepe ducimus culpa quia! Sequi animi perspiciatis non beatae ad nulla illum at laboriosam ipsum saepe ducimus dolores dolorum reprehenderit, neque sapiente dolorem aliquam fugiat reiciendis quidem. Molestias, sapiente dolores? Praesentium, vitae. Odit quisquam alias voluptatem, quia tempora commodi ex sunt est veniam delectus accusamus cumque quibusdam porro labore! Id omnis totam voluptates quae unde esse dolorum minus molestiae. Optio, iusto sed nemo explicabo recusandae fuga facilis accusantium laudantium cumque repudiandae commodi voluptates at? Laudantium beatae atque soluta consequatur laboriosam labore?</p>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default SingleCourse;