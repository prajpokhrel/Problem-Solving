function printPattern(n) {
    for (var i = n; i > 0; i--) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br />");
    }
}

printPattern(50);