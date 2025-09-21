const savannahMap = "Z LL";
let distance = -1;
let minDistance = 100;
let prevAnimal = savannahMap[0];

for(let index = 1; index < savannahMap.length; index++) {
    distance += 1;
    
    if(savannahMap[index] !== " " && savannahMap[index] !== prevAnimal) {
        minDistance = distance < minDistance ? distance : minDistance;
        distance = -1;
        prevAnimal = savannahMap[index];
    }

    if(savannahMap[index] === prevAnimal) {
        distance = -1;
    }

}

console.log(minDistance);
