document.addEventListener("DOMContentLoaded", function(event) { 
    let mouseCursor = document.querySelector(".cursor");
    let navLi = document.querySelectorAll(".link")

    window.addEventListener(`mousemove`, cursor); 

    function cursor(event) {
        mouseCursor.style.top = event.pageY + `px`;
        mouseCursor.style.left = event.pageX + `px`;
    }

navLi.forEach(link => {
    link.addEventListener(`mouseleave`, () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("link-hover")
        
    })
    link.addEventListener(`mouseover`, () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("link-hover")
    })
}
    )

});