import React, { useEffect, useState } from "react";
import { useStyle } from "./styles";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Cards from "../../../components/Cards/Card";

// const tabList = [
//   "Python",
//   "Excel",
//   "Web Development",
//   "Web Design",
//   "JavaScript",
//   "Data Science",
//   "Machine Learning",
//   "Aws Certification",
//   "Python",
//   "Excel",
//   "Web Development",
//   "Web Design",
//   "JavaScript",
//   "Data Science",
//   "Machine Learning",
//   "Aws Certification",
// ];

const CoursesTab = () => {
  const classes = useStyle();
  const [tabList, setTabList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    //course list
    const getCourses = async () => {
      await axios.get("/api/all_course").then((res) => {
        if (res.status === 200) {
          const { courses } = res.data;
          setCourseList(courses);
          let list = [...new Set(courses.map((item) => item.category))];
          setTabList(list);
        }
      });
    };
    getCourses();
  }, []);

  // const getList = {
  //   tabList.map((item) => {
  //     return item[name]
  //   })
  // }

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
              // textColor="secondary"
            >
              {tabList &&
                tabList.map((item, i) => (
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label={item}
                    value={i}
                    key={i}
                    className={classes.tab}
                  />
                ))}
            </TabList>
          </Box>
          {tabList &&
            tabList.map((tab, index) => {
              return (
                <TabPanel value={index}>
                  <Grid container spacing={4}>
                    {courseList &&
                      courseList
                        .filter((item, i) => item.category === tab)
                        .slice(0, 4)
                        .map((item, i) => (
                          <Grid item md={3}>
                            <Cards key={i} item={item} type="details" />
                          </Grid>
                        ))}
                  </Grid>
                </TabPanel>
              );
            })}
        </TabContext>
      </Container>
    </div>
  );
};

export default CoursesTab;
