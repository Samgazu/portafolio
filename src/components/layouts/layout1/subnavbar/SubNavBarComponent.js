import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './sass/styles.sass'
import icoHistory from '../../../../assets/img/126PX/Icono_atras_126px.png';
import iconGuardar from '../../../../assets/img/126PX/Icono_Guardar.png';
import icoSearch from '../../../../assets/img/126PX/Icono_Buscar-Blanco_126px.png';
import { useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { searchFinishQuote, searchFinishQuoteSuccess, searchInAllFinishQuote, searchInAllFinishQuoteSuccess, searchProducts } from '../../../../actions/systemsAction';
import { NameModal } from './PendingQuote/NameModal';
import { useHistoryApp } from '../../../../hooks/useHistoryApp';
import { getAppointmentsStoreHouseAtq, getAppointmentsStoreHouseAtqWithParams, getAppointmentsStoreHouseSuccessAtq, getSearchCxTransferedSuccess, getSearchList, getSearchListHouseSuccessAtq, getSearchListHouseSuccessCX, getSearchListTrans, searchCxTransfered, setReposnseSearch } from '../../../../actions/storeHouseAction';



export const SubNavBarComponent = (props) => {
    // const newQuote = useSelector(state => state.newQuote.systems)
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const {searchToProgramCX} = useParams();
    const [typeSearch, setTypeSearch] = useState('PRODUCTS');
    const [typeSearchProduct, setTypeSearchProduct] = useState('');
    const [typeSearchFinishQuote, setTypeSearchFinishQuote] = useState('');
    const searchActive = props.searchActive;
    const specificType = props.specificType;

    //Propiedades de busqueda de AsignarATQ
    const startDate = '1900-01-01T01:01:57'
    const endDate = '2200-05-06T01:01:33'
    const searchBy = 'SURGERY_ID_ATQ_REQUIRED_NOT_ASSIGNED'
    const searchBy1 = 'SURGERY_ID_ATQ_NOT_REQUIRED_OR_ASSIGNED' 
    //const searchByTrans = 'SURGERY_ID_TRANSFERED_SURGERY'
    const searchByComplete = 'SURGERY_ID_ATQ_EXPERIENCE_REPORT_COMPLETE'
    const searhByIncomplete = 'SURGERY_ID_ATQ_EXPERIENCE_REPORT_INCOMPLETE'
    const searchByParam = '0'
    const offset=10;
    const [currentPage, setPage] = useState(0);



   

    //ESTE USESELECTOR ES PARA RECUPERAR LAS SOLUCIONES CERVICALES Y HACER LAS COMPARACIONES
    
    const cervicales = useSelector(state => state.storeHouse.systems && state.storeHouse.systems.CERVICAL && state.storeHouse.systems.CERVICAL  );
    const lumbares = useSelector(state => state.storeHouse.systems && state.storeHouse.systems.LUMBAR && state.storeHouse.systems.LUMBAR);
    const complementos = useSelector(state => state.storeHouse.systems && state.storeHouse.systems.COMPLEMENTOS && state.storeHouse.systems.COMPLEMENTOS);

//ESTE USESELECTOR ES PARA RECUPERAR LAS SOLUCIONES CERVICALES Y HACER LAS COMPARACIONES PERO CUANDO SE ESTA REALIZANDO LA BUSQUEDA EN PROGRAMAR CX
    const cervicalesSystem = useSelector(state => state.systems.systems && state.systems.systems.CERVICAL && state.systems.systems.CERVICAL  );
    const lumbaresSystem = useSelector(state => state.systems.systems && state.systems.systems.LUMBAR && state.systems.systems.LUMBAR);
    const complementosSystem = useSelector(state => state.systems.systems && state.systems.systems.COMPLEMENTOS && state.systems.systems.COMPLEMENTOS);
    
    // console.log(props.systemId)
    useEffect(() => {
        if(props.typeSearch){
            setTypeSearch(props.typeSearch);
        }
    }, [])

    
    const handleSearchProduct = (e) => {
        e.preventDefault();
        if(searchText.trim().length === 0){
            typeSearch === 'PRODUCTS' && !props.programarCX &&
                history.replace(`/cotizaciones`)
            typeSearch === 'PRODUCTS' && (props.programarCX || searchToProgramCX )&&
                history.replace(`/ProgramarCX/TipoCirugia`)
            typeSearch === 'FINISHQUOTE_SURGERY' &&
                history.replace(`/CotizacionesFinalizadas`),
                dispatch(searchFinishQuoteSuccess(null));
            typeSearch === 'FINISHQUOTE' &&  !props.isFacturacion &&
                history.replace(`/cotizaciones_finalizadas`);
            typeSearch === 'FINISHQUOTE' &&  props.isFacturacion &&
                history.replace(`/facturacion`);
                dispatch(searchInAllFinishQuoteSuccess(null))
        }
        if(typeSearch === 'PRODUCTS' && searchText.trim().length !== 0){


            if(typeSearchProduct === 'system' && searchText){
                history.replace(`/ProgramarCX/TipoCirugia`)
                handleSearchProgramarCx(searchText);
            }else{

                console.warn('en la segunda')
                props.programarCX || searchToProgramCX
                ?    (history.push(`/ProgramarCX/search/searchToProgramCX`))
                :(
                    props.systemId
                    ?   history.push(`/searchproduct/${props.systemId}`)
                    :   history.push(`/search`))
                !typeSearchProduct
                ? dispatch(searchProducts(searchText))
                : dispatch(searchProducts(searchText, typeSearchProduct,false))

                }
        }
        if(typeSearch === 'FINISHQUOTE' && searchText.trim().length !== 0 && !props.isFacturacion){
            history.push(`/cotizaciones_finalizadas/searchQuote/searchQuoteFinished`);
            !typeSearchFinishQuote
            ? dispatch(searchFinishQuote(searchText))
            : dispatch(searchFinishQuote(searchText, typeSearchFinishQuote))
        }
        if(typeSearch === 'FINISHQUOTE_SURGERY' && searchText.trim().length !== 0 && !props.isFacturacion){
            history.push(`/ProgramarCX/searchQuote/searchQuoteFinishedSchedule`);
            !typeSearchFinishQuote
            ? dispatch(searchFinishQuote(searchText))
            : dispatch(searchFinishQuote(searchText, typeSearchFinishQuote))
        }
        if(typeSearch === 'FINISHQUOTE' && searchText.trim().length !== 0 && props.isFacturacion){
            history.push(`/facturacion/searchFactura/factura`);
            !typeSearchFinishQuote
            ? dispatch(searchInAllFinishQuote(searchText))
            : dispatch(searchInAllFinishQuote(searchText, typeSearchFinishQuote))
        }
        //Nuevas busquedas de asignar ATQ
        if(typeSearch === 'AssigmentATQ' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,searchBy1,searchText))
            //console.warn('entro de',typeSearch)
            
          
        }
        if(typeSearch === 'NoAssigmentATQ' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,searchBy,searchText))
             //console.warn('entro de si',typeSearch)
          
        }

        if(typeSearch === 'CxToTransfer' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,searchBy1,searchText))
            //  console.warn('entro de si',typeSearch)
          
        }

        if(typeSearch === 'CxTransfered' && searchText.trim().length !== 0){
             dispatch(getSearchCxTransferedSuccess([]))
             dispatch(searchCxTransfered(searchText))
             //console.warn('entro de si',typeSearch)
          
        }

        if(typeSearch === 'ExperienceIncomplete' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,searhByIncomplete,searchText))
            //  console.warn('entro de si',typeSearch)
          
        }

        if(typeSearch === 'ExperienceComplete' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,searchByComplete,searchText))
            //  console.warn('entro de si',typeSearch) 
        }

        if(typeSearch === 'Status' && searchText.trim().length !== 0){
            dispatch(getSearchListHouseSuccessAtq([]))
            dispatch(getSearchList(startDate,endDate,15,searchText,currentPage,offset));
            
        }

        if(typeSearch === 'disponibilidad' && searchText.trim().length !== 0){
            //ESTE USESELECTOR ES PARA RECUPERAR LAS SOLUCIONES CERVICALES Y HACER LAS COMPARACIONES
   
            handleSearchSubcription(searchText);
        }
    }
    const [openModal, setOpenModal] = React.useState(null);
    const history = useHistory();
    
    const handleBackPage = () => {
        let historyPages = `/Inicio`;
        if( props.historyPage ){
            historyPages = props.historyPage;
        }
        history.replace(historyPages);
    } 

    const updateMainObject = () => {};
    const toggleModal = () => {
        setOpenModal(null);
    };


    const handleSearchSubcription = (text) => {
        /* console.warn('texto a buscar:',text);
        console.warn('soluciones cervicales:',cervicales);
        console.warn('soluciones lumbares:',lumbares);
        console.warn('soluciones complementos:',complementos); */
        let respuesta = null;
        let tipo = null;
        respuesta = cervicales.find(item => item.productDescription === text);
        tipo = 'Soluciones Cervicales'
       if(!respuesta){
           respuesta = lumbares.find(item => item.productDescription === text);
           tipo = 'Soluciones Lumbares'
       }
       if(!respuesta){
            respuesta = complementos.find(item => item.productDescription === text);
            tipo = 'Torácicos'
        }
       if(respuesta){
            dispatch(setReposnseSearch({
                product:respuesta,
                type:tipo
            }))
       }
    }


   //ESTO ES LA MISMA FUNCION DE ARRIBA PERO PARA PROGRAMAR CIRUGIA
   
   const handleSearchProgramarCx = (text) => {
   /*  console.warn('texto a buscar:',text);
    console.warn('soluciones cervicales:',cervicalesSystem);
    console.warn('soluciones lumbares:',lumbaresSystem);
    console.warn('soluciones complementos:',complementosSystem); */
    let respuesta = null;
    let tipo = null;
    respuesta = cervicalesSystem.find(item => item.productDescription === text);
    tipo = 'cervicales'
   if(!respuesta){
       respuesta = lumbaresSystem.find(item => item.productDescription === text);
       tipo = 'lumbares'
   }
   if(!respuesta){
        respuesta = complementosSystem.find(item => item.productDescription === text);
        tipo = 'complementos'
    }
   if(respuesta){
        dispatch(setReposnseSearch({
            product:respuesta,
            type:tipo
        }))
   }
}


    //esto lo pongo para realizar pruebas typeSearchProduct

       /*  useEffect(() => {
            console.warn(typeSearchProduct);
        }, [typeSearchProduct]) */
        
    return (
        <nav className='c-quote-navbar' >
            <button className='quote-navbar-c-history'
                    onClick={handleBackPage}
            >
                <img className='quote-navbar-history' src={icoHistory} alt=""/>
            </button>

            <h3 className='quote-navbar-title' >{props.title || ''}</h3>
            {
                searchActive &&
                <form   className='quote-navbar-c-search'
                        onSubmit={handleSearchProduct}>
                    <div className='quote-navbar-c-search-img'> 
                        <img className='quote-navbar-search-img'src={icoSearch} alt=""/> 
                    </div>

                    { specificType === 'id' 
                    ?<input className='quote-navbar-search-input' 
                        name="searchProduct"
                        value={searchText}
                        type="text"
                        onChange={({ target }) => setSearchText(target.value)}
                        autoComplete='off'
                        placeholder = ' Busqueda por ID ' 
                    />

                    : specificType === 'descripcion'
                    ?(<input className='quote-navbar-search-input' 
                        name="searchProduct"
                        value={searchText}
                        type="text"
                        onChange={({ target }) => setSearchText(target.value)}
                        autoComplete='off'
                        placeholder = 'Busqueda descripcion del equipo' 
                    />)
                    
                    
                     :(<input className='quote-navbar-search-input' 
                        name="searchProduct"
                        value={searchText}
                        type="text"
                        onChange={({ target }) => setSearchText(target.value)}
                        autoComplete='off'
                        placeholder = '¿ Qué estas buscando ?' 
                    />)
                
                    }
                    

                    {
                        typeSearch === 'PRODUCTS' &&
                            <select id="cars" 
                                    onChange={(e) => setTypeSearchProduct(e.target.value)} 
                                    value={[typeSearchProduct]} 
                                    className='quote-navbar-search-input-combobox' 
                                    multiple={false}>
                                    
                             
                             <option 
                                    value={null}>
                             </option> 
                                <option 
                                    value={'system'}>
                                    Descripción del sistema
                             </option>
                             <option 
                                        value={'productCode'}>
                                        Codigo del producto
                                </option>
                                <option 
                                        value={'productDescription'}>
                                        Descripción de producto
                                </option>
                            </select>
                    }
                    {
                        (typeSearch === 'FINISHQUOTE' || typeSearch === 'FINISHQUOTE_SURGERY') &&
                            <select id="cars" 
                                    onChange={(e) => setTypeSearchFinishQuote(e.target.value)} 
                                    value={[typeSearchFinishQuote]} 
                                    className='quote-navbar-search-input-combobox' 
                                    multiple={false}>
                                <option 
                                        value={'id'}>
                                        ID
                                </option>
                                <option 
                                        value={'atn'}>
                                        Atención a
                                </option>
                                <option 
                                        value={'client'}>
                                        Cliente
                                </option>
                                <option 
                                        value={'institution'}>
                                        Institución
                                </option>
                                <option 
                                        value={'medic'}>
                                        Médico
                                </option>
                                <option 
                                        value={'patient'}>
                                        Paciente
                                </option>
                            </select>
                    }
                </form>
            }
            <div className={ props.saveQuote === 'SAVEQUOTE' ? "quote-button-container" : "quote-button-container-disabled"}>
                <button  className='quote-button-img' onClick={() => setOpenModal("NameModal") }> 
                    <img className='quote-button-save' src={iconGuardar} alt="" />
                </button>
            </div>
            {
                openModal === "NameModal" &&
                <NameModal 
                    isOpen
                    toggle={toggleModal}
                    updateMainObject={updateMainObject}
                />
            }
        </nav>
    )
}

SubNavBarComponent.propTypes = {
    title: PropTypes.any,
    typeSearch: PropTypes.any,
    systemId: PropTypes.any,
    historyPage: PropTypes.any,
    saveQuote: PropTypes.any,
    isFacturacion: PropTypes.any,
    searchActive: PropTypes.any,
    programarCX: PropTypes.any,
};
