import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";

export const useStyle = makeStyles({
    root: {
        maxWidth: "100%",
        margin: "5px",
    },
    tag: {
        backgroundColor: "orange",
        color: "white",
        outline: "none",
        outlineColor: "yellow",
    },
    heading: {
        fontSize: "14px",
        padding: "0px 0px 0px 15px",
    },
    avatar: {
        padding: "0px 0px 0px 8px",
    },
    flexitem: {
        display: "flex",
        alignItems: "center"
    },
    gridcontainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        text: "center",
        fontSize: "12px",
        fontWeight: 700,
        paddingBottom: "5px",
    },
    linecut: {
        display: "flex",
        alignItems: "center",
        textDecoration: "line-through",
    }
})