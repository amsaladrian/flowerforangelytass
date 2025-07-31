const title = document.querySelector('.title');
const words = `I Have Something For u Sayang`.split(' ');

// Styling container
title.style.display = 'flex';
title.style.flexWrap = 'wrap';
title.style.justifyContent = 'center';
title.style.gap = '0.5rem';

// Tambahkan setiap kata sebagai <span class="word">
words.forEach(word => {
  const wordContainer = document.createElement('span');
  wordContainer.classList.add('word');
  wordContainer.style.display = 'inline-flex'; // mencegah huruf pecah ke baris baru

  for (let char of word) {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    const randomDelay = Math.random() * 2;
    charSpan.style.setProperty('--delay', `${randomDelay}s`);
    wordContainer.appendChild(charSpan);
  }

  title.appendChild(wordContainer);

  // Tambahkan spasi setelah tiap kata (bukan antar huruf)
  const space = document.createTextNode(' ');
  title.appendChild(space);
});
