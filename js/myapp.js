//lấy giá trị cho ô
const Box = ({value, clickBox})=>(
    <button className='btn' onClick={clickBox}>
        {value}
    </button>
)

//var boxxs = function(props) {
//     return React.createElement(
//       'button',
//       { className: 'btn', onClick: props.onClick },
//       props.value
//     );
// };

//check winner
const checkWinner = (boxs)=>{
    const list = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let k = null;
    for(const [a, b, c] of list){
        if(boxs[a] && boxs[a]===boxs[b] && boxs[a]===boxs[c]){
            alert('Game kết thúc rồi!')
            return boxs[a];
        }
    }
    return null;
}

//main của game
const Board = ()=>{
    const [boxs, setBoxs] = React.useState(Array(9).fill(null));
    const [times, setTimes] = React.useState(true);
    // const [check, setCheck] = React.useState(false);


    //xử lí chạm
    const handleClick = (index)=>{
        //check win
        if(checkWinner(boxs) || boxs[index]){
            return;
        }
 
        //đổ nền:)
        const newBoard = [...boxs];
        newBoard[index] = times?'x':'o';

        //update 
        setBoxs(newBoard);
        setTimes(!times);
    }

    //render ra UI
    const RenderBox = (index)=>(
        <Box value={boxs[index]} clickBox={()=>(handleClick(index))}/>
    );

    //cái trạng thái game
    const status = checkWinner(boxs) ? `Winner: ${checkWinner(boxs)}`: `Attack: ${times?'x':'o'}`; 

    //UI
    return (
        <div className='container'>
            <div className='title'>
                <p className='title-gms'>Tic Tac Toe</p>
            </div>
            <div className='board-row'>
                {RenderBox(0)}
                {RenderBox(1)}
                {RenderBox(2)}
            </div>
            <div className='board-row'>
                {RenderBox(3)}
                {RenderBox(4)}
                {RenderBox(5)}

            </div>
            <div className='board-row'>
                {RenderBox(6)}
                {RenderBox(7)}
                {RenderBox(8)}

            </div>
            <div className='status'>
                <div className='content-status'>{status}</div>
                <a className='reset' href=''>reset</a>
            </div>
            {/* <p>gemtaolao.bidao</p> */}
        </div>
    );
};

//
const Game = ()=>(
    <div className='main'>
        <div className='board'>
            <Board />
        </div>
    </div>
);

ReactDOM.render(<Game />, document.getElementById('root'));
//...