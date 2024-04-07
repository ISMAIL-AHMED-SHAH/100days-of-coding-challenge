// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.
// Creating a Map to store countries and their capitals
var countryCapitalMap = new Map();
// Adding countries and their capitals to the Map
countryCapitalMap.set("Pakistan", "Karachi");
countryCapitalMap.set("Qatar", "Doha");
countryCapitalMap.set("USA", "New York");
console.log(countryCapitalMap);
// Logs the Map with the countries and their capitals.
