/*

Criar um programa que calcule o valor de uma viagem

Tendo 3 variaveis.
1.Preço do combustivel;
2.Gasto medio de combustivel por Kn;
3.Distancia da Viagem em KM.
*/


const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distancia = 100;

const litrosGastos = distancia / kmPorLitro;
const valorGasto = litrosGastos * precoCombustivel;

console.log(valorGasto);