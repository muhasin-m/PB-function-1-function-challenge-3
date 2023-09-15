const isInRange = (number , min ,max) => {
    if(number >= min && number <= max){
        return true;
    }else{
        return false;
    }
}

console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true


//__________________________________________________________________________________
console.log("");


const endsWithIng = (string) => {
    if(string.slice(-3).toLowerCase()==="ing"){
        console.log(true);
    }else{
        console.log(false);
    }
}

endsWithIng("hello"); // false
endsWithIng("going"); // true
endsWithIng("ALAN TURING"); // true
endsWithIng("ding ding"); // true
endsWithIng("making of"); // false

//__________________________________________________________________________________
console.log("");


const startsWithThe = (string) => {
    if(string.slice(0,3).toLowerCase()==="the"){
        console.log(true);
    }else{
        console.log(false);
    }
}

startsWithThe("hello"); // false
startsWithThe("theremin"); // true
startsWithThe("The Clash"); // true
startsWithThe("ding ding"); // false 
startsWithThe("making of"); // false


//__________________________________________________________________________________
console.log("");


const isFirstLetterLowerCase = (string) => {
    if(string[0] === string.slice(0,1).toLowerCase()){
        console.log(true);
    }else{
        console.log(false);
    }
}

isFirstLetterLowerCase("hello"); // true
isFirstLetterLowerCase("Hello"); // false
isFirstLetterLowerCase("Bianca"); // false
isFirstLetterLowerCase("jim"); // true
isFirstLetterLowerCase(""); // false
isFirstLetterLowerCase("A"); // false 


//__________________________________________________________________________________
console.log("");


const cheaperThan = (array,price) => {
    let arr = [];
    let j = 0;
    for(let i = 0;i<=array.length;i++){
        if(array[i]<price){
            arr[j]=array[i];
            j++;
        }
    }
    console.log(arr);
}

cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20); // [19.99, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90); // [19.99, 29.87, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0); // []
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5); // [2.9]


//__________________________________________________________________________________
console.log("");


const wordsThatEndWithIng = (array) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
        if(array[i].endsWith("ing")){
            arr.push(array[i]);
        }
    }
    console.log(arr);
}

wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"]


//__________________________________________________________________________________
console.log("");


const numbersDivisibleBy3 = (array) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
        if(array[i]%3===0){
            arr.push(array[i]);
        }
    }
    console.log(arr);
}

numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]
numbersDivisibleBy3([2, 4, 8]); // []
numbersDivisibleBy3([9]); // [9]

//__________________________________________________________________________________
console.log("");


const onlyLongWords = (string) => {
    let arr = [];
    array=string.split(" ");
    for(let i = 0;i<array.length;i++){
        if(array[i].length > 4){
            arr.push(array[i]);
        }
    }
    console.log(arr.join(" "));
}

onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
onlyLongWords("The cat is on the table"); // "table"
onlyLongWords("not many long ones here"); // ""

//__________________________________________________________________________________
console.log("");


const addLeadingZero = (array) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
        if(array[i] > 9){
            arr.push(array[i].toString());
        }else{
            arr.push("0"+array[i].toString());
        }
    }
    console.log(arr);
}

addLeadingZero([0, 1, 2, 3, 10, 11, 12]); ["00", "01", "02", "03", "10", "11", "12"]
addLeadingZero([1, 100]); ["01", "100"]
addLeadingZero([1, 2, 3]); ["01", "02", "03"]

//__________________________________________________________________________________
console.log("");

const cutStrings = (array,n) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
        if(array[i].length > n){
            arr.push(array[i].slice(0,n)+"...");
        }else{
            arr.push(array[i]);
        }
    }
    console.log(arr);
}

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10); //["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2); //["He...", "To...", "Ca...", "Th..."]

//__________________________________________________________________________________
console.log("");

const durationInHours = (array) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
            result = (array[i]/60);
            arr.push(~~result);
    }
    console.log(arr);
}

durationInHours([120, 60, 80, 90, 100]); // [2, 1, 1, 1, 1]
durationInHours([50, 20, 180]); // [0, 0, 3]

//__________________________________________________________________________________
console.log("");

const reverseWords = (array) => {
    let arr = [];
    for(let i = 0;i<array.length;i++){
            arr.push(array[i].split("").reverse().join(""));
    }
    console.log(arr);
}

reverseWords(["cat", "shoe", "one", "sos", "hello"]); // ["tac", "eohs", "eno", "sos", "olleh"]

//__________________________________________________________________________________
console.log("");


const countConsonants = (string) => {
    let arr = ["a","e","i","o","u","A","E","I","O","U"," "];
    let x=0;
    for(let j = 0;j<=string.length;j++){

        for(let i = 0;i < arr.length;i++){
            if(string[j]===arr[i]){
                x++;
            }
        }
    }

    console.log(string.length-x);

}

countConsonants("hello"); // 3
countConsonants("aeiou"); // 0
countConsonants("be right back"); // 8
countConsonants("JavaScript"); // 7

//__________________________________________________________________________________
console.log("");

const sumEvenNumbers = (array) => {
    let sum = 0;
    for(let i = 0;i<array.length;i++){
            if(array[i]%2===0){
                sum += array[i];
            }
    }
    console.log(sum);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]); 12
sumEvenNumbers([100]); 100
sumEvenNumbers([100, 1, 3]); 100
sumEvenNumbers([-2, 4, 3]); 2 

//__________________________________________________________________________________
console.log("");

const countByColor = (array) => {
    let arr = [];
    let red = 0;
    let yellow = 0;
    let green = 0;
    for(let i = 0;i<array.length;i++){
            if(array[i].includes("Red")){
                red++;
            }
            if(array[i].includes("Yellow")){
                yellow++;
            }
            if(array[i].includes("Green")){
                green++;
            }
    }
    arr.push(red);
    arr.push(yellow);
    arr.push(green);
    console.log(arr);
}

countByColor(["Red pen", "Yellow shirt"]); // [1, 1, 0]
countByColor(["Red pen", "Yellow shirt", "Green salad"]); // [1, 1, 1]
countByColor(["Pink hair", "Blue sky"]); // [0, 0, 0]
countByColor(["Yellow table", "Yellow piano", "Green guitar"]); // [0, 2, 1]

//__________________________________________________________________________________
console.log("");


const sumEvenOdd = (array) => {
    let arr = [];
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0;i<array.length;i++){
            if(array[i]%2===0){
                sumEven += array[i];
            }else{
                sumOdd += array[i];
            }
    }
    arr.push(sumEven);
    arr.push(sumOdd);
    console.log(arr);
}


sumEvenOdd([1, 2, 3, 4, 5, 6]);  // [12, 9]
sumEvenOdd([0, -2, 11]);  // [-2, 11]
sumEvenOdd([1, 3, 15]);  // [0, 19]

