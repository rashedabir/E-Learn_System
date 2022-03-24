import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Select,
  Button,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from "../../../utils/constants";

import { shuffle } from "../../../utils";

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState("0");
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState("0");
  const [questionsType, setQuestionsType] = useState("0");
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [e.target.name]: e.target.value });
    console.log(value);
    console.log(name);
  };

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    fetch(API)
      .then((respone) => respone.json())
      .then((data) =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API doesn't have enough questions for your query. (Ex.
                Asking for 50 Questions in a Category that only has 20.)
                <br />
                <br />
                Please change the <strong>No. of Questions</strong>,{" "}
                <strong>Difficulty Level</strong>, or{" "}
                <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach((element) => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers,
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
            countdownTime.hours + countdownTime.minutes + countdownTime.seconds
          );
        }, 1000)
      )
      .catch((error) =>
        setTimeout(() => {
          if (!navigator.onLine) {
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Self Assessment Quiz</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="cssategory"
          value={category}
          label="category"
          onChange={(e, { value }) => setCategory(e.target.value)}
          disabled={processing}
        >
          {CATEGORIES.map(({ key, text, value }) => (
            <MenuItem key={key} value={value}>
              {text}
            </MenuItem>
          ))}
        </Select>
        <br />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">No of Questions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="numOfQuestions"
          value={numOfQuestions}
          label="NumOfQuestions"
          onChange={(e, { value }) => setNumOfQuestions(e.target.value)}
          disabled={processing}
        >
          {NUM_OF_QUESTIONS.map(({ text, value }, key) => (
            <MenuItem key={key} value={value}>
              {text}
            </MenuItem>
          ))}
        </Select>
        <br></br>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="difficulty"
          value={difficulty}
          label="difficulty"
          onChange={(e, { value }) => setDifficulty(e.target.value)}
          disabled={processing}
        >
          {DIFFICULTY.map(({ text, value }, key) => (
            <MenuItem key={key} value={value}>
              {text}
            </MenuItem>
          ))}
        </Select>
        <br></br>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Questions Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="questionsType"
          value={questionsType}
          label="questionsType"
          onChange={(e, { value }) => setQuestionsType(e.target.value)}
          disabled={processing}
        >
          {QUESTIONS_TYPE.map(({ text, value }, key) => (
            <MenuItem key={key} value={value}>
              {text}
            </MenuItem>
          ))}
        </Select>
        <br></br>
      </FormControl>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Hours</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="hours"
            value={countdownTime.hours}
            label="hours"
            onChange={handleTimeChange}
            disabled={processing}
          >
            {COUNTDOWN_TIME.hours.map(({ text, value }, key) => (
              <MenuItem key={key} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
          <br></br>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Minutes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="minutes"
            value={countdownTime.minutes}
            label="minutes"
            onChange={handleTimeChange}
            disabled={processing}
          >
            {COUNTDOWN_TIME.minutes.map(({ text, value }, key) => (
              <MenuItem key={key} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
          <br></br>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Seconds</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="seconds"
            value={countdownTime.seconds}
            label="seconds"
            onChange={handleTimeChange}
            disabled={processing}
          >
            {COUNTDOWN_TIME.seconds.map(({ text, value }, key) => (
              <MenuItem key={key} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
          <br></br>
        </FormControl>
      </div>
      <Button
        color="secondary"
        variant="contained"
        onClick={fetchData}
        disabled={!allFieldsSelected || processing}
        sx={{
          backgroundColor: "#EA5252",
          mb: 5,
          textTransform: "none",
          ":hover": { backgroundColor: "#EA5252" },
        }}
      >
        Start
      </Button>

      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
