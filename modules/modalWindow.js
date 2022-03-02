function createModalWindow (count = 0) {

    const modalWindow = document.createElement(`section`);
    modalWindow.classList.add(`modalWindow`);

    const modalWindowChild = document.createElement(`div`);
    modalWindowChild.classList.add(`modalWindowChild`);
    modalWindow.appendChild(modalWindowChild);

    const modalWindowText = document.createElement(`div`);
    modalWindowText.classList.add(`modalWindowText`);
    modalWindowText.textContent = `You WON in ${count} clicks`;
    modalWindowChild.appendChild(modalWindowText);

    const modalWindowButton = document.createElement(`button`);
    modalWindowButton.classList.add(`modalWindowButton`);
    modalWindowButton.textContent = `Play again`
    modalWindowChild.appendChild(modalWindowButton);

    document.body.append(modalWindow);

    const btn = document.querySelector(`.modalWindowButton`);

    btn.addEventListener(`click`, () => {
        location.reload()
    })
    
};

export default createModalWindow;