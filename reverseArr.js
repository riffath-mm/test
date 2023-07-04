function reverseArray() {
    let ar = [1, 2, 3, 6, 5];
    document.write("=====array elements");
    document.write("</br>");
    for (let i = 0; i < ar.length; i++) {
        // debugger;

        document.write(ar[i]);
    }
    document.write("</br>");
    document.write(".........reverse array");
    document.write("</br>");
    for (i = ar.length - 1; i >= 0; i--) {
        // debugger;

        document.write(ar[i]);
    }
}
reverseArray();
