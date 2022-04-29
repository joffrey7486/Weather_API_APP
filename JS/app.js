

// function d'appel de l'API
let apiCall = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  
  fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    document.querySelector("#city").innerHTML = '<i class="fa-solid fa-city"></i>' + data.name;
    document.querySelector("#temp").innerHTML = '<i class="fa-solid fa-temperature-half"></i>' + data.main.temp + "°C";
    document.querySelector("#humidity").innerHTML = '<i class="fa-solid fa-droplet"></i>' + data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = '<i class="fa-solid fa-wind"></i>' + data.wind.speed + "m/s";
  })
  .catch(error => console.log('Erreur : ' + error));
}


// Ecoute de l'événement click sur le formulaire
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  let city = document.querySelector("#input-city").value;

  apiCall(city);
})

apiCall("Évian-les-Bains")