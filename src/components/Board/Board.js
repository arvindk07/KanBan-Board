import { MoreHorizontal } from "react-feather";
import CustomCard from "../Card/Card";
import Editable from "../Editable/Editable";
import "./Board.scss";

const Board = () => {
  return (
    <div className="cardBoard">
      <div className="boardTop">
        <p className="boardTopTitle">
          To Do <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="boardCards custom-scroll">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <Editable
          displayClass="boardCardAdd"
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  );
};

export default Board;
