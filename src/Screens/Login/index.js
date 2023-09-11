import React from 'react';

// plugins
import {useForm} from "react-hook-form";

// models
import {Users} from './../../Models';

// helpers
import {ls} from '../../Globals/Localstorage';

// styles
import './styles.css';

const LoginScreen = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {

		const {username, password} = data;

		// alert(`Your name is ${data.username}, password is ${data.password}`)

		const res = await Users.login(username, password);
		console.log(res.user);
		ls('user', res.user);
		ls('token', res.token);
		window.location.href='/';
	};

	return (
		<div className="login-container">
			<h3>Система администрирования</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-column">
					<label>
						<input
							{...register('username', { required: true, maxLength: 20 })}
							placeholder=" "
							className="input-panel"
							type="text"
						/>
						<span className="placeholder">Имя пользователя</span>
					</label>
				</div>
				<div className="form-column">
					<label>
						<input
							type="password"
							placeholder=" "
							className="input-panel"
							{...register('password', { required: true, maxLength: 20 })}
						/>
						<span className="placeholder">Пароль</span>
					</label>
				</div>
				<button className="login__btn">Войти</button>
			</form>
		</div>
	);
}

export default LoginScreen;