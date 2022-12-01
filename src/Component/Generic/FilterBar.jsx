import React from "react";
import FilterCheckBox from "./FilterCheckBox";

export default function FilterBar() {
  return (
    <div className="d-flex justify-content-between filterbar">
      <FilterCheckBox
        type="All"
        text="All"
        check={true}
      />
      <FilterCheckBox
        type="done"
        text="Completed"
        check={false}
      />
      <FilterCheckBox
        type="pending"
        text="Incompleted"
        check={false}
      />
    </div>
  );
}
