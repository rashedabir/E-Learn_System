import React, {  } from "react";
import Carousel from "react-grid-carousel";
import StudentCoursesCard from "../StudentCoursesCard/StudentCoursesCard";
import { useStyle } from "./styles";


const StudentCourses = () => {
  const classes = useStyle();
  // const state = useContext(GlobalState);
  // const [token] = state.token;
  // const [courseList, setCourseList] = useState([]);

  // useEffect(() => {
  //   //get course list
  //   const getCourse = async () => {
  //     await axios
  //       .get("/api/course", {
  //         headers: { Authorization: token },
  //       })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setCourseList(res.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getCourse();
  // }, [token]);

  return (
    <div className={classes.root}>
      <h1> Student Dashbaord</h1>
      <Carousel cols={4} rows={1} gap={20} loop>
        <Carousel.Item>
          <StudentCoursesCard />
        </Carousel.Item>
        <Carousel.Item>
          <StudentCoursesCard />
        </Carousel.Item>
        <Carousel.Item>
          <StudentCoursesCard />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default StudentCourses;
