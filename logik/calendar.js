let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("select-year");
let selectMonth = document.getElementById("select-month");


let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let startyear = currentYear;
let endyear = currentYear + 5;

let monthAndYear = document.getElementById("monthAndYear");


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

function showCalendar (month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                cell.classList.add("cell");
                cell.classList.add("empty");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                cell.classList.add("cell");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("currentday");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }


    // fill the year selectbox
    for (var i = startyear; i <= endyear; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        selectYear.appendChild(option);
    }

    // fill the mothh selectbox
    for (var i = 0; i <= months.length; i++) {
        let option = document.createElement("option");
        option.value = months[i];
        option.innerHTML = months[i];
        selectMonth.appendChild(option);
    }

}
