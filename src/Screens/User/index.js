import React, {useEffect,useState} from 'react';

// plug-ins
import Moment from 'moment';
import 'moment/locale/ru';

// components
import Template from '../../Components/Template';
import Loader from '../../Components/Loader';
import Back from '../../Components/Back';
import Alert,{alertShow} from '../../Components/Alert';
import {useInput} from '../../Components/Hooks/Input';
import NotFound from '../../Components/NotFound';

// models
import {Users} from './../../Models';

// helpers
import {ls} from '../../Globals/Localstorage';
import {empty,phoneNormalize} from '../../Globals/Utils';

// globals
import {userStatus,userStatusName} from '../../Globals/Constants';

// styles
import './styles.css';

const UserScreen = (props) => {
	const [id] = useState(props.match.params.id||0);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [userOwner, setUserOwner] = useState(null);
	const {value:name, setValue:setName, bind:bindName} = useInput('');
	const {value:phone, setValue:setPhone, bind:bindPhone} = useInput('');
	const {value:username, setValue:setUsername, bind:bindUsername} = useInput('');
	const {value:password, bind:bindPassword} = useInput('');
	const {value:comment, setValue:setComment, bind:bindComment} = useInput('');
	const [status, setStatus] = useState(userStatus.ACTIVE);
	useEffect(async () => {
		Moment.locale('ru');
		const user = ls('user');
		setUserOwner(user);
		const userGet = async () => {
			if (id) {
				const user = await Users.getById(id);
				if (user) {
					setName(user.name);
					setPhone(user.phone);
					setUsername(user.username);
					setComment(user.comment);
					setStatus(user.status);
					setUser(user);
				}
			}
			setLoading(false);
		};
		await userGet();
	}, [id]);
	const selectHandle = (e) => setStatus(parseInt(e.target.value));
	const save = async (e) => {
		e.preventDefault();
		const data = {
			name,
			phone,
			username,
			comment,
			userId:userOwner._id,
			userFullName:userOwner.name
		};
		if (id) data.status = status;
		if (!empty(password)) data.password = password;
		try {
			if (id === 0) {
				await Users.add(data);
				alertShow('Пользователь добавлен');
			} else {
				await Users.update(id, data);
				alertShow('Данные обновлены');
			}
		} catch (ex) {
			console.log(ex)
			alertShow('<b>Ошибка!</b><br/>При сохранении данных возникла ошибка', true);
		}		
	}
	return (
		<Template>
			{loading ? <Loader /> :
				<form onSubmit={save}>
					<Back title={id ? 'Редактирование пользователя' : 'Добавление пользователя'} link='users'
						controlAdd={<a href="/user" className="add">Добавить</a>}  />
					{id && user === null ? <NotFound /> :
						<div className="form-container">
							<div className="cell">
								<label>
									<span>Имя</span>
									<input type="text" {...bindName} placeholder="Имя" required />
								</label>
							</div>
							<div className="cell-oneline">
								<div className="cell">
									<label>
										<span>Имя пользователя</span>
										<input type="text" {...bindUsername} placeholder="Имя пользователя" required />
									</label>
								</div>
								<div className="cell">
									<label>
										<span>Пароль</span>
										<input type="password" {...bindPassword} placeholder="Пароль" />
									</label>
								</div>
							</div>
							<div className="cell">
								<label>
									<span>Телефон</span>
									<input type="tel" {...bindPhone} placeholder="Телефон" required />
								</label>
							</div>
							{id ? 
								<div className="cell">
									<label>
										<span>Статус</span>
										<select className="select-minimal" onChange={selectHandle} value={status}>
											{userStatusName.map((v,i) => i === 0 ? null : <option key={i} value={i}>{v}</option>)}
										</select>
									</label>
								</div> : null}
							{status !== userStatus.ACTIVE ?
								<>
									<div className="notice">
										<span>Внимание! Вы выбрали статус пользователя <b>{userStatusName[status]}</b>. Необходимо указать причину смены статуса</span>
									</div>
									<div className="cell">
										<label>
											<span>Описание блокировки</span>
											<textarea name="comment" placeholder="Опишите причину блокировки оператора" className="desc" {...bindComment} required></textarea>
										</label>
									</div>
								</> : null}
							{id ?
								<>
									<div className="cell">
										<label>
											<span>Дата регистрации</span>
											<div>{Moment(user.createdAt).format('lll')}</div>
										</label>
									</div>
									<div className="cell-oneline">
										<div className="cell">
											<label>
												<span>Последние изменения</span>
												<div>{Moment(user.updatedAt).format('lll')}</div>
											</label>
										</div>
										<div className="cell">
											<label>
												<span>Внес изменения</span>
												<div>{user.userFullName}</div>
											</label>
										</div>
									</div>
								</> : null}
							<div className="buttons">
								<button type="submit" className='user__button'>Сохранить</button>
							</div>
						</div>
					}
				</form>
			}
			<Alert />
		</Template>
	);
};

export default UserScreen;