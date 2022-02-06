import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {
        background: "#eee",
        minHeight: "90vh",
        padding: "50px 20px",
    },
    profileleft: {
        backgroundColor: "white",
        borderRadius: "15px",
        textAlign: 'center',
        padding: "5px",
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    imag: {
        width: "100%",
        clipPath: "circle()"
    },
    profileright: {
        backgroundColor: "white",
        borderRadius: "15px",
        paddingBottom: "20px",
    },
});
