const searchBtn = document.getElementById('searchBtnId');

searchBtn.addEventListener('click',searchGoogle);


function searchContestfunc() {
  const searchContents= document.getElementById('searchContentsId').value;
  window.open(`https://www.google.com/search?q=${searchContents}`);
}

function searchGoogle() {
  searchContestfunc();
}

