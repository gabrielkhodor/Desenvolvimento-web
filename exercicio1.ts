namespace exercicio1 {

    //crie um array com 4 objetos, cada um representa um livro com as propriedades
    //TUTULO, AUTOR e ANO, .Em seguida use o metodo map(), para 
    // criar um novo array (string) contendo apenas os titulos.
    
    type Livro = {
        titulo: string,
        autor: string,
        ano: number



    }

    

     let Livros:Livro[] 
     Livros=[{
        titulo:"it a coisa",
        autor: "Stephen King",
        ano: 1986

    },
    { 
        titulo:"O iluminado",
        autor: "Stephen King",
        ano:1977
    },

    {

        titulo:"Carrie a estranha",
        autor:"Stephen King",
        ano:1974
    },

    {

        titulo:"Cemitério Maldito",
        autor:"Stephen King",
        ano:1983


    }]

    
    let TitulosLivros: string[]
    TitulosLivros = Livros.map(function(livro:Livro){

        return livro.titulo;
    })
    console.log("Títulos:")
    console.log(TitulosLivros);
    





}