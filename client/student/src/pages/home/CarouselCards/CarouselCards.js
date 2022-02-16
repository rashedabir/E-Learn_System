import React, { useContext } from "react";
import Carousel from "react-grid-carousel";
import Card from "../../../components/Cards/Card";
import { GlobalState } from "../../../GlobalState";
import { useStyle } from "./styles";

const CarouselCards = ({ courseList }) => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [courses] = state.courseAPI.courses;

  console.log(courses);

  return (
    <div className={classes.root}>
      <Carousel cols={4} rows={1} gap={20} loop>
        {courses &&
          courses?.length > 0 &&
          courses
            .filter((item, i) => item?.enrolled > 0)
            .map((item, i) => (
              <Carousel.Item>
                <Card />
              </Carousel.Item>
            ))}
      </Carousel>
    </div>
  );
};

export default CarouselCards;
