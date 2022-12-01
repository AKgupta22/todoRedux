import React, { useEffect, useState } from "react";
import FilterBar from "./Generic/FilterBar";
import AddBar from "./Generic/AddBar";
import TodoItems from "./Generic/TodoItems";
import { useSelector } from "react-redux";

export default function Home() {
  const [copiedData, setCopiedData] = useState([]);
  const [editable, setEditable] = useState(-1);
  const [editvalue, setEditvalue] = useState("");
  const reduxdata = useSelector((state) => state.Todo);
  useEffect(() => {
    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    setCopiedData(JSON.parse(localStorage.getItem("todo")));
  }, [reduxdata]);

  return (
    <div className="container-fluid mt-2">
      <AddBar
        editable={editable}
        setEditable={setEditable}
        editvalue={editvalue}
        copiedData={copiedData}
      />
      {copiedData?.length > 0 ? (
        <div>
          <div className="mt2">
            <h2 className="mt-2">Filter Todo</h2>
            <FilterBar />
          </div>
          <h2 className="mt-2">Todo List</h2>
        </div>
      ) : (
        ""
      )}
      <ul className="list-group w-100 mt-2">
        {reduxdata?.map((item, i) => {
          return (
            <div key={i} className="li-div">
              <TodoItems
                editable={editable}
                item={item}
                i={i}
                setEditable={setEditable}
                setEditvalue={setEditvalue}
                editvalue={editvalue}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
