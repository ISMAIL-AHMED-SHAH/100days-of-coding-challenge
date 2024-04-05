// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    var name = "Nadeem";
    var age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// about the user    // user's name and age
userProfile.displayInfo();
// We made a self-setup profile that can talk about the user.
