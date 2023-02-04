import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";

const App = () => {
  return (
    <div className="appWrapper">
      <div className="appNavbar">
        <h1>Header</h1>
      </div>
      <div className="appOuter">
        <div className="boardContainer">
          <Board />
          <Board />
          <div className="addBoardsBoard">
            <Editable text="Add Board" placeholder="Enter Board Title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
