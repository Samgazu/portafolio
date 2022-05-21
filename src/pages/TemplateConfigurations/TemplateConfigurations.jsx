import React from 'react';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { SystemConfigurations } from '../../components/SystemConfigurations/SystemConfigurations';

export const TemplateConfigurations = () => {
    return(
        <div className='c-quoteScreen animate__animated animate__fadeIn'>
            <SubNavBarComponent title={'Plantillas de Configuraciones'}/>
            <div className='c-quote' >
                <div className='quote-c-section quote-c-cervicales'>      
                        <SystemConfigurations />
                </div>
            </div>
        </div>
    );
}
