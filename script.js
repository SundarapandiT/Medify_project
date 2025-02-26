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
                console.log(data)
                const weatherInfo = document.getElementById("weather-info");
                const weatherDesc = data.weather[0].main.toLowerCase();

                let weatherIcon;
                if (weatherDesc.includes("clear")) {
                    weatherIcon = "☀️";
                } else if (weatherDesc.includes("cloud")) {
                    weatherIcon = "☁️";
                } else if (weatherDesc.includes("rain")) {
                    weatherIcon = "🌧️";
                } else if (weatherDesc.includes("snow")) {
                    weatherIcon = "❄️";
                } else {
                    weatherIcon = "🌡️";
                }

                weatherInfo.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${weatherIcon} ${data.main.temp}°C</p>
                    <p><strong>Humidity:</strong> 💧 ${data.main.humidity}%</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>

                `;
            } catch (error) {
                document.getElementById("weather-info").innerHTML = `<p style="color:red;">${error.message}</p>`;
            }
        }