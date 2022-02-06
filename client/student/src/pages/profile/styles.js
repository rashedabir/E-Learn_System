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
    },
    imag: {
        width: "100%",
        clipPath: "circle()"
    },
    profileright: {
        backgroundColor: "white",
        borderRadius: "15px",
    }
});
