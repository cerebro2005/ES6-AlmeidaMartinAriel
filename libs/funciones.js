const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
export const obtenerPcias = async () => {
    try {
        
        await retrasar(1800);
    
        const consulta = await fetch('./databases/provincias.json');
        const provincias = await consulta.json();
        return provincias;
    } catch (error) {
        throw Error('Error al cargar las provincias');
    }

}

// Función que retorna los datos de departamentos
export const obtenerDptos= async() =>{
    try {
        await retrasar(1391);
    
        const consulta = await fetch('./databases/departamentos.json');
        const departamentos = await consulta.json();
        return departamentos;
    } catch (error) {
        throw Error('Error al cargar Los Departamentos');
    }
}

// Función que retorna los datos de localidades
export const obtenerLocalidades = async () =>{
    try {
        
        await retrasar(900);    
        const consulta = await fetch('./databases/localidades.json');
        const localidades = await consulta.json();
    return localidades;
    } catch (error) {
        throw Error('Error al cargar las Localidades');
    }
}

