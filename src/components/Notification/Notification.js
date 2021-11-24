import React from "react";
import PropTypes from "prop-types";
import { NotifyMessage } from "../../App.styled";

export default function Notification({ message }) {
  return <NotifyMessage>{message}</NotifyMessage>;
}

Notification.defaultProps = {
  message: "No contacts ",
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
