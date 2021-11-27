import styled from "@emotion/styled";

export const CenterContainerForLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 600px;
  // width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  // text-align: center;
  border-radius: 15px 50px;
  box-shadow: 0 4px 8px 0 rgba(52, 49, 49, 0.2),
    0 6px 20px 0 rgba(216, 241, 48, 0.19);
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const TitleAccent = styled.span`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  color: red;
`;

export const Heading = styled.h2`
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  background: #191815d1;
  margin-top: 30px;
  padding: 20px;
  border-bottom-left-radius: 70px;
  border-top-right-radius: 70px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #dde282;
  margin-bottom: 20px;
`;
export const LabelMessage = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: red;
`;

export const Input = styled.input`
  display: block;
  min-width: 350px;
  width: 100%;
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

// 	#0e0f0f	(14,15,15)
// #74726b	(116,114,107)
// #caa971	(202,169,113)
// #f4e664	(244,230,100)
// #fefde5	(254,253,229)

export const Button = styled.button`
  display: block;
  height: 40px;
  padding: 0 35px 0 35px;
  border-radius: 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  color: black;
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: yellow;
    background-color: black;
    box-shadow: 0px 0px 1px 1px yellow;
  }
`;

export const TodoText = styled.span`
  display: inline-block;
  font-size: 18px;
  margin: 0 10px;
`;

export const CreateAccountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: silver;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 20px;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: red;
  }
`;
//=======================

export const NotifyMessage = styled.p`
  color: red;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`;

export const ContactsList = styled.ul`
  position: relative;
  max-width: 400px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  background: #191815d1;
  // padding: 20px;
  // border-bottom-left-radius: 70px;
  // border-top-right-radius: 70px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: white;
  justify-content: space-between;
  border-bottom: 2px groove #907c4061;
`;

export const ItemName = styled.p`
  margin-bottom: 0;
`;

export const LinkToCall = styled.a`
  position: absolute;
  left: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: color 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: red;
  }
`;

export const ItemButton = styled.button`
  border: 2px solid black;
  border-radius: 50%;
  padding: 5px;
  color: black;
  background-color: yellow;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: yellow;
    background-color: black;
    border-color: yellow;
  }
`;

export const ImgFotHomePage = styled.img`
  width: 300px;
  margin-bottom: 20px;
  border-bottom-left-radius: 70px;
  border-top-right-radius: 70px;
`;
