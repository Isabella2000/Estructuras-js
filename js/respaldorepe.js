console.log("hii");

function alturas (np) {
    
    let i = 0;
    let suma = 0;
    while (i < np) {
        i++;
        var a = parseInt(prompt("Ingrese la altura de una de la persona en centimetros: "));
        suma += a;
    }
    let promedio = suma / np;
    document.write( "El promedio de las personas es: " + promedio);

    console.log(typeof promedio)
    console.log(typeof np)
    console.log(typeof a)
}


function empleados (ne) {
    
    let suma = 0;
    let menos = 0;
    let mas = 0;
    let i = 0;
    while (i < ne) {
        i++;
        var sueldo = parseFloat(prompt("Ingrese el sueldo del/ los empleado/s: "), i);
        suma = suma + sueldo;
        if ((sueldo >= 100) && (sueldo <= 300)) {
             menos = menos + 1;
        } else {
            if (sueldo > 300) {
              mas = mas + 1;
            }
        }
    }
        document.write("El numero de empleados que ganan entre 100 y 300 son: "+menos)
        document.write("El numero de empleados que ganan mas 300 son: "+mas)
        document.write("El importe que gasta la empresa en sueldos del personal: "+suma)

        
    console.log(typeof mas)
    console.log(typeof menos)
    console.log(typeof suma)
}


function multiplo11 ( ) {
    alert("Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc")
    let serie=11;
    let x=1;
    while (x<=500) {
        x =x+1;
        serie = serie+11;
        alert(serie)
        document.write|(serie);
}

console.log(typeof serie)
console.log(typeof x)
}



function multiplo8 () {
    alert("Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.")

    let serie=8;
    let x=1;
    while (x<=62) {
        x =x+1;
        serie = serie+8;
        alert(serie);
        document.write(serie);
        
    }
    console.log(typeof serie)
    console.log(typeof x)
}

function pare (n) {
    let par = 0
    let impar = 0
    let i = 0
    
    while (i < n) {
        i += 1
        var num = prompt("Ingrese el valor: ");
        if (parseInt(num) % 2 == 0) {
            par += 1
        } else {
            impar += 1
        }
    }
    document.write("La cantidad de numeros pares son: " + par);
    document.write("La cantidad de numeros impares son: " + impar);
    
    console.log(typeof par)
    console.log(typeof impar)
    console.log(typeof i)

}


//__________________________________________________________________________________________


function menu_principal() {
    let valor= prompt("\n1.alturas \n2.empleados \n3.multiplo11 \n4.multiplo8 \n5.pare ")
    if (valor==1){
        np = parseInt(prompt("Ingrese el numero de personas"));
        alturas(np);
    }
    if (valor==2){
        ne = parseInt(prompt("Ingrese el numero de empleados: "));
        empleados(ne);
    }
    if (valor==3){
        multiplo11()
    }
    if (valor==4){
        multiplo8()
    }
    if (valor==5){
        let n = prompt("Ingrese Ingrese la cantidad de numeros");
        pare(n)
    }
}

menu_principal()

