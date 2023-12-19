import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // Uso de toEqual o toStricEqual cuando se comparan 
        // objetos que apuntan a valores de memoria diferentes.
        // A diferencia de los primitivos en javascript que comparan su valor
        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
     
        const name = 'Aldayr';

        const user = getUsuarioActivo( name )

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});


