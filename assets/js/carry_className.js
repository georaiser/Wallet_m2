function handleButtonClick(button) {
    var classNames = button.parentNode.classList;
    var secondClass = classNames[1]; // Second class
    localStorage.setItem('class', secondClass);
    if (secondClass == "Load_Money" || secondClass == "Request_Money" || secondClass == "Send_Money" || secondClass == "Pay_Bill") {
        window.location.href = "transactions_options.html";
    }
}