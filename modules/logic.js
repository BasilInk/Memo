const modalWindow = document.createElement(`section`);
modalWindow.classList.add(`modalWindow`);
const modalWindowChild = document.createElement(`div`);
modalWindow.appendChild(modalWindowChild);
modalWindowChild.classList.add(`modalWindowChild`);
modalWindowChild.textContent = `You WIN for 32 clicks`;


const checkCards = (elem) => {

    const clickedCard = elem.target;
    clickedCard.classList.add(`flipped`);
    clickedCard.classList.add(`onlyTwo`);
    const allCards = [...document.getElementsByClassName(`card`)];
    const flippedCards = [...document.getElementsByClassName(`flipped`)];
    const onlyTwo = [...document.getElementsByClassName(`onlyTwo`)];
    const allCheckedCards = [...document.getElementsByClassName(`toggleCard`)];

    if (flippedCards.length === 2) {

        if (flippedCards[0].getAttribute(`name`) === flippedCards[1].getAttribute(`name`)) {
            flippedCards.forEach((card) => {
                card.classList.remove(`flipped`);
                setTimeout (() => card.style.visibility =`hidden`, 1500);
            })
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove(`flipped`);
                setTimeout (() => card.classList.remove(`toggleCard`), 1000);
            });
        }
        
    };

    if (onlyTwo.length > 1) {
        allCards.forEach((card) => {
            card.style.pointerEvents =`none`;
            setTimeout (() => card.classList.remove(`onlyTwo`), 1000);
            setTimeout (() => card.style.pointerEvents =`all`, 1000);
        })
    };

    if (allCheckedCards.length === 1) {
        setTimeout (() => document.body.append(modalWindow), 2000)
    };

};

export default checkCards;