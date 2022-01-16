import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function InstructorAPI(token) {
  const [instructors, setInstructors] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/api/admin/instructor", {
            headers: { Authorization: token },
          });
          setInstructors(res.data.instructors);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getUser();
    }
  }, [token, callback]);

  return {
    instructors: [instructors, setInstructors],
    callback: [callback, setCallback],
  };
}

export default InstructorAPI;
