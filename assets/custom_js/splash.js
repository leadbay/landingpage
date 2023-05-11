var splashScreen = document.getElementById('splash');
var everythingElse = document.getElementById('nosplash');


splashScreen.addEventListener('click',()=>{
  splashScreen.classList.add('d-none');
  everythingElse.classList.remove('d-none');
})
