


function removeVowels(data: string){
    return data.replace(/[aeiou]/gi, '');
}

console.log(`IKONIK : ${removeVowels('IKONIK')}`);