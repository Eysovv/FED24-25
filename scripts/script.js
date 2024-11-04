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

const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
    bodyElement.classList.add('dark-mode');
}

// Toggle de modus en slaat de keuze op in localStorage
toggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    const newMode = bodyElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newMode);  // Save the preference
});


const fontSizeButton = document.getElementById('big-l');

const currentFontSize = localStorage.getItem('fontSize') || 'normal';
if (currentFontSize === 'large') {
    bodyElement.classList.add('big-l');
}

// Wissel de lettergrootte en sla de keuze op in localStorage
fontSizeButton.addEventListener('click', function() {
    bodyElement.classList.toggle('big-l');

    const newFontSize = bodyElement.classList.contains('big-l') ? 'large' : 'normal';
    localStorage.setItem('fontSize', newFontSize); // Sla de voorkeur op
});

//https://chatgpt.com/share/6728d054-0a28-800a-a74f-5586a7223c35
const rotatingImage = document.querySelector('.rotate-on-scroll');

window.addEventListener('scroll', () => {
    // Bepaal de totale scrollbare hoogte van de pagina
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Bereken het scrollpercentage
    const scrollPercentage = window.scrollY / scrollableHeight;
    // Bepaal de rotatiehoek op basis van het scrollpercentage (0-360 graden)
    const rotation = scrollPercentage * 360;
    // Pas rotatie toe op de afbeelding
    rotatingImage.style.transform = `rotate(${rotation}deg)`;
});


const logoElement = document.getElementById('logo');
const audio = new Audio('audio/cord.wav');

logoElement.addEventListener('click', function() {
    audio.play();
});


const clickAudio = new Audio('audio/click.wav');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        clickAudio.play();
    });
});


//https://chatgpt.com/share/6728d054-0a28-800a-a74f-5586a7223c35

document.addEventListener('keydown', function(event) {
  
  if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
      event.preventDefault();
      window.history.back();
  }
});

document.addEventListener('keydown', function(event) {
  if ((event.metaKey || event.ctrlKey) && event.key === 'a') {
      event.preventDefault();
      triggerClickOnParagraph();
  }
});

//https://chatgpt.com/share/6728d054-0a28-800a-a74f-5586a7223c35

// Selecteer het p-element met de tekst "ADD TO CART"
const addToCartElement = document.getElementById('add-to-cart');

// Voeg een click eventlistener toe
addToCartElement.addEventListener('click', function() {
    // Maak een nieuw p-element aan
    const newParagraph = document.createElement('p');
    
    // Voeg de klasse 'added' toe aan het nieuwe p-element
    newParagraph.classList.add('added');

    // Voeg tekst toe aan het nieuwe p-element
    newParagraph.textContent = 'Item added to cart!';

    // Voeg het nieuwe p-element boven het bestaande p-element toe
    const articleElement = addToCartElement.parentElement; // selecteer het bovenliggende article
    articleElement.insertBefore(newParagraph, addToCartElement); // Voeg het nieuwe p-element vóór het bestaande p-element

    // Wacht 1 seconde voordat je de opacity begint te verminderen
    setTimeout(() => {
        newParagraph.classList.add('fade-out'); // Voeg de fade-out klasse toe
    }, 1000); // 1000 milliseconden = 1 seconde

    // Verwijder het nieuwe p-element na 2 seconden (1 seconde zichtbaarheid + 1 seconde fade-out)
    setTimeout(() => {
        articleElement.removeChild(newParagraph); // Verwijder het p-element
    }, 3000); // 3000 
  });

// Functie om het 'onclick'-event van het <p>-element te simuleren
function triggerClickOnParagraph() {
    if (addToCartElement) {
        addToCartElement.click(); // Triggert de onclick van het 'add-to-cart' <p>-element
    }
}