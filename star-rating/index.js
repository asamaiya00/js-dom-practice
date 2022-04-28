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

  let starEl = document.querySelector(el);
  const fillStars = (num) => {
    for (let i = 1; i <= count; i++) {
      if (i <= num) starEl.children[i - 1].className = 'fa fa-star';
      else starEl.children[i - 1].className = 'fa fa-star-o';
    }
  };
  let starHtml = '';
  for (let i = 1; i <= count; i++)
    starHtml += `<i class="fa fa-star-o" data-number=${i} ></i>`;

  starEl.innerHTML = starHtml;
  starEl.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'I') {
      const num = e.target.dataset.number;
      fillStars(num);
    }
  });
  starEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      const num = e.target.dataset.number;
      fillStars(num);
      callback(num);
    }
  });
}

new Star('#star', 5, getStar);
