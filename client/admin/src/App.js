import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import CourseCategory from "./components/Category/CourseCategory";
import { createTheme, ThemeProvider } from "@mui/material";
import BlogCategory from "./components/Category/BlogCategory";
import Instructor from "./components/Instructor/Instructor";
import InstructorInfo from "./components/InstructorInfo/InstructorInfo";
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courseCategory" element={<CourseCategory />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/blogCategory" element={<BlogCategory />} />
          <Route path="/instructor/:id" element={<InstructorInfo />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
