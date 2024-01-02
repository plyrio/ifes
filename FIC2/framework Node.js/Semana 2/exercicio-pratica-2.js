function isPalindrome(word) {
 // Transformar em minúsculas para comparação
 const cleanWord = word.toLowerCase();
 // Reverter a string
 const reversedWord = cleanWord.split('').reverse().join('');
 // Verificar se a palavra limpa é igual à palavra revertida
 return cleanWord === reversedWord;
}
// Testar com algumas palavras
const wordsToTest = ["arara", "banana", "radar", "javascript",
"reconocer", "palindrome"];
wordsToTest.forEach(word => {
 const result = isPalindrome(word) ? "é um palíndromo" : "não é um palíndromo";
 console.log(`A palavra "${word}" ${result}.`);
});