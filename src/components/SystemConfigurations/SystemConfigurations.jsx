import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './sass/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { quoteProductsData } from '../../pages/quoteproducts/quoteProductsData';
import { CXTabs, Products } from './systemConfigurationsData';
import AddConfigurationPopUp from '../AddConfigurationPopUp/AddConfigurationPopUp';
import DeleteConfigurationPopUp from '../DeleteConfigurationPopUp/DeleteConfigurationPopUp';
import Swal from 'sweetalert2';
import { getSystems, getMainSurgeryType,getBundlesBySystemId, getSystemConfiguration, addConfigurationSurgeryTargetsSuccess, modifyConfigurationSuccess, addProductsConfigurationSuccess, postNewConfiguration, addSystemSurgeryTargetsSuccess, postAddNewSurgeryTypeToSystem } from '../../actions/systemsAction';
import icoSearch from '../../assets/img/126PX/Icono_Buscar-Blanco_126px.png';
import icoCerrar from '../../assets/img/126PX/Icono_Cerrar2_126px.png';
import imgAdd from '../../assets/img/512PX/Productos/Cervicales/Img_Add&AddPlus_512px.png';
import { useForm } from '../../hooks/useForm';
import { toInteger, toNumber } from 'lodash';


const useStyles = makeStyles({
    root: {
      background: 'gray',
      borderRadius: '12px 12px 0 0',
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      maxWidth: '50%',
      width: '50%',
      textTransform: 'none'
    },
    active: {
        background: 'linear-gradient(270deg, rgba(9,64,112,1) 0%, rgba(55,167,185,1) 91%)'
    },
    label: {
        padding: '10px',
        background: 'linear-gradient(270deg, rgba(9,64,112,1) 0%, rgba(55,167,185,1) 91%)',
        color: '#fff',
        fontFamily: "Poppins",
        fontWeight: '400',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '10px',
        width: '200px',
        maxWidth: '200px',
        minWidth: '150px',
        height: 14,
        position: 'rigth'
    }
  });

export const SystemConfigurations = () => {

    const dispatch = useDispatch();
    const mainSurgeryTypes = useSelector(state => state.systems.mainSurgeryTypes);
    const systems = useSelector((state) => state.systems);
    const [activeTab, setActiveTab] = useState(0);
    const [systemImg, setSystemImg] = useState('');
    const [system, setSystem] = useState('');
    const [cxTypeSystem, setCXTypeSystem] = useState([]);
    const [cxTypeDeleteSurgerySystem, setCXTypeDeleteSurgerySystem] = useState([]);
    const [cxTypeConfig, setCXTypeConfig] = useState([]);
    const [configuration, setConfiguration] = useState('');
    const [configurations, setConfigurations] = useState([]);
    const [open, setOpen] = useState(false);
    const [quantityPopUpActive, setQuantityPopUpActive] = useState(null);
    const [productQuantity, setProductQuantity] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [activeTabTCX, setActiveTabTCX] = useState(0);
    const [addConfig, setAddConfig] = useState(null);


    const [formValues, handleInputChange, reset] = useForm({
        countProduct: 1
    })

    const {countProduct} = formValues;
    
    
    const addSurgeryTargets = () => {
        dispatch( addConfigurationSurgeryTargetsSuccess( cxTypeConfig ) )
        dispatch( addSystemSurgeryTargetsSuccess( cxTypeSystem ) )
    }

    const classes = useStyles();
    
    
    const HandleTabs = (e, val)=> {
        setActiveTab(val);
    }

    const HandleTabsTCX = (e, val)=> {
        setActiveTabTCX(val);
    }

    // obtener valores del stores

    useEffect( () => {
        dispatch(getSystems());
        dispatch(getMainSurgeryType());
     },[]);

    

    useEffect( () => {
        if(system){
            //Como se selecciona un sistema nuevo hay que limpiar las demás variables
            setConfiguration('');
            //Pedimos las configuraciones
            dispatch(getBundlesBySystemId(system.id));
            dispatch(getSystemConfiguration(system));
        }
     },[system]);

    
    
    useEffect(() => {
        
        if( systems.bundles !== addConfig && !systems.constructNewConfig.configuration ){
            setAddConfig(systems.bundles)
        }
        if( systems.constructNewConfig &&
            systems.constructNewConfig.configuration &&
            addConfig&&
            addConfig.filter( item => item.configuration.id === systems.constructNewConfig.configuration.id ).length === 0){
            setAddConfig([
                ...systems.bundles,
                systems.constructNewConfig
            ])
        }

    }, [systems])

    useEffect(() => {
        if( addConfig ){
            const configurationsbySistem = [];
            addConfig.map( item => {
                if( item.configuration.items ){
                    item.configuration.items.map(conf =>  configurationsbySistem.push(conf))
                }
            })
            configurationsbySistem && (
                setConfigurations( configurationsbySistem )
            )
        }
    }, [addConfig])

    useEffect(() => {
        if( configuration.configuration &&
            configuration.configuration.items &&
            productQuantity&&
            activeTab === 1 ){
                dispatch( addProductsConfigurationSuccess( productQuantity ))
        }
    }, [productQuantity])

    const handleCreateConfig = () => {
        const addSurgeryTarget = [];

        system.targetSurgery.map( surgerySystem => {
            cxTypeSystem.filter( item => {
                item !== surgerySystem &&
                    addSurgeryTarget.push(item);
            } );
        });
        // console.log({
        //     SystemId: system.id,
        //     MainSurgeryTypeId: addSurgeryTarget
        // });

        // console.log({
        //     SystemId: system.id,
        //     MainSurgeryTypeId: cxTypeDeleteSurgerySystem
        // });
        
        //configuration.configuration.items &&
        configuration.configuration && productQuantity&& activeTab === 1
            ? (
                setConfiguration(''),
                setAddConfig([]),
                setCXTypeConfig([]),
                setCXTypeSystem([]),
                setProductQuantity(''),
                setActiveTab(0),
                setActiveTabTCX(0),
                dispatch( postNewConfiguration( systems.constructNewConfig )),
                dispatch( postAddNewSurgeryTypeToSystem( systems.constructNewConfig.system.MainSurgeryTypeId ) )
            )
            : ( Swal.fire({
                icon: 'error',
                title: 'Error ',
                text: 'Parece que faltan elementos para crear una configuración',
              }) )
    }

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5} className='leftContainer'>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Card style={{height: '70vh', overflow: 'scroll'}}>
                                <CardHeader title='Sistemas' className='title' />
                                <div>
                                <CardContent>                         
                                    <GridList cellHeight={90} spacing={6} cols={1}>                                 
                                            {systems && systems.systemsTemplate.map(i=>renderSystemCard(i))}                                     
                                    </GridList>
                                </CardContent>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card style={{height: '70vh', overflow: 'scroll'}}>
                                <CardHeader title='Configuración' className='title' />
                                <CardContent>
                                    <GridList cellHeight={90} spacing={6} cols={1}>                                 
                                            {systems && addConfig && addConfig.map(i=>renderConfigurationCard(i))}                                     
                                    </GridList>
                                            {renderAddDeleteConfiguration()}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                    <GridList cellHeight='auto' cols={1}>  
                            <GridListTile cols={1}>
                                <Card className='summary'>
                                    <CardContent>
                                        <Grid container alignItems='center'>
                                            <Grid item xs={5}>
                                                    {systemImg && <img src={systemImg} className='systemImg'></img>}
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography>{(!system && !cxTypeConfig && !configuration) && 'Selecciona las opciones de tu bundle'}</Typography>
                                                {system && <Typography>{'Sistema: '+system.product.productDescription}</Typography>}
                                                {system && cxTypeConfig && <Typography>{'Tipo de CX: '+ cxTypeConfig.map( item => item.description )  }</Typography>}
                                                {configuration && <Typography>{'Configuración: ' + configuration.configuration.name}</Typography>}
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </GridListTile>
                            <GridListTile cols={1}>                          
                                <Tabs indicatorColor='primary' value={activeTab} onChange={HandleTabs}> 
                                    <Tab classes={{root: classes.root, selected: classes.active}} 
                                         label='Tipo de CX' />

                                    {/* Agregar notificaciones visuales de los elementos que 
                                    son necesarios para activar seccion  */}


                                    <Tab disabled={(!system || !cxTypeConfig || !configuration)} 
                                         classes={{root: classes.root, selected: classes.active}} 
                                         onClick={addSurgeryTargets}
                                         label='Producto' />
                                </Tabs>
                                <Button classes={{label: classes.label}} onClick={handleCreateConfig} >
                                    Crear Configuración
                                </Button>                
                                {renderCXTabContent(0)}                       
                                {renderProductTabContent(1)}
                            </GridListTile>
                    </GridList>
                </Grid>
            </Grid>
        </div>
    )

    function renderConfigurationCard(i) {
        const confi = i.configuration;
        function HandleConfigurationCardClick(e) {
            e.preventDefault();
            setConfiguration(i);
            i.surgeryTargets&&
                setCXTypeConfig(i.surgeryTargets);
            dispatch( modifyConfigurationSuccess({
                id: confi.id,
                name: confi.name
            }) );
        }
    
        return(
            <GridListTile cols={1} onClick={HandleConfigurationCardClick} key={i.id}>
                <Card className="configurationCard">
                <Grid container align = "left" justify = "center" alignItems = "center"  style={{height: '100%'}}>   
                            <Grid item xs={1}></Grid>          
                            <Grid item xs={10} >
                                <Typography>{confi.name}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="arrowRight"></div>
                            </Grid>
                        </Grid>
                </Card>
            </GridListTile>
        );
    }

    {/* 
        <Grid container style={{padding: '30px 0 30px 0'}} >
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2} alignItems="center" justify="center">
                 {
                     system && configuration &&
                         mainSurgeryTypes.map(i=>renderCXTypeCard(i))

                 }
                </Grid>
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
    
    */}


    function renderCXTabContent(index) {

        return(
           <Card>
               {
                   system && activeTab === index && (
                        <GridListTile cols={1}>                          
                            <Tabs indicatorColor='primary' value={activeTabTCX} onChange={HandleTabsTCX}> 
                                <Tab classes={{root: classes.root, selected: classes.active}} 
                                    label='Tipo de CX Sistema' />


                                <Tab classes={{root: classes.root, selected: classes.active}} 
                                    label='Tipo de CX Configuración' />
                            </Tabs>
                            {renderCXTab(0)}                       
                            {renderCXTab(1)}
                        </GridListTile>
                   )
               }
           </Card>
        );
    }


    function renderCXTab(index){

        return(
            activeTabTCX === index && (
                <Grid container style={{padding: '30px 0 30px 0'}} >
                    <Grid item md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                        {
                            system && configuration &&
                                mainSurgeryTypes.map(i=>renderCXTypeCard(i))
                        }
                        </Grid>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            )
            
         );

    }


    function renderCXTypeCard(i) {
        function handleCXTypeCardClick(e) {
            e.preventDefault();
            if(activeTabTCX === 0){
                if( cxTypeSystem && cxTypeSystem.filter( (item) => i.description === item.description ).length !== 0 ){
                    setCXTypeSystem(cxTypeSystem.filter( item => { 
                        if(item.description !== i.description){
                            return item;
                        }
                        if( system.targetSurgery.filter( surgerySystem => item.description === surgerySystem.description ).length !== 0 ){
                            setCXTypeDeleteSurgerySystem([ ...cxTypeDeleteSurgerySystem, item ]);
                        }
                    } ))
                }
                else{
                    setCXTypeSystem([...cxTypeSystem, i]);
                    if(system.targetSurgery.filter( surgerySystem => i.description === surgerySystem.description ) ){
                        setCXTypeDeleteSurgerySystem(cxTypeDeleteSurgerySystem.filter( item => item.description !== i.description ));
                    }
                    
                }
            }else if(activeTabTCX === 1){
                if( cxTypeConfig && cxTypeConfig.filter( (item) => i.description === item.description ).length !== 0 ){
                    setCXTypeConfig(cxTypeConfig.filter( item => item.description !== i.description ))
                }
                else{
                    setCXTypeConfig([...cxTypeConfig, i]);
                }
            }
        }
            
        return (
            <Grid item xs={6} key={i.id}>
                <Card style={ 
                        activeTabTCX === 1 ? (
                            cxTypeConfig &&
                            cxTypeConfig.filter( (item) => i.description === item.description ).length !== 0 ? 
                            {background: 'linear-gradient(270deg, rgba(9,64,112,1) 0%, rgba(55,167,185,1) 91%)',
                            color: '#fff'
                            } 
                        : {background: '#dbdbdb'}) :
                        activeTabTCX === 0 &&(
                                cxTypeSystem.filter( (item) => i.description === item.description ).length !== 0 ? 
                            {background: 'linear-gradient(270deg, rgba(9,64,112,1) 0%, rgba(55,167,185,1) 91%)',
                            color: '#fff'
                            } 
                            : {background: '#dbdbdb'})
                    }
                      className='CXTypeCard' onClick={handleCXTypeCardClick}>
                    <Grid container align = "center" justify = "center" alignItems = "center" style={{padding: '10px 0 10px 0'}}>
                        <Grid item xs={12}>
                            <img src={imgAdd} style={{width: '50px'}}></img>
                        </Grid>
                        <Grid item xs={12}> 
                            <Typography>{i.description}</Typography>
                        </Grid>
                    </Grid>
                    
                    
                </Card>
            </Grid>
        );
    }


    
    function renderProductTabContent(index) {

        return(
           <Card className='productTabCard'>
               {
                   activeTab === index && (
                       <Grid container style={{padding: '30px 0 30px 0'}} >
                           <Grid item xs={6} style={{overflow: 'scroll'}}>           
                                <Grid container spacing={2} align='center' justify='center' alignItems='center'>
                                    <Grid item xs={12}>
                                        <div className='quote-navbar-c-search'>
                                            <div className='quote-navbar-c-search-img'> 
                                                <img className='quote-navbar-search-img'src={icoSearch} alt=""/> 
                                            </div>
                                            <input className='quote-navbar-search-input' 
                                                type="text"
                                                placeholder='Buscar...'
                                            />
                                        </div>
                                    </Grid>
                                    {
                                     configurations.length !== 0 && 
                                        configurations.map(i=>renderProducts(i))
                                    }
                                </Grid>               
                           </Grid>
                           <Grid item xs={6}>    
                                {
                                    productQuantity &&
                                        productQuantity.map(i=>renderProductsSummary(i))
                                }
                           </Grid>
                       </Grid>
                   )
               }
           </Card>
        );
    }

    function renderProducts(i) {

        const product = i.product;
        
        if( configuration.configuration && 
            configuration.configuration.items && 
            configuration.configuration.items.filter(item => item.id === i.id).length !== 0 &&
            productQuantity&&
            productQuantity.filter( item => item.product.id === i.product.id ).length === 0 &&
            !isDeleted )
           {
               const products = configuration.configuration.items.map(item => item);
                setProductQuantity(products);
            }

        function HandleProductClick(e) {
            e.preventDefault(); 
            setQuantityPopUpActive(i);
        }

        return(
            <>
                <Grid item xs={6} key={i.id}>
                    <Card className={
                       productQuantity&& 
                       productQuantity.filter( item => item.product.id === i.product.id ).length !== 0
                                ? ('productCard-Active')
                                : ('productCard')
                    } onClick={HandleProductClick}>
                        <CardContent>
                            <Typography className="title">{i.name}</Typography>
                            <Typography variant="body2" component="p">
                                {product.productDescription || "-- --"}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    quantityPopUpActive && renderProductQuantityPopUp(quantityPopUpActive)
                }
            </>
        );
    }


    function renderProductQuantityPopUp(i) {

        let copy = Object.assign(productQuantity);


        const handleClose = () => {
            setQuantityPopUpActive(false);
        };
        
        const handleQuantityChange = (e) => {
            setProductQuantity([...productQuantity, 
                {
                    product: i.product,
                    productQuantity: toNumber(countProduct)
                }
        ]);
            
            handleClose();
            reset();
        };
    
        return(
            <Dialog open={ !!quantityPopUpActive } aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cantidad</DialogTitle>
                <DialogContent>
                    <input 
                           onChange={handleInputChange} 
                           name='countProduct'
                           type='number'
                           className='quantityInput' 
                           min='1' 
                           value={countProduct}>
                    </input>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="buttons">
                        Cancelar
                    </button>
                    <button onClick={handleQuantityChange} className="buttons">
                        Aceptar
                    </button>
                </DialogActions>
            </Dialog>
        );
    }

    function renderSystemCard(i) {
        const product = i.product;

        function handleSystemCardClick(e) {
            e.preventDefault();
            setSystemImg(product.productImage);
            setSystem(i);
            setCXTypeSystem(i.targetSurgery);
            setProductQuantity([]);
            setIsDeleted(false);
            setConfiguration('');
            setAddConfig([]);
            setActiveTab(0);
            setActiveTabTCX(0);
            setCXTypeConfig([]);
        }
        
        return(
            <GridListTile cols={1} onClick={handleSystemCardClick} key={product.id}>
                <Card className={'systemCard'}>
                        <Grid container alignItems='center'>
                            <Grid item xs={4}>
                                <img src={product.productImage} className='systemCardImage'></img>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography>{product.productDescription}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <div className='arrowRight'></div>
                            </Grid>
                        </Grid>
                </Card>
            </GridListTile>
        );
    }

    function renderAddDeleteConfiguration() {

        return(
            <Grid container align = "center" justify = "center" alignItems = "center"  >
                <Grid item xs={6}>
                    <AddConfigurationPopUp />
                </Grid>
                <Grid item xs={6}>
                    <DeleteConfigurationPopUp />
                </Grid>
            </Grid>
        );
    }

    function renderProductsSummary(i) {

        const deleteProductByProductQuantity = (itemProduct) => {
            
            if(productQuantity.filter( item => item.product.id === itemProduct.product.id ).length !== 0){
                setIsDeleted(true);
                setProductQuantity(productQuantity.filter( item => item.product.id !== itemProduct.product.id ));
            }
        }

        return(
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className='productSummary'>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography>{
                                i&&
                                i.product&&
                                `${i.productQuantity}-${i.product.productDescription}`
                            }</Typography>
                            <Typography className='productSummaryDescription'>Descripción</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <button className='deleteProductButton'
                                onClick={()=> deleteProductByProductQuantity(i)}
                        >
                            <img src={icoCerrar} className='deleteImg'></img>
                        </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
