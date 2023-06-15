function reverseString(str) {
    let newStr = [];
    let j = str.length;
    for (let i = 0; i < str.length; i++) {
        newStr[i] = str[j - 1];
        j--;
    }
    return newStr.join("");
}

let str = "hello";
let funcCall = reverseString(str);
console.log(funcCall);
