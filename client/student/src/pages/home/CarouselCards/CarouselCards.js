import {
  CardActionArea,
  CardContent,
  Grid,
  Grow,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Carousel from "react-grid-carousel";
import Card from "../../../components/Cards/Card";
import { GlobalState } from "../../../GlobalState";
import { useStyle } from "./styles";

const CarouselCards = ({ courseList }) => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [courses] = state.courseAPI.courses;
  const [loading] = state.courseAPI.loading;

  return (
    <div className={classes.root}>
      {loading ? (
        <Grow in>
          <Grid container spacing={4} sx={{ mb: 10, mt: 5 }}>
            {["1", "2", "3", "4"].map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card>
                  <CardActionArea>
                    <Skeleton height={200} width="100%" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Skeleton height={20} width="100%" />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <Skeleton height={10} width="100%" count={5} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grow>
      ) : (
        <Carousel cols={4} rows={1} gap={20} loop>
          {courses &&
            courses?.length > 0 &&
            courses
              .filter((item, i) => item?.enrolled > 0)
              .map((item, i) => (
                <Carousel.Item key={`favourite${i}`}>
                  <Card type={"details"} item={item} />
                </Carousel.Item>
              ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselCards;
