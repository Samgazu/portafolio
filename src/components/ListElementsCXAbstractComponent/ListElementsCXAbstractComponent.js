import React from 'react';
import PropTypes from 'prop-types';
import { DateFormat, handleGetHour } from '../shared/DateFormat';
import './sass/styles.scss';

export const ListElementsCXAbstractComponent = ({ 
    typeSurgeryList,
    medicSchedule,
    patientSchedule,
    priceListSchedule,
    InstitutionToSchedule,
    HourToSchedule,
    ClientToSchedule,
    typeView,
    ATQToSchedule, }) => {

    return (
        <div className="ListElementsCXAbstractComponent-left-item-overview">
            {
                typeView &&
                    <div className={ typeView.type === 'PQX' 
                        ? 'ListElementsCXAbstractComponent-section-left-title-container ListElementsCXAbstractComponent-section-left-title-container-colorTitlePQX'
                        : typeView.type === 'STORE' && 'ListElementsCXAbstractComponent-section-left-title-container ListElementsCXAbstractComponent-section-left-title-container-colorTitleStore'
                    }>
                        <h4 className='ListElementsCXAbstractComponent-section-left-title' > { typeView.title } </h4>
                    </div>
            }
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Tipo de CX</h3>
                {
                    typeSurgeryList&&(
                        Object.keys(typeSurgeryList).map((el, index) => (
                            <p className='ListElementsCXAbstractComponent-left-overview-item-name' key={index} >{el}</p>
                        ))
                    )
                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Médico</h3>
                {
                    medicSchedule&&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {Object.values(medicSchedule).join(' ')}
                        </p>
                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Institución</h3>
                {
                    InstitutionToSchedule&&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {InstitutionToSchedule.name}
                        </p>

                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Paciente</h3>
                {
                    patientSchedule&&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {Object.values(patientSchedule).join(' ')}
                        </p>

                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Fecha y hora de CX</h3>
                {
                    HourToSchedule&& typeView.type !== 'STORE' &&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                        {`${DateFormat(HourToSchedule.completeDate)} / ${HourToSchedule.hourDate}`}
                        </p>
                }
                {
                    HourToSchedule&& typeView.type === 'STORE' &&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                        {`${DateFormat(HourToSchedule)} / ${handleGetHour(HourToSchedule)}`}
                        </p>
                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Cliente</h3>
                {
                    ClientToSchedule&&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {ClientToSchedule.clientName}
                        </p>

                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>Lista de precios</h3>
                {
                    priceListSchedule&&
                        <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {`${priceListSchedule.tableCode} ${priceListSchedule.description} / ${priceListSchedule.displayPricelist ? 'Imprimir Lista': 'No Imprimir Lista'}`}
                        </p>

                }
            </div>
            <div className="ListElementsCXAbstractComponent-left-overview-item-content">
                <h3 className='ListElementsCXAbstractComponent-left-overview-item-title'>ATQ</h3>
                {
                    ATQToSchedule
                        ?   <p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                                {Object.values(ATQToSchedule).join(' ')}
                            </p>
                        :<p className='ListElementsCXAbstractComponent-left-overview-item-name'>
                            {'Por asignar'}
                        </p>

                }
            </div> 
        </div>
    )
}

ListElementsCXAbstractComponent.propTypes = {
    typeSurgeryList: PropTypes,
    medicSchedule: PropTypes,
    scheduleSurgery: PropTypes,
    patientSchedule: PropTypes,
    priceListSchedule: PropTypes,
    InstitutionToSchedule: PropTypes,
    HourToSchedule: PropTypes,
    ClientToSchedule: PropTypes,
    ATQToSchedule: PropTypes,
    typeView: PropTypes,
}