const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;

let nav=document.getElementById("nav");
let header=document.getElementById("header");
let main=document.getElementById("main");
let Avantages=document.getElementsByClassName("Avantages")
let Produits=document.getElementsByClassName("Produits")
let Services=document.getElementsByClassName("Services")
let Temoignages=document.getElementsByClassName("Temoignages")

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

fetch("API_URL")
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
    });