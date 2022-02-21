import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    color: "#645A53",
    backgroundColor: "#fff5f6",
  },
  top: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    paddingLeft: "12px",
  },
  linktxt: {
    fontFamily: "Poppins",
    textTransform: "none",
  },
  contains: {
    padding: "10px",
  },
  banner: {
    objectFit: "cover",
    width: "100%",
    height: "350px",
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },

  container: {
    padding: "10px 5%",
    width: "100%",
    margin: 0,
    paddingBottom: "15px",
  },
  icon: {
    marginRight: "20px",
  },

  instructor: {
    paddingBottom: "100px",
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    padding: "20px 0",
  },
  rightSide: {
    height: "400px",
    overflow: "auto",
    background: "#fff",
    padding: "10px",
    border: "10px",
  },
  acTitle: {
    backgroundColor: "red",
  },
  roots: {
    flexGrow: 1,
    padding: "40px 0",
  },
  songList: {
    maxHeight: "47.5vh",
    overflowX: "auto",
  },
  title: {
    margin: "15px 0",
    color: "black",
  },
  heading: {
    textAlign: "center",
    color: "black",
    paddingTop: "20px",
  },
  bgIcon: {
    color: "crimson",
  },
  tabcontainer: {
    "& .Mui-selected": {
      color: "#ea5252 !important",
      fontWeight: "600 !important",
    },
  },

  taskRoot: {
    background: "#EEE",
    color: "#645A53",
  },
  taskWrapper: {
    background: "white",
    margin: "20px 0",
    padding: "20px",
    borderRadius: "8px",
  },
  headingWrapper: {
    borderBottom: "2px solid #EEE",
    display: "flex",
    justifyContent: "space-between",
  },
  taskhead: {
    color: "#645A53",
    padding: "4px",
    marginBottom: "6px",
    marginTop: "6px",
  },
  taskcontent: {
    paddingTop: "8px",
    paddingLeft: "8px",
  },
  taskHeading: {
    display: "flex",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
  start: {
    marginTop: "5px",
    borderLeft: "3px solid green",
    paddingLeft: "2px",
  },
  end: {
    borderLeft: "3px solid red",
    paddingLeft: "2px",
    marginTop: "5px",
  },
});
