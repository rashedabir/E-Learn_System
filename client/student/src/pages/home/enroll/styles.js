import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  root: {
    background: "#FDFDFD",
    // minHeight: "90vh",
    paddingTop: "60px",
    paddingBottom: "80px",
  },
  formWrapper: {
    maxWidth: "600px",
    margin: "0px auto",
    border: "1px solid #e6e6e6",
    padding: "20px",
    borderRadius: "10px",
    background: "white",
  },
  banner: {
    objectFit: "cover",
    width: "140px",
    height: "100px",
    borderRadius: "15px",
  },
  section: {
    display: "flex",
    paddingBottom: "30px",
  },
  section2: {
    marginLeft: "30px",
  },
  button: {
    height: "50px",
    cursor: "pointer",
  },
  heading: {
    color: "#757575",
    paddingBottom: "10px",
  },
  title: {
    textTransform: "capitalize",
  },
  category: {
    color: "#757575",
    textTransform: "capitalize",
  },
  price: {
    color: "#EA5252",
    paddingTop: "10px",
  },
});
