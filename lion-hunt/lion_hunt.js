const savannahMap = "L   Z L  Z";
let distance = -1;
let minDistance;

let animal = savannahMap[0];

for(let index = 1; index < savannahMap.length; index++) {
    distance += 1;
    
    if(savannahMap[index] !== " ") {
        
        if(savannahMap[index] === animal) {
            minDistance = -1;
        }
        
        if (minDistance === undefined) {
            minDistance = distance;
        }
        
        minDistance = distance < minDistance ? distance : minDistance;
        distance = -1;
        animal = savannahMap[index];
    }

}

console.log(minDistance);
