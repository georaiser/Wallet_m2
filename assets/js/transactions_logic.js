// Function to handle Transaction
function handleTransaction(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the current balance
    //var currentBalance = parseFloat(localStorage.getItem("balance")) || 0;//

    // Update transaction information on the HTML
    document.getElementById("currentBalance").textContent = currentBalance;

    // Get the amount of traded operation
    var transactionAmount = parseFloat(document.getElementById("transactionAmount").value);

    // Get the transaction note / it will be used in the future (with server)
    var transactionNote = document.getElementById("transactionNote").value;

    // Check if the input is valid
    if (!isNaN(transactionAmount) && transactionAmount > 0) {

        // check class name for performing operations on balance (add or withdraw money)
        if (nameClass == "Load_Money" || nameClass == "Request_Money") {
            // Update the balance
            var newBalance = currentBalance + transactionAmount;
        }
        else if (nameClass == "Send_Money" || nameClass == "Pay_Bill") {
            // Update the balance
            var newBalance = currentBalance - transactionAmount;
        }

        // Store the new balance
        localStorage.setItem("balance", newBalance);

        // Update transaction information on the HTML
        document.getElementById("amountTraded").textContent = transactionAmount.toFixed(0);
        document.getElementById("currentBalance").textContent = newBalance.toFixed(0);

        // alert show a success message
        alert("transaction successful. New balance: " + newBalance.toFixed(0) + "\nTransaction Note: " + transactionNote);

        // Reset the form
        document.getElementById("transactionForm").reset();
    } else {
        alert("Please enter a valid amount to transaction.");
    }
}

// Retrieve class names from localStorage got from transactions_main.html
var nameClass = localStorage.getItem('class');

// Apply the class names to the body element
document.body.classList.add(nameClass);

// Get the current balance
var currentBalance = parseFloat(localStorage.getItem("balance")) || 0;

// Put transaction information on the HTML
document.getElementById("currentBalance").textContent = currentBalance;

// Put transaction name on the HTML
document.getElementById("nameOp").textContent = "Transaction:" + " " + nameClass;

// Add event listener to the form (call function)
document.getElementById("transactionForm").addEventListener("submit", handleTransaction);
