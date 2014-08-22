function main() {
    var text = 'Write a program that extracts from ama given text alla palindromes, e.g. "ABBA", "lamal", "exe".';
    extractPalindroms(text);
}

main();

function extractPalindroms(text) {    
    text = text.toLowerCase();    
    text = text.replace(/\W+/g, ' ');   
    var wordsArr = text.split(' ');
    var answer = [];

    for (var i = 0; i < wordsArr.length; i++) {
        if (isPalindrome(wordsArr[i])) {
            answer.push(wordsArr[i]);
        }
    }

    for (var j = 0; j < answer.length; j++) {
        jsConsole.writeLine(answer[j]);
    }
}

function isPalindrome(word) {
    var len = word.length;
    if (len < 2) {
        return false;
    }

    for (var i = 0; i < len; i++) {
        if (word[i] != word[len - i - 1]) {
            return false;
        }
    }
    return true;
}