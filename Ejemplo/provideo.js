"use strict";
function removeVowels(data) {
    return data.replace(/[aeiou]/gi, '');
}
console.log(`IKONIK : ${removeVowels('IKONIK')}`);
