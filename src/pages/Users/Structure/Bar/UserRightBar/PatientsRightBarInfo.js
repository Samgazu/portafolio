import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Button from '../../../../../components/shared/Atoms/Button';

import TextShow from '../../../../../components/shared/Atoms/TextShow.js';
const PatientsRightBarInfo = ( ) => {

    const [more, showMore] = useState(false);
    const reportHeader = {
        item1: 'Medico',
        item2: 'Hospital',
        item3: 'Fecha',
        item4: 'Sistema',
        item5: 'Configuracion',
        item6: 'Descripción',
        item7: 'Cantidad',
        item8: 'No. de producto',
    }

    const report = {
            medico: 'Ricardo López',
            hospital: 'Real San Jose',
            date: '02/02/2021',
            system: 'Neon',
            config: 'Fijación monosegmental (4 tornillos)',
            description: [
                {
                    item1: 'Neon - tornillo cero-post auto-roscante, canulado de 4mm, largo de 10mm.',
                    quantity: '4',
                    prodId: 'CS 1401-10T',
                },
                {
                    item2: 'Neon - tuerca hexagonal para fijar conectores al pin del montaje.',
                    quantity: '4',
                    prodId: 'CS 1411-4T'
                }
            ],
    }
    const showData = () => {
        showMore(!more);
    };
    const renderData = () => {
        return (
            <>
                <div className={"report-content"}>
                    <div className={"report-tab-elements"}>
                        <TextShow title={reportHeader.item1} description={report.medico} />
                        <TextShow title={reportHeader.item2} description={report.hospital} />
                        <TextShow title={reportHeader.item3} description={report.date} />
                    </div>
                    <div className={"report-tab-elements"}>
                        <TextShow title={reportHeader.item4} description={report.system} />
                        <TextShow title={reportHeader.item5} description={report.config} />
                    </div>
                    <div className={"report-tab-elements"}>
                        <TextShow title={reportHeader.item6} description={report.description} />
                        <TextShow title={reportHeader.item7} description={report.hospital} />
                        <TextShow title={reportHeader.item8} description={report.date} />
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
        <div className={'patient-right-bar-buttons-container'}>
            <Button color={[!more ? "white_dark":'', more ? "blue_medium": ''].join('')} title={"REPORTE DE CONSUMO"} onClick={showData}/>
        </div>
        <hr className={"separate-line"}/>
        {   more &&
                renderData()
        }
        </>
    )
}

export default PatientsRightBarInfo;