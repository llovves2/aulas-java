//Funçao
//BLOCO DE CODIGO rEUTILIAZAvel
//Tornar a manutenção de codigo mais pratica

// let a = 2;
// let b = 2;

// function soma(a,b){
//     return a+b;
// }
// function subtração(a,b){
//     return a-b;
// }
// function multiplicação(a,b){
//     return a*b;
// }
// function divisao(a,b){
//     return a/b;
// }
// function expoente(a,b){
//     return a**b;
// }
// function modulo(a,b){
//     return a%b;
// }
// function conversodefahrenheit(a,b){
//     return (C * 9) / 5 + 32;
// }

// let a = soma(2,5);
// let b = soma(3,6);
// // console.log(a, b);

// //OUTRA FORMA DE FAZER.
// const soma1 = (a,b) => a+b;
// const subtraçao1 = (a,b) => a-b;
// const multiplicaçao1 = (a,b) => a*b;
// const divisao1 = (a,b) => a/b;
// const exopente1 = (a,b) => a**b;
// const modulaçao = (a,b) => a%b;
// const conversodefahrenheit = (c) => (c * 9) / 5 + 32;


// let c = soma1(15,5);
// let d = soma1(17,5);
// console.log(a, b);
// console.log(c, d);


//ATVD 01
// function saudarCliente(nome){
//     return(`Ola Seja bem vindo ${nome}`);
// }
// alert (saudarCliente(prompt("Digite seu nome: ")));

//ATVD 02
// function calculoBolo(peso, valorDoQuilo){
    
//     return valorDoQuilo*peso;
// }
// let peso = parseFloat(prompt("Digite o peso."));
// let preçoDoquilo = 50;
// let total = calculoBolo(preçoDoquilo,peso);

// alert(`O valor total é igual: ${total.toFixed(2)}`);

//ATVD03
// const conversorGk = (vl1) => vl1/1000; 
// // let conv = conversorGk(1500);
// // console.log(conv);
// let conv = conversorGk(parseFloat(prompt("Digite o Valor em gramas")));
// alert("o valor em kg =" + conv.toFixed(1));

//Atvd04
// function verificadorDeEstoque(quantidadeAtual,quantidadeMinima){
//     if (quantidadeAtual < quantidadeMinima){
//         return ("Nescessario repor estoque");
//     }else{
//         return ("Estoque ok");
//     }
    
// }
// let verif = verificadorDeEstoque(10000,5000);
// console.log(verif);
// let  quantidadeAtual = parseInt(prompt("Digite a quantidade Atual: "));
// let  quantidadeMinima = parseInt(prompt("Digite a quantidade Minima: "));
// let verif = verificadorDeEstoque(quantidadeAtual,quantidadeMinima);
// alert(verif);

//ATVD05

// const dF = (vl) => vl*10/100;
// // let vl = dF(5000);
// // console.log(vl);
// let vl = dF(parseFloat(prompt("Digite o valor.")));
// alert(`O valor do desconto é igual a: ${vl}`);

//ATVD06 

// const vP = (num) => num % 2 == 0 ;
// // let num = vP(4);
// // console.log(num);

// let num = vP(parseInt(prompt("Digite um numero para a verificação:")));
// alert(`Verificamos que o numero  é : ${num}`);

//ATVD07
// const calcAr = (b,al) => b*al/2;
// // let calc = calcAr(3, 7);
// // console.log(calc);
// let b = parseInt(prompt("Digite a Base do triangulo. "));
// let al = parseInt(prompt("Digite a Altura do triangulo. "));
// let calc = calcAr(b,al);
// alert("A Area do seu triangulo é igual a : " +calc);

//ATVD08
// const fTxt = (txt) => txt.toUpperCase();
// // let txt = fTxt("jaguço");
// // console.log(txt);
// let txt = fTxt(prompt("Digite uma String. "));
// alert(txt);


