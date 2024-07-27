import { useEffect } from "react";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { useReducer } from "react";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { StartScreen } from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
    }

    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={questions.length} />
        )}
      </Main>
    </div>
  );
};

export default App;
