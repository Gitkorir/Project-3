document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;

    if (!birthday || !gender) {
      alert("Please enter a valid birthday and select your gender.");
      return;
    }

    let date = new Date(birthday);
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are 0-indexed
    let year = date.getFullYear();

    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
      alert("Please enter a valid date.");
      return;
    }

    let century = Math.floor(year / 100);
    let yearDigits = year % 100;

    let dayIndex = Math.floor(
      (century / 4 -
        (2 * century - 1) +
        (5 * yearDigits) / 4 +
        (26 * (month + 1)) / 10 +
        day) %
        7
    );

    let maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    let femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    let akanName =
      gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

    document.getElementById(
      "result"
    ).innerText = `Your Akan name is ${akanName}`;
  });
