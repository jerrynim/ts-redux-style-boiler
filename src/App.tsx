import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppPresenter from "./AppPresenter";
const App: React.FC = () => {
  const problem = useSelector((state: any) => state.problem);
  console.log(problem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "problem/GET_DATA",
      payload: "http://localhost:3001/data"
    });
  }, []);

  // const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setText(e.target.value);
  // };
  return <AppPresenter />;
};

export default App;
