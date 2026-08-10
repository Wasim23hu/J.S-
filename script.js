document.addEventListener("DOMContentLoaded", () => {


  /* =========================================================
     OUTPUT HELPER
     ========================================================= */

  function setOutput(element, text, state) {

    const valueElement =
      element.querySelector(".result-value") || element;

    valueElement.textContent = text;

    valueElement.classList.remove(
      "is-empty",
      "is-error",
      "just-updated"
    );

    if (state) {
      valueElement.classList.add(state);
    }

    void valueElement.offsetWidth;

    valueElement.classList.add("just-updated");
  }


  /* =========================================================
     TASK 1
     AGE TO DAYS
     ========================================================= */

  const ageInput =
    document.getElementById("ageInput");

  const ageOutput =
    document.getElementById("ageOutput");

  function ageToDays(years) {
    return years * 365;
  }

  document
    .getElementById("ageBtn")
    .addEventListener("click", () => {

      const years =
        parseFloat(ageInput.value);

      if (isNaN(years) || years < 0) {

        setOutput(
          ageOutput,
          "Please enter a valid age.",
          "is-error"
        );

        return;
      }

      const days =
        ageToDays(years);

      setOutput(
        ageOutput,
        `${years} year(s) = ${days} days`
      );

    });


  /* =========================================================
     TASK 2
     HOURS TO SECONDS
     ========================================================= */

  const hoursInput =
    document.getElementById("hoursInput");

  const hoursOutput =
    document.getElementById("hoursOutput");

  function hoursToSeconds(hours) {
    return hours * 3600;
  }

  document
    .getElementById("hoursBtn")
    .addEventListener("click", () => {

      const hours =
        parseFloat(hoursInput.value);

      if (isNaN(hours) || hours < 0) {

        setOutput(
          hoursOutput,
          "Please enter a valid duration.",
          "is-error"
        );

        return;
      }

      const seconds =
        hoursToSeconds(hours);

      setOutput(
        hoursOutput,
        `${hours} hour(s) = ${seconds} seconds`
      );

    });


  /* =========================================================
     TASK 3 A
     NEXT NUMBER IN ARRAY
     ========================================================= */

  const arrayInput =
    document.getElementById("arrayInput");

  const arrayTarget =
    document.getElementById("arrayTarget");

  const arrayOutput =
    document.getElementById("arrayOutput");


  function findNextInArray(arr, target) {

    const index =
      arr.indexOf(target);

    if (index === -1) {
      return {
        found:false
      };
    }

    if (index === arr.length - 1) {
      return {
        found:true,
        hasNext:false
      };
    }

    return {
      found:true,
      hasNext:true,
      next:arr[index + 1]
    };
  }


  document
    .getElementById("arrayBtn")
    .addEventListener("click", () => {

      const arr =
        arrayInput.value
          .split(",")
          .map(value =>
            parseFloat(value.trim())
          )
          .filter(value =>
            !isNaN(value)
          );

      const target =
        parseFloat(arrayTarget.value);


      if (arr.length === 0) {

        setOutput(
          arrayOutput,
          "Please enter array numbers.",
          "is-error"
        );

        return;
      }


      if (isNaN(target)) {

        setOutput(
          arrayOutput,
          "Please enter a target number.",
          "is-error"
        );

        return;
      }


      const result =
        findNextInArray(arr, target);


      if (!result.found) {

        setOutput(
          arrayOutput,
          `${target} was not found in [${arr.join(", ")}]`,
          "is-error"
        );

      }

      else if (!result.hasNext) {

        setOutput(
          arrayOutput,
          `${target} is the last element`
        );

      }

      else {

        setOutput(
          arrayOutput,
          `The next number after ${target} is ${result.next}`
        );

      }

    });


  /* =========================================================
     TASK 3 B
     NEXT NUMBER SINGLE VALUE
     ========================================================= */

  const singleInput =
    document.getElementById("singleInput");

  const singleOutput =
    document.getElementById("singleOutput");


  function findNextSingle(value) {

    const isInteger =
      Number.isInteger(value);

    if (isInteger) {

      return {
        next:value + 1,
        type:"integer"
      };

    }


    const decimalPart =
      value.toString().split(".")[1] || "";

    const decimals =
      decimalPart.length;

    const step =
      1 / Math.pow(10, decimals);

    const next =
      parseFloat(
        (value + step).toFixed(decimals)
      );

    return {
      next:next,
      type:"float"
    };
  }


  document
    .getElementById("singleBtn")
    .addEventListener("click", () => {

      const value =
        parseFloat(singleInput.value);

      if (isNaN(value)) {

        setOutput(
          singleOutput,
          "Please enter any number.",
          "is-error"
        );

        return;
      }


      const result =
        findNextSingle(value);


      setOutput(
        singleOutput,
        `${value} is a ${result.type}. Next number is ${result.next}`
      );

    });


  /* =========================================================
     TASK 4
     CAPITALIZE NAME
     ========================================================= */

  const nameInput =
    document.getElementById("nameInput");

  const nameOutput =
    document.getElementById("nameOutput");


  function capitalizeName(name) {

    return name
      .trim()
      .split(/\s+/)
      .map(part =>
        part.charAt(0).toUpperCase() +
        part.slice(1)
      )
      .join(" ");
  }


  document
    .getElementById("nameBtn")
    .addEventListener("click", () => {

      const raw =
        nameInput.value.trim();


      if (raw === "") {

        setOutput(
          nameOutput,
          "Please enter a name.",
          "is-error"
        );

        return;
      }


      if (raw !== raw.toLowerCase()) {

        setOutput(
          nameOutput,
          "Please enter the name in lowercase.",
          "is-error"
        );

        return;
      }


      setOutput(
        nameOutput,
        capitalizeName(raw)
      );

    });


  /* =========================================================
     TASK 5
     BMI CALCULATOR
     ========================================================= */

  const weightInput =
    document.getElementById("weightInput");

  const heightInput =
    document.getElementById("heightInput");

  const bmiOutput =
    document.getElementById("bmiOutput");


  function calculateBMI(weight, height) {

    return weight /
      (height * height);
  }


  function bmiCategory(bmi) {

    if (bmi < 18.5) {
      return "Underweight";
    }

    if (bmi < 25) {
      return "Normal weight";
    }

    if (bmi < 30) {
      return "Overweight";
    }

    return "Obese";
  }


  document
    .getElementById("bmiBtn")
    .addEventListener("click", () => {

      const weight =
        parseFloat(weightInput.value);

      const height =
        parseFloat(heightInput.value);


      if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
      ) {

        setOutput(
          bmiOutput,
          "Please enter valid weight and height.",
          "is-error"
        );

        return;
      }


      const bmi =
        calculateBMI(weight, height);


      setOutput(
        bmiOutput,
        `BMI = ${bmi.toFixed(2)}. ${bmiCategory(bmi)}`
      );

    });


  /* =========================================================
     TASK 6
     RANDOM ARRAY
     ========================================================= */

  const genArrayBtn =
    document.getElementById("genArrayBtn");

  const genArrayOutput =
    document.getElementById("genArrayOutput");

  const endsOutput =
    document.getElementById("endsOutput");


  function generateRandomArray(
    length = 8,
    max = 100
  ) {

    return Array.from(
      { length },
      () =>
        Math.floor(
          Math.random() * max
        )
    );
  }


  function pickFirstAndLast(arr) {

    return {
      first:arr[0],
      last:arr[arr.length - 1]
    };
  }


  genArrayBtn.addEventListener(
    "click",
    () => {

      const arr =
        generateRandomArray();


      setOutput(
        genArrayOutput,
        `[${arr.join(", ")}]`
      );


      const ends =
        pickFirstAndLast(arr);


      setOutput(
        endsOutput,
        `First: ${ends.first}  Last: ${ends.last}`
      );

    }
  );


  /* =========================================================
     TASK 7
     LIVE ADDER
     ========================================================= */

  const box1 =
    document.getElementById("box1");

  const box2 =
    document.getElementById("box2");

  const box3 =
    document.getElementById("box3");


  function updateSum() {

    const firstValue =
      box1.value.trim();

    const secondValue =
      box2.value.trim();


    /*
      Agar dono boxes mein number nahi hain
      to Box 3 mein NaN rahega.
    */

    if (
      firstValue === "" ||
      secondValue === ""
    ) {

      box3.value = "NaN";

      return;
    }


    const firstNumber =
      parseFloat(firstValue);

    const secondNumber =
      parseFloat(secondValue);


    if (
      isNaN(firstNumber) ||
      isNaN(secondNumber)
    ) {

      box3.value = "NaN";

      return;
    }


    box3.value =
      firstNumber + secondNumber;
  }


  box1.addEventListener(
    "input",
    updateSum
  );

  box2.addEventListener(
    "input",
    updateSum
  );


  /*
    Page load hote hi Box 3 mein NaN show hoga.
  */

  updateSum();

});
