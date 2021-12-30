import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import CategoriesAPI from "../api/CategoriesAPI";


export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get(
      "https://course-hub-backend.herokuapp.com/user/refresh_token"
    );
    setToken(res.data.accessToken);
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const state = {
    token: [token, setToken],

    categoryAPI: CategoriesAPI(),
    
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};