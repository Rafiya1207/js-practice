let a = 10;

console.log(a); 
a--;

if(true) {
    let a = 9;

    a++;
    console.log(a);
    --a;

    if(true) {
        a = 10;
        console.log(a);
        a--;
    }

    if(true) {
        a--;
        console.log(a);
        a++; 
        console.log(a);
    }
}

console.log(a); 
