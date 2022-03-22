import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

import { timeConverter } from "../../../utils";

const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          title: `Your Time's Up`,
          icon: "info",
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime),
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <div>
      <Button style={{ color: "#EA5252", fontSize: "24px" }}>{hours} :</Button>

      <Button style={{ color: "#EA5252", fontSize: "24px" }}>
        {minutes} :
      </Button>

      <Button style={{ color: "#EA5252", fontSize: "24px" }}>{seconds}</Button>
    </div>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired,
};

export default Countdown;
