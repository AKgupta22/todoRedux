import React from "react";
import PropTypes from "prop-types";
import { Marking } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function ListCheckBox({ item, i }) {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={`${i}CheckboxStretched`}
        checked={item.status === "done" ? true : false}
        onChange={() => dispatch(Marking(i))}
      />
      <label
        className="form-check-label stretched-link"
        for={`${i}CheckboxStretched`}
      >
        {item.task}
      </label>
    </div>
  );
}
ListCheckBox.propTypes = {
  item: PropTypes.object,
  i: PropTypes.number
};
