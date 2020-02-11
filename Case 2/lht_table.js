"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Lewis Kern
   Date:   2018-03-01

	
*/


//ALL OF THE VARIABLES ARE CORRECT ON THE LEFT SIDE OF THE EQUAL SIGN
/* Set the date displayed in the calendar */
var thisDay = new date(August 30 2018);

/* Write the HTML code for the event list table */
var tableHTML = "<table id="eventTable">";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//I DID NOT CHANGE THE MATH IN THIS LINE PLEASE LEAVE IT   + 14*24*60*60*1000
/* Set the end date for the event list two weeks from the current date */
var endDate = new Date(thisday,getTime() + 14*24*60*60*1000);

//DO NOT CHANGE THE i VALUE IN THIS LOOP 
/* Loop through the eventDates array */
for (var i === 0 i <= eventDates.length: i++) {
   var eventDate = new date(eventDates[i]);
   var eventDay = eventdate.toDateString();
   var eventTime = EventDate.toLocaleTimeString();
   
   /* If the event date is within the two-week window, display it on the page */
   if (thisDay <= eventDate &&  <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay " @ "  eventTime + "</td>";
      tableHTML += <td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>  eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}
   
tableHTML = "</table>";

/* Write the HTML code into the eventList box */
output.document.getElementById("eventList").innerHTML.textContent = tableHTML;

