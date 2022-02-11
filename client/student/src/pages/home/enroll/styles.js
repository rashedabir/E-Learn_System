import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  root: {
    background: "#FDFDFD",
    // minHeight: "90vh",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  formWrapper: {
    maxWidth: "800px",
    margin: "0px auto",
    border: "1px solid #e6e6e6",
    padding: "20px",
    borderRadius: "10px",
    background: "white",
  },
  title: {
    textAlign: "center",
  },
  banner: {
    objectFit: "cover",
    width: "140px",
    height: "120px",
  },
  section: {
    display: "flex",
  },
  section2: {
    marginLeft: "30px",
    marginTop: "-7px",
  },
  button: {
    height: "40px",
    cursor: "pointer",
  },
  category: {
    color: "#757575",
  },
});
