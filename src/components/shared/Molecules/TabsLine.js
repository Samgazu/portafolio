import React from 'react';
import './TabsLine.scss';

const TabsLine = ({options, selectedTabId, setSelectedTabId }) => {

    const renderOptionItem = (item, index) => {
        return (
            <li className={['stepOption', item.id == selectedTabId ? 'stepOptionSelected' : ''].join(' ')}>
                <button onClick={() => setSelectedTabId(item.id)}>
                    <img src={item.id != selectedTabId ? item.img:''|| item.id == selectedTabId ? item.imgW:''}/>{item.title}
                </button>
            </li>
        );
    };

    return (
        <ul className={"tabs-line-ul"}>
            {
                options.map(renderOptionItem)
            }
        </ul>
    )
}


export default TabsLine;
