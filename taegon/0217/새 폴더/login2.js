let BoxTrans = false;
$(function(){
  $("#openLogin").on('click',function(){
    if (!BoxTrans){
      $("#logBox").animate(
        {marginLeft: '-50vw'},700,"linear")
        BoxTrans = true;
        $("#openLogin").text("▶")
      } else {
      $("#logBox").animate(
        {marginLeft: '0vw'},700,"linear")
      BoxTrans = false;
      $("#openLogin").text("◀")
    }
  })

  $("#logInBtn").on('click',function(){
    if ($("#idInput").val() != "Yeons2013"){
      alert('존재하지 않는 계정입니다.')
      $("#idInput").val("");
      $("#pwInput").val("")
      $("#logInBtn").css("background-color","#000");;
    } else {
      if ($("#pwInput").val() === "1234"){
        alert('로그인에 성공했습니다.');
        location.href = "https://about.meta.com/";
      } else {
        alert('비밀번호를 다시 입력해주세요.');
        $("#pwInput").val("");
        $("#logInBtn").css("background-color","#000");
      }
    }
  })
  
  $("#idInput").on("keyup",function(){
    if ($("#idInput").val() && $("#pwInput").val()){
      $("#logInBtn").css({"background-color":"#00f"})
    } else {
      $("#LogInBtn").css({"background-color":"#000"})
  }})
  $("#pwInput").on("keyup",function(){
    if ($("#idInput").val() && $("#pwInput").val()){
      $("#logInBtn").css("background-color","#00f")
    } else {
      $("#logInBtn").css("background-color","#000")
  }})
})

