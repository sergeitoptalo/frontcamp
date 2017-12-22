module.exports = function removeNumberAttrLoader(source) {
    let initialSource = source;
    let result = initialSource.replace(/(.*\d)\:(\D*\s?\w.*\,?)|(.*\:(\s?)\d.*)/g, '');

    return `module.exports = ${result}`;
  }
