'use strict';

const myNewsList = document.querySelector('.my-list');
const form = document.querySelector('form');
const ls = localStorage.getItem('storage');
const emptyText = document.querySelector('.my-empty-text');

if (ls && JSON.parse(ls).length) {
  emptyText.style.display = 'none';
  const arr = JSON.parse(ls);

  arr.forEach((el, idx) => {
    console.log(el);

    console.log();

    let tags = '';

    el.tags
      .split(' ')
      .map((t) => (tags += `<a href="#" class="news-card-tag">${t}</a>`));

    console.log(tags);

    myNewsList.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="news-card">
        <h3 class="news-card-heading">
           "${el.heading}"
        </h3>
        <div class="news-card-tags">
            ${tags}
        </div>
        <p class="news-card-text">
            ${el.descr}
        </p>
        <a href="/article.html?id=${idx}" class="news-card-btn">
            Читать подробнее
        </a>
        <img src="${el.url}" alt="${el.heading}" class="news-card-img">
    </div>
    `
    );
  });
} else {
  emptyText.style.display = 'block';
}

form.addEventListener('submit', (e) => {
  const headingInput = e.target.heading;
  const tagsInput = e.target.tags;
  const descrInput = e.target.descr;
  const textInput = e.target.text;
  const urlInput = e.target.url;

  const storage = localStorage.getItem('storage');
  console.log(storage);

  const item = {
    heading: headingInput.value,
    tags: tagsInput.value,
    descr: descrInput.value,
    text: textInput.value,
    url: urlInput.value,
    date: new Date().toLocaleDateString(),
  };
  if (storage) {
    const newNews = [...JSON.parse(storage), item];
    localStorage.setItem('storage', JSON.stringify(newNews));
  } else {
    localStorage.setItem('storage', JSON.stringify([item]));
  }
});
