const MaxSubs = 1;
const TamMapa = {
    altura: 10,
    largura: 10
};
const qtdePortaAviao = 1;
const portaAvTam = 5;
const qtdeEncouracado = 1;
const encouracadoTam = 4;
const qtdeCruzador = 1;
const cruzadorTam = 3;
const qtdeDestroier = 2;
const destroierTam = 2;
const qtdeSubs = 2;
const subTam = 1;

const corAgua = 'rgb(0,255,255)';
const corPortaAvioes = 'rgb(100,100,100)'
const corEncouracado = 'rgb(140,140,0)'
const corCruzador = 'rgb(190,0,190)'
const corDestroier = 'rgb(0,0,0)'
const corSub = 'rgb(0,140,0)'
const corErro = 'rgba(255,0,0)'


function Gabarito(params) {
    
}

if (typeof Gabarito.mapa === "undefined") {
    Gabarito.mapa = [
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a','a','a']
    
    ] 
}



var rows = 10;
var cols = 10;
var squareSize =50;
var torpedos = 40;                                           // Cria o número de tiros
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
        square.style.background = corAgua;
    }

}

setMapa();

var gabarito = Gabarito.mapa;                                              // Cria uma matriz "gabarito" de 10x10 equivalente ao tamanho do tabuleiro do jogo
// [
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n'],
//     ['a','a','a','a','a','a','a','a','a','n']

// ] 

 var tabuleiroPessoal = gabarito;                /* Cria uma cópia do gabaraito para ser alterada pelos tiros do usuário. Tomar cuidado com a variável "tabuleiro" que serve para pegar o elemento tabuleiro do HTML */

 tabuleiro.addEventListener("click", atirar, false);     //Cria o clique no tabuleiro do HTML//



 function atirar(e){
    
        if (pontos === calcularPontosDisponiveis()){
        
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
        
            e.target.style.background = corErro;
            tabuleiroPessoal[row][col] = "e";           //e = erro//
        }

        else if(tabuleiroPessoal[row][col]=='h' ||tabuleiroPessoal[row][col]=='e'){
    
            alert("Você já atirou aqui, pare de gastar suas chances");
            torpedos--;
        } 

        else 
        // if(tabuleiroPessoal[row][col].charAt(0) ==='s')
        {        //n = navio s = sub
            switch (tabuleiroPessoal[row][col].charAt(0)) {
                case "p":
                    e.target.style.background = corPortaAvioes;
                    tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
                    pontos ++;
                    
                break;
        
                case "e":
                    e.target.style.background = corEncouracado;
                    tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
                    pontos ++;
                
                break;
        
                case "c":
                    e.target.style.background = corCruzador;
                    tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
                    pontos ++;
                
                break;
        
                case "d":
                    e.target.style.background = corDestroier;
                    tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
                    pontos ++;
                
                break;
        
                case "s":
                    e.target.style.background = corSub;
                    tabuleiroPessoal[row][col] = "h";       // h = hit(acerto)
                    pontos ++;
                
                break;
        
                default:
                break;
            }

            if(pontos === calcularPontosDisponiveis()){    // O numero de partes de navios

                alert("Você destruiu todos os navios inimigos. Parabéns, você ganhou!")
            }
        }
    }
    

    e.stopPropagation();
}

function calcularPontosDisponiveis(){

    let pontosPA = qtdePortaAviao * portaAvTam;
    let pontosEN = qtdeEncouracado * encouracadoTam;
    let pontosCR = qtdeCruzador * cruzadorTam;
    let pontosDE = qtdeDestroier * destroierTam;
    let pontosSU = qtdeSubs * subTam;

    return pontosPA + pontosEN + pontosCR + pontosDE + pontosSU;
}

function setMapa() {
    for (let index = 0; index < qtdePortaAviao; index++) {
        deploy(index.toString(), portaAvTam,"p");
    }
    for (let index = 0; index < qtdeEncouracado; index++) {
        deploy(index.toString(), encouracadoTam,"e");
        
    }
    for (let index = 0; index < qtdeCruzador; index++) {
        deploy(index.toString(), cruzadorTam,"c");
        
    }
    for (let index = 0; index < qtdeDestroier; index++) {
        deploy(index.toString(), destroierTam,"d");
        
    }
    for (let index = 0; index < qtdeSubs; index++) {
        deploy(index.toString(), subTam,"s");
        
    }
}

function getPosicaoRandom(){
    
    var posI = Math.floor(Math.random() * TamMapa.altura);
    var posJ = Math.floor(Math.random() * TamMapa.largura);
    const posicao = {
        posI: posI,
        posJ: posJ
    };
    return posicao;
}

function checkEspaco(posicao, direcao, tamanho){
    
    var temEspaco = true;
    switch (direcao) {
        case 0://direita
            var limite =  posicao.posJ + tamanho;
            if(limite >= TamMapa.largura){
                return false;
                
            }
            for(i=0;i<tamanho;i++){
                if(Gabarito.mapa[posicao.posI][posicao.posJ+i] !== "a"){
                    return false;
                }
            }
            break;
    
        case 1://baixo
            var limite =  posicao.posI + tamanho;
            if(limite >= TamMapa.altura){
                return false;
                
            }
            for(i=0;i<tamanho;i++){
                if(Gabarito.mapa[posicao.posI+i][posicao.posJ] !== "a" ){
                    return false;
                }
            }
            break;
    
        case 2://esquerda
            var limite =  posicao.posJ - tamanho;
            if(limite < 0){
                return false;
                
            }
            for(i=0;i<tamanho;i++){
                if(Gabarito.mapa[posicao.posI][posicao.posJ-i] !== "a" ){
                    return false;
                }
            }
            break;
    
        case 3://cima
            var limite =  posicao.posI - tamanho;
            if(limite < 0){
                return false;
                
            }
            for(i=0;i<tamanho;i++){
                if(Gabarito.mapa[posicao.posI-i][posicao.posJ] !== "a" ){
                    return false;
                }
            }
            break;
    
        default:
            var limite =  posicao.posJ + tamanho;
            if(limite >= TamMapa.largura){
                return false;
                
            }
            for(i=0;i<tamanho;i++){
                if(Gabarito.mapa[posicao.posI][posicao.posJ+i] !== "a"){
                    return false;
                }
            }
            break;
    }

    return temEspaco;
}

function deploy(id, tamanho, tipo){
    do {
        var posicao = getPosicaoRandom();
        var direcao = Math.floor(Math.random() * 3);
        var temEspaco = true
        temEspaco = checkEspaco(posicao, direcao, tamanho)
    } while (!temEspaco);

    switch (direcao) {
        case 0:
            for (let index = 0; index < tamanho; index++) {
                Gabarito.mapa[posicao.posI][posicao.posJ + index] = tipo + id;
            }
            break;
        case 1:
            for (let index = 0; index < tamanho; index++) {
                Gabarito.mapa[posicao.posI + index][posicao.posJ] = tipo + id;
            }
            break;
        case 2:
            for (let index = 0; index < tamanho; index++) {
                Gabarito.mapa[posicao.posI][posicao.posJ - index] = tipo + id;
            }
            break;
        case 3:
            for (let index = 0; index < tamanho; index++) {
                Gabarito.mapa[posicao.posI - index][posicao.posJ] = tipo + id;
            }
            break;
        default:
            for (let index = 0; index < tamanho; index++) {
                Gabarito.mapa[posicao.posI][posicao.posJ + index] = tipo + id;
            }
            break;
    }
}

