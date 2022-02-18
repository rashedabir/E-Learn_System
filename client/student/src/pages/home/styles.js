import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {},
  banner: {
    paddingTop: "40px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headertxt: {
    color: "#3D3B37",
    maxWidth: "510px",
    display: "flex",
    fontSize: "56px",
    fontWeight: 700,
    lineHeight: "84px",
    marginBottom: "25px",
  },
  headerbodytxt: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
    maxWidth: "363px",
    color: "#5B6A72",
  },
  serach: {
    marginTop: "20px",
    borderRadius: "80px",
    backgroundColor: "#FFF1F1",
    width: "275px",
    height: "60px",
    paddingLeft: "30px",
    display: "flex",
    justifyContent: "right",
  },
  hints: {
    width: "100%",
  },

  searchbtn: {
    marginTop: "5px",
    marginRight: "5px",
  },
  image: {
    width: "100%",
    height: "75%",
  },
  coursestabtxt: {
    textAlign: "center",
    marginTop: "60px",
    color: "#2C3644",
  },
  coursestabh: {
    fontSize: "36px",
    lineHeight: "30px",
    fontWeight: 700,
  },
  coursestabp: {
    fontSize: "18px",
    lineHeight: "15px",
    fontWeight: 600,
  },
  background: {
    backgroundImage: "linear-gradient(white, #FFF1F1, white)",
  },
  //three card here
  featurethree: {
    marginTop: "10px",
    marginBottom: "80px",
  },
  featurethreecard: {
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 25px 20px -20px;",

  },
  featurethreecardinner: {
    margin: "10px",
    height: "140px",
    backgroundColor: "white",
    paddingBottom: "20px",
    borderRadius: "6px",
  },
  card: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  cardicon: {
    paddingLeft: "15px",
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
    marginTop: "25px",
  },
  buttontxt: {
    color: "white",
    padding: "5px 0",
  },

  thbodytxt: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "30px",
  },

  // What to expect from a Udemy course
  expectcontainer: {
    paddingTop: "56px",
    paddingBottom: "80px",
  },
  expect: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    paddingBottom: "47px",
  },
  expectcardin: {
    display: "flex",
  },
  expectcardinh: {
    paddingLeft: "17px",
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "36px",
    color: "#2C3644",
  },
  expectcardinp: {
    paddingLeft: "17px",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
    color: "#5B6A72",
  },

  // Trusted Company
  trust: {
    paddingBottom: "60px",
    textAlign: "center",
  },
  trustedcompany: {
    fontSize: "36px",
    lineHeight: "54px",
    fontWeight: "bold",
  },
  trustedcompanyimg: {
    padding: "12px",
    filter: "grayscale(100%)",
  },
  //footer
});
