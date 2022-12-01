import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { editTodos } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function ListForm({
  i,
  item,
  setEditvalue,
  setEditable,
  editvalue,
}) {
  const dispatch = useDispatch();

  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const ClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const ClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener("mousedown", ClickOutside);
    return () => document.removeEventListener("mousedown", ClickOutside);
  });

  const editTodo = (i) => {
    dispatch(editTodos(editvalue, i));
    setEditable(-1);
  };
  return (
    <form className="w-100" onSubmit={() => editTodo(i)}>
      {" "}
      <input
        ref={myRef}
        type="text"
        className="form-control"
        defaultValue={item.task}
        required
        onChange={(e) => setEditvalue(e.target.value)}
        onClick={() => ClickInside()}
        {...(clickedOutside ? editTodo(i) : "")}
      />
    </form>
  );
}
ListForm.propTypes = {
  editTodo: PropTypes.func,
  item: PropTypes.object,
  i: PropTypes.number,
  setEditvalue: PropTypes.func,
  editvalue: PropTypes.string,
};
