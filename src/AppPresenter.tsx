import React from "react";
import styled from "styled-components";
import ProblemView from "./components/Problem";
import ActivedProblem from "./components/ActivedProblem";
import { Problem } from "./type";
const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: -webkit-fill-available;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  margin-right: 8px;
  height: initial;
  position: relative;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
`;
const Title = styled.div`
  width: 100%;
  height: 48px;
  padding-left: 23px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  background-color: white;
`;
const TitleText = styled.h2`
  color: ${(props) => props.theme.dark};
  font-family: NanumSquareOTFB;
  font-size: 14px;
`;
const Problems = styled.div`
  height: calc(100% - 56px);
  display: block;
  flex-direction: column;
  overflow: scroll;
`;

const RightTop = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightTopText = styled.div`
  font-family: SamsungKorean_v2.0;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.dark};
`;
const RightButton = styled.button`
  font-size: 13px;
  margin-right: 8px;
  border-radius: 2px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
  color: ${(props) => props.theme.buttonBlue};
  padding: 5px;
  font-weight: bold;
`;
const RithtContet = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
`;

const RightInitWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightInit = styled.div`
  width: 230px;
  height: 56px;
  text-align: center;
  color: ${(props) => props.theme.brownGrey};
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 500;
`;

interface IProps {
  problems: Problem[];
  activeProblems: {
    problems: Problem[];
    problemId: number;
  };
}

const App: React.FC<IProps> = ({ problems, activeProblems }) => {
  return (
    <Container>
      <Left>
        <Title>
          <TitleText>학습지 상세 편집</TitleText>
        </Title>
        <Problems>
          {problems &&
            problems.length !== 0 &&
            problems.map((problem, index) => (
              <ProblemView key={index} problem={problem} index={index} />
            ))}
        </Problems>
      </Left>
      <Right>
        <RightTop>
          <RightTopText>문항교체/추가</RightTopText>
        </RightTop>
        <RithtContet>
          {activeProblems.problems.map((ativeProblem, index) => (
            <ActivedProblem
              key={ativeProblem.id}
              ativeProblem={ativeProblem}
              index={index}
            />
          ))}
          {activeProblems.problems.length === 0 &&
            (activeProblems.problemId !== 0 ? (
              <RightInitWrapper>
                <RightInit>해당문제와 유사 문항이 없습니다.</RightInit>
              </RightInitWrapper>
            ) : (
              <RightInitWrapper>
                <RightInit>
                  <RightButton>유사문항</RightButton>
                  버튼을 누르면 해당문제와 유사 문항을 볼 수 있습니다.
                </RightInit>
              </RightInitWrapper>
            ))}
        </RithtContet>
      </Right>
    </Container>
  );
};
export default App;
