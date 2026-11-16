/* jshint esversion: 6 */
// Static weather data for Nigeria
const temperature = 28;
const windSpeed = 12;

// Calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check whether wind chill conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#wind-chill").textContent =
        `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the document's last modification date
document.querySelector("#lastModified").textContent =
    document.lastModified;