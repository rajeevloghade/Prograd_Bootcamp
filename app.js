let score=[0,1,2,3,4,5,6];
console.log(score);
var turn;

var team1={
    name:"CSK",
    runs:[],
    score:0
};
console.log(team1);
var team2={
    name:"MI",
    runs:[],
    score:0
};
console.log(team2);

window.onload=()=>{
    selectTurn();//decide toss
    updateButtonText();//update the button text
    updateScore(); //updating the initial score   
    updateName();//update name
}

selectTurn=()=>{
    console.log("select turn");
    turn=Math.round(Math.random())+1;
    console.log(turn);
}

updateButtonText=()=>{
    var button=document.getElementById('strike-button');
    console.log(button);
    button.textContent=`${turn===1?team1.name:team2.name} Strike`;
}

updateScore=()=>{
document.getElementById('team-1-score').textContent=team1.score;
document.getElementById('team-2-score').textContent=team2.score;
}

updateName=()=>{
    document.getElementById('team-1-name').textContent=team1.name;
    document.getElementById('team-2-name').textContent=team2.name;
    }
    







// var a=10;
// console.log(a);

// var b=3;

// (a>b)?console.log(a):console.log(b);


// var array=[1,2,3,"rajeev"];

// array.forEach(element => {console.log(element)});


