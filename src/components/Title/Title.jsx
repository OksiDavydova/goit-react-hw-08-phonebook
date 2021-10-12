import React from "react";
import PropTypes from "prop-types";
import s from "./Title.module.css";

export default function HeroTitle({ title }) {
  return <h1 className={s.hero_title}>{title}</h1>;
}

HeroTitle.defaultProps = {
  title: "Phonebook",
};

HeroTitle.propTypes = {
  title: PropTypes.string,
};
