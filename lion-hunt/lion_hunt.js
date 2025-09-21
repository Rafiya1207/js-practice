const savannahMap = "L     Z";
let distance = -1;
let minDistance;

for(let index = 1; index < savannahMap.length; index++) {
    distance += 1;

    if(savannahMap[index] !== " ") {
        
        if (minDistance === undefined) {
            minDistance = distance;
        }
        
        minDistance = distance < minDistance ? distance : minDistance;
        distance = -1;
    }

}

console.log(minDistance);
