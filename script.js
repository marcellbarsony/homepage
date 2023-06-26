// TIME
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours();

  return (
    "" +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
}

// WEATHER
function getWeather() {
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?id=4737316&units=metric&appid=e5b292ae2f9dae5f29e11499c2d82ece"
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        document.getElementById("temp").innerHTML =
          json.main.temp.toFixed(0) + " C";
        document.getElementById("weather-description").innerHTML =
          json.weather[0].description;
      } else {
        console.log("error msg: " + xhr.status);
      }
    }
  };
  xhr.send();
}

// BOOKMARKS
function setupBookmarks() {
  const bookmarkContainer = document.getElementById("bookmark-container");
  bookmarkContainer.innerHTML = bookmarks
    .map((b) => {
      const html = ["<div class='bookmark-set'>"];
      html.push(`<div class="bookmark-title">${b.title}</div>`);
      html.push('<div class="bookmark-inner-container">');
      html.push(
        ...b.links.map(
          (l) =>
            `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
        )
      );
      html.push("</div></div>");
      return html.join("");
    })
    .join("");
}

window.onload = () => {
  setupBookmarks();
  getWeather();
  // Set up the clock
  document.getElementById("time").innerHTML = getTime();
  // Set clock interval to tick clock
  setInterval(() => {
    document.getElementById("time").innerHTML = getTime();
  }, 100);
};
