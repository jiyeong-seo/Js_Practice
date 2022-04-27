// 1
// function  printText (text? : string) :void {
//     if( text ) {
//         console.log('이름이 없습니다.');
//     } else {
//         console.log(`안녕하세요 ${text}`);
//     }

// }

// printText();

// test
// const testFunc = (text: string | number) :number | string => {
//    if ( typeof text !== 'number') {
//        return `string length : ${text.length}`
//    } else if ( typeof text == 'number') {
//        return text.toString().length;
//    }
// }

// console.log(testFunc("1234"));

// 4강 문제.3
const checkMarriagePossibility = (
  income: number,
  ownHome: boolean,
  charm: string
): string | void => {
  let totalScore: number = 0;
  // 월급
  totalScore += income;
  // 자가 보유 여부 점수
  if (ownHome === true) {
    totalScore += 500;
  }
  // 매력 점수
  if (charm === "상") {
    totalScore += 100;
  }

  // 결혼 가능 여부 검사
  if (totalScore >= 600) {
    return "결혼가능";
  }
};

console.log(checkMarriagePossibility(500, false, "상"));
