
var bulb  = document.querySelector("#bulb");
var switchButton = document.querySelector("button")

var current = 0;

switchButton.addEventListener("click", ()=>{
    if (current == 0){
        switchButton.innerHTML = "OFF",
        switchButton.style.padding = "20px 7.5px"
        bulb.style.backgroundColor = "yellow"
        document.querySelector('body').style.backgroundColor = "rgb(250, 252, 234)";
        current = 1;
    }else{
        switchButton.innerHTML = "ON",
        switchButton.style.padding = "20px 12px"
        bulb.style.backgroundColor = "grey"
        document.querySelector('body').style.backgroundColor = "black";
        current = 0;
    }
})