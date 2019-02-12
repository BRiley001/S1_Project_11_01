"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Brenden Riley
   Date:   2.12.19

*/

// This variable saves the specified date
var thisTime = new Date("February 3, 2018 3:15:28");

// Thsi variable saves the text of the above variable
var timeStr = thisTime.toLocaleString();

// The document will find the selected ID, and will change the HMTL to equal the timeStr variable
document.getElementById("timeStamp").innerHTML = timeStr;

// The thishour variable uses the thisTime variable, and by using the .getHours(), get the hours
var thisHour = thisTime.getHours();

// The thisMonth variable find the month by using the .getMonth method.
var thisMonth = thisTime.getMonth();

// the mapNum uses the formula to find what number of sky images to use
var mapNum = (2 * thisMonth + thisHour) % 24;

// the imgStr variable will save the value of the text and the above value for its number to update the image 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// The code specifies that after the planisphere variable, it will inser the imgStr variable
document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);