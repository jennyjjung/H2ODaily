//setting.html
let counter = 0;
let add = (function () {
    return function () {
        if (counter < 10) {
            return (counter += 1);
        }
        return 10;
    };
})();

function more() {
    document.getElementById("clicks").innerHTML = add() * 250;
    loadImg();
}

let minus = (function () {
    return function () {
        if (counter != 0) {
            return (counter -= 1);
        }
        return 0;
    };
})();
      
function less() {
    document.getElementById("clicks").innerHTML = minus() * 250;
    removeImg();
}

let imageDiv = document.getElementById("water");
let moreBtn = document.getElementById("more");
var waterCount = 0;

function loadImg() {
    if (waterCount < 11) {
        waterCount++; 
        let waterImage = document.createElement("IMG");
        waterImage.src = "images/watercup.png";
        waterImage.setAttribute("width", "100px");
        waterImage.setAttribute("height", "100px");
        waterImage.setAttribute("id", "water" + waterCount);
        imageDiv.appendChild(waterImage); 
        localStorage.setItem("waterCount", waterCount);
        getDropDownValue();
    }
            
}
        
function removeImg() {
    let waterImage = document.getElementById("water" + waterCount);
    imageDiv.removeChild(waterImage); 
    waterCount--; 
    localStorage.setItem("waterCount", waterCount);
    getDropDownValue();
}
 

function getDropDownValue() {
    let dropdown = document.getElementById("dd__list");
    var timeHello = dropdown.options[dropdown.selectedIndex].value;  
    localStorage.setItem("time", timeHello);
}

//reminder.html
document.addEventListener("DOMContentLoaded", applyImg); 
document.addEventListener("DOMContentLoaded", addCheckBox);

let submit = document.getElementById("submit"); 
let reminderDiv = document.getElementById("reminder__container");
let checkBoxDiv = document.getElementById("checkmark__container");
var wCount = localStorage.getItem("waterCount"); 
var timeCount = localStorage.getItem("time"); 


function applyImg() {
    
    for (let i = 0; i < wCount; i++) {
        let waterImage = document.createElement("IMG");
        waterImage.src = "images/watercup.png";
        waterImage.setAttribute("width", "100px");
        waterImage.setAttribute("height", "100px");
        waterImage.setAttribute("id", "water" + i);
        reminderDiv.appendChild(waterImage); 
    }
}

function addCheckBox() {
    for(let i = 0; i < wCount; i++) {
        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox"); 
        checkBox.setAttribute("id", "checkBox" + i);
        checkBox.style.margin = "10px 45px 10px 45px";
        checkBoxDiv.appendChild(checkBox);
    }
}

function drinkWater() {
    for(let i = 0; i < wCount; i++) {
        let eachWaterCup = document.getElementById("water" + i);
        let eachCheckBox = document.getElementById("checkBox" + i);

        if(eachCheckBox.checked) {
            eachWaterCup.src = "images/emptycup.png"; 
            eachCheckBox.style.visibility = "hidden";
        }
    }
 }

submit.addEventListener("click", drinkWater);

//Modal 


const timer = setTimeout(openModel, 5000);
const close =document.getElementById('okay__btn');


var currentTime; 

function openModel() {
    modal.classList.add("show");
    document.getElementById("hello").innerHTML = timeCount;
}

function closeModel() {
    modal.classList.remove("show");
    currentTime = new Date().getTime() / 1000 / 60;

}

document.getElementById("okay__btn").addEventListener("click", closeModel);

function restartTimer() {
    if (currentTime == (new Date().getTime() / 1000 / 60) - 1) {
        openModel();
    }
}
