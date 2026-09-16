// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Find the navigation inside the header
    const navigation = document.querySelector("header > nav");

    // Find the menu button using its ID
    const menuButton = document.querySelector("#menu-button");

    // Check if both elements were found
    console.log(navigation);
    console.log(menuButton);

    // Stop if an element is missing
    if (!navigation || !menuButton) {
        console.error("Menu navigation or menu button was not found.");
        return;
    }

    // Listen for a click on the menu button
    menuButton.addEventListener("click", function() {

        // Add/remove "menu-open" to show/hide the menu
        navigation.classList.toggle("menu-open");

        // Check if the menu is currently open
        const isOpen = navigation.classList.contains("menu-open");

        // Update accessibility information
        menuButton.setAttribute("aria-expanded", isOpen);

        // Change the button label
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });

});