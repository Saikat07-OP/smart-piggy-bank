console.log("JS Connected 😎");

fetch("http://localhost:3000/goal")
.then(response => response.json())
.then(data => {

    console.log("Backend Data 😎");
    console.log(data);

})
.catch(error => {

    console.log("Fetch Error ❌");
    console.log(error);

});

let goalName = localStorage.getItem("goalName");
let goalAmount = localStorage.getItem("goalAmount");
let goalDate = localStorage.getItem("goalDate");
let goalReason = localStorage.getItem("goalReason");

document.getElementById("showGoal").innerHTML = goalName;

document.getElementById("showAmount").innerHTML =
"₹" + goalAmount;

document.getElementById("showDate").innerHTML =
goalDate;

document.getElementById("showReason").innerHTML =
goalReason;

let currentMoney =
localStorage.getItem("savedMoney") || 0;

document.getElementById("savedMoney").innerHTML =
"₹" + currentMoney;

let historyData =
JSON.parse(localStorage.getItem("historyData")) || [];

showHistory();

function addMoney(){

    let inputMoney =
    document.getElementById("moneyInput").value;

    currentMoney =
    Number(currentMoney) + Number(inputMoney);

    localStorage.setItem("savedMoney", currentMoney);

    historyData.push("+ ₹" + inputMoney);

localStorage.setItem(
"historyData",
JSON.stringify(historyData)
);

showHistory();

    document.getElementById("savedMoney").innerHTML =
    "₹" + currentMoney;

    document.getElementById("moneyInput").value = "";

    updateProgress();

}
updateProgress();

function updateProgress(){

    let targetAmount =
    Number(goalAmount);

    let savedAmount =
    Number(currentMoney);

    let remaining =
    targetAmount - savedAmount;

    if(remaining < 0){
        remaining = 0;
    }

    let progress =
    (savedAmount / targetAmount) * 100;

    if(progress > 100){
        progress = 100;
    }

    document.getElementById("progressFill")
    .style.width = progress + "%";

    document.getElementById("progressText")
    .innerHTML =
    Math.floor(progress) + "% Completed";

    document.getElementById("remainingAmount")
    .innerHTML =
    "₹" + remaining;
}

function showHistory(){

    let historyList =
    document.getElementById("historyList");

    historyList.innerHTML = "";

    historyData.slice().reverse().forEach(function(item){

        historyList.innerHTML +=
        `<li>${item}</li>`;

    });

}