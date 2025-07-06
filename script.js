
// Connect to the WebSocket server
const socket = new WebSocket("wss://real-time-water-monitoring-system.onrender.com/frontend");

// Elements to update
const temperatureElement = document.getElementById("temperature");
const phElement = document.getElementById("ph");
const tdsElement = document.getElementById("tds");

// Handle WebSocket connection open
socket.onopen = () => {
  console.log("Connected to WebSocket server");
};

// Handle incoming messages
socket.onmessage = (event) => {
  const data = event.data.split(","); // Data format: "temperature,TDS,ph"
  
  // Update UI elements
  temperatureElement.textContent = parseFloat(data[0]).toFixed(2);
  tdsElement.textContent = parseFloat(data[1]).toFixed(2);
  phElement.textContent = parseFloat(data[2]).toFixed(2);
  
};

// Handle errors
socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};

// Handle connection close
socket.onclose = () => {
  console.log("WebSocket connection closed");
};