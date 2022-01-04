import * as React from "react";
import { useStyle } from "./styles";
import { Container } from "@mui/material";
import CarouselCards from "../CarouselCards/CarouselCards";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const tabList = [
  "Python",
  "Excel",
  "Web Development",
  "Web Design",
  "JavaScript",
  "Data Science",
  "Machine Learning",
  "Aws Certification",
  "Python",
  "Excel",
  "Web Development",
  "Web Design",
  "JavaScript",
  "Data Science",
  "Machine Learning",
  "Aws Certification",
];

const CoursesTab = () => {
  const classes = useStyle();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "white" }}>
            <TabList
              variant="scrollable"
              className={classes.tabcontainer}
              onChange={handleChange}
              indicatorColor={false}
              textColor="secondary"
            >
              {tabList &&
                tabList.map((item, i) => (
                  <Tab
                    sx={{ textTransform: "none" }}
                    label={item}
                    value={i.toString()}
                    key={i}
                    className={classes.tab}
                  />
                ))}
            </TabList>
          </Box>
          <TabPanel value="0">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="1">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="2">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="3">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="4">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="5">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="6">
            <CarouselCards></CarouselCards>
          </TabPanel>
          <TabPanel value="7">
            <CarouselCards></CarouselCards>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
};

export default CoursesTab;
