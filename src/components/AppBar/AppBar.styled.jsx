import styled from "@emotion/styled";

export const MyLogo = styled.img`
  width: 75px;
  border-radius: 50%;
  border-style: inset;
  border-color: #b8b076;
  border-width: 2px;
  transition: border-color 250ms ease-in-out;

  &:hover,
  &:focus {
    border-color: yellow;
  }
`;

//====Auth=====
export const Header = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  height: 70px;
  color: aliceblue;
  background-color: #080808;
  padding: 12px 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  width: 32px;
  margin-right: 4px;
`;

export const AuthWelcome = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export const UserName = styled.span`
  color: yellow;
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  background-color: yellow;
  border-radius: 50%;
  border: 2px solid yellow;
  padding: 3px;
  font-weight: 700;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: black;
    // border-color: white;
    box-shadow: 0px 0px 1px 1px yellow;
  }
  & > svg {
    color: black;
    transition: all 250ms ease-in-out;
  }
  & > svg:hover,
  & > svg:focus {
    color: yellow;
  }
`;

//=======Navigation

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const NavItem = styled.span`
  margin: 10px;
  display: block;
`;
