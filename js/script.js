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