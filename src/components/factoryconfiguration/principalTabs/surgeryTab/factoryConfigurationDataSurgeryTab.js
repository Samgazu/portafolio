import shortid from 'shortid';
import imgCervicalesBl from '../../../../assets/img/126PX/Icono_Cervical-Bco_126px.png';
import imgCervicalesNg from '../../../../assets/img/126PX/Icono_Cervical-Ngr_126px.png';
import imgLumbarBl from '../../../../assets/img/126PX/Icono_Lumbar-Bco_126px.png';
import imgLumbarNg from '../../../../assets/img/126PX/Icono_Lumbar-Ngr_126px.png';
import imgToraxicoBl from '../../../../assets/img/126PX/Icono_Toracica-Bco_126px.png';
import imgToraxicoNg from '../../../../assets/img/126PX/Icono_Toracica-Ngr_126px.png';
import imgComplementosBl from '../../../../assets/img/126PX/Icono_Complemento-Bco_126px.png';
import imgComplementosNg from '../../../../assets/img/126PX/Icono_Complemento-Ngr_126px.png';

export const factoryConfigurationDataSurgeryTab = [
    {   
        idItem: shortid.generate(),
        id: 1,
        imgBl: imgCervicalesBl,
        imgNg: imgCervicalesNg,
        description: 'CERVICAL'
    },
    {   
        idItem: shortid.generate(),
        id: 2,
        imgBl: imgLumbarBl,
        imgNg: imgLumbarNg,
        description: 'LUMBAR'
    },
    {   
        idItem: shortid.generate(),
        id: 3,
        imgBl: imgToraxicoBl,
        imgNg: imgToraxicoNg,
        description: 'TORACICO'
    },
    {   
        idItem: shortid.generate(),
        id: 4,
        imgBl: imgComplementosBl,
        imgNg: imgComplementosNg,
        description: 'COMPLEMENTOS'
    },
]
