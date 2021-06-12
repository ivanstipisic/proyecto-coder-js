// INFORMACION //
var nombre = "Slam Dunk";{
console.log ("Proyecto de página dedicada a " + nombre);
}

let serie = 101;  
let manga = 23;{
console.log("La serie de anime cuenta con: " + serie + " " + "capitulos " + "y con " + manga + " " + "volúmenes de manga")  
}

const personaje = ['Hanamichi Sakuragi','Kaede Rukawa','Hisahi Mitsui','Ryota Miyagi','Takenori Akagi','Kiminobu Kogure'];
personaje.push('Profesor Ansai', 'Ayako', 'Haruko')
console.log("Nombres de los integrantes de Shohoku: " + personaje)

const preparatoria =['Shohoku', 'Ryonan', 'Shoyo','Kainan']
preparatoria.push('Miuradai', 'Takezato', 'Toyotama', 'Sannoh')
console.log("Cantidad de equipos que se enfrentaron: " + preparatoria.length)
console.log ("Nombres de las otras preparatorias: " + preparatoria)

var num4 = [{
  nombre: 'Takenori Akagi',
  camiseta: 4,
  preparatoria: 'Shohoku',
},
 
{
   nombre: 'Jun Uozumi',
   numero: 4,
   preparatoria: 'Ryonan'
 },
  
 {
    nombre: 'Kenji Fujima',
  numero: 4,
  preparatoria: 'Shoyo'},
  
  {
    nombre: 'Sinchi Maki',
    numero: 4,
    preparatoria: 'Kainan'
  }

]
console.log(num4)


// FIN INFORMACION //

// Clases y Objetos //

class Personaje {
    constructor(nombre, apellido, camiseta) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.camiseta = camiseta;
    }
    saludar () {
      console.log(`Hola, soy ${this.nombre} ${this.apellido} y uso la camiseta ${this.camiseta}`)
    }
};

let persona = new Personaje('Hanamichi', 'Sakuragi', 10);
persona.saludar();

let persona2 = new Personaje ('Kaede', 'Rukawwa', 11);
persona2.saludar();

let persona3 = new Personaje ('Hisahi', 'Mitsui', 14);
persona3.saludar();

let persona4 = new Personaje ('Ryota', 'Miyagi', 7);
persona4.saludar();

let persona5 = new Personaje ('Takenori', 'Akagi', 4);
persona5.saludar();

let persona6 = new Personaje ('Kiminobu', 'Kogure', 5)
persona6.saludar();


// EVENTOS //

var header = document.getElementById("header");
header.addEventListener('mouseenter', function (){
  document.getElementById('header').style.backgroundColor = "#F26D3D";
  
})

header.addEventListener('mouseleave', function () {
  document.getElementById('header').style.backgroundColor = "#F2B33D";
})

var footer = document.getElementById("footer")

footer.addEventListener('mouseenter', function() {
  document.getElementById('footer').style.backgroundColor = "#F26D3D";
  console.log("Se ingresó al footer")
});

footer.addEventListener('mouseleave', function () {
  document.getElementById('footer').style.backgroundColor = "#F2B33D";
  console.log("Se abandonó el footer")

});


// MODAL HANAMICHI SAKURAGI

var modal = document.getElementById("Modal");

var boton = document.getElementById("boton");

var sakuragi = document.getElementById("sakuragi");

var span = document.getElementsByClassName("cerrar")[0];

boton.onclick = function() {
  modal.style.display = "block";

}

sakuragi.onclick = function(){
    modal.style.display = "block";
}

sakuragi.addEventListener('mouseenter', function() {
  console.log("Hanamichi Sakuragi")
})

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  
}
}

// FIN MODAL HANAMICHI SAKURAGI

// MODAL KAEDE RUKAWA

var modal2 = document.getElementById("Modal2");

var rukawa = document.getElementById("rukawa");

var boton2 = document.getElementById("boton2");

var span2 = document.getElementsByClassName("cerrar2")[0];

boton2.onclick = function() {
modal2.style.display = "block";
}

rukawa.onclick = function() {
modal2.style.display = "block";
}

rukawa.addEventListener('mouseenter', function() {
  console.log("Kaede Rukawa")
});

span2.onclick = function() {
modal2.style.display = "none";

}

window.onclick = function(event) {
if (event.target == modal2) {
modal2.style.display = "none";
}

}

// FIN MODAL KAEDE RUKAWA

// MODAL HISAHI MITSUI

var modal3 = document.getElementById("Modal3");

var mitsui = document.getElementById("mitsui");

var boton3 = document.getElementById("boton3");

var span3 = document.getElementsByClassName("cerrar3")[0];

mitsui.onclick = function() {
modal3.style.display = "block";
}

mitsui.addEventListener ('mouseenter', function (){
  console.log("Hisahi Mitsui");
})

boton3.onclick = function() {
modal3.style.display = "block";
}

span3.onclick = function() {
modal3.style.display = "none";

}

window.onclick = function(event) {
if (event.target == modal3) {
modal3.style.display = "none";
}

}
// FIN MODAL HISAHI MITSUI

// MODAL RYOTA MIYAGI

var modal4 = document.getElementById("Modal4");

var ryota = document.getElementById("ryota");

var boton4 = document.getElementById("boton4");

var span4 = document.getElementsByClassName("cerrar4")[0];

ryota.onclick = function () {
modal4.style.display = "block";
}

ryota.addEventListener('mouseenter', function (){
  console.log("Ryota Miyagi")
})

boton4.onclick = function() {
modal4.style.display = "block";
}

span4.onclick = function() {
modal4.style.display = "none";

}

window.onclick = function(event) {
if (event.target == modal4) {
modal4.style.display = "none";
}

}
// FIN MODAL RIOTA MIYAGI

// MODAL TAKENORI AKAGI

var modal5 = document.getElementById("Modal5");

var akagi = document.getElementById("akagi");

var boton5 = document.getElementById("boton5");

var span5 = document.getElementsByClassName("cerrar5")[0];

akagi.onclick = function () {
modal5.style.display = "block";
}

akagi.addEventListener('mouseenter', function () {
  console.log("Takenori Akagi")
})


boton5.onclick = function() {
modal5.style.display = "block";
}

span5.onclick = function() {
modal5.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal5) {
    modal5.style.display = 'none';
    }

}
// FIN MODAL TAKENORI AKAGI

// MODAL KIMINOBU KOGURE

var modal6 = document.getElementById("Modal6");

var kogure = document.getElementById("kogure");

var boton6 = document.getElementById("boton6");

var span6 = document.getElementsByClassName("cerrar6")[0];

kogure.onclick = function(){
modal6.style.display = "block";
}

kogure.addEventListener('mouseenter', function () {
  console.log("Kiminobu Kogure");
})

boton6.onclick = function() {
modal6.style.display = "block";
}

span6.onclick = function() {
modal6.style.display = "none";

}

window.onclick = function(event) {
if (event.target == modal6) {
modal6.style.display = "none";
}
}


// FIN MODAL KIMINOBU KOGURE //