const savannahMap = " L ZZ L Z  LL  ";
let distance = -2;
let minDistance = 100;
let hasSameAnimals = true;
let prevAnimal;
let currentAnimal;

for(let index = 0; index < savannahMap.length; index++) {
    distance += 1;
    
    if(savannahMap[index] !== " ") {
        currentAnimal = savannahMap[index];
        
        if (currentAnimal !== prevAnimal && prevAnimal) {
            hasSameAnimals = false;
            minDistance = distance < minDistance ? distance : minDistance;
        }

        distance = -1;
        prevAnimal = currentAnimal;
    }
}

if(hasSameAnimals) {
    minDistance = -1;
}

console.log(minDistance);
