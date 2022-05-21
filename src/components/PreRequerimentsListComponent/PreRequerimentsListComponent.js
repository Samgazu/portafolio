import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const PreRequerimentsListComponent = ({listItems, titleList, nameList, handleCheck, type}) => {
    const requerimentsListToAproveState = useSelector(state => state.storeHouse.requerimentsListToAprove);

    return (
        <>
            {
                listItems &&
                    <div className='schedulePreOrder-left-item-items'>
                        <h3 className='schedulePreOrder-left-item-item-title'>{titleList}</h3>
                            <ol className='schedulePreOrder-left-item-list'>
                                {
                                    listItems.requirements && listItems.requirements.length > 0 && nameList !== 'Ventas'
                                    ?
                                    listItems.requirements.map((el, index) => (
                                            <li className='schedulePreOrder-left-item-list-item' key={el.id}>
                                                { `${index+1} .- ${el.requirement || el.description} `}
                                                {
                                                    type === 'ALMACEN' &&
                                                        <input
                                                            className="c-StoreHouseStockModalForm-item-check"
                                                            type="checkbox"
                                                            value={JSON.stringify(el)}
                                                            name={JSON.stringify(el)}
                                                            checked={requerimentsListToAproveState && requerimentsListToAproveState.some(item=> JSON.stringify(item) === JSON.stringify(el) )}
                                                            onChange={handleCheck}
                                                        />
                                                }
                                            </li>
                                                
                                    ))
                                    : nameList !== 'Ventas' &&  <li className='schedulePreOrder-left-item-list-item'>
                                                { `Actualmente no existen requerimientos para este ${nameList}.`}
                                        </li>
                                }
                                {
                                    listItems.length > 0 && nameList === 'Ventas' ?
                                    listItems.map((el, index) => (
                                            <li className='schedulePreOrder-left-item-list-item' key={el.id}>
                                                { `${index+1} .- ${el.requirement || el.description} `}
                                                {
                                                    type === 'ALMACEN' &&
                                                        <input
                                                            className="c-StoreHouseStockModalForm-item-check"
                                                            type="checkbox"
                                                            value={JSON.stringify({...el, requirement:el.description })}
                                                            name={JSON.stringify(el)}
                                                            checked={requerimentsListToAproveState && requerimentsListToAproveState.some(item=> {
                                                                const newItem = {...item};
                                                                delete newItem.requirement;
                                                                return JSON.stringify(newItem) === JSON.stringify(el);
                                                            } )}
                                                            onChange={handleCheck}
                                                        />
                                                }
                                            </li>

                                     ))
                                    : nameList === 'Ventas' &&  <li className='schedulePreOrder-left-item-list-item'>
                                                { `Actualmente no existen requerimientos para ${nameList}.`}
                                        </li>
                                }
                            </ol>
                    </div>
            }
        </>
    )
}

PreRequerimentsListComponent.propTypes = {
    listItems: PropTypes.any,
    titleList: PropTypes.any,
    nameList: PropTypes.any,
    handleCheck: PropTypes.any,
    type: PropTypes.any,
}