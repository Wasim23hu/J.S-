function handleTask1() {
    let val = parseFloat(document.getElementById("task1-input").value);
    document.getElementById("task1-output").value = !isNaN(val) ? val * 365 : "Invalid";
}

function handleTask2() {
    let val = parseFloat(document.getElementById("task2-input").value);
    document.getElementById("task2-output").value = !isNaN(val) ? val * 3600 : "Invalid";
}

function handleTask3() {
    let val = parseFloat(document.getElementById("task3-input").value);
    if (!isNaN(val)) {
        document.getElementById("task3-output").value = Number.isInteger(val) ? val + 1 : parseFloat((val + 0.1).toFixed(2));
    } else {
        document.getElementById("task3-output").value = "Invalid";
    }
}

function handleTask4() {
    let val = document.getElementById("task4-input").value;
    document.getElementById("task4-output").value = val.trim() !== "" ? val.charAt(0).toUpperCase() + val.slice(1) : "";
}

function handleTask5() {
    let w = parseFloat(document.getElementById("task5-weight").value);
    let h = parseFloat(document.getElementById("task5-height").value);
    if (!isNaN(w) && !isNaN(h) && h > 0) {
        document.getElementById("task5-output").value = (w / (h * h)).toFixed(2);
    } else {
        document.getElementById("task5-output").value = "Invalid";
    }
}

function handleTask6() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById("task6-display").value = arr.join(", ");
    document.getElementById("task6-output").value = "First: " + arr[0] + ", Last: " + arr[arr.length - 1];
}

document.addEventListener("DOMContentLoaded", () => {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const resultBox = document.getElementById("result");

    if (input1 && input2 && resultBox) {
        input1.addEventListener("input", () => {
            let v1 = parseFloat(input1.value);
            let v2 = parseFloat(input2.value);
            if (!isNaN(v1) && isNaN(v2)) {
                resultBox.value = "NaN";
            } else if (!isNaN(v1) && !isNaN(v2)) {
                resultBox.value = v1 + v2;
            } else {
                resultBox.value = "";
            }
        });

        input2.addEventListener("input", () => {
            let v1 = parseFloat(input1.value);
            let v2 = parseFloat(input2.value);
            if (!isNaN(v1) && !isNaN(v2)) {
                resultBox.value = v1 + v2;
            } else {
                resultBox.value = "NaN";
            }
        });
    }
});
