const savannahMap = "L  ZL Z";
let distance = -1;

let minDistance = 0;

for(let index = 1; index < savannahMap.length; index++) {
    
    distance += 1;

    if(savannahMap[index] !== " ") {
        minDistance = distance < minDistance ? distance : minDistance;
        distance = -1;
    }

}
console.log(minDistance);
