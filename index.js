// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const scuberHq = 42;
    const distance = Math.abs (someValue - scuberHq);
    return distance;
  }
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue) ;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const feet = blocks * 264;
    return feet;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distance = Math.abs(destination - start);
    const numberOfFeet = distance * 264;
    return numberOfFeet;
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feet = distanceTravelledInFeet(start, destination);
    const freeDistance = 400;
    let fare = '';
    const flatFare = 25;
    if (feet <= freeDistance){
      fare = 0;
    }else if (feet > 400 && feet < 2000){
      fare = (feet - freeDistance) * 0.02;
    }else if ( feet > 2000 && feet < 2500){
      fare = flatFare;
    }else if (feet > 2500){
      return 'cannot travel that far';
    }
    return fare;
  }

distanceFromHqInBlocks(50);
distanceTravelledInFeet(34, 38);
