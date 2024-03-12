namespace exercicio1

{

//Escreva um programa typescript que imprima todos os numeros primos
//de 1 até 53 usando a função while

let num : number = 2;

while (num <= 53)

{

    let ehprimo: boolean = true;
    let divisor: number = 2;
    while (divisor < num)
    {
        if (num % divisor === 0)
        {
            ehprimo = false;
            break;
        }
        divisor++;

    }
    if (ehprimo = true){
        console.log(num);

    }
    

    num++
}

}

