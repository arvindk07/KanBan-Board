import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.scss";

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="edittabel">
      {showEdit ? (
        <form
          className={`edittableEdit ${props.editClass || ""}`}
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder={props.placeholder || "Enter Item"}
          />
          <div className="editableEditFooter">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          onClick={() => setShowEdit(true)}
          className={`edittabelDisplay ${props.displayClass || ""} `}
        >
          {props.text || "Add Item"}
        </p>
      )}
    </div>
  );
};

export default Editable;
