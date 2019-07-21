import React from "react";
import ProblemPresenter from "./ProblemPresenter";
import { useDispatch } from "react-redux";

interface Problem {
  answerData: string;
  bookDataId: number;
  cebuCode: number;
  correctTimes: number;
  curriculumNumber: number;
  hide: number;
  hwpExist: number;
  id: number;
  needCheckLayout: number;
  problemLevel: number;
  problemType: string;
  problemURL: string;
  scorable: number;
  source: number;
  tagTop: null;
  totalTimes: number;
  unitCode: number;
  unitName: string;
}
interface IProps {
  problem: Problem;
  index: number;
}

const ProblemContainer: React.FC<IProps> = ({ problem, index }) => {
  const dispatch = useDispatch();

  const deleteProblem: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "problem/DELETE_PROBLEM", payload: problem.id });
  };

  return (
    <ProblemPresenter
      problem={problem}
      index={index}
      deleteProblem={deleteProblem}
    />
  );
};
export default ProblemContainer;
