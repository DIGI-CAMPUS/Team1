let id_box = document.getElementById("userID");
let pw_box = document.getElementById("userPwd");
let click_btn = document.querySelector("#submit_btn");
click_btn.addEventListener("click", LoginProcess);

function LoginProcess() {
  let userId = id_box.value;
  let userPwd = pw_box.value;
  if (userId == "") {
    alert("아이디를 입력해주세요.");
    return false;
  }

  if (userPwd == "") {
    alert("비밀번호를 입력해주세요.");
    return false;
  }

  if (userId == "kbdigi" && userPwd == "campus") {
    let con = confirm("로그인되었습니다.");
    console.log(con);
    if (con == true) {
      location.href = "http://www.naver.com";
    } else {
      location.reload();
    }
  } else {
    alert("로그인 정보를 다시확인해주세요.");
  }
  // userId = "test" , userPwd = "1234" 로그인처리가 됨.
}
