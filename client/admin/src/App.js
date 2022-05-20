import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import CourseCategory from "./components/Category/CourseCategory";
import { createTheme, ThemeProvider } from "@mui/material";
import BlogCategory from "./components/Category/BlogCategory";
import Instructor from "./components/Instructor/Instructor";
import InstructorInfo from "./components/InstructorInfo/InstructorInfo";
import Dashboard from "./components/Dashboard/Dashboard";
import CourseList from "./components/CourseList/CourseList";
import AddBlogs from "./pages/blogs/AddBlogs";
import Blogs from "./pages/blogs/Blogs";
import axios from "axios";
import { useContext } from "react";
import { GlobalState } from "./GlobalState";
import NotFound from "./pages/NotFound";

axios.defaults.withCredentials = true;

function App() {
  const theme = createTheme();
  const state = useContext(GlobalState);
  const [isLogged] = state?.userAPI?.isLogged;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/courseCategory"
            element={isLogged ? <CourseCategory /> : <NotFound />}
          />
          <Route
            path="/instructor"
            element={isLogged ? <Instructor /> : <NotFound />}
          />
          <Route
            path="/blogCategory"
            element={isLogged ? <BlogCategory /> : <NotFound />}
          />
          <Route
            path="/instructor/:id"
            element={isLogged ? <InstructorInfo /> : <NotFound />}
          />
          <Route path="/" element={isLogged ? <NotFound /> : <Login />} />
          <Route
            path="/dashboard"
            element={isLogged ? <Dashboard /> : <NotFound />}
          />
          <Route
            path="/courseList"
            element={isLogged ? <CourseList /> : <NotFound />}
          />
          <Route
            path="/add_blogs"
            element={isLogged ? <AddBlogs /> : <NotFound />}
          />
          <Route
            path="/edit_blogs/:blogId"
            element={isLogged ? <AddBlogs /> : <NotFound />}
          />
          <Route path="/blogs" element={isLogged ? <Blogs /> : <NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
