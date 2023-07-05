import React, {useState} from 'react';

// models
import {Users} from './../../Models';

// helpers
import {ls} from '../../Globals/Localstorage';
import {empty} from '../../Globals/Utils';

// styles
import './styles.css';

const LoginScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const next = async () => {
		clear();
		if (empty(username)) {
			setUsernameError(true);
			return;
		}
		if (empty(password)) {
			setPasswordError(true);
			return;
		}
		try {
			const res = await Users.login(username, password);
			ls('user', res.user);
			ls('token', res.token);
			window.location.href='/';
		} catch (ex) {
			return error();
		}
	}
	const clear = () => {
		setUsernameError(false);
		setPasswordError(false);
	}
	const error = () => {
		setUsernameError(true);
		setPasswordError(true);
	}
	const handleUsername = (e) => setUsername(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	return (
		<div className="login-container">
			<h3>Система администрирования</h3>
			<div className="form-column">
				<label>
					<input type="text" placeholder=" " iserror={`${usernameError!==undefined&&usernameError}`} value={username} onChange={handleUsername} className="input-panel" maxLength={20} />
					<span className="placeholder">Имя пользователя</span>
				</label>
			</div>
			<div className="form-column">
				<label>
					<input type="password" placeholder=" " iserror={`${passwordError!==undefined&&passwordError}`} value={password} onChange={handlePassword} className="input-panel" maxLength={20} />
					<span className="placeholder">Пароль</span>
				</label>
			</div>
			<button onClick={next} className="login__btn">Войти</button>
		</div>
	);
}

export default LoginScreen;