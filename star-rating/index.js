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
  // Write a logic to create star rating problem
  let blankStarHtml = `<i class="fa fa-star-o"></i>`;

  document.querySelector(el).innerHTML = blankStarHtml.repeat(count);
  let starEl = document.getElementById('star');
  starEl.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'I') {
      console.log('hover');
      const num = document.querySelectorAll('i.fa ~ i.fa-star-o').length;
      callback(num);
      e.target.classList.toggle('fa-star-o');
      e.target.classList.toggle('fa-star');
    }
  });
}

new Star('#star', 5, getStar);
