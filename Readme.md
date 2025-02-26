# Weather App 

## Project Overview

This project is a simple weather application that fetches and displays weather data for a user-specified city using the OpenWeatherMap API. The application consists of three separate files:

- **index.html** - HTML structure
- **index.css** - Styling for UI/UX
- **script.js** - JavaScript logic for fetching and displaying weather data

## API Used

- **API Provider:** OpenWeatherMap
- **Endpoint:**  
  `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`
- **Purpose:** Retrieves current weather data, including temperature, humidity, and weather description.
- **Reason for Choosing:** OpenWeatherMap provides free access to real-time weather data with a simple API integration.

## Testing the Implementation

1. Open `index.html` in a browser.
2. Enter a city name and click the **Get Weather** button.
3. Ensure the page displays the temperature, humidity, and weather description.
4. **Error Handling:**
   - Try entering an invalid city name (e.g., "Kovilpatti") to see if an error message appears.
   - Disconnect from the internet and test how the app handles network errors.

## Enhancements & Future Improvements

- Add icons representing different weather conditions.
- Improve UI/UX with animations and better layout.
- Enable location-based weather retrieval using the Geolocation API.
- Show additional data like air pressure.

## Conclusion

This project successfully fetches and displays weather data using the OpenWeatherMap API. The implementation follows best practices for clean code, error handling, and responsive design.

---
