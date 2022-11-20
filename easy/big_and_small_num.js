function minMax(list) {
    var min = 1000000000;
    var max = -1000000000;
    for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
        if (list[i] < min) {
            min = list[i];
        }
    }
    return [min, max];
}


console.log(minMax([1, 2, 3, 4, 5, 6, -1]));