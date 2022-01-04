import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  items: {
    width: "100%",
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "200px",
  },
  form: {
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  heading: {
    color: "black",
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
