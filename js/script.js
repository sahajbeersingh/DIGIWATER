let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let profile = document.querySelector('.header .flex .profile');

let likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('liked');
  });
});

let save = document.querySelectorAll('.save');
save.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('saved');
  });
});

let likes = document.querySelectorAll('#like');
likes.forEach(like => {
   like.onclick = () => {
      let id = like.getAttribute('data-id');
      let heart = document.querySelector(`.like-cont[data-id="${id}"]`);

      if (heart) {
         heart.classList.toggle('active');
      }
   };
});

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
