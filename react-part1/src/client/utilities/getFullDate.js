import { addZeroesToTime } from './addZeroesToTime';
import { monthNameFromNumber } from './monthNameFromNumber';

function getFullDate(passedDate) {
    let date = new Date(passedDate);
    let time = addZeroesToTime(date);
    let resultDate = `${monthNameFromNumber(date.getMonth() + 1)} ${date.getDate()}`;
    let resultTime = `${time}`;

    return {
        date: resultDate,
        time: resultTime
    };
}

module.exports = { getFullDate };
