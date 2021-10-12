import React from "react";
import PropTypes from "prop-types";
import s from "./SectionTitle.module.css";

export default function SectionTitle({ sectionTitle }) {
  return <h2 className={s.section_title}>{sectionTitle}</h2>;
}

SectionTitle.defaultProps = {
  title: "Contacts",
};

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
};
