import React, { useEffect } from "react";
import AppPresenter from "./AppPresenter";
import { useDispatch, useSelector } from "react-redux";
const App: React.FC = () => {
  const problems = useSelector((state: any) => state.problem);
  const activeProblems = useSelector((state: any) => state.activeProblem);
  const dispatch = useDispatch();

  //시작시 데이터를 불러와 state에 저장하도록
  useEffect(() => {
    fetch("http://localhost:3001/data").then((res) =>
      res.json().then((json) =>
        dispatch({
          type: "problem/GET_DATA",
          payload: json
        })
      )
    );
  }, [dispatch]);

  return (
    <>
      {
        <AppPresenter
          problems={problems.problems}
          activeProblems={activeProblems}
        />
      }
    </>
  );
};

export default App;
