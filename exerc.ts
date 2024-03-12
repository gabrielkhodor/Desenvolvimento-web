namespace exerc.ts{

//Faça uma função que substitua as vogais de um array por *

/*
let nomes:string [] =["gabriel", "Daniel","Rafael","Miguel"]


    for (let i:number =0 ;i < nomes.length;i++ )
        if (nomes[i] == "a") 
*/

//modo junior

let vogais: string[] = ["gabriel", "Daniel","Rafael","Miguel"]
//let vogais: string[] = ["a","G","e","C","o","i"]; funciona para os dois tipos de arquivos
function trocaVogais(vetor:string[]){
 for (let i:number = 0;i < vetor.length;i++)
 {
    if (vetor[i] == "a" || vetor [i] == "e" || vetor[i] == "i"
    || vetor[i] == "o" || vetor[i] == "u" || vetor[i] == "A" ||
    vetor[i] == "E" || vetor[i] == "I" || vetor[i] == "O" || vetor[i] == "U" )
    {
        vetor[i] = "*"
    }
 }

return vetor
}

//
function trocaVogais1(vetor:string[]):string[]{
    return vetor.map(char => char.replace (/[aeiou]/gi,"*"))


}
console.log(trocaVogais1(vogais));







}//fim