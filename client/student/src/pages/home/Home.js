import React from "react";
import { useStyle } from "./styles";

const Home = () => {
  const classes = useStyle();
  return <div className={classes.root}>home</div>;
};

export default Home;
