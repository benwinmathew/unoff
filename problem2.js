
// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false

// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false


function isPositiveDominant(arr) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < (arr.length - 1); i++) {

        if (arr[i] >= 0) {
            if (i >= 0 && arr[i - 1] != arr[i]
                && arr[i + 1] != arr[i]) {
                count1 += 1;
            }
        }

        if (arr[i] < 0) {
            if (i >= 0 && arr[i - 1] != arr[i]
                && arr[i + 1] != arr[i]) {
                count2 += 1;
            }
        }


    }
    return count1 > count2 ? true : false;
}

console.log(isPositiveDominant([5, 99, 832, -3, -4]));          //true
console.log(isPositiveDominant([5, 0]));                        //true
console.log(isPositiveDominant([0, -4, -1]));                   //false
console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));          //false
console.log(isPositiveDominant([1, 1, 2, 2, -3, -4]));          //false
console.log(isPositiveDominant([1, 2, 3, -3, -3, -3, -3]));     //true


