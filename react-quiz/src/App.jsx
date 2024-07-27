import { useEffect } from "react";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { useReducer } from "react";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { StartScreen } from "./components/StartScreen";
import { Question } from "./components/Question";
import { NextButton } from "./components/NextButton";
import { Progress } from "./components/Progress";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:4000/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuestions();
  }, []);

  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numOfQuestions={questions.length} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numOfQuestions={questions.length}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer}>
              Next
            </NextButton>
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
