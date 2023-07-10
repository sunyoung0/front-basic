import { useState, useEffect } from 'react';
import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Main from './views/Layout/Main';

function App2() {

	const [count, setCount] = useState<number>(0);

	// let count = 0;

	const increaseCount = () => {
		//count++;
		setCount(count+1);
		// alert(count);
	}

	// 그냥 export로 내보내서 받아온 것은 이름 변경이 불가능함
	// 임포트 할 때 { } 안에 표시함 ex) { testVariable }
	// testVariable
	
	// export default로 내보내서 받아온 것은 이름 변경이 가능함
	// 재사용성이 높아짐

	// useEffet : 함수형 컴포넌트가 react DOM에 마운트되고 (화면에 출력되고)
	// 						호출되는 함수
	// useEffect 선언 방법
	// useEffect(콜백함수, 배열);

	let flag = false;

	// 1. 첫 랜더링 직후 실행할 코드를 지정 (두번 실행)
	useEffect(() => {
		// useEffect를 한번만 실행하게 도와주는 로직
		if(!flag) {
			flag = true;
			return;
		}
		// alert('useEffect실행!');
	}, []);

	// 2. 특정 상태가 변경된 후 실행할 코드를 지정
	useEffect(() => {
		// 주의 사항 : useEffect로 스코프하고 있는 상태를 내부에서 변경하면 무한 호출됨
		// setCount(count+1);
		// alert('count 상태 변경');
	}, [count])

	// 3. 화면이 종료될 때 실행할 코드를 지정
	useEffect(() => {
		return () => {
			// alert('화면 종료');
		}
	}, [])

  return (
		<>
			{/* 문자열이 아니면 바로 적을 수 없어서 {} 안에 적어줘야함(arg2) */}
			{
				// <TestComponent arg1={'문자열'} />
				// <TestComponent arg1={'문자열'} arg2={100}/>
			}
			<button onClick ={increaseCount}>+</button>
			<Header count={count} />
			<Main />
			<Footer />
		</>
  );

}

export default App2;
