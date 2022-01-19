const bombs=[];
let gamePoints=0;
let canPlay=true;
function updateGamePoints(){
    const score=document.getElementById("gamePoint");
    score.innerHTML="Game Points "+gamePoints;
}
function addGrid(){
    const appElement=document.getElementById("app");
    for(let i=0;i<9;i++){
        const row=document.createElement("div");
        for(let j=0;j<9;j++){
            const index=i*9+j;
            const column=document.createElement("div");
            column.style.display="inline-block";
            column.style.height="60px";
            column.style.width="60px";
            column.style.border="1px solid black";
            column.style.textAlign="center";
            column.style.verticalAlign="middle";
            column.setAttribute("index",index);
            column.addEventListener("click",()=>{
                if(canPlay){
                if(bombs.includes(index)){
                  
                    column.style.backgroundColor="red";
                    canPlay=false;
                }
                else{
                    column.style.backgroundColor="green";
                    gamePoints++;
                    updateGamePoints();
                }
            }
            })
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }     
}
function generateBombs(){
    while(bombs.length!==10){
    const randomNumber=Math.floor(Math.random()*100);
       if(randomNumber<81 && !bombs.includes(randomNumber)){
           bombs.push(randomNumber);
       }
   }
}
addGrid();
generateBombs();
console.log(bombs);