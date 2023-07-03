const produtosCointainer = document.querySelector('.produtosCointainer')

function fetchCardProdutos(){
    return fetch("json/produtos.json")
        .then(response => response.json())
}

function showProdutos(){
    fetchCardProdutos()
        .then(produtos => {

            produtosCointainer.innerHTML = ""
            
            produtos.forEach(produto => {

            const {mobileSrc, tabletSrc, desktopSrc, alt, title, description, price } = produto

            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("col-12", "col-md-6", "col-xxl-4", "pb-4");
            
            produtoDiv.innerHTML = `
                
                <div class="card">
                    <img class="d-block d-md-none" src="${mobileSrc}"
                        alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo.">
                    <img class="d-none d-md-block d-xl-none" src="${tabletSrc}"
                        alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo.">
                    <img class="d-none d-xl-block" src="${desktopSrc}"
                        alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo.">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="fw-bold">R${price}</p>
                        <a href="#" class="btn btn-primary btn__ver-mais rounded-0 border-0">Ver mais</a>
                    </div>
                </div>
          
            `
            produtosCointainer.appendChild(produtoDiv)

        })
    });
}

showProdutos()