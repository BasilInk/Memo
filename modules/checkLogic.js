const checkCards = (elem) => {

    const clickedCard = elem.target;
    clickedCard.classList.add(`flipped`);
    clickedCard.classList.add(`onlyTwo`);
    const allCards = document.querySelectorAll(`.card`);
    const flippedCards = document.querySelectorAll(`.flipped`);
    const oneTwo = document.querySelectorAll(`.onlyTwo`)

    if (flippedCards.length === 2) {

        if (flippedCards[0].getAttribute(`name`) === flippedCards[1].getAttribute(`name`)) {
            flippedCards.forEach((card) => {
                card.classList.remove(`flipped`);
                card.style.pointerEvents =`none`;
                setTimeout (() => card.style.visibility =`hidden`, 1500);
            })
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove(`flipped`);
                setTimeout (() => card.classList.remove(`toggleCard`), 1000);
            });
        }
        
    }

    if(oneTwo.length > 1) {
        allCards.forEach((card) => {
            card.style.pointerEvents =`none`;
            setTimeout (() => card.classList.remove(`onlyTwo`), 1000);
            setTimeout (() => card.style.pointerEvents =`all`, 1000);
        })
    }

};

export default checkCards;