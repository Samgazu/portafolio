import moment from 'moment';
import shortid from "shortid";

export const useNotifyAdd = (data) => {
    let notificaciones = {
        Notificacion: [
            {
                uid: shortid.generate(),
                NotificationAction: data.NotificationAction,
                AppointmentId: data.AppointmentId,
                ChatGroupId: data.ChatGroupId,
                Title: data.Title,
                Message: data.Body,
                Estado: true,
                Tiempo: moment().format(),
            },
        ]
    };

    const local = getNewNotification("Newnotificacion");

    if (local && local.length > 0) {
        let notificaciones1 = [...notificaciones.Notificacion, ...local,];
        localStorage.setItem("Newnotificacion", JSON.stringify(notificaciones1));
    } else {
        localStorage.setItem("Newnotificacion", JSON.stringify(notificaciones.Notificacion));
    }
}

const getNewNotification = (valor) => {
    let newNotification = [];
    if (localStorage.getItem(valor)) {
        newNotification = JSON.parse(localStorage.getItem(valor));
    }

    return newNotification;
}
