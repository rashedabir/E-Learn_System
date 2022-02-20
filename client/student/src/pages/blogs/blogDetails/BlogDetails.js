import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Container } from '@mui/material';
import { useStyle } from "./styles";


const BlogDetails = () => {
    const classes = useStyle();
    const { blogId } = useParams();
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(`https://e-learn-bd.herokuapp.com/api/admin/blog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data.blog))
    }, [])
    return (
        <div>
            <Container className={classes.root} maxWidth="xl" >
                {/* */}
                <h1 className={classes.title}>{blog.title}</h1>
                <p className={classes.cardTxt}>
                    <small className={classes.titleFooter}>
                        <i className="far fa-user me-2"></i>Elearning •{" "}
                        {new Date(blog.createdAt).toDateString()}
                    </small>
                </p>
                <img className={classes.image} src={blog?.images?.url} />
                <p className="border-top mt-4 py-4">{ReactHtmlParser(blog.description)}</p>
            </Container>
        </div>
    );
};

export default BlogDetails;