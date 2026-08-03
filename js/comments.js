fetch("data/comments.json")
.then(res => res.json())
.then(reviews => {

    const container = document.getElementById("reviews");

    reviews.forEach(review => {


        container.innerHTML += `

        <div class="review-card">

            <div class="review-header">

                <img src="${review.avatar}" loading="lazy">

                <div>
                    <h4>${review.name}</h4>
                    <span><span class="fi fi-${review.flag}"></span>  ${ review.country}</span>
                </div>

                <div class="score">
                    ${review.score}
                </div>


            </div>


            <p class="comment">
                ${review.comment}
            </p>


            <div class="review-footer">

                <span>${review.date}</span>

            </div>

        </div>

        `;

    });

}).catch(() => {
    document.getElementById("reviews").innerHTML =
    "<p>Reviews are unavailable right now.</p>";
});





 //  comments الأسهم لازم تكون هنا بعد إنشاء الكروت
 const slider = document.getElementById("reviews");
 const next = document.getElementById("nextReview");
 const prev = document.getElementById("prevReview");
 next.addEventListener("click", ()=>{
     slider.scrollLeft += 430;
    });
 prev.addEventListener("click", ()=>{
     slider.scrollLeft -= 430;
    });
