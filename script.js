// Aqui pegamos o elemento <input> com id=password criado no html e passamos para a memoria atraves de uma constante chamada passwordBox. 
const passwordBox = document.getElementById("password");
// Criamos uma constante para guardar um espaco especifico na memoria 
const lenght = 12;

// Criamos entao constantes para guardar os tipos de characteres que poderemos usar dentro do password
// const upperCase = "ABCDEFGHIHKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijqlmnopqrstuvwxyz";
// const number = "123456789";
// const symbols = "@#$%^&*()_=~|{}[]<>/-=";

// Mais uma constante para armazenar todos os characteres em uma unica constante 
// const allChars = upperCase + lowerCase + number + symbols;

// Simplificamos o codigo alocando todos as strings em uma unica cosnt atraves da concatenacao.
const allChars = "ABCDEFGHIHKLMNOPQRSTUVWXYZ" + "abcdefghijqlmnopqrstuvwxyz" + "123456789" + "@#$%^&*()_=~|{}[]<>/-=";

// Essa funcao e a responssavel por realizar a randomizacao dos characteres acima
function createPassword() {
    // separamos uma variavel vazia para receber o resultado da randomizacao
    let password = "";

    // Abaixo assinamos randomicamente na variavel atraves das funcoes internas Math.random() que retorna um float de 0 ate 1, entao qualquer numero que ele retorna por exemplo 0.3 nos multiplicamos esse valor com o lenght da constante por exemplo upperCase que e igual a 26 o resultado seria => 0.3 * 26 = 7.8; e ai entao que a funcao Math.floor entra em acao porque ele retorna somente o numero arredondado para baixo, neste caso, o numero inteiro = 7 que equivale a letra H. Fizemos isso entao para as quatro constantes de caracteres definidas acima e isso entao retorna somente um char aleatorio de cada e preenche o campo com apenas 4 diferentes chars.

    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += number[Math.floor(Math.random() * number.length)];
    // password += symbols[Math.floor(Math.random() * symbols.length)];

    // Aqui estabelecemos que enquanto o tamanho da senha (numero de caracteres) for menor do que a constante lenght = 12 definida acima adicione mais caracteres randomicos!
    while(password.length < lenght){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Aqui assinamos o valor da constante passwordBox (elemento input text id=password) os valores contidos na variavel password que recebeu o resultado do while! 
    passwordBox.value = password;
}
// Aqui criamos a funcao que torna capas selecionar o valor de dentro do passwordBox e em seguida copia-lo atraves do botao 
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
