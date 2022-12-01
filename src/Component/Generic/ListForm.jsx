import React from "react";
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
  const editTodo = (i) => {
    dispatch(editTodos(editvalue, i));
    setEditable(-1);
  };
  return (
    <form className="w-100" onSubmit={() => editTodo(i)}>
      {" "}
      <input
        type="text"
        className="form-control"
        defaultValue={item.task}
        required
        onChange={(e) => setEditvalue(e.target.value)}
      />
    </form>
  );
}
ListForm.propTypes = {
  editTodo: PropTypes.func,
  item: PropTypes.object,
  i: PropTypes.number,
  setEditvalue: PropTypes.func,
  editvalue:PropTypes.string
};
