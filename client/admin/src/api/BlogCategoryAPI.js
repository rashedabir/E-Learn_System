import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function BlogCategoryAPI(token) {
  const [blogCategory, setBlogCategory] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getBlogCategory = async () => {
        try {
          const res = await axios.get("https://e-learn-bd.herokuapp.com/api/admin/blog_cetegory", {
            headers: { Authorization: token },
          });
          setBlogCategory(res.data.categories);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getBlogCategory();
    }
  }, [token, callback]);

  return {
    blogCategory: [blogCategory, setBlogCategory],
    callback: [callback, setCallback],
  };
}

export default BlogCategoryAPI;
