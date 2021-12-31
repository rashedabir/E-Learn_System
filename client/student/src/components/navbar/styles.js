import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    color: "#5B6A72",
    backgroundColor: "white",
    fontFamily: "popins",
    fontSize: "14px",
    lineHeight: "21px",
  },
  serach: {
    border: "1px solid #C6C6C6",
    borderRadius: "40px",
    width: "270px",
    height: "20px",
    margin: "7px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  signin: {
    color: "#5B6A72",
    display: "flex",
    justifyContent: "right",
  },
  signinbtn: {
    backgroundColor: "#F2F2F2",
    width: "64px",
    height: "30px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    backgroundColor: "#FFF1F1",
    width: "71px",
    height: "30px",
    borderRadius: "6px",
    color: "#EA5252",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});
