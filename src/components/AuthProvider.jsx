import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';

export const UserProvider = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const person = {
		user,
		createUser,
		signIn,
	};
	return (
		<div>
			<UserProvider.Provider value={person}>
				{children}
			</UserProvider.Provider>
		</div>
	);
};

export default AuthProvider;
