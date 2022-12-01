import React from "react";
import PropTypes from "prop-types";
import { filterTodo } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function FilterCheckBox(props) {
  const dispatch = useDispatch();
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        onClick={() => dispatch(filterTodo(`${props.type}`))}
        defaultChecked={props.check}
      />
      <label className="form-check-label" for="flexRadioDefault1">
        <h4>{props.text}</h4>
      </label>
    </div>
  );
}
FilterCheckBox.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  check: PropTypes.bool
};
