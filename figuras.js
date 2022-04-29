const pi = Math.PI

// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado*4
}

function areaCuadrado(lado){
    return lado * lado
}

// Código del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura)/2 
}
//calculo circulo
function diametroCirculo(radio){
    return radio*2
}
// const diametroCirculo = radioCirculo * 2
// console.log(`el diametro del circulo es: ${diametroCirculo}`)
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


function calcularPerimetroTriangulo(){
    const base = Number((document.getElementById("inputTriangulo-base")).value)
    const lado1 = Number((document.getElementById("inputTriangulo-lado1")).value)
    const lado2 = Number((document.getElementById("inputTriangulo-lado2")).value)
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const base = Number((document.getElementById("inputTriangulo-base")).value)
    const lado1 = Number((document.getElementById("inputTriangulo-lado1")).value)
    const lado2 = Number((document.getElementById("inputTriangulo-lado2")).value)
    let altura;
    let area;

    if (lado1 === lado2){
        if(lado1 === base){
            //triangulo equilatero
            area = (lado1**2)*0.43301270 
        }else{
            //triangulo isoseles
            const altura = Math.sqrt(lado1**2 - base**2/ 4)
            area = areaTriangulo(base, altura)
        }
        alert(area)
    }else{
        alert("no soy tan inteligente para decifrar esta :(")
    }
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo").value
    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo").value
    const area = areaCirculo(radio)
    alert(area)
}