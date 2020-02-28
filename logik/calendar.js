let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("select-year");
let selectMonth = document.getElementById("select-month");


let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "October", "November", "Dezember"];
//let weekdays = ["Su", "Mo", "Tu","We", "Th", "Fr", "Sa"];
let weekdays = ["So", "Mo", "Di","Mi", "Do", "Fr", "Sa"];
let allcells = [];


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

function createTableHead() {
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
            cell.classList.add("cell");
            let cellText = document.createTextNode(date);

            // datecounter bigger than count of days in moth => break out the loop
            if (date > daysInMonth) { break; }

            // if i equal 0 and the counter j is greater than the number of the firstday in m
            if (i === 0 && j < firstDay) {
                cell.classList.add("cell");
                cell.classList.add("empty");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
                continue;
            }

            // mark cells because of weekend
            if (j === 0 || j === 6) {
                cell.classList.add("notpossible");
            }
            // check if the date less than the currentday 
            if (date < today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                cell.classList.add("notpossible");
            }
            // check if the cells in the past moths
            if (month < today.getMonth()) {
                cell.classList.add("notpossible");
            }
            // check if the cells in the past years
            if (year < today.getFullYear()) {
                cell.classList.add("notpossible");
            }
            // check if the currentdate the today date
            if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                cell.classList.add("currentday"); 
                cell.classList.add("notpossible");
            }
            // check is the current date 1 day after the today date
            if (date === today.getDate() + 1 && year === today.getFullYear() && month === today.getMonth()) {
                cell.classList.add("notpossible");
            }
            // check is the current date 2 days after the today date
            if (date === today.getDate() + 2 && year === today.getFullYear() && month === today.getMonth()) {
                cell.classList.add("notpossible");
            }
            cell.appendChild(cellText);
            allcells.push(cell);
            row.appendChild(cell);
            date++;
        }
        tablebody.appendChild(row); // appending each row into calendar body.
    }

}

function showCalendar (month, year) {
    // calculated the first day in month
    let firstDay = new Date(year, month).getDay(); 
    // calculated the count of days in the month
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let monthAndYear = document.getElementById("monthAndYear");
    monthAndYear.innerHTML = months[month] + " " + year;

    createTableHead();
    createTableBody(firstDay, daysInMonth, month, year);

    
    let choosen_date_span = document.getElementById("choosen_date");

        // Stores the number of clicks 
        let counter = 0;
        let selected_day = "";

        // Triggers the event when a cell is clicked on
        $(".cell").click(function () {
            var choosen_cell = this;

            if(choosen_cell.classList.contains('notpossible') === false) {
                // add the class selected to the cell
                choosen_cell.classList.add('selected')
                // clear the displayed data
                choosen_date_span.innerHTML = "";
                // get the Text in the selected cell
                selected_day = choosen_cell.innerHTML;
                 // Select the input next to the the span with the id='choosen_date'
                var hidden_input = $("#choosen_date").next();
                hidden_input.val(selected_day + "." + currentMonth + "." + currentYear);
                // if the value of the selected cell lower than 10 append  0 to the front
                if (selected_day < 10) { selected_day = "0" + selected_day; }
                // displays the value of the selected cell for customer feedback
                let delivery_date = selected_day + " " + months[currentMonth] + " " + currentYear;
                choosen_date_span.innerHTML = delivery_date;
                // enables the confirm button 
                $(".card-footer button").prop('disabled', false);
                if (counter > 0) {
                    for (let index = 0; index < allcells.length; index++) {
                        if (allcells[index].classList.contains("empty")) { continue; }
                        allcells[index].classList.remove("selected");
                    }
                    counter = 0;
                } else {
                    counter++;
                }
            }
        });

        // date confirm button event 
        $(".card-footer button").click(function () {
           $("#valide-date").val($("#choosen_date").next().val());
           let calendar_alert_success_div = document.getElementById('calendar-alert-success');
           calendar_alert_success_div.style.display = "block";
           calendar_alert_success_div.innerText = "Super Ihre Bestellung kommt pünktlich am " + selected_day + " " + months[currentMonth] + " " + currentYear; 
        }); 

}

