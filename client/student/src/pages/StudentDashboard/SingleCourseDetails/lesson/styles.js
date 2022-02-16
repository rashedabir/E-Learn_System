import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    background: "#EEE",
    color: "#645A53",
  },
  lessonHead: {
    color: "#645A53",
    marginBottom: "0px",
    marginTop: "0px",
    display: "flex",
    alignItems: "center",
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  lessoncontent: {
    paddingLeft: "8px",
  },
  lessonWrapper: {
    background: "white",
    margin: "20px 0",
    padding: "20px",
    borderRadius: "8px",
  },
});
