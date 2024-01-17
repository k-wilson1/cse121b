/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Katrina Wilson";
const currentYear = new Date().getFullYear(); // Could have wrote "2024"
const profilePicture = "images/imagesofme.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year"); 
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", "images/imagesofme.jpg");
imageElement.setAttribute("alt", `This is ${fullName}. He is a student at BYU-Idaho.`)

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Tacos", "Pasta", "Hamburgers", "Gummy Bears"];
foodElement.innerHTML = favoriteFoods;
document.getElementById("food").innerHtml = favoriteFoods;
let newFood = "Cheesecake";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.splice(3,1);
foodElement.innerHTML += `<br>${favoriteFoods}`;



