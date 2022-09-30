var names = 0
var fame = 0
var JapanPopulation = 1000 //obviously not but I'm not making the game run up to 125.8 million....sorry lol

function writeNames(){
    document.getElementById("namecount").innerHTML = names;}
function gainFame(){
    document.getElementById("fame").innerHTML = names/JapanPopulation*100 + "%";}

window.setInterval(
    function buyMisa() {
        if (names >= 100){
        names = names + 1;
        document.getElementById("namecount").innerHTML = names;
    }}, 500)

    window.setInterval(
        function buyHiguchi() {
            if (names >= 500){
            names = names + 3;
            document.getElementById("namecount").innerHTML = names;
        }}, 1000)

        window.setInterval(
            function buyTeru() {
                if (names >= 850){
                names = names + 5;
                document.getElementById("namecount").innerHTML = names;
            }}, 1000)

function stopWriting(){
    if (names >= 1000){
        clearInterval(buyHiguchi, buyMisa, buyTeru);
        return;
    }
    console.log("You win the game!")
}
