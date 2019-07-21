import React from "react";
import ProblemPresenter from "./ProblemPresenter";
import { useDispatch } from "react-redux";
import { Problem } from "../../type";

interface IProps {
  problem: Problem;
  index: number;
}

const ProblemContainer: React.FC<IProps> = ({ problem, index }) => {
  const dispatch = useDispatch();

  //Problem을 삭제하늖 함수
  const deleteProblem: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "problem/DELETE_PROBLEM", payload: problem.id });
  };

  //Problem의 연관 문제를 불러오는 함수
  const onClickSimilar: React.MouseEventHandler<HTMLButtonElement> = () => {
    //자신을 제외한 동일한 unitCode를 가진 Problem을 가져온다
    fetch("http://localhost:3001/data").then((res) =>
      res
        .json()
        .then((json) => {
          const realated = json.filter(
            (RawProblem: Problem) =>
              RawProblem.unitCode === problem.unitCode &&
              RawProblem.id !== problem.id
          );
          return realated;
        })
        .then((problems) => {
          dispatch({
            type: "activeProblem/GET_DATA",
            payload: { problems, problemId: problem.id }
          });
        })
    );
  };

  return (
    <ProblemPresenter
      problem={problem}
      index={index}
      deleteProblem={deleteProblem}
      onClickSimilar={onClickSimilar}
    />
  );
};
export default ProblemContainer;
