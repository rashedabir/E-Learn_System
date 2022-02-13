import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "40px 150px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  table: {
    width: "100%",
    textTransform: "capitalize",
  },
  iconButton: {
    display: "flex",
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "center",
  },
}));

export const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};
