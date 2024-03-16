// Retrieve the balance from localStorage
var currentBalance = parseFloat(localStorage.getItem("balance")) || 0;

// Update the balance in the HTML
document.getElementById("currentBalance").textContent = "$ " + currentBalance.toLocaleString();
