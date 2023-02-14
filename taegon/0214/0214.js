// console.log(person); // {name : "kb"}

//        출력
// const person = {};
// person.name = {
//   firstName: "kb",
//   lastName: "kbb",
// };
// person.likes = ["apple", "kbbb"];
// console.log(person);

// delete 사용
/* const person = {
  name: "kb",
};
delete person.name; // 또는 delete person["name"]
console.log(person); //{출력}
 */

//  깊은 복사  (얕은 복사도 있음) 서로 영향을 미치지 않게 복사하는 것
// let num = 10;
// let copyNum = num;
// console.log(num); //10
// console.log(copyNum); //10

// const num = 10;
// const copyNum = num;
// num = 20; //변수 num을 재할당 /const 오류
// console.log(num); //20
// console.log(copyNum); //10

// // 얕은 복사 오류
// const person = {
//   name: "kb",
// };
// person = {
//   name: "kbb",    person의 객체 관련해서 바꾸려 했기떄문
// };

// // 얕은 복사 정상
// const person = {
//   name: "kb",
// };
// person.name = "kbb"; //속성값만 바꾸는 것이기 때문에 오류 X
// console.log(person.name);

// // 얕은 복사 2
// const person = {
//   name: "kb",
// };
// const copyPerson = person; //변수 person에 할당된 객체를 변수 copyPerson에 복사
// person.name = "kbb"; //변수 person에 할당된 객체의 값을 변경
// console.log(person.name);
// console.log(copyPerson.name);

const kbstudent = {
  name: "kim",
  age: 20,
};
kbstudent.gender = "female";
delete kbstudent.age;
console.log(kbstudent);
