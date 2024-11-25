import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyDGqcBjiizHgN1r9_LUbAQjLjQjsG4B-ok",
  authDomain: "geofarmaco-ad42c.firebaseapp.com",
  projectId: "geofarmaco-ad42c",
  storageBucket: "geofarmaco-ad42c.appspot.com",
  messagingSenderId: "505324931269",
  appId: "1:505324931269:web:1b3406b8ee292d8b6848ac",
  measurementId: "G-3Y9NW95930"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

     // Hide the page content when the language is being changed
     document.getElementById('language-dropdown').addEventListener('change', function () {
      let language = this.value; // Get selected language

      // Show the loading spinner and hide page content
      document.getElementById('loading-spinner').style.display = 'block';
      document.getElementById('page-content').style.display = 'none';

      // Call your language change function
      changeLanguage(language);

      // Simulate a delay (for demo purposes) to show the loading spinner
      // Replace this with actual code that loads your content or performs actions.
      setTimeout(function () {
          // Hide the loading spinner and show the page content once the language change is complete
          document.getElementById('loading-spinner').style.display = 'none';
          document.getElementById('page-content').style.display = 'block';
      }, 2000); // Adjust the timeout duration as needed
  });

  document.getElementById('language-dropdownRes').addEventListener('change', function () {
    let language = this.value; // Get selected language

    // Show the loading spinner and hide page content
    document.getElementById('loading-spinner').style.display = 'block';
    document.getElementById('page-content').style.display = 'none';

    // Call your language change function
    changeLanguage(language);

    // Simulate a delay (for demo purposes) to show the loading spinner
    // Replace this with actual code that loads your content or performs actions.
    setTimeout(function () {
        // Hide the loading spinner and show the page content once the language change is complete
        document.getElementById('loading-spinner').style.display = 'none';
        document.getElementById('page-content').style.display = 'block';
    }, 2000); // Adjust the timeout duration as needed
});



function changeLanguage(language) {
  const translations = {
      en: {
         nav_link_first: "Our Company",
         nav_link_two: "Geo Farmaco in the World",
         nav_link_three: "Products",
         nav_link_four: "Contacs",
         searchBar_placeholder : "Search...",
         subsDes: "Subscribe to news",
         substextDes: "Subscribe news just entering your email",
         Rules: "All rights reserved © GEOFARMACO",
         about_us_title: "ABOUT US",
         about_us_text: "E.Vitalgroup srl (EuTylia) is a pharmaceutical company that deals with the development, production, scientific information, and distribution of medical devices, parapharmaceuticals, supplements, and cosmetics.",
         see_more: "See More",
         discover_our_products: "Discover our products",
         products: "Products",
        
         subscribe_placeholder: "Enter Email to subscribe",
         subscribe_button: "Subscribe" ,
      
          // Add more translations for other text elements as needed
      },
      ka: {
          nav_link_first: "ჩვენ შესახებ",
          nav_link_two: "Geo Farmaco მსოფლიოში",
          nav_link_three: "პროდუქტები",
          nav_link_four: "კონტაქტი",
          searchBar_placeholder : "ძებნა...",
          subsDes: "გამოიწერეთ სიახლეები",
          substextDes: "გამოიწერე სიახლე მხოლოდ Email-ის შეყვანით",
          Rules: "ყველა უფლება დაცულია © GEOFARMACO",
          about_us_title: "ჩვენ შესახებ",
          about_us_text: "E.Vitalgroup srl (EuTylia) არის ფარმაცევტული კომპანია, რომელიც დაკავებულია სამედიცინო მოწყობილობების, პარაფარმაცევტული საშუალებების, დამატებითი პროდუქტების და კოსმეტიკის განვითარებით, წარმოებით, სამეცნიერო ინფორმაციის და გავრცელებით.",
          see_more: "მეტის ნახვა",
          discover_our_products: "იხილეთ ჩვენი პროდუქტები",
          products: "პროდუქტები",

          subscribe_placeholder: "შეიყვანეთ Email გამოსაწერად",
          subscribe_button: "გამოწერა" ,
         
          // Add more translations for other text elements as needed
      },
      it: {
          nav_link_first: "Chi siamo",
          nav_link_two: "Geo Farmaco nel mondo",
          nav_link_three: "Prodotti",
          nav_link_four: "Contatti" , 
          searchBar_placeholder : "Ricerca...",
          subsDes: "Iscriviti alle notizie",
          substextDes: "Iscriviti alle notizie semplicemente inserendo la tua Email",
          Rules: "Tutti i diritti riservati © GEOFARMACO",
          about_us_title: "CHI SIAMO",
          about_us_text: "E.Vitalgroup srl (EuTylia) è una compagnia farmaceutica che si occupa dello sviluppo, produzione, informazione scientifica e distribuzione di dispositivi medici, parafarmaci, integratori e cosmetici.",
          see_more: "Scopri di più",
          discover_our_products: "Scopri i nostri prodotti", 
          products: "Prodotti",
         
          subscribe_placeholder: "Inserisci l'email per iscriverti",
          subscribe_button: "Iscriviti" ,
        
         
          
      }
  };

  // Apply translations to the page
  document.querySelector('.firstRes').innerText = translations[language].nav_link_first;
  document.querySelector('.secondRes').innerText = translations[language].nav_link_two;
  document.querySelector('.thirdRes').innerText = translations[language].nav_link_three;
  document.querySelector('.fourthRes').innerText = translations[language].nav_link_four;
  document.querySelector('.first').innerText = translations[language].nav_link_first;
  document.querySelector('.second').innerText = translations[language].nav_link_two;
  document.querySelector('.third').innerText = translations[language].nav_link_three;
  document.querySelector('.fourth').innerText = translations[language].nav_link_four;
  document.querySelector('.searchPlaceholder').placeholder = translations[language].searchBar_placeholder;
  document.querySelector('.subsDes').innerText = translations[language].subsDes;
  document.querySelector('.substextDes').innerText = translations[language].substextDes;
  document.querySelector('.subsRes').innerText = translations[language].subsDes;
  document.querySelector('.substextRes').innerText = translations[language].substextDes;
  document.querySelector('.Rules').innerText = translations[language].Rules;


  document.querySelector('.aboutusBox h4').innerText = translations[language].about_us_title;
  document.querySelector('.aboutusBox p').innerText = translations[language].about_us_text;
  document.querySelector('.aboutusBox a button').innerText = translations[language].see_more;
  document.querySelector('.aboutusBoxCircle h4').innerText = translations[language].discover_our_products;
  document.querySelector('.aboutusBoxCircle a button').innerText = translations[language].see_more;
  document.querySelector('.subsDeskfor input').placeholder = translations[language].subscribe_placeholder;
  document.querySelector('.subsDeskfor button').innerText = translations[language].subscribe_button;
  document.querySelector('.subsResfor input').placeholder = translations[language].subscribe_placeholder;
  document.querySelector('.subsResfor button').innerText = translations[language].subscribe_button;

  // Apply additional translations for other elements if necessary
}


// Get the language dropdown and loading icon elements



