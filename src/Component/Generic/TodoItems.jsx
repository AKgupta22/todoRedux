import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import Badge from "./Badge";
import ListCheckBox from "./ListCheckBox";
import ListForm from "./ListForm";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../../Redux/Actions";

export default function TodoItems({
  editable,
  item,
  i,
  setEditable,
  setEditvalue,
  editvalue
}) {
  const dispatch = useDispatch();
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          {editable !== i ? <ListCheckBox item={item} i={i} /> : ""}
        </div>
        {editable === i ? (
          <ListForm
            i={i}
            item={item}
            setEditvalue={setEditvalue}
            setEditable={setEditable}
            editvalue={editvalue}
          />
        ) : (
          ""
        )}
        {item.status === "done" ? <Badge text="Completed" /> : ""}
      </li>
      <div className="d-flex justify-content-between">
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-sharp fa-solid fa-trash"></i>}
          handler={() => dispatch(deleteTodos(i))}
        />
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-solid fa-pen"></i>}
          handler={() => setEditable(i)}
        />
      </div>
    </>
  );
}

TodoItems.propTypes = {
  editable: PropTypes.number,
  item: PropTypes.object,
  i: PropTypes.number,
  setEditable: PropTypes.func,
  setEditvalue: PropTypes.func,
  editvalue: PropTypes.string
};
