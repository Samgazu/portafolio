export default async function ({partialUrl, method,body, headers=null, state}) {
    // Aca hay que validar que el token no este vencido
    return fetch(`${window.publicUrl}${partialUrl}`, {
        method,
        headers: headers ? headers : state.headers,
        body: method === "GET" ? null : JSON.stringify({
            ...state.body,
            ...body,
        }),
    });
}