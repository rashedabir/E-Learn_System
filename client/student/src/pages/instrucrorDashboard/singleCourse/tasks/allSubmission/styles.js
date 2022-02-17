import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff9f9",
    color: "#645A53",
    paddingBottom: "50px",
  },
  body: {
    paddingTop: "5px",
  },
  containers: {
    marginBottom: "20px",
  },
  headingWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  mark: {
    paddingRight: "5%",
  },
  footer: {
    marginTop: "14px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
  },
  btn: {
    height: "38px",
    backgroundColor: "#EA5252",
  },
  txt: {
    height: "40px",
  },
});
