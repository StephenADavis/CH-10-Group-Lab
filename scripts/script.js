/*
  Student Name: Stephen Davis & Lanee Matthews
  File Name: script:js
  Date: November 23, 2002
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

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

  //Function to display the first answer
  function ans1() {
    heading.style.display = "block";
    answer.textContent = "You can apply online or by printing out a form and mailing it to the school.";
  }

  //Function to display the second answer
  function ans2() {
    heading.style.display = "block";
    answer.textContent = "Payment is due the day before the start of the semester.";
  }

  //Function to display the third answer
  function ans3() {
    heading.style.display = "block";
    answer.textContent = "Textbooks can be picked up at the school store or shipped to your home.";
  }
