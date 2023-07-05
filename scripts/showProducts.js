const produtosCointainer = document.querySelector('.produtosCointainer')

export default function fetchCardProdutos(){
    return fetch("json/produtos.json")
        .then(response => response.json())
}

function showProdutos(){
    fetchCardProdutos()
        .then(produtos => {

            produtosCointainer.innerHTML = ""
            
            produtos.forEach(produto => {

            const {id, mobileSrc, tabletSrc, desktopSrc, alt, title, description, price} = produto

            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("col-12", "col-md-6", "col-xxl-4", "pb-4");
            
            produtoDiv.innerHTML = `
                
                <div class="card" id="card${id}">
                    <img class="imgMobile d-block d-md-none" src="${mobileSrc}"
                        alt="${alt}">
                    <img class="imgTablet d-none d-md-block d-xl-none" src="${tabletSrc}"
                        alt="${alt}">
                    <img class="imgDesktop d-none d-xl-block" src="${desktopSrc}"
                        alt="${alt}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="price fw-bold">R$ ${price}</p>

                        <button type="button" class="btn btn-primary btn__product__detail rounded-0 border-0 " data-toggle="modal" data-target="#cardProduct">
                        Ver mais
                        </button>

                    </div>
                </div>
          
            `
            produtosCointainer.appendChild(produtoDiv)

        })
    });
}

showProdutos()
