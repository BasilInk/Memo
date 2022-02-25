const randomize = (array) => {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
    return array;
};

export default randomize;