var white = document.getElementById('white');
var aqua = document.getElementById('aqua');
var violet = document.getElementById('violet');
var black = document.getElementById('black');

function changeBG(color) {
let body=document.body
   body.style.background=color;

let text=document.getElementsByClassName("text");

if(color=='#000000'){
    for(let i=0;i<text.length;i++){
        text[i].style.color="white";
    }
}

else{
    for(let i=0;i<text.length;i++){
        text[i].style.color="black";
    }
}

  
}



