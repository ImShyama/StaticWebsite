window.onload = function () {
  getCovidStats();
};

function getCovidStats() {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  url = 'https://coronavirus-tracker-api.herokuapp.com/v2/latest';
  fetch(proxyurl + url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data1) {
      console.log(data1);

      let total_cases = data1.latest.confirmed;
      let total_deaths = data1.latest.deaths;

      document.getElementById(
        'total-cases'
      ).innerHTML = total_cases.toLocaleString('en');

      document.getElementById(
        'total-deaths'
      ).innerHTML = total_deaths.toLocaleString('en');
    })
    .catch(function () {
      console.log('error');
    });

  const url1 = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/165';
  fetch(proxyurl + url1)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      let update = data.location.last_updated;
      let country = data.location.country;
      let cases = data.location.latest.confirmed;
      let deaths = data.location.latest.deaths;

      document.getElementById('date').innerHTML = update.substr(0, 10);
      document.getElementById('cases').innerHTML = cases.toLocaleString('en');
      document.getElementById('country').innerHTML = country.toLocaleString(
        'en'
      );
      document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
    })
    .catch(function () {
      console.log('error');
    });
  setTimeout(getCovidStats, 3600000);
}
