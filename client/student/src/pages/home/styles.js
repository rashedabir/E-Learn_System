import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {},
  banner: {
    padding: "10px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "right",
    justifyContent: "space-between",
  },
  headertxt: {
    display: "flex",
    fontSize: "56px",
    fontWeight: 700,
  },
  headerbodytxt: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 400,
    color: "#5B6A72",
  },
  serach: {
    margin: "10px",
    border: "1px solid red",
    borderRadius: "80px",
    backgroundColor: "#FFF1F1",
    width: "55%",
    height: "30px",
    paddingTop: "13px",
    paddingBottom: "13px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "right",
  },
  hints: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "75%",
  },

  //three card
  featurethree: {
    marginTop: "25px",
  },
  featurethreecard: {
    padding: "0px",
    margin: "50px",
  },
  featurethreecardinner: {
    margin: "10px",
    height: "140px",
    backgroundColor: "orange",
    paddingBottom: "20px",
    borderRadius: "6px",
  },
  card: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  cardtext: {
    paddingLeft: "15px",
  },
  cardtexthead: {
    fontWeight: 700,
  },
  cardtextbody: {
    fontWeight: 400,
  },

  buttons: {
    backgroundColor: "#EA5252",
    width: "50%",
    borderRadius: "50px",
    paddingLeft: "5px",
    margin: "10px",
  },
  buttontxt: {
    color: "white",
  },

  // What to expect from a Udemy course
  expect: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
  },

  //footer
});
