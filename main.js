(function(){
  'use strict';

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
        displayPageNumber();
      });
      img = document.createElement('img');
      img.src = images[i];
      img.className = 'img-fluid';
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }
//  function createThumbnails() {
//    var li;
//    var img;
//    for (var i = 0; i < images.length; i++){
//      li = document.createElement('li');
//      li.dataset.index = i;
//      li.addEventListener('click', function(){
//        thumbnails.children[current].className = '';
//        mainImage.src = this.children[0].src;
//        current = this.dataset.index;
//        this.className = 'current_image';
//        displayPageNumber();
//      });
//
//      if(i == 0){
//        li.className = 'current_image';
//      } else {
//        li.className = '';
//      }
//
//      img = document.createElement('img');
//      img.src = images[i];
//      img.className = 'thumbnail_image';
//      li.appendChild(img);
//      thumbnails.appendChild(li);
//    }
//  }

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

  prev.addEventListener('click', () => {
    current--;
    if (current < 0){
      current = images.length - 1;
    }

    mainImage.src = images[current];
    displayPageNumber();
  });

  next.addEventListener('click', () => {
    current++;
    if (current > images.length - 1){
      current = 0;
    }

    mainImage.src = images[current];
    displayPageNumber();
  });
})();
