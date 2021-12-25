import React from "react";
import { useStyle } from "./styles";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar />
    </div>
  );
};

export default Home;
