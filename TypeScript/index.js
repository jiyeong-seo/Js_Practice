var 변수명 = "문자열";
function 함수(x) {
    return x * 2;
}
함수(2);
var john = { name: "John", age: "123" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var test = new User("문자열");
var 변수 = "string";
// 아래의 코드와 동일하다.
// let 변수 :string = "string";
// 변수 회원들에 할당될 배열 안에
// number 또는 string이 요소로 들어올 수 있도록 타입을 지정한 코드.
var 회원들 = [1, "2", 3];
// 변수 회원들1에 할당될 값이
// number이거나, 혹은 string이 요소로 들어오는 배열을 타입으로 지정한 코드.
var 회원들1 = 1;
