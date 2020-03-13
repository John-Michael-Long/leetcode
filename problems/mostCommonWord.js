/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().match(/[a-z]+/g)
    
    const banSet = new Set(banned)
    const wordCount = {}
    
    paragraph.forEach(word => {
        if(!banSet.has(word)) {
            if(wordCount[word] === undefined) wordCount[word] = 0
            wordCount[word]++
        }
    })
    let maxCount = 0;
    let maxWord;
    for(let word of Object.keys(wordCount)) {
        if(wordCount[word] > maxCount) {
            maxCount = wordCount[word]
            maxWord = word
        }
    }
    return maxWord
};

