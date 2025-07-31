window.onload = () => {
  const music = document.getElementById('bg-music');
  const playBtn = document.getElementById('play-music');
  const titleElement = document.getElementById('title');
  music.loop = true;
  // Ketika tombol diklik:
  playBtn.addEventListener('click', () => {
    // Play musik
    music.muted = false;
    music.play().catch(e => {
      console.log("Autoplay dicegah:", e);
    });

    // Mulai animasi & ketik teks
    document.body.classList.remove("not-loaded");
    playBtn.style.display = 'none'; // Sembunyikan tombol

    // Tampilkan teks satu per satu
    const titles = ('Happy girlfriend day sayangkuu, love u so much angelytas cantikkuu, hope u like it :) <3').split('');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150);
      }
    }

    appendTitle();
  });
};
