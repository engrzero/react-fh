
describe('Pruebas en <DemoComponent />', () => {
    // Terminal para instalar metodos de pruebas: 
    // yarn add -D @types/jest
    
    test('Esta prueba no debe de fallar', () => {
        
        // 1. Inicialización
        const message1 = 'Hola Mundo';
        
        // 2. Estimulo - trim quita espacio al inicio y final del mensaje
        const message2 = message1.trim();
        
        // 3. Observar el comportamiento... esperado
        expect ( message1 ).toBe( message2 );
    })
})
