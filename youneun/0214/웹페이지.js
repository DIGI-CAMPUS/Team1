function search() {
  let word = document.getElementById("search").value;
  console.log(word);
  window.open(
    `https://www.google.com/search?q=${word}` &&
      `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${word}`
  );
}
