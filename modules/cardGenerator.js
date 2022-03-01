const cardGenerator = (array, enterInSection, funcLogic) => {

    array.forEach((item) => {
        const card = document.createElement(`div`);
        const face = document.createElement(`img`);
        const back = document.createElement(`div`);

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        enterInSection.appendChild(card);;
        card.appendChild(face);
        card.appendChild(back);
        
        face.src = item.imgSrc;
        card.setAttribute(`name`, item.name);

        card.addEventListener(`click`, (elem) => {
            card.classList.toggle(`toggleCard`);
            funcLogic (elem);
        })
    })

};

export default cardGenerator;