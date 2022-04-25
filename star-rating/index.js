function getStar(value) {
  document.getElementById('display-star').innerHTML = value;
}
/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  // write logic to create star rating utility.
}

new Star('#star', 5, getStar);
