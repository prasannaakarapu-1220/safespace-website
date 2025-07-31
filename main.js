// Handle basic navigation and feedback messages

document.addEventListener("DOMContentLoaded", function () {
  // Flash message display for login/register feedback (if any)
  const urlParams = new URLSearchParams(window.location.search);
  const msg = urlParams.get("msg");
  if (msg) {
    alert(decodeURIComponent(msg));
  }

  // Confirm before emergency call (for emergency.html)
  const emergencyBtn = document.getElementById("emergency-call-btn");
  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", () => {
      const confirmCall = confirm("Are you sure you want to call emergency services (100)?");
      if (confirmCall) {
        window.location.href = "tel:100";
      }
    });
  }

  // GPS tracker (for gps.html)
  const gpsBtn = document.getElementById("gps-track-btn");
  const gpsOutput = document.getElementById("gps-output");

  if (gpsBtn && gpsOutput) {
    gpsBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        gpsOutput.innerText = "Fetching location...";
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            gpsOutput.innerHTML = `
              Latitude: ${lat}<br>
              Longitude: ${long}<br>
              <a href="https://www.google.com/maps/search/?api=1&query=${lat},${long}" target="_blank">View on Google Maps</a>
            `;
          },
          () => {
            gpsOutput.innerText = "Unable to retrieve location.";
          }
        );
      } else {
        gpsOutput.innerText = "Geolocation not supported by your browser.";
      }
    });
  }
});
