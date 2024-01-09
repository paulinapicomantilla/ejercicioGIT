/*
Utiliza JavaScript para realizar las operaciones necesarias para calcular el promedio de notas,
 verificar el rango válido de las notas y mostrar el mensaje correspondiente según el resultado,
  vamos a tomar en cuenta las instrucciones del ejercicio 1, del cual se realizó diagrama de flujo.

Desarrolla un programa que calcule el promedio de tres notas ingresadas por el usuario,
 solicitando ta12
5
 
 15mbién el nombre del alumno y la materia. Además, el programa debe verificar
  si las notas ingresadas se encuentran dentro del rango válido (por ejemplo, de 0 a 10).
   Una vez calculado el promedio de las tres notas, el programa debe evaluar si dicho promedio es mayor o igual a 7.

Si el promedio es mayor o igual a 7, el programa imprimirá: 'Nombre del alumno, 
¡felicidades! Has aprobado con un promedio de [indicar promedio].' En caso de que el
 promedio sea menor a 7, el programa imprimirá: 'Nombre del alumno, gracias por tu
  esfuerzo. Nos vemos pronto en clase. El promedio obtenido es [indicar promedio].'

*/ 
//let varNota1 = Number(prompt('Ingrese la primera nota'));
//let varNota2 = Number(prompt('Ingrese la segunda nota'));
//let varNota3 = Number(prompt('Ingrese la tercera nota'));
let varPromedio;
let varNombre =  String(prompt('Ingrese el nombre'));
varNombre=varNombre.toUpperCase();
let varMateria = String(prompt('Ingrese la materia'));
varMateria=varMateria.toUpperCase();


let varNota1 = Number(prompt('Ingrese la primera nota con un rango válido de 0 a 10'));
while (!(varNota1>=0 && varNota1<=10)) {
    console.log(`${varNota1} no tiene un rango válido de nota`);
    varNota1 = Number(prompt('Ingrese la primera nota con un rango válido de 0 a 10'));
}
console.log(`${varNota1} tiene un rango válido de nota`);


let varNota2 = Number(prompt('Ingrese la segunda nota con un rango válido de 0 a 10'));
while (!(varNota2>=0 && varNota2<=10)) {
    console.log(`${varNota2} no tiene un rango válido de nota`);
    varNota2 = Number(prompt('Ingrese la segunda nota con un rango válido de 0 a 10'));
}
console.log(`${varNota2} tiene un rango válido de nota`);

let varNota3 = Number(prompt('Ingrese la tercera nota con un rango válido de 0 a 10'));
while (!(varNota3>=0 && varNota3<=10)) {
    console.log(`${varNota3} no tiene un rango válido de nota`);
    varNota3 = Number(prompt('Ingrese la tercera nota con un rango válido de 0 a 10'));
}
console.log(`${varNota3} tiene un rango válido de nota`);

varPromedio=(varNota1+varNota2+varNota3)/3;

if(varPromedio>=7){
console.log(`${varNombre} felicidades! Has aprobado ${varMateria} con un promedio de ${varPromedio}`);
}else{
    console.log(`${varNombre}, gracias por tu esfuerzo. Nos vemos pronto en clase de ${varMateria} . El promedio
    obtenido es ${varPromedio}`);
}

/*
if(varNota1>0 && varNota1<=10){
    console.log(`${varNota1} tiene un rango válido de nota`);
}else{
    console.log(`${varNota1} no tiene un rango válido de nota`);
    varNota1 = Number(prompt('Ingrese la primera nota'));
}

if(varNota2>0 && varNota2<=10){

    console.log(`${varNota2} tiene un rango válido de nota`);

}else{
    console.log(`${varNota2} no tiene un rango válido de nota`);
    varNota2= Number(prompt('Ingrese la segunda nota'));
}

if(varNota3>0 && varNota3<=10){

    console.log(`${varNota3} tiene un rango válido de nota`);

}else{
    console.log(`${varNota3} no tiene un rango válido de nota`);
    varNota3= Number(prompt('Ingrese la tercera nota'));
}
*/
