function displayClock() {
  var welcomeEl = document.getElementById("welcome");
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  if (hours > 5 && hours < 12) {
    welcomeEl.innerText = "Good Morning, Nicholas!";
  } else if (hours > 12 && hours < 17) {
    welcomeEl.innerText = "Good Afternoon, Nicholas";
  } else {
    welcomeEl.innerText = "Good Evening, Nicholas";
  }

  // Convert hours from 24-hour to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Add leading zeros to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("clock").innerText = time;
}

// Call the displayClock function every second
setInterval(displayClock, 1000);
