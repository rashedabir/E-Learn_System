import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    background: "#eee",
    padding: "50px 20px",
  },
  profileleft: {
    backgroundColor: "white",
    borderRadius: "15px",
    textAlign: "center",
    padding: "50px 20px",
  },
  imag: {
    width: "100%",
    clipPath: "circle()",
    marginBottom: "50px",
  },
  profileright: {
    backgroundColor: "white",
    borderRadius: "15px",
    paddingBottom: "50px",
    paddingTop: "30px",
  },
});
