import { createStandardAction, ActionType, getType } from "typesafe-actions";
import { Problem } from "../type";

export const GET_DATA = `activeProblem/GET_DATA`;

export const getData = createStandardAction(GET_DATA)<Array<Object>>();

export type GetData = ActionType<typeof getData>;

interface State {
  problems: Problem[] | [];
  problemId: number;
}

const initialState: State = {
  problems: [],
  problemId: 0 // Activate 된 ProblemId값
};

const activeProblem = (state: State = initialState, action: any) => {
  switch (action.type) {
    case getType(getData):
      return {
        problems: action.payload.problems,
        problemId: action.payload.problemId
      };

    default:
      return state;
  }
};
export default activeProblem;
