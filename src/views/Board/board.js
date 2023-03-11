import BoardLayout from "../../Components/BoardLayout/BoardLayout";
import './stylesheet.scss';

const Board = ()=>{

    return(
        <div className="board-container">
            <h1>Hellow this is Board component</h1>
            <BoardLayout>
            </BoardLayout>
        </div>
    )
}

export default Board;