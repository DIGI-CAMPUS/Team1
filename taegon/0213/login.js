var id = document.getElementById("id");
var pw = document.getElementById("pw");
var login = document.getElementById("login");

function loginfunc() {
  var id = document.getElementById("id").value;
  var pw = document.getElementById("pw").value;
  if (id == "123" && pw == "123") {
    alert("로그인 성공");
  } else if (id !== "123" && pw !== "123") {
    alert("둘 다 틀렸습니다.");
  } else if (id !== "123") {
    alert("아이디가 틀렸습니다.");
  } else if (pw !== "123") {
    alert("비밀번호가 틀렸습니다.");
  }
}

login.addEventListener("click", loginfunc);

// pw.addEventListener("keyup", () => {
//   if (id1.value && pw.value) {
//     login.disabled = false;
//     login.style.backgroundColor = "red";
//   }
// });

// id1.addEventListener("keyup", () => {
//   if (id1.value && pw.value) {
//     login.disabled = false;
//     loginBtn.style.backgroundColor = "#4390E7";
//   }
// });

// inputId.addEventListener('focusout', () => {
//     if(inputPw.value == '' || inputId.value == '') {
//           loginBtn.disabled = true;
//         loginBtn.style.backgroundColor = '#c4e1fb';
//     }
// });

// function active() {
//   var id = document.getElementById("id").value;
//   var pw = document.getElementById("pw").value;
//   switch (!(id.value && pw.value)) {
//     case true:
//       login.disabled = true;
//       break;
//     case false:
//       login.disabled = false;
//       break;
//   }
// }

// function active() {
//     var idv = id.value;
//     var pwv = pw.value;
//     if (idv.length > 3) {
//       login.disabled = false;
//     } else {
//       login.disabled = true;
//     }
//   }
//   idv.addEventListener("input", active);
//   pwv.addEventListener("input", active);
//   idv.addEventListener("keyup", active);
//   pwv.addEventListener("keyup", active);
