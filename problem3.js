//PATTERN

(function hallowRectangle(r, c) {
    let string = "";
    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= c; j++) {
            if (i == 1 || i == r || j == 1 || j == c)
                string += " * ";
            else
                string += "   ";
        }
        string += "\n";
    }
    console.log(string);
})(3, 5);


(function solidRectangle(n, m) {
    string = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            string += " * ";
        }
        string += "\n";
    }
    console.log(string);
})(3, 5)

