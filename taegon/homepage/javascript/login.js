// 로그인 성공 및 고양이 출력

let id = document.getElementById("id");
let password = document.getElementById("password");
let login = document.getElementById("login");

let cat = document.getElementById("cat");
let cat2 = document.getElementById("cat2");
cat.style.display = "none";
cat2.style.display = "none";

// 로그인버튼 활성화   https://kk3june.tistory.com/18
login.disabled = true;
login.style.backgroundColor = "#c4e1fb";
password.addEventListener("keydown", () => {
  if (id.value && password.value) {
    login.disabled = false;
    login.style.backgroundColor = "#6a24fe";
  }
});

id.addEventListener("keydown", () => {
  if (id.value && password.value) {
    login.disabled = false;
    login.style.backgroundColor = "#6a24fe";
  }
});

password.addEventListener("focusout", () => {
  if (id.value == "" || password.value == "") {
    login.disabled = true;
    login.style.backgroundColor = "#c4e1fb";
  }
});

id.addEventListener("focusout", () => {
  if (password.value == "" || id.value == "") {
    login.disabled = true;
    login.style.backgroundColor = "#c4e1fb";
  }
});

function loginfunc() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;
  if (id == "123" && password == "123") {
    alert("로그인 성공");
    cat.style.display = "block";
  } else if (id !== "123" && password !== "123") {
    alert("둘 다 틀렸습니다.");
    cat2.style.display = "block";
  } else if (id !== "123" || password !== "123") {
    alert("아이디 혹은 비밀번호가 틀렸습니다.");
    cat2.style.display = "block";
  }
}
login.addEventListener("click", function (event) {
  event.preventDefault();
  loginfunc();
});

// 아이디 저장 빨갛게 출력
const checkbox = document.querySelector("#checkbox1");
const label = document.querySelector("#checkbox2");
checkbox.addEventListener("click", function () {
  if (this.checked === true) {
    label.style.color = "red";
  } else {
    label.style.color = "gray";
  }
});
