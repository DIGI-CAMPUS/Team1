// 슬라이드 속성 만들기
let logControl = document.getElementById("openLogin");
let logBoxControl = document.getElementById("logBox");
let BoxTrans = false;

logControl.addEventListener('click',transX)
function transX(){
  if (!BoxTrans) {
    logBoxControl.animate(
    {transform: 'translateX(-50vw)'},
    {duration: 1000, // 밀리초 지정
      fill: 'forwards', // 종료 시 속성을 지님
      easing: 'ease' // 가속도 종류
    });
    BoxTrans = true;
    logControl.innerText = "▶"
  } else {
    logBoxControl.animate(
    {transform: 'translateX(0vw)'},
    {duration: 1000, // 밀리초 지정
      fill: 'forwards', // 종료 시 속성을 지님
      easing: 'ease' // 가속도 종류
    });
    BoxTrans = false
    logControl.innerText = "◀"
    logInBtn
  }
}


// 로그인 관련 함수 만들기
let idVal = document.querySelector('#idInput')
let pwVal = document.querySelector('#pwInput')
let logBtn = document.querySelector('#logInBtn')

console.log(idVal)
console.log(pwVal)
console.log(logBtn)

logBtn.addEventListener('click', confirmLogin)
idVal.addEventListener('change',btnAble)
pwVal.addEventListener('change',btnAble)


function confirmLogin(){
  if (idVal.value !== 'Yeons2013') {
    alert('존재하지 않는 계정입니다.');
    idVal.value = "";
    pwVal.value = "";
    logBtn.style.backgroundColor = "black";}
  else {
    if (pwVal.value === '1234') {
      alert('로그인에 성공했습니다.')
      location.href = "https://about.meta.com/"
    } else {
      alert('비밀번호를 다시 입력해주세요.')
      pwVal.value = "";
      logBtn.style.backgroundColor = "black"
    }
  }
} 

function btnAble(){
  console.log(idVal.value)
  console.log(pwVal.value)

  if (idVal.value && pwVal.value){
    logBtn.style.backgroundColor = "blue"
  } else {
  logBtn.style.backgroundColor = "black"
}}
