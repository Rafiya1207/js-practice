const savannahMap = "L L";
let distance;

if(savannahMap[0] !== " " && savannahMap[0] === "L") {
    
    if(savannahMap[1] !== " " && savannahMap[1] !== "L") {
        distance = 0;

        if(savannahMap[2] !== " " && savannahMap[2] !== "L") {
            distance = 0;
        } else {
            distance = 0;
        }
        
    } else {
        distance = -1;
        
        if(savannahMap[2] !== " " && savannahMap[2] !== "L") {
            distance = 1;
        } else {
            distance = -1;
        }
    }
    
} else {
    
    if(savannahMap[1] !== " ") {
        distance = -1;

        if(savannahMap[2] !== " ") {
            distance = 0;
        } else {
            distance = -1;
        }

    } else {
        distance = -1;

    }

}

console.log(distance);
