import getData from "./modules/getData.js";
import randomize from "./modules/randomize.js";
import cardGenerator from "./modules/cardGenerator.js";

const section = document.querySelector(`section`);

const cardData = getData();

randomize(cardData);

cardGenerator(cardData, section);

const card = document.querySelectorAll(`.card`);

card.forEach((card) => {
    card.addEventListener(`click`, () => {
        card.classList.toggle(`toggleCard`)
    })
})














