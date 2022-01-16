import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CourseCategoryAPI(token) {
  const [courseCategory, setCourseCategory] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getCourseCategory = async () => {
        try {
          const res = await axios.get("/api/admin/course_cetegory", {
            headers: { Authorization: token },
          });
          setCourseCategory(res.data.categories);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getCourseCategory();
    }
  }, [token, callback]);

  return {
    courseCategory: [courseCategory, setCourseCategory],
    callback: [callback, setCallback],
  };
}

export default CourseCategoryAPI;
