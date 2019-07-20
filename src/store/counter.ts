import { createStandardAction, ActionType, getType } from "typesafe-actions";

//type 정의
export const INCREMENT = `counter/INCREMENT`;
export const DECREMENT = `counter/DECREMENT`;
export const SETTEXT = `counter/SETTEXT`;

export const addCount = createStandardAction(INCREMENT)<void>();
export const subCount = createStandardAction(DECREMENT)<void>();
export const setText = createStandardAction(SETTEXT)<string>();

export type AddCount = ActionType<typeof addCount>;
export type SubCount = ActionType<typeof subCount>;
export type SetString = ActionType<typeof setText>;

interface State {
  count: number;
  text: string;
}

const initialState: State = {
  count: 0,
  text: ""
};

const counter = (state: State = initialState, action: any): any => {
  switch (action.type) {
    case getType(addCount):
      return { ...state, count: state.count + 1 };
    case getType(subCount):
      return { ...state, count: state.count - 1 };
    case getType(setText):
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
export default counter;
