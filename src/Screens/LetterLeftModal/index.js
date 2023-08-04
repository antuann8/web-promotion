import React, {useContext, useState} from 'react';

// styles, photos
import './styles.css';
import ex1 from './images/ex-1.jpg';
import {Context} from "../../Components/Provider";


const LetterLeft = () => {

    const {setShowModal} = useContext(Context);

    return (
        <div>
            <h1 className='education__header'>Обучалка по вставке шаблонных переменных</h1>
            <div className='education__description'>
                Чтобы вставить шаблонную переменную, используйте <strong>фигурные скобки &#123;  &#125;</strong>
                {/*, вместо "1": вставьте переменную, которую хотите  в качестве шаблона. Вставьте такое выражение внутри текста каждого блока в любом мемсте и шаблонная перменная  будет работать*/}
            </div>
            <div className='education__description'>
                Шаблонную переменную нужно вставлять <i>между</i> фигурными скобками.
            </div>
            <strong>Например:</strong>
            <div>
                {/*<div className="letter__redactor__description">Введите текст блока</div>*/}
                <input
                    className="letter__redactor__description-value"
                    type="text"
                    value="Привет, {name}" disabled
                />
            </div>
            <div>Вставка шаблонных переменных позволяет совершать многократное использование данных</div>
            <strong>Например:</strong>
            <div>
                <input
                    className="letter__redactor__description-value"
                    type="text"
                    value="Привет, Олег" disabled
                />
            </div>
            <div>
                <input
                    className="letter__redactor__description-value"
                    type="text"
                    value="Привет, Игорь" disabled
                />
            </div>
            <div>
                <input
                    className="letter__redactor__description-value"
                    type="text"
                    value="Привет, Александр" disabled
                />
            </div>
            <div>В данном случае шаблонная переменная <strong>name</strong> позволила использовать сразу три имени</div>
            <button className="letter__redactor__button-left education__closed-button" onClick={() => setShowModal(false)}>
                Закрыть
            </button>
        </div>
    );
};

export default LetterLeft;
