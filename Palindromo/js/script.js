function isPalindrome(word) {
    var lowerCaseWord = word.toLowerCase();
    var cleanWord = lowerCaseWord.replace(/\s+/g, '');
    var reversedWord = '';
    for (var i = cleanWord.length - 1; i >= 0; i--) {
        reversedWord += cleanWord[i];
    }
    return cleanWord === reversedWord;
}

function checkPalindrome(event) {
    event.preventDefault();
    var word = document.getElementById('parola').value;
    var result = isPalindrome(word);
    if (result) {
        document.getElementById('risultato').innerText = "La parola è palindroma.";
    } else {
        document.getElementById('risultato').innerText = "La parola non è palindroma.";
    }
}