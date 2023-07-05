import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// plug-ins
import { AreaChart, XAxis, Area } from 'recharts';
import Moment from 'moment';

// components
import Template from '../../Components/Template';
import Loader from '../../Components/Loader';

// styles
import './styles.css';

const DashboardScreen = () => {
	const [loading, setLoading] = useState(true);

	// const getAPI = async (url, data) => {
	// 	// const s2skey = 'J<DxyN+YT^$d_//=eq{^6?/@(FSd+5{:D,/BUcqAH]{Okl281.G>?rYf4?ar-KN';
	// 	const options = {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			// 'X-Token': s2skey,
	// 			'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxYzYxZWZlZmE4ODYwMzBhYzk1Y2QiLCJzdGF0dXMiOjEsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsIl9fdiI6MCwibmFtZSI6IkFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkR2Eybnh5c3NIV3ZFV09jQ3RTckJELm9rdzBURWJmQUduTXJZRUwwSkhNT3ZmMTV5STFuTjYiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1MzM5NDQwLCJleHAiOjE2ODYyMDM0NDB9.lElAOdOCWuCrg_Qr2ovOnU1OmEDjUc0bCDYrb8x8J48',
	// 		},
	// 		body: JSON.stringify(data)
	// 	};
	// 	const response = await fetch(url, options);
	// 	if (response.status === 200) {
	// 		const json = await response.json();
	// 		return json;
	// 	}
	// 	return null;
	// };
	//
	// const handleClick = async () => {
	// 	const url = 'http://localhost:8190/api/v1/s2s/order';
	// 	const data = {
	// 		"id": "20230411134358163002",
	// 		"type" : 2
	// 	};
	// 	const result = await getAPI(url, data);
	// 	console.log(result); // or save the result to the component's state
	// };
	//
	// useEffect(() => {
	// 	handleClick();
	// }, []);

	// const openFileInNewWindow = () => {
	// 	const payload = {
	// 		paymentId: '20230411140900497002',
	// 		type: 2,
	// 		responseType: "html",
	// 	};
	//
	// 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxYzYxZWZlZmE4ODYwMzBhYzk1Y2QiLCJzdGF0dXMiOjEsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsIl9fdiI6MCwibmFtZSI6IkFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkR2Eybnh5c3NIV3ZFV09jQ3RTckJELm9rdzBURWJmQUduTXJZRUwwSkhNT3ZmMTV5STFuTjYiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg2MjE3MTU3LCJleHAiOjE2ODcwODExNTd9.5kgm-yGQQdwMxIPeyq1AdNtdTFZIr97eXdVOqpYhMXk";
	//
	// 	const queryString = new URLSearchParams({
	// 		paymentId: payload.paymentId,
	// 		type: payload.type,
	// 		responseType: payload.responseType,
	// 	}).toString();
	//
	// 	const url = `http://localhost:8190/api/v1/check?${queryString}`;
	//
	// 	fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		}
	// 	})
	// 		.then(response => {
	// 			if (!response.ok) {
	// 				throw new Error('Ошибка при выполнении запроса');
	// 			}
	// 			return response.text();
	// 		})
	// 		.then(html => {
	// 			const newWindow = window.open();
	// 			if (!newWindow) {
	// 				throw new Error('Не удалось открыть новое окно');
	// 			}
	// 			newWindow.document.open();
	// 			newWindow.document.write(html);
	// 			newWindow.document.close();
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 			// Обработка ошибок
	// 		});
	// };
	//
	// const downloadPDF = () => {
	// 	console.log('downloadPDF called');
	// 	const payload = {
	// 		paymentId: '20230411140900497002',
	// 		type: 2,
	// 		responseType: "pdf",
	// 	};
	// 	console.log('payload:', payload);
	//
	// 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxYzYxZWZlZmE4ODYwMzBhYzk1Y2QiLCJzdGF0dXMiOjEsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMTVUMDU6NDE6NTAuNzAxWiIsIl9fdiI6MCwibmFtZSI6IkFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkR2Eybnh5c3NIV3ZFV09jQ3RTckJELm9rdzBURWJmQUduTXJZRUwwSkhNT3ZmMTV5STFuTjYiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg2MjE3MTU3LCJleHAiOjE2ODcwODExNTd9.5kgm-yGQQdwMxIPeyq1AdNtdTFZIr97eXdVOqpYhMXk";
	//
	// 	const queryString = new URLSearchParams({
	// 		paymentId: payload.paymentId,
	// 		type: payload.type,
	// 		responseType: payload.responseType,
	// 	}).toString();
	// 	console.log('queryString:', queryString);
	//
	// 	const url = `http://localhost:8190/api/v1/check?${queryString}`;
	// 	console.log('url:', url);
	//
	// 	fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		}
	// 	})
	// 		.then(response => {
	// 			console.log('response:', response);
	// 			if (!response.ok) {
	// 				throw new Error('Ошибка при выполнении запроса');
	// 			}
	// 			return response.blob();
	// 		})
	// 		.then(blob => {
	// 			console.log('blob:', blob);
	// 			const fileURL = URL.createObjectURL(blob);
	// 			console.log('fileURL:', fileURL);
	// 			window.open(fileURL, '_blank');
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 			// Обработка ошибок
	// 		});
	// };
// http://localhost:8190/api/v1/check?paymentId=20230411140900497002&type=2&responseType=html

	// const openFile = () => {
		// const payload = {
		// 	name: 'Alex',
		// 	city: 'Kazan',
		// 	companyName: 'Pavit Team',
		// 	email: 'antontest66@gmail.com',
		// };

	// 	const payload = [
	// 	{
	// 		name: "Anton",
	// 		city: "Moscow",
	// 		companyName: "Pavit Team",
	// 		email: "kashirin.antosha@mail.ru"
	// 	},
	// 	{
	// 		name: "Valera",
	// 		city: "Samara",
	// 		companyName: "Pavit Team",
	// 		email: "antontest66@gmail.com"
	// 	},
	// ];
	//
	// 	// const url = 'http://localhost:8190/api/v1/promotion';
	// 	const url = 'http://localhost:8190/api/v1/promotions';
	//
	//
	// 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2YTBmY2RkYWIzYzg0NGUzZWRjYmMiLCJuYW1lIjoi0JDQtNC80LjQvSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYSQxMCRHYTJueHlzc0hXdkVXT2NDdFNyQkQub2t3MFRFYmZBR25NcllFTDBKSE1PdmYxNXlJMW5ONiIsInBob25lIjoiNzkxMTExMTExMTExIiwic3RhdHVzIjoxLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTI2VDE2OjE0OjAyLjg3OVoiLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTI2VDE2OjE0OjAyLjg3OVoiLCJpYXQiOjE2ODcxODU0OTgsImV4cCI6MTY4ODA0OTQ5OH0.sWuo42kcQ85DxBfX9IsBRtvq_MyrDFXLWcEiQvVeIcs";
	//
	// 	fetch(url, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Authorization': `Bearer ${token}`,
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(payload)
	// 	})
	// 		.then(response => {
	// 			if (!response.ok) {
	// 				throw new Error('Ошибка при выполнении запроса');
	// 			}
	// 			return response.text();
	// 		})
	// 		.then(html => {
	// 			const newWindow = window.open();
	// 			if (!newWindow) {
	// 				throw new Error('Не удалось открыть новое окно');
	// 			}
	// 			newWindow.document.open();
	// 			newWindow.document.write(html);
	// 			newWindow.document.close();
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 			// Обработка ошибок
	// 		});
	// };

	useEffect(async () => {
		setLoading(false);
	}, []);

	return (
		<Template>
			{loading ? (
				<Loader />
			) : (
				<div className="dashboard-container">
					<h2>Дашборд</h2>
					{/*<div><button onClick={openFileInNewWindow}>Открыть файл</button></div>*/}
					{/*<button onClick={handleClick}>Межсерверное взаимодействие</button>*/}
					{/*<div><button onClick={check}>Check</button></div>*/}
					{/*<div><button onClick={openFile}>Открыть файл</button></div>*/}
					<br/>
					{/*<div>*/}
					{/*	<button onClick={downloadPDF}>*/}
					{/*		Скачать пдф версию чека*/}
					{/*	</button>*/}
					{/*</div>*/}
				</div>
			)}
		</Template>
	);
};

export default DashboardScreen;