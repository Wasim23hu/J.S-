// Task 1
function runTask1() {
    let val = parseFloat(document.getElementById("t1-input").value);
    let res = document.getElementById("t1-result");
    if (!isNaN(val)) {
        let days = val * 365;
        res.style.color = "#38bdf8";
        res.innerText = `${val} year(s) = ${days} days`;
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please enter a valid number.";
    }
}

// Task 2
function runTask2() {
    let val = parseFloat(document.getElementById("t2-input").value);
    let res = document.getElementById("t2-result");
    if (!isNaN(val)) {
        let secs = val * 3600;
        res.style.color = "#38bdf8";
        res.innerText = `${val} hour(s) = ${secs} seconds`;
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please enter valid hours.";
    }
}

// Task 3 Scenario A
function runTask3A() {
    let arrStr = document.getElementById("t3-arr").value;
    let target = parseFloat(document.getElementById("t3-target").value);
    let res = document.getElementById("t3-result");

    if (arrStr.trim() !== "" && !isNaN(target)) {
        let arr = arrStr.split(",").map(item => parseFloat(item.trim()));
        let index = arr.indexOf(target);
        if (index !== -1 && index < arr.length - 1) {
            res.style.color = "#38bdf8";
            res.innerText = `Next number in array is: ${arr[index + 1]}`;
        } else {
            res.style.color = "#ef4444";
            res.innerText = "Target not found or it is the last element.";
        }
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please fill both array and target fields correctly.";
    }
}

// Task 3 Scenario B
function runTask3B() {
    let val = parseFloat(document.getElementById("t3-single").value);
    let res = document.getElementById("t3-result");

    if (!isNaN(val)) {
        let nextVal = Number.isInteger(val) ? val + 1 : parseFloat((val + 0.1).toFixed(2));
        res.style.color = "#38bdf8";
        res.innerText = `Next number value: ${nextVal}`;
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please enter a valid number.";
    }
}

// Task 4
function runTask4() {
    let name = document.getElementById("t4-input").value;
    let res = document.getElementById("t4-result");

    if (name.trim() !== "") {
        let formatted = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        res.style.color = "#38bdf8";
        res.innerText = `Formatted Name: ${formatted}`;
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please enter a name.";
    }
}

// Task 5
function runTask5() {
    let w = parseFloat(document.getElementById("t5-weight").value);
    let h = parseFloat(document.getElementById("t5-height").value);
    let res = document.getElementById("t5-result");

    if (!isNaN(w) && !isNaN(h) && h > 0) {
        let bmi = (w / (h * h)).toFixed(2);
        res.style.color = "#38bdf8";
        res.innerText = `Calculated BMI Score: ${bmi}`;
    } else {
        res.style.color = "#ef4444";
        res.innerText = "Please enter valid weight and height.";
    }
}

// Task 6
function runTask6() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById("t6-display").value = arr.join(", ");
    let res = document.getElementById("t6-result");
    res.style.color = "#38bdf8";
    res.innerText = `First Element: ${arr[0]} | Last Element: ${arr[arr.length - 1]}`;
}

// Task 7
document.addEventListener("DOMContentLoaded", () => {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const resultBox = document.getElementById("result");

    if (input1 && input2 && resultBox) {
        const calculateAddition = () => {
            let v1 = parseFloat(input1.value);
            let v2 = parseFloat(input2.value);

            if (!isNaN(v1) && isNaN(v2)) {
                resultBox.value = "NaN";
            } else if (!isNaN(v1) && !isNaN(v2)) {
                resultBox.value = v1 + v2;
            } else {
                resultBox.value = "";
            }
        };

        input1.addEventListener("input", calculateAddition);
        input2.addEventListener("input", calculateAddition);
    }
});
