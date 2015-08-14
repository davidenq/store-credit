var fs          = require('fs'),
    file        = "",
    data        = [],
    elementoUno = 0,
    elementoDos = 0;

var contador = 1;
/*Se lee el archivo de pruebas*/
file = fs.readFileSync('./A-small-practice.in', 'utf8');
data = file.split("\n");

for(var k = 1; k <= data[0]; k++ ){
    var posUno=contador;
    var posDos=contador+1;
    var posTres=contador+2;
    contador=contador+3;
    var precios = data[posTres].split(" ");
    var resultado = init(data[posUno], data[posDos], precios);

    console.log("Case #"+k+": "+resultado);
    elementoUno=0;
    elementoDos=0;
}

/*
*
* @Input: credito: Credito recibido por la tienda que servirá para comprar 2 artículos
* @Input: lista: Lista que contiene todos los artículos disponibles
* @Input: preciosArray: contiene todos los precios de cada uno de los productos de la lista.
* @Output: Obtener un string que indique: Caso #n: x, y; donde n es el caso evaluado leido desde el archivo,
* "x" y "y" son las posiciones en el array que contienen los valores que sumados nos da el crédito total.
* @Ejemplo: Desde el archivo se lee
 * (1) 3
 * (2) 100
 * (3) 3
 * (4) 5 75 25
 * (5) 200
 * (6) 7
 * (7) 150 24 79 50 88 345 3
 * (8) 8
 * (9) 8
 * (10) 2 1 9 4 4 56 90 3
 * donde:
 *  (1) indica que hay 3 casos por evaluar
 *  (2), (3) y (4) es el primer caso; donde (2) es el crédito disponible, (3) la cantidad de artículos en la lista
 *  (4) los precios de cada uno de los artículos contenidos en la lista.
 *  De la misma manera es para el segundo caso (5), (6) y (7); y para el tercer caso (8), (9), (10)
 *
 */

function init(credito, lista, preciosArray){

    var valInit    = [];
    valInit.push(preciosArray[0]);
    elementoUno++;
    for(var i = 1; i < lista; i++){
        if(parseInt(valInit[0]) + parseInt(preciosArray[i]) == credito){
            valInit.push(preciosArray[i]);
            elementoDos = i+elementoUno;
        }
    }
    if(valInit.length == 1){
        valInit.splice(0, 1);

        preciosArray.splice(0, 1);
        if(preciosArray.length !=0){
            init(credito, preciosArray.length, preciosArray)
        }
    }
    return (elementoUno + " " + elementoDos);
}
