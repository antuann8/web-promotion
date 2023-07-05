import {Link} from 'react-router-dom';

// plug-ins
import Moment from 'moment';

// helpers
import {phoneFormatter,moneyFormat} from '../../Globals/Utils';

// globals
import {userStatusName,commonStatusName} from '../../Globals/Constants';

// styles
import './styles.css';

const linKeys = ['name','firstName','userFullName','paymentId','car'];

const DataGrid = ({title,keys,data,dataFull,tileContent,link,notFound,controlPanel,controlAdd}) => {
	const linkShow = (link, item, parent) => {
		if (linKeys.includes(item.key)) return <Link to={`${link}/${idGet(parent)}`}>{item.show}</Link>;
		return item.show;
	}
	const idGet = (parent) => {
		for (const item of parent) {
			if (item.key === '_id') return item.value;
		}
		return 0;
	}
	return (
		<div className="dg-container">
			<h4>
				{title}
				{controlAdd || null}
			</h4>
			{dataFull === null || dataFull.length === 0 ? notFound
				:
					<div className="list">
						<div className="controls">
							{controlPanel || null}
						</div>
						{data === null || data.length === 0 ? notFound
							:
								tileContent ||
									<table>
										<thead>
											<tr>
												<th>№</th>
												{keys.map((v,i) => <th key={i}>{v}</th>)}
											</tr>
										</thead>
										<tbody>
											{data.map((v,i) => <tr key={i}>
												<td>{i+1}</td>
												{v.map((r,j) => r.key === '_id' || r.key === 'catalogId' ? null : <td className='name__hover' key={j}>{linkShow(link,r,v)}</td>)}
											</tr>)}
										</tbody>
									</table>
						}
					</div>
			}
		</div>
	);
};
export default DataGrid;

export const dgDataPrepare = (data, tableName, keys = [], collection = {}) => {
	const out = [];
	data.forEach((v) => {
		const inner = [];
		if (keys.length === 0) {
			for (const k in v) inner.push(valueGet(k, v[k], tableName, collection));
		} else keys.forEach((k) => inner.push(valueGet(k, v[k], tableName, collection)));
		out.push(inner);
	});
	return out;
}
const valueGet = (key, value, tableName, collection) => {
	let show = value;
	switch (key) {
		case 'name':
			show = value || 'н/д';
			break;
		case 'phone':
		case 'userPhone':
			show = value ? phoneFormatter(`${value}`) : value;
			break;
		case 'userFullName':
			show = value || '—';
			break;
		case 'createdAt':
		case 'updatedAt':
			show = Moment(value).format('DD.MM.y, H:mm');
			break;
		case 'type':
			show = typeGet(tableName, value);
			break;
		case 'status':
			show = statusGet(tableName, value);
			break;
		default: break;
	}
	return {key,value,show};
}
const statusGet = (tableName, value) => {
	switch(tableName) {
		case 'users':
			return userStatusName[value];
		default: return commonStatusName[value];
	}
}
const typeGet = (tableName, value) => {
	switch(tableName) {
		default: return value;
	}
}