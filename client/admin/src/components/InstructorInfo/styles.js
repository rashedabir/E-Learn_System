import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  items: {
    width: "100%",
  },
  intro: {
    margin: "16px",
  },
  form: {
    width: "100%",
  },
  avatar: {
    marginLeft: "15px",
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
}));
