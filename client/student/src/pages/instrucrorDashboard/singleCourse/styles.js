import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {

    },
    top: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    link: {
        paddingLeft: "12px",
    },
    linktxt: {
        fontFamily: 'Poppins',
        textTransform: 'none',
    },
    banner: {
        objectFit: 'cover',
        width: "100%",
        height: "365px",
        marginBottom: '5px',
    },
});
