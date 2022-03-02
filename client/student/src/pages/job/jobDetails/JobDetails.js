import React from "react";
import { useStyle } from "./styles";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import {
  Card,
  Container,
  Grid,
  Button,
  CardHeader,
  Modal,
  Box,
  Divider,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlagIcon from "@mui/icons-material/Flag";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import ExplicitIcon from "@mui/icons-material/Explicit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: "70%",
  display: "block",
};

const JobDetails = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/job_view");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Web Developer</h1>
      <Grid container className={classes.subHeading}>
        <Grid item md={12} xs={12}>
          <div className={classes.section}>
            <BusinessCenterIcon className={classes.icon} fontSize="small" />
            <Typography className={classes.items} component="p">
              {" "}
              Category1
            </Typography>
            <PersonIcon className={classes.icon} fontSize="small" />{" "}
            <Typography className={classes.items} component="p">
              {" "}
              2
            </Typography>
            <LocationOnIcon className={classes.icon} fontSize="small" />
            <Typography className={classes.items} component="p">
              {" "}
              Bangladesh
            </Typography>
            <AttachMoneyIcon className={classes.icon} fontSize="small" />
            <Typography className={classes.items} component="p">
              {" "}
              2k-5k/monthly
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Container className={classes.contain}>
        <Card className={classes.card} sx={{ borderRadius: "15px" }}>
          <Grid container spacing={2}>
            <Grid item md={9} xs={12} className={classes.section1}>
              <h4
                className={classes.view}
                onClick={() => {
                  handleClick();
                }}
              >
                View All Jobs
              </h4>
              <Typography className="section" component="p">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies. React can be used as a base in the development of
                single-page or mobile applications
              </Typography>
              <Button
                variant="contained"
                className={classes.button}
                sx={{
                  background: "#1a237e",
                  marginTop: "25px",
                  padding: "15px",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#ea5252",
                  },
                  textTransform: "none",
                }}
                onClick={handleOpen}
              >
                Apply for this Position
              </Button>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              className={classes.side}
              sx={{ margin: "30px 0px 50px" }}
            >
              <h2 className={classes.sideHeading}>Job Overview</h2>

              <CardHeader
                avatar={<CalendarTodayIcon className={classes.icon2} />}
                title="Date Posted"
                subheader="30th Apr, 2022"
              />
              <CardHeader
                avatar={<FlagIcon className={classes.icon2} />}
                title="Country"
                subheader="Bangladesh"
              />
              <CardHeader
                avatar={<LocationCityIcon className={classes.icon2} />}
                title="City"
                subheader="Dhaka"
              />
              <CardHeader
                avatar={<PersonIcon className={classes.icon2} />}
                title="Vacancy"
                subheader="2"
              />
              <CardHeader
                avatar={<AttachMoneyIcon className={classes.icon2} />}
                title="Offered Salary"
                subheader="2k-5k monthly"
              />
              <CardHeader
                avatar={<ExplicitIcon className={classes.icon2} />}
                title="Education"
                subheader="2 years"
              />
              <CardHeader
                avatar={<SchoolIcon className={classes.icon2} />}
                title="Qualification"
                subheader="B.S.C"
              />
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Apply for Job
          </Typography>
          <br></br>
          <Divider></Divider>
          <br></br>
          <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12} className={classes.file}>
              <div className="upload">
                <input type="file" name="file" id="file_up" />
              </div>
            </Grid>
          </Grid>

          <h4 className={classes.info}>
            ** Upload your CV
          </h4>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginBottom: "30px",
              padding: "12px",
              fontSize: "18px",
              background: "#ea5252",
              "&:hover": {
                backgroundColor: "#1a237e",
              },
              textTransform: "none",
            }}
          >
            Submit Your Application
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default JobDetails;
