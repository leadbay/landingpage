var splashScreen = document.getElementById('splash');
var everythingElse = document.getElementById('nosplash');

function closeSplash(){
  splashScreen.classList.add('d-none');
  everythingElse.classList.remove('d-none');
}

splashScreen.addEventListener('click',()=>{
  closeSplash();
})

setTimeout(() => {
  closeSplash();
}, 3300);
