import React from "react";
import { X } from "react-feather";
import "./Chips.scss";

const Chips = (props) => {
  return (
    <div className="chips" style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && <X onClick={props.onClose ? props.onClose() : ""} />}
    </div>
  );
};

export default Chips;
