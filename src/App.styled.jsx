import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const Container = styled.div`
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #403866;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 350px;
  height: 40px;
  padding: 0 35px 0 35px;
  margin-right: 15px;
  background: #fff;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #8f8fa1;
  outline: none;
  color: #8f8fa1;
  line-height: 1.2;

  &:focus {
    box-shadow: 0px 0px 1px 1px #8f8fa1;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;

  &:checked + span {
    text-decoration: line-through;
  }
`;

export const Button = styled.button`
  display: block;
  height: 40px;
  padding: 0 35px 0 35px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  background-color: #827ffe;

  &:hover,
  &:focus {
    background-color: #727ffe;
  }
`;

export const TodoText = styled.span`
  display: inline-block;
  font-size: 18px;
  margin: 0 10px;
`;

export const RemoveBtn = styled.span`
  color: red;
  cursor: pointer;
`;
//=======================

export const NotifyMessage = styled.p`
  color: red;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;
