BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json';

document.addEventListener('DOMContentLoaded', function() {
  API_KEY = document.querySelector('[data-apikey]').dataset.apikey;
  const geoForm = document.querySelector('.location-form');
  const addressField = document.querySelector('#location_formatted_address');
  const latField = document.querySelector('#location_lat');
  const lngField = document.querySelector('#location_lng');

  geoForm.addEventListener('submit', function() {
    event.preventDefault();
    let userAddress = document.querySelector('.user-location').value;
    userAddress = userAddress.replace(/[^\w,\s]/g, '').replace(/\s+/g, '+');
    const requestURL = `${BASE_URI}?address=${userAddress}&key=${API_KEY}`;

    fetch(requestURL).then(function(response) {
      if(response.status === 200) {
        response.json().then(function(data) {
          const results = data.results[0];
          const formattedAddress = results.formatted_address;
          const lat = results.geometry.location.lat;
          const lng = results.geometry.location.lng;

          addressField.value = formattedAddress;
          latField.value = lat;
          lngField.value = lng;

          geoForm.submit();
        })
      } else {
        console.error('fetch request failed');
      }
    })

  });
});

