import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    background: "#fff5f6",
    padding: "50px 20px",
  },
  wrapper: {
    background: "white",
    padding: "30px",
    borderRadius: "6px",
  },
  fullWidth: {
    width: "100%",
    marginBottom: "15px",
  },
  halfWidth: {
    width: "89%",
    marginBottom: "15px",
  },
  selectEmpty: {
    marginTop: "20px",
  },
  heading: {
    padding: "20px",
  },
  questionHead: {
    display: "flex",
    alignItems: "center",
    textColor: "#212121",
  },
  discription: {
    background: "#fff",
    borderRadius: "10px",
    padding: "30px",
  },
  answerField: {
    paddingTop: "20px",
  },
});
