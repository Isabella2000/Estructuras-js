
//_______________________________________________________
//1
function mayo (num1,num2,num3 ) {
    
    if ((num1<10)&&(num2<10)&&(num3<10)) {
        document.write("Todos los numeros son menores que 10 ")
    } else {
    }
}

//2
function algun (num1, num2, num3) {
    
    if ((num1<10)||(num2<10)||(num3<10)) {
        document.write("Alguno de los numeros es menor a 10")
    }
}

//3
function sumapor (num1, num2, num3) {
    if ((num1=num2)&&(num1=num3)) {
        let op=(num1+num2)
		let opi=(op*num3)
        document.write("La suma es: "+op)
        document.write("Su multiplicacion es: "+opi)
    } else {
        document.write("Todos los numeros no son iguales")
    }
}

//4
function señor (sueldo,años ) {
    descuento=sueldo*0.2
    if ((sueldo<500)&&(años>=10)) {
        descuento=sueldo*0.2
		sueldototal=sueldo+descuento
		document.write( "El sueldo total es: " + sueldototal)
    }
    if ((sueldo<500)&&(años<10)) {
        descuento=sueldo*0.5
		sueldototal=sueldo+descuento
		document.write( "El sueldo total es: " + sueldototal)
    }
    if (sueldo>=500) {
        document.write("El sueldo total es: "+ sueldo)
    }
}

//5
function rango (ns) {
    let may=0
	let men=0
	i=1
    while (i<=ns) {
        i=i+1
        var a=parseInt(prompt( "Ingrese el numero: ")), i
        if (i==1) {
            may=a
			men=a
        } else {
            if (a>may) {
                may=a
            }
            if (a<men) {
                men=a
            }
        }
    }
    document.write("El numero menor es: "+men)
    document.write("El numero mayor es: "+may)
}



//_______________________________________________________
// Funciones sin parametros
// sintaxis nombre_funcion(parametros)

function menu_principal() {
    let valor= prompt("\n1.Mayor10 \n2.Algun10 \n3.sumapor \n4.operario \n5.rango ")
    if (valor==1){
        alert("Se ingresan 3 números, si todos los valores ingresados son menores a 10, decir esta")
        let num1=parseInt(prompt( "Ingrese el numero de la primera persona"))
        let num2=parseInt(prompt( "Ingrese el numero de la segunda persona"))
        let num3=parseInt(prompt( "Ingrese el numero de la tercera persona"))
        mayo(num1,num2,num3)
    }

    if (valor==2){
        alert("Se ingresan 3 números, si alguno de los números es menor a diez, decirlo")
        let num1=parseInt(prompt("Escribir el primer numero"))
        let num2=parseInt(prompt("Escribir el segundo numero"))
        let num3=parseInt(prompt("Escribir el tercer numero"))
        algun(num1, num2, num3)
    }

    if (valor==3){
        alert("Si todos los numeros son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero. ")
        let num1=parseInt(prompt("Escribir el primer numero"))
        let num2=parseInt(prompt("Escribir el segundo numero"))
        let num3=parseInt(prompt("Escribir el tercer numero"))
    sumapor(num1, num2, num3)

    }

    if (valor==4){
        alert("De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe: \a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar. \b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %. \c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios. ")
        let sueldo=parseInt(prompt("Ingrese el sueldo: "))
        let años=parseInt(prompt("Ingrese los años de antigüedad: "))
        señor(sueldo,años)
    }

    if (valor==5){
        alert("Se calcula e informe su rango de variación (debe mostrar el mayor y el menor de ellos)")
            let ns=parseInt(prompt("Ingrese los años de antigüedad: "))
        rango(ns)
    }
}
menu_principal()


	
		
