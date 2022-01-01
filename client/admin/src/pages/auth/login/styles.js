import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    background: "#FDFDFD",
    minHeight: "90vh",
    textAlign: "center",
    margin: "80px auto",
  },
  heading: {
    padding: "50px 0",
    textAlign: "center",
  },
  formWrapper: {
    maxWidth: "400px",
    margin: "0px auto",
    border: "1px solid #e6e6e6",
    padding: "20px",
    borderRadius: "10px",
    background: "white",
  },
  password: {
    width: "100%",
  },
  btn: {
    height: "50px",
  },
  msg: {
    textAlign: "center",
    padding: "30px 0",
    fontSize: "20px",
  },
  link: {
    color: "#ed6c02",
    textDecoration: "none",
  },
});
