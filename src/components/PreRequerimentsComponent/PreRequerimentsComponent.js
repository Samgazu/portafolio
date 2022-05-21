import React from 'react';
import './sass/styles.scss';
import PropTypes from 'prop-types';
import { PreRequerimentsListComponent } from '../PreRequerimentsListComponent/PreRequerimentsListComponent';
import { PreAddOverviewComponent } from '../PreAddOverviewComponent/PreAddOverviewComponent';

export const PreRequerimentsComponent = (
    {
        requirementsInstitution, 
        requirementsMedic, 
        requirementsSales, 
        listElements, 
        listNameToAdd, 
        messageEmpty,
        messageButton,
        type,
        handleCheck
    }) => {


    
    // const [isActive, setIsActive] = useState(false);

    // const handleActiveRequeriments = () => {
    //     setIsActive(!isActive);
    // }

    return (
        <article className="schedulePreOrder-left-item">
            <button className='schedulePreOrder-section-left-subTitle-container'>
                <p className='schedulePreOrder-left-subTitem-title'>Requerimientos</p>
            </button>
            {
                requirementsInstitution &&
                <PreRequerimentsListComponent handleCheck={handleCheck} listItems={requirementsInstitution} titleList={'Requerimientos Hospitales'} nameList={'Hospital'} type={type}/>
            }
            {
                requirementsMedic &&
                <PreRequerimentsListComponent handleCheck={handleCheck} listItems={requirementsMedic} titleList={'Requerimientos Médicos'} nameList={'Médico'} type={type}/>
            }
            {
                 requirementsSales &&
                <PreRequerimentsListComponent handleCheck={handleCheck} listItems={requirementsSales} titleList={'Observaciones de Ventas'} nameList={'Ventas'} type={type} />
            }
            {
                 requirementsSales &&
                <PreRequerimentsListComponent handleCheck={handleCheck} listItems={requirementsSales} titleList={'Notas de Almacen '} nameList={'Almacen'} type={type} />
            }
            {
                type !== "ATQ" &&
                <PreAddOverviewComponent 
                    listElements={listElements} 
                    title={listNameToAdd} 
                    messageEmpty={messageEmpty} 
                    messageButton={messageButton}
                    type={type}
                />
            }
        </article>
    )
}

PreRequerimentsComponent.propTypes = {
    requirementsInstitution: PropTypes.any,
    requirementsMedic: PropTypes.any,
    requirementsSales: PropTypes.any,
    listElements: PropTypes.any,
    listNameToAdd: PropTypes.any,
    messageEmpty: PropTypes.any,
    messageButton: PropTypes.any,
    type: PropTypes.any,
    handleCheck: PropTypes.any,
}
