import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddSystemSurgeryArrangemenRequirementSuccess, AddSystemSurgeryRequirementSuccess, deleteSystemSurgeryArrangementSuccess, deleteSystemSurgeryRequirementSuccess, getSystemRequirements, getSystemRequirementsSuccess, getSystemSurgeryArrangement, getSystemSurgeryArrangementSuccess, searchOptionalProductsSuccess, searchRequireProductsSuccess, searchSystemSuccess } from '../../actions/scheduleSurgeryAction';
import { getProducts, getProductsSuccess, getSystemsSucess } from '../../actions/systemsAction';
import { FactoryMaterialArrangementList } from '../../components/FactoryMaterial/FactoryMaterialArrangementList';
import { FactoryMaterialBundles } from '../../components/FactoryMaterial/FactoryMaterialBundles';
import { FactoryMaterialItemsOfSystem } from '../../components/FactoryMaterial/FactoryMaterialItemsOfSystem';
import { FactoryMaterialListGeneral } from '../../components/FactoryMaterial/FactoryMaterialListGeneral';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import './styles.scss';

export const FactoryMaterialScreen = () => {

    const [tabActive, setTabActive] = useState('require');
    const dispatch = useDispatch();
    const [bundleSelected, setBundleSelected] = useState(null);
    const [listProducts, setListProducts] = useState(null);
    const [systemsRequeriments, setSystemsRequeriments] = useState(null);
    const ProductList = useSelector(state => state.systems.products);
    const listSystemRequirements = useSelector(state => state.scheduleSurgery.listSystemRequirements);
    const addSystemSurgeryRequirement = useSelector(state => state.scheduleSurgery.addSystemSurgeryRequirement);
    const deleteSystemSurgeryRequirement = useSelector(state => state.scheduleSurgery.deleteSystemSurgeryRequirement);
    const systemSurgeryArrangement = useSelector(state => state.scheduleSurgery.systemSurgeryArrangement);
    const addSystemSurgeryArrangemenRequirement = useSelector(state => state.scheduleSurgery.addSystemSurgeryArrangemenRequirement);
    const deleteSystemSurgeryArrangement = useSelector(state => state.scheduleSurgery.deleteSystemSurgeryArrangement);

    useEffect(() => {
        if(bundleSelected && addSystemSurgeryRequirement){
            dispatch(getSystemRequirements(bundleSelected.id));
            dispatch(AddSystemSurgeryRequirementSuccess(null));
        }
        if(bundleSelected && deleteSystemSurgeryRequirement){
            dispatch(getSystemRequirements(bundleSelected.id));
            dispatch(deleteSystemSurgeryRequirementSuccess(null));
        }
        if(bundleSelected && addSystemSurgeryArrangemenRequirement){
            dispatch(getSystemSurgeryArrangement(bundleSelected.id));
            dispatch(AddSystemSurgeryArrangemenRequirementSuccess(null));
        }
        if(bundleSelected && deleteSystemSurgeryArrangement){
            dispatch(getSystemSurgeryArrangement(bundleSelected.id));
            dispatch(deleteSystemSurgeryArrangementSuccess(null));
        }
    }, [addSystemSurgeryRequirement, deleteSystemSurgeryRequirement, addSystemSurgeryArrangemenRequirement, deleteSystemSurgeryArrangement])


    useEffect(() => {
        if(listSystemRequirements){
            setSystemsRequeriments(listSystemRequirements)
        }
    }, [listSystemRequirements])

    useEffect(() => {
        if(ProductList){
            setListProducts(bundleSelected && ProductList.filter( el => el.productCode !== bundleSelected.product.productCode ));
        }

    }, [ProductList])

    useEffect(() => {
        if(bundleSelected){
            dispatch(getProducts(0, 10, true));
            dispatch(getSystemRequirements(bundleSelected.id));
            dispatch(getSystemSurgeryArrangement(bundleSelected.id));
            
        }
    }, [bundleSelected])
    
    useEffect(() => {
        return () => {
            dispatch(getSystemsSucess([]));
            dispatch(searchRequireProductsSuccess(null));
            dispatch(searchOptionalProductsSuccess(null));
            dispatch(searchSystemSuccess(null));
            dispatch(getProductsSuccess([]));
            dispatch(getSystemRequirementsSuccess(null));
            dispatch(getSystemSurgeryArrangementSuccess(null));
        }
    }, [])

    return (
        <div className="container_FactoryMaterialBundles">
            <SubNavBarComponent title={'Materiales'} searchActive={false} />
            <div className="container_FactoryMaterialBundles_Components">
                <FactoryMaterialBundles bundleSelected={bundleSelected} setBundleSelected={setBundleSelected} />
                {
                    bundleSelected &&
                    <FactoryMaterialListGeneral bundleSelected={bundleSelected} listProducts={listProducts} systemsRequeriments={systemsRequeriments} tabActive={tabActive} setTabActive={setTabActive} />
                }
                {
                    bundleSelected &&
                    <FactoryMaterialItemsOfSystem listItems={systemsRequeriments} tabActive={tabActive} setTabActive={setTabActive}  />
                }
                {
                    bundleSelected &&
                    <FactoryMaterialArrangementList  arrangementList={systemSurgeryArrangement} bundleSelected={bundleSelected} />
                }
                    
            </div>
        </div>
    )
}
