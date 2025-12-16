const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;

let nav=document.getElementById("nav");
let header=document.getElementById("header");
let main=document.getElementById("main");
let avantages=document.getElementById("Avantages")
let produits=document.getElementById("Produits")
let services=document.getElementById("Services")
let temoignages=document.getElementById("Temoignages")


fetch(API_URL)
.then(response => response.json())
.then(data => {
    console.log(data);
    
    
    
    
    // data.produits.forEach(prod => {
        //     dishes.innerHTML += `<div class="dishcard">
        //     <img src="${plat.media.image}" alt="${plat.media.credit}" style="max-width: 300px;">
        //   <p>Nom du plat : ${plat.name}</p>
        //   <p>Pays : ${plat.country}</p>
        //   <p>Origine : ${plat.origin.city}</p>
        //   <p>Ingredients : </p>
        //   ${ingredientsHtml}
        //   <p>Temps de preparation : ${plat.serving.timeMin} min</p>
        //   <p>Difficulté : ${etoile(plat.difficulty)}</p>
        //   <p>Ce plat ${vegetarian(plat.diet.vegetarian)}</p>
        //   <p>Ce plat est ${gluten(plat.diet.glutenFree)}</p>
        //   </div>`;
        // });
    

    nav.innerHTML=`
    <h3>Logo</h3>
    <ul>
    <li><a href="">Accueil</a></li>
    <li><a href="">Avantages</a></li>
    <li><a href="">Produits</a></li>
    <li><a href="">Services</a></li>
    <li><a href="">Temoignages</a></li>
    </ul>
    <button>Appeler</button>
    `;
    header.innerHTML=`
    <div class="hero-container">
    <h1>${data.nomCommercial}</h1>
    <p>${data.phraseAccroche}</p>
    <p>${data.texteAppelAction}</p>
    <button>"Acheter"</button>
    <button>"Explorer"</button>
    </div>
    `;
    data.avantagesClients.forEach(element => {
        resultavantages=`<p>${data.avantagesClients}</p>`;
        return resultavantages;
    });
    avantages.innerHTML=`
    <div class="container">
    <span>"Pourquoi"</span>
    <h2>Ce qui nous définit</h2>
    <p>Qualité sans égale dans chaque détail</p>
    <div class="avantage-container">
    ${resultavantages}
    </div>
    </div>`;
    
    data.produits.forEach(element => {
        console.log(data.produits["image-url"]);
        // resultproduits = `<div class="card"><img src="${data.produits["image-url"]}"><h3>"${data.produits.nom}"</h3><p>"${data.produits.description}"</p></div>`;

        return resultproduits;
    });

    produits.innerHTML=`
    <div class="container">
    ${resultproduits}
    </div>
    `;
});