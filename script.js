var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible//


const toggleButton = document.getElementById('mode-toggle');
const bodyElement = document.body;

// Check saved mode from localStorage
const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
    bodyElement.classList.add('dark-mode');
}

// Toggle de modus en sla de keuze op in localStorage
toggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    const newMode = bodyElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newMode);  // Save the preference
});