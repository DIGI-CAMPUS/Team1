let IDbox = document.getElementById("userID");
let PWbox = document.getElementById("userPW");
let login = document.querySelector("#login");
login.addEventListener("click", loginProcess);
/* console.log(IDbox);
console.log(PWbox);

console.log(login); */

function loginProcess() {
  let userID = IDbox.value;
  let userPW = PWbox.value;

  if (userID == "kb" && userPW == "1234") {
    let con = confirm("로그인을 하시겠습니까?");
    if (con == true) {
      window.open("http://www.google.com");
    } else {
      location.reload();
    }
  } else if (userID != "kb") {
    alert("아이디가 틀립니다.");
  } else if (userPW != "1234") {
    alert("비밀번호가 틀립니다.");
  } else {
    alert("입력 내용을 확인하세요.");
  }
}
