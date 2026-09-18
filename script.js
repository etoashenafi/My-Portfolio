// NOTE: Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // NOTE: Find the navigation menu
    const navigation = document.querySelector("header > nav");

    // NOTE: Find the mobile menu button
    const menuButton = document.querySelector("#menu-button");

    // NOTE: Find all navigation links
    const navigationLinks = document.querySelectorAll("header > nav a");


    // NOTE: Check that JavaScript found the elements
    console.log(navigation);
    console.log(menuButton);
    console.log(navigationLinks);


    // NOTE: Stop if the menu or button cannot be found
    if (!navigation || !menuButton) {
        console.error("Menu navigation or menu button was not found.");
        return;
    }


    // NOTE: Listen for a click on the menu button
    menuButton.addEventListener("click", function() {

        // NOTE: Add/remove the class to open or close the menu
        navigation.classList.toggle("menu-open");

    });


    // NOTE: Go through all 9 navigation links
    navigationLinks.forEach(function(link) {

        // NOTE: Listen for a click on each link
        link.addEventListener("click", function() {

            // NOTE: Close the mobile menu after choosing a link
            navigation.classList.remove("menu-open");

        });

    });

});