var rows = 10;
var cols = 10;
var squareSize =50;

var tabuleiro = document.getElementById("tabuleiro");

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

    //     var cord = document.createElement("p");             //Vai criar um texto pra cada quadrado
    //     tabuleiro.appendChild(cord);
        
    //     cord.id = 'P' +j+i;                                 // Vai dar um nome pra cada texto de coordenada

    //    //var texto_pos_top = j*squareSize;
    //    //var texto_pos_left = i*squareSize;

    //     cord.style.top = pos_top + 'px';                   // Vai criar o CSS do texto de coordenada, posição e tamanho.
    //     cord.style.left = pos_left + 'px';
    //     cord.style.width = '50px'
    //     cord.style.height= '50px'

    //     var element = document.getElementById(cord.id);     //Vai escrever no quadrado da coordenada
    //     var text = document.createTextNode(cord.id);
        
    //     element.appendChild(text);
    }
}