import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chips from "../Chips/Chips";
import "./Card.scss";

const CustomCard = () => {
  return (
    <div className="customCard">
      <div className="cardTop">
        <div className="cardCustomLabels">
          <Chips text="frontend" color="yellowgreen" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="cartTitle">Webdev</div>
      <div className="cartFooter">
        <p>
          <Clock />4 Feb
        </p>
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
