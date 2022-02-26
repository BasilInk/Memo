const cardGenerator = (array, enterSection) => {
    array.forEach((item) => {
        const card = document.createElement(`div`);
        const face = document.createElement(`img`);
        const back = document.createElement(`div`);
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        enterSection.appendChild(card);;
        card.appendChild(face);
        card.appendChild(back);
        face.src = item.imgSrc;
    })
};

export default cardGenerator;

