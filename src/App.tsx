import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
const App: React.FC = () => {
  const [text, setText] = useState("");
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const increase = useCallback(() => dispatch({ type: "counter/INCREMENT" }), [
    dispatch
  ]);
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <button onClick={() => increase()}>asdf </button>
      <button onClick={() => dispatch({ type: "counter/DECREMENT" })}>
        increase
      </button>
      <button
        onClick={() => dispatch({ type: "counter/SETTEXT", payload: text })}
      >
        change
      </button>
      <br />
      {count.count}
      {count.text}
      <input type="text" value={text} onChange={onInputChange} />
    </div>
  );
};

export default App;
