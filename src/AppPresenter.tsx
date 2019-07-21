import React from "react";
import styled from "styled-components";
import ProblemView from "./components/Problem";
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 56px);
  background-color: white;
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
  data: Problem[] | null;
  active: any;
  setActive?: React.Dispatch<any>;
}

const App: React.FC<IProps> = ({ data, active }) => {
  return (
    <Container>
      <Left>
        <Title>
          <TitleText>학습지 상세 편집</TitleText>
        </Title>
        <Problems>
          {data &&
            data.map((problem, index) => (
              <ProblemView key={problem.id} problem={problem} index={index} />
            ))}
        </Problems>
      </Left>
      <Right>
        <RightTop>
          <RightTopText>문항교체/추가</RightTopText>
        </RightTop>
        <RithtContet>
          {
            //active 배열 안에 active된 problem을 넣어서 map을 통해 보여주도록하자
          }
          {active === undefined && (
            <RightInit>
              <RightButton>유사문항</RightButton>
              버튼을 누르면 해당문제와 유사 문항을 볼 수 있습니다.
            </RightInit>
          )}
        </RithtContet>
      </Right>
    </Container>
  );
};
export default App;