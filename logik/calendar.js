let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("select-year");
let selectMonth = document.getElementById("select-month");
let monthAndYear = document.getElementById("monthAndYear");

let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "October", "November", "Dezember"];
//let weekdays = ["Su", "Mo", "Tu","We", "Th", "Fr", "Sa"];
let weekdays = ["So", "Mo", "Di","Mi", "Do", "Fr", "Sa"];
let allcells = [];

let startyear = currentYear;
let endyear = currentYear + 5;

 /* Bug detected
    // filing data about month and in the page via DOM.
    selectMonth.value = month;

    // fill the year selectbox
    for (var i = startyear; i <= endyear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectYear.appendChild(option);
    }

    // fill the mothh selectbox
    for (var i = 0; i <= months.length - 1; i++) {
    let option = document.createElement("option");
    option.value = months[i];
    option.innerHTML = months[i];
    selectMonth.appendChild(option);
*/

showCalendar(currentMonth, currentYear);

function next () {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous () {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump () {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function createTablehead() {
    // create tablehead
    let tablehead = document.getElementById("calendar-head"); // head of the calender
    tablehead.innerHTML = "";
    let tr = document.createElement("tr");
    tablehead.appendChild(tr);
    for(var i=0; i <= weekdays.length-1; i++) {
        let th = document.createElement("th");
        th.value = weekdays[i];
        th.innerHTML = weekdays[i];
        tr.appendChild(th);
    }
}

function createTableBody(firstDay, daysInMonth, month,year) {
    // create tablebody
    let tablebody = document.getElementById("calendar-body"); // body of the calendar
    // clearing all previous cells
    tablebody.innerHTML = "";
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");
        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
    
            // datecounter bigger than count of days in moth => break out the loop
            if (date > daysInMonth) { break; }

            // if the counter i gleich 0 and the counter j is greater than the number of the firstday in m
            if (i === 0 && j < firstDay) {
                cell.classList.add("cell");
                cell.classList.add("empty");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
                continue;
            }
            cell.classList.add("cell");
            let cellText = document.createTextNode(date);

            if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                cell.classList.add("currentday"); // color today's date
            } 

            cell.appendChild(cellText);
            allcells.push(cell);
            row.appendChild(cell);
            date++;
        }
        tablebody.appendChild(row); // appending each row into calendar body.
    }
    console.log(allcells);
    console.log(allcells.length);
}

function showCalendar (month, year) {
    console.log("year => " + year);
    console.log("month => " + month);
    console.log("new Date(year, month) => " + new Date(year, month));
    let firstDay = new Date(year, month).getDay();
    console.log("firstDay => " + firstDay);
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    console.log("daysInMonth => " + daysInMonth);
    createTablehead();
    createTableBody(firstDay, daysInMonth, month, year);
    monthAndYear.innerHTML = months[month] + " " + year;

}

// event calls
$(document).ready(function () {
    let choosen_date_span = document.getElementById("choosen_date");
    let choosen_cell = "";
    let counter = 0;
    $(".cell").click(function () {
        choosen_date_span.innerHTML = ""; // clear the displayed data
        choosen_date = this.innerHTML;
        if (choosen_date < 10) { choosen_date = "0" + choosen_date;}
            
        choosen_date_span.innerHTML = choosen_date + " " + months[currentMonth] + " " + currentYear;

        choosen_cell = this;
        choosen_cell.classList.add("selected")
        if (counter > 0) {
            currentMonth = currentMonth;
            for (let index = 0; index < allcells.length; index++) {
                if (allcells[index].classList.contains("empty")) { continue; }
                allcells[index].classList.remove("selected");
            }
            counter = 0;
        } else {
            counter++;
        }
        console.log(counter);
    })
});

/*
last_choosen_cell = this;
console.log(last_choosen_cell);
last_choosen_cell.classList.toogle("selected");
this.classList.add("selected");
let choosen_date = this.innerHTML;
choosen_date_span.innerHTML = choosen_date + "." + currentMonth + "." + currentYear;
*/

