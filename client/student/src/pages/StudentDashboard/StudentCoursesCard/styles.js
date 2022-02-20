import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "50px",
    border: "none",
    boxShadow:
      "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;",
    "&:hover": {
      opacity: "0.8",
    },
  },
  cardimg: {
    height: "150px",
  },
  tag: {
    backgroundColor: "#FFA400",
    color: "white",
    border: "none",
    borderRadius: "3px",
    padding: "5px",
    marginLeft: "8px",
  },
  heading: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "280px",
    fontSize: "16px",
    marginLeft: "15px",
    fontWeight: 500,
    lineHeight: "22px",
    marginBottom: "15px",
  },
});
