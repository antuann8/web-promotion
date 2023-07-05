import React, {useEffect, useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Template from "../../Components/Template";
import {get, add} from "../../Models/Requisites";


// styles
import './styles.css';
import Loader from "../../Components/Loader";

const RequisitesScreen = () => {

    const history = useHistory();
    const [requisite, setRequisite] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await get(); // Получаем данные с сервера
                setRequisite(result);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleClick = (item) => {
        // передаем параметры в объекте вторым аргументом
        history.push('/requisite', {item});
    }

    const handleGoToAddExercise = (event) => {
        event.preventDefault();
        history.push('/addRequisite');
    }

    return (
        <Template>
            <div className='requisites__container'>
                <div className='requisite__container__head'>
                    <h3 className='requisites__header'>Реквизиты</h3>
                    {/*<button onClick={handleGoToAddExercise} className='requisite__header add'>Добавить</button>*/}
                </div>
                {   requisite ?
                    <table className='requisites__table'>
                        <thead className='requisites__table__header'>
                        <tr className='requisites__table__row'>
                            <th>Код сервиса</th>
                            <th>Название сервиса</th>
                            <th>Название организации</th>
                            <th>ИНН</th>
                            <th>Сайт</th>
                            <th>Адрес</th>
                            <th>ОГРН</th>
                            <th>БИК</th>
                            <th>Счет</th>
                            <th>Корреспондентский счет</th>
                        </tr>
                        </thead>
                        <tbody>
                        {requisite ? requisite.map((item, index) =>
                            <tr className='requisites__table__row requisites__link table-tr__td' key={index}
                                onClick={() => handleClick(item)} >
                                <td>{item.type}</td>
                                <td>{item.typeName}</td>
                                <td>{item.organizationName || '-'}</td>
                                <td>{item.inn || '-'}</td>
                                <td>{item.site || '-'}</td>
                                <td>{item.address || '-'}</td>
                                <td>{item.ogrn || '-'}</td>
                                <td>{item.bik || '-'}</td>
                                <td>{item.account || '-'}</td>
                                <td>{item.correspondentAccount || '-'}</td>
                            </tr>
                        ) : null}
                        </tbody>
                    </table> : <Loader/>
                }
            </div>
        </Template>
    )
}

export default RequisitesScreen;