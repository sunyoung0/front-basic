import { create } from "zustand";

// 객체를 받기 제일 좋은 방법
interface SignInStore {
	email: string;
	password: string;
	setEmail: (email:string) => void;		// string 타입의 email을 받음
	setPassword: (password:string) => void;
}

const useStore = create<SignInStore>((set) => ({
	email: '', 		// 상태	변수 , 초기값은 빈문자열('')
	password: '',
	setEmail: (email) => set((state) => ({ ...state, email: email })),
	setPassword : (password) => set((state) => ({ ...state, password: password })),
}));

// state -> {email, password, setEmail}
// { ...state } -> { email, password, setEmail}
// { ...state, email: email } -> { email: 'email', password, setEmail}

export default useStore;