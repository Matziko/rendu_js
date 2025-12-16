const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;

let nav = document.getElementById("nav");
let header = document.getElementById("header");
let main = document.getElementById("main");
let avantages = document.getElementById("Avantages")
let produits = document.getElementById("Produits")
let services = document.getElementById("Services")
let temoignages = document.getElementById("Temoignages")


fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);


        nav.innerHTML = `
    <h2>Logo</h2>
    <ul>
    <li><a href="">Accueil</a></li>
    <li><a href="">Avantages</a></li>
    <li><a href="">Produits</a></li>
    <li><a href="">Services</a></li>
    <li><a href="">Temoignages</a></li>
    </ul>
    <div>
    <button>Appeler</button></div>
    `;
        header.innerHTML = `
    <div class="hero-container">
    <h1>${data.nomCommercial}</h1>
    <p>${data.phraseAccroche}</p>
    <p>${data.texteAppelAction}</p>
    <button class="button1">Acheter</button>
    <button class="button2">Explorer</button>
    </div>
    `;
        data.avantagesClients.forEach(element => {
            resultavantages = `<div class="avantage-container"><p>${data.avantagesClients}</p></div>`;
            return resultavantages;
        });
        avantages.innerHTML = `
    <div class="container">
    <span>"Pourquoi"</span>
    <h2>Ce qui nous définit</h2>
    <p>Qualité sans égale dans chaque détail</p>
    
    ${resultavantages}
    
    </div>`;

        let produitshtml = '';
        data.produits.forEach(produit => {
         produitshtml += `
            <div class="card">
            <img src="${produit["image-url"]} "style="max-width: 150px;">
        <h3>${produit.nom}</h3>
            <p>${produit.description}</p></div>`;
        // return produitsHtml;
        });

        produits.innerHTML = `
    <div class="container">
    ${produitshtml}
    </div>
    `;

            let serviceshtml = '';
        data.produits.forEach(service => {
         serviceshtml += `
         <h3>${service.nom}</h3>
         <p>${service.description}</p>
         `;
        });

        services.innerHTML = `
    <div class="container">
    <h2>Vos sneakers, votre style</h2>
    ${serviceshtml}
    </div>
    `;

                let temohtml = '';
        data.temoignages.forEach(temo => {
         temohtml += `
         <div class="avantage-container">
         <p>${temo.note}/5</p>
         <p>${temo.commentaire}</p>
         <p>${temo.prenom}</p>
         <p>${temo.typeExperience}</p>
         </div>`;
        });

        temoignages.innerHTML = `
    <div class="container">
    <h2>Ils parlent</h2>
    <p>Ce que nos clients pensent vraiment</p>
    
    ${temohtml}
    </div>
    `;
    });