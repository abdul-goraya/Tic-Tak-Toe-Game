let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btntxt");
let notification = document.querySelector(".text");
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnO = true;
let count = 0;
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("Button was clicked");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        };
        count ++;
        box.disabled = true;
        let isWinner = checkwinner();
        if(count == 9 && !isWinner){
            notification.innerHTML = `<h1>Tie</h1>`
        }
    });
});
const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        notification.innerHTML = `<h1>Tic Tac Toe</h1>`
    };
};
const resetGame = ()=>{
    turnO = true;
    count = 0;
    enable();
};
const checkwinner = () =>{
    for(let i of winpattern){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText; 
        if(pos1 !== "" && pos2 !=="" &&pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                disable();
                notification.innerHTML = `<h1>${pos1} is winner</h1>`
            }
        }
    }
};
resetbtn.addEventListener("click", resetGame);