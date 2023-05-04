var randomnum=Math.floor(Math.random() * 6) + 1;
var randice="dice"+randomnum+".png";
var ranimg="images/"+randice;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src", ranimg)


var randomnum1=Math.floor(Math.random() * 6) + 1;
var randice1="dice"+randomnum1+".png";
var ranimg1="images/"+randice1;


var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src", ranimg1)

if (randomnum > randomnum1){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
    
}
else if ((randomnum1 > randomnum))
{document.querySelector("h1").innerHTML = "Player 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
