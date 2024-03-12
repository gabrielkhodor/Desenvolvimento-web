namespace funcao
{
    function soma(numero1:number, numero2:number):number{
        let result: number = numero1 + numero2
        return result

    }  
 //console.log(soma(numero1:3,numero2:5));
 console.log(soma(3,5));
    function concatenar(texto1:string, texto2 ?:string,separador:string =" "):string{
        if (texto2){
            return texto1 + separador + texto2
        }else{
            return texto1
        }
    }


 let resultado: string = concatenar ("Olá", "Mundo")
 console.log(resultado);
 resultado = concatenar("Ola");
 console.log(resultado);
resultado = concatenar ("Ola","Gabriel"," - ");
console.log(resultado);

    function saudacao(nome?:string):string
    {
        if (nome){
            return `olá ${nome}`;
        }else{
            return "Olá";
        }
    }
 let res = saudacao("G abriel");
console.log(res);

    function multiplicar (numero:number, callback: (resultado:number) => void):void {
        const resultado: number = numero * 2
        callback(resultado);
    };
     multiplicar (4, function(resultado:number){
        console.log(`o resultado é igual: ${resultado}`)
    })

    function dividir(numero:number,callback:(resultado:number) => void){
        const resto: number = numero % 2;
        callback(resto);

    }

    dividir (10,function(resto:number){
        console.log(resto === 0 ? "Par": "Impar");
    })




}