// Test print statement 

//console.log("Hello World");

//  Step one:  Create test arrays 
// insantiate and intialize test arrays

let usCites = ["Savanah", "New York", "New Orleans", "Mephis"];

//console.log(usCites);

let chainRestaurants = ["Applebees", "Red Lobster", "Olive Garden", "Cracker Barrel"];

// console.log(chainRestaurants);

let transportationOptions = ["Plane", "Train", "Car"];

// console.log(transportationOptions);


let entertainmentOptions = ["TV", "Movie", "Books", "Video Games"];

// console.log(transportationOptions);


// Step two: create a random function

function getRandomSelection(maxArray) {
    let arrayIndex = Math.floor(Math.random() * maxArray.length);

    return maxArray[arrayIndex];

}

//  test function with nums

// let result = getRandomNumber(10);

// console.log(result);


// Step three: test random function with test arrays

let selectedRestaurant = getRandomSelection(chainRestaurants);

// console.log(selectedRestaurant);

let selectedCity = getRandomSelection(usCites);

// console.log(selectedCity);

let selectedTransportation = getRandomSelection(transportationOptions);

// console.log(selectedTransportation);

let selectedEntertainment = getRandomSelection(entertainmentOptions);




// Step four function to randomly reselect an item if the user agrees to.



function reselectOption(selectedOption, ArrayOptions) {

    let notSatisfied = true;
    while (notSatisfied) {
        let useroption = prompt(" Are you satisfied with your choice(y/n)?")

        if (useroption === 'y') {
            notSatisfied = !notSatisfied // true now becomes false
            return // or break
        }
        // implied else

        let useroption2 = prompt("Would you like to change your option (y/n))? ")


        if (useroption2 === 'y') {
            let newOption = getRandomSelection(ArrayOptions);
            console.log("You're new Selected option is " + newOption);
            // notSatisfied = false;
            break;
            console.log("after break")


        }
        else {
            console.log(" You're selected option is  " + selectedOption);
            notSatisfied = false;
            break;
        }

    }


}


// test the function 
reselectOption(selectedRestaurant, chainRestaurants);


// Step five: function to confirm is daytrip is complete. 

function completedDayTrip() {


    if () {

    }
}




































