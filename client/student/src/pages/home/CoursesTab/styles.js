import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tabcontainer: {
    "& .Mui-selected": {
      color: "#ea5252 !important",
      fontWeight: "600 !important",
    },
  },
});
