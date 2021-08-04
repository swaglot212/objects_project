let divContent = document.querySelector("#content");
let firstPerson = document.querySelector("#first");

let info = {
    a: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    b: {
        firstName: "Andy",
        lastName: "Perez",
        heightFeet:"5",
        heighInches: "8",
        favoriteFood: "pizza",
        favoriteColor: "purple",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    c: {
        firstName: "Adrian",
        lastName: "Smith",
        heightFeet: "5",
        heighInches: "4",
        favoriteFood: "Spaghetti",
        favoriteColor: "red",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    d: {
        firstName: "Tom",
        lastName: "Crafield",
        heightFeet: "6",
        heighInches: "1",
        favoriteFood: "cheese burger",
        favoriteColor: "yellow",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}
firstPerson.onclick = function() {

    let newImage = document.createElement("p");
    html.appendChild(newImage);
}
console.log(info);