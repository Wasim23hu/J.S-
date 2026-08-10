/* =========================================================
   JS Utility Toolkit
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =========================================================
     OUTPUT HELPER
     ========================================================= */

  function setOutput(el, text, state) {

    const valueEl =
      el.querySelector(".result-value") || el;

    valueEl.textContent = text;

    valueEl.classList.remove(
      "is-empty",
      "is-error",
      "just-updated"
    );

    if (state) {
      valueEl.classList.add(state);
    }

    void valueEl.offsetWidth;

    valueEl.classList.add("just-updated");
  }


  /* =========================================================
     TASK 01 — AGE TO DAYS
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
          "Please enter a valid, non-negative age.",
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
     TASK 02 — HOURS TO SECONDS
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
          "Please enter a valid, non-negative duration.",
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
     TASK 03A — NEXT NUMBER IN ARRAY
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
          .map(v => parseFloat(v.trim()))
          .filter(v => !isNaN(v));

      const target =
        parseFloat(arrayTarget.value);


      if (arr.length === 0) {

        setOutput(
          arrayOutput,
          "Please enter a valid comma-separated array.",
          "is-error"
        );

        return;
      }


      if (isNaN(target)) {

        setOutput(
          arrayOutput,
          "Please enter a number to search for.",
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
          `${target} is the last element — no number follows it.`
        );

      }

      else {

        setOutput(
          arrayOutput,
          `The number next to ${target} is ${result.next}`
        );

      }

    });


  /* =========================================================
     TASK 03B — NEXT NUMBER SINGLE VALUE
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


    const decimals =
      (value.toString().split(".")[1] || "").length;


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
          "Please enter a valid number.",
          "is-error"
        );

        return;
      }


      const result =
        findNextSingle(value);


      setOutput(
        singleOutput,
        `${value} is a ${result.type} → next number is ${result.next}`
      );

    });


  /* =========================================================
     TASK 04 — CAPITALIZE NAME
     ========================================================= */

  const nameInput =
    document.getElementById("nameInput");

  const nameOutput =
    document.getElementById("nameOutput");


  function capitalizeName(name) {

    return name
      .trim()
      .split(/\s+/)
      .map(
        part =>
          part.charAt(0).toUpperCase()
          + part.slice(1)
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
          "Please enter the name in lowercase only.",
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
     TASK 05 — BMI CALCULATOR
     ========================================================= */

  const weightInput =
    document.getElementById("weightInput");

  const heightInput =
    document.getElementById("heightInput");

  const bmiOutput =
    document.getElementById("bmiOutput");


  function calculateBMI(weightKg, heightM) {

    return weightKg /
      (heightM * heightM);

  }


  function bmiCategory(bmi) {

    if (bmi < 18.5)
      return "Underweight";

    if (bmi < 25)
      return "Normal weight";

    if (bmi < 30)
      return "Overweight";

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
          "Please enter a valid weight (kg) and height (m).",
          "is-error"
        );

        return;
      }


      const bmi =
        calculateBMI(weight, height);


      setOutput(
        bmiOutput,
        `BMI = ${bmi.toFixed(2)} → ${bmiCategory(bmi)}`
      );

    });


  /* =========================================================
     TASK 06 — RANDOM ARRAY
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
        `Array: [${arr.join(", ")}]`
      );


      const ends =
        pickFirstAndLast(arr);


      setOutput(
        endsOutput,
        `First element: ${ends.first} | Last element: ${ends.last}`
      );

    }
  );


  /* =========================================================
     TASK 07 — LIVE ADDER
     ========================================================= */

  const box1 =
    document.getElementById("box1");

  const box2 =
    document.getElementById("box2");

  const box3 =
    document.getElementById("box3");


  function updateSum() {

    const a =
      parseFloat(box1.value);

    const b =
      parseFloat(box2.value);


    if (
      isNaN(a) ||
      isNaN(b)
    ) {

      box3.value =
        "Result will appear here";

    }

    else {

      box3.value =
        a + b;

    }


    box3.classList.remove(
      "just-updated"
    );

    void box3.offsetWidth;

    box3.classList.add(
      "just-updated"
    );

  }


  box1.addEventListener(
    "input",
    updateSum
  );

  box2.addEventListener(
    "input",
    updateSum
  );

});
