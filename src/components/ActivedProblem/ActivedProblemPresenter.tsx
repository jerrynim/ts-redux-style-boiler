import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  padding: 0px 19px;
  margin: 0;
  margin-bottom: 8px;
  background-color: white;
  overflow: scroll;
  height: fit-content;
`;
const ProblemTop = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
`;
const ProblemType = styled.h2`
  width: 82px;
  text-align: center;
  color: ${(props) => props.theme.brownGrey};
  font-family: Roboto;
`;
const ProblemTypeName = styled.div`
  font-family: SamsungKorean_v2.0;
  color: ${(props) => props.theme.dark};
  max-width: 286px;
`;
const ProblemButtons = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;
const ProblemButton = styled.button`
  height: 36px;
  border-radius: 2px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
  color: ${(props) => props.theme.buttonBlue};
  margin-right: 8px;
  padding: 15px;
  line-height: 0;
  font-weight: bold;
  :last-child {
    margin: 0;
  }
  :hover {
    background-color: ${(props) => props.theme.blue};
    color: white;
  }
  :active {
    background-color: ${(props) => props.theme.blue};
    color: white;
  }
`;
const ProblemBar = styled.div`
  width: 100%;
  height: 2px;
  border: solid 1px #f5f5f5;
`;
const ProblemContent = styled.div`
  padding: 15px 0px;
  display: flex;
`;
const ProblemNumber = styled.h1`
  font-family: Roboto;
  width: 82px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`;
const ProblemImg = styled.img``;
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
  addProblem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
//Problem의 VIew
const ActiveProblemPresenter: React.FC<IProps> = ({
  ativeProblem,
  index,
  addProblem
}) => {
  const {
    problemType,
    problemURL,
    unitName = "유형명이 보여지는 영역입니다."
  } = ativeProblem;
  return (
    <Container>
      <ProblemTop>
        <ProblemType>{problemType}</ProblemType>
        <ProblemTypeName>{unitName}</ProblemTypeName>
        <ProblemButtons>
          <ProblemButton onClick={addProblem}>추가</ProblemButton>
          <ProblemButton>교체</ProblemButton>
        </ProblemButtons>
      </ProblemTop>
      <ProblemBar />
      <ProblemContent>
        <ProblemNumber>{index + 1}</ProblemNumber>
        <ProblemImg src={problemURL} />
      </ProblemContent>
    </Container>
  );
};

export default ActiveProblemPresenter;
