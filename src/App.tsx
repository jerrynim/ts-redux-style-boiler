import React, { useEffect, useState } from "react";
import AppPresenter from "./AppPresenter";
import { useDispatch, useSelector } from "react-redux";
const App: React.FC = () => {
  const problems = useSelector((state: any) => state.problem);
  const dispatch = useDispatch();
  const [active, setActive] = useState();
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
          active={active}
          setActive={setActive}
        />
      }
    </>
  );
};

export default App;
