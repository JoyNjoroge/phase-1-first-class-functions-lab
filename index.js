// Code your solution in this file!
function returnFirstTwoDrivers(drivers=['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers());


function returnLastTwoDrivers(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(-2)
}
console.log(returnLastTwoDrivers());
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// create Fare Multiplier
function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));


//selectDifferentDrivers(arrayOfDrivers, function)
selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers)
selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers)
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  