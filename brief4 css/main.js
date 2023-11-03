
// Fonction pour valider la commande
function validerCommande() {
  // Récupérer le panier depuis localStorage
  const panierRecupe = JSON.parse(localStorage.getItem('panier'));

  // Vérifier si le panier n'est pas vide
  if (panierRecupe && panierRecupe.length > 0) {
    let messageConfirmation = 'Récapitulatif de la commande:\n';

    // Parcourir le panier et afficher chaque élément
    panierRecupe.forEach((item, index) => {
      messageConfirmation += `Produit ${index + 1}:\n`;
      messageConfirmation += `Nom: ${item.nom}\n`;
      messageConfirmation += `Quantité: ${item.quantite}\n`;
      messageConfirmation += `Prix unitaire: $${item.prix}\n`;
      messageConfirmation += `Prix total: $${item.quantite * item.prix}\n\n`;
    });

    // Calculer le total TTC
    const totalHT = panierRecupe.reduce((total, item) => total + item.quantite * item.prix, 0);
    const TVA = 0.2 * totalHT;
    const totalTTC = totalHT + TVA;

    messageConfirmation += `Total HT: $${totalHT.toFixed(2)}\n`;
    messageConfirmation += `TVA (20%): $${TVA.toFixed(2)}\n`;
    messageConfirmation += `Total TTC: $${totalTTC.toFixed(2)}`;

    // Afficher le message de confirmation
    alert(messageConfirmation);

    // Vider le panier en supprimant l'élément du localStorage
    localStorage.removeItem('panier');

    // Rafraîchir la page pour supprimer les éléments du panier de l'affichage
    location.reload();
  } else {
    // Si le panier est vide, afficher un message d'erreur
    alert('Le panier est vide. Ajoutez des produits avant de valider la commande.');
  }
}

// Sélectionnez le bouton "Validate" par son ID
const validerCommandeButton = document.getElementById('valider-commande');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Validate"
validerCommandeButton.addEventListener('click', validerCommande);





















// Supposez que vous ayez une liste d'articles dans le panier
const panier = [
    { nom: 'Produit 1', quantite: 2, prix: 10 }, 
   { nom: 'Produit 2', quantite: 1, prix: 20 },
   { nom: 'Produit 3', quantite: 1, prix: 15 }
   
];


// Convertissez la liste en format JSON et stockez-la dans localStorage
localStorage.setItem('panier', JSON.stringify(panier));









const panierRecupe = JSON.parse(localStorage.getItem('panier'));
const tableBody = document.getElementById('panierTableBody');
let totalHT = 0;

// Loop through the items in the panierRecupe array and create rows for each item
panierRecupe.forEach((item) => {
  const row = document.createElement('tr');
  row.classList.add('custom-row'); // Ajoutez une classe à la ligne

  // Create table cells for each property (nom, quantite, prix)
  const nomCell = document.createElement('td');
  nomCell.textContent = item.nom;
  nomCell.classList.add('custom-nom'); // Ajoutez une classe à la cellule du nom


  const quantiteCell = document.createElement('td');
  quantiteCell.textContent = item.quantite;
  quantiteCell.classList.add('custom-quantite'); // Ajoutez une classe à la cellule de la quantité

  const prixUnitaireCell = document.createElement('td');
  prixUnitaireCell.textContent = '$' + item.prix;

  const prixTotalCell = document.createElement('td');
  const prixTotal = item.quantite * item.prix;
  prixUnitaireCell.classList.add('custom-prix-unitaire'); // Ajoutez une classe à la cellule du prix unitaire
  prixTotalCell.textContent = '$' + prixTotal;

  // Append the cells to the row
  
  row.appendChild(quantiteCell);
  row.appendChild(nomCell);
  row.appendChild(prixUnitaireCell);
  row.appendChild(prixTotalCell);

  // Append the row to the table body
  tableBody.appendChild(row);

  // Calculate the sub-total for each item and add it to totalHT
  totalHT += prixTotal;
});

// Calculate the tax (20%)
const TVA = 0.2 * totalHT;

// Calculate the total TTC
const totalTTC = totalHT + TVA;

// Update the HTML elements with the calculated values
document.getElementById('total-ht').textContent = '$' + totalHT.toFixed(2);
document.getElementById('tva').textContent = '$' + TVA.toFixed(2);
document.getElementById('total-ttc').textContent = '$' + totalTTC.toFixed(2);

// Append the table body to the table
const table = document.querySelector('table');
table.appendChild(tableBody);

















































// // Pour récupérer le panier dans la page de devis :
// const panierRecupe = JSON.parse(localStorage.getItem('panier'));
// const tableBody = document.getElementById('panierTableBody');
// let totalHT = 0;
// let totalTTC = 0;
// // Loop through the items in the panierRecupe array and create rows for each item
// panierRecupe.forEach((item) => {
//   const row = document.createElement('tr');
  
//   // Create table cells for each property (nom, quantite, prix)
//   const nomCell = document.createElement('td');
//   nomCell.textContent = item.nom;

//   const quantiteCell = document.createElement('td');
//   quantiteCell.textContent = item.quantite;

//   const prixUnitaireCell = document.createElement('td');
//   prixUnitaireCell.textContent = '$' + item.prix;

//   const prixTotalCell = document.createElement('td');
//   prixTotalCell.textContent = '$' + (item.quantite * item.prix);

//   // Append the cells to the row
//   row.appendChild(quantiteCell);
//   row.appendChild(nomCell);
//   row.appendChild(prixUnitaireCell);
//   row.appendChild(prixTotalCell);

//   // Append the row to the table body
//   tableBody.appendChild(row);
//   totalHT += prixTotal;
// });

// // Add the table body to the table
// table.appendChild(tableBody);
   












// // Calculate the tax (20%)
// const TVA = 0.2 * totalHT;

// // Calculate the total TTC
// totalTTC = totalHT + TVA;

// // Update the HTML elements with the calculated values
// document.getElementById('total-ht').textContent = totalHT.toFixed(2) + ' $';
// document.getElementById('tva').textContent = TVA.toFixed(2) + ' $';
// document.getElementById('total-ttc').textContent = totalTTC.toFixed(2) + ' $';

















// console.log(panierRecupe[0]);



// document.getElementById("nom").innerHTML=panierRecupe[1].nom;
// document.getElementById("quantite").innerHTML=panierRecupe[1].quantite;
// document.getElementById("prix").innerHTML="$" +panierRecupe[1].prix ;
// document.getElementById("prix-total1").innerHTML="$" +panierRecupe[1].prix*panierRecupe[1].quantite;

