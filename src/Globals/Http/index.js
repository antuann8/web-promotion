import {API} from '../Constants';

// helpers
import { ls } from '../Localstorage';

const isDevelopmentMode = process.env.NODE_ENV !== 'production';


const request = async (endpoint, data, isFile) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key
	});
	if (!isFile) headers.append('Content-Type', 'application/json');
	const token = ls('token');
	if (token)
		headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method:'POST',
		headers,
		body: data ? (isFile ? data : JSON.stringify(data)) : null
	};
	const response = await fetch(url, options);
	if (response.status === 200) {
		if (isDevelopmentMode) console.log(response);
		try {
			const json = await response.json();
			if (isDevelopmentMode) console.log(json);
			return json;
		} catch (ex) {
			return null;
		}
	}
	console.log('error:', response);
	throw await response.json();
};

const get = async (endpoint, data, isFile) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key
	});
	if (!isFile) headers.append('Content-Type', 'application/json');
	const token = ls('token');
	if (token)
		headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method:'GET',
		headers,
		body: data ? (isFile ? data : JSON.stringify(data)) : null
	};
	const response = await fetch(url, options);
	if (response.status === 200) {
		if (isDevelopmentMode) console.log(response);
		try {
			const json = await response.json();
			if (isDevelopmentMode) console.log(json);
			return json;
		} catch (ex) {
			return null;
		}
	}
	console.log('error:', response);
	throw await response.json();
};

const getHtml = async (endpoint, data) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key,
		'Content-Type': 'application/json',
	});
	const token = ls('token');
	if (token) headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method: 'GET',
		headers,
		body: data ? JSON.stringify(data) : null,
	};
	const response = await fetch(url, options);
	if (response.status === 200) {
		if (isDevelopmentMode) console.log(response);
		try {
			const html = await response.text();
			if (isDevelopmentMode) console.log(html);
			return html;
		} catch (ex) {
			return null;
		}
	}
	console.log('error:', response);
	throw await response.json();
};

const requestHtmlNotResponse = async (endpoint, data, isFile) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key
	});
	if (!isFile) headers.append('Content-Type', 'text/html');
	const token = ls('token');
	if (token)
		headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method: 'POST',
		headers,
		body: data ? (isFile ? data : data) : null
	};
	await fetch(url, options);
};


const requestJsonGetHtml = async (endpoint, data) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key,
		'Content-Type': 'application/json'
	});
	const token = ls('token');
	if (token)
		headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(data)
	};
	const response = await fetch(url, options);
	if (response.status === 200) {
		if (isDevelopmentMode) console.log(response);
		try {
			const html = await response.text();
			if (isDevelopmentMode) console.log(html);
			return html;
		} catch (ex) {
			return null;
		}
	}
	console.log('error:', response);
	throw await response.json();
};

const requestJsonNotResponse = async (endpoint, data) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key,
		'Content-Type': 'application/json'
	});
	const token = ls('token');
	if (token)
		headers.append('Authorization', `Bearer ${token}`);
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(data)
	};
	await fetch(url, options);
};

const requestImageNotResponse = async (endpoint, data) => {
	const url = `${API.url}${endpoint}`;
	const headers = new Headers({
		'X-Token': API.key,
	});
	const token = ls('token');
	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	const options = {
		method: 'POST',
		headers,
		body: data,
	};
	await fetch(url, options);
};


const Http = {
	request,
	get,
	getHtml,
	requestHtmlNotResponse,
	requestJsonGetHtml,
	requestJsonNotResponse,
	requestImageNotResponse,
};

export default Http;