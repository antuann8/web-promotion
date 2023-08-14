import React, {useContext, useEffect, useState} from 'react';
import Template from "../../Components/Template";
import {useHistory} from "react-router-dom";

// styles
import './styles.css';
import Loader from "../../Components/Loader";
import {Context} from "../../Components/Provider";
import {getTemplateNames} from "../../Models/Templates";


const LetterTemplatesScreen = () => {

    const [templateNames, setTemplateNames] = useState([]);

    useEffect(() => {
        const getNames = async () => {

            const res = await getTemplateNames();
            setTemplateNames(res);
        }
        getNames();
    }, []);

    useEffect(() => {
        console.log(templateNames);
    }, [templateNames]);

    const history = useHistory();


    const handleClick = (name) => {
        // передаем параметры в объекте вторым аргументом
        history.push('/letter-template', {
            name: name,
        });
    }

    return (
        <Template>
            <h1>Выберите шаблон письма для рассылки</h1>
            <table className='templates__table'>
                <thead className='templates__table__header'>
                <tr className='templates__table__row table-tr__th'>
                    <th>№</th>
                    <th>Название шаблона</th>
                </tr>
                </thead>
                <tbody>
                {templateNames ? templateNames.map((item, index) =>
                    <tr className='templates__table__row templates__link table-tr__td' key={index}
                        onClick={() => handleClick(item.name)}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                    </tr>
                ) : null}
                </tbody>
            </table>
        </Template>
    )
}

export default LetterTemplatesScreen;