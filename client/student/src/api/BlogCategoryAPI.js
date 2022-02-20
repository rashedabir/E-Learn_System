import axios from "axios";
import { useEffect, useState } from "react";

function BlogCategoryAPI() {
  const [categories, setCategories] = useState([]);
  const [callback, setCallback] = useState(false);

  const getCategory = async () => {
    const res = await axios.get(
      "https://e-learn-bd.herokuapp.com/api/admin/blog_cetegory"
    );
    setCategories(res.data.categories);
  };
  useEffect(() => {
    getCategory();
  }, [callback]);

  return {
    blogCategories: [categories, setCategories],
    callback: [callback, setCallback],
  };
}

export default BlogCategoryAPI;
