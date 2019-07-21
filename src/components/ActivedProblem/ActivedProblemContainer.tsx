import React from "react";
import ActivedProblemPresenter from "./ActivedProblemPresenter";
import { useSelector, useDispatch } from "react-redux";
import { Problem } from "../../type";

interface IProps {
  ativeProblem: Problem;
  index: number; //번호를 위한 값
}

const ProblemContainer: React.FC<IProps> = ({ ativeProblem, index }) => {
  const activeProblems = useSelector((state: any) => state.activeProblem);
  const dispatch = useDispatch();

  //Problem을 추가하는 함수
  const addProblem: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { problemId } = activeProblems; //현재 엑티브되어있는 problem의 ID를 받는다.

    dispatch({
      type: "problem/ADD_PROBLEM",
      payload: { problemId, ativeProblem }
    });
  };

  //Problem을 교체하는 함수
  const repalceProblem: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { problemId } = activeProblems; //현재 엑티브되어있는 problem의 ID를 받는다.

    dispatch({
      type: "problem/REPLACE_PROBLEM",
      payload: { problemId, ativeProblem }
    });
  };

  return (
    <ActivedProblemPresenter
      ativeProblem={ativeProblem}
      index={index}
      addProblem={addProblem}
      repalceProblem={repalceProblem}
    />
  );
};
export default ProblemContainer;
