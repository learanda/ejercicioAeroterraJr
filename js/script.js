/* window.onload = function(){
    console.log('onload');
} */

function initMap() {

    var mapaBase = { lat: -34.6020549, lng: -58.3818864 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapaBase
      });

}

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

var listadoDePuntos = [];

function agregarDatos() {
    listadoDePuntos.push(nuevoPunto);
    //console.log(listadoDePuntos);
    document.getElementById("body").innerHTML += '<tr><td>' + nuevoPunto.name +'</td><td>' + nuevoPunto.direction + '</td><td>Ver/Ocultar-Eliminar</td></tr>';
    agregarMarcador();
}

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
                    '<div><b>Coordenadas:</b> ' + nuevoPunto.arrayLatLng[0] + ',' + nuevoPunto.arrayLatLng[1] + '</div>';

    var popupWindow = new google.maps.InfoWindow({
        content: popupText
    });

    marker.addListener('click', function(){
        popupWindow.open(map, marker);
    })
    console.log(listadoDePuntos);
} 

// Challenge
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
});