// principais estruturas de rep
// for = para(para saber quantas vzs o bloco deve ser executado)
//while = if
//do...while = faça enquanto (ser executado pelo menos uma vez independente da condiçao)
// break = parar o codigo.
//continue = escolher entre um indice e outro./ignorar
//foreach = é usado para percorrer arrays.
//EX:
// for ( let i = 0 ; i < 5; i++){
//     // if (i==3 || i ==4){
//     //     continue;
//     // }
//     if (i == 2){
//         continue;
//     }
//     console.log(`Valor de i: ${i}`);
// }

// let op = 0;
// while (op == 0){
//     console.log("baguio doido");
//     op = 2;
// }    
// // 
// do{
//     console.log("baguio doido2")
// } while (op==0);

// for + switch case.
// let i ;
// for (i = 2 ; i <= 2 ; i++){
//     switch(i){
//         case 1:{
//             console.log("CASO 1");
//             break;
//         }
//         case 2:{
//             console.log("CASO 2");
//             break;
//         }
//         default:{
//             console.log("PADRAO");
//             break;
//         }
//     }
// }

// for + if

// let i;
// for (i = 0; i <= 3 ; i++){
//     if (i == 0) continue;
//     if (i == 1){
//         console.log("i é igual a 1.");
//     }else if (i == 2){
//         console.log("i é igual a 2.");
//     }else {
//         console.log("i é 0 ou 3 ou +.");
//     }
// }
//do while EX:
// let depen = 10;
// do{
//     let j == 00;
//     j+=235;
//     if( j)

// }

//ATVD1
// for (let num = 1; num <=20; num++){
//     // if (num == 20){
//     //     break;
//     // }
    
//     console.log(num);
// }

//ATVD2
// for (let i = 10; i>=1; --i){
//     console.log(i);
// } 

//ATVD3
// for (let i = 1; i <=15; i ++){
//     if (i % 2 ==0)
//         continue;{
//         console.log(i);
//     }
    
// }

//ATVD4
// let num = 7;
// for (let i = 1; i <=10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//ATVD05
// let resul = 0; 
// for (let i = 1 ; i <= 10; i++){
//     resul +=i;    
//     console.log(resul);
// }

// console.log(resul);

//ATVD06
// 

//ATVD07
// for (let i = 0; i <50; i ++){
//     if (i % 5 ==0){
//         console.log(i);
//     }
    
// }

//ATVD08
// let result = 0;
// for (let i = 1; i <=20; i++){
//     if (i % 2 ==1)
//         continue;
//     result +=i;
// }
// console.log(result);

//ATVD09 

// for (let i =1; i <=10; i++){
//     console.log(`${i} ao quadrado é = ${i**2}`);
// }
//ATVD10
// let linha = "";
// for(let i = 0; i <10; i++){
//     linha+="*";
    
// }
// console.log(linha);


//ATVD01 while
    
// let cont = 0;
// while (cont <10){
//     console.log("Repetição " + cont);
//     cont++;
// }
// let cont =0;
// while(cont>=0){
//     if(cont === 11){
//         break;
//     }
//     console.log(cont);   
//     ++cont;
// }


//ATVD02 while

// let num = 100;
// while (num < 100){
//     console.log("digite o numero mais uma vez");
//     break;
// }while (num > 100){
//     continue;
// }


    //ATVD03
// let conometro = 10;
// while (conometro  >= 0){
//     console.log(conometro);
//     conometro--;


// }
// console.log("lançar.");



// let tempo = 11;
// while(tempo >0){
//     --tempo;
    
//     if(tempo === 0 ){
//         console.log("lançar!");
//         break;
//     }
//     console.log(tempo);
// }

    


//ATVD04
// let media = 0;
// while (true){
// let num1 = 10;
// let num2 = 14;
// let num3 = 12;
// let num4 = 100;
// let num5 = 45;


// media = (num1 + num2 +num3 +num4+ num5)/2;
// break;

// }
// console.log(media);

//ATVD 05

// let num = 51;
// while(num % 7 !== 0){
    
//     num++; 
// }
// console.log("primeiro numero multiplo de 7 maior que 50 é: " + num);

// let cont = 0;
// while((cont *7)<50){
//     ++cont;
// }
// console.log(cont);

//ATVD 06

// let i = 0;
// while(i!==5){
//    i = Math.floor(Math.random()*10)+1;
//    console.log(i);
// }



//ATVD07
// let cont = 1;
// let soma = 0;
// while(soma <=50){
//     soma+=cont;
//     ++cont
//     co-nsole.log(`Adicionando ${cont}, soma atual: ${soma}`);
// }
// console.log("Valor total: " + soma);


//ATVD08
// let i = 1;
// while(i <=1000){
//     console.log(i);
//     i *=2;
//      }
     
//ATVD09
// let i =1;
// while (i<16){
    
//     console.log(i);
//     i+=2;
// }

//ATVD10
// let cond = false;
// while(cond){
//     console.log("Ola mundo. ");
//     cond = true;
// }

//ATVD01 dowhile

// let senha = parseInt(prompt ("Di"));
// do{
//     if(senha !== "123"){
//         console.log("digite a senha mais uma vez.");
        
//     }

// }while (senha !== "123"){
//     console.log("senha correta ");
    

// }

//interaçao com usuario 

//prompt =caixa de dialgo para usuario insira um valor, retornando com o valor que usuario colocou como uma(string)
//  ou null (nulo/vazio) caso a interaçao seja cancelada.

// alert = caixa de dialogo de informativo não retorna nada. apenas informativo para usuario.

//confirm exibe pergunta com dois botoes ok para confirmar e cancelar para encerrar.

// defer = conectar com html sem dar godé.

// CASTING(conversão)

// o casting é o processo de transformar um valor de um tipo de dado para outro. String 10 no number 10.
//Number(): Metodo mais direto. converte o valor mantendo decimais se n conseguir converter retorna NAN.
//Parselnt(): converte para um inteiro (descarta decimais). Ultil para converter  "10px" em 10.
//parseFloat(): converte para numero com ponto flutuante(decimais).
//String(): converte para texto
//.to string() um metodo que pode ser chamado diretamente na variavel.


//EX:

// let num = parseInt(prompt("Digite um numero."));
// while(num <100 || isNaN(num)){
//     alert("Numero invalido");
//     num = parseInt(prompt("Digite um numero."));
// }
// alert("ok gostoso.");

// let time = 10;
// let start = confirm("Deseja iniciar o conometro?");
// while(start && time > 0){
//     alert(`tempo : ${time}`);
//     --time;
//     if (time == 0 ){
//         alert("lançar. ");
//     }
// }



// let continuar = true
// while (continuar) {
//     let c = parseFloat(prompt("Digite a temperatura em °C: "));    
//     let f = (c*9) /5 +32;
//     alert("A temperatura em Faherenheit é : " + f);
//     continuar = confirm("Deseja inserir uma nova temp? ");
// }

// let st = prompt("Digite um texto: ");
//     for (let i = 0; i <st.length; i++){
//         // console.log(st[i]);
//         document.writeln(st[i] + "<br>");
//     }

//ATVD01 LOGICA COM INTERAÇAO DE USUARIO

// let nota1 = parseFloat(prompt("Digite a nota 1"));
// let nota2 = parseFloat(prompt("Digite a nota 2"));
// let nota3 = parseFloat(prompt("Digite a nota 3"));
// let nota4 = parseFloat(prompt("Digite a nota 4"));
// let mediaAri = (nota1 + nota2 + nota3 + nota4)/4 ;

// alert("sua media é igual: " + mediaAri);


//ATVD03

// let altura = parseFloat(prompt("Digite sua Altura"));
// let peso = parseFloat(prompt("Digite sua Peso"));
// let imc = peso/altura**2;
// alert(`Seu Imc é : ${imc.toFixed(2)}`);

//ATVD04

// let num = parseInt(prompt("Digite um numero: "));
// if (num <= 0){
//     alert(`O numero ${num} é menor ou igual a 0 `);
// }else{
//     alert(`O numero ${num} é maior que 0 `);
// }


// //ATVD05
//  let saldo = 10000; //parseFloat(prompt("Digite o valor do saldo: "));
// let saque = parseInt(prompt("Digite o valor do saque: "));
// if (saldo < saque){
//     alert("Vc não tem saldo suficiente para o saque.");

// }else{
//     alert("Vc tem saldo suficiente para o saque.");
// }

//ATVD06
//  let usuario = prompt("Digite o usuario: ");
//  let senha = prompt("Digite a senha: ");
// if(usuario === "Admin" && senha === "1234"){
//     alert("login Aceito");
// }else{
//     alert("Login Recusado");
// }
 
//ATVD07
// let diasemana = prompt("Digite o dia da semana");
// if(diasemana === "sabado" || diasemana === "domingo"){
//     alert(`${diasemana} é fim de semana`);
// }else{
//     alert(`${diasemana} Não é final de semana`);
// }

//ATVD08

// let idadedog = parseInt(prompt("Digite a idade do dog: "));
// let conversao = idadedog*7;
// alert

// (`Um cão com ${idadedog} anos de idade é equivalente a ${conversao} anos de idade humana. `);

//ATVD09

// let dia = parseInt(prompt("Digite um numero correspondente a o dia da semana: "));
// switch (dia){
//     case 1:{
//         alert("Domingo");
//         break;
//     }
//     case 2:{
//         alert("Segunda");

//         break;
//     }
//     case 3:{
//         alert("Terça");
//         break;
//     }
//     case 4:{
//         alert("Quarta");
//         break;
//     }
//     case 5:{
//         alert("Quinta");
//         break;
//     }
//     case 6:{
//         alert("Sexta");
//         break;
//     }
//     case 7:{
//         alert("Sabado");
//         break;
//     }default:{
//         alert("Não é um dia da semana. ");

//     }
// }

//ATVD10
// let meses = prompt("Digite um mes do ano");
// switch (meses){
//     case "janeiro":
//     case "Fevereiro":
//     case "Março":{
//         alert("A estação refente a esse mes é o Verão");
//         break;
//     }
    
//     case "Abril":
//     case "Maio":
//     case "Junho":{
//         alert("A estação refente a esse mes é o Outono");
//         break;
//     }
//     case "Julho":
//     case "Agosto":
//     case "Setembto":{
//         alert("A estação refente a esse mes é o Inverno");
//         break;
//     }
    
//     case "Outubro":
//     case "Novembro":
//     case "Dezembro":{
//         alert("A estação refente a esse mes é o Primavera");
//         break;
    
//     }default:{
//         alert("Nao identificado.");
//     }
// }

//ATVD11
// let num1 = parseFloat(prompt("Digite um numero: "));
// let num2 = parseFloat(prompt("Digite um numero: "));
// let operaçao = "/" ;
//             switch(operaçao){
//     case "+":{
//         alert(num1+num2);
//         break;
//     }
//     case "-":{
//         alert(num1-num2);
//         break;
//     }
//     case "*":{
//         alert(num1*num2);
//         break;
//     }
//     case "/":{
//         alert(num1/num2);
//         break;
//     }default:{
//         alert("operação n identificada. ");
//     }
// }


//ATVD12
// let nota = prompt("Digite sua nota. ");
// switch (nota){
//     case "A":{
//         alert("Excelente.");
//         break;
//     }
//     case "B":{
//         alert("Bom.");
//         break;
//     }
//     case "C":{
//         alert("Regular.");
//         break;
//     }
//     case "D":{
//         alert("Ruim.");
//         break;
//     }
//     case "F":{
//         alert("Reprovado.");
//         break;
//     }default:{
//         alert("Nota não identificada.")
//         break;
//     }
// }


//ATVD13
// let plano = prompt("Digite qual plano vc deseja. ");
// switch(plano){
//     case "Bronze"&&"bronze":{
//         alert("Os beneficio do plano Bronze são: Custo beneficio, Disponibilidade de 1 tela, Resolução HD");
//         break;
//     }
//     case "Prata"&&"prata":{
//         alert("Os beneficio do plano Prata são: Disponibilidade de 2 a 3 telas, sem anuncios, Resolução full HD");
//         break;
//     }
//     case "Ouro"&&"ouro":{
//         alert("Os beneficio do plano Ouro são: Disponibilidade até 5 tela, sem anuncios, Resolução 4k, Baixar offline.");
//         break;
//     }default:{
//         alert("Plano não identificado.");
//     }
// }

//ATVD14
// let cargo = prompt("Digite seu cargo. ");
// switch (cargo){
//     case "Admin" &&"admin":{
//         alert("Olá Admin, Vc tem Ascesso total ao sistema. ");
//         break;
//     }
//     case "Editor" &&"editor":{
//         alert("Olá Editor, Vc tem ascesso a Edição de pastas no sistema. ");
//         break;
//     }
//     case "Visitante" && "visitante  ":{
//         alert("Olá Visitante, Vc pode Vizualizar superficialmente ao nosso sistema . ");
//         break;
//     }
//     default:{
//         alert("Cargo n identificado");
//         break;
//     }
// }

//ATVD 15
// let soma = 0 ;
// for( let i = 1; i <=5; i++){
//     let nota = parseFloat(prompt("Digite sua nota " + i + ":"))
//     soma += nota;
// }
// let media = soma /5;
// alert("A media das nota é igual a: " + media);


