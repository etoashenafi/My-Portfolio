// NOTE: This finds the navigation element from our HTML and stores it in a variable.
const navigation = document.querySelector("nav");

// NOTE: This checks whether JavaScript successfully found the navigation.
console.log(navigation);
// NOTE: This finds the mobile menu button from our HTML.
const menuButton = document.querySelector("#menu-button");
// NOTE: This lets us check that JavaScript successfully found the button.
console.log(menuButton);
// NOTE: This waits for the user to click the menu button.
menuButton.addEventListener("click", function() {
    console.log("Menu button clicked!");
});
