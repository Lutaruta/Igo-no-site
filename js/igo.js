document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('#joseki-toggle-button');
  const listContainer = document.querySelector('#joseki-list-container');

  //ボタンがnullでないことを確認してからイベントリスナーを設定
  if (toggleButton && listContainer) {

    //ボタンにクリックイベントを設定
    toggleButton.addEventListener('click', function() {

      //classList.toggle() を使って 'is-hidden' クラスを付け外しする
      listContainer.classList.toggle('is-hidden');

    });
  }

});
  const heroSection = document.querySelector('#hero-section');
  const toggleButton = document.querySelector('.toggle-button');

  // クリックしたときに動かす
  toggleButton.addEventListener('click', () => {
    heroSection.classList.toggle('is-collapsed');
  });

  //定石カードの表示
const josekiData = [
  {
    name: '三三の定石',
    image: 'img/三三.png',
    link: 'sansan.html'
  },
  {
    name: '桂馬の定石',
    image: 'img/桂馬.png',
    link: 'keima.html'
  },
];
const josekiListContainer = document.querySelector('#top-joseki-list');
josekiData.forEach(joseki => {
  const listItem = `
    <li>
      <a href="${joseki.link}" class="move-card-link">
        <div class="move-card">
          <img src="${joseki.image}" alt="${joseki.name}">
          <p class="name">${joseki.name}</p>
        </div>
      </a>
    </li>
  `;
  josekiListContainer.insertAdjacentHTML('beforeend', listItem);

});
