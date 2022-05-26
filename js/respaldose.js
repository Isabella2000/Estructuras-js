

function menu_principal() {
    let valor= prompt("\n1.superficie \n2.suma_producto \n3.total \n4.promedio ")
    if (valor==1){
		let a= prompt("Hallar la superficie de un cuadrado conociendo el valor de un lado, ingrese un lado");
        superficie(a)
    }
    if (valor==2){
		alert( "Realizar la carga de dos números enteros por teclado e imprimir su suma y su producto.")
		let num1=(prompt( "ingrese el primer numero"))
	    let num2=(prompt( "ingrese el segundo numero"))
        suma_producto(num1,num2)
    }
    if (valor==3){
		alert( "Realizar la carga de/del precio de un producto y la cantidad a llevar. Mostrar cuánto se debe pagar.")
		let a=(prompt( "ingrese el precio del producto (entero)"))
	    let b=(prompt( "ingrese cantidadde producto a llevar"))
        total(a,b)
    }
    if (valor==4){
		alert( "Realizar un programa que lea cuatro valores numéricos e informe su suma y promedio.")
		let a=(prompt( "ingrese el valor 1"))
		let b=(prompt( "ingrese el valor 2"))
		let c=(prompt( "ingrese el valor 3"))
		let d=(prompt( "ingrese el valor 4"))
        promedio(a,b,c,d)
    }
}
menu_principal()
//________________________________________________________________________________________________

function superficie(a) {
	
	let s=(parseInt(a) * parseInt(a))
	document.write("La supericie del cuadrado es: " + s)
}

function suma_producto ( num1,num2 ) {
	
	let s = (parseInt(num1) + parseInt(num2))
	let p = parseInt(num1) * parseInt(num2)
	document.write( "La suma es: " + s)
	document.write("El producto es: " + p)
} 

function total ( a,b ) {
	
	let t = (parseInt (a) * parseInt (b))
	document.write("El total a pagar es: " + t)
}

function promedio ( a, b, c, d ) {
	
	let su = a + b + c + d
	let pro= su/4
	document.write("La suma es: " + su)
	document.write("El promedio es: " + pro)
}
