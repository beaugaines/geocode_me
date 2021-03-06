(() => {
  BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json';

  document.addEventListener('DOMContentLoaded', () => {
    API_KEY = document.querySelector('[data-apikey]').dataset.apikey;
    const geoForm = document.querySelector('.location-form');
    const addressField = document.querySelector('#location_formatted_address');
    const latField = document.querySelector('#location_lat');
    const lngField = document.querySelector('#location_lng');
    const spinner = document.querySelector('.api-progress');

    geoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      spinner.style.display = 'inline';
      let userAddress = document.querySelector('.user-location').value;
      userAddress = userAddress.replace(/[^\w,\s]/g, '').replace(/\s+/g, '+');
      const requestURL = `${BASE_URI}?address=${userAddress}&key=${API_KEY}`;

      fetch(requestURL)
        .then((resp) => {
          spinner.style.display = 'none';
          if (!resp.ok) {
            let errorMsg = document.createElement('span');
            errorMsg.classList.add('flash');
            errorMsg.innerHTML = 'Invalid input!';
            geoForm.appendChild(errorMsg);
            throw Error(resp.statusText);
          }
          return resp.json();
        })
        .then((data) => {
            const results = data.results[0];
            addressField.value = results.formatted_address;
            latField.value = results.geometry.location.lat;
            lngField.value = results.geometry.location.lng;

            geoForm.submit();
        })
        .catch((error) => {
          console.error(error);
        })
    });
  });
})();
