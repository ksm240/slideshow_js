(function(){
  'use strict';

  const INTERVAL = 2000;

  let images = ["images/image1.jpg",
                "images/image2.jpg",
                "images/image3.jpg",
                "images/image4.jpg",
                "images/image5.jpg",
                "images/image6.jpg",
              ];
  let current = 0;

  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let page = document.getElementById('page');
  let mainImage = document.getElementById('main_image');
  let thumbnails = document.getElementById('thumbnails');
  let timer;

  function createThumbnails() {
    let li;
    let img;
    for (let i = 0; i <images.length; i++){
      li = document.createElement('div');
      li.className = 'col-2';
      li.dataset.index = i;
      li.addEventListener('click', (e) =>{
        mainImage.src = e.target.src;
        current = e.target.index;
        clearTimeout(timer);
        displayPageNumber();
        playSlideshow();
      });
      img = document.createElement('img');
      img.src = images[i];
      img.className = 'img-fluid';
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }

  function playSlideshow() {
    timer = setTimeout(() =>{
      next.click();
    }, INTERVAL);
  }

//  let thumbs = document.getElementsByClassName('thumbnail_image');
//  for (let i = 0; i < thumbs.length; i++) {
//    thumbs[i].addEventListener('click', (e) => {
//      mainImage.src = 'images/' + e.target.dataset.image;
//      current = e.target.dataset.index;
//      displayPageNumber();
//    });
//  }

  function displayPageNumber() {
    page.textContent = (Number(current) + 1 ) + '/' + images.length;
  }

  displayPageNumber();
  createThumbnails();
  playSlideshow();

  prev.addEventListener('click', () => {
    clearTimeout(timer);
    current--;
    if (current < 0){
      current = images.length - 1;
    }

    mainImage.src = images[current];
    displayPageNumber();
    playSlideshow();
  });

  next.addEventListener('click', () => {
    clearTimeout(timer);
    current++;
    if (current > images.length - 1){
      current = 0;
    }

    mainImage.src = images[current];
    displayPageNumber();
    playSlideshow();
  });
})();
