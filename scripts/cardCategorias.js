const categoriasContainer = document.querySelector('.categoriasContainer')

function fetchCardCategorias(){

    return fetch("json/categorias.json")
        .then(response => response.json())
}

function showCategorias(){

    fetchCardCategorias()
        .then(categorias => {

            categoriasContainer.innerHTML = ""
            
            categorias.forEach(categoria => {

                const {mobileSrc, tabletSrc, desktopSrc, alt, title} = categoria

                const categoriaDiv = document.createElement("div")
                categoriaDiv.classList.add("col-6", "col-md-4", "col-xxl-2")
                categoriaDiv.innerHTML = `
                
                <div class="card rounded-0 border-0">
                    <img class="d-md-none d-block" src="${mobileSrc}"
                        alt="${alt}">
                    <img class="d-none d-md-block d-xl-none" src="${tabletSrc}"
                        alt="${alt}">
                    <img class="d-none d-xl-block" src="${desktopSrc}"
                        alt="${alt}">
                    <div class="card-header bg-black text-bg-dark">
                        <p class="text-center card-text">
                         ${title}
                        </p>
                    </div>
                </div>
                `

                categoriasContainer.appendChild(categoriaDiv)
                
            });
        })
}

showCategorias()