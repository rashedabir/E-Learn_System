import React from 'react';
import LessonVideo from './lessonsVideo/LessonVideo';
import { useStyle } from "./styles";

const Lesson = (props) => {
    const classes = useStyle();
    const { title, videos } = props.lessons;
    return (
        <div>
            <h3 className={classes.lessonhead}>Lesson : {title}</h3>
            {
                videos.map(video => <LessonVideo videos={video} key={video.id}></LessonVideo>)
            }
        </div>
    );
};

export default Lesson;