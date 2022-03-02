import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    paddingBottom: "200px",
    background: "#fafafa",
  },

  heading: {
    display: "flex",
    justifyContent: "center",
    color: "#37474f",
    paddingTop: "40px",
    fontSize: "35px",
  },
  card: {
    padding: "10px",
  },
  section: {
    display: "flex",
    padding: "15px 10px",
  },
  title: {
    margin: "3px 17px",
    color: "#37474f",
    cursor: "pointer",
  },
  icon: {
    marginRight: "8px",
    color: "#757575",
  },
  icon2: {
    color: "#757575",
    cursor: "pointer",
  },
  items: {
    paddingRight: "20px",
    color: "#757575",
  },
  status: {
    marginLeft: "15px",
    backgroundColor: "#e3f2fd",
    color: "#2196f3",
    padding: "8px",
    borderRadius: "15px",
    fontSize: "10px",
    fontFamily: "verdana",
  },
});
