import React, { useState } from 'react'

export default function  Main () {

	// state : 리액트 컴포넌트에서 데이터를 보관하고 있는 공간
	//				 컴포넌트를 리랜더링 하는 기준
	// state 선언 방법
	// const [상태변수명, 상태변경set함수] = useState<상태데이터타입>(초기값);
	// 자바스크립트 기반에선 제네릭<> 안써도 됨 타입스크립트 기반에선 써야함
	const [count, setCount] = useState<number>(0);

	// 일반 변수를 변경 시켜서 화면에 랜더링해도 바뀐 값을 볼 수 없음
	// let count = 0;

  // const 함수명 = 매개변수 => {구현부}
	// 이 함수가 끝나면 랜더링을 다시 함 함수가 종료되야 값이 증가함
	// 그래서 미리 변수에 담아놓고 호출
	const increaseCount = () => {
		// count++;
		// alert(count);

		const result = count+1;
		// const로 지정했기 때문에 count++ 를 쓸 수 없음
		setCount(result);
		alert(result);
	}

	return (
		// 객체로 전달해야 하기 때문에 밑에처럼 표시 중괄호 두번 px에도 '' 표시
		<div style={{margin: '20px'}}>
			{count}
			{/* { 함수호출방법 onClick={increaseCount} }  함수 이름만 적어주면 알아서 호출됨 */}
			<button onClick={increaseCount}>+</button>
		</div>
	)
}
