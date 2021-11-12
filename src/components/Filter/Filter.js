import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions-contacts";

function Filter({ filter, onChangeFilter }) {
  return (
    <div className={s.filter_overlay}>
      <label className={s.filter_label}>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={onChangeFilter}
          className={s.filter_input}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (e) => dispatch(changeFilter(e.target.value.trim())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
