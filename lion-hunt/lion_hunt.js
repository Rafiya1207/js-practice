const savannahMap = "Z  L";
let distance;

if(savannahMap[0] !== " ") {

    if(savannahMap[1] !== " ") {
        distance = 0;

        if(savannahMap[2] !== " ") {
            distance = 1;
        } else {
            distance = 0;
        }
        
    } else {
        distance = -1;
        
        if(savannahMap[2] !== " ") {
            distance = 1;
        } else {
            distance = -1;
        }
    }
    
} else {
    distance = -1;
}

console.log(distance);
