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

	return (<></>);

}

export default JavaScriptBasic;