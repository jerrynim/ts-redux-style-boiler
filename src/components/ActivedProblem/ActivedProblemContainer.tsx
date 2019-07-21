import React from "react";
import ActivedProblemPresenter from "./ActivedProblemPresenter";

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
  return <ActivedProblemPresenter ativeProblem={ativeProblem} index={index} />;
};
export default ProblemContainer;
