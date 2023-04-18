let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

//1번 랜덤함수
function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = 0; i < count; i++) {
    const examOne = Math.random() * (max - min) + min;
    exampleArr.push(parseFloat(examOne.toFixed(2)));
  }
  return exampleArr;
}
//float함수? parseFloat??
// let examOneArr = exampleOne(basicData.count, basicData.min, basicData.max);
// console.log(examOneArr);

//2번 divideNumber기준으로 구분
function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  };
  if (Number.isInteger(divideNumber) === true) {
    array.map((element) => {
      if (divideNumber > element) {
        exampleObject.a.push(element);
      } else if (divideNumber < element) {
        exampleObject.b.push(element);
      }
    });
  } else {
    console.log("정수를 입력해주세요");
  }
  return exampleObject;
}

// const examTwoArr = exampleTwo(examOneArr, basicData.divideNumber); //1번째 매개변수는 1함수를 넣음
// console.log(Array.isArray(examTwoArr.a));
// console.log(examTwoArr);

//3번 배열안의 모든 요소 더하기
function exampleThree(array) {
  let value = 0;
  array.map((element) => {
    value += element;
  });
  return value;
}

// const examThreeSum = exampleThree(examOneArr);
// console.log(examThreeSum);
// console.log(examThreeSum);

//4번 배열안의 요소가 전부 숫자인지 파악하기
function exampleFour(object) {
  let value = "";
  if (Array.isArray(object) === true) {
    value = object.every((element) => typeof element === "number");
  } else {
    console.log("object가 배열이 아닙니다.");
  }
  return value;
}
// const a = [1, 2, "3", 4];
// const examFourBoolean = exampleFour(examOneArr);
// console.log(examFourBoolean);

//5번 각각 매개변수의 값을 합하여 최종적으로 value에 모든 매개변수의 값을 더하면 된다.
function exampleFive(objectOne, ObjectTwo) {
  let value = 0;
  //objectOne의 모든 값을 더한 뒤 value에 넣기
  for (let key in objectOne) {
    value += objectOne[key];
  }

  //objectTwo의 각 키마다의 값들이 숫자인지 확인 한 뒤에 true면 모든 값을 더한 후 value에 더하기
  if (
    typeof ObjectTwo === "object" &&
    Array.isArray(ObjectTwo) === false &&
    ObjectTwo !== null
  ) {
    for (let key in ObjectTwo) {
      if (exampleFour(ObjectTwo[key]) === true) {
        value += exampleThree(ObjectTwo[key]);
      }
    }
  }
  return value;
}

let examOneArr = exampleOne(basicData.count, basicData.min, basicData.max);
const examTwoArr = exampleTwo(examOneArr, basicData.divideNumber);
const testValue = exampleFive(basicData, examTwoArr);

console.log("exampleTwo값은", examTwoArr);
console.log(
  "exampleTwo값의 각각의 키의 총 합들은",
  `a값 => ${exampleThree(examTwoArr.a)} / b값 => ${exampleThree(examTwoArr.b)}`
);
console.log("exampleOwn의 총합은", exampleThree(examOneArr));
console.log(`결과값은 ${exampleThree(examOneArr) + 26}가 나옵니다.`);
console.log(testValue);
