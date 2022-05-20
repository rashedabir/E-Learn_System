import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function DashboardAPI(token) {
  const [dashboard, setDashboard] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            "https://e-learn-bd.herokuapp.com/api/admin/dashboard",
            {
              headers: { Authorization: token },
            }
          );
          setDashboard(res.data);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getUser();
    }
  }, [token, callback]);

  return {
    dashboard: [dashboard, setDashboard],
    callback: [callback, setCallback],
  };
}

export default DashboardAPI;
