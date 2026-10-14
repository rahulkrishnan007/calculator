// 1. Get the display input
let display = document.getElementById("displayNumber");

// 2. Display numbers and operators
function appendValue(value) {
    display.value += value;
}

// 3. Clear all
function clearBox() {
    display.value = "";
}

// 4. Delete the last character
function removeLastItem() {
    display.value = display.value.slice(0, -1);
}

// 5. Calculate the expression
function evaluateExp() {
    try {
        let expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        // Allow only valid calculator characters
        if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        let answer = eval(expression);

        if (!Number.isFinite(answer)) {
            throw new Error("Invalid calculation");
        }

        display.value = answer;

    } catch (error) {
        display.value = "Error";
    }
}