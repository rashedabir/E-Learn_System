import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {
        maxWidth: "100%"
    },
    tabcontainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "black",
        fontWeight: 700,

    },
    tabs: {
        color: "black",
    }
})