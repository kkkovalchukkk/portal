const ls = localStorage.getItem('storage');
const wrapper = document.querySelector('.article-wrapper');

// wrapper.innerHTML = '';

if (ls && JSON.parse(ls).length) {
  const arr = JSON.parse(ls);
  const idx = +window.location.search[window.location.search.length - 1];
  const item = arr[idx];

  wrapper.insertAdjacentHTML(
    'beforeend',
    `
   <h1 class="subheading">
                        ${item.heading}
                    </h1>
                    <img src="${item.url}" alt="" class="article-img">
                    <p class="article-date">
                        ${item.date}
                    </p>
                    <p class="article-text">
                      ${item.text}
                    </p>
                    <a href="./index.html" class="article-btn">
                        Назад
                    </a>
  `
  );
}
