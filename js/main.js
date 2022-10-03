
// console.log("Hola mundo cruel");
// var dia = "Lunes";
// console.log(dia);

// dia = "Martes";
// console.log(dia);

// var mes;
// console.log(mes);

// var vacia = "";
// console.log(vacia)

// var numero = 5;
// console.log(numero);
// console.log(typeof(numero));

// var string = "string";
// console.log(string);
// console.log(typeof(string));

// var boolean = true;
// console.log(boolean);
// console.log(typeof(boolean));

// var hora = 5;
// console.log(hora);

// var numero1= 50;
// var numero2= 73;

// var resultado = numero1 + numero2;

//numero ++;

// console.log(numero);

//console.log("2"-"6");

//var variableOk = 154687654564;

//console.log


//var numero1 = numero1 + 11;

//numero1 +=11;

//var nombre = "Jesus";

//var edad = 26;


//if( nombre == "Jesus"&& (edad== 26)){

    //console.log("Que bien me cae este chico");



//} else{

    //console.log("Ya no me cae bien")

//}

// var edad = 18;
// if (edad >= 18){
//     console.log("Puede pasar");
// }
// else{
//     console.log("No Pasa");
// }


// var coche= "Renault"
// if (coche=="Renault"){
//     console.log("Es un Renault");
// }
// else if (coche== "Seat") {
//     console.log("Es otro coche");
// }



// var mes = "Enero"
// switch (mes){
//     case "Junio":
//         case "Julio":
//             case"Agosto":

//  console.log ("Es verano");
//  break;

//  case "Septiembre":
//     case "Octubre":
//         case "Noviembre":
//             console.log("Es Otoño");
//             break;

//             case "Diciembre":
//                 case "Enero":
//     case "Febrero":
//         console.log("Es Invierno");
//         break;

//         case "Marzo":
//             case "Abril":
//                 case "Mayo":
//                     console.log("Es Primavera");
//                     break;
//                     default: console.log("Eso no es un mes");
//                     break;
//}

// 1.Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
// los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
// para comprobar que funciona.

// var numero1= 10;
// var numero2= 20;

// if (numero2 > numero1){
//  console.log("Numero 2 es mayor");
 
// }
// else if(numero2==numero1){
//     console.log("Son iguales")
// }
// else{
//         console.log("Numero1 es mayor");
//      }
    
        
    //2. Declara un String que contenga tu nombre, después muestra un mensaje de
//bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
//“Bienvenido Fernando”.

// var nombre = "Bea";
// if(nombre == "Bea"){
//     console.log ("Bienvenida Bea");
// }

// else {
//     console.log ("No eres Bienvenido")
// }

//3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
//introducir (recuerda usar prompt).

// var nombre2 = prompt ("Cuál es tu nombre");
// if(nombre2 == "Bea"){
//     console.log ("Bienvenida Bea");
// }

// else {
//     console.log ("No eres Bienvenido")
// }

// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa la
// constante PI.

// var radio= parseInt (prompt( "¿Cuál es el radio del círculo?" ));
// var area= (3.14* (radio**2));
// console.log(area);



// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.

var numero= parseInt(prompt( "¿Qué numero?" ));
if(numero % 2 == 0){
       console.log ("Es par");
 }
    
    else {
         console.log ("Es Inpar");
     }