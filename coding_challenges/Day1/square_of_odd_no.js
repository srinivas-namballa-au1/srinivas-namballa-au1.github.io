oddNumbers = function(count) {
    if(count%2 == 1) {
        return count;
    }
}

squareNumbers = function(oddNumbers) {
    square = oddNumbers * oddNumbers;
    return square;
} 

for(count = 1; count < 100; count = count + 1) {
    console.log(squareNumbers(oddNumbers(count)));
}