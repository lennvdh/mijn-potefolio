document.addEventListener("DOMContentLoaded", function () {
    var lat = 51.2325;
    var lng = 4.4722;


    var map = L.map('map').setView([lat, lng], 17);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    L.marker([lat, lng]).addTo(map);


    var bounds = [
        [lat - 0.0012, lng - 0.0018],
        [lat + 0.0010, lng + 0.0018]
    ];

    L.rectangle(bounds, {
        color: "red",
        weight: 2
    }).addTo(map);

    console.log('werkt')
});