

const activo = true;

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
//Para No asignar nada en caso sea falso
//const mensaje = ( activo ) ? 'Activo' : null;
const mensaje = activo && 'Activo';
console.log(mensaje);