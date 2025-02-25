document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([19.0330, 73.0297], 13); // Coordinates for the address

    // Add tile layer
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add marker
    const marker = L.marker([19.0330, 73.0297]).addTo(map); // Coordinates for the address
    marker.bindPopup("<b>Ground Floor, Shree Ganesh Complex,<br> Sector 14, Vashi,<br> Navi Mumbai, Maharashtra - 400703 <br> India.</b>").openPopup();

    // Initialize Leaflet Routing Machine
    const control = L.Routing.control({
        waypoints: [
            L.latLng(19.0330, 73.0297) // Destination
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        createMarker: function() { return null; } // Disable markers for waypoints
    }).addTo(map);

    // Function to handle directions
    function getDirections() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const userLocation = L.latLng(userLat, userLng);
                
                // Update route
                control.setWaypoints([
                    userLocation, // Start location
                    L.latLng(19.0330, 73.0297) // Destination
                ]);
                map.setView(userLocation, 13); // Optionally, center map on user's location
            }, function() {
                alert('Unable to retrieve your location.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    // Attach event listener to "Get Directions" button
    document.querySelector('.directionBut').addEventListener('click', getDirections);
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.careers form');
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    const confirmSubmitButton = document.getElementById('confirmSubmit');
    const modalDetailsList = document.getElementById('modalDetails');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        modalDetailsList.innerHTML = '';
        formData.forEach((value, key) => {
            if (key !== 'city') {
                modalDetailsList.innerHTML += `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`;
            }
        });
        const city = form.querySelector('select[name="city"]');
        if (city) {
            modalDetailsList.innerHTML += `<li><strong>City:</strong> ${city.options[city.selectedIndex].text}</li>`;
        }

        modal.show();
    });

    confirmSubmitButton.addEventListener('click', function () {
        form.submit();
    });
});


function google_maps(){
    var link=document.getElementById('map_link')
    var lat=19.0330
    var long=73.0297
    link.href=`https://www.google.com/maps/search/?api=1&query=${lat},${long}`
}

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    logo.addEventListener('click', function () {
        window.location.href = 'logo.html'; // Redirect to logo.html on click
    });
});