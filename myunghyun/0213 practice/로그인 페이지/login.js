/* ---idpw 일치확인 후 로그인--- */


const ID = 'allowbas';
const PW = '0329';

const loginId = document.getElementById('idid');
const loginPw = document.getElementById('pwpw');
const loginBtn = document.getElementById('login_btnid');

loginBtn.addEventListener('click', LOGIN);

function LOGIN() {
  if ((loginId.value == 0) || (loginPw.value == 0)) {
    alert('아이디 혹은 비밀번호를 입력하삼');
  } else {
    if ((loginId.value == ID) && (loginPw.value == PW)) {
      alert('로그인 성공');
    } else if (loginId.value != ID) {
      alert('아이디가 틀렸음');
    } else if ((loginId.value == ID) && loginPw.value != PW) {
      alert('비밀번호가 틀렸음');
    }
  }
}

/* ---QR코드로 로그인--- */

const idLogin = document.getElementById('tab-1')
const QRcodeLogin = document.getElementById('QRCodeLoginId')

QRcodeLogin.addEventListener('click', QRcodeTab)
// QRcodeLogin.addEventListener('click', QRcodeTab)

function QRcodeTab() {
  idLogin.style.display = "none";
}