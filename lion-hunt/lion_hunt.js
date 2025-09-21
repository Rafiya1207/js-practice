const savannahMap = "Z L";
let distance = -1;

let animal = " ";
let previousAnimal = "";

for(let index = 0; index < savannahMap.length; index++) {

    if(savannahMap[index] !== " "){
        previousAnimal = animal;
        animal = savannahMap[index];
    }

    if(animal === previousAnimal) {
        distance = -1;
    }

    if(animal === " " || previousAnimal === " ") {
        distance = distance + 1;
    }

}

console.log(distance);
