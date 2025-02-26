const apiKey = "5f2b444fa72fb203de4475158eeac233"; 

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        console.log(data);
        
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("weather-description").innerText = data.weather[0].description;
        document.getElementById("wind-speed").innerText = `${data.wind.speed} m/s`;
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;
        document.getElementById("wind-direction").innerText = getWindDirection(data.wind.deg);
        
        updateWeatherIcon(data.weather[0].main.toLowerCase());

        // Set Date & Time
        const now = new Date();
        document.getElementById("date-time").innerText = now.toDateString() + " " + now.toLocaleTimeString();

    } catch (error) {
        alert(error.message);
    }
}

function getWindDirection(degree) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(degree / 45) % 8];
}

function updateWeatherIcon(weather) {
    const icon = document.getElementById("weather-icon");

    if (weather.includes("clear")) {
        icon.className = "fas fa-sun";
    } else if (weather.includes("cloud")) {
        icon.className = "fas fa-cloud";
    } else if (weather.includes("rain")) {
        icon.className = "fas fa-cloud-showers-heavy";
    } else if (weather.includes("snow")) {
        icon.className = "fas fa-snowflake";
    } else {
        icon.className = "fas fa-thermometer-half";
    }
}
