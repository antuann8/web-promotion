import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

// plug-ins
import {useModal} from 'react-hooks-use-modal';

// helpers
import {ls} from '../../Globals/Localstorage';

// images
import menuIcon from '../../Images/menu.icon.svg';
import closeMenuIcon from '../../Images/close.svg';

// styles
import './styles.css';

const Template = (props) => {
	const [Modal, open, close] = useModal('root', {preventScroll:true});
	const [user, setUser] = useState(null);
	const done = () => {
		ls();
		close();
		window.location.href='/login';
	}
	const show = (e) => {
		e.preventDefault();
		open();
	}
	const hide = (e) => {
		e.preventDefault();
		close();
	}
	const openMenu = (e) => {
		let menu = document.querySelector('.menu');
		menu.classList.add('active')
	}
	const closeMenu = (e) => {
		let menu = document.querySelector('.menu');
		menu.classList.remove('active')
	}
	useEffect(() => {
		const user = ls('user');
		if (user === null) {
			window.location.href='/error403';
			return;
		}
		setUser(user);
	}, []);
	const isselect = (page) => window.location.pathname.indexOf(page) !== -1 ? 'selected' : null;
	return (
		<div className="container">
			<div className="menu-open" onClick={openMenu}>
				<img src={menuIcon} alt="menu-icon"/>
			</div>
			<div className="menu">
				<div className="menu-close" onClick={closeMenu}>
					<img src={closeMenuIcon} alt="menu-icon"/>
				</div>
				<ul className="menu__header">
					<li className="menu__header__item"><b className='manage'>Диспетчерская</b></li>
					<li className="menu__header__item"><Link className="menu__arrow" to={'/dashboard'} className={isselect('dashboard')}>Главная</Link></li>
					<li className="menu__header__item"><Link className="menu__arrow" to={'/lettercreator'} className={isselect('lettercreator')}>Визуальный редактор</Link></li>
					<li className="menu__header__item"><Link className="menu__arrow" to={'/lettertemplates'} className={isselect('lettertemplates')}>Шаблоны писем</Link></li>

					<li className="menu__header__item"><b>Администрирование</b></li>
					<li className="menu__header__item"><Link className="menu__arrow" to={'/users'} className={isselect('user')}>Пользователи</Link></li>
				</ul>
				<div className="logoff">
					<Link to={'/'} onClick={show}>Выход из системы</Link>
				</div>
			</div>
			<div className="main">
				{props.children}
			</div>
			<Modal>
				<div className="confirmcontainer">
					<h4>Подтвердите пожалуйста</h4>
					Вы уверены что хотите выйти из системы администрирования?
					<div className="buttons">
						<button onClick={done}>Да</button>
						<Link to={'/'} className="cancel" onClick={hide}>Отмена</Link>
					</div>
				</div>
			</Modal>
		</div>
	);
};
export default Template;