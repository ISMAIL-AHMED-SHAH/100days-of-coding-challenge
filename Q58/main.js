function calculateAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    if (scores.length === 0) {
        console.log("No scores provided.");
        return 0;
    }
    var sum = scores.reduce(function (acc, score) { return acc + score; }, 0);
    return sum / scores.length;
}
var scores = [80, 90, 100, 70];
var averageScore = calculateAverage.apply(void 0, scores);
console.log("The average score is:");
console.log(averageScore);
