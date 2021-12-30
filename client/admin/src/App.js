import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Category from "./components/Category";
import { createTheme, ThemeProvider } from "@mui/material";
import BasicTabs from "./components/Tabs";
import BlogCatagory from "./components/BlogCatagory";
import InstructorInfo from "./components/InstructorInfo";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/instructor" element={<BasicTabs />} />
          <Route path="/blog" element={<BlogCatagory />} />
          <Route path="/instructorInfo" element={<InstructorInfo />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
