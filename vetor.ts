namespace vetor{
    let num: number[] = [2,4,6,8];
    let valor: number = num[3];
    console.log(valor);
    for (let i:number = 0; i < num.length ; i++ )//laço de repetição para percorrer o vetor
    {

        console.log([i]);
    }
    let cores: Array<string> = ["vermelho","verde","azul"];
    //let cores: string[] = ["vermelho","verde","azul"]; outro tipo
// outro tipo de valor tipo dicionário, o type é um gerador do nosso tipo
    type Aluno = {
        ra:number,
        nome: string,
        idade: number

    }
    let alunos : Aluno[];
    alunos = [{
        ra: 123456789,
        nome: "Fulano",
        idade: 10
    },
    {
        ra: 321456789,
        nome: "ciclano",
        idade: 91
    }]

    alunos.forEach(function (aluno:Aluno):void{
        console.log("dicionário Alunos")
        console.log(aluno)
    })
    console.log("com map");
    let quadrados: number []
    quadrados = num.map(function (numero:number){
        return numero * numero;
        console.log(quadrados);
    })
    console.log("com for ");
    for (let i: number = 0; i < num.length; i++ )
    {
        quadrados [i] = num[i] * num[i];
        console.log(quadrados);
    }

    let pares: number[];
    pares = num.filter(function (numero: number): boolean{
        return numero % 2 === 0

    })//nivel pleno

    for (let i : number = 0; i < num.length; i++)
    {
        if (num[i] % 2 === 0)
        {
            pares[i] = num[i];
        }

    }//nivel júnior

    num.reduce(function (total: number ,numero: number){//redução
        return total + numero;

    })
    //feito com for
    let total: number = 0
    for (let i = 0; i < num.length;i++)
    {

        total += num[i];
    }






//fim
}