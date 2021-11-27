import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth, getUserName } from "../redux/auth/auth-selector";
import SadPanda from "../components/Images/sad-panda.png";
import HiPanda from "../components/Images/hiwithpanda.jpg";
import {
  Wrapper,
  Title,
  Button,
  LabelMessage,
  TitleAccent,
  ImgFotHomePage,
} from "../App.styled";

function HomePage() {
  // const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const name = useSelector(getUserName);
  let navigate = useNavigate();
  const sadPanda = SadPanda;
  const PandaSayHi = HiPanda;

  const onClickLogInrBtn = () => {
    navigate(`/login`);
  };
  const onClickRegisterBtn = () => {
    navigate(`/register`);
  };

  return (
    <>
      {isAuth ? (
        <Wrapper>
          <Title>
            hi <TitleAccent>{name} !</TitleAccent>
            <ImgFotHomePage src={PandaSayHi} alt="img for homepage" />
          </Title>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>
            Welcome to <TitleAccent>Phonebook</TitleAccent>
          </Title>
          <ImgFotHomePage src={sadPanda} alt="sad panda" />
          <Button type="button" onClick={onClickRegisterBtn}>
            Registration
          </Button>
          <LabelMessage>OR</LabelMessage>
          <Button type="button" onClick={onClickLogInrBtn}>
            Log in
          </Button>
        </Wrapper>
      )}
    </>
  );
}

export default HomePage;
