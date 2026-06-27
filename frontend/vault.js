function saveGoal(){

    let goalName = document.getElementById("goalName").value;
    let goalAmount = document.getElementById("goalAmount").value;
    let goalDate = document.getElementById("goalDate").value;
    let goalReason = document.getElementById("goalReason").value;

    localStorage.setItem("goalName", goalName);
    localStorage.setItem("goalAmount", goalAmount);
    localStorage.setItem("goalDate", goalDate);
    localStorage.setItem("goalReason", goalReason);

    alert("Goal Saved Successfully 💚");

    window.location.href = "dashboard.html";

}