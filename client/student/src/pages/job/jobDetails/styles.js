import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    paddingBottom: "200px",
    background: "#fafafa",
  },
  contain: {
    marginTop: "50px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    color: "#37474f",
    paddingTop: "60px",
    fontSize: "35px",
  },
  subHeading: {
    margin: "0px 15px",
  },
  icon: {
    marginRight: "10px",
    color: "#ea5252",
  },
  icon2: {
    color: "#ea5252",
  },
  card: {
    padding: "50px",
  },
  items: {
    paddingRight: "30px",
    color: "#757575",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
  },
  section1: {
    paddingRight: "50px",
  },
  side: {
    background: "#eceff1",
    borderRadius: "16px",
  },
  sideHeading: {
    paddingLeft: "15px",
    fontSize: "22px",
  },
  view: {
    color: "#2196f3",
    "&:hover": {
      textDecoration: "underline #2196f3",
      cursor: "pointer",
    },
  },
  info: {
    paddingBottom: "20px",
  },
  file: {
    paddingRight: "20px",
  },
});
