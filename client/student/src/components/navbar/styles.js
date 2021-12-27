import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    color: "black",
    backgroundColor: "white",
  },
  serach: {
    border: "0.2px solid red",
    borderRadius: "80px",
    width: "20%",
    height: "20px",
    margin: "7px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  signin: {
    color: "orange",
    display: "flex",
    justifyContent: "right",
  }
});
