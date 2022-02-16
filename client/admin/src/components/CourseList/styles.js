import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 100px",
  },
  title: {
    paddingBottom: "10px",
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  table: {
    textTransform: "capitalize",
  },
  image: {
    width: "80px",
    height: "50px",
    borderRadius: "10px",
  },
}));
