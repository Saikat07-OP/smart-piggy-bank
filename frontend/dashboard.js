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

function addMoney(){

    let inputMoney =
    document.getElementById("moneyInput").value;

    currentMoney =
    Number(currentMoney) + Number(inputMoney);

    localStorage.setItem("savedMoney", currentMoney);

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
}