module.exports = function removeNumberAttrLoader(source) {
    let a = JSON.stringify(source);
    return `module.exports = ${a}`;
  }
