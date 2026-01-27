// TESTE JS, OPERAÇOES MATEMATICAS

// ATVD1
// let n1 = 60;
// let n2 = 20; 

// console.log("Soma: " + (n1+n2));
// console.log("Adição: " + (n1-n2));
// console.log("Multiplicação: " + (n1*n2));
// console.log("Divisão: " + (n1/n2));
// console.log("Resto: " + (n1%n2));

// ATVD2
// let base = 10;
// let altura = 50;

// console.log("Retangulo: " + (base*altura));

//ATVD3
// let vreal = 1000;
// let txcambio = 5.0;
// let Conversão = vreal/txcambio;

// console.log(Conversão);

// ATVD4
// let n1 = 2;
// let n2 = 3;
// let elevação = n1**n2;

// console.log (elevação);

// ATVD5
// let n1 = 7;
// let n2 = 8;
// let n3 = 9;
// let n4 = 10;
// let qntdn = 4;
// let media = (n1+n2+n3+n4)/qntdn;

// console.log (`A media das notas é: ${media}`);

// //ATVD6
// let c = 11;
// let f = ((c* 9/5)+32);
// console.log (f);
// //ATVD7
// let n1 = 15 ;
// let n2 =  4;

// console.log("Resto é: " + (n1%n2));


// INTERPOLAÇAO NO CODIGO.
// `${Variavel}`
//EX: console.log (`A media das notas é: ${media}`);
                                                                                                                            
//ATVD 8

// let vpd = 1200
// let porc = 0.15
// let desconto = vpd*porc;
// let valordc = vpd-desconto;

// console.log(`O desconto ficou no valor de: R$${desconto}, eo Valor final de: R$${valordc}.`);

// //ATVD9
// let n1 = 40;
// let suc = n1 +1;
// let antc = n1 -1;

// console.log(`O sucessor de ${n1} é : ${suc}, e o Antecessor é : ${antc}.`)

//ATVD10

// let peso = 100.00;
// let altura = 1.76;
// let imc = peso/altura**2;

// console.log(imc);

//ATVD11

// let num =10;
// let num2 =10;
// let resul = num===num2;
// console.log(resul);

//ATVD12

// let idade = 10;
// if (idade >= 18){
//     console.log("Vc está na maior idade.")
// }else{
//     console.log("Vc é de menor.")
// }

//ATVD13

// let a = "Javascript";
// let b = "javascript";
// if(a==b){
//     console.log("sim, os textos são iguais.")
// }else{
//     console.log("não, os textos não são iguais.")
// }

//ATVD14

// let valor = 10;
// if ( valor<= 0){
//     console.log("Sim, o numero é igual ou menor a 0");
// }else{
//    console.log("Não, o numero é maior que 0");
// }

//ATVD15

// let txt = "aril";
// if (txt.length >5){
//     console.log("Sim, é maior que 5: " + txt.length);

// }else{
//     console.log("não, é menor que 5: "+ txt.length);

// }

//ATVD16
// let result1 = 5+5;
// let result2 = 5**2;
// if (result1 == result2){
//     console.log("Sim, os resultados são iguais.");

// }else{
//     console.log("Não, o Resultado não são iguais.");

// }



// //ATVD17
// let saldo = 1000;
// let saque = 5055;
// if (saldo < saque){
//     console.log("Vc não tem saldo suficiente para o saque;");

// }else{
//     console.log("Vc tem saldo suficiente para o saque.");
// }

// //ATVD18
// let txt = typeof true;
// let txt2 = typeof "true";
// if(txt === txt2){
//     console.log(`A variavel ${txt} é igual a variavel "${txt2}".`);
// }else{
//     console.log(`A variavel ${txt} não é igual a variavel "${txt2}".`)
// }

//ATVD19

// let num = 80;
// if(num > 10 && num <=50){
//     console.log(`O numero ${num} está entre os numeros 10 e 50. `);

// }else{
//     console.log(`O numero ${num} não está entre os numeros 10 e 50. `);
// }

//ATVD20

// let usuario = "ralador";
// let senha = "1234";
// if(usuario === "Admin" && senha === "1234"){
//     console.log("Login permitido");
// }else{
//     console.log("Login não permitido");
// }

//ATVD21 

// let idade = 20;
// if(idade >= 18 && idade <=70){
//     console.log(`Vc está apto para votar. `);
// }else{
//     console.log(`Vc não está apto para votar. `);
// }

//ATVD22

// let num = 14;
// if (num % 2 === 0 && num > 0){
//     console.log(`O numero ${num} é par e positivo. `);
// }
// }if(num % 2 === 0 && num < 0){
//     console.log(`O numero ${num} é par e negativo. `);
// }
// if(num % 1 === 0 && num < 0){
//     console.log(`O numero ${num} é impar e negativo. `);
// }else{
//     console.log(`O numero ${num} é impar e positivo. `);
// }

//ATVD23

// let diasemana = "segunda";
// if(diasemana === "sabado"){
//     console.log(`${diasemana} é fim de semana`)
// }else{
//     console.log(`${diasemana} Não é fim de semana`)
// }

// ATVD24
// let estachovendo = true;
// console.log(!estachovendo); 

//ATVD25

// let media = 8;
// let faltas = 4;
// if(media >=7 && faltas < 10 ){
//     console.log("O aluno foi aprovado")
// }else{
//     console.log("O aluno não foi aprovado")
// }

//ATVD26

// let num = 0 ;
// if(num !=0){
//     console.log("true");
// }else{
//     console.log("false");
// }


// //ATVD27
// let a = 5;
// let b = 10;
// let troca = a;
// a = b;
// b = troca; 
// console.log(a);
// console.log(b);

//ATVD 28
// let ld1 = 2;
// let ld2 = 2;
// let ld3 = 5;
// let soma = ld1 + ld2;
// if (soma > ld3){
//     console.log("Sim, a soma é maior que o 3° lado.");
// }else{
//     console.log("Não, a soma é menor que o 3° lado.");
// }

//ATVD29
// let idadedog = 10;
// let conversao = idadedog*7;
// console.log(`Um cão com ${idadedog} anos de idade é equivalente a ${conversao} anos de idade humana. `);

//ATVD30
// let valorCompra = 3000.0;
// let quantidadedeParcelas = 12.0 ;
// let juros  = 0.02;
// let calcJ = valorCompra*juros*quantidadedeParcelas ;
// let calcVj = valorCompra+calcJ;
// let calcvp = calcVj/quantidadedeParcelas;
// //(J=C*i*t)
// console.log(`o Juros ficou no valor de: ${calcJ}, o valor total no valor de: ${calcVj} e valor da parcela: ${calcvp}` );




-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ordem de precedencia: 1° ()|| 2° **|| 3° *,/,%|| 4° +,-||.
// Difereça entre os iguais.
// = (recebe valores)
//== (compara apenas o valor) EX= 5 =="5"(V)
// === (compara o tipo e valor) Ex = 5==="5"(F)
//!= (retorna true caso variaveis sejam diferentes) EX= 5! != "5" = (F)
//!== (retorna true se o valor e tipo sejam diferentes) Ex = 5!== "5" (V)

// EX DO OPERADOR LOGICO ! (não)
// OPERADOR LOGICO ! INVERTE O CODIGO EX: SIM PARA NÂO, VERDADEIRO PARA FALSO, 

// let login = "admin";

// if(!login){
//     console.log("login não permitido. ");
// }
// if(login === "admin"){
//     console.log("login permitido.")
// }
