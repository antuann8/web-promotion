import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

// components
import Template from '../../Components/Template';
import Loader from '../../Components/Loader';
import DataGrid,{dgDataPrepare} from '../../Components/DataGrid';
import NotFound from '../../Components/NotFound';

// models
import {Users} from './../../Models';

// helpers
import {ls} from '../../Globals/Localstorage';
import {empty} from '../../Globals/Utils';

// globals
import {userStatusName} from '../../Globals/Constants';

const UsersScreen = () => {
	const [dataFull, setDataFull] = useState(null);
	const [users, setUsers] = useState(null);
	const [status, setStatus] = useState(null);
	useEffect(() => {
		const usersGet = async () => {
			const user = ls('user');
			if (!user) {
				window.location.href = '/login';
				return;
			}
			const d = await Users.get();
			setUsers(dataSet(d));
			setDataFull(d);
		};
		usersGet();
	}, []);
	const dataSet = (data) => dgDataPrepare(data, 'users', ['_id','name','phone','createdAt','status']);
	const dataStatus = (data, status) => data.filter(f => f.status === status);
	const handleStatus = (e) => {
		let status = e.target.value;
		let d = dataFull;
		if (empty(status)) status = null;
		if (status !== null) d = dataStatus(d, parseInt(status));
		setUsers(dataSet(d));
		setStatus(status);
	}
	return (
		<Template>
			{users === null ? <Loader /> :
				<DataGrid
					title={'Пользователи'} 
					keys={['Имя','Телефон','Дата регистрации','Статус']}
					link={'user'}
					data={users}
					dataFull={dataFull}
					controlAdd={<Link to={'/user'}>Добавить</Link>}
					controlPanel={<>
						<div></div>
						<div>
							<span>Статус</span>
							<select onChange={handleStatus}>
								<option value=" ">все</option>
								{userStatusName.map((v,i) => <option key={i} value={i}>{v}</option>)}
							</select>
						</div>
					</>}
					notFound={<NotFound />} />
			}
		</Template>
	);
};

export default UsersScreen;