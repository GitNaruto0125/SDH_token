import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  width: 100vm;
  height: 100hm;
`;

export const WorkArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 64px;
`;

export const TitleArea = styled.div`
  margin: 0px;
  position: relative;
  max-width: 640px;
`;

export const Title = styled.h1`
  margin: 8px 0px 32px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: rgb(26, 43, 107);
  font-size: 32px;
  line-height: 48px;
`;

export const Content = styled.p`
  margin: 24px 0px 0px;
  font-size: 18px;
  line-height: 28px;
  color: rgb(61, 69, 86);
`;

export const LearnMore = styled.span`
  margin: 0px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(55, 91, 210);
  text-decoration: none;
  cursor: pointer;
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0px;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(231, 232, 234);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: none;
`;

export const FromField = styled.span`
  color: rgb(26, 43, 107);
  font-size: 14px;
  font-weight: 500;
`;

export const Line = styled.div`
  display: flex;
  grid-gap: 24px;
  margin-bottom: 10px;
`;

export const LineColumn1 = styled.div`
  width: 300px;
`;

export const LineColumn2 = styled.div`
  width: 700px;
`;

export const Networks = styled.select`
  margin: 0px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  width: 100%;
  color: rgb(12, 22, 44);
  background-color: rgb(255, 255, 255);
  outline: 0px;
  padding: 8px 32px 8px 16px;
  line-height: 22px;
  border-radius: 4px;
  box-shadow: rgb(12 22 44 / 32%) 0px 8px 24px -16px;
  display: inline-flex;
  appearance: none;
  border-color: rgb(206, 208, 213);
  background-image: url(https://smartcontract.imgix.net/icons/Caret.svg?auto=compress%2Cformat);
  background-position: right 8px top 50%;
  background-repeat: no-repeat;
  -webkit-box-align: center;
  align-items: center;
`;

export const ToAddress = styled.input`
  width: 684px;
  padding: 8px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 208, 213);
  color: rgb(12, 22, 44);
  background-color: rgb(255, 255, 255);
  outline: 0px;
  display: block;
  line-height: 22px;
  border-radius: 4px;
  box-shadow: rgb(12 22 44 / 32%) 0px 8px 24px -16px;
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 50px;
  padding-left: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: #a0b3f2;
  background-color: #f5f7fd;

  font-size: 14px;
  color: rgb(109, 115, 128);
  line-height: 24px;
`;

// export const Amount_100 = styled.div``;

// export const Amount_10 = styled.div``;

export const SendBtn = styled.div`
  height: 20px;
  width: 100px;
  margin: 24px 16px 0px 0px;
  appearance: none;
  display: inline-block;
  text-align: center;
  border: 2px solid rgb(55, 91, 210);
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(55, 91, 210);
  color: rgb(255, 255, 255);
  padding: 8px 24px;
  border-radius: 4px;
  :hover {
    background-color: rgb(35, 70, 184);
  }
`;
