let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]

//EJERCICIO 1 - Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos cuyo año de creación sea mayor a 1800.

function ordenarPorAnio(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
            if (arr[i].creacion > 1800) {
                array.push(arr[i]);
            }
        
    }
    return array  
}
//console.log(ordenarPorAnio(cuadros));


//EJERCICIO 2 - Realizar una función que reciba por parámetro al arreglo del ejercicio 1 y mediante el algoritmo Bubble Sort ordene a cada objeto de forma alfabética (de la A a la Z) según el nombre de cada cuadro. 


function ordenar(input){
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length -1; j++) {
            if(input[j].nombre > input[j+1].nombre){
                let aux = input[j];
                input[j] = input[j+1];
                input[j+1] = aux;
            }
        }
    }
}
ordenar(cuadros);
//console.log(cuadros);


//EJERCICIO 3 - 


let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

// Realizar una función que retorne la suma entre todos los elementos de la fila 0.

function sumaFila(matriz){
    let suma = 0;
    for (let index = 0; index < matriz.length; index++) {
        suma += matriz[0][index];  
    }
    return suma;
} 
//console.log(sumaFila(matriz));



// Realizar una función que retorne la multiplicación de todos los elementos que sean múltiplos de 3.


function multiplicarMultiplos(mat){
    let acumulador = matriz[0][0];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(matriz[i][j] % 3 == 0){
                acumulador *= matriz[i][j];
            }
        }
    }
    return 'El total de los valores es: ' + acumulador;
}
//console.log(multiplicarMultiplos(matriz));
