const cards = document.querySelectorAll(".cards");

// Método para criar o modal
const cardClickHandle = (event) => {
    document.querySelector(".modal--cover").src = `./covers/${event.target.dataset.id}_wide_cover.jpg`;
    document.querySelector(".modal--title").innerHTML = event.target.dataset.title;
    document.querySelector(".modal--info").innerHTML = `<strong>${event.target.dataset.rate} aprovaram</strong> <i class="fa-solid fa-clock"></i> ${event.target.dataset.duration} <span>${event.target.dataset.age}</span> ${event.target.dataset.year}`;
    document.querySelector(".modal--excerpt").innerHTML = event.target.dataset.excerpt;
    document.querySelector(".backdrop").style.display = "flex";
}

document.querySelectorAll(".card").forEach((card)=> {
    card.addEventListener("click", cardClickHandle);
});

// Método para horizontal scroll drag
cards.forEach( (element) => {
    let isDown = false;
    let left = 0;
    let positionX = 0;

    element.addEventListener("mousedown", (event) => {
        isDown = true;
        // Pega a posição do scrollLeft do elemento
        left = element.scrollLeft;
        // Peça a posição X atual do cursor
        positionX = event.clientX;
    });
    
    element.addEventListener("mousemove", (event) => {
        if (!isDown) return;
        event.preventDefault();

        // Calcula a diferença de deslocamento
        // entre a posição X atual e a posição inicial
        let diference = event.clientX - positionX;

        // Faz o scrollLeft no elemento
        element.scrollLeft = left - diference;
        
        // Caso o deslocamento seja maior que 10px
        // aplica a classe 'active' no elemento
        if (Math.abs(diference) > 10) {
            element.classList.add("active");
        }
    });

    element.addEventListener("mouseleave", (event)=> {
        isDown = false;
        element.classList.remove("active");
    })
    
    element.addEventListener("mouseup", (event) => {
        isDown = false;
        element.classList.remove("active");
    })

})

// Método para fechar o modal
const closeModal = (event)=> {
    document.querySelector(".backdrop").style.display = "none";
}