import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/registration/Registration";
import Footer from "./components/footer/Footer";
import InstructorDashboard from "./pages/instrucrorDashboard/InstructorDashboard";
import CreateCourse from "./pages/createCourse/CreateCourse";
import SingleCourse from "./pages/instrucrorDashboard/singleCourse/SingleCourse";
import AddTask from "./pages/instrucrorDashboard/singleCourse/addTask/AddTask";
import AddLesson from "./pages/instrucrorDashboard/singleCourse/addLesson/AddLesson";
import CourseDetails from "./pages/home/CourseDetails/CourseDetails";
import GeneralInformation from "./pages/profile/generalInformation/GeneralInformation";
import GeneralSetting from "./pages/profile/generalSetting/GeneralSetting";
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import SingleCourseDetails from './pages/StudentDashboard/SingleCourseDetails/SinglecourseDetails';
import EnrollStudent from './pages/home/enroll/enroll';

import AllSubmission from "./pages/instrucrorDashboard/singleCourse/tasks/allSubmission/AllSubmission";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<GeneralInformation />} />
        <Route path="/setting" element={<GeneralSetting />} />
        <Route path="/instructor_dashboard" element={<InstructorDashboard />} />
        <Route path="/create_course" element={<CreateCourse />} />
        <Route path="/course_details/:courseId" element={<SingleCourse />} />
        <Route path="/course_edit/:courseId" element={<CreateCourse />} />
        <Route path="/create_lesson/:courseId" element={<AddLesson />} />
        <Route path="/update_lesson/:lessonId" element={<AddLesson />} />
        <Route path="/details/:courseId" element={<CourseDetails/>} />
        <Route path="/student_dashboard" element={<StudentDashboard />} />
        <Route path="/enroll_page_student/:courseId" element={<EnrollStudent />} />
        <Route path="/single_course_details/:courseId" element={<SingleCourseDetails />} />
        <Route path="/course_task/:courseId" element={<AddTask />} />
        <Route path="/update_task/:taskId/" element={<AddTask />} />
        <Route path="/all_submission/:taskId" element={<AllSubmission />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
