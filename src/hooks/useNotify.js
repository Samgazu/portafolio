import { before } from 'lodash';
import React from 'react'
import { toast } from 'react-toastify';
import moment from 'moment';
import shortid from "shortid";
import { useNotifyAdd } from './useNotifyAdd';

export const useNotify = ( payload ) => {

    console.log('payload',payload)

    let data = payload.data.ContentData.replace(new RegExp("}|{|\\\"", "g"), "").split(",").reduce((obj, keyValue) => {
        //console.log(keyValue);
        const [key, value] = keyValue.split(":");
        // console.log(key)
        obj = {
            ...obj,
            [key]: value
        }
        return obj;
    }, {});


    console.log('data',data)

    switch (data.NotificationAction && data.NotificationAction) {

        case "1":
            toast.info("Nuevo mensaje en " + data.Title, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            break;

        case "2":
            toast.info(payload.data.title, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;

        case "3":
            toast.info(payload.data.title, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            break;
    }

    useNotifyAdd(data);

}