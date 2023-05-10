class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Origins', '50', true);
  let secondEpisode = new Episode('The Cave', '55', false);
  let thirdEpisode = new Episode('Chapter 3', '50', false);

  document.querySelector('#first-episode-info').innerText = 
  `Episode: ${firstEpisode.title}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

  document.querySelector('#second-episode-info').innerText = 
  `Episode: ${secondEpisode.title}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

  document.querySelector('#third-episode-info').innerText = 
  `Episode: ${thirdEpisode.title}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;


//Contrôle de l'age
//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On pointe sur l'élément de la checkbox de contrôle parental
const parentalInput = document.getElementById("parental");

//On défini la variable age qu'on utilisera et une variable définissant l'age de la majorité
let age;
let isControlParentalActive;
let ageMajorite = 18;

//Cette fonction affichera le message de validation
function valider(){
    espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera le message d'erreur
function refuser(){
    alert("Cet espace est interdit aux personnes mineurs");
}

function onConfirm(){
    //On récupère la saisie de l'age et transforme le texte en nombre entier
    age = parseInt(ageInput.value);
    //Si la saisie n'est pas un nombre, on affiche un message d'erreur
    if(isNaN(age)){
        alert("Ceci n'est pas un nombre");
        return;
      }
    //On récupère la valeur de la checkbox de contrôle parental
    isControlParentalActive = parentalInput.checked;
    //Si non majeur et que le contrôle parental est activé, appeler la fonction refuser, sinon appeler la fonction valider.
    if(age < ageMajorite && isControlParentalActive){
        refuser();
      } else {
        valider();
      }
    //On vide le champs de saisie
    ageInput.value = "";
}

//L'activation du bouton appelle la fonction onConfirme
bouton.addEventListener('click', onConfirm);