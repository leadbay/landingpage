var splashScreen = document.getElementById('splash');
var everythingElse = document.getElementById('nosplash');
var joinBtn1 = document.getElementById('join-btn-1');
var joinForm1 = document.getElementById('join-form-1');


function closeSplash(){
  splashScreen.classList.add('d-none');
  everythingElse.classList.remove('d-none');
}

splashScreen.addEventListener('click',()=>{
  closeSplash();
})

setTimeout(() => {
  closeSplash();
}, 2480);

joinBtn1.addEventListener('click', ()=>{
  joinBtn1.classList.add('d-none');
  joinForm1.classList.remove('d-none');
})
