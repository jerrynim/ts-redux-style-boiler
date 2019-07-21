import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f5f5f5;
  height: 100%;
`;
const Left = styled.div`
  width: 646px;
  margin-right: 8px;
`;
const Right = styled.div`
  width: 646px;
  background-color: white;
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
const Problem = styled.div`
  width: 100%;
  padding: 0px 19px;
  margin: 0;
  margin-bottom: 8px;
  background-color: white;
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
  :last-child {
    margin: 0;
  }
`;
const ProblemBar = styled.div`
  width: 100%;
  height: 2px;
  border: solid 1px #f5f5f5;
`;
const ProblemContent = styled.div`
  padding-top: 15px;
  display: flex;
`;
const ProblemNumber = styled.h1`
  font-family: Roboto;
  width: 82px;
  text-align: center;
  color: ${(props) => props.theme.blue};
`;
const ProblemImg = styled.div`
  background-color: blue;
  width: 300px;
  height: 210px;
  background-size: cover;
`;
const App: React.FC = () => {
  return (
    <Container>
      <Left>
        <Title>
          <TitleText>학습지 상세 편집</TitleText>
        </Title>
        <Problem>
          <ProblemTop>
            <ProblemType>객관식</ProblemType>
            <ProblemTypeName>유형명이 보여지는 영역입니다.</ProblemTypeName>
            <ProblemButtons>
              <ProblemButton>유사문항</ProblemButton>
              <ProblemButton>삭제</ProblemButton>
            </ProblemButtons>
          </ProblemTop>
          <ProblemBar />
          <ProblemContent>
            <ProblemNumber>1</ProblemNumber>
            <ProblemImg />
          </ProblemContent>
        </Problem>
      </Left>
      <Right />
    </Container>
  );
};
export default App;
