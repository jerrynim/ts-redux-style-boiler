import React from "react";
import styled from "styled-components";
import { Problem } from "../../type";
const Container = styled.div`
  width: 100%;
  padding: 0px 19px;
  margin: 0;
  margin-bottom: 8px;
  background-color: white;
  overflow: scroll;
  height: fit-content;
  transition: 0.5s;
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

interface IProps {
  problem: Problem;
  index: number;
  deleteProblem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickSimilar: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
//Problem의 VIew
const ProblemPresenter: React.FC<IProps> = ({
  problem,
  index,
  deleteProblem,
  onClickSimilar
}) => {
  const {
    problemType,
    problemURL,
    unitName = "유형명이 보여지는 영역입니다."
  } = problem;
  return (
    <Container>
      <ProblemTop>
        <ProblemType>{problemType}</ProblemType>
        <ProblemTypeName>{unitName}</ProblemTypeName>
        <ProblemButtons>
          <ProblemButton onClick={onClickSimilar}>유사문항</ProblemButton>
          <ProblemButton onClick={deleteProblem}>삭제</ProblemButton>
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

export default ProblemPresenter;
