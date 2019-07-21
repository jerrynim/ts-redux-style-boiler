import React, { useEffect, useState } from "react";
import AppPresenter from "./AppPresenter";
const App: React.FC = () => {
  // const problem = useSelector((state: any) => state.problem);
  // const dispatch = useDispatch();
  const [data, setData] = useState();
  const [active, setActive] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/data").then((res) =>
      res.json().then((json) => setData(json))
    );
    // dispatch({
    //   type: "problem/GET_DATA",
    //   payload: "http://localhost:3001/data"
    // });
  }, []);

  return (
    <>
      {data && (
        <AppPresenter data={data} active={active} setActive={setActive} />
      )}
    </>
  );
};

export default App;
