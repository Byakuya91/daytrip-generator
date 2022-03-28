// Test print statement 

//console.log("Hello World");

//  Step one:  Create test arrays 


let usCites = ["Savanah", "New York", "New Orleans", "Mephis"];

//console.log(usCites);

let chainRestaurants = ["Applebees", "Red Lobster", "Olive Garden", "Cracker Barrel"];

// console.log(chainRestaurants);

let transportationOptions = ["Plane", "Train", "Car"];

// console.log(transportationOptions);


let entertainmentOptions = ["TV", "Movie", "Books", "Video Games"];

// console.log(transportationOptions);


// // Step two: create a random function

function getRandomSelection(nameArray) {
    let arrayIndex = Math.floor(Math.random() * nameArray.length);

    return nameArray[arrayIndex];

}

//  test function with nums

//let result = getRandomSelection(10);






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
        console.log("Your choice is " + selectedOption)
        let useroption = prompt(" Are you satisfied with your choice(y/n)?")

        if (useroption === 'y') {
            notSatisfied = !notSatisfied // true now becomes false
            return // or break
        }
        // implied else

        let useroption2 = prompt("Would you like to change your option (y/n))? ")


        if (useroption2 === 'y') {
            let newOption = getRandomSelection(ArrayOptions);
            console.log("You're new selected option is " + newOption);
            // notSatisfied = false;
            break;
            // console.log("after break")


        }   // displaying new option and ending the loop
        else {
            console.log(" You're intial  option is still  " + selectedOption);
            notSatisfied = false;
            //break;
        }

    }


}


// // test the reselectOption function
reselectOption(selectedRestaurant, chainRestaurants);

reselectOption(selectedEntertainment, entertainmentOptions);

reselectOption(selectedTransportation, transportationOptions);

reselectOption(selectedCity, usCites);



















































