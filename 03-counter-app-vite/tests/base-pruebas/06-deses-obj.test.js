import { getUsContext, persona } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('getUsContext debe retornar un objeto', () => {
    // Llama a getUsContext y pásale un objeto con las propiedades esperadas
    const context = getUsContext(persona);

    // Crea un objeto con las propiedades esperadas
    const testContext = {
      nombreClave: persona.clave,
      anios: persona.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    // Realiza la comparación
    expect(testContext).toEqual(context);
  });
});
