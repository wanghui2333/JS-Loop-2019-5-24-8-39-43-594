function cfb() {
    var bg = "<table>";
    for (var i = 1; i <= 9; i++) {
        bg += "<tr>";
        for (var j = 1; j <= i; j++) {
            bg += "<td>" + i + "*" + j + "=" + i * j + "</td>";
        }
        bg += "</td>";
    }
    bg += "</table>";
    document.write(bg);
}
cfb();