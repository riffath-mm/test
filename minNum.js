function minNum() {
    let i;
    let ar = [4, 5, 1, 90, 9, 12];
    let min = 4;
    for (i = 0; i < ar.length; i++) {
        if (ar[i] < min) {
            min = ar[i];
        }
    }
    return min;
}
console.log(minNum());
