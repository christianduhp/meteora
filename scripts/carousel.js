const carousel = document.querySelector('.carousel-inner');

function fetchCarouselItems() {
    return fetch("json/carouselItems.json")
        .then(response => response.json());
}

function showCarouselItems() {
    fetchCarouselItems()
        .then(items=> {

            carousel.innerHTML = "";

            items.forEach((image,index) => {
                const { mobileSrc, tabletSrc, desktopSrc, alt, title, description } = image;
                const carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                
                if (index === 0) {
                    carouselItem.classList.add("active");
                }

                carouselItem.innerHTML = `

                    <img class="w-100 img-fluid d-md-none" src="${mobileSrc}"
                        alt="${alt}">
                   
                    <img class="w-100 img-fluid d-none d-md-block d-xl-none" src="${tabletSrc}"
                        alt="${alt}">
                    
                    <img class="w-100 img-fluid d-none d-xl-block" src="${desktopSrc}"
                        alt="${alt}">
              
                    <div class="carousel-caption">
                        <h5 class="fs-1">${title}</h5>
                        <p class="fs-4">${description}</p>
                    </div>
                `;



                carousel.appendChild(carouselItem);
            });
        })

}

showCarouselItems();
