let addZeroesToTime = (date) => {
    let givenDate = new Date(date);
    let minutes = givenDate.getMinutes();
    let hours = givenDate.getHours();
    let result = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);

    return result;
}

module.exports = { addZeroesToTime };
