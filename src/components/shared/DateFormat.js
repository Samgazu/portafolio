
export const DateFormat = (date) => {
    const getDateToShow = date.split('T')[0].split('-');
    const newDateToShow = new Date(getDateToShow[0],(getDateToShow[1] - 1), getDateToShow[2]);
    /* let dias = ["Lunes", 
                "Martes", 
                "Miercoles", 
                "Jueves", 
                "Viernes", 
                "Sabado",
                "Domingo"]; */

                let dias = ["Domingo", 
                "Lunes", 
                "Martes", 
                "Miercoles", 
                "Jueves", 
                "Viernes",
                "Sabado"];
    let meses = [   
                    "Enero", 
                    "Febrero",  
                    "Marzo", 
                    "Abril",
                    "Mayo",
                    "Junio",   
                    "Julio",  
                    "Agosto",
                    "Septiembre",  
                    "Octubre",   
                    "Noviembre",  
                    "Diciembre"
                ];

        let dates = new Date(newDateToShow);
        let fechaNum = newDateToShow.getDate();
        let mes_name = newDateToShow.getMonth();
                
    return `${dias[dates.getDay()]} ${fechaNum} ${meses[mes_name]} de ${dates.getFullYear()}`;
}


export const handleGetHour = (hourToSchedule) => {
    const time = [...hourToSchedule].slice((hourToSchedule.indexOf('T')+1), (hourToSchedule.indexOf('T') + 6)).join('');
    if( Number([...time].slice(0,2).join('')) < 12 ){
        return `${time} AM`;
    }
    return `${time} PM`;
}
