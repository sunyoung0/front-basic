// 컴포넌트
// React의 기본 단위
// 화면을 독립적인 부분으로 나눠서 재사용성을 높이고
// 관리를 용이하게 해줌
// class 컴포넌트 / function 컴포넌트

// 인터페이스의 객체의 타입을 정의해놓은 것
// 속성명? : 타입; 필수가 아니라고 표시하는 것
interface Props {
	arg1: string;
	arg2?: number;
}

// 컴포넌트 선언시 주의 사항
// 컴포넌트 명의 첫 글자는 반드시 대문자여야 함

function TestComponent (props: Props) {
	
	const itemList = ['첫번째', '두번째', '세번째', '네번째', '다섯번째'];
	const flag = true;

	// return 위치에 화면에 출력할 HTML 작성
	// 컴포넌트 return 시 주의사항
	// 반드시 하나의 요소를 반환

	// return에 작성하는 HTML 내부에서 Javascript를 사용하고 싶으면
	// {} 내부에 작성
	// 그 {} 내부에서 다시 HTML을 반환하고 싶다면 () 내부에 작성

	// return 자리에선 선언 불가하기 때문에 배열의 도움을 받음
	return (
		<div>
			<div>{props.arg1} {props.arg2}</div>
			{ /* 주석, 부모요소 밖에서는 안됨 */ }
			{ itemList.map((item) => (<div>	{item}컴포넌트입니다. </div>)) }
			{
				flag && (<div>TRUE</div>)
			}
			{
				flag ? (<div>TRUE</div>) : (<div>FALSE</div>)
			}
		</div>
	);
};

export default TestComponent;

// export, export default
// export : 한 페이지에서 여러개를 내보낼 때 사용
// export default : 한 페이지에서 하나의 값을 기본 값으로 내보낼 때 사용
export const testVariable = 10;