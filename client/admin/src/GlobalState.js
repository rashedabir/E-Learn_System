import React, { createContext, useEffect, useState } from "react";
import UserAPI from "./api/UserAPI";
import axios from "axios";
import InstructorAPI from "./api/InstructorAPI";
import CourseCategoryAPI from "./api/CourseCategoryAPI";
import CourseAPI from "./api/CourseAPI";
import BlogCategoryAPI from "./api/BlogCategoryAPI";
import DashboardAPI from "./api/DashboardAPI";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get(
      "https://e-learn-bd.herokuapp.com/api/admin/refresh_token"
    );
    setToken(res.data.accessToken);
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
    instructorAPI: InstructorAPI(token),
    courseCategoryAPI: CourseCategoryAPI(token),
    courseAPI: CourseAPI(token),
    blogCategoryAPI: BlogCategoryAPI(token),
    dasboardAPI: DashboardAPI(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
