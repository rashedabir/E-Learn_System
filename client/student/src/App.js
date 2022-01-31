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
import EditCourse from "./pages/instrucrorDashboard/singleCourse/editCourse/EditCourse";
import AddTask from "./pages/instrucrorDashboard/singleCourse/addTask/AddTask";
import AddLesson from "./pages/instrucrorDashboard/singleCourse/addLesson/AddLesson";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/instructor_dashboard" element={<InstructorDashboard />} />
        <Route path="/create_course" element={<CreateCourse />} />
        <Route path="/course_details/:courseId" element={<SingleCourse />} />
        <Route path="/course_edit/:courseId" element={<EditCourse />} />
        <Route path="/course_task/:courseId" element={<AddTask />} />
        <Route path="/course_lesson/:courseId" element={<AddLesson />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
