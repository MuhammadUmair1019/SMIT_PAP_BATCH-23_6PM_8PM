const input = document.getElementById("cityInput");

function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌡️";
}

function getDescription(code) {
    const descriptions = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Rime Fog",
        51: "Light Drizzle",
        53: "Moderate Drizzle",
        55: "Heavy Drizzle",
        61: "Light Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        71: "Light Snow",
        73: "Moderate Snow",
        75: "Heavy Snow",
        77: "Snow Grains",
        80: "Rain Showers",
        81: "Moderate Showers",
        82: "Heavy Showers",
        85: "Snow Showers",
        86: "Heavy Snow Showers",
        95: "Thunderstorm",
        96: "Thunderstorm with Hail",
        99: "Heavy Thunderstorm"
    };

    return descriptions[code] || "Unknown Weather";
}

async function searchWeather() {
    const cityName = input.value.trim();

    if (!cityName) {
        alert("Please enter a city name!");
        return;
    }

    showMessage("Searching...");

    try {
        const geoUrl =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        console.log(geoData)

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found!");
        }

        const location = geoData.results[0];

        await fetchWeather(
            location.latitude,
            location.longitude,
            location.name,
            location.country
        );

    } catch (error) {
        showMessage(error.message || "Something went wrong!");
    }
}

async function fetchWeather(lat, lon, city, country = "") {
    showMessage("Loading weather...");

    try {
        const url =
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("weather data", data)

        if (!response.ok || !data.current || !data.daily) {
            throw new Error("Unable to get weather data.");
        }

        document.getElementById("temperature").innerText =
            Math.round(data.current.temperature_2m) + "°C";

        document.getElementById("description").innerText =
            getDescription(data.current.weather_code);

        document.getElementById("icon").innerText =
            getWeatherIcon(data.current.weather_code);

        document.getElementById("city").innerText =
            country ? `${city}, ${country}` : city;

        document.getElementById("humidity").innerText =
            data.current.relative_humidity_2m;

        document.getElementById("wind").innerText =
            data.current.wind_speed_10m;

        document.getElementById("max").innerText =
            Math.round(data.daily.temperature_2m_max[0]);

        document.getElementById("min").innerText =
            Math.round(data.daily.temperature_2m_min[0]);

        showMessage("");

    } catch (error) {
        showMessage(error.message || "Unable to load weather.");
    }
}

function getLocation() {
    if (!navigator.geolocation) {
        showMessage("Geolocation is not supported.");
        return;
    }

    showMessage("Getting your location...");

    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetchWeather(lat, lon, "Your Location");
        },
        () => {
            showMessage("Please allow location access.");
        }
    );
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
}


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});

