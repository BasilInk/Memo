import getCardsData from "./modules/getCardsData.js";
import randomize from "./modules/randomize.js";
import cardGenerator from "./modules/cardGenerator.js";
import checkCards from "./modules/checkLogic.js"

const section = document.getElementsByClassName(`container`);

const cardsData = getCardsData();

randomize(cardsData);

cardGenerator(cardsData, section[0], checkCards);