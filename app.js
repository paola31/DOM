// let elemento = document;
// elemento = document.head;
// console.log(elemento);

// let elementoE = document.styleSheets;
// console.log(elementoE);

// let elementById = document.getElementById(tituloDOM);
// console.log(tituloDOM);

// let parrafo  = document.getElementById(parrafoDOM);
// console.log(parrafo);


// let titulo1 = document.getElementById("h1");
// titulo1.innerHTML="Javascript";
//
// let titulo2 = document.getElementById("h2");
// titulo2.innerHTML="JAVA";

// let elementoClase = document.getElementsByClassName("lista");
// console.log(elementoClase);

// let elementoTag = document.getElementsByTagName("h2");
// console.log(elementoTag)

// let elementoQ = document.querySelector("ul"); // hace referencia a las clases y a los ID,
// console.log(elementoQ.childElementCount); // cuantos elementos hijos tiene el elemento padre
// console.log(elementoQ.children); // retornar el hijo
// console.log(elementoQ.children[1]); //para mostrar la posicion
// console.log(elementoQ.firstChild);
// console.log(elementoQ.lastElementChild);
// let elementoClase = document.querySelector("#listaEditores");// cuando se coloco puto se hace referencia a la clase y con el # se hace referencia al id, por que es el query selector
// console.log(elementoClase);

// let elementosP = document.getElementsByTagNameNS('p'); // recorre el elemento p
// console.log(elementosP.length);
// for (let i=0; i< elementosP.length; i++)
// {
//     console.log(elementosP[i].textContent);
// }

// let opID = document.getElementById("p1");
//
// opID.style.background = "blue";
// opID.style.color = "red";
// opID.style.borderRadius = "8px";
// opID.style.width = "250px";
// opID.style.height = "20px";


// function Verfecha()
// {
//     let fec = document.getElementById("resultado");
//     fec.innerHTML = Date();
// }
//
// function quitarFecha()
// {
//     let Qfecha =document.getElementById("resultado");
//     Qfecha.innerHTML = "Ya no se ve la fecha";
// }


function temperatura()
{
    let numero = parseFloat(document.getElementById("dato1").value);
    let calculo = numero-273.5;
    let  res1 = document.getElementById("res");
    res1.innerHTML = ("Resultado: " +calculo);
    alert("La conversion es: " + calculo);

}