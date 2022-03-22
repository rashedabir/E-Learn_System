import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { calculateScore, calculateGrade, timeConverter } from "../../../utils";

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
  questionsAndAnswers,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <>
      <h1>Stats</h1>
      <h3> {remarks}</h3>
      <h3>Grade: {grade}</h3>
      <h3> Total Questions: {totalQuestions}</h3>
      <h3>Correct Answers: {correctAnswers}</h3>
      <h3> Your Score: {score}% Passing Score: 60% Time Taken: </h3>
      <h3> {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}</h3>
      {/* QNA */}
      <h1 style={{ marginTop: "50px" }}>QNA</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Questions</TableCell>
              <TableCell>Your Answers</TableCell>
              <TableCell>Correct Answers</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionsAndAnswers.map((item, i) => (
              <TableRow key={i + 1}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.question}</TableCell>
                <TableCell>{item.user_answer}</TableCell>
                <TableCell>{item.correct_answer}</TableCell>
                <TableCell>{item.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: 35 }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={replayQuiz}
          style={{
            backgroundColor: "#EA5252",
            marginRight: 15,
            marginBottom: 8,
          }}
        >
          Play again
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={resetQuiz}
          style={{ marginBottom: 8 }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  questionsAndAnswers: PropTypes.func.isRequired,
};

export default Stats;
