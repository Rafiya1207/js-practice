const savannahMap = "L  L";
let distance;

let animal = (savannahMap[0] === "L") ? "L" : "Z";
let previousAnimal;

if(savannahMap[0] !== " ") {
    
    if(savannahMap[1] !== " ") {
        previousAnimal = animal;
        animal = savannahMap[1];
        distance = 0;

        if(savannahMap[2] !== " " && animal === previousAnimal) {
            distance = 0;
        } else {
            distance = 0;
        }
        
    } else {
        distance = -1;
        
        if(savannahMap[2] !== " ") {
            previousAnimal = animal;
            animal = savannahMap[2];
            
            if(animal === previousAnimal) {
                
                if(savannahMap[3] !== " ") {
                    previousAnimal = animal;
                    animal = savannahMap[3];
                
                    if(animal === previousAnimal) {
                        distance = -1;
                    } else {
                        distance = 0;
                    }
                } else {
                    distance = -1;
                }
            } else {

                if(savannahMap[3] !== " ") {
                    previousAnimal = animal;
                    animal = savannahMap[3];
                
                    if(animal === previousAnimal) {
                        distance = 1;
                    } else {
                        distance = 0;
                    }
                } else {
                    distance = 1;
                }
            }
        } else {
            if(savannahMap[3] !== " ") {
                previousAnimal = animal;
                animal = savannahMap[3];
                
                if(animal === previousAnimal) {
                    distance = -1;
                } else {
                    distance = 2;
                }
                
            } else {
                distance = -1;
            }
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
