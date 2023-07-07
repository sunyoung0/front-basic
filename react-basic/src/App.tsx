import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';

function App() {

	// 그냥 export로 내보내서 받아온 것은 이름 변경이 불가능함
	// testVariable

  return (
		// export default로 내보내서 받아온 것은 이름 변경이 가능함
		// 재사용성이 높아짐
		<div>
			<TestComponent />
			<TestComponent />
			<TestComponent />
			<TestComponent />
		</div>
  );

}

export default App;
