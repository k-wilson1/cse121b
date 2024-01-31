/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Katrina Wilson",
    photo: {src: "images/imagesofme.jpg",
    alt:"Katrina Wilson"},
    favoriteFoods: [
        "Pizza",
        "Tacos",
        "Nachos",
        "Popcorn",
        "Angel Food Cake"
    ],
    hobbies: [
        "Coaching Basketball",
        "Reffing Basketball",
        "Paint by Number",
        "Cheering on my kids"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Idaho",
        length: "24 Years"
    },
    {
        place: "Montana",
        length: "10 Years"
    },
    {
        place: "Texas",
        length: "3 Years"
    });

/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src= myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    
    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let placesLivedList = document.querySelector("#places-lived");
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
