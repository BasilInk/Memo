import getCardsData from "./modules/getCardsData.js";
import randomize from "./modules/randomize.js";
import cardGenerator from "./modules/cardGenerator.js";
import checkCards from "./modules/logic.js";

const container = document.getElementsByClassName(`container`);

const cardsData = getCardsData();

randomize(cardsData);

cardGenerator(cardsData, container[0], checkCards);
