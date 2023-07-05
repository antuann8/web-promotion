import React, {useEffect, useState} from 'react';
import { useLocation, useHistory } from "react-router-dom";

// styles
import './styles.css';

import Template from "../../Components/Template";
import Loader from "../../Components/Loader";
import {update} from "../../Models/Requisites";

const ExerciseScreen = () => {

    const location = useLocation();
    const history = useHistory();

    const [formData, setFormData] = useState({
        id: location.state.item._id,
        inn: location.state.item.inn,
        organizationName: location.state.item.organizationName,
        site: location.state.item.site,
        address:  location.state.item.address,
        email: location.state.item.email,
        nds: location.state.item.nds,
        KKT: location.state.item.KKT,
        FN: location.state.item.FN,
        FD: location.state.item.FD,
        FP: location.state.item.FP,
        ogrn: location.state.item.ogrn,
        kpp: location.state.item.kpp,
        bik: location.state.item.bik,
        account: location.state.item.account,
        correspondentAccount: location.state.item.correspondentAccount,
        type: location.state.item.type,
        typeName: location.state.item.typeName
    });

    console.log(location.state);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const updateRequisite = {
            "code": formData.code,
            "inn": formData.inn,
            "organizationName": formData.organizationName,
            "site": formData.site,
            "address":  formData.address,
            "email": formData.email,
            "nds": formData.nds,
            "KKT": formData.KKT,
            "FN": formData.FN,
            "FD": formData.FD,
            "FP": formData.FP,
            "ogrn": formData.ogrn,
            "kpp": formData.kpp,
            "bik": formData.bik,
            "account": formData.account,
            "correspondentAccount": formData.correspondentAccount,
            "type": formData.type,
            "typeName": formData.typeName
        };
        await update(location.state.item._id, updateRequisite);
    };

    const handleGoBack = (event) => {
        event.preventDefault();
        history.push('/requisites');
    }

    function handleClick() {
        alert('Сохранено');
    }

    return (
        <Template>
            <div className='requisite__container__head'>
                <div className='head__edit'>
                    <button onClick={handleGoBack} className='back-button'></button>
                    <h4 className='requisite__header left'>Редактирование реквизита</h4>
                </div>
                {/*<h4 className='requisite__header right'>Фотографии / Видео упражнения</h4>*/}
            </div>
            <form className='requisite__form-container' onSubmit={handleSubmit}>
                <div className='requisite__form-container__grid'>
                    <label>
                        <span className='requisite__form-container__name'>Название сервиса</span>
                        <input className='requisite__form-container__input' type="text" name="typeName" value={formData.typeName} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Код сервиса</span>
                        <input className='requisite__form-container__input' type="text" name="type" value={formData.type} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Название организации</span>
                        <input className='requisite__form-container__input' type="text" name="organizationName" value={formData.organizationName} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Сайт</span>
                        <input className='requisite__form-container__input' type="text" name="site" value={formData.site} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Адрес</span>
                        <input className='requisite__form-container__input' type="text" name="address" value={formData.address} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Email</span>
                        <input className='requisite__form-container__input' type="text" name="email" value={formData.email} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>НДС</span>
                        <input className='requisite__form-container__input' type="text" name="nds" value={formData.nds} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>KKT (Регистрационный номер кассового устройства)</span>
                        <input className='requisite__form-container__input' type="text" name="KKT" value={formData.KKT} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФН (Фискальный накопитель)</span>
                        <input className='requisite__form-container__input' type="text" name="FN" value={formData.FN} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФД (Порядковый номер фискального документа)</span>
                        <input className='requisite__form-container__input' type="text" name="FD" value={formData.FD} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФП (Фискальный признак документа)</span>
                        <input className='requisite__form-container__input' type="text" name="FP" value={formData.FP} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ОГРН</span>
                        <input className='requisite__form-container__input' type="text" name="ogrn" value={formData.ogrn} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>КПП (Код причины постановки)</span>
                        <input className='requisite__form-container__input' type="text" name="kpp" value={formData.kpp} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>БИК</span>
                        <input className='requisite__form-container__input' type="text" name="bik" value={formData.bik} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Счет</span>
                        <input className='requisite__form-container__input' type="text" name="account" value={formData.account} onChange={handleInputChange} />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Корреспондентский счет</span>
                        <input className='requisite__form-container__input' type="text" name="correspondentAccount" value={formData.correspondentAccount} onChange={handleInputChange} />
                    </label>
                </div>
                <div className='requisite__form-container__button-container'>
                    <button onClick={handleClick} className='requisite__form-container__button ' type="submit">Сохранить</button>
                </div>
            </form>
        </Template>
    );
};

export default ExerciseScreen;