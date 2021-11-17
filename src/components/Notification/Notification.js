import React from "react";
import PropTypes from "prop-types";
import s from "./Notification.module.css";

export default function Notification({ message }) {
  return <p className={s.message_notification}>{message}</p>;
}

Notification.defaultProps = {
  message: "No contacts ",
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
