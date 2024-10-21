const apikey = "8a4778a85c7f4e78b0d170952242110";
const baseUrl = "http://api.weatherapi.com/v1";

const sendRequestBtn = document.querySelector(".send--api__request");
const locationInput = document.querySelector(".weather--location");

sendRequestBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(locationInput.value);
  fetchData(locationInput.value);
});

const fetchData = async (location) => {
  try {
    const res = await fetch(
      `${baseUrl}/current.json?key=${apikey}&q=${location}&aqi=yes`
    );

    if (!res.ok)
      throw new Error(
        `Fetch resulted with an error, code ${res.status} ${res.statusText}`
      );

    const data = await res.json();

    document.querySelector(".country").innerHTML = `${data.location.country}`;
    document.querySelector(".location").innerHTML = `${data.location.name}`;
    document.querySelector(
      ".local--time"
    ).innerHTML = `${data.location.localtime}`;

    document.querySelector(
      ".temperature"
    ).innerHTML = `${data.current.temp_c} C`;
    document.querySelector(
      ".feels--like"
    ).innerHTML = `${data.current.feelslike_c} C`;
    document.querySelector(
      ".last--updated"
    ).innerHTML = `${data.current.last_updated}`;
    document.querySelector(
      ".wind--speed"
    ).innerHTML = `${data.current.wind_kph} kph`;
  } catch (err) {
    alert(err);
  }
};
