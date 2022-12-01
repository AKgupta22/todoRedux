import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions";

export default function AddBar({ copiedData }) {
  const [inputclass, setInputclass] = useState("form-control");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const Validate = (item) => {
    const result = copiedData.findIndex(
      (p) => p.task.toUpperCase() === item.toUpperCase()
    );
    return result;
  };
  
  const postData = (e) => {
    e.preventDefault();
    const Regex = new RegExp("[a-zA-Z0-9]{1,}");
    if (Regex.test(todo) === true) {
      setInputclass("form-control");
      if (Validate(todo) === -1) {
        dispatch(addTodo(todo, "pending"));
        setTodo("");
      } else alert("Duplicate todo");
    } else {
      setInputclass("form-control input-validate");
    }
  };

  return (
    <form className="mt-2" onSubmit={postData}>
      <div className="mb-3">
        <label className="form-label">Todo</label>
        <input
          type="text"
          className={inputclass}
          placeholder="Create your Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </div>
      <button type="sumbit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
AddBar.propTypes = {
  editable: PropTypes.number,
  setEditable: PropTypes.func,
  editvalue: PropTypes.string,
};
