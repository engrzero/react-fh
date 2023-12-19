import { getSaludo } from "../../src/base-pruebas/02-template-string";
// terminal : 
// yarn add --dev babel-jest @babel/core @babel/preset-env
describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe de retornar "Hola Aldayr"', () => {
        const name = 'Aldayr';
        const message = getSaludo( name );

        expect ( message ).toBe(`Hola ${ name }`)
    });
});