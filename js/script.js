/* window.onload = function(){
    console.log('onload');
} */

//Esta funcion hace que inicie un mapa base
function initMap() {

    var mapaBase = { lat: -34.6020549, lng: -58.3818864 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapaBase
      });

}

//Capturo los datos del formulario
//Creo objetos como nuevo punto
//Llamo a la funcion agregarDatos
function capturar() {
    function PuntoDeInteres(name, direction, phone, category, coordinates) {
        this.name = name;
        this.direction = direction;
        this.phone = phone;
        this.category = category;
        this.arrayLatLng = coordinates;
    }
    var nameCapturar = document.getElementById("name").value;
    var direcCapturar = document.getElementById("direction").value;
    var phoneCapturar = document.getElementById("phone").value;
    var categCapturar = document.getElementById("category").value;
    var coordCapturar = document.getElementById("coordinates").value;
    var arrayLatLng = coordCapturar.split(",");
    
    //console.log(arrayLatLng);
    //console.log(nombreCapturar, direcCapturar);

    nuevoPunto = new PuntoDeInteres(nameCapturar, direcCapturar, phoneCapturar, categCapturar, arrayLatLng);
    //console.log(nuevoPunto);
    agregarDatos();
}

//Array donde se almacenan los puntos ingresados en el formulario
var listadoDePuntos = [];


//Con el push agrego el punto recientemente creado en el array listadoDePuntos
//Hago un innerHTML para escribir datos de nombre y direccion del nuevo punto en la tabla
//LLamo a la funcion agregarMarcador
function agregarDatos() {
    listadoDePuntos.push(nuevoPunto);
    //console.log(listadoDePuntos);
    document.getElementById("body").innerHTML += '<tr><td>' + 
                                                    '<div id="'+ nuevoPunto.name + '">' + nuevoPunto.name + '</div>' + '</td><td>' + 
                                                    nuevoPunto.direction + 
                                                    '</td><td>' +
                                                    '<span class="material-icons" onclick="centrarMarcador()">visibility</span>' +
                                                    /*'<span> &macr;</span>' +
                                                    '<span class="material-icons">delete</span>' +*/
                                                    '</td></tr>';
    agregarMarcador();
}


//Creo un objeto de latitud y longitud
//Creo un nuevo marcador especificando posicion, mapa, titulo y seteo para que se centre el mapa en ese nuevo punto
//Creo un popup con los datos requeridos que se va a abrir con un listener con el evento 'click'
function agregarMarcador() {
    var newMarker = new google.maps.LatLng(nuevoPunto.arrayLatLng[0],nuevoPunto.arrayLatLng[1]);
    var marker = new google.maps.Marker({
        position: newMarker,
        map: map,
        title: nuevoPunto.name
        });
        map.setCenter(newMarker);

        
    var popupText = '<div><b>Descripción:</b> ' + nuevoPunto.name + '</div>' + 
                    '<div><b>Dirección:</b> ' + nuevoPunto.direction + '</div>' + 
                    '<div><b>Teléfono:</b> ' + nuevoPunto.phone + '</div>' + 
                    '<div><b>Coordenadas:</b> ' + nuevoPunto.arrayLatLng[0] + ',' + nuevoPunto.arrayLatLng[1] + '</div>' +
                    '<span class="material-icons" id="hide">delete</span>';
    

    var popupWindow = new google.maps.InfoWindow({
        content: popupText
    });

    marker.addListener('click', function(){
        popupWindow.open(map, marker);

        function resolverEn10Milisegundos() {
              setTimeout(() => {
                var spanVisibilidad = document.getElementById("hide");
                spanVisibilidad.addEventListener('click', function(){
                    marker.setMap(null);
                })
              }, 10);
        }

        resolverEn10Milisegundos();

        /* function resolverEn10Milisegundos() {
            return new Promise(resolve => {
              setTimeout(() => {

                var spanVisibilidad = document.getElementById("hide");
                spanVisibilidad.addEventListener('click', function(){
                if(marker.setVisible(true)){
                    marker.setMap(null);
                } else { marker.setVisible(false); }
                })

              }, 10);
            });
        }
          
        async function llamadaAsincronica() {
            const result = await resolverEn10Milisegundos();
        }
        
        llamadaAsincronica(); */
    })
    console.log(listadoDePuntos);
}


//Función para buscar por nombre
function buscarPorNombre(){
    var nombre = document.getElementById("busquedaNombre").value;
    //console.log(nombre);
    var newArray = listadoDePuntos.filter(function(element){
        return (element.name == nombre);
    })
    //console.log(newArray);
    //console.log(newArray[0].arrayLatLng);

    var centrarEn = new google.maps.LatLng(newArray[0].arrayLatLng[0],newArray[0].arrayLatLng[1]);
    map.setCenter(centrarEn);
}

//Función para centrar el mapa en un marcador haciendo click en el icono del ojo en la tabla
function centrarMarcador(){
    var nombreMarcador = document.getElementById(nuevoPunto.name).innerHTML;
    console.log(nombreMarcador);
    var newArray = listadoDePuntos.filter(function(element){
        return (element.name == nombreMarcador);
    })
    var centrarEn = new google.maps.LatLng(newArray[0].arrayLatLng[0],newArray[0].arrayLatLng[1]);
    map.setCenter(centrarEn);
}


// Challenge
/*
var fs = require('fs');
fs.readFile('listaMarcadores.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        datosJsonObjeto = JSON.parse(data);   //se convierte el contenido del JSON en objeto
        datosJsonObjeto.push({dato1: 1, dato2: 2});  //agrego datos de prueba al JSON
        datosJson = JSON.stringify(datosJsonObjeto);    //reconvierto a JSON

        fs.writeFile('listaMarcadores.json', datosJson, 'utf8', (err) => {    //vuelvo a escribir en el archivo JSON
            if (err) throw err;
            console.log('El marcador se guardó.');
        });
    }
});*/