import axios from "axios";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalState } from "./GlobalState";
import AllCourse from "./pages/allCourse/AllCourse";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/registration/Registration";
import Blogs from "./pages/blogs/allBlogs/Blogs";
import BlogDetails from "./pages/blogs/blogDetails/BlogDetails";
import CreateCourse from "./pages/createCourse/CreateCourse";
import CourseDetails from "./pages/home/CourseDetails/CourseDetails";
import EnrollStudent from "./pages/home/enroll/enroll";
import Home from "./pages/home/Home";
import InstructorDashboard from "./pages/instrucrorDashboard/InstructorDashboard";
import AddLesson from "./pages/instrucrorDashboard/singleCourse/addLesson/AddLesson";
import AddTask from "./pages/instrucrorDashboard/singleCourse/addTask/AddTask";
import SingleCourse from "./pages/instrucrorDashboard/singleCourse/SingleCourse";
import AllSubmission from "./pages/instrucrorDashboard/singleCourse/tasks/allSubmission/AllSubmission";
import NotFound from "./pages/notFound/NotFound";
import GeneralInformation from "./pages/profile/generalInformation/GeneralInformation";
import GeneralSetting from "./pages/profile/generalSetting/GeneralSetting";
import SingleCourseDetails from "./pages/StudentDashboard/SingleCourseDetails/SinglecourseDetails";
import SubmitTask from "./pages/StudentDashboard/SingleCourseDetails/task/submitTask/SubmitTask";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import ParentDashboard from "./pages/parentDashboard/parentDashboard";
import ParentCourseShow from "./pages/parentDashboard/parentCourseShow/parentCourseShow";
import ParentCourseDetails from "./pages/parentDashboard/parentCourseDetails/parentcourseDetails";
import CourseDiscussion from "./pages/courseDiscussion/CourseDiscussion";
import JobView from "./pages/job/jobView/JobView";
import JobDetails from "./pages/job/jobDetails/JobDetails";
import CreateBlog from "./pages/blogs/createBlog/CreateBlog";
import BlogList from "./pages/blogs/BlogList";
import VideoStream from "./pages/videoStraming/VideoStream";

axios.defaults.withCredentials = true;

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [user] = state.userAPI.user;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
        <Route
          path="/registration"
          element={isLogged ? <NotFound /> : <Registration />}
        />
        <Route
          path="/profile"
          element={isLogged ? <GeneralInformation /> : <NotFound />}
        />
        <Route
          path="/setting"
          element={isLogged ? <GeneralSetting /> : <NotFound />}
        />
        <Route path="/courses" element={<AllCourse />} />
        <Route
          path="/instructor_dashboard"
          element={isLogged ? <InstructorDashboard /> : <NotFound />}
        />
        <Route path="/create_course" element={<CreateCourse />} />
        <Route path="/course_details/:courseId" element={<SingleCourse />} />
        <Route path="/course_edit/:courseId" element={<CreateCourse />} />
        <Route
          path="/create_lesson/:courseId"
          element={
            isLogged && user.type === "instructor" && user.status ? (
              <AddLesson />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/update_lesson/:lessonId"
          element={
            isLogged && user.type === "instructor" && user.status ? (
              <AddLesson />
            ) : (
              <NotFound />
            )
          }
        />
        <Route path="/details/:courseId" element={<CourseDetails />} />
        <Route
          path="/student_dashboard"
          element={
            isLogged && user.type === "student" ? (
              <StudentDashboard />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/enroll_page_student/:courseId"
          element={<EnrollStudent />}
        />
        <Route
          path="/single_course_details/:courseId"
          element={<SingleCourseDetails />}
        />
        <Route
          path="/course_task/:courseId"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <AddTask />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/update_task/:taskId/"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <AddTask />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/create_blog"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <CreateBlog />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/edit_blogs/:blogId"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <CreateBlog />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/blog"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <BlogList />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/all_submission/:taskId"
          element={
            isLogged && user.type === "instructor" && user?.status ? (
              <AllSubmission />
            ) : (
              <NotFound />
            )
          }
        />
        <Route
          path="/task_submission/:taskId"
          element={
            isLogged && user.type === "student" ? <SubmitTask /> : <NotFound />
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog_details/:blogId" element={<BlogDetails />} />
        <Route
          path="/parent_dashboard"
          element={isLogged ? <ParentDashboard /> : <NotFound />}
        />
        <Route path="/child_course/:studentId" element={<ParentCourseShow />} />
        <Route
          path="/parent_course_details/:courseId"
          element={<ParentCourseDetails />}
        />
        <Route
          path="/course_discussion/:discussionId"
          element={<CourseDiscussion />}
        />

        <Route path="*" element={<NotFound />} />
        <Route
          path="/video-stream/:streamId"
          element={isLogged ? <VideoStream /> : <NotFound />}
        />

        <Route path="/job_view" element={<JobView />} />
        <Route path="/job_details" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
