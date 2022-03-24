import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Divider, Button, List, MenuItem } from "@mui/material";
import he from "he";

import Countdown from "../countdown/Countdown";
import getLetter from "../../../utils/getLetter";


const Quiz = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState("");
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  const handleItemClick = (e, name) => {
    setUserSlectedAns(name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point,
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna,
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  const timeOver = (timeTaken) => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <h3>{`Question No.${questionIndex + 1} of ${data.length}`}</h3>

        <Countdown
          countdownTime={countdownTime}
          timeOver={timeOver}
          setTimeTaken={setTimeTaken}
        />
      </div>
      <br />

      <div>
        <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
      </div>

      <br />

      <h4>Please choose one of the following answers:</h4>

      <Divider />

      <List>
        {data[questionIndex].options.map((option, i) => {
          const letter = getLetter(i);
          const decodedOption = he.decode(option);

          return (
            <MenuItem
              key={decodedOption}
              name={decodedOption}
              value={decodedOption}
              selected={userSlectedAns === decodedOption}
              onClick={(event) => handleItemClick(event, decodedOption)}
            >
              <b style={{ marginRight: "8px" }}>{letter}</b>
              {decodedOption}
            </MenuItem>
          );
        })}
      </List>

      <Divider />

      <Button
        variant="contained"
        onClick={handleNext}
        disabled={!userSlectedAns}
        style={{
          backgroundColor: "#EA5252",
          color: "white",
          margin: "30px 0px",
          textTransform: "none",
        }}
      >
        Next
      </Button>

      <br />
    </Container>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;
