function printInfo() {
  console.log(`웹 브라우저의 너비(innerwidth): ${window.innerWidth}`);
  console.log(`웹 브라우저의 높이(innerheight): ${window.innerHeight}`);
  console.log(`웹 브라우저의 창의 너비(outerwidth): ${window.outerWidth}`);
  console.log(`웹 브라우저의 창의 높이(outerheight): ${window.outerHeight}`);
  console.log(
    `웹 브라우저의 창의 위쪽 면과 모니터 사이의 간격(screenTop,screenY): ${window.screenTop}/${window.screenY}`
  );
  console.log(
    `웹 브라우저의 창의 위쪽 면과 모니터 사이의 간격(screenLeft,screenX): ${window.screenTop}/${window.screenX}`
  );
  console.log(
    `웹 브라우저의 창의 스크롤 가로 위치(scrollX): ${window.scrollX}`
  );
  console.log(
    `웹 브라우저의 창의 스크롤 세로 위치(scrollY): ${window.scrollY}`
  );
}
