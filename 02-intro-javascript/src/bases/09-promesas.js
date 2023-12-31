import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // importar el
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         //reject( 'Nose pudo encontrar el héroe' )
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
           
            const heroe = getHeroeById( id );
            
            if ( heroe )
                resolve( heroe );
            else {
                reject( 'Nose pudo encontrar el héroe' )
            }
        }, 2000);
    });
    
}
getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );
