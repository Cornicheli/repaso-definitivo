//                                   <-----------------------------CONDICIONALES-----------------------------> (IF - IF ELSE - ELSE)

// 1- Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

//Metodo Gabi
let documento = Number(prompt('Ingresa Tu Numero de Documento'))
let nombre = (prompt('Nombre y apellido'))
let domicilio =(prompt('Ingrese su Domiciolio'))
alert(documento + ' ' + nombre + ' ' + domicilio )
let confirmar = (prompt('Ingrese si o no, si sus datos son correctos'))

if(confirmar === 'si'){
    let dni = {
        numeroDocumento: documento,
        nombreApellido: nombre,
        localidad: domicilio,
    }
    console.table(dni)
    alert('registro exitoso')
}else{
    alert('vuelva a intentarlo en un mes mas tarde')
}


//Metodo Pili
// let dni = Number(prompt('Ingresa Tu Numero de Documento'))
// let nombre = (prompt('Nombre y apellido'))
// let domicilio = (prompt('Ingrese su Domicilio'))
// let documento = (dni + " " + nombre + " " +  domicilio)
// alert(documento)

// Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.


// 2- Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.


// 3- Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.


// 4- Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.


// 5- Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

// 6-  Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.


// 7- Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.


// 8- Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.


// 9- Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.


// 10- Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.


// 11- Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.


// 12- Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

//                                  <-----------------------------BULCES-----------------------------> (WHILE - DO WHILE - FOR)

// 13- Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).


// 14- Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.


// 15- Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.


// 16- Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Contener mas de 2 divisores el numero ya no es primo.


// 17- Realizar un programa que permita dado un numero, mostrar todos sus divisores.


// 18-. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.


// 19- Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.


// 20- Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array.


// 21- Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.


// 22- Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.


// 23- Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.


// 24-. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.


// 25- Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.


// 26- Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.


// 27- Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.


// 28- Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)