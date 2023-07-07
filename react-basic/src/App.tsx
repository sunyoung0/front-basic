import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Main from './views/Layout/Main';

function App() {

	// 그냥 export로 내보내서 받아온 것은 이름 변경이 불가능함
	// testVariable
	
	// export default로 내보내서 받아온 것은 이름 변경이 가능함
	// 재사용성이 높아짐

  return (
		<>
			{/* 문자열이 아니면 바로 적을 수 없어서 {} 안에 적어줘야함(arg2) */}
			<TestComponent arg1='문자열' arg2={1}/>
			<TestComponent arg1='문자열' arg2={100}/>
			<Header />
			<Main />
			<Footer />
		</>
  );

}

export default App;
