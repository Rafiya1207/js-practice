const noOfVadaPavs = 57;
const noOfInterns = 57;
const vadaPavsLeft = 5;
const internsLeftToEat = 10;

const vadaPavsEaten = noOfVadaPavs - vadaPavsLeft;
const noOfInternsEaten = noOfInterns - internsLeftToEat;


if (vadaPavsLeft >= internsLeftToEat) {
    console.log("you can go to cafeteria");
} else {
    console.log("you will hardly get vadapav");
}

const canYouSuggestToGo = (vadaPavsEaten >= noOfInternsEaten) ? "yes" : "no";
console.log(canYouSuggestToGo);
