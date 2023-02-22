/* 검색창 바탕색 */
$(function () {
  $("#search").on("focus", function () {
    $(this).css({ "background-color": "yellowgreen" });
  });
  $("#search").on("blur", function () {
    $(this).css({ background: "none" });
  });
});

/* 알파벳 치환 */
$(function () {
  $(document).on("keyup", keyEventFnc);
  function keyEventFnc(e) {
    var direct = "";

    switch (e.keyCode) {
      case 65:
        direct = "b";
        break;
      case 66:
        direct = "c";
        break;
      case 67:
        direct = "d";
        break;
      case 68:
        direct = "e";
        break;
      case 69:
        direct = "f";
        break;
      case 70:
        direct = "g";
        break;
      case 71:
        direct = "h";
        break;
      case 72:
        direct = "i";
        break;
      case 73:
        direct = "j";
        break;
      case 74:
        direct = "k";
        break;
      case 75:
        direct = "l";
        break;
      case 76:
        direct = "m";
        break;
      case 77:
        direct = "n";
        break;
      case 78:
        direct = "o";
        break;
      case 79:
        direct = "p";
        break;
      case 80:
        direct = "q";
        break;
      case 81:
        direct = "r";
        break;
      case 82:
        direct = "s";
        break;
      case 83:
        direct = "t";
        break;
      case 84:
        direct = "u";
        break;
      case 85:
        direct = "v";
        break;
      case 86:
        direct = "w";
        break;
      case 87:
        direct = "x";
        break;
      case 88:
        direct = "y";
        break;
      case 89:
        direct = "z";
        break;
      case 90:
        direct = "a";
        break;
    }
    if (direct) $("#search").val(direct);
  }
});
/* 텍스트 배경색 마우스오버 */
$(function () {
  $("#board1").on({
    mouseover: function () {
      $("#board1").css({ color: "yellowgreen" });
    },
    mouseout: function () {
      $("#board1").css({ color: "black" });
    },
  });
  $("#board2").hover(
    function () {
      $("#board2").css({ color: "yellowgreen" });
    },
    function () {
      $("#board2").css({ color: "black" });
    }
  );
});

// 검색창 움직이기
$(function searchbar() {
  $(".search2")
    .animate({ marginLeft: "300px" }, 1000)
    .animate({ marginLeft: "0px" }, 1000)
    .animate({ marginRight: "500px" }, 1000)
    .animate({ marginRight: "0px" }, 1000)
    .animate({ marginTop: "100px" }, 1000)
    .animate({ marginTop: "0px" }, 1000, searchbar);
});

$(function box() {
  $(".box5")
    .animate({ marginLeft: "30px" }, 1000)
    .queue(function () {
      $(this).css({ background: "yellowgreen" });
      $(this).dequeue();
    })
    .animate({ marginTop: "30px" }, 1000)
    .animate({ marginLeft: "0px" }, 1000)
    .animate({ marginTop: "0px" }, 1000, box)
    .queue(function () {
      $(this).css({ background: "white" });
      $(this).dequeue();
    });
});

//글자 색 바꾸기
$(document).ready(function () {
  let colors = ["red", "yellowgreen", "blue", "orange"];
  let index = 0;
  setInterval(function () {
    $(".barfoot").css("color", colors[index]);
    // index = (index + 1) % colors.length;   얘가 살아있으면 아래에서 실행할 때 이미 숫자가 1 늘어난 상태임
    $(".barhead").css("background-color", colors[index]);
    index = (index + 1) % colors.length; //얘만 있으면 둘이 동일한 색으로 들어감
  }, 1000);
});
