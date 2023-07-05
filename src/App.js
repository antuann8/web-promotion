import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

// screens
import Start			from './Screens/Start';
import Login			from './Screens/Login';

import Dashboard		from './Screens/Dashboard';

import Users			from './Screens/Users';
import User				from './Screens/User';

import Requisites 		from "./Screens/Requisites";
import Requisite		from "./Screens/Requisite";
// import AddRequisite		from "./Screens/AddRequisite";

import letterCreator 	from "./Screens/LetterCreator";
import letterTemplates 	from "./Screens/LetterTemplates";

import Error			from './Screens/Error';




// start
const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={Start} exact />
			<Route path='/login' component={Login} exact />

			<Route path='/dashboard' component={Dashboard} exact />

			<Route path='/users' component={Users} exact />
			<Route path='/user' component={User} exact />
			<Route path='/user/:id' component={User} exact />

			<Route path='/requisites' component={Requisites} exact />
			<Route path='/requisite' component={Requisite} exact />
			{/*<Route path='/addRequisite' component={AddRequisite} exact />*/}

			<Route path={'/lettercreator'} component={letterCreator} exact/>
			<Route path={'/lettertemplates'} component={letterTemplates} exact/>

			<Route path='/error' component={Error} status={500} exact />
			<Route path='/error401' component={Error} status={401} exact />
			<Route path='/error403' component={Error} status={403} exact />
			<Route path='/error404' component={Error} status={404} exact />
			<Route path='*' component={Error} status={404} />
		</Switch>
	</BrowserRouter>
);

export default App;