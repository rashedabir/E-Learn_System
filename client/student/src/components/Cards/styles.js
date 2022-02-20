import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "50px",
    border: "none",
    boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;",
  },
  cardmain: {
    height: '100%',
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
    marginLeft: "8px"
  },
  heading: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "280px",
    fontSize: "15px",
    marginLeft: "10px",
    fontWeight: 500,
    lineHeight: "22px",
    marginBottom: 0,
  },
  avatar: {
    marginLeft: "3px",
    color: "#5B6A72",
    fontWeight: 500,
    fontSize: "10px",
    height: "15px"
  },
  avatarimg: {
    marginLeft: "5px",
    height: "16px",
    width: "16px",
    borderRadius: "50%",
  },
  flexitem: {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center"
  },
  flexitems: {
    marginBottom: "12px",
    display: "flex",
    alignItems: "end"
  },
  star: {
    color: "#FFA400",
    transform: "scale(0.8)",
  },
  startext: {
    color: "#3D3B37",
    fontSize: "12px",
  },
  enroll: {
    color: "#BDBDBD",
    transform: "scale(0.8)",
  },
  enrolltxt: {
    color: "#5B6A72",
    fontSize: "12px",
  },
  gridcontainer: {
    borderTop: "0.356586px solid #E0E0E0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    text: "center",
    fontSize: "12px",
    fontWeight: 700,
    paddingBottom: "5px",
  },
  normal: {
    color: "#2C3644",
    fontSize: "14.30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pricetxt: {
    marginLeft: "-6px",
  },
  dollar: {
    transform: "scale(0.8)",
  },
  dollarcut: {
    transform: "scale(0.6)",
  },
  linecut: {
    color: "#5B6A72",
    fontSize: "11.5px",
    display: "flex",
    alignItems: "center",
    textDecoration: "line-through",

  },
})