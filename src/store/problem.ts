import { createStandardAction, ActionType, getType } from "typesafe-actions";

//type 정의
export const GET_DATA = `problem/GET_DATA`;

export const getData = createStandardAction(GET_DATA)<string>();

export type GetData = ActionType<typeof getData>;

interface Problem {
  id: number;
  unitCode: number;
  answerData: string;
  problemLevel: number;
  problemType: string;
  problemURL: string;
  unitName: string;
  needCheckLayout: number;
  source: number;
  hide: number;
  curriculumNumber: number;
  cebuCode: number;
  totalTimes: number;
  correctTimes: number;
  hwpExist: number;
  scorable: number;
  tagTop: null;
  bookDataId: number;
}

interface State {
  data: Problem[] | [];
}

const initialState: State = {
  data: []
};

const problem = (state: State = initialState, action: any) => {
  switch (action.type) {
    case getType(getData):
    default:
      return state;
  }
};
export default problem;
