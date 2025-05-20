fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        console.log(data[0].title)

        data.forEach(produit => {
            document.body.innerHTML += `

    

        <div class=" border card">
            <div>
                <h1 class=" alignCenter">${produit.title}</h1>
                <h2 class=" alignCenter">${produit.category}</h2>
            </div>
            <img class=""  src="${produit.image}" alt="${produit.title}">
            <div class="">
                <p>${produit.description}</p>
            </div>
            <div class="font alignCenter spaceBetween flex"><p>${produit.price} €</p>
            <p class=" btn ">Acheter</p></div>
        </div>


 
    `
        });
    });

// Créer des catérogies (calquées sur "produit.category"), pour venir cibler directement les produits intéressant pour moi! //

console.log(data.category)

data.forEach(category => {

})