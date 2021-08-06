"use strict";

class AllProducts {
    constructor() {}

    // Permet de récupérer les produits de l'API et de les afficher

    productsData() {
        fetch("http://localhost:3000/api/furniture")
            .then((response) => {
                if (!response.ok) {
                    throw Error("ERROR");
                }
                return response.json();
            })
            .then((data) => {
                const productHtml = data
                    .map((furniture) => {
                        return `
                    <figure id="figure-produit" class="figure-produit">
                        <img src="${furniture.imageUrl}" alt="${furniture.name}" id="products-image" class="products-image">
                        <figcaption>
                            <div>
                                <h2>
                                    ${furniture.name}
                                </h2>
                            </div>
                            <div id="" class="">
                                <p>
                                    ${furniture.description}
                                </p>
                                <div class="detail-and-price">
                                    <h3 class="text-xl font-medium merriweather">
                                        ${furniture.price / 100} €
                                    </h3>
                                    <div>
                                        <a href="/public/views/produit.html?id${
                                            furniture._id
                                        }"> 
                                            <span>Voir le produit</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </figcaption>
                    </figure>
                    `;
                    })
                    .join("");
                document.querySelector("#produits").insertAdjacentHTML("afterbegin", productHtml);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

let produits = new AllProducts();
produits.productsData();