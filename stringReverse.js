function stringReverse() {
    let string = "helloo";
    document.write("</br>" + string);
    for (let i = string.length - 1; i >= 0; i--) {
        document.write("</br>" + string[i]);
    }
}
stringReverse();
