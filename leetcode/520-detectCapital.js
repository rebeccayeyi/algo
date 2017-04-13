var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;
    let sub = word.substr(1, word.length-1);
    if (word[0] === word[0].toUpperCase() && sub === sub.toLowerCase()) return true;
    return false;
};
