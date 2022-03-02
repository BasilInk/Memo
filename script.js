import getCardsData from "./modules/getCardsData.js";
import randomize from "./modules/randomize.js";
import cardGenerator from "./modules/cardGenerator.js";
import createModalWindow from "./modules/modalWindow.js";

const container = document.getElementsByClassName(`container`);

const cardsData = getCardsData();

let counter = 0;

randomize(cardsData);

const checkCards = (elem) => {

    const clickedCard = elem.target;
    clickedCard.classList.add(`flipped`);
    clickedCard.classList.add(`onlyTwo`);
    const flippedCards = [...document.getElementsByClassName(`flipped`)];
    const onlyTwo = [...document.getElementsByClassName(`onlyTwo`)];
    const allCheckedCards = [...document.getElementsByClassName(`toggleCard`)];

    if (flippedCards.length === 1) {
        clickedCard.style.pointerEvents = `none`;
    };

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

    if (allCheckedCards.length === 32) {
        setTimeout (() => createModalWindow (counter), 2000)
    };

};

cardGenerator(cardsData, container[0], checkCards);

const allCards = [...document.getElementsByClassName(`card`)];

allCards.forEach((card) => {
    card.addEventListener(`click`, (click) => {
        counter++;
        click = counter;
    })
});
