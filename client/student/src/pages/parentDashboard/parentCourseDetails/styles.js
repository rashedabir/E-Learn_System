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
});
