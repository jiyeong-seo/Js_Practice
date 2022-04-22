type Name = string | number;

let 변수명: Name = "문자열";

function 함수(x: number): number {
  return x * 2;
}
함수(2);

type Member = {
  [key: string]: string;
};
let john: Member = { name: "John", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const test = new User("문자열");


let 변수 = 'string';
// 아래의 코드와 동일하다.
// let 변수 :string = "string";
