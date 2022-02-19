import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(() => ({
  root: {
    paddingTop: "50px",
    marginBottom: "100px",
  },
  paper: {
    padding: "30px 30px 60px",
    minHeight: "90vh",
  },
  icon2: {
    marginRight: "10px",
    color: "#777",
  },

  button: {
    width: "100%",
    height: "50px",
  },
  section: {
    padding: "10px",
  },

  section2: {
    display: "flex",
    alignItems: "center",
    color: "#777",
  },
  require: {
    width: "100%",
    padding: "10px 5%",
    paddingBottom: "30px",
  },
  require2: {
    display: "flex",
    alignItems: "center",
  },
  banner: {
    objectFit: "cover",
    width: "100%",
    height: "170px",
  },
  img: {
    width: "100%",
  },
  tab2: {
    padding: "50px 20px",
  },
  instructor: {
    fontSize: "20px",
  },
  tabcontainer: {
    "& .Mui-selected": {
      color: "#ea5252 !important",
      fontWeight: "600 !important",
    },
  },
}));
