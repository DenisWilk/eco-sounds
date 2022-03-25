console.log(`Ваша отметка - 67.5 балла(ов)\n
Отзыв по пунктам ТЗ:\n
Частично выполненные пункты:\n
1) есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать.\n
Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации — 2 балл(а)\n
Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.`)



let isPlay = false;
const playerContainer = document.querySelector('.player-container');
const player = document.querySelector('.player');
const navBtns = document.querySelectorAll('.nav-btn');
const mainSection = document.querySelector('.main');
const mainBtn = document.querySelector('.main-btn');

function playFromNavBtns() {
  if (event.target.classList.contains('btn1')) {
    playerContainer.classList.add('appear-player');
    mainBtn.classList.add('appear-main-btn');
    mainBtn.classList.add('pause-pic');
    document.body.classList.add('img1');
    document.body.classList.remove('img2', 'img3', 'img4', 'img5');
    player.src = './assets/audio/1.mp3';
    player.play();
    isPlay = true;
  }
  else if (event.target.classList.contains('btn2')) {
    playerContainer.classList.add('appear-player');
    mainBtn.classList.add('appear-main-btn');
    document.body.classList.add('img2');
    document.body.classList.remove('img1', 'img3', 'img4', 'img5');
    mainBtn.classList.add('pause-pic');
    player.src = './assets/audio/2.mp3';
    player.play();
    isPlay = true;
  }
  else if (event.target.classList.contains('btn3')) {
    playerContainer.classList.add('appear-player');
    mainBtn.classList.add('appear-main-btn');
    document.body.classList.add('img3');
    document.body.classList.remove('img1', 'img2', 'img4', 'img5');
    mainBtn.classList.add('pause-pic');
    player.src = './assets/audio/3.mp3';
    player.play();
    isPlay = true;
  }
  else if (event.target.classList.contains('btn4')) {
    playerContainer.classList.add('appear-player');
    mainBtn.classList.add('appear-main-btn');
    document.body.classList.add('img4');
    document.body.classList.remove('img1', 'img2', 'img3', 'img5');
    mainBtn.classList.add('pause-pic');
    player.src = './assets/audio/4.mp3';
    player.play();
    isPlay = true;
  }
  else if (event.target.classList.contains('btn5')) {
    playerContainer.classList.add('appear-player');
    mainBtn.classList.add('appear-main-btn');
    document.body.classList.add('img5');
    document.body.classList.remove('img1', 'img2', 'img3', 'img4');
    mainBtn.classList.add('pause-pic');
    player.src = './assets/audio/5.mp3';
    player.play();
    isPlay = true;
  }
}
navBtns.forEach((el) => el.addEventListener('click', playFromNavBtns));


function playFromMainBtn() {
  if (isPlay) {
    player.pause();
    isPlay = false;
    mainBtn.classList.remove('pause-pic');
  } else if (!isPlay) {
    player.play();
    isPlay = true;
    mainBtn.classList.add('pause-pic');
  }
}
mainSection.addEventListener('click', playFromMainBtn);


const headerBackground = document.querySelector('.header-container');
const footerBackground = document.querySelector('.footer-container');

function addFullScreen() {
  if (isPlay) {
    headerBackground.classList.add('full-screen');
    footerBackground.classList.add('full-screen');
    mainBtn.classList.add('no-btn');
    document.body.classList.add('no-cursor');
  }
}

function removeFullSreen() {
  headerBackground.classList.remove('full-screen');
  footerBackground.classList.remove('full-screen');
  mainBtn.classList.remove('no-btn');
  document.body.classList.remove('no-cursor');
}
window.addEventListener('mousemove', removeFullSreen);
window.addEventListener('click', removeFullSreen);

function fullScreenEffect() {
  let t;
  if (isPlay) {
    if (t) {
      removeFullSreen;
      clearTimeout(t);
      t = 0;
    }
    t = setTimeout(addFullScreen, 3000);
  }
}
window.addEventListener('mousemove', fullScreenEffect);
window.addEventListener('click', fullScreenEffect);


navBtns.forEach(button => {
  button.addEventListener('click', function () {
    navBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});


function preloadImages() {
  for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${i}.jpg`;
  }
}
preloadImages();


