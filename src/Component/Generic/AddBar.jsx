import React ,{useState} from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo, editTodos } from "../../Redux/Actions";

export default function AddBar({ editable,setEditable,editvalue }) {
  const [inputclass, setInputclass] = useState("form-control");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const postData = (e) => {
    const Regex = new RegExp("[a-zA-Z0-9]{1,}");
    e.preventDefault();
    if (Regex.test(todo) === true) {
      setInputclass("form-control");
      dispatch(addTodo(todo, "pending"));
      setTodo("");
      if (editable !== -1) {
        dispatch(editTodos(editvalue, editable));
        setEditable(-1);
      }
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
  editvalue: PropTypes.string
};
