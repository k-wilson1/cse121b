function fullName(first, last){
    return `${first} ${last}`;
}

const fullName = function (first, last){
    return `${first} ${last}`;
}

// arrow function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// calls the fullName function declaration and writes the results to an existing HTML
document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

//array.filter
let namesB = names.filter(name => name.charAt(0) === "B");

//array.map
let namesLengths = names.map((name) => name.length);

//names.reduce
names.reduce((total, name) => total + name.length, 0) / names.length;