import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [callback, setCallback] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (token) {
      const getParent = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            "https://e-learn-bd.herokuapp.com/api/parent/profile",
            {
              headers: { Authorization: token },
            }
          );
          setIsLogged(true);
          //   setList(res.data.user.list);
          //   res.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setUser(res.data.parent);
          setLoading(false);
          toast.success("Wellcome");
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      const getStudent = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            "https://e-learn-bd.herokuapp.com/api/student/profile",
            {
              headers: { Authorization: token },
            }
          );
          setIsLogged(true);
          setList(res.data.student.enrolled);
          //   res.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setUser(res.data.student);
          setLoading(false);
          toast.success("Wellcome");
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      const getInstructor = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            "https://e-learn-bd.herokuapp.com/api/instructor/profile",
            {
              headers: { Authorization: token },
            }
          );
          setIsLogged(true);
          //   setList(res.data.user.list);
          //   res.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setUser(res.data.instructor);
          setLoading(false);
          toast.success("Wellcome");
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      const { user } = JSON.parse(localStorage.getItem("AUTH"));
      if (user.type === "parent") {
        getParent();
      } else if (user.type === "student") {
        getStudent();
      } else {
        getInstructor();
      }
    }
  }, [token]);

  const addList = async (course) => {
    if (!isLogged) {
      return alert("Please Login or Registration to Continue Buying");
    }

    const check = list.every((item) => {
      return item.courseDetails._id !== course.courseDetails._id;
    });

    if (check) {
      setList([...list, { ...course }]);

      await axios.patch(
        "https://e-learn-bd.herokuapp.com/api/course/enroll",
        { enrolled: [...list, { ...course }] },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Successfully Enrolled");
    } else {
      toast.warn("Already Enrolled in This Course");
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    callback: [callback, setCallback],
    user: [user, setUser],
    loading: [loading, setLoading],
    addList: addList,
    list: [list, setList],
  };
}

export default UserAPI;
