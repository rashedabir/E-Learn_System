import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {
        maxWidth: "100%",
        color: '#645A53',
    },
    linktxt: {
        textDecoration: 'none',
    },
    dashboard: {
        padding: "0px 20px 15px",
      },
    nocourse: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
})