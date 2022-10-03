//Define variables
let shinigami = {
    names: 0,
    fame: undefined,
    JapanPopulation: 1000 //Obviously not but I'm not making the game run up to 125 million lol
}
let misaButton = document.getElementById("buymisa")
    misaButton.onclick = buyMisa;
let kyosukeButton = document.getElementById("buykyosuke")
    kyosukeButton.onclick = buyKyosuke;
let teruButton = document.getElementById("buyteru")
    teruButton.onclick = buyTeru;

//Define Functions
    //Write button and fame counter
function writeNames(){
    shinigami.names++;
    document.getElementById("namecount").innerHTML = shinigami.names;
    shinigami.fame = shinigami.names / shinigami.JapanPopulation * 100;
    document.getElementById("fame").innerHTML = shinigami.fame + "%";
}

//Buy buttons and incrementers

function buyMisa(){
    setInterval(function() {
        if (shinigami.fame >= 10){
            shinigami.names = shinigami.names + 5;
            document.getElementById("namecount").innerHTML = shinigami.names;
}}, 1000)}


function buyKyosuke(){
    setInterval(function() {
        if (shinigami.fame >= 50){
            shinigami.names = shinigami.names + 10;
            document.getElementById("namecount").innerHTML = shinigami.names;
    }}, 1000)}

function buyTeru(){
    setInterval(function() {
        if (shinigami.fame >= 85){
            shinigami.names = shinigami.names + 20;
            document.getElementById("namecount").innerHTML = shinigami.names;
    }}, 1000)}



//Invoke functions?



//Set intervals for buy options



//stop intervals and end game