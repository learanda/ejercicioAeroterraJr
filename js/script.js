function initMap() {

    var aeroterra = { lat: -34.59555708657061, lng: -58.37094880287956 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: aeroterra,
      });

    var marker = new google.maps.Marker({
    position: aeroterra,
    map: map,
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
    var nombreCapturar = document.getElementById("name").value;
    var direcCapturar = document.getElementById("direction").value;
    console.log(nombreCapturar, direcCapturar);
}