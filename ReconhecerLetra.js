function verificarLetraA(str) {
       let contador = 0;
    
     const caracteres = str.split('');    
    
    for (let i = 0; i < caracteres.length; i++) {
       
        if (caracteres[i] === 'a' || caracteres[i] === 'A') {
            contador++;
        }
    }    
   
    if (contador > 0) {
        return `A letra 'a' (ou 'A') aparece ${contador} vez(es) na string.`;
    } else {
        return "A letra 'a' (ou 'A') não aparece na string.";
    }
}

const minhaString = "Aqui está um exemplo de String com algumas letras A e a.";
console.log(verificarLetraA(minhaString));
