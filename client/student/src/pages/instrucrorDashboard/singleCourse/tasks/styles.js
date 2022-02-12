import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
    root: {
        background: "#EEE",
        color: "#645A53",
    },
    taskWrapper: {
        background: "white",
        margin: "20px 0",
        padding: "20px",
        borderRadius: "8px",
    },
    headingWrapper: {
        borderBottom: "2px solid #EEE",
        display: "flex",
        justifyContent: "space-between",
    },
    selected: {
        color: "red",
    },
    taskhead: {
        color: "#645A53",
        padding: "4px",
        marginBottom: "6px",
        marginTop: "6px",
        display: "flex",
        alignItems: "center"
    },
    heading: {
        display: 'flex',
        alignItems: "center",
    },
    taskcontent: {
        paddingTop: "8px",
        paddingLeft: "8px",
    },
    taskcontenttxt: {
        marginBottom: "8px",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between"
    },
    start: {
        marginTop: "3px",
        borderLeft: "3px solid green",
        paddingLeft: "2px",
    },
    end: {
        borderLeft: "3px solid red",
        paddingLeft: "2px",
        marginTop: "8px",
    }

});
