import { createStandardAction, ActionType, getType } from "typesafe-actions";

//type 정의
const GET_DATA = `problem/GET_DATA`;
const DELETE_PROBLEM = `problem/DELETE_PROBLEM`;
const ADD_PROBLEM = `problem/ADD_PROBLEM`;
const REPLACE_PROBLEM = `problem/REPLACE_PROBLEM`;

const getData = createStandardAction(GET_DATA)<Array<Problem>>();
const deleteProblem = createStandardAction(DELETE_PROBLEM)<number>();
const addProblem = createStandardAction(ADD_PROBLEM)<{
  problemId: number;
  ativeProblem: Problem;
}>();
const repalceProblem = createStandardAction(REPLACE_PROBLEM)<{
  problemId: number;
  ativeProblem: Problem;
}>();

export type GetData = ActionType<typeof getData>;
export type DeleteProblem = ActionType<typeof deleteProblem>;
export type AddProblem = ActionType<typeof addProblem>;
export type RepalceProblem = ActionType<typeof repalceProblem>;

export type Problem = {
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
};

interface State {
  problems: Problem[] | [];
}

const initialState: State = {
  problems: []
};

const problem = (state: State = initialState, action: any) => {
  switch (action.type) {
    //초기 데이터 불러오기
    case getType(getData):
      return { problems: action.payload };

    //id를 받아서 state에서 삭제하기
    case getType(deleteProblem):
      return {
        problems: state.problems.filter(
          (problem) => problem.id !== action.payload
        )
      };

    //activated ProblemId와 추가할 Problem 받아서 아이디를 부여하여 추가
    case getType(addProblem):
      const { problemId, ativeProblem } = action.payload;

      //ativated problemId의 인덱스 값
      const index = state.problems.findIndex(
        (problem) => problem.id === problemId
      );

      //activeProblem의 새로운 아이디 임시적으로 random을 사용하였다.
      ativeProblem.id = Math.floor(Math.random() * 100000);

      const tempArray = [...state.problems];
      tempArray.splice(index + 1, 0, ativeProblem);
      return { problems: tempArray };

    //activated ProblemId와 교체할 Problem 받아서 교체
    case getType(repalceProblem):
      const {
        problemId: R_problemId,
        ativeProblem: R_ativeProblem
      } = action.payload;

      //activeProblem의 새로운 아이디 임시적으로 random을 사용하였다.
      R_ativeProblem.id = Math.floor(Math.random() * 100000);

      //ativated problemId의 인덱스 값
      const R_index = state.problems.findIndex(
        (problem) => problem.id === R_problemId
      );
      const R_tempArray = [...state.problems];
      R_tempArray[R_index] = R_ativeProblem;
      return { problems: R_tempArray };
    default:
      return state;
  }
};
export default problem;
