async function renderHotels(jsonFile) {
try{
    const response = await fetch(jsonFile);
    const hotels = await response.json();

    const container = document.querySelector('.cards');

    
    let html = "";

    hotels.forEach(hotel => {

        let starsHtml = "";
        for(let i=1;i<=5;i++){
            if(i<=hotel.stars){
                starsHtml+=`
                 <i class="fa-solid fa-star active"></i>
                `
            }else{
            starsHtml+=` 
                <i class="fa-solid fa-star"></i>
            `
            }
        }

           html+= `

             <div class="card">

            <img src="${hotel.img}" alt="${hotel.alt}" loading="lazy">

          <div class="hotel-rating">
                <div class="stars">
                   ${starsHtml}
                </div>
                <span class="rating-number">
                    <p>${hotel.rating}</p>
                </span>
                <span class="reviews"> (${hotel.reviews} تقيم)</span>
            </div>

            <h3>${hotel.name}</h3>

            <p class="location">
                <i class="fa-solid fa-location-dot"></i>
                ${hotel.description}
             </p>

             <a href="${hotel.whatsapp}" target="_blank">
            <button>احجز الآن</button>
            </a>

        </div>
        `;

    });
    container.innerHTML = html;
}catch(error){
        document.querySelector(".cards").innerHTML =
        "<p>Unable to load hotels.</p>";
    }

}
