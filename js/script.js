function initMap() {

    var mapaBase = { lat: -34.6020549, lng: -58.3818864 };

    var map = new google.maps.Map(document.getElementById('map'), {
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
        this.coordinates = coordinates;
    }
    var nameCapturar = document.getElementById("name").value;
    var direcCapturar = document.getElementById("direction").value;
    var phoneCapturar = document.getElementById("phone").value;
    var categCapturar = document.getElementById("category").value;
    var coordCapturar = document.getElementById("coordinates").value;
    //console.log(nombreCapturar, direcCapturar);

    nuevoPunto = new PuntoDeInteres(nameCapturar, direcCapturar, phoneCapturar, categCapturar, coordCapturar);
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

}