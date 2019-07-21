import React from "react";
import ActivedProblemPresenter from "./ActivedProblemPresenter";
import { useSelector, useDispatch } from "react-redux";

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
  ativeProblem: Problem;
  index: number;
}

const ProblemContainer: React.FC<IProps> = ({ ativeProblem, index }) => {
  const activeProblems = useSelector((state: any) => state.activeProblem);
  const dispatch = useDispatch();

  const addProblem: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { problemId } = activeProblems;

    dispatch({
      type: "problem/ADD_PROBLEM",
      payload: { problemId, ativeProblem }
    });
    //activestate.problemid의 밑에 선택된 problem을 추가하자
  };

  return (
    <ActivedProblemPresenter
      ativeProblem={ativeProblem}
      index={index}
      addProblem={addProblem}
    />
  );
};
export default ProblemContainer;
