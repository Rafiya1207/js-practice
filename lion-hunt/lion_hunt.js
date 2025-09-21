const savannahMap = "  L Z   L";
let distance = -2;
let minDistance = 100;
let hasSameAnimals = true;
let previousAnimal;
let currentAnimal;

for(let index = 0; index < savannahMap.length; index++) {
    
    if(savannahMap[index] !== " ") {
        currentAnimal = savannahMap[index];
        
        if (currentAnimal !== previousAnimal && previousAnimal) {
            hasSameAnimals = false;
            minDistance = distance < minDistance ? distance : minDistance;
        }
        
        distance = -1;
        previousAnimal = currentAnimal;
    }

    distance += 1;
}

if(hasSameAnimals) {
    minDistance = -1;
}

console.log(minDistance);
