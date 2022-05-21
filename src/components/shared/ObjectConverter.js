
export const ObjectConverter = (elementToConvert) => {
    let createObject = [...elementToConvert];
    createObject.pop();
    createObject.shift();
    createObject = createObject.join('');
    createObject = createObject.split(',');
    const newObject = {};
    createObject.forEach( el => {

        newObject[[...el].slice(el.indexOf('"')+1, el.indexOf(':')-1).join('')] =
        [...el].slice(((el[[...el].indexOf(':')+1] !== '"') ? el.indexOf(':') + 1 : el.indexOf(':') + 2), (el[[...el].indexOf(':')+1] !== '"') ? el.length : el.lastIndexOf('"')).join('');

    })
    return newObject;
}


export const StringConverter = ( stringToConver ) => {
    // @CS 2600-5-40|EA15227502|125000782|2020/07/31 Formato escaneo
    if([...stringToConver].some(el => el === '@')){
        return String([...stringToConver].slice(stringToConver.indexOf('@')+1, stringToConver.indexOf('|')).join(''));
    }
    return null;
}
