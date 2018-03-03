export const atLeastOneEmptyField = (fields) => {
    return Object.keys(fields).some(field => fields[field] === '')
};
