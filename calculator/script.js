document.getElementById("buttons").addEventListener("click", function(event) {
    let buttonText = event.target.innerText;
    let display = document.getElementById("display");

    if (event.target.tagName !== "BUTTON") return; 

    switch (buttonText) {
        case "AC":
            display.innerText = "0";
            break;
        case "R":
            display.innerText = display.innerText.slice(0, -1) || "0";
            break;
        case "=":
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            break;
        default:
            if (display.innerText === "0" && buttonText !== ".") {
                display.innerText = buttonText;
            } else {
                display.innerText += buttonText;
            }
    }
});
