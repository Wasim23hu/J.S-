function ageToDays(ageInYears) {
    return ageInYears * 365;
}

function hoursToSeconds(hours) {
    return hours * 3600;
}

function getNextInArray(arr, currentNum) {
    let index = arr.indexOf(currentNum);
    if (index !== -1 && index < arr.length - 1) {
        return arr[index + 1];
    }
    return "Next number not found in array";
}

function getNextValue(val) {
    if (Number.isInteger(val)) {
        return val + 1;
    } else {
        return parseFloat((val + 0.1).toFixed(2));
    }
}

function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function calculateBMI(weightKg, heightM) {
    let bmi = weightKg / (heightM * heightM);
    return bmi.toFixed(2);
}

function getFirstAndLastElement() {
    let randomArr = [];
    for (let i = 0; i < 5; i++) {
        randomArr.push(Math.floor(Math.random() * 100) + 1);
    }
    return {
        first: randomArr[0],
        last: randomArr[randomArr.length - 1]
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const resultBox = document.getElementById("result");

    if (input1 && input2 && resultBox) {
        input1.addEventListener("input", () => {
            let val1 = parseFloat(input1.value);
            let val2 = parseFloat(input2.value);

            if (!isNaN(val1) && isNaN(val2)) {
                resultBox.value = "NaN";
            } else if (!isNaN(val1) && !isNaN(val2)) {
                resultBox.value = val1 + val2;
            } else {
                resultBox.value = "";
            }
        });

        input2.addEventListener("input", () => {
            let val1 = parseFloat(input1.value);
            let val2 = parseFloat(input2.value);

            if (!isNaN(val1) && !isNaN(val2)) {
                resultBox.value = val1 + val2;
            } else {
                resultBox.value = "NaN";
            }
        });
    }
});

