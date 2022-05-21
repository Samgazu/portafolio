import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';


export const useHistoryApp = (historyPages) => {
    
        const [historyPage, setHistoryPage] =  useState(`/Inicio`);
        const history = useHistory();
        if( historyPages ){
            setHistoryPage(historyPages);
        }
        return history.replace(historyPage);
}
