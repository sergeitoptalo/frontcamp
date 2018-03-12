let monthNameFromNumber = (monthNumber) => {
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

module.exports = { monthNameFromNumber };
