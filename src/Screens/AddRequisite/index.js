import {useHistory} from "react-router-dom";
import React, {useState} from "react";

import {add} from "../../Models/Requisites";

import Template from "../../Components/Template";

const AddRequisiteScreen = () => {

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData.entries());

        await add(values);
    };

    const handleGoBack = (event) => {
        event.preventDefault();
        history.push('/requisites');
    }

    function handleClick() {
        alert('Упражнение добавлено');
    }

    return (
        <Template>
            <div className='requisite__container__head'>
                <div className='head__edit'>
                    <button onClick={handleGoBack} className='back-button'></button>
                    <h4 className='requisite__header left'>Создание реквизита</h4>
                </div>
            </div>
            <form className='requisite__form-container' onSubmit={handleSubmit}>
                <div className='requisite__form-container__grid'>
                    <label>
                        <span className='requisite__form-container__name'>Название сервиса</span>
                        <input className='requisite__form-container__input' type="text" name="type" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Название организации</span>
                        <input className='requisite__form-container__input' type="text" name="organizationName" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Сайт</span>
                        <input className='requisite__form-container__input' type="text" name="site" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Адрес</span>
                        <input className='requisite__form-container__input' type="text" name="address" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Email</span>
                        <input className='requisite__form-container__input' type="text" name="email" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>НДС</span>
                        <input className='requisite__form-container__input' type="text" name="nds" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>KKT (Регистрационный номер кассового устройства)</span>
                        <input className='requisite__form-container__input' type="text" name="KKT" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФН (Фискальный накопитель)</span>
                        <input className='requisite__form-container__input' type="text" name="FN" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФД (Порядковый номер фискального документа)</span>
                        <input className='requisite__form-container__input' type="text" name="FD" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ФП (Фискальный признак документа)</span>
                        <input className='requisite__form-container__input' type="text" name="FP" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>ОГРН</span>
                        <input className='requisite__form-container__input' type="text" name="ogrn" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>КПП (Код причины постановки)</span>
                        <input className='requisite__form-container__input' type="text" name="kpp" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>БИК</span>
                        <input className='requisite__form-container__input' type="text" name="bik" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Счет</span>
                        <input className='requisite__form-container__input' type="text" name="account" />
                    </label>
                    <label>
                        <span className='requisite__form-container__name'>Корреспондентский счет</span>
                        <input className='requisite__form-container__input' type="text" name="correspondentAccount" />
                    </label>
                </div>
                <div className='requisite__form-container__button-container'>
                    <button onClick={handleClick} className='requisite__form-container__button ' type="submit">Сохранить</button>
                </div>
            </form>
        </Template>
    );
};

export default AddRequisiteScreen;