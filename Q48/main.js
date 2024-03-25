// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopsSet1 = [1200, 1500, 1000];
var laptopsSet2 = [1100, 1300, 1400];
// Combining arrays using the spread operator
var combinedLaptops = __spreadArray(__spreadArray([], laptopsSet1, true), laptopsSet2, true);
// Sorting the combined array in ascending order
combinedLaptops.sort(function (a, b) { return a - b; });
// Logging the result
console.log("Combined and sorted prices of laptops:", combinedLaptops);
