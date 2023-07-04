function maxNum() {
    let arr = [4, 5, 6, 7, 1, 40];
    let max = 4;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    // console.log("maximum number is " + max);
}
console.log(maxNum());
