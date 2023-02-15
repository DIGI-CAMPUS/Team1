/* const person = {}; //객체 리터럴 방식
console.log(person); //{}
person.name = 'kb';
console.log(person); //{ name : 'kb'} */

/* const person = {};
person.name = {
  firstName: "kb",
  lastName: "kbb"
};
person.likes = ["apple", "kbbb"];
console.log(person); */

/* const person = {
  name : "kb"
};
delete person.name; // 또는 delete person["name"]
console.log(person); */

/* let num = 10;
let copyNum = num;

console.log(num); //10
console.log(copyNum); //10 */

/* let num = 10;
let copyNum = num;

num = 20; //변수 재할당
console.log(num); //20
console.log(copyNum); //10 */

/* const person = {
  name : "kb"
};
person = {
  name : "kbb"
}; */

/* const person = {
  name : "kb"
};
person.name = "kbb";
console.log(person.name); */

/* const person= {
  name : "kb"
};
const copyPerson = person;
person.name = "kbb";

console.log(person.name);
console.log(copyPerson.name); */


/* let num = 10;
let copyNum = num;

num = 20; //변수 재할당
console.log(num); //20
console.log(copyNum); //10 */

const kbstudent = {
  name : "kim",
  age : 20
};
kbstudent.gender = "female";
delete kbstudent.age;
console.log(kbstudent);