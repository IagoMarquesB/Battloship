var rows = 10;
var cols = 10;
var squareSize =50;
var torpedos = 10;                                           // Cria o número de tiros
var pontos = 0;

var pontuação = document.createElement("h5");
var pontuaçãoTexto = document.createTextNode("Numero de tiros :" + torpedos.toString());
pontuação.appendChild(pontuaçãoTexto);


var tabuleiro = document.getElementById("tabuleiro");

instrucao.appendChild(pontuação)

for (i=0; i<cols; i++)
{
    for (j=0; j<rows; j++)
    {
        var square = document.createElement("div");          //Isso vai criar quadrados em um grid.
        tabuleiro.appendChild(square);

        square.id = 'Q' + j+i;                              //Isso vai dar nome para os quadrados com base nas suas posições.

        var pos_top = j*squareSize;                          // Vai criar as coordenadas do grid
        var pos_left = i*squareSize;

        square.style.top= pos_top + 'px';                   //Vai criar no CSS as coordenas do grid
        square.style.left= pos_left+ "px";

    }

}



var gabarito =                                              // Cria uma matriz "gabarito" de 10x10 equivalente ao tamanho do tabuleiro do jogo
[
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n'],
    ['a','a','a','a','a','a','a','a','a','n']

] 

 var tabuleiroPessoal = gabarito;                /* Cria uma cópia do gabaraito para ser alterada pelos tiros do usuário. Tomar cuidado com a variável "tabuleiro" que serve para pegar o elemento tabuleiro do HTML */

 tabuleiro.addEventListener("click", atirar, false);     //Cria o clique no tabuleiro do HTML//



 function atirar(e){
    
    if (pontos == 10){
        
        alert("Você já destruiu todos os navios inimigos. O jogo acabou!");
        return; 
    }
    else if(torpedos<=0)
    {
        alert("Você gastou todos os seus tiros! você perdeu")
        return;
    }
    else{
        torpedos --;
        pontuação.innerText = "Numero de tiros: " + torpedos;

        if(e.target !== e.currentTarget){
        
            var row = e.target.id.substring(1,2);
            var col = e.target.id.substring(2,3);
        }

        if(tabuleiroPessoal[row][col]=='a'){              //a = não tem navio, só agua//
        
            e.target.style.background = 'grey';
            tabuleiroPessoal[row][col] = "e";           //e = erro//
        }

        else if(tabuleiroPessoal[row][col]=='n'){        //n = navio

            e.target.style.background = 'red'
            tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
            pontos ++;

            if(pontos == 10){    // O numero de partes de navios

                alert("Você destruiu todos os navios inimigos. Parabéns, você ganhou!")
            }
        }

        else if(tabuleiroPessoal[row][col]=='h' ||tabuleiroPessoal[row][col]=='e'){
    
            alert("Você já atirou aqui, pare de gastar suas chances");
            torpedos--;
        } 
    }
    

    e.stopPropagation();
}