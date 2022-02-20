import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {
        backgroundColor: "#FFF9F9",
        borderRadius: "10px",
        marginBottom: "80px",
    },
    title: {
        paddingTop: "12px",
        marginBottom: "0px",
        color: "#645A53",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
        imageFit: "cover"
    },
    cardTxt: {
        borderBottom: "2px solid #645A53",
        paddingBottom: "12px",
        color: "#645A53",
    },
    titleFooter: {
        text: "muted",
        textTransform: "uppercase",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
    },
});
