
console.log("La Crème Café: JavaScript conectado!");

document.querySelectorAll(".flip-card").forEach((card) => {

    // Se uma imagem não for encontrada, o card continua funcionando
    // e exibe o fundo decorativo em vez de uma imagem quebrada.

    const imagem = card.querySelector(".imagem-produto");

    if (imagem) {
        imagem.addEventListener("error", () => {
            imagem.remove();
            card.querySelector(".frente")?.classList.add("sem-imagem");
        }, { once: true });
    }

    const alternarCard = () => {
        const estaVirado = card.classList.toggle("virado");

        card.setAttribute("aria-pressed", String(estaVirado));
    };

    card.addEventListener("click", alternarCard);

    // Permite virar o card também usando Enter ou Espaço.

    card.addEventListener("keydown", (evento) => {

        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            alternarCard();
        }

    });

});
