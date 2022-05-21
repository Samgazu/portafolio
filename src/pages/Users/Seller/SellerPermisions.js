import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUserSpecificBundleSuccess, addUserSpecificGroupSuccess, addUserSpecificPricelistSuccess, deleteSpecificBundleSuccess, getProductGroups, getProductGroupsSuccess, getSpecificBundles, getSpecificBundlesSuccess, getUserSpecificPricelists, getUserSpecificProductGroups, getUserSpecificProductGroupsSuccess, removeUserSpecificPricelistSuccess, removeUserSpecificProductGroupSuccess } from '../../../actions/allUsersAction';
import { getPriceListsSuccess, getPricesLists, getSystems, getSystemsSucess } from '../../../actions/systemsAction';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { UserComponentsSellers } from '../../../components/UsersComponents/UserComponentsSellers/UserComponentsSellers'
import './sellerPermisions.scss';

export const SellerPermisions = () => {

    const dispatch = useDispatch();
    const pricesList = useSelector(state => state.systems.productListPrices);
    const systemsTemplate = useSelector(state => state.systems.systemsTemplate);
    const sellerUser = useSelector(state => state.allUsers.sellerUser);
    const addedUserSpecificProductGroup = useSelector(state => state.allUsers.addedUserSpecificProductGroup);
    const listProductGoups = useSelector(state => state.allUsers.listProductGoups);
    const listSpecificProductUser = useSelector(state => state.allUsers.listSpecificProductUser);
    const deleteUserSpecificProductGroup = useSelector(state => state.allUsers.deleteUserSpecificProductGroup);
    const listBundlesGoups = useSelector(state => state.allUsers.listBundlesGoups);
    const addedUserSpecificBundleGroup = useSelector(state => state.allUsers.addedUserSpecificBundleGroup);
    const deleteUserSpecificBundleGroup = useSelector(state => state.allUsers.deleteUserSpecificBundleGroup);
    const listSpecificPricelists = useSelector(state => state.allUsers.listSpecificPricelists);
    const addedUserSpecificPricelist = useSelector(state => state.allUsers.addedUserSpecificPricelist);
    const removeUserSpecificPricelist = useSelector(state => state.allUsers.removeUserSpecificPricelist);
    const searchListPrices = useSelector(state => state.scheduleSurgery.searchListPricesToSchedule);
    const searchSystem = useSelector(state => state.scheduleSurgery.searchSystem);
    const listProductGroupsSearch = useSelector(state => state.allUsers.listProductGroupsSearch);



    useEffect(()=>{
        dispatch(getPricesLists());
        dispatch(getProductGroups());
        dispatch(getSystems());
        if(sellerUser){
            dispatch(getUserSpecificProductGroups(sellerUser.userID));
            dispatch(getSpecificBundles(sellerUser.userID, 0, true));
            dispatch(getUserSpecificPricelists(sellerUser.userID));
        }
        return () => {
            dispatch(getPriceListsSuccess(null));
            dispatch(getUserSpecificProductGroupsSuccess(null));
            dispatch(getProductGroupsSuccess(null));
            dispatch(getSystemsSucess(null));
            dispatch(getSpecificBundlesSuccess(null));
        }
    },[])

    useEffect(() => {
        if(sellerUser && (addedUserSpecificProductGroup || deleteUserSpecificProductGroup)){
            dispatch(getUserSpecificProductGroups(sellerUser.userID));
            dispatch(addUserSpecificGroupSuccess(null));
            dispatch(removeUserSpecificProductGroupSuccess(null));
        }
    }, [addedUserSpecificProductGroup, deleteUserSpecificProductGroup]);


    useEffect(() => {
        if(sellerUser && (addedUserSpecificBundleGroup || deleteUserSpecificBundleGroup)){
            dispatch(getSpecificBundles(sellerUser.userID, 0, true));
            dispatch(addUserSpecificBundleSuccess(null));
            dispatch(deleteSpecificBundleSuccess(null));
        }
    }, [addedUserSpecificBundleGroup, deleteUserSpecificBundleGroup]);

    useEffect(() => {
        if(sellerUser && (addedUserSpecificPricelist || removeUserSpecificPricelist)){
            dispatch(getUserSpecificPricelists(sellerUser.userID));
            dispatch(addUserSpecificPricelistSuccess(null));
            dispatch(removeUserSpecificPricelistSuccess(null));
        }
    }, [addedUserSpecificPricelist, removeUserSpecificPricelist])


    // 

    return (
        <div className="container_SellerPermisions">
        <SubNavBarComponent title={'Usuario Vendedor'} historyPage={'/usuarios/vendedores'}/>
            <div className="container_SellerPermisions_Components">
            {
                sellerUser&&
                <UserComponentsSellers 
                    titleContainerCards={'Lista de precios asignadas'} 
                    typeComponent={'PRICELIST'}
                    listElements={ searchListPrices ? searchListPrices : pricesList}
                    sellerUser={sellerUser}
                    listSpecific={listSpecificPricelists}
                    />
            }

            {
                sellerUser &&
                <UserComponentsSellers 
                    titleContainerCards={'Grupos de productos asignados'} 
                    typeComponent={'PRODUCTS'} 
                    listElements={listProductGroupsSearch ? listProductGroupsSearch: listProductGoups} 
                    listSpecific={listSpecificProductUser}
                    sellerUser={sellerUser} />
            }
            {
                sellerUser &&
                <UserComponentsSellers 
                    titleContainerCards={'Sistemas asignados'} 
                    typeComponent={'SYSTEMS'}  
                    listElements={searchSystem ? searchSystem : systemsTemplate} 
                    sellerUser={sellerUser}
                    listSpecific={listBundlesGoups}
                    />
            }
            </div>
        </div>
    )
}
