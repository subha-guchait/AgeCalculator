const calBtn = document.getElementById("calculate");
const birthday = document.getElementById("birth");
const text = document.getElementById("result");

calBtn.addEventListener("click", calculate);

function calculate() {
  // collect the input value
  let inputData, inputArray, year, month, day;

  // store collect the input value
  inputData = birthday.value;

  //check the input value is black or not
  if (inputData !== "") {
    //split the input value and store into array
    inputArray = inputData.split("-");
    //deconstruct the value into variable
    [year, month, day] = inputArray;
    year = Number(year);
    month = Number(month);
    day = Number(day);

    // get the current date from the date constructor
    let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

    // new date for current date
    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1; // get month star with 0 // for that 1 added
    currentDate = current.getDate();

    // check birthday or not
    if (day === currentDate && month === currentMonth) {
      let birthday = currentYear - year;
      text.innerHTML = `Yay! Its your Birthday &#127874 you are <span class="age">${birthday}</span> years old.`;
    } else {
      //  calculate the day
      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      }
      // calcuclate the month
      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }
      year = currentYear - year;

      text.innerHTML = `Your Age : <span class="age">${year}</span> Year <span class="age">${month}</span> Month <span class="age">${day}</span> Days.`;
    }
  } else {
    alert("Please Input your Birthday");
  }
}
