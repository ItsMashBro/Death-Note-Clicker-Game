//Define variables
let shinigami = {
    names: 0,
    fame: 0,
    JapanPopulation: 1000 //Obviously not but I'm not making the game run up to 125 million lol
}
let misaButton = document.getElementById("buymisa")
let kyosukeButton = document.getElementById("buykyosuke")
let teruButton = document.getElementById("buyteru")

//Define Functions
    //Write button and fame counter
function writeNames(){
    shinigami.names++;
    document.getElementById("namecount").innerHTML = shinigami.names;
}

function gainFame(){
    shinigami.fame = shinigami.names / shinigami.JapanPopulation * 100;
    document.getElementById("fame").innerHTML = shinigami.fame + "%";
}
//Buy buttons and incrementers

setInterval(function buyMisa() {
    if (shinigami.fame >= 10){
        shinigami.names = shinigami.names + 1;
        document.getElementById("namecount").innerHTML = shinigami.names;
}}, 1000)



setInterval(function buyHiguchi() {
    if (shinigami.fame >= 50){
        shinigami.names = shinigami.names + 3;
        document.getElementById("namecount").innerHTML = shinigami.names;
}}, 1000)


setInterval(function buyTeru() {
    if (shinigami.fame >= 85){
        shinigami.names = shinigami.names + 5;
        document.getElementById("namecount").innerHTML = shinigami.names;
}}, 1000)



//Invoke functions?



//Set intervals for buy options



//stop intervals and end game