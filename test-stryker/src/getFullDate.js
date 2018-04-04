global.addZeroesToTime = function(date) {
    let givenDate = new Date(date);
    let minutes = givenDate.getMinutes();
    let hours = givenDate.getHours();
    let result = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);

    return result;
}

global.monthNameFromNumber = (monthNumber) => {
    const month = [
        '',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return month[monthNumber];
}

global.getFullDate = (passedDate) => {
    let date = new Date(passedDate);
    let time = addZeroesToTime(date);
    let resultDate = `${monthNameFromNumber(date.getMonth() + 1)} ${date.getDate()}`;
    let resultTime = `${time}`;

    return {
        date: resultDate,
        time: resultTime
    };
}
