import { createStandardAction, ActionType, getType } from "typesafe-actions";

//type 정의
export const GET_DATA = `problem/GET_DATA`;
export const GET_SIMILLAR_TYPES = `problem/GET_SIMILLAR_TYPES`;
export const DELETE_PROBLEM = `problem/DELETE_PROBLEM`;

export const getData = createStandardAction(GET_DATA)<Array<Object>>();
export const getSimillarTypes = createStandardAction(GET_SIMILLAR_TYPES)<
  number
>();
export const deleteProblem = createStandardAction(DELETE_PROBLEM)<number>();

export type GetData = ActionType<typeof getData>;
export type GetSimillarTypes = ActionType<typeof getSimillarTypes>;
export type DeleteProblem = ActionType<typeof deleteProblem>;

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
}

const initialState: State = {
  problems: []
};

const problem = (state: State = initialState, action: any) => {
  switch (action.type) {
    case getType(getData):
      //초기 데이터 불러오기
      return { problems: action.payload };
    case getType(getSimillarTypes):
    //유사 항목 불러오기 unitCode가 같은 것들을 찾아 가져온다.
    case getType(deleteProblem):
      const result = state.problems.filter(
        (problem) => problem.id !== action.payload
      );
      return { problems: result };
    //id를 받아서 state에서 삭제하기
    default:
      return state;
  }
};
export default problem;
