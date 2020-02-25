class Calendar 
{   
    display_element_id:string;
    currentdate = new Date();
    currentday:number = this.currentdate.getDate();
    currentMonth:number = this.currentdate.getMonth();
    currentYear:number = this.currentdate.getFullYear();
    weekdays = ["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    constructor(id) {
        this.display_element_id = id;
        this.initiate_html();
    }

    initiate_html() {
        var root = document.getElementById(this.display_element_id);

        // Create the calendar container
        var container = document.createElement("DIV");
        var container_widget_classes = ["container", "col-sm- 4", "col-md-7",  "col-lg-4", "mt-5"];
        container_widget_classes.forEach(string => {
            container.classList.add(string);
        });
        root.appendChild(container);

        // create the Card Element
        var card = document.createElement("DIV");
        card.classList.add("card");
        container.appendChild(card);

        //create the card header
        var card_header = document.createElement("H3");
        card_header.classList.add("card-header");
        card_header.id = "mothAndYear";
        card.append(card_header);

        // create the calendar weekdayname table
        var weekday_table = document.createElement("table");
        var weekday_table_classes = ["table", "table-bordered", "table-responsive-sm"];
        weekday_table_classes.forEach(string => {
            weekday_table.classList.add(string);
        });
        card.appendChild(weekday_table);
        var thead = document.createElement("thead");
        weekday_table.appendChild(thead);
        var tr = document.createElement("tr");
        thead.appendChild(tr);
        this.weekdays.forEach(dayname => {
            var th = document.createElement("th");
            th.innerHTML = dayname;
            tr.appendChild(th);
        });

        // create  the calender-body





    }
}