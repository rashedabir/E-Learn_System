import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Grow,
  Skeleton,
  Typography,
} from "@mui/material";

function CourseCard() {
  return (
    <Grow in>
      <Grid container spacing={4}>
        {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, i) => (
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
  );
}

export default CourseCard;
