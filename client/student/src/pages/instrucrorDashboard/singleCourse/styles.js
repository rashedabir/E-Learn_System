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
  contains: {},
  banner: {
    objectFit: "cover",
    width: "100%",
    height: "365px",
    marginBottom: "5px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  pading: {
    padding: "0px",
    margin: "0px",
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
});
