// indice do vertor inicia sempre em 0
// identificador de vetor = []
// tipagem heterogenia = [numero, String, true/false];
// EX :
// let vet = [1,2,3];
// let vet2 = ["Ariel", "aiai"];
// console.log(vet[2])

//vet.push colocara um indice em ultimo no lugar do vetor
//vet.pop metodo void do vetor, excluirar ultimo indice
//vet unshift colocara um indice no inicio do vetor. 
//vet.shift irar manter o indice e remove o primeiro indice.
//vet.length ira mostrar qiantos indeces tem no vetor
//vet.indexoff mostrará a posciçao do vetor

//ATVD01
// let vet = [1,2,3,4,5,6];
// console.log(vet);

//ATVD02
// let vet = [1,2,3,4,5,6];
// vet.pop();
// console.log(vet);

//ATVD03
// let vet = [1, 2, 3, 4, 5, 6];
// vet.unshift(10);
// console.log(vet);


//ATVDFix01
// let vet = ["azivis", "vermelho", "verde"];
// alert(vet[0]);

//ATVD02
// let vet = ["azivis", " vermelho ", " verde"];
// vet.push("amarelo");
// alert(vet);

//ATVD03
// let vet = ["azivis", " vermelho ", " verde"];
// let nomeRemovido = vet.pop();
// console.log("vetor atual: ",  vet);

// console.log("O nome removido foi: ",  nomeRemovido);

//ATVD04
// let vet = [1,23,32,47,55,64,7,8,9,100];
// console.log(vet.length);

//ATVD05

// let vet = ["byd", "bwm", "mercedes"];
// vet [1]= "toyta";
// alert(vet);

//ATVD06

// let vet = [105,24,37,44,58];
// let primeiroI = vet[0];
// let ultimoI = vet [4];
// let soma = primeiroI + ultimoI;
// console.log(soma);

//ATVD07
// let sovertes = ["morango", "cereja", "chocolate"];
// sovertes.unshift("menta");
// console.log(sovertes);

//ATVD08

// let cidades = ["salvador", "lauro de freitas", "Juazeiro"];
// cidades.shift();
// console.log(cidades);

//ATVD09

// let frutas = ["maçã", "coco","morango", "banana"];
// console.log(frutas.indexOf("banana"));


//ATVD10

// let animais = ["urso", "vaca", "mocó", "jegue"];
// animais.reverse();´




// alert(animais);

//ATVD11
// let idades = [10, 11, 15, 16, 17];
// for (i = 0; i < idades.length; i++){
//     console.log(idades[i]);
// }


//ATVD12

// let preços = [15, 18, 19 ,20];
// let soma = 0;
// for(i = 0; i < preços.length; i++){
//     soma+=preços[i];
    
// }
// console.log(soma);

//ATVD13
// let nomes = ["jagunços", "ohmygood", "ariel", "caixanildo"];
// let contador = 0;
// for (let i = 0; i < nomes.length; i++){
//     if (nomes[i].length == 5){
//         console.log(nomes[i]);
//         contador++;
//     }
// }

//ATVD14

// let numeros = [100, 15, 17, 55, 14,13];
// let limite = 50;
// for(let i = 0; i < numeros.length; i++){
//     if (numeros[i] > limite ){
//         console.log(numeros[i]);
       
        
//     }
    
// }

//ATVD15
// let numeros = [100, 15, 17, 55, 14,13];
// // let maior = Math.max(...numeros);
// // console.log(maior);

// let num = numeros[0];
// for (i = 0; i < numeros.length; i++){
//     if (numeros[i] > num){
//         num = numeros[i];
//     }
// }
// console.log(num);
//ATVD16
// let vetO = [100, 15, 17, 55, 14,13];
// let vet2 = [];
// for (let i = 0; i < vetO.length -1; i++){
//     vet2.push(vetO[i]);
// }
// console.log(vet2);


// let vetO = [100, 15, 17, 55, 14,13];
// let dobro = vetO.map(numero => numero * 2);
// console.log(dobro);
// console.log(vetO);

