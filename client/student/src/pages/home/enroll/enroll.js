import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useStyles } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "6px",
  p: 4,
};

const stripePromise = loadStripe(
  "pk_test_51JIDmDAcmD9cnihVfUC3Z06F9HJyqVKaUIl6UhDBF5HcbgR8T5PKLnPiDhjJf6wz4H1Lk7ZMiAWAW50Th3VwA6Q600zZG1YIim"
);

// const handleSubmit = (stripe, elements) => async () => {
//   const cardElement = elements.getElement(CardElement);

//   const { error, paymentMethod } = await stripe.createPaymentMethod({
//     type: "card",
//     card: cardElement,
//   });

//   if (error) {
//     console.log("[error]", error);
//   } else {
//     console.log("[PaymentMethod]", paymentMethod);
//     // ... SEND to your API server to process payment intent
//   }
// };

const PaymentForm = ({ addList, classes, course, enrolled }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  return (
    <>
      <CardElement />
      {/*<button onClick={handleSubmit(stripe, elements)}>Buy</button>*/}
      <Button
        style={{
          backgroundColor: "#EA5252",
          padding: "18px 25px",
          fontSize: "17px",
          textTransform: "none",
          marginTop: "55px",
        }}
        className={classes.button}
        variant="contained"
        fullWidth
        onClick={() => {
          addList(course);
        }}
      >
        {enrolled ? "Enrolled" : "Confirm Enroll"}
      </Button>
    </>
  );
};

const EnrollStudent = () => {
  const classes = useStyles();
  const state = useContext(GlobalState);
  const addList = state.userAPI.addList;
  const [list] = state.userAPI.list;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  const courses = {
    courseDetails: course?.courseDetails,
    tasks: course?.tasks,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        setLoading(true);
        await axios
          .get(
            `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`
          )
          .then((res) => {
            if (res.status === 200) {
              setCourse(res.data);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    const checkEnroll = async () => {
      list.filter((item) => {
        if (item.courseDetails._id === course?.courseDetails?._id) {
          return setEnrolled(true);
        } else {
          return setEnrolled(false);
        }
      });
    };
    getData();
    checkEnroll();
  }, [courseId, list, course?.courseDetails?._id]);

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <form className={classes.formWrapper}>
          <Typography variant="h4">Checkout</Typography>
          <br></br>
          <Divider />
          <br></br>
          <div className={classes.section}>
            <img
              src={course?.courseDetails?.banner?.url}
              className={classes.banner}
              alt="banner"
            />
            <div className={classes.section2}>
              <Typography variant="h6" className={classes.title}>
                {course?.courseDetails?.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.category}>
                {course?.courseDetails?.category}
              </Typography>

              <Typography variant="h6" className={classes.price}>
                ${course?.courseDetails?.price}
              </Typography>
            </div>
          </div>

          <Typography variant="subtitle2" className={classes.heading}>
            Instructor Info
          </Typography>

          <Typography variant="h6" className={classes.title}>
            {course?.courseDetails?.instructor?.name}
          </Typography>

          <Typography>{course?.courseDetails?.instructor?.address}</Typography>
          <Typography>{course?.courseDetails?.instructor?.mobile}</Typography>

          <Button
            style={{
              backgroundColor: "#EA5252",
              padding: "10px 25px",
              fontSize: "17px",
              textTransform: "none",
              marginTop: "25px",
            }}
            className={classes.button}
            variant="contained"
            onClick={handleOpen}
          >
            Checkout
          </Button>
        </form>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ pb: 5 }}
                id="transition-modal-title"
                variant="h5"
                component="h1"
              >
                Payment
              </Typography>
              <Typography
                className={classes.price}
                sx={{ pb: 5 }}
                id="transition-modal-title"
                variant="h5"
                component="h1"
              >
                ${course?.courseDetails?.price}
              </Typography>
            </Box>
            <Elements stripe={stripePromise}>
              <PaymentForm
                addList={addList}
                course={courses}
                classes={classes}
                enrolled={enrolled}
              />
            </Elements>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EnrollStudent;
