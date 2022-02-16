import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff5f6",
    minHeight: "90vh",
    padding: "50px 20px",
  },
  heading: {
    padding: "50px 0",
    textAlign: "center",
  },
  formWrapper: {
    maxWidth: "400px",
    margin: "0px auto",
    border: "2px solid #e6e6e6",
    padding: "20px",
    borderRadius: "10px",
    background: "white",
  },
  btn: {
    height: "40px",
    backgroundColor: "#EA5252",
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
