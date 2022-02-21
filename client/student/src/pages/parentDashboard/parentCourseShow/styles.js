import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    maxWidth: "100%",

    paddingBottom: "200px",
  },
  card: {
    width: "330px",
  },
  cardimg: {
    height: "150px",
    width: "300px",
  },
  title: {
    padding: "20px 5px",
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
