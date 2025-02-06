function switchLanguage(event) {
    event.preventDefault(); // Prevent immediate navigation

    // Show the loading spinner and hide the page content
    document.getElementById('loading-spinner').style.display = 'block';
    document.getElementById('page-content').style.display = 'none';

    // Set a 5-second delay before hiding the spinner and navigating to the new page
    setTimeout(function () {
        // Hide the loading spinner and show the page content
        document.getElementById("languageDropdown").style.display = "none";
        document.getElementById('loading-spinner').style.display = 'none';
        document.getElementById('page-content').style.display = 'block';

        // Now navigate to the new page
        window.location.href = event.target.href; // Redirect after delay
    }, 2500); // 5000ms = 5 seconds
}

function toggleDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    const arrow = document.querySelector(".dropdown-arrow");

    // Toggle dropdown visibility
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        arrow.innerHTML = "&#9662;"; // Set the arrow to down
    } else {
        dropdown.style.display = "block";
        arrow.innerHTML = "&#9652;"; // Set the arrow to up
    }
}


function switchLanguageRes(event) {
    event.preventDefault(); // Prevent immediate navigation

    // Show the loading spinner and hide the page content
    document.getElementById('loading-spinner').style.display = 'block';
    document.getElementById('page-content').style.display = 'none';

    // Set a 5-second delay before hiding the spinner and navigating to the new page
    setTimeout(function () {
        // Hide the loading spinner and show the page content
        document.getElementById("languageMenu").style.display = "none";
        document.getElementById('loading-spinner').style.display = 'none';
        document.getElementById('page-content').style.display = 'block';

        // Now navigate to the new page
        window.location.href = event.target.href; // Redirect after delay
    }, 2500); // 5000ms = 5 seconds
}

function toggleDropdownRes() {
    const dropdown = document.getElementById("languageMenu");
    

    // Toggle dropdown visibility
     if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        
   } else {
     dropdown.style.display = "block";
     
   }
  }