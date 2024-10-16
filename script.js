// Sélectionner le formulaire et ses champs
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// Sélectionner les divs pour afficher les erreurs
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

// Ajouter un événement de soumission au formulaire
form.addEventListener("submit", function (event) {
  // Empêcher l'envoi du formulaire si les champs sont invalides
  if (!validateForm()) {
    event.preventDefault(); // Empêche l'envoi du formulaire si la validation échoue
  }
});

// Fonction pour valider le formulaire avec des messages d'erreur et logs pour le débogage
function validateForm() {
  let isValid = true;

  // Réinitialiser les messages d'erreur
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Vérifier si le nom est vide
  console.log("Nom entré :", nameInput.value);
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Veuillez entrer votre nom.";
    isValid = false;
  }

  // Vérifier si l'e-mail est valide
  console.log("E-mail entré :", emailInput.value);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  }

  // Vérifier si le message est vide
  console.log("Message entré :", messageInput.value);
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Veuillez entrer un message.";
    isValid = false;
  }

  console.log("Formulaire valide :", isValid);
  return isValid; // Retourner vrai ou faux selon la validation
}

// Tableau d'objets représentant les fonctionnalités
const featuresData = [
  {
    title: "Facilité d'utilisation",
    description: "Notre application est intuitive et facile à utiliser.",
  },
  {
    title: "Performances rapides",
    description:
      "Un temps de chargement ultra-rapide pour une expérience fluide.",
  },
  {
    title: "Sécurité renforcée",
    description: "Vos données sont sécurisées avec les dernières technologies.",
  },
];

// Sélectionner l'élément parent où les cartes seront insérées
const featuresContainer = document.querySelector("#features");

// Fonction pour créer et insérer une carte de fonctionnalité
featuresData.forEach(function (feature) {
  // Créer l'élément div pour la carte
  const featureCard = document.createElement("div");
  featureCard.classList.add("feature-card");

  // Créer et ajouter le titre de la fonctionnalité
  const featureTitle = document.createElement("h3");
  featureTitle.textContent = feature.title;
  featureCard.appendChild(featureTitle);

  // Créer et ajouter la description de la fonctionnalité
  const featureDescription = document.createElement("p");
  featureDescription.textContent = feature.description;
  featureCard.appendChild(featureDescription);

  // Ajouter la carte de fonctionnalité au conteneur
  featuresContainer.appendChild(featureCard);
});

// Ajouter un événement de clic pour afficher le titre de la fonctionnalité cliquée
featuresContainer.addEventListener("click", function (event) {
  if (event.target.closest(".feature-card")) {
    const clickedFeatureTitle = event.target
      .closest(".feature-card")
      .querySelector("h3").textContent;
    alert(`Vous avez sélectionné : ${clickedFeatureTitle}`);
  }
});
