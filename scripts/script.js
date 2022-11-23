/*
  Student Name: Stephen Davis & Lanee Matthews
  File Name: script:js
  Date: November 23, 2002
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("collegelogo");
    if (menu.style.display === "block" && logo.style.display === "none") {
      menu.style.display = "none";
      logo.style.display = "block";
    } else {
      menu.style.display = "block";
      logo.style.display = "none";
    }
  }
