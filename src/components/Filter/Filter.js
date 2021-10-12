import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
export function Filter({ value, onChange }) {
  return (
    <div className={s.filter_overlay}>
      <label className={s.filter_label}>
        Find contacts by name:
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.filter_input}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
