// type Name = string | number;

// let 변수명: Name = "문자열";

// function 함수(x: number): number {
//   return x * 2;
// }
// 함수(2);

// type Member = {
//   [key: string]: string;
// };
// let john: Member = { name: "John", age: "123" };

// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const test = new User("문자열");

// let 변수 = "string";
// 아래의 코드와 동일하다.
// let 변수 :string = "string";

// 변수 회원들에 할당될 배열 안에
// number 또는 string이 요소로 들어올 수 있도록 타입을 지정한 코드.
// let 회원들: (number | string)[] = [1, "2", 3];
// 변수 회원들1에 할당될 값이
// number이거나, 혹은 string이 요소로 들어오는 배열을 타입으로 지정한 코드.
// let 회원들1: number | string[] = 1;

// let 이름 :unknown;
// 이름 = '';

// 에러를 발생시킨다.
// let 변수1 :string = 이름;

// let 나이: number;
// // number + 1 -> 허용
// 나이 + 1;

// function 함수(x?: number) {}

// // 타입스트립트에서의 ? 연산자와 undefinde 는 동일한 의미를 가진다.
// function 함수1(x: number | undefined) {}
