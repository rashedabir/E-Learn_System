import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    background: "#EEE",
    color: "#645A53",
  },
  lessonhead: {
    color: "#645A53",
    padding: "4px",
    marginBottom: "6px",
    marginTop: "6px",
    display: "flex",
    alignItems: "center",
  },
  headingWrapper: {
    borderBottom: "2px solid #EEE",
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
