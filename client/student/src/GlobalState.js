import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import UserAPI from "./api/UserAPI";
import CourseCategoriesAPI from "./api/CourseCategoryAPI";
import CourseAPI from "./api/CourseAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get("/api/refresh_token");
    setToken(res.data.accessToken);
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
    courseCategoryAPI: CourseCategoriesAPI(),
    courseAPI: CourseAPI(),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
