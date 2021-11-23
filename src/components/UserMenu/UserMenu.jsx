import React from "react";
import defaultAvatar from "./default-avatar.png";
import { logoutThunk } from "../../redux/auth/auth-thunks";
import { useDispatch } from "react-redux";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
// { avatar, name, onLogout }

const avatar = defaultAvatar;

function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
