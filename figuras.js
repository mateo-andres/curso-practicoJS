// Código del cuadrado

function perimetroCuadrado(lado) {
    return lado*4
}

function areaCuadrado(lado){
    return lado * lado
}


// Código del triangulo
console.group("Claculo de triangulo")

const ladoTriangulo1=6
const ladoTriangulo2=6
const baseTriangulo=4
const alturaTriangulo = 5.5

console.log( `Los lados del triangulo miden: ${ladoTriangulo1}cm , ${ladoTriangulo2}cm y la base: ${baseTriangulo}cm` )
console.log(`la altura del triangulo es ${alturaTriangulo}`)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}
// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2 

function areaTriangulo(base, altura){
    return (base * altura)/2 
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo)
// console.log("El area del triangulo es: "+areaTriangulo+"cm^2")

console.groupEnd()

//código del circulo
console.group("Circulo")
// const radioCirculo = 4
// console.log(`el radio del circulo es ${radioCirculo}`)

function diametroCirculo(radio){
    return radio*2
}
// const diametroCirculo = radioCirculo * 2
// console.log(`el diametro del circulo es: ${diametroCirculo}`)
const pi = Math.PI
// console.log(pi)

function perimetroCirculo(radio){
    const diamtero = diametroCirculo(radio)
    return diamtero*pi
}
// const perimetroCirculo = diametroCirculo * pi
// console.log(`el perimetro del circulo es: ${perimetroCirculo}cm`)

function areaCirculo(radio){
    return (radio * radio) * pi
}
// const areaCirculo = (radioCirculo * radioCirculo) * pi
// console.log(`el area del circulo es: ${areaCirculo} cm^a`)

console.groupEnd()

//interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}
