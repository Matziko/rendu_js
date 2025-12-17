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
    <li><a href="#Avantages">Avantages</a></li>
    <li><a href="#Produits">Produits</a></li>
    <li><a href="#Services">Services</a></li>
    <li><a href="#Temoignages">Temoignages</a></li>
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


        // data.avantagesClients.forEach(element => {
        //     resultavantages = `<div class="avantage-container"><p>${data.avantagesClients}</p></div>`;
        //     return resultavantages;
        // });

        let avantagesContainer = document.createElement('div');
        avantagesContainer.className = 'container';


        //     avantages.innerHTML = `
        //     <div class="container">
        //     <span>"Pourquoi"</span>
        //     <h2>Ce qui nous définit</h2>
        // <p>Qualité sans égale dans chaque détail</p>

        // ${resultavantages}

        // </div>`;

        // comme innerhtml n'est pas secure je vqis refaire avec lqutre methode 

        let avantTitle1 = document.createElement('span');
        let avantTitle2 = document.createElement('h2');
        let avantParagraph = document.createElement('p');
        let avantdiv_container = document.createElement('div');

        avantTitle1.textContent = 'Pourquoi';
        avantTitle2.textContent = 'Ce qui nous definit';
        avantParagraph.textContent = 'Qualité sans égale dans chaque detail';

        avantdiv_container.className = "avantdiv_conainer";

        avantagesContainer.appendChild(avantTitle1);
        avantagesContainer.appendChild(avantTitle2);
        avantagesContainer.appendChild(avantParagraph);
        avantagesContainer.appendChild(avantdiv_container);

        data.avantagesClients.forEach(elementText => {
            let avantageDiv = document.createElement('div');
            let avantageP = document.createElement('p');

            avantageDiv.className = 'avantage-container';
            avantageP.textContent = elementText;

            avantageDiv.appendChild(avantageP);
            avantdiv_container.appendChild(avantageDiv);
        });

        avantages.innerHTML = '';
        avantages.appendChild(avantagesContainer);

        // let produitshtml = '';
        // data.produits.forEach(produit => {
        //     produitshtml += `
        //     <div class="card">
        //     <img src="${produit["image-url"]} "style="max-width: 150px;">
        //     <h3>${produit.nom}</h3>
        //     <p>${produit.description}</p></div>`;
        //     // return produitsHtml;
        // });

        // produits.innerHTML = `
        // <div class="container">
        // ${produitshtml}
        // </div>
        // `;
        // RIP mon innerhtml , on ne va pas t'oublier :(

        let produitsContainer = document.createElement('div');
        let prodcard_container = document.createElement('div');
        produitsContainer.className = 'container';
        prodcard_container.className = 'prodcard_container';

        data.produits.forEach(produit => {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let title = document.createElement('h3');
            let description = document.createElement('p');

            card.className = 'card';
            image.src = produit['image-url'];
            // image.style.maxWidth = '150px';

            title.textContent = produit.nom;
            description.textContent = produit.description;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            prodcard_container.appendChild(card);
            produitsContainer.appendChild(prodcard_container);

        });

        produits.innerHTML = '';
        produits.appendChild(produitsContainer);

        //     let serviceshtml = '';
        //     data.produits.forEach(service => {
        //         serviceshtml += `
        //         <h3>${service.nom}</h3>
        //         <p>${service.description}</p>
        //         `;
        //     });

        //     services.innerHTML = `
        // <div class="container">
        // <h2>Vos sneakers, votre style</h2>
        // ${serviceshtml}
        // </div>
        // `;
        // EN VRAI C BIEN DE CHANGER DE TRUC CAR JAVAIS MIS data.produits ... alors que c'est les services (mais j'ai regle maintenant)

        let servicesContainer = document.createElement('div');
        let servicesTitle = document.createElement('h2');

        servicesContainer.className = 'container';
        servicesTitle.textContent = 'Vos sneakers, votre style';
        servicesContainer.appendChild(servicesTitle);


        data.services.forEach(service => {
            let title = document.createElement('h3');
            let description = document.createElement('p');

            title.textContent = service.nom;
            description.textContent = service.description;

            servicesContainer.appendChild(title);
            servicesContainer.appendChild(description);
        });

        services.innerHTML = '';
        services.appendChild(servicesContainer);

        //             let temohtml = '';
        //     data.temoignages.forEach(temo => {
        //      temohtml += `
        //      <div class="avantage-container">
        //      <p>${temo.note}/5</p>
        //      <p>${temo.commentaire}</p>
        //      <p>${temo.prenom}</p>
        //      <p>${temo.typeExperience}</p>
        //      </div>`;
        //     });

        //     temoignages.innerHTML = `
        // <div class="container">
        // <h2>Ils parlent</h2>
        // <p>Ce que nos clients pensent vraiment</p>

        // ${temohtml}
        // </div>
        // `;


        let temoignagesContainer = document.createElement('div');
        let temoTitle1 = document.createElement('h2');
        let temoTitle2 = document.createElement('p');

        temoignagesContainer.className = 'container';

        temoTitle1.textContent = 'Ils parlent';
        temoTitle2.textContent = 'Ce que nos clients pensent vraiment';

        temoignagesContainer.appendChild(temoTitle1);
        temoignagesContainer.appendChild(temoTitle2);

        data.temoignages.forEach(temo => {
            let temoDiv = document.createElement('div');
            let noteP = document.createElement('p');
            let typeP = document.createElement('p');
            let commentP = document.createElement('p');
            let prenomP = document.createElement('p');
            temoDiv.className = 'avantage-container';

            noteP.textContent = `Note :${temo.note}/5`;
            commentP.textContent = temo.commentaire;
            prenomP.textContent = temo.prenom;
            typeP.textContent = temo.typeExperience;

            temoDiv.appendChild(noteP);
            temoDiv.appendChild(commentP);
            temoDiv.appendChild(prenomP);
            temoDiv.appendChild(typeP);
            temoignagesContainer.appendChild(temoDiv);
        });

        temoignages.innerHTML = '';
        temoignages.appendChild(temoignagesContainer);
    });