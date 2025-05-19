fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        console.log(data[0].title)

        data.forEach(produit =>{
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
            <div class=" alignCenter">${produit.price} €</div>
        </div>


 
    `
        });





    



    });

