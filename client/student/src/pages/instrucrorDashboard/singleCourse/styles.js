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
  contains: { padding: "10px" },
  banner: {
    objectFit: "cover",
    width: "100%",
    height: "365px",
    marginBottom: "5px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },

  container: {
    padding: "10px 10px",
    width: "100%",
    margin: 0,
    paddingBottom: "15px",
  },
  icon: {
    marginRight: "20px",
  },

  obj: {
    paddingBottom: "200px",
  },
  tabcontainer: {
    "& .Mui-selected": {
      color: "#ea5252 !important",
      fontWeight: "600 !important",
    },
  },
});
