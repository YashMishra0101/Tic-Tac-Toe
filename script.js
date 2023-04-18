const gameInfo=document.querySelector('.game-info');
const boxes=document.querySelectorAll('.box');
const newGameBtn=document.querySelector('.btn');
const clickMusic=document.querySelector('.gameOver')
const tik=document.querySelector('.tik')

let currentPlayer;
let gameGrid;


const initGame=()=>{
    currentPlayer='🧛🏼';
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box) => {
        box.innerText = ""; 
        box.classList.remove('win')
        box.style.pointerEvents ='auto';
    });
    pauseAudio()
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`
}

initGame();


const  winningPositions=[ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const swapTurn=()=>{
    if(currentPlayer==="🧛🏼"){
        currentPlayer=" 👹"
       
    }
    else{
        currentPlayer="🧛🏼"
       
    }
    gameInfo.innerText=`Current Player - ${currentPlayer}`
}

function checkGameover(){
    let answer="";

    winningPositions.forEach((position)=>{

     if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[01]]!=="" ) &&
        
     (gameGrid[position[0]]===gameGrid[position[1]])  &&  (gameGrid[position[1]]===gameGrid[position[2]] )) {

        if(gameGrid[position[0]]==='🧛🏼')

            answer='🧛🏼';
        
             
             else{
            answer='👹';
             }

             boxes.forEach((box) => {
                box.style.pointerEvents ='none';
            })

            boxes[position[0]].classList.add('win')
            boxes[position[1]].classList.add('win')
            boxes[position[2]].classList.add('win')
            playAudio();
          }

    });

    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
    
    }
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }
}



const handelClick=(index)=>{
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        swapTurn();
        checkGameover();
        
        
    }
    }
    
    boxes.forEach((box,index)=>{
        box.addEventListener('click',()=>{
            handelClick(index); 
            playtik();
            newGameBtn.classList.add("active");
            
        }) 
    })


newGameBtn.addEventListener('click',initGame)

function playAudio() { 
    clickMusic.play(); 
  } 

  function pauseAudio() {
    clickMusic.pause();
  }

  
function playtik() { 
    tik.play(); 
  } 
