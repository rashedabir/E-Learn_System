import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mb: 2,
        mt: 2,
        borderRadius: "10px",
        minHeight: "300px",
      }}
    >
      <Grid container spacing={4} sx={{ background: "#fff" }}>
        <Grid item sm={4} md={4} sx={{ pb: 4 }}>
          <div>
            <img
              style={{ width: "100%", minHeight: "250px", objectFit: "cover" }}
              src={item?.images?.url}
              alt="logo"
            />
          </div>
        </Grid>
        <Grid item sm={8} md={8} sx={{ padding: 2 }}>
          <Typography sx={{ mb: 3 }} component="h3" variant="h6">
            {item?.title}
          </Typography>
          <span
            style={{
              fontSize: "15px",
              background: "#ffa400",
              padding: "5px 10px",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            {item?.category}
          </span>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              height: "100px",
              textOverflow: "ellipsis",
              mt: 4,
              mb: 4,
            }}
            variant="p"
            component="p"
          >
            {item?.description && parse(item?.description)}
          </Typography>
          <Typography sx={{ border: "1px solid red", padding: "5px 12px", borderRadius: '8px' }} component={Link} to={`/blog_details/${item?._id}`}>
            Read More
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogCard;
