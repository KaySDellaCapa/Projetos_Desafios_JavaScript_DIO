/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC;
    Instancie uma pessoa chamada José que tenho 70kg de peso e 1,75 de altura e peça o seu
    IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
       const imc = this.calcularImc(); // não precisa do return, a função volta
       if ((imc < 18.5)) {
        return('Abaixo do peso')
    } else if (((imc >= 18.5 && imc <= 25))) {
        return('Peso normal')
    }else if(((imc > 25 )&& (imc<=30 ))){
        console.log("Acima do peso")
    }else if (((imc > 30) && (imc > 40))) {
        return("Obeso");
    } else {
        return ('Sobrepeso');
    }
    }
}

const jose = new Pessoa ('José', 70, 1.75);
const gi = new Pessoa ('Giovanna', 50, 1.70);

console.log(jose, gi);
console.log(jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());
console.log(gi.calcularImc().toFixed(2));
console.log(gi.classificarImc());