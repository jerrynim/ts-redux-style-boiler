import { createStandardAction, ActionType, getType } from "typesafe-actions";

//type 정의
export const GET_DATA = `activeProblem/GET_DATA`;

export const getData = createStandardAction(GET_DATA)<Array<Object>>();

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
  problems: Problem[] | [];
  problemId: number;
}

const initialState: State = {
  problems: [],
  problemId: 0
};

const activeProblem = (state: State = initialState, action: any) => {
  switch (action.type) {
    case getType(getData):
      //선택된 아이디 연관 데이터 불러오기
      return {
        problems: action.payload.problems,
        problemId: action.payload.problemId
      };

    default:
      return state;
  }
};
export default activeProblem;
