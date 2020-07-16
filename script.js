var monthYear = document.querySelector("#monthyear");
var next = document.querySelector("#next");
var previous = document.querySelector("#previous");

var months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
var numOfDates = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var today = d.getDay();
var todayDate = d.getDate();
var dates = document.querySelector(".dates");
monthYear.innerHTML = months[currentMonth + 1] + " " + currentYear;

showDate(today, currentYear, d);

function createDate(date) {
  let div = document.createElement("button");
  div.className = "date";
  div.textContent = date;
  return div;
}
function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function showDate(today, currentYear, d) {
  if (leapYear(currentYear)) {
    numOfDates[2] = 29;
  }

  for (let i = 2; i < numOfDates[currentMonth + 1] + 1; i++) {
    var child = createDate(i);
    child.id = `${i}`;
    if (
      d.getDate() == i &&
      currentMonth == d.getMonth() &&
      currentYear == d.getFullYear()
    ) {
      child.style.backgroundColor = "#ca3";
      child.style.color = "white";
    }
    dates.appendChild(child);
  }

  document.querySelector("#myDIV").style.gridColumn = today + 1;
}

function newDates(currentYear, currentMonth) {
  var newD = new Date();
  var new_date = new Date(currentYear, currentMonth, 1);
  dates.innerHTML = "";
  var firstChild = createDate(1);
  firstChild.id = "myDIV";
  dates.appendChild(firstChild);
  showDate(new_date.getDay(), currentYear, newD);
}

function nextUpdate() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  monthYear.innerHTML = months[currentMonth + 1] + " " + currentYear;
  newDates(currentYear, currentMonth);
}

function previousUpdate() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  monthYear.innerHTML = months[currentMonth + 1] + " " + currentYear;
  newDates(currentYear, currentMonth);
}

next.addEventListener("click", nextUpdate);
previous.addEventListener("click", previousUpdate);

document.addEventListener("click", function (e) {
  if (e.target.className == "date") {
    var alertDate = new Date();
    alert(alertDate);
  }
});
