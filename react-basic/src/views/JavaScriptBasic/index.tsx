import { NumberLiteralType } from "typescript";

function JavaScriptBasic() {

	// 주석 //
	/*
		여러줄 주석
	 */

	// 변수 : js의 경우 변수의 타입이 존재하지 않음
	// javascript / typescript 에서 변수를 선언하는 방법
	// 1. var 키워드 사용
	var variable1;
	variable1= 10;
	variable1 = 11.1;
	variable1 = "안녕하세요";

	// if(true){
	// 	var localVariable;
	// }
	// localVariable = 10;

	// 2. let 키워드 사용
	let variable2;
	variable2 = 10;
	variable2 = 10.2;

	// if(true){
	// 		let localVariable;
	// 	}
	// 	localVariable = 10;

	// 3. const : 상수 (Java와 다르게 선언시에 반드시 초기화 해야함)
	const constantVariable = 10;

	// 4. ts 변수 선언
	let tsVariable1 = 10;	// 초기화와 선언을 함께 하면 타입이 정해짐
	// tsVariable1 = "안녕하세요";

	let tsVariable2: string;	// 타입스크립트에서는 타입 지정 가능 -> 변수명: 타입명
	// tsVariable2 = 10;
	tsVariable2 = "HELLO";

	let tsVariable3: string = "HELLO";

	// 데이터 타입
	// number : 숫자타입 (정수, 실수, 10진수, 16진수, ...)
	let numberVariable: number = 10;
	numberVariable = 10.1;
	numberVariable = 0xff;	// 16진수
	
	// boolean : 논리 타입
	let booleanVariable: boolean = true;
	booleanVariable = false;

	// string : 문자열 타입
	let stringVariable1: string = "문자열";	// 기본형
	let stringVariable2: String = "문자열";	// 참조형
	//  stringVariable1 = stringVariable2;
	
	//array : 배열 타입
	let numberArray: number[] = [1, 2];
	// numberArray = [true, false];

	// object : 객체 타입, 참조 타입
	// 인스턴스를 원하는대로 바로 생성
	let object :any = {
		name : "홍길동",
		age : 30
	}

	object = {
		name : "홍길동",
		age1 : 30
	}

	// null : 값이 지정되지 않은 타입
	object = null;
	let nullVariable: null = null;

	// 하나의 변수가 여러 개의 타입을 가질 수 있음
	let stringVariable3: string | null | number = null;
	stringVariable3 = 10;
	stringVariable3 = null;
	stringVariable3 = "HELLO";

	// undefined : 정의되지 않은 타입
	let undefinedVariable: undefined = object.address;

	// any : 모든 타입을 받을 수 있는 타입
	// 쓰지 않는 것이 좋음
	let anyVariable: any = 10;
	anyVariable = "문자열";

	// 연산자
	let result:any = 10 / 3;	// 3.3333..

	let number1: any = 10;
	let number2: any = "10";

	// any타입과 any타입의 비교이므로 가능 10=="10"은 에러뜸
	// 문자열과 숫자를 같게 보기 때문에 == 연산은 true가 나오고
	// === 연산은 타입까지 같이 비교해서 false가 나옴
	result = number1 == number2;	// true
	result = number1 === number2;	// false

	result = number1 != number2;	// false
	result = number1 !== number2;	// true

	// 조건문
	// 조건문의 조건이 무조건 true, false 형태의 boolean 값이 오지 않아도 됨
	// false : 0, 0.0, '' , undefined, null
	const string = '';
	if(string) {

	}

	// 반복문
	// for, while 모두 사용 가능

	// foreach 함수
	const exampleArray = ['apple', 'banana', 'carot'];
	// foreach 함수 : 배열.forEach(반환값이 없는 함수);
	// for (let item: exampleArray) {
	// 반복문이 없음
	// }
	exampleArray.forEach(function(item){
		console.log(item);
	});

	// map 함수 : 배열.map(반환값이 있는 함수); 자주 사용됨
	//						배열을 반복하면서 함수 작업의 반환 값으로 새로운 배열을 생성하여 반환
	const numbers = [1, 2, 3, 4, 5];
	let resultList = numbers.map(function (item){
		const result = item * item;
		return result;
	});			// [1, 4, 9, 16, 25]

	// filter 함수 : 배열.filter(조건문을 가진 함수)
	//							 배열을 반복하면서 함수에 작성된 조건문에 부합하는 요소만 반환
	resultList = numbers.filter(function(item){
		return item % 2 === 0;
	});		// [2, 4]

	// 객체 생성
	// 1. JSON 형식을 이용하여 생성(바로 생성)
	// JSON : { 'key': 'value', 'key': 'value', ... } 문자열임
	let object1 = {
		name:"홍길동",
		age: 29,
		address: "부산광역시"
	};

	// 2. class를 이용하여 생성, 클래스 선언 : class 클래스명 {...}
	//	생성자를 그냥 constructor로 만듦 오버라이드 개념이 없음
	class CHuman {
		// 타입 스크립트 기반일 때는 각각의 멤버에 대한 타입을 지정해줘야함
		name: string
		age: number;
		address: string;

		constructor(name:string, age: number, address:string) {
			this.name = name;
			this.age = age;
			this.address = address;
		}
	}
	object1 = new CHuman('김철수', 30, '서울특별시');

	// 3. interface를 이용하여 생성
	// 객체의 틀만 잡아줌
	interface IHuman {
		name: string;
		age: number;
		address: string;
	}

	let object2: IHuman = {
		name: '고길동',
		age: 50,
		address:"인천광역시"
	}

	object1.age;
	
	// 구조 분해 할당
	// let name = object1.name;	// 자바 문법
	// let age = object1.age;

	let { name, age } = object1;	//{ name : '홍길동', age : 30, address : '부산'}
	console.log(name);
	console.log(age);

	let { address, ...other } = object1;	// address를 가져오고 other은 새로운 객체를 만듦
	// address: '부산', ohter: {name : '홍길동', age : 30}

	let object3 = {telNumber: '010-1111-1111', email: 'email@email.com'}
	let subObject = {...object2, ...object3};
	// {name: '고길동', age=50, address='인천광역시', telNumber: '010-1111-1111', email: 'email@email.com'}

	// 함수

	// 함수 뒤에 반환타입이 없는 것 -> 일회성 함수 , 재사용 불가
	// function 함수명 (매개변수:타입, ..): 반환타입 {
	// ...
	// return 결과값;
	// }

	// 화살표 함수
	// 함수를 변수처럼 사용하는 것
	// 선언 방법
	// const 함수명 = (매개변수, ... ) => { ... return 결과값 };


	return (<></>);

}

export default JavaScriptBasic;